class Deck {
	constructor() {
		this.generate();
		this.cardsAmount = this.cards.length;
	}

	// Genere un deck ordonné
	generate()
	{
		this.cards = [];
		let card = new Card(-1, -1);

		// Les couleurs vont de 1 à 4 (cst.js)
		for (let family=1; family<=4; family++)
		{
			for (let num=1; num<=13; num++)
			{
				card = new Card(num, family);
				this.cards[this.cards.length] = card;
			}
		}
	}

	scramble()
	{
		let newDeck = [];
		let card = new Card(-1, -1);
		let place = -1;

		for (let i=0; i<this.cards.length; i++)
		{
			// choisir une carte
			card = cards[randInt(0, this.cards.length)];
			// trouver une place où la mettre dans le deck
			place = randInt(0, this.cards.length);
			while (newDeck[place] == undefined)
				(place++)%this.cards.length;
			newDeck[place] = card;
		}

		this.cards = newDeck;
	}
}
