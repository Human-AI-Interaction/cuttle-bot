import { Injectable } from '@angular/core';
import { Game } from './game';
import { game } from './mock_game'; 

@Injectable({
  providedIn: 'root'
})

export class GameService {
	history: Array<Game>;

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
	}
}