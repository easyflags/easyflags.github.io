function toggleLangClass(element){
	element.classList.contains("lang_current") 
		? element.classList.remove("lang_current") 
		: element.classList.add("lang_current");
}

function updateLang(lang) {
	document.querySelector("html").setAttribute("lang", lang);
	createHeader();
	createLogo();
	for(i = 0; i < document.querySelectorAll(".langs_toggle span").length; i++){
		document.querySelectorAll(".langs_toggle span")[i].classList.remove("lang_current");
	}
	toggleLangClass(document.querySelector(".langs_toggle span[hreflang='" + getLanguage() + "']"));
}

const startLang = getLanguage() || localStorage.getItem("lang");
updateLang(startLang);

for (i = 0; i < document.querySelectorAll(".langs_toggle span").length; i++) {
	let button = document.querySelectorAll(".langs_toggle span")[i];
	button.addEventListener("click", (event) => {
		let newLang = event.currentTarget.getAttribute("hreflang");
		localStorage.setItem("lang", newLang);
		updateLang(newLang);
	});
}