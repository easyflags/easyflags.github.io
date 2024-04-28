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
	for (i in countries) {
		for (j = 0; j < countries[i].type.length; j++) {
			types[countries[i].type[j]] == undefined
				? (types[countries[i].type[j]] = 1)
				: types[countries[i].type[j]]++;
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

var currentCardsContainer = new CardsContainer();

function loadCards(){
	currentCardsContainer.clear();
	setType(window.localStorage.type || "All");
}

function setType (type){
	window.localStorage.type = type || "All";
	let types = countTypes();
	currentCardsContainer.clear();
	if (type == "All"){
		currentCardsContainer.fill(countCountries(), 24);
	} else if (type == "Unrecognized") {
		currentCardsContainer.fill(countUnrecognized(), 24);
	} else {
		currentCardsContainer.fill(Object.values(types).find((el) => el[0] === type)[1], 24);
	}
}

function createHeader() {
	let type_radios = "";
	let type_container = document.querySelector(".type_buttons");
	let currentLang = getLanguage();
	let types = countTypes();
	let is_All_checked = window.localStorage.type == "All" || "undefined" ? 'checked' : '';
	let is_type_checked = '';
	let is_Unrecognized_checked = window.localStorage.type == "Unrecognized" ? 'checked' : '';
	type_radios += "<input type='radio' onclick='setType(\"All\");' name='type_button' id='All' value='All' " + is_All_checked + "/>";
	type_radios += "<label for='All'>" + translate(currentLang, "type", "All").replace("\{count\}", '(' + countCountries() + ')') + "</label>";
	for (i = 0; i < types.length; i++) {
		is_type_checked = window.localStorage.type == types[i][0] ? 'checked' : '';
		type_radios += "<input type='radio' onclick='setType(\"" + types[i][0] + "\");' name='type_button' id='" + types[i][0] + "' value='" + types[i][0] + "' " + is_type_checked + "/>";
		type_radios += "<label for='" + types[i][0] + "'>" + translate(currentLang, "type", types[i][0]).replace("\{count\}", '(' + types[i][1] + ')') + "</label>";
	}
	type_radios += "<input type='radio' onclick='setType(\"Unrecognized\");' name='type_button' id='Unrecognized' value='Unrecognized' " + is_Unrecognized_checked + "/>";
	type_radios += "<label for='Unrecognized'>" + translate(currentLang, "type", "Unrecognized").replace("\{count\}", '(' + countUnrecognized() + ')') + "</label>";
	document.querySelector("html").setAttribute("lang", currentLang);
	type_container.innerHTML = type_radios;

}

function createLogo() {
	let logo_container = document.querySelector("#logo");
	let currentLang = getLanguage();
	let theme = currentThemeSetting == "light" ? "dark" : "light";
	let logo_source = 'images/logo/' + ('LOGO-1-' + currentLang + '-' + theme).toUpperCase() + '.svg';
	logo_container.style.backgroundImage = "url(\'" + logo_source + "\')";
}