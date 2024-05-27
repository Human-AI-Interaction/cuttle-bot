export class Card {
	suit: number;
	rank: number;
	jacks: Card[];

	get img(): string {
		return `card-${this.suit}-${this.rank}.svg`;
	}

	get faceImg(): string {
		if (this.rank == 8) {
			switch(this.suit) {
				case 0:
					return 'glasses-clubs.png';
				case 1:
					return 'glasses-diamonds.png';
				case 2:
					return 'glasses-hearts.png';
				case 3:
					return 'glasses-spades.png';
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