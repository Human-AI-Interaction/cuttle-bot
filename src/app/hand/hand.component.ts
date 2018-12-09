import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { Card } from '../card';
import { GameService } from '../game.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
	@Input() player: Player;
	constructor(private gameService: GameService) { }

	get selected() {
		return this.gameService.selected;
	}
	set select(card) {
		this.gameService.selected = card;
	}

	clickCard(index) {
		// alert(index);
		if (this.player.hand[index] != this.selected) {
			this.select = this.player.hand[index];
			this.gameService.selIndex = index;
		} else {
			this.select = null;
			this.gameService.selIndex = null;
		}
	}

	ngOnInit() {
	}

}
