export class Card {
	suit: number;
	rank: number;
	get img(): string {
		return `card_${this.suit}_${this.rank}.png`;
	}
	constructor(suit: number, rank: number) {
		this.suit = suit;
		this.rank = rank;
	}
}