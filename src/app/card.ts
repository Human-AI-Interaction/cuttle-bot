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
				return `${this.rank_name} of Clubs`;
				// break;
			case 1:
				return `${this.rank_name} of Diamonds`;
				// break;
			case 2:
				return `${this.rank_name} of Hearts`;
				// break;
			default:
				return `${this.rank_name} of Spades`;
				// break;
		}
	}

	get rank_name(): string {
		switch (this.rank) {
			case 1:
				return 'Ace';
			case 11:
				return 'Jack';
			case 12:
				return 'Queen';
			case 13:
				return 'King';
			default:
				return this.rank.toString();
		}
	}

	constructor(suit: number, rank: number) {
		this.suit = suit;
		this.rank = rank;
		this.jacks = new Array<Card>();
	}
}