import { cloneDeep } from 'lodash';
import { Card } from './card';
import { Player } from './player';

export class Game {
	players: Player[];
	deck: Card[];
	scrap: Card[];
	// turn: number;

	////////////
	// Getters//
	////////////
	get bot() {
		return this.players[0];
	}
	get player() {
		return this.players[1];
	}
	get botWins() {
		return this.bot.isWinner;
	}
	get playerWins() {
		return this.player.isWinner;
	}

	/////////////
	// Methods //
	/////////////
	// Shuffles deck
	shuffle() {
		for (let i=this.deck.length - 1; i> 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
		}
	}

	copy() {
		return cloneDeep(this);
	}
	
	constructor() {
		this.deck = new Array<Card>();
		this.scrap = new Array<Card>();
		this.players = new Array<Player>();
		this.players.push(new Player(true)); //Bot goes first
		this.players.push(new Player(false)); //Human player second

		// Create deck
		for (let suit=0; suit<4; suit++) {
			for (let rank=1; rank<14; rank++) {
				this.deck.push(new Card(suit, rank));
			}
		}
		this.shuffle(); // Shuffle deck

		// Deal
		this.bot.hand.push(this.deck.shift()); //Extra card to player
		// Player gets 5 and goes first, Bot gets 6
		for (let i=0; i<5; i++) {
			this.players[0].hand.push(this.deck.shift());
			this.players[1].hand.push(this.deck.shift());
		}

	}
}