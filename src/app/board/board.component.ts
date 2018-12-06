import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	game: Game;
	getGame() {
		this.game = this.gameService.game;
	}

	draw() {
		// Check if it's your turn
		if (this.game.turn % 2 == 1) {
			// Check if you're under the hand limit
			if (this.game.player.hand.length <= 8) {
				// let gameCopy = JSON.parse(JSON.stringify(this.game)); // copy game
				let gameCopy = this.game.copy();
				gameCopy.players[1].hand.push(gameCopy.deck.shift()); // add card to hand
				gameCopy.turn++; // increment turn

				// Add change to history and update game
				this.gameService.update(gameCopy);
				this.getGame();
			}
		}
	}

	undo() {
		console.log("undoing");
		this.gameService.undo();
		this.getGame();
	}

	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.getGame();
	}

}
