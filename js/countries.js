const countries = {
	"AB": {
		"ru_short": "Амбазония",
		"ru_long": "Федеративная Республика Амбазония",
		"en_short": "Ambazonia",
		"en_long": "Federal Republic of Ambazonia",
		"region": "Africa",
		"is_recognized": false
	},
	"AD": {
		"ru_short": "Андорра",
		"ru_long": "Княжество Андорра",
		"en_short": "Andorra",
		"en_long": "Principality of Andorra",
		"region": "Europe",
		"is_recognized": true
	},
	"AE": {
		"ru_short": "ОАЭ",
		"ru_long": "Объединённые Арабские Эмираты",
		"en_short": "UAE",
		"en_long": "United Arab Emirates",
		"region": "Middle East",
		"is_recognized": true
	},
	"AF": {
		"ru_short": "Афганистан",
		"ru_long": "Исламский Эмират Афганистан",
		"en_short": "Afghanistan",
		"en_long": "Islamic Republic of Afghanistan",
		"region": "Asia",
		"is_recognized": true
	},
	"AG": {
		"ru_short": "Антигуа и Барбуда",
		"en_short": "Antigua and Barbuda",
		"region": "Caribbean",
		"is_recognized": true
	},
	"AH": {
		"ru_short": "Абхазия",
		"ru_long": "Республика Абхазия",
		"en_short": "Abkhazia",
		"en_long": "Republic of Abkhazia",
		"region": "Asia",
		"is_recognized": false
	},
	"AJ": {
		"ru_short": "Азад-Кашмир",
		"ru_long": "Государство Азад Джамму и Кашмир",
		"en_short": "Azad Kashmir",
		"en_long": "Azad Jammu and Kashmir",
		"region": "Asia",
		"is_recognized": false
	},
	"AL": {
		"ru_short": "Албания",
		"ru_long": "Республика Албания",
		"en_short": "Albania",
		"en_long": "Republic of Albania",
		"region": "Europe",
		"is_recognized": true
	},
	"AM": {
		"ru_short": "Армения",
		"ru_long": "Республика Армения",
		"en_short": "Armenia",
		"en_long": "Republic of Armenia",
		"region": "Europe",
		"is_recognized": true
	},
	"AO": {
		"ru_short": "Ангола",
		"ru_long": "Республика Ангола",
		"en_short": "Angola",
		"en_long": "Republic of Angola",
		"region": "Africa",
		"is_recognized": true
	},
	"AR": {
		"ru_short": "Аргентина",
		"ru_long": "Аргентинская Республика",
		"en_short": "Argentina",
		"en_long": "Argentine Republic",
		"region": "America",
		"is_recognized": true
	},
	"AT": {
		"ru_short": "Австрия",
		"ru_long": "Австрийская Республика",
		"en_short": "Austria",
		"en_long": "Republic of Austria",
		"region": "Europe",
		"is_recognized": true
	},
	"AU": {
		"ru_short": "Австралия",
		"ru_long": "Австралийский Союз",
		"en_short": "Australia",
		"en_long": "Commonwealth of Australia",
		"region": "Oceania",
		"is_recognized": true
	},
	"AZ": {
		"ru_short": "Азербайджан",
		"ru_long": "Азербайджанская Республика",
		"en_short": "Azerbaijan",
		"en_long": "Republic of Azerbaijan",
		"region": "Europe",
		"is_recognized": true
	},
	"BA": {
		"ru_short": "Босния и Герцеговина",
		"en_short": "Bosnia and Herzegovina",
		"region": "Europe",
		"is_recognized": true
	},
	"BB": {
		"ru_short": "Барбадос",
		"en_short": "Barbados",
		"region": "Caribbean",
		"is_recognized": true
	},
	"BD": {
		"ru_short": "Бангладеш",
		"ru_long": "Народная Республика Бангладеш",
		"en_short": "Bangladesh",
		"en_long": "People's Republic of Bangladesh",
		"region": "Asia",
		"is_recognized": true
	},
	"BE": {
		"ru_short": "Бельгия",
		"ru_long": "Королевство Бельгия",
		"en_short": "Belgium",
		"en_long": "Kingdom of Belgium",
		"region": "Europe",
		"is_recognized": true
	},
	"BF": {
		"ru_short": "Буркина-Фасо",
		"en_short": "Burkina Faso",
		"region": "Africa",
		"is_recognized": true
	},
	"BG": {
		"ru_short": "Болгария",
		"ru_long": "Республика Болгария",
		"en_short": "Bulgaria",
		"en_long": "Republic of Bulgaria",
		"region": "Europe",
		"is_recognized": true
	},
	"BH": {
		"ru_short": "Бахрейн",
		"ru_long": "Королевство Бахрейн",
		"en_short": "Bahrain",
		"en_long": "Kingdom of Bahrain",
		"region": "Middle East",
		"is_recognized": true
	},
	"BI": {
		"ru_short": "Бурунди",
		"ru_long": "Республика Бурунди",
		"en_short": "Burundi",
		"en_long": "Republic of Burundi",
		"region": "Africa",
		"is_recognized": true
	},
	"BJ": {
		"ru_short": "Бенин",
		"ru_long": "Республика Бенин",
		"en_short": "Benin",
		"en_long": "Republic of Benin",
		"region": "Africa",
		"is_recognized": true
	},
	"BN": {
		"ru_short": "Бруней",
		"ru_long": "Государство Бруней-Даруссалам",
		"en_short": "Brunei",
		"en_long": "Brunei Darussalam",
		"region": "Asia",
		"is_recognized": true
	},
	"BO": {
		"ru_short": "Боливия",
		"ru_long": "Многонациональное Государство Боливия",
		"en_short": "Bolivia",
		"en_long": "Plurinational State of Bolivia",
		"region": "America",
		"is_recognized": true
	},
	"BR": {
		"ru_short": "Бразилия",
		"ru_long": "Федеративная Республика Бразилия",
		"en_short": "Brazil",
		"en_long": "Federative Republic of Brazil",
		"region": "America",
		"is_recognized": true
	},
	"BS": {
		"ru_short": "Багамские Острова",
		"ru_long": "Содружество Багамских Островов",
		"en_short": "Bahamas",
		"en_long": "Commonwealth of Bahamas",
		"region": "Caribbean",
		"is_recognized": true
	},
	"BT": {
		"ru_short": "Бутан",
		"ru_long": "Королевство Бутан",
		"en_short": "Bhutan",
		"en_long": "Kingdom of Bhutan",
		"region": "Asia",
		"is_recognized": true
	},
	"BW": {
		"ru_short": "Ботсвана",
		"ru_long": "Республика Ботсвана",
		"en_short": "Botswana",
		"en_long": "Republic of Botswana",
		"region": "Africa",
		"is_recognized": true
	},
	"BY": {
		"ru_short": "Беларусь",
		"ru_long": "Республика Беларусь",
		"en_short": "Belarus",
		"en_long": "Republic of Belarus",
		"region": "Europe",
		"is_recognized": true
	},
	"BZ": {
		"ru_short": "Белиз",
		"en_short": "Belize",
		"region": "America",
		"is_recognized": true
	},
	"CA": {
		"ru_short": "Канада",
		"en_short": "Canada",
		"region": "America",
		"is_recognized": true
	},
	"CD": {
		"ru_short": "ДР Конго",
		"ru_long": "Демократическая Республика Конго",
		"en_short": "DR Congo",
		"en_long": "Democratic Republic of the Congo",
		"region": "Africa",
		"is_recognized": true
	},
	"CF": {
		"ru_short": "ЦАР",
		"ru_long": "Центральноафриканская Республика",
		"en_short": "Central African Republic",
		"en_long": "Central African Republic",
		"region": "Africa",
		"is_recognized": true
	},
	"CG": {
		"ru_short": "Республика Конго",
		"en_short": "Congo",
		"en_long": "Republic of the Congo",
		"region": "Africa",
		"is_recognized": true
	},
	"CH": {
		"ru_short": "Швейцария",
		"ru_long": "Швейцарская Конфедерация",
		"en_short": "Switzerland",
		"en_long": "Swiss Confederation",
		"region": "Europe",
		"is_recognized": true
	},
	"CI": {
		"ru_short": "Кот-д’Ивуар",
		"ru_long": "Республика Кот-д’Ивуар",
		"en_short": "Côte d'Ivoire",
		"en_long": "Republic of Côte d'Ivoire",
		"region": "Africa",
		"is_recognized": true
	},
	"CK": {
		"ru_short": "Острова Кука",
		"en_short": "Cook Islands",
		"region": "Oceania",
		"is_recognized": false
	},
	"CL": {
		"ru_short": "Чили",
		"ru_long": "Республика Чили",
		"en_short": "Chile",
		"en_long": "Republic of Chile",
		"region": "America",
		"is_recognized": true
	},
	"CM": {
		"ru_short": "Камерун",
		"ru_long": "Республика Камерун",
		"en_short": "Cameroon",
		"en_long": "Republic of Cameroon",
		"region": "Africa",
		"is_recognized": true
	},
	"CN": {
		"ru_short": "Китай",
		"ru_long": "Китайская Народная Республика",
		"en_short": "China",
		"en_long": "People's Republic of China",
		"region": "Asia",
		"is_recognized": true
	},
	"CO": {
		"ru_short": "Колумбия",
		"ru_long": "Республика Колумбия",
		"en_short": "Colombia",
		"en_long": "Republic of Colombia",
		"region": "America",
		"is_recognized": true
	},
	"CR": {
		"ru_short": "Коста-Рика",
		"ru_long": "Республика Коста-Рика",
		"en_short": "Costa Rica",
		"en_long": "Republic of Costa Rica",
		"region": "America",
		"is_recognized": true
	},
	"CU": {
		"ru_short": "Куба",
		"ru_long": "Республика Куба",
		"en_short": "Cuba",
		"en_long": "Republic of Cuba",
		"region": "Caribbean",
		"is_recognized": true
	},
	"CV": {
		"ru_short": "Кабо-Верде",
		"ru_long": "Республика Кабо-Верде",
		"en_short": "Cabo Verde",
		"en_long": "Republic of Cabo Verde",
		"region": "Africa",
		"is_recognized": true
	},
	"CY": {
		"ru_short": "Кипр",
		"ru_long": "Республика Кипр",
		"en_short": "Cyprus",
		"en_long": "Republic of Cyprus",
		"region": "Europe",
		"is_recognized": true
	},
	"CZ": {
		"ru_short": "Чехия",
		"ru_long": "Чешская Республика",
		"en_short": "Czechia",
		"en_long": "Czech Republic",
		"region": "Europe",
		"is_recognized": true
	},
	"DE": {
		"ru_short": "Германия",
		"ru_long": "Федеративная Республика Германия",
		"en_short": "Germany",
		"en_long": "Federal Republic of Germany",
		"region": "Europe",
		"is_recognized": true
	},
	"DJ": {
		"ru_short": "Джибути",
		"ru_long": "Республика Джибути",
		"en_short": "Djibouti",
		"en_long": "Republic of Djibouti",
		"region": "Africa",
		"is_recognized": true
	},
	"DK": {
		"ru_short": "Дания",
		"ru_long": "Королевство Дания",
		"en_short": "Denmark",
		"en_long": "Kingdom of Denmark",
		"region": "Europe",
		"is_recognized": true
	},
	"DM": {
		"ru_short": "Доминика",
		"ru_long": "Содружество Доминики",
		"en_short": "Dominica",
		"en_long": "Commonwealth of Dominica",
		"region": "Caribbean",
		"is_recognized": true
	},
	"DN": {
		"ru_short": "Приднестровье",
		"ru_long": "Приднестровская Молдавская Республика",
		"en_short": "Transnistria",
		"en_long": "Pridnestrovian Moldavian Republic",
		"region": "Europe",
		"is_recognized": false
	},
	"DO": {
		"ru_short": "Доминиканская Республика",
		"en_short": "Dominican Republic",
		"region": "Caribbean",
		"is_recognized": true
	},
	"DZ": {
		"ru_short": "Алжир",
		"ru_long": "Алжирская Народная Демократическая Республика",
		"en_short": "Algeria",
		"en_long": "People's Democratic Republic of Algeria",
		"region": "Africa",
		"is_recognized": true
	},
	"EC": {
		"ru_short": "Эквадор",
		"ru_long": "Республика Эквадор",
		"en_short": "Ecuador",
		"en_long": "Republic of Ecuador",
		"region": "America",
		"is_recognized": true
	},
	"EE": {
		"ru_short": "Эстония",
		"ru_long": "Эстонская Республика",
		"en_short": "Estonia",
		"en_long": "Republic of Estonia",
		"region": "Europe",
		"is_recognized": true
	},
	"EG": {
		"ru_short": "Египет",
		"ru_long": "Арабская Республика Египет",
		"en_short": "Egypt",
		"en_long": "Arab Republic of Egypt",
		"region": "Middle East",
		"is_recognized": true
	},
	"EH": {
		"ru_short": "Западная Сахара",
		"ru_long": "Сахарская Арабская Демократическая Республика",
		"en_short": "Western Sahara",
		"en_long": "Sahrawi Arab Democratic Republic",
		"region": "Africa",
		"is_recognized": false
	},
	"ER": {
		"ru_short": "Эритрея",
		"ru_long": "Государство Эритрея",
		"en_short": "Eritrea",
		"en_long": "State of Eritrea",
		"region": "Africa",
		"is_recognized": true
	},
	"ES": {
		"ru_short": "Испания",
		"ru_long": "Королевство Испания",
		"en_short": "Spain",
		"en_long": "Kingdom of Spain",
		"region": "Europe",
		"is_recognized": true
	},
	"ET": {
		"ru_short": "Эфиопия",
		"ru_long": "Федеративная Демократическая Республика Эфиопия",
		"en_short": "Ethiopia",
		"en_long": "Federal Democratic Republic of Ethiopia",
		"region": "Africa",
		"is_recognized": true
	},
	"FI": {
		"ru_short": "Финляндия",
		"ru_long": "Финляндская Республика",
		"en_short": "Finland",
		"en_long": "Republic of Finland",
		"region": "Europe",
		"is_recognized": true
	},
	"FJ": {
		"ru_short": "Фиджи",
		"ru_long": "Республика Фиджи",
		"en_short": "Fiji",
		"en_long": "Republic of Fiji",
		"region": "Oceania",
		"is_recognized": true
	},
	"FM": {
		"ru_short": "Федеративные Штаты Микронезии",
		"en_short": "Federated States of Micronesia",
		"region": "Oceania",
		"is_recognized": true
	},
	"FR": {
		"ru_short": "Франция",
		"ru_long": "Французская Республика",
		"en_short": "France",
		"en_long": "French Republic",
		"region": "Europe",
		"is_recognized": true
	},
	"GA": {
		"ru_short": "Габон",
		"ru_long": "Габонская Республика",
		"en_short": "Gabon",
		"en_long": "Gabonese Republic",
		"region": "Africa",
		"is_recognized": true
	},
	"GB": {
		"ru_short": "Великобритания",
		"ru_long": "Соединённое Королевство Великобритании и Северной Ирландии",
		"en_short": "United Kingdom",
		"en_long": "United Kingdom of Great Britain and Northern Ireland",
		"region": "Europe",
		"is_recognized": true
	},
	"GD": {
		"ru_short": "Гренада",
		"en_short": "Grenada",
		"region": "Caribbean",
		"is_recognized": true
	},
	"GE": {
		"ru_short": "Грузия",
		"en_short": "Georgia",
		"region": "Europe",
		"is_recognized": true
	},
	"GH": {
		"ru_short": "Гана",
		"ru_long": "Республика Гана",
		"en_short": "Ghana",
		"en_long": "Republic of Ghana",
		"region": "Africa",
		"is_recognized": true
	},
	"GM": {
		"ru_short": "Гамбия",
		"ru_long": "Республика Гамбия",
		"en_short": "Gambia",
		"en_long": "Republic of Gambia",
		"region": "Africa",
		"is_recognized": true
	},
	"GN": {
		"ru_short": "Гвинея",
		"ru_long": "Гвинейская Республика",
		"en_short": "Guinea",
		"en_long": "Republic of Guinea",
		"region": "Africa",
		"is_recognized": true
	},
	"GQ": {
		"ru_short": "Экваториальная Гвинея",
		"ru_long": "Республика Экваториальная Гвинея",
		"en_short": "Equatorial Guinea",
		"en_long": "Republic of Equatorial Guinea",
		"region": "Africa",
		"is_recognized": true
	},
	"GR": {
		"ru_short": "Греция",
		"ru_long": "Греческая Республика",
		"en_short": "Greece",
		"en_long": "Hellenic Republic",
		"region": "Europe",
		"is_recognized": true
	},
	"GT": {
		"ru_short": "Гватемала",
		"ru_long": "Республика Гватемала",
		"en_short": "Guatemala",
		"en_long": "Republic of Guatemala",
		"region": "America",
		"is_recognized": true
	},
	"GW": {
		"ru_short": "Гвинея-Бисау",
		"ru_long": "Республика Гвинея-Бисау",
		"en_short": "Guinea-Bissau",
		"en_long": "Republic of Guinea-Bissau",
		"region": "Africa",
		"is_recognized": true
	},
	"GY": {
		"ru_short": "Гайана",
		"ru_long": "Кооперативная Республика Гайана",
		"en_short": "Guyana",
		"en_long": "Co-operative Republic of Guyana",
		"region": "America",
		"is_recognized": true
	},
	"HN": {
		"ru_short": "Гондурас",
		"ru_long": "Республика Гондурас",
		"en_short": "Honduras",
		"en_long": "Republic of Honduras",
		"region": "America",
		"is_recognized": true
	},
	"HR": {
		"ru_short": "Хорватия",
		"ru_long": "Республика Хорватия",
		"en_short": "Croatia",
		"en_long": "Republic of Croatia",
		"region": "Europe",
		"is_recognized": true
	},
	"HT": {
		"ru_short": "Гаити",
		"ru_long": "Республика Гаити",
		"en_short": "Haiti",
		"en_long": "Republic of Haiti",
		"region": "Caribbean",
		"is_recognized": true
	},
	"HU": {
		"ru_short": "Венгрия",
		"en_short": "Hungary",
		"region": "Europe",
		"is_recognized": true
	},
	"ID": {
		"ru_short": "Индонезия",
		"ru_long": "Республика Индонезия",
		"en_short": "Indonesia",
		"en_long": "Republic of Indonesia",
		"region": "Asia",
		"is_recognized": true
	},
	"IE": {
		"ru_short": "Ирландия",
		"ru_long": "Республика Ирландия",
		"en_short": "Ireland",
		"en_long": "Republic of Ireland",
		"region": "Europe",
		"is_recognized": true
	},
	"IL": {
		"ru_short": "Израиль",
		"ru_long": "Государство Израиль",
		"en_short": "Israel",
		"en_long": "State of Israel",
		"region": "Middle East",
		"is_recognized": true
	},
	"IN": {
		"ru_short": "Индия",
		"ru_long": "Республика Индия",
		"en_short": "India",
		"en_long": "Republic of India",
		"region": "Asia",
		"is_recognized": true
	},
	"IQ": {
		"ru_short": "Ирак",
		"ru_long": "Республика Ирак",
		"en_short": "Iraq",
		"en_long": "Republic of Iraq",
		"region": "Middle East",
		"is_recognized": true
	},
	"IR": {
		"ru_short": "Иран",
		"ru_long": "Исламская Республика Иран",
		"en_short": "Iran (Islamic Republic of)",
		"en_long": "Islamic Republic of Iran",
		"region": "Asia",
		"is_recognized": true
	},
	"IS": {
		"ru_short": "Исландия",
		"en_short": "Iceland",
		"region": "Europe",
		"is_recognized": true
	},
	"IT": {
		"ru_short": "Италия",
		"ru_long": "Итальянская Республика",
		"en_short": "Italy",
		"en_long": "Italian Republic",
		"region": "Europe",
		"is_recognized": true
	},
	"JM": {
		"ru_short": "Ямайка",
		"en_short": "Jamaica",
		"region": "Caribbean",
		"is_recognized": true
	},
	"JO": {
		"ru_short": "Иордания",
		"ru_long": "Иорданское Хашимитское Королевство",
		"en_short": "Jordan",
		"en_long": "Hashemite Kingdom of Jordan",
		"region": "Middle East",
		"is_recognized": true
	},
	"JP": {
		"ru_short": "Япония",
		"ru_long": "Государство Япония",
		"en_short": "Japan",
		"region": "Asia",
		"is_recognized": true
	},
	"JS": {
		"ru_short": "Сомалиленд",
		"ru_long": "Республика Сомалиленд",
		"en_short": "Somaliland",
		"en_long": "Republic of Somaliland",
		"region": "Africa",
		"is_recognized": false
	},
	"KE": {
		"ru_short": "Кения",
		"ru_long": "Республика Кения",
		"en_short": "Kenya",
		"en_long": "Republic of Kenya",
		"region": "Africa",
		"is_recognized": true
	},
	"KG": {
		"ru_short": "Киргизия",
		"ru_long": "Киргизская Республика",
		"en_short": "Kyrgyzstan",
		"en_long": "Kyrgyz Republic",
		"region": "Asia",
		"is_recognized": true
	},
	"KH": {
		"ru_short": "Камбоджа",
		"ru_long": "Королевство Камбоджа",
		"en_short": "Cambodia",
		"en_long": "Kingdom of Cambodia",
		"region": "Asia",
		"is_recognized": true
	},
	"KI": {
		"ru_short": "Кирибати",
		"ru_long": "Республика Кирибати",
		"en_short": "Kiribati",
		"en_long": "Republic of Kiribati",
		"region": "Oceania",
		"is_recognized": true
	},
	"KK": {
		"ru_short": "ТРСК",
		"ru_long": "Турецкая Республика Северного Кипра",
		"en_short": "TRNC",
		"en_long": "Turkish Republic of Northern Cyprus",
		"region": "Europe",
		"is_recognized": false
	},
	"KM": {
		"ru_short": "Коморы",
		"ru_long": "Союз Коморских Островов",
		"en_short": "Comoros",
		"en_long": "Union of the Comoros",
		"region": "Africa",
		"is_recognized": true
	},
	"KN": {
		"ru_short": "Сент-Китс и Невис",
		"ru_long": "Федерация Сент-Китс и Невис",
		"en_short": "Saint Kitts and Nevis",
		"en_long": "Federation of Saint Christopher and Nevis",
		"region": "Caribbean",
		"is_recognized": true
	},
	"KP": {
		"ru_short": "КНДР",
		"ru_long": "Корейская Народно-Демократическая Республика",
		"en_short": "North Korea",
		"en_long": "Democratic People's Republic of Korea",
		"region": "Asia",
		"is_recognized": true
	},
	"KR": {
		"ru_short": "Южная Корея",
		"ru_long": "Республика Корея",
		"en_short": "South Korea",
		"en_long": "Republic of Korea",
		"region": "Asia",
		"is_recognized": true
	},
	"KW": {
		"ru_short": "Кувейт",
		"ru_long": "Государство Кувейт",
		"en_short": "Kuwait",
		"en_long": "State of Kuwait",
		"region": "Middle East",
		"is_recognized": true
	},
	"KZ": {
		"ru_short": "Казахстан",
		"ru_long": "Республика Казахстан",
		"en_short": "Kazakhstan",
		"en_long": "Republic of Kazakhstan",
		"region": "Asia",
		"is_recognized": true
	},
	"LA": {
		"ru_short": "Лаос",
		"ru_long": "Лаосская Народно-Демократическая Республика",
		"en_short": "Laos",
		"en_long": "Lao People's Democratic Republic",
		"region": "Asia",
		"is_recognized": true
	},
	"LB": {
		"ru_short": "Ливан",
		"ru_long": "Ливанская Республика",
		"en_short": "Lebanon",
		"en_long": "Lebanese Republic",
		"region": "Middle East",
		"is_recognized": true
	},
	"LC": {
		"ru_short": "Сент-Люсия",
		"en_short": "Saint Lucia",
		"region": "Caribbean",
		"is_recognized": true
	},
	"LI": {
		"ru_short": "Лихтенштейн",
		"ru_long": "Княжество Лихтенштейн",
		"en_short": "Liechtenstein",
		"en_long": "Principality of Liechtenstein",
		"region": "Europe",
		"is_recognized": true
	},
	"LK": {
		"ru_short": "Шри-Ланка",
		"ru_long": "Демократическая Социалистическая Республика Шри-Ланка",
		"en_short": "Sri Lanka",
		"en_long": "Democratic Socialist Republic of Sri Lanka",
		"region": "Asia",
		"is_recognized": true
	},
	"LR": {
		"ru_short": "Либерия",
		"ru_long": "Республика Либерия",
		"en_short": "Liberia",
		"en_long": "Republic of Liberia",
		"region": "Africa",
		"is_recognized": true
	},
	"LS": {
		"ru_short": "Лесото",
		"ru_long": "Королевство Лесото",
		"en_short": "Lesotho",
		"en_long": "Kingdom of Lesotho",
		"region": "Africa",
		"is_recognized": true
	},
	"LT": {
		"ru_short": "Литва",
		"ru_long": "Литовская Республика",
		"en_short": "Lithuania",
		"en_long": "Republic of Lithuania",
		"region": "Europe",
		"is_recognized": true
	},
	"LU": {
		"ru_short": "Люксембург",
		"ru_long": "Великое Герцогство Люксембург",
		"en_short": "Luxembourg",
		"en_long": "Grand Duchy of Luxembourg",
		"region": "Europe",
		"is_recognized": true
	},
	"LV": {
		"ru_short": "Латвия",
		"ru_long": "Латвийская Республика",
		"en_short": "Latvia",
		"en_long": "Republic of Latvia",
		"region": "Europe",
		"is_recognized": true
	},
	"LY": {
		"ru_short": "Ливия",
		"ru_long": "Государство Ливия",
		"en_short": "Libya",
		"en_long": "State of Libya",
		"region": "Africa",
		"is_recognized": true
	},
	"MA": {
		"ru_short": "Марокко",
		"ru_long": "Королевство Марокко",
		"en_short": "Morocco",
		"en_long": "Kingdom of Morocco",
		"region": "Africa",
		"is_recognized": true
	},
	"MC": {
		"ru_short": "Монако",
		"ru_long": "Княжество Монако",
		"en_short": "Monaco",
		"en_long": "Principality of Monaco",
		"region": "Europe",
		"is_recognized": true
	},
	"MD": {
		"ru_short": "Молдавия",
		"ru_long": "Республика Молдова",
		"en_short": "Moldova",
		"en_long": "Republic of Moldova",
		"region": "Europe",
		"is_recognized": true
	},
	"ME": {
		"ru_short": "Черногория",
		"en_short": "Montenegro",
		"region": "Europe",
		"is_recognized": true
	},
	"MG": {
		"ru_short": "Мадагаскар",
		"ru_long": "Республика Мадагаскар",
		"en_short": "Madagascar",
		"en_long": "Republic of Madagascar",
		"region": "Africa",
		"is_recognized": true
	},
	"MH": {
		"ru_short": "Маршалловы Острова",
		"ru_long": "Республика Маршалловы Острова",
		"en_short": "Marshall Islands",
		"en_long": "Republic of the Marshall Islands",
		"region": "Oceania",
		"is_recognized": true
	},
	"MK": {
		"ru_short": "Северная Македония",
		"ru_long": "Республика Северная Македония",
		"en_short": "North Macedonia",
		"en_long": "Republic of North Macedonia",
		"region": "Europe",
		"is_recognized": true
	},
	"ML": {
		"ru_short": "Мали",
		"ru_long": "Республика Мали",
		"en_short": "Mali",
		"en_long": "Republic of Mali",
		"region": "Africa",
		"is_recognized": true
	},
	"MM": {
		"ru_short": "Мьянма",
		"ru_long": "Республика Союз Мьянма",
		"en_short": "Myanmar",
		"en_long": "Republic of the Union of Myanmar",
		"region": "Asia",
		"is_recognized": true
	},
	"MN": {
		"ru_short": "Монголия",
		"en_short": "Mongolia",
		"region": "Asia",
		"is_recognized": true
	},
	"MR": {
		"ru_short": "Мавритания",
		"ru_long": "Исламская Республика Мавритания",
		"en_short": "Mauritania",
		"en_long": "Islamic Republic of Mauritania",
		"region": "Africa",
		"is_recognized": true
	},
	"MT": {
		"ru_short": "Мальта",
		"ru_long": "Республика Мальта",
		"en_short": "Malta",
		"en_long": "Republic of Malta",
		"region": "Europe",
		"is_recognized": true
	},
	"MU": {
		"ru_short": "Маврикий",
		"ru_long": "Республика Маврикий",
		"en_short": "Mauritius",
		"en_long": "Republic of Mauritius",
		"region": "Africa",
		"is_recognized": true
	},
	"MV": {
		"ru_short": "Мальдивы",
		"ru_long": "Мальдивская Республика",
		"en_short": "Maldives",
		"en_long": "Republic of Maldives",
		"region": "Asia",
		"is_recognized": true
	},
	"MW": {
		"ru_short": "Малави",
		"ru_long": "Республика Малави",
		"en_short": "Malawi",
		"en_long": "Republic of Malawi",
		"region": "Africa",
		"is_recognized": true
	},
	"MX": {
		"ru_short": "Мексика",
		"ru_long": "Мексиканские Соединённые Штаты",
		"en_short": "Mexico",
		"en_long": "United Mexican States",
		"region": "America",
		"is_recognized": true
	},
	"MY": {
		"ru_short": "Малайзия",
		"en_short": "Malaysia",
		"region": "Asia",
		"is_recognized": true
	},
	"MZ": {
		"ru_short": "Мозамбик",
		"ru_long": "Республика Мозамбик",
		"en_short": "Mozambique",
		"en_long": "Republic of Mozambique",
		"region": "Africa",
		"is_recognized": true
	},
	"NA": {
		"ru_short": "Намибия",
		"ru_long": "Республика Намибия",
		"en_short": "Namibia",
		"en_long": "Republic of Namibia",
		"region": "Africa",
		"is_recognized": true
	},
	"NE": {
		"ru_short": "Нигер",
		"ru_long": "Республика Нигер",
		"en_short": "Niger",
		"en_long": "Republic of the Niger",
		"region": "Africa",
		"is_recognized": true
	},
	"NG": {
		"ru_short": "Нигерия",
		"ru_long": "Федеративная Республика Нигерия",
		"en_short": "Nigeria",
		"en_long": "Federal Republic of Nigeria",
		"region": "Africa",
		"is_recognized": true
	},
	"NI": {
		"ru_short": "Никарагуа",
		"ru_long": "Республика Никарагуа",
		"en_short": "Nicaragua",
		"en_long": "Republic of Nicaragua",
		"region": "America",
		"is_recognized": true
	},
	"NL": {
		"ru_short": "Нидерланды",
		"ru_long": "Королевство Нидерландов",
		"en_short": "Netherlands",
		"en_long": "Kingdom of the Netherlands",
		"region": "Europe",
		"is_recognized": true
	},
	"NO": {
		"ru_short": "Норвегия",
		"ru_long": "Королевство Норвегия",
		"en_short": "Norway",
		"en_long": "Kingdom of Norway",
		"region": "Europe",
		"is_recognized": true
	},
	"NP": {
		"ru_short": "Непал",
		"ru_long": "Федеративная Демократическая Республика Непал",
		"en_short": "Nepal",
		"en_long": "Federal Democratic Republic of Nepal",
		"region": "Asia",
		"is_recognized": true
	},
	"NR": {
		"ru_short": "Науру",
		"ru_long": "Республика Науру",
		"en_short": "Nauru",
		"en_long": "Republic of Nauru",
		"region": "Oceania",
		"is_recognized": true
	},
	"NU": {
		"ru_short": "Ниуэ",
		"en_short": "Niue",
		"region": "Oceania",
		"is_recognized": false
	},
	"NZ": {
		"ru_short": "Новая Зеландия",
		"ru_long": "Новая Зеландия",
		"en_short": "New Zealand",
		"en_long": "New Zealand",
		"region": "Oceania",
		"is_recognized": true
	},
	"OM": {
		"ru_short": "Оман",
		"ru_long": "Султанат Оман",
		"en_short": "Oman",
		"en_long": "Sultanate of Oman",
		"region": "Middle East",
		"is_recognized": true
	},
	"OS": {
		"ru_short": "Южная Осетия",
		"ru_long": "Республика Южная Осетия – Государство Алания",
		"en_short": "South Ossetia",
		"en_long": "Republic of South Ossetia – the State of Alania",
		"region": "Europe",
		"is_recognized": false
	},
	"PA": {
		"ru_short": "Панама",
		"ru_long": "Республика Панама",
		"en_short": "Panama",
		"en_long": "Republic of Panamá",
		"region": "America",
		"is_recognized": true
	},
	"PE": {
		"ru_short": "Перу",
		"ru_long": "Республика Перу",
		"en_short": "Peru",
		"en_long": "Republic of Perú",
		"region": "America",
		"is_recognized": true
	},
	"PG": {
		"ru_short": "Папуа – Новая Гвинея",
		"ru_long": "Независимое Государство Папуа – Новая Гвинея",
		"en_short": "Papua New Guinea",
		"en_long": "Independent State of Papua New Guinea",
		"region": "Oceania",
		"is_recognized": true
	},
	"PH": {
		"ru_short": "Филиппины",
		"ru_long": "Республика Филиппины",
		"en_short": "Philippines",
		"en_long": "Republic of the Philippines",
		"region": "Asia",
		"is_recognized": true
	},
	"PK": {
		"ru_short": "Пакистан",
		"ru_long": "Исламская Республика Пакистан",
		"en_short": "Pakistan",
		"en_long": "Islamic Republic of Pakistan",
		"region": "Asia",
		"is_recognized": true
	},
	"PL": {
		"ru_short": "Польша",
		"ru_long": "Республика Польша",
		"en_short": "Poland",
		"en_long": "Republic of Poland",
		"region": "Europe",
		"is_recognized": true
	},
	"PS": {
		"ru_short": "Палестина",
		"ru_long": "Государство Палестина",
		"en_short": "Palestine",
		"en_long": "State of Palestine",
		"region": "Middle East",
		"is_recognized": false
	},
	"PT": {
		"ru_short": "Португалия",
		"ru_long": "Португальская Республика",
		"en_short": "Portugal",
		"en_long": "Portuguese Republic",
		"region": "Europe",
		"is_recognized": true
	},
	"PW": {
		"ru_short": "Палау",
		"ru_long": "Республика Палау",
		"en_short": "Palau",
		"en_long": "Republic of Palau",
		"region": "Oceania",
		"is_recognized": true
	},
	"PY": {
		"ru_short": "Парагвай",
		"ru_long": "Республика Парагвай",
		"en_short": "Paraguay",
		"en_long": "Republic of Paraguay",
		"region": "America",
		"is_recognized": true
	},
	"QA": {
		"ru_short": "Катар",
		"ru_long": "Государство Катар",
		"en_short": "Qatar",
		"en_long": "State of Qatar",
		"region": "Middle East",
		"is_recognized": true
	},
	"RO": {
		"ru_short": "Румыния",
		"en_short": "Romania",
		"region": "Europe",
		"is_recognized": true
	},
	"RS": {
		"ru_short": "Сербия",
		"ru_long": "Республика Сербия",
		"en_short": "Serbia",
		"en_long": "Republic of Serbia",
		"region": "Europe",
		"is_recognized": true
	},
	"RU": {
		"ru_short": "Россия",
		"ru_long": "Российская Федерация",
		"en_short": "Russia",
		"en_long": "Russian Federation",
		"region": "Europe",
		"is_recognized": true
	},
	"RW": {
		"ru_short": "Руанда",
		"ru_long": "Республика Руанда",
		"en_short": "Rwanda",
		"en_long": "Republic of Rwanda",
		"region": "Africa",
		"is_recognized": true
	},
	"SA": {
		"ru_short": "Саудовская Аравия",
		"ru_long": "Королевство Саудовская Аравия",
		"en_short": "Saudi Arabia",
		"en_long": "Kingdom of Saudi Arabia",
		"region": "Middle East",
		"is_recognized": true
	},
	"SB": {
		"ru_short": "Соломоновы Острова",
		"en_short": "Solomon Islands",
		"region": "Oceania",
		"is_recognized": true
	},
	"SC": {
		"ru_short": "Сейшельские Острова",
		"ru_long": "Республика Сейшельские Острова",
		"en_short": "Seychelles",
		"en_long": "Republic of Seychelles",
		"region": "Africa",
		"is_recognized": true
	},
	"SD": {
		"ru_short": "Судан",
		"ru_long": "Республика Судан",
		"en_short": "Sudan",
		"en_long": "Republic of the Sudan",
		"region": "Africa",
		"is_recognized": true
	},
	"SE": {
		"ru_short": "Швеция",
		"ru_long": "Королевство Швеция",
		"en_short": "Sweden",
		"en_long": "Kingdom of Sweden",
		"region": "Europe",
		"is_recognized": true
	},
	"SG": {
		"ru_short": "Сингапур",
		"ru_long": "Республика Сингапур",
		"en_short": "Singapore",
		"en_long": "Republic of Singapore",
		"region": "Asia",
		"is_recognized": true
	},
	"SI": {
		"ru_short": "Словения",
		"ru_long": "Республика Словения",
		"en_short": "Slovenia",
		"en_long": "Republic of Slovenia",
		"region": "Europe",
		"is_recognized": true
	},
	"SK": {
		"ru_short": "Словакия",
		"ru_long": "Словацкая Республика",
		"en_short": "Slovakia",
		"en_long": "Slovak Republic",
		"region": "Europe",
		"is_recognized": true
	},
	"SL": {
		"ru_short": "Сьерра-Леоне",
		"ru_long": "Республика Сьерра-Леоне",
		"en_short": "Sierra Leone",
		"en_long": "Republic of Sierra Leone",
		"region": "Africa",
		"is_recognized": true
	},
	"SM": {
		"ru_short": "Сан-Марино",
		"ru_long": "Республика Сан-Марино",
		"en_short": "San Marino",
		"en_long": "Republic of San Marino",
		"region": "Europe",
		"is_recognized": true
	},
	"SN": {
		"ru_short": "Сенегал",
		"ru_long": "Республика Сенегал",
		"en_short": "Senegal",
		"en_long": "Republic of Senegal",
		"region": "Africa",
		"is_recognized": true
	},
	"SO": {
		"ru_short": "Сомали",
		"ru_long": "Федеративная Республика Сомали",
		"en_short": "Somalia",
		"en_long": "Federal Republic of Somalia",
		"region": "Africa",
		"is_recognized": true
	},
	"SR": {
		"ru_short": "Суринам",
		"ru_long": "Республика Суринам",
		"en_short": "Suriname",
		"en_long": "Republic of Suriname",
		"region": "America",
		"is_recognized": true
	},
	"SS": {
		"ru_short": "Южный Судан",
		"ru_long": "Республика Южный Судан",
		"en_short": "South Sudan",
		"en_long": "Republic of South Sudan",
		"region": "Africa",
		"is_recognized": true
	},
	"ST": {
		"ru_short": "Сан-Томе и Принсипи",
		"ru_long": "Демократическая Республика Сан-Томе и Принсипи",
		"en_short": "Sao Tome and Principe",
		"en_long": "Democratic Republic of São Tomé and Príncipe",
		"region": "Africa",
		"is_recognized": true
	},
	"SV": {
		"ru_short": "Сальвадор",
		"ru_long": "Республика Эль-Сальвадор",
		"en_short": "El Salvador",
		"en_long": "Republic of El Salvador",
		"region": "America",
		"is_recognized": true
	},
	"SY": {
		"ru_short": "Сирия",
		"ru_long": "Сирийская Арабская Республика",
		"en_short": "Syria",
		"en_long": "Syrian Arab Republic",
		"region": "Middle East",
		"is_recognized": true
	},
	"SZ": {
		"ru_short": "Эсватини",
		"ru_long": "Королевство Эсватини",
		"en_short": "Eswatini",
		"en_long": "Kingdom of Eswatini",
		"region": "Africa",
		"is_recognized": true
	},
	"TD": {
		"ru_short": "Чад",
		"ru_long": "Республика Чад",
		"en_short": "Chad",
		"en_long": "Republic of Chad",
		"region": "Africa",
		"is_recognized": true
	},
	"TG": {
		"ru_short": "Того",
		"ru_long": "Тоголезская Республика",
		"en_short": "Togo",
		"en_long": "Togolese Republic",
		"region": "Africa",
		"is_recognized": true
	},
	"TH": {
		"ru_short": "Таиланд",
		"ru_long": "Королевство Таиланд",
		"en_short": "Thailand",
		"en_long": "Kingdom of Thailand",
		"region": "Asia",
		"is_recognized": true
	},
	"TJ": {
		"ru_short": "Таджикистан",
		"ru_long": "Республика Таджикистан",
		"en_short": "Tajikistan",
		"en_long": "Republic of Tajikistan",
		"region": "Asia",
		"is_recognized": true
	},
	"TL": {
		"ru_short": "Восточный Тимор",
		"ru_long": "Демократическая Республика Восточный Тимор",
		"en_short": "Timor-Leste",
		"en_long": "Democratic Republic of Timor-Leste",
		"region": "Asia",
		"is_recognized": true
	},
	"TM": {
		"ru_short": "Туркменистан",
		"en_short": "Turkmenistan",
		"region": "Asia",
		"is_recognized": true
	},
	"TN": {
		"ru_short": "Тунис",
		"ru_long": "Тунисская Республика",
		"en_short": "Tunisia",
		"en_long": "Republic of Tunisia",
		"region": "Africa",
		"is_recognized": true
	},
	"TO": {
		"ru_short": "Тонга",
		"ru_long": "Королевство Тонга",
		"en_short": "Tonga",
		"en_long": "Kingdom of Tonga",
		"region": "Oceania",
		"is_recognized": true
	},
	"TR": {
		"ru_short": "Турция",
		"ru_long": "Турецкая Республика",
		"en_short": "Türkiye",
		"en_long": "Republic of Türkiye",
		"region": "Middle East",
		"is_recognized": true
	},
	"TT": {
		"ru_short": "Тринидад и Тобаго",
		"ru_long": "Республика Тринидад и Тобаго",
		"en_short": "Trinidad and Tobago",
		"en_long": "Republic of Trinidad and Tobago",
		"region": "Caribbean",
		"is_recognized": true
	},
	"TV": {
		"ru_short": "Тувалу",
		"en_short": "Tuvalu",
		"region": "Oceania",
		"is_recognized": true
	},
	"TW": {
		"ru_short": "Тайвань",
		"ru_long": "Китайский Тайбэй",
		"en_short": "Taiwan",
		"en_long": "Chinese Taipei",
		"region": "Asia",
		"is_recognized": false
	},
	"TZ": {
		"ru_short": "Танзания",
		"ru_long": "Объединённая Республика Танзания",
		"en_short": "Tanzania",
		"en_long": "United Republic of Tanzania",
		"region": "Africa",
		"is_recognized": true
	},
	"UA": {
		"ru_short": "Украина",
		"en_short": "Ukraine",
		"region": "Europe",
		"is_recognized": true
	},
	"UG": {
		"ru_short": "Уганда",
		"ru_long": "Республика Уганда",
		"en_short": "Uganda",
		"en_long": "Republic of Uganda",
		"region": "Africa",
		"is_recognized": true
	},
	"US": {
		"ru_short": "США",
		"ru_long": "Соединённые Штаты Америки",
		"en_short": "USA",
		"en_long": "United States of America",
		"region": "America",
		"is_recognized": true
	},
	"UY": {
		"ru_short": "Уругвай",
		"ru_long": "Восточная Республика Уругвай",
		"en_short": "Uruguay",
		"en_long": "Oriental Republic of Uruguay",
		"region": "America",
		"is_recognized": true
	},
	"UZ": {
		"ru_short": "Узбекистан",
		"ru_long": "Республика Узбекистан",
		"en_short": "Uzbekistan",
		"en_long": "Republic of Uzbekistan",
		"region": "Asia",
		"is_recognized": true
	},
	"VA": {
		"ru_short": "Ватикан",
		"ru_long": "Государство-город Ватикан",
		"en_short": "Vatican City",
		"en_long": "Vatican City State",
		"region": "Europe",
		"is_recognized": true
	},
	"VC": {
		"ru_short": "Сент-Винсент и Гренадины",
		"en_short": "Saint Vincent and the Grenadines",
		"region": "Caribbean",
		"is_recognized": true
	},
	"VE": {
		"ru_short": "Венесуэла",
		"ru_long": "Боливарианская Республика Венесуэла",
		"en_short": "Venezuela",
		"en_long": "Bolivarian Republic of Venezuela",
		"region": "America",
		"is_recognized": true
	},
	"VN": {
		"ru_short": "Вьетнам",
		"ru_long": "Социалистическая Республика Вьетнам",
		"en_short": "Vietnam",
		"en_long": "Socialist Republic of Vietnam",
		"region": "Asia",
		"is_recognized": true
	},
	"VU": {
		"ru_short": "Вануату",
		"ru_long": "Республика Вануату",
		"en_short": "Vanuatu",
		"en_long": "Republic of Vanuatu",
		"region": "Oceania",
		"is_recognized": true
	},
	"WS": {
		"ru_short": "Самоа",
		"ru_long": "Независимое Государство Самоа",
		"en_short": "Samoa",
		"en_long": "Independent State of Samoa",
		"region": "Oceania",
		"is_recognized": true
	},
	"XK": {
		"ru_short": "Косово",
		"ru_long": "Республика Косово",
		"en_short": "Kosovo",
		"en_long": "Republic of Kosovo",
		"region": "Europe",
		"is_recognized": false
	},
	"YE": {
		"ru_short": "Йемен",
		"ru_long": "Йеменская Республика",
		"en_short": "Yemen",
		"en_long": "Republic of Yemen",
		"region": "Middle East",
		"is_recognized": true
	},
	"ZA": {
		"ru_short": "ЮАР",
		"ru_long": "Южно-Африканская Республика",
		"en_short": "South Africa",
		"en_long": "Republic of South Africa",
		"region": "Africa",
		"is_recognized": true
	},
	"ZM": {
		"ru_short": "Замбия",
		"ru_long": "Республика Замбия",
		"en_short": "Zambia",
		"en_long": "Republic of Zambia",
		"region": "Africa",
		"is_recognized": true
	},
	"ZW": {
		"ru_short": "Зимбабве",
		"ru_long": "Республика Зимбабве",
		"en_short": "Zimbabwe",
		"en_long": "Republic of Zimbabwe",
		"region": "Africa",
		"is_recognized": true
	}
}