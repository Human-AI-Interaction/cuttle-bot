import { Card } from './card';

export class Player {
	isBot: Boolean;
	hand: Card[];
	points: Card[];
	faceCards: Card[];
	
	get score() {
		let res = 0;
		this.points.forEach(card => {
			res += card.rank;
		});
		return res;
	}
	get numKings() {
		let res = 0;
		this.faceCards.forEach(card => {
			if (card.rank == 13) res++;
		});
		return res;
	}
	get pointTotal() {
		let res = 0;
		this.points.forEach(card => {
			res += card.rank;
		});
		return res;
	}
	get isWinner() {
		let res = false;
		let score = this.score;
		let numKings = this.numKings;
		switch (numKings) {
			case 0:
				if (score >= 21) res = true;
				break;
			case 1:
				if (score >= 14) res = true;
				break;
			case 2:
				if (score >= 10) res = true;
				break;
			case 3:
				if (score >= 7) res = true;
				break;
			case 4:
				if (score >= 5) res = true;
				break;
		}
		return res;
	}

	constructor(isBot) {
		this.isBot = isBot;
		this.hand = new Array<Card>();
		this.points = new Array<Card>();
		this.faceCards = new Array<Card>();
	}
}