function translate(lang, folder, key){
	let text = "";
	if (key != undefined) {
		text = translations[lang][folder][key];
	} else {
		text = translations[lang][folder];
	}
	return text;
}

const translations = {
	ru: {
		type: {
			"All": "Все\u00A0{count}",
			"Africa": "Африка\u00A0{count}",
			"Europe": "Европа\u00A0{count}",
			"Asia": "Азия\u00A0{count}",
			"America": "Америка\u00A0{count}",
			"Oceania": "Океания\u00A0{count}",
			"Other": "Прочее\u00A0{count}",
			"Middle_East": "Ближний\u00A0Восток\u00A0{count}",
			"Caribbean": "Карибы\u00A0{count}",
			"Unrecognized": "Непризнанные\u00A0{count}",
			"Subdivision": "Административные\u00A0единицы\u00A0{count}",
		},
		proportions: {
			"0.5": "1:2",
			"0.67": "2:3",
			"0.75": "3:4",
			"1.0": "Квадрат",
			"R": "Круг",
			"O": "Оригинальные{proportion}",
		},
		proportions_prelude: "Пропорции флага:\u00A0",
		formats: {
			"SVG": "SVG",
			"PNG-30": "PNG шириной 30\u00A0пикселей",
			"PNG-120": "PNG шириной 120\u00A0пикселей",
			"PNG-360": "PNG шириной 360\u00A0пикселей",
			"PNG-1200": "PNG шириной 1200\u00A0пикселей",
			"PNG-2400": "PNG шириной 2400\u00A0пикселей",
		},
		formats_prelude: "Формат изображения:\u00A0",
		flag_download: "Скачать\u00A0флаг",
	},
	en: {
		type: {
			"All": "All\u00A0{count}",
			"Africa": "Africa\u00A0{count}",
			"Europe": "Europe\u00A0{count}",
			"Asia": "Asia\u00A0{count}",
			"America": "Americas\u00A0{count}",
			"Oceania": "Oceania\u00A0{count}",
			"Other": "Other\u00A0{count}",
			"Middle_East": "Middle\u00A0East\u00A0{count}",
			"Caribbean": "Caribbean\u00A0{count}",
			"Unrecognized": "Unrecognized\u00A0{count}",
			"Subdivision": "Subdivisions\u00A0{count}",
		},
		proportions: {
			"0.5": "1:2",
			"0.67": "2:3",
			"0.75": "3:4",
			"1.0": "Square",
			"R": "Round",
			"O": "Original{proportion}",
		},
		proportions_prelude: "Flag proportions:\u00A0",
		formats: {
			"SVG": "SVG",
			"PNG-30": "PNG 30\u00A0pixels wide",
			"PNG-120": "PNG 120\u00A0pixels wide",
			"PNG-360": "PNG 360\u00A0pixels wide",
			"PNG-1200": "PNG 1200\u00A0pixels wide",
			"PNG-2400": "PNG 2400\u00A0pixels wide",
		},
		formats_prelude: "Image format:\u00A0",
		flag_download: "Download\u00A0flag",
	},
};