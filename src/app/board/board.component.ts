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
		// Check if it's your turn
		if (this.game.turn % 2 == 1) {
			// Check if you're under the hand limit
			if (this.game.player.hand.length <= 8) {
				let gameCopy = this.game.copy();
				gameCopy.players[1].hand.push(gameCopy.deck.shift()); // add card to hand
				gameCopy.turn++; // increment turn
				gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
				// Add change to history and update game
				this.gameService.update(gameCopy);
				this.getGame();
				this.gameService.selected = null;
				this.gameService.selIndex = null;
			}
		}
	}

	playToField() {
		if (this.gameService.selected) {		
			if (this.game.turn % 2 == 1)  {
				// Play for points
				if (this.gameService.selected.rank <= 10) {
					let gameCopy = this.game.copy();

					// Move card to points
					gameCopy.player.points.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
					gameCopy.turn++;
					gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
					// Update game
					this.gameService.update(gameCopy);
					this.getGame();
					// Delete selection
					this.gameService.selected = null;
					this.gameService.selIndex = null;
					// this.gameService.botBrain.decideLegalMoves(this.gameService.game);
				// Play face card
				} else if (this.gameService.selected.rank == 12 || this.gameService.selected.rank == 13) {
					
				}
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
