function calculateSettingsAsString({
	localStorageTheme,
	systemSettingDark,
}) {
	if (localStorageTheme !== null) {
		return localStorageTheme;
	}

	if (systemSettingDark.matches) {
		return "dark";
	}

	return "light";
}

function updateTheme({ theme }) {
	document.querySelector("html").setAttribute("data-theme", theme);
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingsAsString({
	localStorageTheme,
	systemSettingDark,
});

updateTheme({ theme: currentThemeSetting });

for (i = 0; i < document.querySelectorAll("[data-theme-toggle]").length; i++) {
	let button = document.querySelectorAll("[data-theme-toggle]")[i];
	button.addEventListener("click", (event) => {
		let newTheme = currentThemeSetting === "dark" ? "light" : "dark";

		localStorage.setItem("theme", newTheme);
		updateTheme({ theme: newTheme });

		currentThemeSetting = newTheme;
	});
}

function filterCountries(filter) {
	let temp_countries_object = {};

	for (i in countries) {
		if (filter == "All") {
			temp_countries_object[i] = countries[i];
		} else {
			if (countries[i].region == filter)
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
	let radio = document.querySelector(".region_buttons input[type='radio']:checked");
	let temp_countries_object = filterCountries(radio.dataset.region);
	for (i in temp_countries_object) {
		flag_cards[i] = temp_countries_object[i];
	}
	return flag_cards;
}

function updateSizes() {
	return document.querySelector(".flag_sizes input[type='radio']:checked").dataset.flagSize;
}

function updateLanguage() {
	return document.querySelector(".langs input[type='radio']:checked").dataset.lang;
}

function updateHeader() {
	let region_labels = document.querySelectorAll(".region_buttons input[type='radio'] + label");
	let size_labels = document.querySelectorAll(".flag_sizes input[type='radio'] + label");
	let lang = updateLanguage();
	for (i=0; i < region_labels.length; i++) {
		region_labels[i].innerText = regions[i][lang];
	}
	for (i=0; i < size_labels.length; i++) {
		size_labels[i].innerText = sizes[i][lang];
	}
	document.querySelector("html").setAttribute("lang", lang);
}

function makePNGTitle(lang, coefficient, size){
	if (coefficient == 'R') coefficient = 1;
	let text;
	if (lang == 'ru') {
		text = "PNG размером " + size/coefficient + "×" + size + " пикселей";
	} else if (lang == 'en') {
		text = "PNG size is " + size/coefficient + "×" + size + " pixels";
	}
	return text;
}

function getCardSample(country, lang, size){
	let card = "";
	card += "<div class=flag_card>";
	card += "<span class=flag_index>";
	// i don't know wtf it works
	card += i;
	card += "</span><div class=flag_img>";
	card += "<img src='flags/PNG-360/PNG-" + size + "/" + i + "-" + size + ".png'></object>";
	card += "</div><div class=flag_shortname>";
	card += country[lang + '_short'];
	card += "</div>";
	if (country[lang + '_long']) {
		card += "<div class=flag_longname>";
		card += country[lang + '_long'];
		card += "</div>";
	}
	card += "<div class='flag_download'>";

	card += "<a href='SVG/SVG-" + size + "/" + i + "-" + size + ".svg' target='_blank'>SVG</a>";
	card += "<a title='" + makePNGTitle(lang, size, 360) + "' href='flags/PNG-360/PNG-" + size + "/" + i + "-" + size + ".png' target='_blank'>PNG-360</a>";
	card += "<a title='" + makePNGTitle(lang, size, 1200) + "' href='flags/PNG-1200/PNG-" + size + "/" + i + "-" + size + ".png' target='_blank'>PNG-1200</a>";

	card += "</div><div class='flag_colors_container'>";
	for (j in flag_colors[i]){
		try {
			card += "<div class='flag_color flag_" + flag_colors[i][j] + "' title='" + colors[flag_colors[i][j]][lang] + "'></div>";
		} catch (err) {
			console.error(err, i, j, flag_colors[i]);
		}
		
	}
	card += "</div>";
	card += "</div>";
	return card;
}

function makeCards() {
	let container = document.querySelector("#flags");
	container.innerHTML = "";
	let countries_array = updateCountries();
	let size = updateSizes();
	let lang = updateLanguage();
	let cards = "";
	for (i in countries_array) {
		if (countries_array[i].is_recognized) cards += getCardSample(countries_array[i], lang, size);
	}
	for (i in countries_array) {
		if (!countries_array[i].is_recognized) cards += getCardSample(countries_array[i], lang, size);
	} 
	container.innerHTML = cards;
}

// for filtering countries every time you toggle radios
for (i = 0; i < document.querySelectorAll(".region_buttons input[type='radio'] + label").length; i++) {
	let button = document.querySelectorAll(".region_buttons input[type='radio']")[i];
	button.addEventListener("change", (event) => {
		makeCards();
	});
}

// for resetting sizes every time you toggle radios
for (i = 0;	i <	document.querySelectorAll(".flag_sizes input[type='radio'] + label").length; i++) {
	let button = document.querySelectorAll(".flag_sizes input[type='radio']")[i];
	button.addEventListener("change", (event) => {
		makeCards();
	});
}

// for resetting langs every time you toggle radios
for (i = 0;	i <	document.querySelectorAll(".langs input[type='radio'] + label").length; i++) {
	let button = document.querySelectorAll(".langs input[type='radio']")[i];
	button.addEventListener("change", (event) => {
		makeCards();
		updateHeader();
	});
}

updateLanguage();
updateHeader();
makeCards();