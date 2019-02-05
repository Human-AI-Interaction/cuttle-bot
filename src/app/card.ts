export class Card {
	suit: number;
	rank: number;
	jacks: Card[];

	get img(): string {
		return `card_${this.suit}_${this.rank}.png`;
	}

	get faceImg(): string {
		if (this.rank == 8) {
			switch(this.suit) {
				case 0:
					return 'Glasses_Clubs.jpg';
				case 1:
					return 'Glasses_Diamonds.jpg';
				case 2:
					return 'Glasses_Hearts.jpg';
				case 3:
					return 'Glasses_Spades.jpg';
			}
		} else {
			return `card_${this.suit}_${this.rank}.png`;		
		}
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
		this.jacks = new Array<Card>();
	}
}