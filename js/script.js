function countCountries(){
	let countries_number = 0;
	for (i in countries) { 
		countries_number++; 
	}
	return countries_number;
}

function countTypes(){
	let types = {};
	let types_sorted = [];
	for (i in countries){
		for (j = 0; j < countries[i].type.length; j++){
			types[countries[i].type[j]] == undefined ? types[countries[i].type[j]] = 1 : types[countries[i].type[j]]++;
		}
	}
	types_sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
	return types_sorted;
}

function countUnrecognized(){
	let unrecognized = 0;
	for (i in countries){
		if (countries[i].is_recognized == false) unrecognized++;
	}
	return unrecognized;
}

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
	let temp_countries_object = filterCountries(getTypeRadio());
	for (i in temp_countries_object) {
		flag_cards[i] = temp_countries_object[i];
	}
	return flag_cards;
}

function getLanguage() {
	return document.documentElement.lang;
}

function getCardSample(country, currentLang){
	let card = "";
	card += "<div class='flag_card'>";

	let index_ISO = "";
	if (country.index_ISO == false) index_ISO = " flag_index_fake";

	card += "<span class='flag_index" + index_ISO + "'>";
	// i don't know wtf the I works
	card += i;
	card += "</span><div class=flag_img>";

	let size = country.resolution_ratio;
	if (size != 0.5 && size != 0.67 && size != 0.75 && size != 1.0) size = "O"; //O for Original
	
	let flag_index = '';
	country.parent_flag != undefined ? flag_index = country.parent_flag : flag_index = i;

	card += "<img class='lazy' src='flags/PNG-30/PNG-" + size + "/" + flag_index + "-" + size + "-30.png' data-src='flags/PNG-1200/PNG-" + size + "/" + flag_index + "-" + size + "-1200.png'>";
	card += "</div><div class=flag_shortname>";
	card += country[currentLang + '_short'];
	card += "</div>";
	if (country[currentLang + '_long']) {
		card += "<div class=flag_longname>";
		card += country[currentLang + '_long'];
		card += "</div>";
	}

	// ежели название одно и совпадает с longname, то контейнер orig не создаётся вообще
	let original_names_count = Object.keys(country.orig).length;
	if (country.orig && !(original_names_count == 1 && Object.keys(country.orig) == currentLang)){
		card += "<div class='flag_names_container'>";
		let official_languages_count = 0;
		for (j in country.orig){
			official_languages_count++;
			if (j != currentLang){
				card += "<span class='flag_original_lang' title='" + languages[j][currentLang] + "'>" + j + "</span>";
				card += "<span>" + country.orig[j].name + "</span>";
			}
			if (official_languages_count > 3 && original_names_count != official_languages_count) {
				card += "<span class='flag_original_lang'>+" + (original_names_count - official_languages_count) + "</span>";
				break;
			}
		}
		card += "</div>"
	}

	card += "<div class='flag_colors_container'>";
	for (j in flag_colors[flag_index]){
		try {
			// wow how the hell catastrophic this is
			card += "<div class='flag_color' title='" + colors[flag_colors[flag_index][j]][currentLang] + "' style='background-color: " + colors[flag_colors[flag_index][j]].hex + ";'></div>";
		} catch (err) {
			console.error(err, flag_index, j, flag_colors[flag_index]);
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
	let currentLang = getLanguage();
	let cards = "";
	// sorting
	for (i in countries_array) {
		if (countries_array[i].is_recognized) cards += getCardSample(countries_array[i], currentLang);
	}
	for (i in countries_array) {
		if (!countries_array[i].is_recognized) cards += getCardSample(countries_array[i], currentLang);
	} 
	container.innerHTML = cards;
	ll.update();
	// штобы карточки открывались
	for (i = 0; i < document.querySelectorAll('.flag_card').length; i++){
		document.querySelectorAll('.flag_card')[i].addEventListener("click", (event) => {
			toggleCard(event.currentTarget.querySelector(".flag_index").innerText);
			ll.update();
		});
	}
}

function getTypeRadio(){
	let type_container = document.querySelector(".type_buttons");
	for (const radioButton of type_container.children) {
		if (radioButton.checked) {
			return radioButton.value;
		}
	}
}

function createLogo() {
	let logo_container = document.querySelector("#logo");
	let currentLang = getLanguage();
	let theme = currentThemeSetting == "light" ? "dark" : "light";
	let logo_source = 'images/logo/' + ('LOGO-1-' + currentLang + '-' + theme).toUpperCase() + '.svg';
	logo_container.style.backgroundImage = "url(\'" + logo_source + "\')";
}

function createHeader() {
	let type_radios = "";
	let type_container = document.querySelector(".type_buttons");
	let currentLang = getLanguage();
	let types = countTypes();
	type_radios += "<input type='radio' onclick='makeCards();' name='type_button' id='All' value='All' checked/>";
	type_radios += "<label for='All'>" + translate(currentLang, "type", "All").replace("\{count\}", '(' + countCountries() + ')') + "</label>";
	for (i = 0; i < types.length; i++) {
		type_radios += "<input type='radio' onclick='makeCards();' name='type_button' id='" + types[i][0] + "' value='" + types[i][0] + "'/>";
		type_radios += "<label for='" + types[i][0] + "'>" + translate(currentLang, "type", types[i][0]).replace("\{count\}", '(' + types[i][1] + ')') + "</label>";
	}
	type_radios += "<input type='radio' onclick='makeCards();' name='type_button' id='Unrecognized' value='Unrecognized'/>";
	type_radios += "<label for='Unrecognized'>" + translate(currentLang, "type", "Unrecognized").replace("\{count\}", '(' + countUnrecognized() + ')') + "</label>";
	document.querySelector("html").setAttribute("lang", currentLang);
	type_container.innerHTML = type_radios;
	makeCards();
}

function toggleCard(index){
	let card = document.querySelector('card');
	let currentLang = getLanguage();
	let card_status = card.dataset.open;
	if (card_status == "true") {
		card.setAttribute('data-open', 'false');
		card.innerHTML = "";
	} else {
		card.setAttribute('data-open', 'true');
		let card_data = document.createElement('card-data');
		let card_overlay = document.createElement('card-overlay');

		let card_data_text = "";
		let index_ISO = "";
		if (countries[index].index_ISO == false) index_ISO = " flag_index_fake";

		// index + shortname = header
		card_data_text += "<div class='open_flag_header'>";
		// index
		card_data_text += "<span class='open_flag_index" + index_ISO + "'>";
		card_data_text += index;
		card_data_text += "</span>";

		// shortname
		card_data_text += "<div class=open_flag_shortname>";
		card_data_text += countries[index][currentLang + '_short'];
		card_data_text += "</div>";
		// card-close
		card_data_text += "<card-close/>"
		// end of header
		card_data_text += "</div>";
		
		// main img
		card_data_text += "<div class=open_flag_img>";

		let size = countries[index].resolution_ratio;
		if (size != 0.5 && size != 0.67 && size != 0.75 && size != 1.0) size = "O"; //O for Original
		
		let flag_index = '';
		countries[index].parent_flag != undefined ? flag_index = countries[index].parent_flag : flag_index = index;

		card_data_text += "<img class='lazy' src='flags/PNG-30/PNG-" + size + "/" + flag_index + "-" + size + "-30.png' data-src='flags/PNG-1200/PNG-" + size + "/" + flag_index + "-" + size + "-1200.png'></div>";
		
		// longname
		if (countries[index][currentLang + '_long']) {
			card_data_text += "<div class=open_flag_longname>";
			card_data_text += countries[index][currentLang + '_long'];
			card_data_text += "</div>";
		}

		// ежели название одно и совпадает с longname, то контейнер orig не создаётся вообще
		let original_names_count = Object.keys(countries[index].orig).length;
		if (countries[index].orig && !(original_names_count == 1 && Object.keys(countries[index].orig) == currentLang)){
			card_data_text += "<div class='open_flag_names_container'>";
			let official_languages_count = 0;
			for (j in countries[index].orig){
				official_languages_count++;
				if (j != currentLang){
					card_data_text += "<span class='open_flag_original_lang'>" + languages[j][currentLang] + "</span>";
					card_data_text += "<span>" + countries[index].orig[j].name + "</span>";
				}
			}
			card_data_text += "</div>";
		}

		card_data_text += "<div class='open_flag_controls'>";
		// proportions radios
		card_data_text += "<div class='open_flag_proportions_container'><span>" + translate(currentLang, "proportions_prelude") + "</span>";
		let proportion = "";
		let original_proportions_match_current_ones = false;
		for (j in translations[currentLang].proportions){
			// пройтись по всем размерам, но оригинальные не показывать — они отдельно
			if (j != "O" && j != countries[index].resolution_ratio) {
				proportion = translate(currentLang, "proportions", j);
				card_data_text += "<input type='radio' name='proportions_button' value='" + j + "' onchange='makeCardImage(\`" + flag_index + "\`);' id='proportion_" + j + "'><label for='proportion_" + j + "'>" + proportion + "</label>";
			} else if (j == "O" && j != countries[index].resolution_ratio && original_proportions_match_current_ones) {
				break;
			} else {
				let original_resolution = "";
				countries[index].resolution != -1 
					? original_resolution = '\u00A0(' + countries[index].resolution + ')' 
					: original_resolution = "";
				proportion = translate(currentLang, "proportions", "O").replace("\{proportion\}", original_resolution);
				card_data_text += "<input type='radio' checked name='proportions_button' value='" + j + "' onchange='makeCardImage(\`" + flag_index + "\`);' id='proportion_" + j + "'><label for='proportion_" + j + "'>" + proportion + "</label>";
				original_proportions_match_current_ones = true;
			}
		}
		card_data_text += "</div>";

		// formats radios
		card_data_text += "<div class='open_flag_formats_container'><span>" + translate(currentLang, "formats_prelude") + "</span>";
		for (j in translations[currentLang].formats){
			let format_setter = (j == "PNG-1200" ? "checked" : "");
			format = translate(currentLang, "formats", j);
			card_data_text += "<input type='radio' name='formats_button' " + format_setter + " value='" + j + "' onchange='makeCardImage(\`" + flag_index + "\`);' id='format_" + j + "'><label for='format_" + j + "'>" + format + "</label>";
		}
		card_data_text += "</div>";
		card_data_text += "</div>";

		// download button
		card_data_text += "<a class='open_flag_download' target='_blank' download href='flags/PNG-1200/PNG-" + size + "/" + flag_index + "-" + size + "-1200.png'>" + translate(currentLang, "flag_download") + "</a>";

		// colors
		card_data_text += "<div class='open_flag_colors_container'>";
		for (j in flag_colors[flag_index]){
			try {
				// wow how the hell catastrophic this is
				card_data_text += "<div class='open_flag_color' title='" + colors[flag_colors[flag_index][j]][currentLang] + "' style='background-color: " + colors[flag_colors[flag_index][j]].hex + ";'></div>";
			} catch (err) {
				console.error(err, flag_index, j, flag_colors[flag_index]);
			}
			
		}
		card_data_text += "</div>";

		// combine
		card_data.innerHTML = card_data_text;

		card.append(card_data);
		card.append(card_overlay);

		card_overlay.addEventListener("click", (event) => {
			toggleCard(index);
		});

		document.querySelector("card-close").addEventListener("click", (event) => {
			toggleCard(index);
		});
	}

	let count = document.querySelectorAll("card[data-open=true]").length;
	count != 0 
		? document.querySelector('body').style.overflow = 'hidden' 
		: document.querySelector('body').style.overflow = 'auto';
}

function makeCardImage(index){
	let proportion_value = "", format_value = "", extension = "", size = "";
	proportion_value = document.querySelector(".open_flag_proportions_container > input:checked").getAttribute("value");
	format_value = document.querySelector(".open_flag_formats_container > input:checked").getAttribute("value");
	extension = (format_value == "SVG" ? "svg" : "png");
	size = (format_value == "SVG" ? "" : format_value.split('PNG')[1]);

	image_link = "<img class='lazy' src='flags/PNG-30/PNG-" + proportion_value + "/" + index + "-" + proportion_value + "-30.png' data-src='flags/" + format_value + "/" + extension.toUpperCase() + "-" + proportion_value + "/" + index + "-" + proportion_value + size + "." + extension + "'>";

	document.querySelector(".open_flag_img").innerHTML = image_link;
	document.querySelector(".open_flag_download").setAttribute("href", "flags/" + format_value + "/" + extension + "-" + proportion_value + "/" + index + "-" + proportion_value + size + "." + extension);
	ll.update();
}