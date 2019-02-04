import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-scrap-view',
  templateUrl: './scrap-view.component.html',
  styleUrls: ['./scrap-view.component.css']
})
export class ScrapViewComponent implements OnInit {

	chooseCard(index) {
		let gameCopy = this.gameService.gameCopy.copy();
		let oldGame = this.gameService.oldGameCopy.copy();
		// Move chosen card to player's hand
		gameCopy.player.hand.push(gameCopy.scrap.splice(index, 1)[0]);
		gameCopy.scrap.push(gameCopy.oneOff);
		// Clear out temp data
		gameCopy.oneOff = null;
		this.gameService.gameCopy = null;
		this.gameService.oldGameCopy = null;
		this.gameService.chooseScrap = false;
		// Make bot move
		gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
		// Update game
		this.gameService.update(oldGame, gameCopy);
	}


	constructor(public gameService: GameService) { }

	ngOnInit() {
	}

}
