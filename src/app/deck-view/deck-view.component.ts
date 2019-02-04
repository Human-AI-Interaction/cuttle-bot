import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
@Component({
  selector: 'app-deck-view',
  templateUrl: './deck-view.component.html',
  styleUrls: ['./deck-view.component.css']
})
export class DeckViewComponent implements OnInit {

	get selected() {
		return this.gameService.selected;
	}

	clickDeckCard(index) {
		if (this.selected == this.gameService.game.deck[index]) {
			this.gameService.selected = null;
			this.gameService.selIndex = null;
		} else {
			this.gameService.selected = this.gameService.game.deck[index];
			this.gameService.selIndex = index;
		}
	}

	constructor(public gameService: GameService) { }

	ngOnInit() {
	}

}
