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
	get numQueens() {
		let res = 0;
		this.faceCards.forEach(card => {
			if (card.rank == 12) res++;
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
	get remainingPointsNeededToWin() {
		let res = 21;
		switch (this.numKings) {
			case 0:
				res = 21;
				break;
			case 1:
				res = 14;
				break;
			case 2:
				res = 10;
				break;
			case 3:
				res = 7;
				break;
			case 4:
				res = 5;
				break;
		}
		res -= this.pointTotal;
		return res;
	}
	get couldWinWithKing() {
		let res = false;
		switch (this.numKings) {
			case 0:
				if (this.pointTotal >= 14) res = true;
				break;
			case 1:
				if (this.pointTotal >= 10) res = true;
				break;
			case 2:
				if (this.pointTotal >= 7) res = true;
				break;
			case 3:
				if (this.pointTotal >= 5) res = true;
				break;
		}
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