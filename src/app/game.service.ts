import { Injectable } from '@angular/core';
import { Game } from './game';
import { Card } from './card';
import { Bot } from './bot';
import { game } from './mock_game'; 

@Injectable({
  providedIn: 'root'
})

export class GameService {
	history: Array<Game>;
	botBrain: Bot;
	selected: Card;
	selIndex: number;
	validTargets: Card[];
	gameCopy: Game;
	oldGameCopy: Game;
	chooseScrap: boolean; //player is playing a 3
	chooseDeck: boolean; //player is playing a 7


	get legalMoves() {
		let moves = [];
		this.validTargets = [];
		if (this.selected) {
			switch (this.selected.rank) {
				case 1:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					moves.push("field");
					moves.push("scrap");
					// Determine legal scuttles
					this.game.bot.points.forEach(card => {
						if (card.rank < this.selected.rank || (card.rank == this.selected.rank && card.suit <= this.selected.suit) ) {
							// Add point to list of scuttles
							this.validTargets.push(card);
						}
					});
					break;

				case 2:
					moves.push("field");
					// Jack targets
					this.game.bot.points.forEach(card => {
						if(card.jacks.length >= 1 && (this.game.bot.numQueens == 0 || (this.game.bot.numQueens == 1 && card.rank == 12))){
							this.validTargets.push(card.jacks[card.jacks.length - 1]);
						}
					});
					// King and Queen targets
					this.game.bot.faceCards.forEach(card => {
						if (this.game.bot.numQueens == 0 || (this.game.bot.numQueens == 1 && card.rank == 12)) {
 							this.validTargets.push(card);
						}
					});
					break;
				case 9:
					moves.push("field");
					// Determine legal scuttles
					this.game.bot.points.forEach(card => {
						if (card.rank < this.selected.rank || (card.rank == this.selected.rank && card.suit <= this.selected.suit) ) {
							// Add point to list of scuttles
							this.validTargets.push(card);
						}
					});

					// Jack targets
					this.game.bot.points.forEach(card => {
						if(card.jacks.length >= 1){
							this.validTargets.push(card.jacks[card.jacks.length - 1]);
						}
					});
					// King and Queen targets
					this.game.bot.faceCards.forEach(card => {
						if (this.game.bot.numQueens == 0 || (this.game.bot.numQueens == 1 && card.rank == 12)) {
							this.validTargets.push(card);
						}
					});
					break;

				case 8:
					// Determine legal scuttles
					this.game.bot.points.forEach(card => {
						if (card.rank < this.selected.rank || (card.rank == this.selected.rank && card.suit <= this.selected.suit) ) {
							// Add point to list of scuttles
							this.validTargets.push(card);
						}
					});
					moves.push("field");
					break;
				case 10:
					// Determine legal scuttles
					this.game.bot.points.forEach(card => {
						if (card.rank < this.selected.rank || (card.rank == this.selected.rank && card.suit <= this.selected.suit) ) {
							// Add point to list of scuttles
							this.validTargets.push(card);
						}
					});
					moves.push("field");
					break;
				case 11:
					if (this.game.bot.numQueens < 1) {
						this.game.bot.points.forEach(card => {
							this.validTargets.push(card);
						});
					} 
					break;
				case 12:
				case 13:
					moves.push("field");
					break;
			}
		}
		return moves;
	}

	// Current game is the last in the history
	get game() {
		return this.history[this.history.length - 1];
	}

	update(oldGame: Game, newGame: Game) {
		console.log(newGame);
		this.history.push(newGame);

		if (this.game.player.isWinner) {
			alert("You won! Way to go!");
		} else {
			const suggestion = this.botBrain.suggestMove(oldGame, newGame);
			if (suggestion) alert(suggestion);
		}
		if (this.game.bot.isWinner) {
			// alert("Aww, you lost! Nice try.");
		}		
	} 

	undo() {
		if (this.history.length > 1) {
			this.history.pop();
		} else {
			alert("We are back at the beginning of the game! Try making a move");
		}
	}

	constructor() {
		this.history = new Array<Game>();
		this.validTargets = new Array<Card>();
		this.history.push(game);
		this.selIndex = null;
		this.selected = null;
		this.botBrain = new Bot();
		this.chooseScrap = false;
		this.chooseDeck = false;
	}
}