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
			let oldGame = this.game.copy();
			let gameCopy = this.game.copy();
			gameCopy.players[1].hand.push(gameCopy.deck.shift()); // add card to hand
			gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
			// Add change to history and update game
			this.gameService.update(oldGame, gameCopy);
			this.getGame();
			this.gameService.selected = null;
			this.gameService.selIndex = null;
		}
	}

	playToField() {
		if (this.gameService.selected) {		
			// Play for points
			var oldGame = this.game.copy();
			var gameCopy = this.game.copy();
			if (this.gameService.selected.rank <= 10) {
				// Move card to points
				gameCopy.player.points.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
				gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);

				// this.gameService.botBrain.decideLegalMoves(this.gameService.game);
				
			// Play face card
			} else if (this.gameService.selected.rank == 12 || this.gameService.selected.rank == 13) {
				// var oldGame = this.game.copy();
				// var gameCopy = this.game.copy();
				gameCopy.player.faceCards.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
				gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);

				
			}
			
			// Update game
			this.gameService.update(oldGame, gameCopy);
			this.getGame();

			// Delete selection
			this.gameService.selected = null;
			this.gameService.selIndex = null;
		}
	}

	targetPoint(card, index) {
		// Scuttle
		var gameCopy = this.game.copy();
		let oldGame = this.game.copy();
		if (this.gameService.selected.rank <= 10 && this.gameService.selected.rank > card.rank || (this.gameService.selected.rank == card.rank && this.gameService.selected.suit > card.suit)) {
			gameCopy.scrap = gameCopy.scrap.concat(gameCopy.bot.points[index].jacks);
			gameCopy.bot.points[index].jacks = [];
			gameCopy.scrap.push(gameCopy.bot.points.splice(index, 1)[0]);
			gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);

			gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);


		} else if (this.gameService.selected.rank == 11 && this.gameService.game.bot.numQueens == 0) {
			gameCopy.bot.points[index].jacks.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
			gameCopy.player.points.push(gameCopy.bot.points.splice(index, 1)[0]);
			gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
		}
			// Update game
			this.gameService.update(oldGame, gameCopy);
			this.getGame();

			// Delete selection
			this.gameService.selected = null;
			this.gameService.selIndex = null;

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
