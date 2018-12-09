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

	get legalMoves() {
		let moves = [];
		if (this.selected) {
			console.log(this.selected);
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
						// if (card.rank < this.gameService.selected.rank || (card.rank == this.gameService.selected.rank && card.suit <= this.gameService.selected.suit) ) {
						// 	// Add point to list of scuttles
						// }
					});
					break;

				case 2:
				case 9:
					moves.push("field");
					break;
				case 8:
					moves.push("field");
					break;
				case 10:
					moves.push("field");
					break;
				case 11:
					break;
				case 12:
				case 13:	
					break;
			}
		}
		return moves;
	}

	// Current game is the last in the history
	get game() {
		return this.history[this.history.length - 1];
	}

	update(game: Game) {
		this.history.push(game);
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
		this.history.push(game);
		this.selIndex = null;
		this.selected = null;
		this.botBrain = new Bot();
	}
}