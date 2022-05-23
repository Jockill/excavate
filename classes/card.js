class Card {
	constructor(number, family) {
		this.number = number;
		this.family = family;
		if (family == SPADE || family == CLUB)
			this.color = BLACK;
		else if (family == HEART || family == DIAMOND)
			this.color = RED;
		else
			this.color = WHITE;
	}
}
