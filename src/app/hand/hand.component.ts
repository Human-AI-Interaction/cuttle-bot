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

	showTooltip: Array<boolean>;
	tooltip: string;
	@Input() player: Player;
	constructor(public gameService: GameService) { 
		this.tooltip = '';
		this.showTooltip = [];
	}

	get selected() {
		return this.gameService.selected;
	}
	set select(card) {
		this.gameService.selected = card;
	}

	get hasGlasses() {
		let res = false;
		this.gameService.game.player.faceCards.forEach(card => {
			if (card.rank == 8) res = true;
		});
		return res;
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

	displayTooltip(index) {

			let tooltips = {
				"1": "Destroy all Point Cards in play.",
				"2": "On Turn: Destroy any non-point card. On Opponent’s Turn: Cancels the action of a card your opponent plays; cannot be used on Point Cards.",
				"3": "Look through the Scrap Pile and pick a card to add to your hand. You must show your opponent the card.",
				"4": "Make your opponent discard two cards of their choosing. If your opponent only has one card, you can still use a 4 on them.",
				"5": "Discard one card, and draw up to three.",
				"6": "Destroy all Face Cards in play.",
				"7": "Reveal the top two cards of the deck and choose one to play. The other card is put back on top of the deck.",
				"8": "(Not available) Place an 8 sideways and choose one opponent. The opponent must reveal their hand to you whenever you ask. The 8 is considered a Face Card when played in this fashion.",
				"9": "Return any card in play back to the owner’s hand. The player with the returned card cannot play it for their following turn.",
				"10": "Used for points.",
				"11": "Steal a Point Card or opposing Jack in play.",
				"12": "Your other cards cannot be affected by 2’s, 9’s, or Jack’s. Queens do not protect against scuttling. Having 2 Queens means you cannot be Jokered.",
				"13": "Reduces the amount of points you need to win. 1 King = 14 Points; 2 Kings = 10 Points; 3 Kings = 7 Points; 4 Kings = 5 Points",
				"14": ""
			}
			this.tooltip = tooltips[this.player.hand[index].rank.toString()];

			for (let i = 0; i < this.player.hand.length; i++) {
				this.showTooltip[i] = i === index ?  true : false;
			}

	}

	hideTooltip() {
		console.log("hiding tooltip");
		this.showTooltip = [];
		this.tooltip = '';
	}

	ngOnInit() {
	}

}
