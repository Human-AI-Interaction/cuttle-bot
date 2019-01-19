import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	showDeck: boolean;

	get gs() {
		return this.gameService;
	}

	get game() {
		return this.gameService.game;
	}


	draw() {
		// Check if you're under the hand limit
		if (this.game.player.hand.length < 8) {
			let oldGame = this.game.copy();
			let gameCopy = this.game.copy();
			gameCopy.players[1].hand.push(gameCopy.deck.shift()); // add card to hand
			gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
			// Add change to history and update game
			this.gameService.update(oldGame, gameCopy);
			this.gameService.selected = null;
			this.gameService.selIndex = null;
		}
	}

	playToField() {
		if (this.gameService.selected) {
			var oldGame = this.game.copy();
			var gameCopy = this.game.copy();
			// Playing card from your hand
			if (!this.gameService.chooseDeck) {
				if (this.gameService.selected.rank <= 10) {
					// Move card to points
					gameCopy.player.points.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
				} else if (this.gameService.selected.rank == 12 || this.gameService.selected.rank == 13) {
					// Play face card
					gameCopy.player.faceCards.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);					
				}
			// Playing card from deck using a 7
			} else {
				if (this.gameService.selected.rank <= 10) {
					gameCopy.player.points.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
				} else if (this.gameService.selected.rank == 12 || this.gameService.selected.rank == 13) {
					gameCopy.player.faceCards.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
				}
				this.gameService.chooseDeck = false;
				gameCopy.scrap.push(this.game.oneOff);
				gameCopy.oneOff = null;
			}
			// Delete selection
			this.gameService.selected = null;
			this.gameService.selIndex = null;
			// Update game
			gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
			this.gameService.update(oldGame, gameCopy);
		}
	}

	targetPoint(card, index) {
		// Scuttle
		var gameCopy = this.game.copy();
		let oldGame = this.game.copy();
		// Playing card from hand
		if (!this.gameService.chooseDeck) {
			// Scuttling
			if (this.gameService.selected.rank <= 10 && this.gameService.selected.rank > card.rank || (this.gameService.selected.rank == card.rank && this.gameService.selected.suit > card.suit)) {
				gameCopy.scrap = gameCopy.scrap.concat(gameCopy.bot.points[index].jacks);
				gameCopy.bot.points[index].jacks = [];
				gameCopy.scrap.push(gameCopy.bot.points.splice(index, 1)[0]);
				gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
			// Playing Jack
			} else if (this.gameService.selected.rank == 11 && this.gameService.game.bot.numQueens == 0) {
				gameCopy.bot.points[index].jacks.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
				gameCopy.player.points.push(gameCopy.bot.points.splice(index, 1)[0]);
			} 
		// playing card from deck with 7
		} else {
			// Scuttling
			if (this.gameService.selected.rank <= 10 && this.gameService.selected.rank > card.rank || (this.gameService.selected.rank == card.rank && this.gameService.selected.suit > card.suit)) {
				gameCopy.scrap = gameCopy.scrap.concat(gameCopy.bot.points[index].jacks);
				gameCopy.bot.points[index].jacks = [];
				gameCopy.scrap.push(gameCopy.bot.points.splice(index, 1)[0]);
				gameCopy.scrap.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
			// Playing Jack
			} else if (this.gameService.selected.rank == 11 && this.gameService.game.bot.numQueens == 0) {
				gameCopy.bot.points[index].jacks.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
				gameCopy.player.points.push(gameCopy.bot.points.splice(index, 1)[0]);
			}
			gameCopy.scrap.push(gameCopy.oneOff);
			gameCopy.oneOff = null;
			gameCopy.selIndex = null;
			this.gameService.chooseDeck = false;
		}
		gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
		// Update game
		this.gameService.update(oldGame, gameCopy);

		// Delete selection
		this.gameService.selected = null;
		this.gameService.selIndex = null;

	}

	targetedOneOffFaces(card, index) {

		// not including eights yet
		var gameCopy = this.game.copy();
		let oldGame = this.game.copy();

		if (this.gameService.selected && [2, 9].indexOf(this.gameService.selected.rank) > -1) {
			switch (this.gameService.selected.rank) {
				case 2:
					gameCopy.scrap.push( gameCopy.bot.faceCards.splice(index, 1)[0]);
					gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);

					break;
				case 9:
					break;

			}
		}

		gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);

		this.gameService.update(oldGame, gameCopy);

			// Delete selection
		this.gameService.selected = null;
		this.gameService.selIndex = null;
	}

	targetedOneOffJack(card, index) {

		var gameCopy = this.game.copy();
		let oldGame = this.game.copy();

		console.log(card.rank);

		if (this.gameService.selected && [2, 9].indexOf(this.gameService.selected.rank) > -1 && card.jacks.length >= 1) {
			switch (this.gameService.selected.rank) {
				case 2:
					console.log("using 2 for targeted on off");
					gameCopy.scrap.push(gameCopy.bot.points[index].jacks.shift());

					gameCopy.player.points.push(gameCopy.bot.points[index]);
					gameCopy.bot.points.splice(index, 1);

					gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);

					break;
				case 9:
					break;

			}
			gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
		}
		this.gameService.update(oldGame, gameCopy);

			// Delete selection
		this.gameService.selected = null;
		this.gameService.selIndex = null;
	}

	untargetedOneOff() {
		if (this.gameService.selected && [1, 3, 4, 5, 6, 7].indexOf(this.gameService.selected.rank) > -1) {
			var gameCopy = this.game.copy();
			let oldGame = this.game.copy();
			let done = true;
			switch (this.gameService.selected.rank) {
				// Destroy all Points and attached jacks
				case 1:
					gameCopy.player.points.forEach(point => {
						console.log("scrapping: your" + point.name + ". Removed jacks:");
						gameCopy.scrap = gameCopy.scrap.concat(point.jacks);
						console.log(gameCopy.scrap);
						point.jacks = [];
						gameCopy.scrap.push(point);
					});
					gameCopy.player.points = [];

					gameCopy.bot.points.forEach(point => {
						console.log("scrapping bot's: " + point.name + ". Removed jacks:");
						gameCopy.scrap = gameCopy.scrap.concat(point.jacks);
						console.log(gameCopy.scrap);
						point.jacks = [];
						gameCopy.scrap.push(point);
					});
					gameCopy.bot.points = [];
					break;
				// Fetch one card from scrap pile
				case 3:
					this.gs.chooseScrap = true;
					done = false;
					break;
				case 4:
					gameCopy.scrap.push(gameCopy.bot.hand.pop());
					gameCopy.scrap.push(gameCopy.bot.hand.pop());
					console.log(gameCopy.scrap);
					const firstDiscard = gameCopy.scrap[gameCopy.scrap.length - 2].name;
					const secondDiscard = gameCopy.scrap[gameCopy.scrap.length - 1].name;
					alert(`Cuttle Bot discards the ${firstDiscard} and the ${secondDiscard}`);

					break;
				case 5:
					// gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
					gameCopy.player.hand.push(gameCopy.deck.shift());
					if (gameCopy.player.hand.length < 8) {
						gameCopy.player.hand.push(gameCopy.deck.shift());
					}
					break;
				case 6:
					gameCopy.player.faceCards.forEach(faceCard => {
						gameCopy.scrap.push(faceCard);
					});
					gameCopy.player.faceCards = [];

					gameCopy.bot.faceCards.forEach(faceCard => {
						gameCopy.scrap.push(faceCard);
					});
					gameCopy.bot.faceCards = [];

					// Remove jacks and determine which point cards must be exchanged
					let indicesToMove = [];
					gameCopy.player.points.forEach((point, index) => {
						if (point.jacks.length % 2 != 0) {
							indicesToMove.push(index);
						}
						gameCopy.scrap = gameCopy.scrap.concat(point.jacks);
						point.jacks = [];
					});
					// Switch any points from player to bot
					while (indicesToMove.length > 0) {
						var index = indicesToMove.pop();
						gameCopy.bot.points.push(gameCopy.player.points.splice(index, 1)[0]);
					}

					gameCopy.bot.points.forEach((point, index) => {
						if (point.jacks.length % 2 != 0) {
							indicesToMove.push(index);
						}
						gameCopy.scrap = gameCopy.scrap.concat(point.jacks);
						point.jacks = [];
					});
					// Switch any points from bot to player
					while (indicesToMove.length > 0) {
						var index = indicesToMove.pop();
						gameCopy.player.points.push(gameCopy.bot.points.splice(index, 1)[0]);
					}
					break;
				case 7:
					this.gs.chooseDeck = true;
					done = false;
					break;
				default:
					// code...
					break;
			}

			if (done) {
				// Move played card from hand to scrap
				gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
				// Bot move
				gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);


			}
			// If player needs to take further action (3's and 7's), store current gamestate as temp
			else {
				gameCopy.oneOff = gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0];
				this.gameService.gameCopy = gameCopy;
				this.gameService.oldGameCopy = oldGame;
			}

			// Update game
			this.gameService.update(oldGame, gameCopy);

			// Delete selection
			this.gameService.selected = null;
			this.gameService.selIndex = null;
		}
	}

	undo() {
		this.gameService.undo();
	}

	stackDeck(index) {
		this.game.deck.unshift(this.game.deck.splice(index, 1)[0]);
	}


	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.showDeck = false;
	}

}
