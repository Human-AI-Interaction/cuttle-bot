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
                possibleMoves.push(new Move("points", play_points_game_copy));

                // Check possible scuttles
                game.player.points.forEach((target, targetIndex) => {
                    if (card.rank > target.rank || (card.rank == target.rank && card.suit > target.suit)) {
                        // var scuttle_copy = cloneDeep(game);
                        // scuttle_copy.scrap.push(scuttle_copy.player.points.splice(targetIndex, 1)[0]); // Scrap player's point card
                        // scuttle_copy.scrap.push(scuttle_copy.bot.hand.splice(index, 1)[0]); // Scrap bot's scuttling card
                        // possibleMoves.push(scuttle_copy);
                    }
                });
            } 
            // Kings and Queens
            else if (card.rank == 12 || card.rank == 13) {

            }
            // Jacks
            else {

            }
        });
        let gameAfterBotMove = this.chooseMove(possibleMoves, game);
        return gameAfterBotMove;
    }
    // evaluating games
    evaluateGame(game: Game) {
        let score = game.bot.hand.length + game.bot.points.length + game.bot.faceCards.length
            - (game.player.hand.length + game.player.points.length + game.player.faceCards.length);
        return score;
    }

    // 
    evaluateMove(move: Move) {
        console.log("Evaluating move");
        console.log(move);
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
        console.log("choosing move from list");
        console.log(moves);
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

        console.log("found best move:");
        console.log(best_move);

        // this.makeMove(best_move, game);
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
                game.scrap.push(game.bot.hand.splice(move.index)[0]);
                game.scrap.push(game.player.hand.splice(move.target_index)[0]);
                break;
            case "oneOff":
            // A LOT!
                break;
            case "faceCard":
                game.bot.faceCards.push(game.bot.hand.splice(move.index, 1)[0])
                break;
        }

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