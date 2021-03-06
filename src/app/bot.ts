import { Game } from './game';
import { Move } from './move'
import { cloneDeep } from 'lodash';
// import { Game } from './game';

export class Bot {
	// looking one step ahead
	decideLegalMoves(game: Game) {
		let possibleMoves = [];

		// Draw
		if (game.bot.hand.length < 8 && game.deck.length > 0){
			let game_copy = cloneDeep(game);
			game_copy.bot.hand.push(game_copy.deck.shift());
			possibleMoves.push(new Move("draw", game_copy));
		}

		// Play cards to field
		game.bot.hand.forEach((card, index) => {
			// Number cards
			if (card.rank <= 10) {
				// Playing the card as points
				var play_points_game_copy = cloneDeep(game);
				play_points_game_copy.bot.points.push(play_points_game_copy.bot.hand.splice(index, 1)[0]);
				possibleMoves.push(new Move("points", play_points_game_copy, card, index));

				// Check possible scuttles
				game.player.points.forEach((target, targetIndex) => {
					if (card.rank > target.rank || (card.rank == target.rank && card.suit > target.suit)) {
						var scuttle_copy = cloneDeep(game);
						scuttle_copy.scrap = scuttle_copy.scrap.concat(target.jacks);
						scuttle_copy.player.points[targetIndex].jacks = [];
						scuttle_copy.scrap.push(scuttle_copy.player.points.splice(targetIndex, 1)[0]); // Scrap player's point card
						scuttle_copy.scrap.push(scuttle_copy.bot.hand.splice(index, 1)[0]); // Scrap bot's scuttling card
						possibleMoves.push(new Move("scuttle", scuttle_copy, card, index , target, targetIndex));
					}
				});
			} 
			// Kings and Queens
			else if (card.rank == 12 || card.rank == 13) {
				var play_face_copy = cloneDeep(game);
				play_face_copy.bot.faceCards.push(play_face_copy.bot.hand.splice(index, 1)[0]);
				possibleMoves.push(new Move("faceCard", play_face_copy, card, index));
			}
			// Jacks
			else  if (card.rank == 11) {
				if (game.player.numQueens == 0) {
					game.player.points.forEach((target, targetIndex) => {
						var play_jack_copy = cloneDeep(game);
						play_jack_copy.player.points[targetIndex].jacks.push(play_jack_copy.bot.hand.splice(index, 1)[0]);
						play_jack_copy.bot.points.push(play_jack_copy.player.points.splice(targetIndex, 1)[0]);
						possibleMoves.push(new Move("jack", play_jack_copy, card, index, target, targetIndex));
					});
				}
			}
		});
		let gameAfterBotMove = this.chooseMove(possibleMoves, game);
		return gameAfterBotMove;
	}
	// evaluating score of one game
	evaluateGame(game: Game) {
		let score = game.bot.hand.length + game.bot.pointTotal % 10  + game.bot.pointTotal/10 + game.bot.faceCards.length
			- (game.player.hand.length + game.player.pointTotal % 10 + game.player.pointTotal/10 + game.player.faceCards.length);
		if (game.playerWins) {score = -100; console.log("PLAYER COULD WIN");}
		if (game.botWins) score = 100;
		return score;
	}

	evaluateMove(move: Move) {
		let score = null;
		move.results.forEach(game => {
			let game_score = this.evaluateGame(game);

			if (score == null || game_score < score) {
				score = game_score;
			}
		});
		return score;
	}

	chooseMove(moves: Array<Move>, game: Game) {
		let highest_score = null;
		let high_index = null;

		moves.forEach((move, index) => {
			let move_score = this.evaluateMove(move);

			if (highest_score == null || highest_score < move_score) {
				highest_score = move_score;
				high_index = index;
			}
		});

		let best_move = moves[high_index];


		// let gameAfterBotMove = this.makeMove(best_move, game);

		// Alert player of bot's move
		const moveName = best_move.name;
		let announcement = "";

		switch (moveName) {
			case "draw":
				announcement = "Cuttle Bot Draws."
				break;
			case "points":
				announcement = `Cuttle Bot plays the ${best_move.card.name} for points`;
				break;
			case "faceCard":
				announcement = `Cuttle Bot plays the ${best_move.card.name}`;
				break;
			case "scuttle":
				announcement = `Cuttle Bot scuttles your ${best_move.target.name} with its ${best_move.card.name}`;
				break;
			case "jack":
				announcement = `Cuttle Bot steals your ${best_move.target.name} with its ${best_move.card.name}`;
				break;
			case "oneOff": 
				announcement = `Cuttle Bot plays the ${best_move.card.name} for one-off effects`;
				break;
			default:
				// code...
				break;
		}

		alert(announcement);

		let gameAfterBotMove = best_move.game;
		return gameAfterBotMove;

	}

	makeMove(move: Move, game: Game) {
		switch (move.name) {
			case "draw":
				game.bot.hand.push(game.deck.shift());
				break;
			case "points":
				game.bot.points.push(game.bot.hand.splice(move.index, 1)[0]);
				break;
			case "scuttle":
				console.log("Bot is scuttling");
				game.scrap.push(game.bot.hand.splice(move.index)[0]);
				console.log("Bot's card scrapped");
				console.log(game.scrap);
				game.scrap.push(game.player.hand.splice(move.target_index)[0]);
				console.log("your card scrapped");
				console.log(game.scrap);
				break;
			case "oneOff":
			// A LOT!
			// How do I implement one-off here???
				break;
			case "faceCard":
				game.bot.faceCards.push(game.bot.hand.splice(move.index, 1)[0])
				break;
		}
		return game;
	}

	suggestMove(initialGame: Game, gameAfterPlayerMove: Game) {
		let res = null;
		// Only consider suggesting move if player didn't win
		if (!gameAfterPlayerMove.player.isWinner) {
			let betterMovePriority = 0;
			// Check for better defensive moves if player lost
			if (gameAfterPlayerMove.bot.isWinner) {
				// Assume player didn't have a better move unless we find a way to stop the bot
				res = "Dang, you lost! Nice try. There was actually nothing you could have done better on that last turn. Try rewinding a few turns back if you want to see how the game could have gone, or just refresh the page to start over.";
				initialGame.player.hand.forEach(card => {
					// Check for potential scuttles and jack steals
					initialGame.bot.points.forEach(target => {
						if ((card.rank <= 10 && card.rank > target.rank || (card.rank == target.rank && card.suit > target.suit)) && betterMovePriority == 0) {
							res = "Dang, you lost! You might have been able to stop the bot if you scuttled last turn. Try rewinding and playing that turn over!";
							betterMovePriority = 1;
						}
						else if (card.rank == 11 && initialGame.bot.numQueens == 0 && betterMovePriority <= 1) {
							res = "Dang, you lost! You might have been able to stop the bot if you stole its points with a jack last turn. Try rewinding and playing that turn over!";
							betterMovePriority = 2;
						}
					});
				});
			}

			// Check for better offensive moves
			initialGame.player.hand.forEach((card, index) => {
				if (card.rank <= 10) {
					if (initialGame.player.remainingPointsNeededToWin < card.rank && betterMovePriority == 0) {
						res = "Psst! You actually could have won on that turn if you played differently. Consider rewinding and playing points";
						betterMovePriority = 1;
					}
				}
				else if (card.rank == 13) {
					if (initialGame.player.couldWinWithKing && betterMovePriority <= 1) {
						res = "Psst! You actually could have won on that last turn if you played differently. Consider rewinding and playing a king";
						betterMovePriority = 2;
					}
				}
				else if (card.rank == 11 && initialGame.bot.numQueens == 0 && betterMovePriority <= 2) {
					initialGame.bot.points.forEach(card => {
						if (card.rank >= initialGame.player.remainingPointsNeededToWin) {
							res = "Psst! You actually could have won on that last turn if you played differently. Considering rewinding and playing a jack";
							betterMovePriority = 3;
						}
					});
				}
			});

		}
		return res;
	} 

	constructor() {

	}
}



// switch (move.name) {
//     case 1:
//         break;
//     case 3:
//         break;
//     case 4:
//         break;  
//     case 5:
//         break;
//     case 6:
//     case 7:
//         moves.push("field");
//         moves.push("scrap");
//         // Determine legal scuttles
//         this.game.bot.points.forEach(card => {
//             // if (card.rank < this.gameService.selected.rank || (card.rank == this.gameService.selected.rank && card.suit <= this.gameService.selected.suit) ) {
//             // 	// Add point to list of scuttles
//             // }
//         });
//         break;

//     case 2:
//     case 9:
//         moves.push("field");
//         break;
//     case 8:
//         moves.push("field");
//         break;
//     case 10:
//         moves.push("field");
//         break;
//     case 11:
//         break;
//     case 12:
//     case 13:
//         break;