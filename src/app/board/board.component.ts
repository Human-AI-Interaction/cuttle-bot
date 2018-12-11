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

	get gs() {
		return this.gameService;
	}

	getGame() {
		this.game = this.gameService.game;
	}

	draw() {
		// Check if you're under the hand limit
		if (this.game.player.hand.length < 8) {
			let gameCopy = this.game.copy();
			gameCopy.players[1].hand.push(gameCopy.deck.shift()); // add card to hand
			gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
			// Add change to history and update game
			this.gameService.update(gameCopy);
			this.getGame();
			this.gameService.selected = null;
			this.gameService.selIndex = null;
		}
	}

	playToField() {
		if (this.gameService.selected) {		
			// Play for points
			if (this.gameService.selected.rank <= 10) {
				let gameCopy = this.game.copy();

				// Move card to points
				gameCopy.player.points.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
				gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
				console.log("Game after bot move in playToField (board component):");
				console.log(gameCopy);
				// Update game
				this.gameService.update(gameCopy);
				this.getGame();


				console.log("New game in board controller after updating gameService:");
				console.log(this.game);
				console.log("\n\n");

				// Delete selection
				this.gameService.selected = null;
				this.gameService.selIndex = null;
				// this.gameService.botBrain.decideLegalMoves(this.gameService.game);
			// Play face card
			} else if (this.gameService.selected.rank == 12 || this.gameService.selected.rank == 13) {
				
			}
		}
	}

	undo() {
		this.gameService.undo();
		this.getGame();
	}



	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.getGame();
	}

}
