function filterCountries(filter) {
	let temp_countries_object = {};

	for (i in countries) {
		if (filter == "All") {
			temp_countries_object[i] = countries[i];
		} else {
			if (countries[i].type.includes(filter))
				temp_countries_object[i] = countries[i];
		}

		if (filter == "Unrecognized") {
			if (!countries[i].is_recognized)
				temp_countries_object[i] = countries[i];
		}
	}
	return temp_countries_object;
}

function updateCountries() {
	let flag_cards = {};
	let temp_countries_object = filterCountries(window.localStorage.type);
	for (i in temp_countries_object) {
		flag_cards[i] = temp_countries_object[i];
	}
	return flag_cards;
}

class Card {
	constructor() {
		this.element = this.createCardElement();
	}

	createCardElement() {
		let card = document.createElement("div");
		card.classList.add("flag_card");
		// дальше по коду сюда всегда заливается новый контент
		// значит, если остался этот, то произошла ошибка
		card.innerHTML = `<span class="flag_shortname">ERROR</span>`;
		lazyload.update();
		// штобы карточки открывались
		card.addEventListener("click", (event) => {
			toggleCard(card.querySelector(".flag_index").innerText);
			lazyload.update();
		});
		return card;
	}

	setContent(newContent) {
		this.element.innerHTML = newContent;
	}

	appendTo(container) {
		container.appendChild(this.element);
	}
}

class CardsContainer {
	constructor() {
		this.container = document.getElementById("flags");
		this.container.innerHTML = "";
		window.addEventListener("scroll", this.checkLoadMore.bind(this));
	}

	fill(totalCards, maxCards) {
		this.maxCards = maxCards;
		this.loadedCards = 0;
		this.totalCards = totalCards;
		this.loadInitialCards();
	}

	loadInitialCards() {
		this.checkLoadMore();
	}

	createCards() {
		let cardsToLoad = Math.min(
			this.totalCards - this.loadedCards,
			this.maxCards
		);
		let countries_array = updateCountries();
		let currentLang = getLanguage();
		for (let i = 0; i < cardsToLoad; i++) {
			let card = new Card();
			// конструкция дикая, согласен
			// getCardSample берёт на вход код страны, а мы в цикле идём по его номеру — приходится адаптировать
			card.setContent(
				getCardSample(
					Object.keys(countries_array)[this.loadedCards + i],
					currentLang
				)
			);
			card.appendTo(this.container);
		}
		this.loadedCards += this.maxCards;
		lazyload.update();
	}

	checkLoadMore() {
		let rect = this.container.getBoundingClientRect();
		if (
			this.loadedCards < this.totalCards &&
			rect.bottom <= window.innerHeight * 2
		) {
			this.createCards();
		} else {
			return 0;
		}
	}

	clear() {
		this.container.innerHTML = "";
	}
}
