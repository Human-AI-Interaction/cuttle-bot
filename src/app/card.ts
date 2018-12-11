export class Card {
	suit: number;
	rank: number;
	get img(): string {
		return `card_${this.suit}_${this.rank}.png`;
	}

	get name(): string {
		switch (this.suit) {
			case 0:
				return `${this.rank} of Clubs`;
				// break;
			case 1:
				return `${this.rank} of Diamonds`;
				// break;
			case 2:
				return `${this.rank} of Hearts`;
				// break;
			default:
				return `${this.rank} of Spades`;
				// break;
		}
	}
	constructor(suit: number, rank: number) {
		this.suit = suit;
		this.rank = rank;
	}
}