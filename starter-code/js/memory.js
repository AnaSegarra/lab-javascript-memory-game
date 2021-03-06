class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
	}

	shuffleCards() {
		if (!this.cards) return undefined;

		for (let i = 0; i < this.cards.length; i++) {
			let j = Math.floor(Math.random() * i);
			let card = this.cards[i];
			this.cards[i] = this.cards[j];
			this.cards[j] = card;
		}
		return this.cards;
	}

	checkIfPair(card1, card2) {
		this.pairsClicked++;
		return card1 === card2 ? (this.pairsGuessed++, true) : false;
	}

	isFinished() {
		return this.pairsGuessed === this.cards.length / 2;
	}
}
