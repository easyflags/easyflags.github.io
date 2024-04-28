function getCardSample(i, currentLang){
	let card = "";

	let index_ISO = "";
	if (countries[i].index_ISO == false) index_ISO = " flag_index_fake";

	card += "<span class='flag_index" + index_ISO + "'>";
	card += i;
	card += "</span><div class=flag_img>";

	let size = countries[i].resolution_ratio;
	if (size != 0.5 && size != 0.67 && size != 0.75 && size != 1.0) size = "O"; //O for Original
	
	let flag_index = '';
	countries[i].parent_flag != undefined ? flag_index = countries[i].parent_flag : flag_index = i;

	card += "<img class='lazy' src='flags/PNG-30/PNG-" + size + "/" + flag_index + "-" + size + "-30.png' data-src='flags/PNG-1200/PNG-" + size + "/" + flag_index + "-" + size + "-1200.png'>";
	card += "</div><div class=flag_shortname>";
	card += countries[i][currentLang + '_short'];
	card += "</div>";
	if (countries[i][currentLang + '_long']) {
		card += "<div class=flag_longname>";
		card += countries[i][currentLang + '_long'];
		card += "</div>";
	}

	// ежели название одно и совпадает с longname, то контейнер orig не создаётся вообще
	let original_names_count = Object.keys(countries[i].orig).length;
	if (countries[i].orig && !(original_names_count == 1 && Object.keys(countries[i].orig) == currentLang)){
		card += "<div class='flag_names_container'>";
		let official_languages_count = 0;
		for (j in countries[i].orig){
			official_languages_count++;
			if (j != currentLang){
				card += "<span class='flag_original_lang' title='" + languages[j][currentLang] + "'>" + j + "</span>";
				card += "<span>" + countries[i].orig[j].name + "</span>";
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
	return card;
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
	document.querySelector(".open_flag_download").setAttribute("href", "flags/" + format_value + "/" + String.prototype.toUpperCase.call(extension) + "-" + proportion_value + "/" + index + "-" + proportion_value + size + "." + extension);
	lazyload.update();
}