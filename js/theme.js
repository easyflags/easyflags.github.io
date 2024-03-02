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

for (i = 0; i < document.querySelectorAll(".theme_toggle").length; i++) {
	let button = document.querySelectorAll(".theme_toggle")[i];
	button.addEventListener("click", (event) => {
		let newTheme = currentThemeSetting === "dark" ? "light" : "dark";

		localStorage.setItem("theme", newTheme);
		updateTheme({ theme: newTheme });
		currentThemeSetting = newTheme;
		createLogo();
	});
}