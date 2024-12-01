// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	// S/V Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Singles",
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712619/">Random Battle Suggestions</a>`,
		],

		mod: 'gen9',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Unrated Random Battle",

		mod: 'gen9',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Free-For-All Random Battle",

		mod: 'gen9',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Random Battle (Blitz)",

		mod: 'gen9',
		team: 'random',
		ruleset: ['[Gen 9] Random Battle', 'Blitz'],
	},
	{
		name: "[Gen 9] Multi Random Battle",

		mod: 'gen9',
		team: 'random',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod',
		],
	},
	{
		name: "[Gen 9] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3732644/">SV OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712513/">SV OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3732813/">SV OU Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3732719/">Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3724082/">Ubers Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard'],
		banlist: ['AG', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects'],
	},
	{
		name: "[Gen 9] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3728797/">UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729854/">UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3720278/">UU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 9] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725482/">RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729823/">RU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3717072/">RU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] UU'],
		banlist: ['UU', 'RUBL', 'Light Clay'],
	},
	{
		name: "[Gen 9] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715408/">NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729943/">NU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730216/">NU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] RU'],
		banlist: ['RU', 'NUBL', 'Quick Claw'],
	},
	{
		name: "[Gen 9] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729623/">PU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719989/">PU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] NU'],
		banlist: ['NU', 'PUBL', 'Damp Rock'],
	},
	{
		name: "[Gen 9] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710868/">Little Cup Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712989/">Little Cup Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712664/">Little Cup Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Cutiefly', 'Diglett-Base', 'Dunsparce', 'Duraludon', 'Flittle', 'Gastly', 'Girafarig', 'Gligar',
			'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Snivy', 'Stantler', 'Vulpix', 'Vulpix-Alola', 'Yanma', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3727849/">Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3727976/">Monotype Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729937/">Monotype Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Blaziken', 'Deoxys-Base', 'Deoxys-Attack',
			'Dialga', 'Dialga-Origin', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Ursaluna-Bloodmoon', 'Urshifu-Base',
			'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Booster Energy', 'Damp Rock', 'Focus Band',
			'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Acupressure', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712857/">SV CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3718107/">SV CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714023/">SV CAP Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 9] BSS Reg F",

		mod: 'gen9',
		bestOfDefault: true,
	   ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer'],
		banlist: [],
	},
	{
		name: "[Gen 9] BSS Reg G",

		mod: 'gen9',
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] Custom Game",

		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// S/V Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Doubles",
	},
	{
		name: "[Gen 9] Random Doubles Battle",

		mod: 'gen9',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710876/">Doubles OU Sample Teams</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Shadow Tag'],
	},
	{
		name: "[Gen 9] Doubles Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712864/">Doubles Ubers</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 9] Doubles UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712825/">Doubles UU</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Doubles OU', 'Evasion Abilities Clause'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 9] Doubles LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710957/">Doubles LC</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup', 'Sleep Clause Mod'],
		banlist: ['Basculin-White-Striped', 'Dunsparce', 'Duraludon', 'Gligar', 'Murkrow', 'Qwilfish-Hisui', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Vulpix', 'Vulpix-Alola', 'Yanma'],
	},
	{
		name: "[Gen 9] VGC 2023 Reg D",

		mod: 'gen9predlc',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets'],
		banlist: ['Walking Wake', 'Iron Leaves'],
	},
	{
		name: "[Gen 9] VGC 2024 Reg G",

		mod: 'gen9',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] VGC 2024 Reg G (Bo3)",

		mod: 'gen9',
		gameType: 'doubles',
		challengeShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Force Open Team Sheets', 'Best of = 3', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// S/V Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Unofficial Metagames",
	},
	{
		name: "[Gen 9] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710864/">1v1 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712375/">1v1 Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Terastal Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause', '!Sleep Clause Mod',
		],
		banlist: [
			'Arceus', 'Archaludon', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Cinderace', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed',
			'Dialga', 'Dialga-Origin', 'Dragonite', 'Eternatus', 'Flutter Mane', 'Gholdengo', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Meloetta', 'Mew', 'Mewtwo', 'Mimikyu', 'Miraidon', 'Necrozma',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Cornerstone', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Scream Tail', 'Shaymin-Sky',
			'Snorlax', 'Solgaleo', 'Terapagos', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Focus Band', 'Focus Sash',
			'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Acupressure', 'Perish Song',
		],
	},
	{
		name: "[Gen 9] 2v2 Doubles",
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710849/">2v2 Doubles</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: [
			'Picked Team Size = 2', 'Max Team Size = 4',
			'Standard Doubles', 'Accuracy Moves Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Evasion Items Clause',
		],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Iron Hands', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Commander', 'Moody', 'Focus Sash', 'King\'s Rock', 'Razor Fang', 'Ally Switch', 'Final Gambit',
			'Perish Song', 'Swagger',
		],
	},
	{
		name: "[Gen 8] Multi Monotype Random Battle",
		desc: `All the Pok&eacute;mon on a team must share a type; Free for All Battles for 4 players.`,
		mod: 'gen8',
		team: 'random',
		gameType: 'multi',
		tournamentShow: true,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Same Type Clause', 'Standard', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] VGC 2023",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677186/">VGC 2022 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695848/">VGC 2022 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3696395/">VGC 2022 Viability Rankings</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		// searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},


	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex",
	},
	{
		name: "[Gen 9] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3722196/">AG Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3724219/">AG Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3727176/">AG Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['Min Source Gen = 9', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 9] Ubers UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3731761/">Ubers UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3731754/">Ubers UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3731755/">Ubers UU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] Ubers'],
		banlist: [
			// Ubers OU
			'Arceus-Base', 'Arceus-Fairy', 'Arceus-Ground', 'Calyrex-Ice', 'Clodsire', 'Deoxys-Attack', 'Eternatus', 'Flutter Mane',
			'Giratina-Origin', 'Glimmora', 'Gliscor', 'Grimmsnarl', 'Groudon', 'Hatterene', 'Ho-Oh', 'Iron Bundle', 'Kingambit',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Miraidon', 'Necrozma-Dusk-Mane', 'Rayquaza', 'Ribombee', 'Skeledirge', 'Ting-Lu',
			'Zacian-Crowned',
			// Ubers UUBL
			'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Water', 'Lunala', 'Shaymin-Sky', 'Zekrom',
		],
	},
	{
		name: "[Gen 9] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719022/">ZU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 9] Free-For-All",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711724/">Free-For-All</a>`,
		],

		mod: 'gen9',
		gameType: 'freeforall',
		rated: false,
		tournamentShow: false,
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod', '!Evasion Items Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin',
			'Dondozo', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Koraidon', 'Kyogre',
			'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame',
			'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu',
			'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Toxic Chain', 'Toxic Debris', 'Acupressure', 'Aromatic Mist',
			'Baton Pass', 'Coaching', 'Court Change', 'Decorate', 'Dragon Cheer', 'Final Gambit', 'Flatter', 'Floral Healing', 'Follow Me', 'Heal Pulse',
			'Last Respects', 'Malignant Chain', 'Poison Fang', 'Rage Powder', 'Spicy Extract', 'Swagger', 'Toxic', 'Toxic Spikes',
		],
	},
	{
		name: "[Gen 9] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711750/">LC UU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] LC'],
		banlist: [
			'Chinchou', 'Diglett-Alola', 'Elekid', 'Foongus', 'Glimmet', 'Gothita', 'Grimer-Alola', 'Grookey', 'Growlithe-Hisui', 'Impidimp',
			'Koffing', 'Magby', 'Mareanie', 'Mienfoo', 'Minccino', 'Mudbray', 'Pawniard', 'Sandshrew-Alola', 'Shellder', 'Shellos', 'Snubbull',
			'Stunky', 'Timburr', 'Tinkatink', 'Toedscool', 'Trapinch', 'Voltorb-Hisui', 'Vullaby',
		],
	},
	{
		name: "[Gen 9] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710638/">NFE</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712567/">NFE Resources</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Not Fully Evolved', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Basculin-White-Striped', 'Bisharp', 'Chansey', 'Dipplin', 'Duraludon', 'Gurdurr', 'Haunter', 'Magmar', 'Magneton', 'Porygon2', 'Primeape',
			'Qwilfish-Hisui', 'Rhydon', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Ursaring', 'Vulpix-Base', 'Arena Trap', 'Magnet Pull', 'Shadow Tag',
			'Baton Pass',
		],
	},
	// Other National Dex Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "Other National Dex Tiers",
	},
	{
		name: "[Gen 9] National Dex UUbers",

		mod: 'gen9',
		ruleset: ['Standard NatDex'],
		banlist: [
			'AG', 'Uber', 'Power Construct', 'Ultranecrozium Z',
			'Arceus-Base', 'Arceus-Dark', 'Arceus-Fairy', 'Arceus-Ground', 'Arceus-Ghost', 'Calyrex-Ice', 'Chansey', 'Chi-Yu', 'Deoxys-Attack', 'Ditto', 'Eternatus', 'Giratina-Origin', 'Glimmora', 'Grimmsnarl',
			'Groudon-Primal', 'Ho-Oh', 'Kingambit', 'Kyogre', 'Marshadow', 'Melmetal', 'Mewtwo-Mega-Y', 'Necrozma-Dusk-Mane', 'Rayquaza', 'Salamence-Mega', 'Shaymin-Sky',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zygarde-Base',
		],
	},
	{
		name: "[Gen 9] National Dex NU",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex RU'],
		banlist: ['ND RU', 'Thundurus', 'Sharpedo-Mega', 'Conkeldurr','Staraptor', 'Manectric-Mega', 'Scolipede', 'Durant', 'Primarina', 'Nidoking', 'Arctozolt'],
		unbanlist: ['Slowbronite'],
	},
	{
		name: "[Gen 9] National Dex PU",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex RU'],
		banlist: ['ND RU', 'Thundurus', 'Sharpedo-Mega', 'Conkeldurr', 'Staraptor', 'Manectric-Mega', 'Scolipede', 'Durant', 'Primarina', 'Nidoking', 'Arctozolt',
					 'Absol-Mega', 'Bronzong', 'Chandelure', 'Chesnaught', 'Cyclizar', 'Diggersby', 'Donphan', 'Empoleon', 'Feraligatr', 'Flygon', 'Froslass', 'Gigalith',
					 'Golisopod', 'Houndoom-Mega', 'Houndstone', 'Iron Jugulis', 'Iron Thorns', 'Krookodile', 'Lycanroc', 'Milotic', 'Ninetales', 'Orthworm', 'Pidgeot-Mega',
					 'Porygon2', 'Raikou', 'Registeel', 'Rhyperior', 'Seismitoad', 'Sharpedo', 'Shaymin', 'Shuckle', 'Slowbro-Galar', 'Sylveon', 'Tangrowth', 'Tinkaton', 'Torkoal',
					 'Tornadus', 'Toxtricity', 'Lokix', 'Nidoqueen', 'Obstagoon', 'Oricorio-Pom-Pom', 'Scream Tail', 'Stakataka', 'Suicune', 'Venomoth', 'Damp Rock'],
	},
	{
		name: "[Gen 9] National Dex STABmons",

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'STABmons Move Legality','OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod','Sleep Moves Clause','Terastal Clause'],
        banlist: [
            'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
            'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail','Basculegion', 'Basculegion-F', 'Cloyster','Dragapult', 'Dragonite', 'Enamorus-Base', 'Iron Bundle', 'Kartana', 'Komala','Kyurem','Tapu Koko','Tapu Lele','Zoroark-Hisui'
        ],
		unbanlist: ['Kingambit', 'Palafin', 'Roaring Moon', 'Shedinja', 'Ogerpon-Hearthflame'

		],
        restricted: [
            'Acupressure', 'Astral Barrage', 'Belly Drum', 'Dire Claw', 'Double Iron Bash', 'Extreme Speed', 'Fillet Away', 'Fishious Rend', 'Geomancy', 'Gigaton Hammer', 'Last Respects',
            'No Retreat', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Thousand Arrows', 'V-create', 'Victory Dance', 'Wicked Blow',
        ],
    },
	{
		name: "[Gen 9] National Dex Almost Any Ability",

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause','!Obtainable Abilities', 'Ability Clause = 2', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Huge Power',
			'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull', 'Neutralizing Gas',
			'Parental Bond', 'Pure Power', 'Simple', 'Speed Boost', 'Triage', 'Unburden', 'Water Bubble', 'Wonder Guard', 'Archeops', 'Baxcalibur', 'Blacephalon',
			'Dracovish', 'Dragapult', 'Dragonite', 'Enamorus-Base', 'Hoopa-Unbound', 'Kartana', 'Kingambit', 'Iron Hands', 'Iron Valiant', 'Regigigas', 'Slaking', 'Sneasler',
			'Urshifu-Rapid-Strike', 'Walking Wake', 'Xurkitree', 'Zamazenta'
		],
		unbanlist: ['Zamazenta-Crowned'],
    },
	{
		name: "[Gen 9] National Dex Mix and Mega",

		mod: 'mixandmega',
		ruleset: ['Standard NatDex','Mega Rayquaza Clause', 'Min Source Gen = 9'],
		banlist: ['Calyrex-Shadow','Electrify', 'Pidgeotite',
		],
		unbanlist: ['Dragapult','Eternatus','Gholdengo','Kilowattrel','Kyogre','Sandy Shocks','Zapdos','Beedrillite','Blazikenite','Kangaskhanite',
		'Mawilite','Medichamite','Rusted Sword',],
		restricted: ['Arceus','Calyrex-Ice','Deoxys-Attack','Deoxys-Base','Deoxys-Speed','Dialga','Eternatus','Giratina','Groudon','Ho-Oh','Kyogre',
		'Kyurem-Black','Kyurem-White','Lugia','Lunala','Marshadow','Melmetal','Mewtwo','Naganadel','Necrozma-Dawn-Wings','Necrozma-Dusk-Mane','Palkia',
		'Pheromosa','Rayquaza','Regigigas','Reshiram','Urshifu','Xerneas','Yveltal','Zekrom','Power Construct','Beedrillite','Blazikenite','Kangaskhanite',
		'Mawilite','Medichamite','Rusted Sword',

		],
    },
	{
		name: "[Gen 9] National Dex Godly Gift",

		mod: 'gen9',
		ruleset: ['Standard NatDex','Godly Gift Mod', 'Species Clause', 'OHKO Clause', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Evasion Moves Clause',
		'Overflow Stat Mod', 'Sleep Moves Clause', 'Terastal Clause', 'Mega Rayquaza Clause'],
		banlist: ['Blissey', 'Calyrex-Shadow','Chansey','Deoxys-Attack','Koraidon','Miraidon'
		],
		restricted: ['Arceus','Blastoise-Mega','Blaziken-Mega','Calyrex-Ice','Chi-Yu','Darmanitan-Galar','Deoxys-Base','Deoxys-Defense','Deoxys-Speed','Dialga','Dialga-Origin','Dracovish','Espathra',
		'Eternatus','Flutter Mane','Genesect','Gengar-Mega','Giratina','Giratina-Origin','Groudon','Groudon-Primal','Ho-Oh','Iron Bundle','Kangaskhan-Mega','Kingambit','Kyogre','Kyogre-Primal',
		'Kyurem-Black','Kyurem-White','Lucario-Mega','Lugia','Lunala','Magearna','Marowak-Alola','Marshadow','Medicham-Mega','Mawile-Mega','Melmetal','Metagross-Mega',
		'Mewtwo','Mewtwo-Mega-X','Mewtwo-Mega-Y','Naganadel','Necrozma-Dusk-Mane','Necrozma-Dawn-Wings','Palkia','Palkia-Origin','Pheromosa','Pikachu','Rayquaza','Reshiram',
		'Sableye-Mega','Salamence-Mega','Shaymin-Sky','Smeargle','Solgaleo','Spectrier','Toxapex','Ursaluna','Ursaluna-Bloodmoon','Xerneas','Yveltal','Zacian','Zacian-Crowned',
		'Zamazenta-Crowned','Zekrom','Power Construct',
		],
    },
	{
		name: "[Gen 9] National Dex NFE",

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Not Fully Evolved', 'Terastal Clause'],
		banlist: [
			'Basculin-White-Striped', 'Bisharp', 'Chansey', 'Doublade', 'Duraludon','Gligar','Kadabra','Haunter', 'Magneton', 'Mr. Mime-Galar', 'Pikachu', 'Porygon2', 'Primeape', 'Qwilfish-Hisui', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Ursaring'
		],
		unbanlist: ['Moody'],
	},
	{
		name: "[Gen 9] National Dex Convergence",

		mod: 'gen9',
		ruleset: ['Standard NatDex','Convergence Legality','!Obtainable Abilities','Sleep Moves Clause'],
		banlist: [
			'Articuno-Galar','Cosmog','Golisopod','Regigigas','Slaking','Smeargle','Tapu Lele','Walking Wake','Zamazenta','Comatose','Contrary',
			'Huge Power','Imposter','Pure Power','Simple','Speed Boost','Unburden','Belly Drum','Electrify','Extreme Speed','Quiver Dance',
			'Revival Blessing','Shell Smash','Shift Gear','Stored Power','Tail Glow','Transform','Damp Rock','Medichamite','Mawilite','Boomburst',
			'Virizion','Kartana','Gardevoir-Mega','Enamorus','Ogerpon-Hearthflame'
					],
		unbanlist: ['Espathra'],
	},
	// Pet Mods
	///////////////////////////////////////////////////////////////////

	{
		section: "Pet Mods",
	},
	{
		name: "[Gen 9] Do Not Use",
		desc: `A National Dex solomod where only Pok&eacute;mon with 280 BST or less are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3734326/">Do Not Use</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', 'Z-Move Clause'],
		banlist: ['Dewpider', 'Diglett-Alola', 'Flittle', 'Nidoran-M', 'Smeargle', 'Wattrel', 'Wingull', 'Wishiwashi', 'Zigzagoon-Base', 'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Baton Pass'],
		onBegin() {
			this.add('-message', `Welcome to Do Not Use!`);
			this.add('-message', `This is a National Dex metagame where only Pokemon with less than 280 BST are allowed, plus a select few others!`);
			this.add('-message', `You can find our thread and metagame resources here:`);
			this.add('-message', `https://www.smogon.com/forums/threads/3734326/`);
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.bst > 280 && !['Luvdisc', 'Unown', 'Capsakid', 'Snorunt'].includes(species.baseSpecies)) {
				return [`Only Pok\u00e9mon with a BST of 280 or lower are allowed.`, `(${species.name}'s BST is ${species.bst}.)`];
			}
		},
	},
	{
		name: "[Gen 2] Modern Gen 2",
		desc: `A Gen 2 solomod where all Pok&eacute;mon and moves from future generations are legal.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725808/">Modern Gen 2</a>`,
		],

		mod: 'moderngen2',
		ruleset: ['Standard', 'Useless Items Clause', 'Useless Moves Clause', 'MG2 Mod', 'Sleep Moves Clause', '+No Ability', '-All Abilities'],
		banlist: ['AG', 'Uber', 'Fake Out', 'Shell Smash', 'Last Respects', 'Baton Pass', 'Alakazite', 'Soul Dew'],
	},
	{
		name: "[Gen 6] NEXT OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3476151/">Gen-NEXT Development Thread</a>`,
		],

		mod: 'gennext',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},

	// Draft League
	///////////////////////////////////////////////////////////////////

	{
		section: "Draft",
		column: 1,
	},
{
		name: "[Gen 9] National Dex Low-Tier Legends Draft",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710848/">National Dex Metagame Discussion</a>`,
			'&bullet; <a href="https://discord.gg/RZWbfSq">Dawn Draft League Discord</a>'
		],

		mod: 'gen9',
		ruleset: ['OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'Z-Move Clause', 'Baton Pass Clause',
		'Obtainable', '+Unobtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Team Preview', 'Nickname Clause', 'HP Percentage Mod', 'Cancel Mod',
		'Endless Battle Clause',
		],
		banlist: [
			'ND Uber', 'Arena Trap', 'Pelipper + Drizzle', 'Politoed + Drizzle', 'Ninetales + Drought', 'Torkoal + Drought', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist','Focus Band',
			'Last Respects', 'Acupressure', 'Revival Blessing', 'Hidden Power',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.natDexTier === 'Illegal') {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			// if (species.natDexTier === "Unreleased") {
			// 	const basePokemon = this.toID(species.baseSpecies);
			// 	if (this.ruleTable.has(`+pokemon:${species.id}`) || this.ruleTable.has(`+basepokemon:${basePokemon}`)) {
			// 		return;
			// 	}
			// 	return [`${set.name || set.species} does not exist in the National Dex.`];
			// }
			// Items other than Z-Crystals and Pokémon-specific items should be illegal
			if (!set.item) return;
			const item = this.dex.items.get(set.item);
			if (!item.isNonstandard) return;
			if (
				['Past', 'Unobtainable'].includes(item.isNonstandard) &&
				!item.zMove && !item.itemUser && !item.forcedForme && !item.isBerry
			) {
				if (this.ruleTable.has(`+item:${item.id}`)) return;
				return [`${set.name}'s item ${item.name} does not exist in Gen ${this.dex.gen}.`];
			}
		},
	},
	{
		name: "[Gen 9] Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard Draft', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] Tera Preview Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] 6v6 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Draft', '!Sleep Clause Mod', '!Evasion Clause', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] 4v4 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Standard Draft', 'Item Clause', 'VGC Timer', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Clause', 'Adjust Level = 50', 'Picked Team Size = 4', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] NatDex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard Draft', '+Unobtainable', '+Past'],
	},
	{
		name: "[Gen 9] Tera Preview NatDex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] NatDex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] NatDex 6v6 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 9] 6v6 Doubles Draft', '+Unobtainable', '+Past', '!! Min Source Gen = 3'],
	},
	{
		name: "[Gen 9] NatDex LC Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] NatDex Draft', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] Galar Dex Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard Draft', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] NatDex Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard Draft', 'Dynamax Clause', '+Past'],
	},
	{
		name: "[Gen 8] NatDex 4v4 Doubles Draft",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Draft', 'Item Clause', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Moves Clause', 'Adjust Level = 50', 'Picked Team Size = 4', '+Past'],
	},
	{
		name: "[Gen 7] Draft",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard Draft', '+LGPE'],
	},
	{
		name: "[Gen 6] Draft",

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard Draft', 'Moody Clause', 'Swagger Clause'],
		banlist: ['Soul Dew'],
	},

	// OM of the Month
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 2,
	},
	{
		name: "[Gen 9] Fervent Impersonation",
		desc: `Nickname a Pok&eacute;mon after another Pok&eacute;mon that it shares a moveset with, and it will transform into the Pok&eacute;mon it's nicknamed after once it drops to or below 50% health.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3740523/">Fervent Impersonation</a>`,
		],

		mod: 'gen9',
		// searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Fervent Impersonation Mod', '!Nickname Clause'],
		banlist: ['Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Dire Claw', 'Shed Tail', 'Last Respects'],
		restricted: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus',
			'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna',
			'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky',
			'Solgaleo', 'Terapagos', 'Urshifu-Base', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
		],
		// Implemented the mechanics as a Rule because I'm too lazy to make battles read base format for `onResidual` at the moment
	},
	{
		name: "[Gen 9] 350 Cup",
		desc: `Pokemon with a BST of 350 or lower have their stats doubled.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3724198/">350 Cup</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Sleep Moves Clause', '350 Cup Mod', 'Evasion Clause'],
		banlist: ['Calyrex-Shadow', 'Flittle', 'Gastly', 'Miraidon', 'Pikachu', 'Rufflet', 'Arena Trap', 'Moody', 'Shadow Tag', 'Eviolite', 'Baton Pass'],
	},
	{
		name: "[Gen 9] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Restricted Pok&eacute;mon) depending on its position in the team. If there is no restricted Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710734/">Godly Gift</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3718065/">Godly Gift Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Godly Gift Mod'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Koraidon', 'Miraidon', 'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag',
			'Swift Swim', 'Bright Powder', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Chi-Yu', 'Crawdaunt', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Espathra', 'Eternatus',
			'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gliscor', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Iron Bundle', 'Kingambit', 'Kyogre', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin',
			'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky', 'Smeargle', 'Solgaleo', 'Terapagos', 'Toxapex', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Volcarona', 'Zacian',
			'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
		],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710568/">Almost Any Ability</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710571/">AAA Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Enamorus-Base',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Iron Valiant', 'Keldeo', 'Koraidon',
			'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern', 'Palkia',
			'Palkia-Origin', 'Raging Bolt', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Slaking', 'Sneasler', 'Solgaleo', 'Spectrier', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Walking Wake', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Huge Power',
			'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal',
			'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Toxic Debris', 'Triage', 'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Razor Fang',
			'Baton Pass', 'Last Respects', 'Revival Blessing', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Balanced Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710859/">Balanced Hackmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712766/">BH Resources</a>`,
		],

		mod: 'gen9',
		ruleset: [
			'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Moves Clause',
			'Endless Battle Clause', 'Hackmons Forme Legality', 'Species Reveal Clause', 'Terastal Clause',
		],
		banlist: [
			'Calyrex-Shadow', 'Deoxys-Attack', 'Diancie-Mega', 'Gengar-Mega', 'Groudon-Primal', 'Kartana', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Rayquaza-Mega',
			'Regigigas', 'Shedinja', 'Slaking', 'Arena Trap', 'Comatose', 'Contrary', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Illusion', 'Innards Out',
			'Libero', 'Liquid Ooze', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Protean', 'Pure Power',
			'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Baton Pass', 'Belly Drum', 'Ceaseless Edge', 'Dire Claw', 'Electro Shot', 'Fillet Away',
			'Imprison', 'Last Respects', 'Lumina Crash', 'Photon Geyser', 'Quiver Dance', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Substitute', 'Shell Smash',
			'Tail Glow',
		],
	},
	{
		name: "[Gen 9] Inheritance",
		desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712296/">Inheritance</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Cresselia', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dondozo', 'Dragapult', 'Eternatus',
			'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hoopa-Unbound', 'Ho-Oh', 'Iron Bundle', 'Iron Valiant', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Oricorio', 'Oricorio-Pa\'u', 'Oricorio-Pom-Pom',
			'Oricorio-Sensu', 'Palkia', 'Palkia-Origin', 'Pecharunt', 'Rayquaza', 'Regieleki', 'Regigigas', 'Reshiram', 'Sableye', 'Samurott-Hisui', 'Scream Tail', 'Shaymin-Sky',
			'Slaking', 'Smeargle', 'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Ursaluna-Base', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Arena Trap', 'Drizzle', 'Drought', 'Good as Gold', 'Huge Power', 'Imposter', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Poison Heal', 'Pure Power',
			'Shadow Tag', 'Speed Boost', 'Stakeout', 'Water Bubble', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Fillet Away', 'Last Respects', 'Rage Fist', 'Shed Tail',
			'Shell Smash',
		],
		getEvoFamily(speciesid) {
			let species = Dex.species.get(speciesid);
			while (species.prevo) {
				const prevoSpecies = Dex.species.get(species.prevo);
				if (prevoSpecies.evos.length > 1) break;
				species = prevoSpecies;
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const pokemon of Dex.species.all()) {
					if (pokemon.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(pokemon.isNonstandard)}`)) continue;
					if (pokemon.battleOnly) continue;
					if (this.ruleTable.isBannedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](pokemon.id);
						} else {
							teamHas.abilityMap[abilityId] = [pokemon.id];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.species.get(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
			if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
				return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
			}

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.abilities.get(set.ability);
			if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${ability.name} is not available on a legal Pok\u00e9mon.`];

			(this.format as any).debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).
			const hpType = set.hpType;

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.species.get(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				const evoFamily = format.getEvoFamily!(donorSpecies.id);
				if (validSources.includes(evoFamily)) continue;

				set.species = donorSpecies.name;
				set.name = donorSpecies.baseSpecies;
				const annoyingPokemon = ["Iron Leaves", "Walking Wake", "Iron Boulder", "Gouging Fire", "Iron Crown", "Raging Bolt"];
				if (annoyingPokemon.includes(donorSpecies.name) || annoyingPokemon.includes(species.name)) {
					set.hpType = "Dark";
				}
				const problems = this.validateSet(set, teamHas);
				if (!problems?.length) {
					validSources.push(evoFamily);
					canonicalSource = donorSpecies.name;
				}
				// Specific for the basic implementation of Donor Clause (see onValidateTeam).
				if (validSources.length > 1) break;
			}
			(this.format as any).debug = false;

			set.name = name;
			set.species = species.name;
			set.hpType = hpType;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.species.get(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `pokeball` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.pokeball = `${set.pokeball}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			if (this.ruleTable.has('abilityclause')) {
				const abilityTable = new this.dex.Multiset<string>();
				const base: {[k: string]: string} = {
					airlock: 'cloudnine',
					armortail: 'queenlymajesty',
					battlearmor: 'shellarmor',
					clearbody: 'whitesmoke',
					dazzling: 'queenlymajesty',
					emergencyexit: 'wimpout',
					filter: 'solidrock',
					gooey: 'tanglinghair',
					insomnia: 'vitalspirit',
					ironbarbs: 'roughskin',
					keeneye: 'illuminate',
					libero: 'protean',
					minus: 'plus',
					moxie: 'chillingneigh',
					powerofalchemy: 'receiver',
					propellertail: 'stalwart',
					teravolt: 'moldbreaker',
					turboblaze: 'moldbreaker',
				};
				const num = parseInt(this.ruleTable.valueRules.get('abilityclause')!);
				for (const set of team) {
					let ability = this.toID(set.ability.split('0')[0]);
					if (!ability) continue;
					if (ability in base) ability = base[ability] as ID;
					if (abilityTable.get(ability) >= num) {
						return [
							`You are limited to ${num} of each ability by ${num} Ability Clause.`,
							`(You have more than ${num} ${this.dex.abilities.get(ability).name} variants)`,
						];
					}
					abilityTable.add(ability);
				}
			}

			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			const requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				const [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) {
					requiredFamilies[familyId] = 1;
				} else {
					requiredFamilies[familyId]++;
				}
				if (requiredFamilies[familyId] > 1) {
					return [
						`You are limited to up to one inheritance from each evolution family by the Donor Clause.`,
						`(You inherit more than once from ${this.dex.species.get(familyId).name}).`,
					];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.pokeball.includes('0')) {
					const donor = pokemon.pokeball.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					// @ts-ignore
					pokemon.pokeball = this.toID(pokemon.pokeball.split('0')[0]);
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.species.get(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},
	{
		name: "[Gen 9] UUbers",
		/*threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710870/">Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712978/">Ubers Viability Rankings</a>`,
		],*/

		mod: 'gen9',
		ruleset: ['Standard'],
		banlist: [
			'AG', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass',
			'Miraidon', 'Koraidon', 'Zacian-Crowned', 'Flutter Mane', 'Kyogre', 'Arceus-Base', 'Skeledirge', 'Groudon', 'Arceus-Ground', 'Ogerpon-Hearthflame',
			'Ting-Lu', 'Giratina-Origin', 'Giratina-Altered', 'Rayquaza', 'Iron Bundle', 'Eternatus', 'Annihilape', 'Chien-Pao', 'Great Tusk', 'Ribombee', 'Calyrex-Ice',
			'Regieleki', 'Kingambit', 'Clodsire', 'Arceus-Fairy', 'Landorus-Therian', 'Basculegion-Base', 'Corviknight', 'Mewtwo', 'Glimmora', 'Toxapex', 'Iron Treads',
			'Ditto', 'Arceus-Steel', 'Arceus-Water', 'Arceus-Flying', 'Arceus-Electric', 'Dondozo', 'Grimmsnarl', 'Hatterene', 'Gliscor', 'Basculegion-F', 'Arceus-Ghost', 'Shaymin-Sky',
		],
	},
	{
		name: "[Gen 9] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Primal orbs, Origin orbs, and Rusted items with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710921/">Mix and Mega</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3716385/">Mix and Mega Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Standard OMs', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Calyrex-Shadow', 'Koraidon', 'Kyogre', 'Miraidon', 'Moody', 'Rusted Sword', 'Shadow Tag', 'Beedrillite', 'Blazikenite', 'Gengarite',
			'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Red Orb', 'Baton Pass', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Basculegion-Base', 'Calyrex-Ice', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dragapult', 'Eternatus', 'Flutter Mane',
			'Gengar', 'Gholdengo', 'Giratina', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Kilowattrel', 'Kyurem-Black', 'Kyurem-White',
			'Lunala', 'Manaphy', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Regigigas', 'Reshiram', 'Slaking',
			'Sneasler', 'Ursaluna-Bloodmoon', 'Urshifu-Base', 'Zacian', 'Zekrom',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.megaStone && !item.onPrimal && !item.forcedForme?.endsWith('Origin') &&
					!item.name.startsWith('Rusted') && !item.name.endsWith('Mask')) continue;
				const natdex = this.ruleTable.has('standardnatdex');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if ((item.itemUser?.includes(species.name) && !item.megaStone && !item.onPrimal) ||
					(natdex && species.name.startsWith('Necrozma-') && item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each mega stone/orb/rusted item/sinnoh item/mask.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const originalFormeSecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (originalFormeSecies.exists && pokemon.m.originalSpecies !== originalFormeSecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalFormeSecies.requiredItem || originalFormeSecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] Partners in Crime",
		desc: `Doubles-based metagame where both active ally Pok&eacute;mon share abilities and moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710997/">Partners in Crime</a>`,
		],

		mod: 'partnersincrime',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Cresselia', 'Darkrai', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Flutter Mane',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Smeargle', 'Solgaleo', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Contrary', 'Dancer', 'Huge Power', 'Moody', 'Pure Power', 'Serene Grace', 'Shadow Tag',
			'Bright Powder', 'King\'s Rock', 'Razor Fang', 'Ally Switch', 'Dragon Cheer', 'Last Respects', 'Revival Blessing', 'Swagger',
		],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.trackPP = new Map<string, number>();
			}
		},
		onBeforeSwitchIn(pokemon) {
			pokemon.m.curMoves = this.dex.deepClone(pokemon.moves);
			let ngas = false;
			for (const poke of this.getAllActive()) {
				if (this.toID(poke.ability) === ('neutralizinggas' as ID)) {
					ngas = true;
					break;
				}
			}
			const BAD_ABILITIES = ['trace', 'imposter', 'neutralizinggas', 'illusion', 'wanderingspirit'];
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.ability !== pokemon.ability) {
				if (!pokemon.m.innate && !BAD_ABILITIES.includes(this.toID(ally.ability))) {
					pokemon.m.innate = 'ability:' + ally.ability;
					if (!ngas || ally.getAbility().flags['cantsuppress'] || pokemon.hasItem('Ability Shield')) {
						pokemon.volatiles[pokemon.m.innate] = {id: pokemon.m.innate, target: pokemon};
						pokemon.m.startVolatile = true;
					}
				}
				if (!ally.m.innate && !BAD_ABILITIES.includes(this.toID(pokemon.ability))) {
					ally.m.innate = 'ability:' + pokemon.ability;
					if (!ngas || pokemon.getAbility().flags['cantsuppress'] || ally.hasItem('Ability Shield')) {
						ally.volatiles[ally.m.innate] = {id: ally.m.innate, target: ally};
						ally.m.startVolatile = true;
					}
				}
			}
		},
		// Starting innate abilities in scripts#actions
		onSwitchOut(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
		onFaint(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
	},
	{
		name: "[Gen 9] Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711011/">Shared Power</a>`,
		],

		mod: 'sharedpower',
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause'],
		banlist: [
			'Arceus', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Clefable', 'Deoxys-Base', 'Deoxys-Attack', 'Dondozo', 'Eternatus', 'Flutter Mane', 'Greninja',
			'Iron Crown', 'Kingambit', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Koraidon', 'Landorus-Base', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky', 'Spectrier', 'Terapagos',
			'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Chlorophyll', 'Moody', 'Neutralizing Gas', 'Regenerator', 'Shadow Tag',
			'Speed Boost', 'Stench', 'Swift Swim', 'Unburden', 'King\'s Rock', 'Leppa Berry', 'Razor Fang', 'Starf Berry', 'Baton Pass', 'Extreme Speed',
			'Last Respects',
		],
		unbanlist: ['Arceus-Bug', 'Arceus-Dragon', 'Arceus-Fire', 'Arceus-Ice'],
		restricted: [
			'Armor Tail', 'Comatose', 'Contrary', 'Dazzling', 'Fur Coat', 'Gale Wings', 'Good as Gold', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter',
			'Magic Bounce', 'Magic Guard', 'Magnet Pull', 'Mold Breaker', 'Multiscale', 'Poison Heal', 'Prankster', 'Protosynthesis', 'Pure Power', 'Purifying Salt',
			'Queenly Majesty', 'Quick Draw', 'Quick Feet', 'Sand Rush', 'Simple', 'Slush Rush', 'Stakeout', 'Stamina', 'Sturdy', 'Surge Surfer', 'Tinted Lens',
			'Triage', 'Unaware', 'Water Bubble',
		],
		onValidateRule() {
			if (this.format.gameType !== 'singles') {
				throw new Error(`Shared Power currently does not support ${this.format.gameType} battles.`);
			}
		},
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (pokemon.battle.ruleTable.isRestricted(`ability:${ally.baseAbility}`)) continue;
				if (ally.previouslySwitchedIn > 0) {
					if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
						sharedPower.add('noability');
						continue;
					}
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 9] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710577/">STABmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714664/">STABmons Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Araquanid', 'Arceus', 'Azumarill', 'Basculegion', 'Basculegion-F', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Base',
			'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Dragonite', 'Enamorus-Base', 'Eternatus', 'Flutter Mane', 'Garchomp', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Iron Bundle', 'Komala', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Latios', 'Lugia', 'Lunala', 'Magearna',
			'Manaphy', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Wellspring', 'Palkia', 'Palkia-Origin', 'Pecharunt', 'Porygon-Z',
			'Rayquaza', 'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu-Base', 'Zacian',
			'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Zoroark-Hisui', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Shed Tail',
		],
		restricted: [
			'Acupressure', 'Belly Drum', 'Clangorous Soul', 'Dire Claw', 'Extreme Speed', 'Fillet Away', 'Gigaton Hammer', 'Last Respects', 'No Retreat',
			'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Triple Arrows', 'V-create', 'Victory Dance', 'Wicked Blow',
		],
	},
	{
		name: "[Gen 7] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3734057/">USUM Pure Hackmons</a>`,
		],

		mod: 'gen7',
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},

	// Challengeable OMs
	///////////////////////////////////////////////////////////////////

	{
		section: "Challengeable OMs",
		column: 2,
	},
	{
		name: "[Gen 9] Camomons",
		desc: `Pok&eacute;mon have their types set to match their first two moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711340/">Camomons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Terastal Clause', 'Camomons Mod'],
		banlist: [
			'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga',
			'Dialga-Origin', 'Dragonite', 'Drednaw', 'Enamorus-Base', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Iron Bundle', 'Kommo-o', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Manaphy',
			'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Roaring Moon', 'Shaymin-Sky',
			'Sneasler', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Ursaluna-Bloodmoon', 'Volcarona', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
			'Arena Trap', 'Moody', 'Shadow Tag', 'Booster Energy', 'King\'s Rock', 'Light Clay', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Convergence",
		desc: `Allows all Pok&eacute;mon that have identical types to share moves and abilities.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714048/">Convergence</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Convergence Legality', 'Terastal Clause', '!Obtainable Abilities'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin',
			'Dondozo', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-oh', 'Inteleon', 'Iron Bundle', 'Iron Hands', 'Koraidon',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lilligant-Hisui', 'Lugia', 'Lunala', 'Magearna', 'Manaphy', 'Mewtwo', 'Miraidon',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Regigigas',
			'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Slaking', 'Smeargle', 'Spectrier', 'Urshifu-Base', 'Urshifu-Rapid-Strike', 'Walking Wake', 'Zacian',
			'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Comatose', 'Contrary', 'Drizzle', 'Imposter', 'Moody', 'Pure Power',
			'Shadow Tag', 'Speed Boost', 'Heat Rock', 'King\'s Rock', 'Light Clay', 'Razor Fang', 'Baton Pass', 'Extreme Speed', 'Last Respects', 'Population Bomb',
			'Quiver Dance', 'Rage Fist', 'Shed Tail', 'Shell Smash', 'Spore', 'Transform',
		],
	},
	{
		name: "[Gen 9] Cross Evolution",
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and moves from the next stage Pok&eacute;mon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710953/">Cross Evolution</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Basculin-White-Striped', 'Duraludon', 'Kyogre', 'Miraidon', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Ursaring', 'Arena Trap',
			'Huge Power', 'Pure Power', 'Shadow Tag', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Shed Tail',
		],
		restricted: ['Espathra', 'Frosmoth', 'Gallade', 'Lilligant-Hisui', 'Lunala', 'Solgaleo'],
		onValidateTeam(team) {
			const nums = new Set<number>();
			for (const set of team) {
				const name = set.name;
				const species = this.dex.species.get(name);
				if (nums.has(species.num)) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named after a form of '${species.name}')`,
					];
				}
				if (species.exists && species.name !== set.species) nums.add(species.num);
			}
			if (!nums.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkCanLearn(move, species, lsetData, set) {
			// @ts-ignore
			if (!set.sp?.exists || !set.crossSpecies?.exists) {
				return this.checkCanLearn(move, species, lsetData, set);
			}
			// @ts-ignore
			const problem = this.checkCanLearn(move, set.sp);
			if (!problem) return null;
			// @ts-ignore
			if (this.checkCanLearn(move, set.crossSpecies)) return problem;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.species.get(set.name);
			let problems = this.dex.formats.get('Obtainable Misc').onChangeSet?.call(this, set, this.format) || null;
			if (Array.isArray(problems) && problems.length) return problems;
			const crossNonstandard = (!this.ruleTable.has('standardnatdex') && crossSpecies.isNonstandard === 'Past') ||
				crossSpecies.isNonstandard === 'Future';
			const crossIsCap = !this.ruleTable.has('+pokemontag:cap') && crossSpecies.isNonstandard === 'CAP';
			if (!crossSpecies.exists || crossNonstandard || crossIsCap) return this.validateSet(set, teamHas);
			const species = this.dex.species.get(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			const nonstandard = !this.ruleTable.has('standardnatdex') && species.isNonstandard === 'Past';
			const isCap = !this.ruleTable.has('+pokemontag:cap') && species.isNonstandard === 'CAP';
			if (!species.exists || nonstandard || isCap || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const item = this.dex.items.get(set.item);
			if (item.itemUser?.length) {
				if (!item.itemUser.includes(crossSpecies.name) || crossSpecies.name !== species.name) {
					return [`${species.name} cannot use ${item.name} because it is cross evolved into ${crossSpecies.name}.`];
				}
			}
			const ability = this.dex.abilities.get(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			// @ts-ignore
			set.sp = species;
			// @ts-ignore
			set.crossSpecies = crossSpecies;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.species.get(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.weightkg =
				Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			mixedSpecies.bst = 0;
			let i: StatID;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
				mixedSpecies.bst += mixedSpecies.baseStats[i];
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "[Gen 9] Foresighters",
		desc: `Moves in the first moveslot will be delayed by two turns.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3735969/">Foresighters</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Chi-Yu', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base',
			'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram',
			'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap',
			'Moody', 'Shadow Tag', 'Sand Veil', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Dire Claw', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Beat Up', 'Belly Drum', 'Clangorous Soul', 'Dragon Dance', 'Endeavor', 'Quiver Dance', 'Shell Smash', 'Shift Gear', 'Tail Glow', 'Tidy Up', 'Victory Dance',
		],
		onValidateSet(set) {
			const fsMove = this.dex.moves.get(set.moves[0]);
			if (this.ruleTable.isRestricted(`move:${fsMove.id}`)) {
				return [`${set.name}'s move ${fsMove.name} cannot be used as a future move.`];
			}
		},
		onModifyMove(move, pokemon) {
			if (move.id === pokemon.moveSlots[0].id && !move.flags['futuremove']) {
				move.flags['futuremove'] = 1;
				delete move.flags['protect'];
				move.onTry = function (source, t) {
					if (!t.side.addSlotCondition(t, 'futuremove')) {
						this.hint('Future moves fail when the targeted slot already has a future move focused on it.');
						return false;
					}
					const moveData = this.dex.getActiveMove(move.id);
					moveData.flags['futuremove'] = 1;
					delete moveData.flags['protect'];
					Object.assign(t.side.slotConditions[t.position]['futuremove'], {
						duration: 3,
						move: moveData.id,
						source: source,
						moveData: moveData,
					});
					this.add('-message', `${source.name} foresaw an attack!`);
					return this.NOT_FAIL;
				};
			}
		},
	},
	{
		name: "[Gen 9] Fortemons",
		desc: `Put an attacking move in the item slot to have all of a Pok&eacute;mon's attacks inherit its properties.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713983/">Fortemons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Archaludon', 'Azumarill', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Comfey', 'Deoxys-Base', 'Deoxys-Attack',
			'Dialga-Base', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina-Base', 'Great Tusk', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Iron Treads', 'Koraidon', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Meowscarada', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin',
			'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Samurott-Hisui', 'Shaymin-Sky', 'Skeledirge', 'Smeargle', 'Solgaleo', 'Spectrier', 'Sneasler', 'Terapagos',
			'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Serene Grace', 'Shadow Tag',
			'Damp Rock', 'Heat Rock', 'Light Clay', 'Baton Pass', 'Beat Up', 'Fake Out', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Doom Desire', 'Dynamic Punch', 'Electro Ball', 'Explosion', 'Gyro Ball', 'Final Gambit', 'Flail', 'Flip Turn', 'Fury Cutter', 'Future Sight', 'Grass Knot',
			'Grassy Glide', 'Hard Press', 'Heavy Slam', 'Heat Crash', 'Inferno', 'Low Kick', 'Misty Explosion', 'Nuzzle', 'Power Trip', 'Reversal', 'Self-Destruct',
			'Spit Up', 'Stored Power', 'Tera Blast', 'U-turn', 'Weather Ball', 'Zap Cannon',
		],
		onValidateTeam(team) {
			const itemTable = new Set<string>();
			for (const set of team) {
				const forte = this.toID(set.item);
				if (!forte) continue;
				const move = this.dex.moves.get(forte);
				if (move.exists && move.id !== 'metronome') {
					if (itemTable.has(forte)) {
						return [
							`You are limited to one of each move in the item slot per team.`,
							`(You have more than one ${move.name}.)`,
						];
					}
					itemTable.add(forte);
				}
			}
		},
		validateSet(set, teamHas) {
			const item = set.item;
			const species = this.dex.species.get(set.species);
			const move = this.dex.moves.get(item);
			if (!move.exists || move.id === 'metronome' || move.category === 'Status') {
				return this.validateSet(set, teamHas);
			}
			set.item = '';
			const problems = this.validateSet(set, teamHas) || [];
			set.item = item;
			if (this.checkCanLearn(move, species, this.allSources(species), set)) {
				problems.push(`${species.name} can't learn ${move.name}.`);
			}
			if (set.moves.map(this.toID).includes(move.id)) {
				problems.push(`Moves in the item slot can't be in the moveslots as well.`);
			}
			if (this.ruleTable.has(`-move:${move.id}`)) {
				problems.push(`The move ${move.name} is fully banned.`);
			}
			const accuracyLoweringMove =
				move.secondaries?.some(secondary => secondary.boosts?.accuracy && secondary.boosts?.accuracy < 0);
			const flinchMove = move.secondaries?.some(secondary => secondary.volatileStatus === 'flinch');
			const freezeMove = move.secondaries?.some(secondary => secondary.status === 'frz') || move.id === 'triattack';
			if (this.ruleTable.isRestricted(`move:${move.id}`) ||
				((accuracyLoweringMove || move.ohko || move.multihit || move.id === 'beatup' || move.flags['charge'] ||
					move.priority > 0 || move.damageCallback || flinchMove || freezeMove) &&
				!this.ruleTable.has(`+move:${move.id}`))) {
				problems.push(`The move ${move.name} can't be used as an item.`);
			}
			return problems.length ? problems : null;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				const move = this.dex.getActiveMove(pokemon.set.item);
				if (move.exists && move.category !== 'Status') {
					pokemon.m.forte = move;
					pokemon.item = 'mail' as ID;
				}
			}
		},
		onModifyMovePriority: 1,
		onModifyMove(move, pokemon, target) {
			const forte: ActiveMove = pokemon.m.forte;
			if (move.category !== 'Status' && forte) {
				move.flags = {...move.flags, ...forte.flags};
				if (forte.self) {
					if (forte.self.onHit && move.self?.onHit) {
						for (const i in forte.self) {
							if (i.startsWith('onHit')) continue;
							(move.self as any)[i] = (forte.self as any)[i];
						}
					} else {
						move.self = {...(move.self || {}), ...forte.self};
					}
				}
				if (forte.selfBoost?.boosts) {
					if (!move.selfBoost?.boosts) move.selfBoost = {boosts: {}};
					let boostid: BoostID;
					for (boostid in forte.selfBoost.boosts) {
						if (!move.selfBoost.boosts![boostid]) move.selfBoost.boosts![boostid] = 0;
						move.selfBoost.boosts![boostid]! += forte.selfBoost.boosts[boostid]!;
					}
				}
				if (forte.secondaries) {
					move.secondaries = [...(move.secondaries || []), ...forte.secondaries];
				}
				move.critRatio = (move.critRatio || 1) + (forte.critRatio || 1) - 1;
				const VALID_PROPERTIES = [
					'alwaysHit', 'basePowerCallback', 'breaksProtect', 'drain', 'forceSTAB', 'forceSwitch', 'hasCrashDamage', 'hasSheerForce',
					'ignoreAbility', 'ignoreAccuracy', 'ignoreDefensive', 'ignoreEvasion', 'ignoreImmunity', 'mindBlownRecoil', 'noDamageVariance',
					'ohko', 'overrideDefensivePokemon', 'overrideDefensiveStat', 'overrideOffensivePokemon', 'overrideOffensiveStat', 'pseudoWeather',
					'recoil', 'selfdestruct', 'selfSwitch', 'sleepUsable', 'smartTarget', 'stealsBoosts', 'thawsTarget', 'volatileStatus', 'willCrit',
				] as const;
				for (const property of VALID_PROPERTIES) {
					if (forte[property]) {
						move[property] = forte[property] as any;
					}
				}
				// Added here because onEffectiveness doesn't have an easy way to reference the source
				if (forte.onEffectiveness) {
					move.onEffectiveness = function (typeMod, t, type, m) {
						return forte.onEffectiveness!.call(this, typeMod, t, type, m);
					};
				}
				forte.onModifyMove?.call(this, move, pokemon, target);
			}
		},
		onModifyPriority(priority, source, target, move) {
			const forte = source?.m.forte;
			if (move.category !== 'Status' && forte) {
				if (source.hasAbility('Triage') && forte.flags['heal']) {
					return priority + (move.flags['heal'] ? 0 : 3);
				}
				return priority + forte.priority;
			}
		},
		onModifyTypePriority: 1,
		onModifyType(move, pokemon, target) {
			const forte = pokemon.m.forte;
			if (move.category !== 'Status' && forte) {
				this.singleEvent('ModifyType', forte, null, pokemon, target, move, move);
			}
		},
		onHitPriority: 1,
		onHit(target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('Hit', forte, {}, target, source, move);
				if (forte.self) this.singleEvent('Hit', forte.self, {}, source, source, move);
				this.singleEvent('AfterHit', forte, {}, target, source, move);
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterSubDamage', forte, null, target, source, move, damage);
			}
		},
		onModifySecondaries(secondaries, target, source, move) {
			if (secondaries.some(s => !!s.self)) move.selfDropped = false;
		},
		onAfterMoveSecondaryPriority: 1,
		onAfterMoveSecondarySelf(source, target, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterMoveSecondarySelf', forte, null, source, target, move);
			}
		},
		onBasePowerPriority: 1,
		onBasePower(basePower, source, target, move) {
			const forte = source.m.forte;
			if (move.category !== 'Status' && forte?.onBasePower) {
				forte.onBasePower.call(this, basePower, source, target, move);
			}
		},
		pokemon: {
			getItem() {
				const move = this.battle.dex.moves.get(this.m.forte);
				if (!move.exists) return Object.getPrototypeOf(this).getItem.call(this);
				return {
					...this.battle.dex.items.get('mail'),
					name: move.name, id: move.id, ignoreKlutz: true, onTakeItem: false,
				};
			},
		},
	},
	{
		name: "[Gen 9] Frantic Fusions",
		desc: `Pok&eacute;mon nicknamed after another Pok&eacute;mon get their stats buffed by 1/4 of that Pok&eacute;mon's stats, barring HP, and access to one of their abilities.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725593/">Frantic Fusions</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', '!Nickname Clause', '!Obtainable Abilities', 'Sleep Moves Clause', 'Frantic Fusions Mod', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Comfey', 'Cresselia', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack',
			'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Ditto', 'Dragapult', 'Enamorus-Base', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire',
			'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Boulder', 'Iron Bundle', 'Iron Moth', 'Iron Valiant', 'Keldeo', 'Koraidon', 'Komala', 'Kyogre', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Numel', 'Ogerpon-Hearthflame',
			'Palafin', 'Palkia', 'Palkia-Origin', 'Persian-Alola', 'Rayquaza', 'Regieleki', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Slaking', 'Solgaleo', 'Spectrier', 'Toxapex',
			'Urshifu', 'Urshifu-Rapid-Strike', 'Volcarona', 'Walking Wake', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap',
			'Contrary', 'Huge Power', 'Ice Scales', 'Illusion', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Stench',
			'Speed Boost', 'Unburden', 'Water Bubble', 'Damp Rock', 'Heat Rock', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Revival Blessing',
			'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Full Potential",
		desc: `Pok&eacute;mon's moves hit off of their highest stat, except HP.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711127/">Full Potential</a>`,
		],

		mod: 'fullpotential',
		searchShow: false,
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dragapult',
			'Eternatus', 'Giratina', 'Giratina-Origin', 'Goodra-Hisui', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Mewtwo', 'Miraidon', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Scream Tail',
			'Shaymin-Sky', 'Spectrier', 'Solgaleo', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Chlorophyll', 'Drought',
			'Moody', 'Sand Rush', 'Shadow Tag', 'Slush Rush', 'Speed Boost', 'Surge Surfer', 'Swift Swim', 'Unburden', 'Booster Energy', 'Choice Scarf', 'Heat Rock',
			'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Shed Tail', 'Tailwind',
		],
	},
	{
		name: "[Gen 9] Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712725/">Pok&eacute;bilities</a>`,
		],
		mod: 'pokebilities',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause'],
		banlist: [
			'Arceus', 'Annihilape', 'Basculegion', 'Basculegion-F', 'Baxcalibur', 'Braviary-Hisui', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Conkeldurr', 'Deoxys-Base',
			'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Excadrill', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Miraidon', 'Mewtwo', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Ogerpon-Hearthflame',
			'Palafin', 'Palkia', 'Palkia-Origin', 'Porygon-Z', 'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky', 'Smeargle', 'Sneasler', 'Solgaleo', 'Spectrier', 'Terapagos',
			'Ursaluna-Bloodmoon', 'Urshifu-Base', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang',
			'Baton Pass', 'Shed Tail', 'Last Respects',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && this.toID(set.ability) !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onBeforeSwitchIn(pokemon) {
			// Abilities that must be applied before both sides trigger onSwitchIn to correctly
			// handle switch-in ability-to-ability interactions, e.g. Intimidate counters
			const neededBeforeSwitchInIDs = [
				'clearbody', 'competitive', 'contrary', 'defiant', 'fullmetalbody', 'hypercutter', 'innerfocus',
				'mirrorarmor', 'oblivious', 'owntempo', 'rattled', 'scrappy', 'simple', 'whitesmoke',
			];
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (!neededBeforeSwitchInIDs.includes(innate)) continue;
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchOut(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		},
		onFaint(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				const innateEffect = this.dex.conditions.get(innate) as Effect;
				this.singleEvent('End', innateEffect, null, pokemon);
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
			pokemon.m.innates = undefined;
		},
	},
	{
		name: "[Gen 9] Pure Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712086/">Pure Hackmons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Hackmons Forme Legality', 'Species Reveal Clause', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 9] Revelationmons",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711644/">Revelationmons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Revelationmons Mod', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Barraskewda', 'Basculegion-Base', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Base',
			'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Dragonite', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Iron Bundle', 'Kommo-o', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna',
			'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin',
			'Polteageist', 'Rayquaza', 'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Zacian', 'Zacian-Crowned',
			'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects',
		],
		restricted: ['U-turn', 'Volt Switch'],
	},
	{
		name: "[Gen 9] Sharing is Caring",
		desc: `All Pok&eacute;mon on a team share their items.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3727118/">Sharing is Caring</a>`,
		],

		mod: 'sharingiscaring',
		searchShow: false,
		ruleset: ['Standard OMs', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin',
			'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Urshifu-Base', 'Zacian', 'Zacian-Crowned', 'Zamazenta',
			'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Scope Lens', 'Shadow Tag', 'Choice Band', 'Choice Scarf', 'Choice Specs', 'Focus Band',
			'Focus Sash', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Revival Blessing', 'Shed Tail',
		],
		onValidateRule() {
			if (this.format.gameType !== 'singles') {
				throw new Error(`Sharing is Caring currently does not support ${this.format.gameType} battles.`);
			}
		},
		getSharedItems(pokemon) {
			const items = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (!ally.item || ally.fainted) continue;
				items.add(ally.item);
			}
			items.delete(pokemon.item);
			return items;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedItems) format = this.dex.formats.get('gen9sharingiscaring');
			if (!pokemon.m.sharedItemsUsed) pokemon.m.sharedItemsUsed = [];
			for (const item of format.getSharedItems!(pokemon)) {
				if (pokemon.m.sharedItemsUsed.includes(item)) continue;
				const effect = 'item:' + item;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.items) pokemon.m.items = [];
				if (!pokemon.m.items.includes(effect)) pokemon.m.items.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedItems) format = this.dex.formats.get('gen9sharingiscaring');
			for (const item of format.getSharedItems!(pokemon)) {
				if (pokemon.m.sharedItemsUsed.includes(item)) continue;
				const effect = 'item:' + item;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 9] Tera Donation",
		desc: `The first Pok&eacute;mon sent out immediately terastallizes. The other Pok&eacute;mon in the party inherit that Tera Type as an additional type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715801/">Tera Donation</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Tera Type Preview'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed',
			'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Flutter Mane', 'Ho-Oh', 'Hoopa-Unbound',
			'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo',
			'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Reshiram',
			'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike', 'Volcarona', 'Zacian', 'Zacian-Crowned',
			'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'Booster Energy', 'Heat Rock', 'King\'s Rock', 'Razor Fang',
			'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		onValidateRule() {
			if (this.dex.gen !== 9) {
				throw new Error(`Tera Donation is not supported in generations without terastallization.`);
			}
		},
		onSwitchIn(pokemon) {
			if (this.turn === 0) {
				this.actions.terastallize(pokemon);
				const teraType = pokemon.teraType;
				for (const poke of pokemon.side.pokemon) {
					poke.m.thirdType = teraType;
				}
			}
			if (!pokemon.terastallized) {
				this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.id === 'terablast') {
				const teraType = pokemon.m.thirdType;
				move.basePowerCallback = function (p, t, m) {
					if ((p.terastallized || teraType) === 'Stellar') {
						return 100;
					}
					return 80;
				};
				if (teraType) {
					if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) {
						move.category = 'Physical';
					}
					if (teraType === "Stellar") {
						move.self = {boosts: {atk: -1, spa: -1}};
					}
				}
			}
		},
		onModifyType(move, pokemon, target) {
			if (move.id === 'terablast') {
				const teraType = pokemon.m.thirdType;
				if (teraType) {
					move.type = teraType;
				}
			}
		},
		onPrepareHit(target, source, move) {
			if (move.id === 'terablast' && source.m.thirdType) {
				this.attrLastMove('[anim] Tera Blast ' + source.m.thirdType);
			}
		},
		actions: {
			modifyDamage(baseDamage, pokemon, target, move, suppressMessages) {
				const tr = this.battle.trunc;
				if (!move.type) move.type = '???';
				const type = move.type;

				baseDamage += 2;

				if (move.spreadHit) {
					// multi-target modifier (doubles only)
					const spreadModifier = move.spreadModifier || (this.battle.gameType === 'freeforall' ? 0.5 : 0.75);
					this.battle.debug('Spread modifier: ' + spreadModifier);
					baseDamage = this.battle.modify(baseDamage, spreadModifier);
				} else if (move.multihitType === 'parentalbond' && move.hit > 1) {
					// Parental Bond modifier
					const bondModifier = this.battle.gen > 6 ? 0.25 : 0.5;
					this.battle.debug(`Parental Bond modifier: ${bondModifier}`);
					baseDamage = this.battle.modify(baseDamage, bondModifier);
				}

				// weather modifier
				baseDamage = this.battle.runEvent('WeatherModifyDamage', pokemon, target, move, baseDamage);

				// crit - not a modifier
				const isCrit = target.getMoveHitData(move).crit;
				if (isCrit) {
					baseDamage = tr(baseDamage * (move.critModifier || (this.battle.gen >= 6 ? 1.5 : 2)));
				}

				// random factor - also not a modifier
				baseDamage = this.battle.randomizer(baseDamage);

				// STAB
				// The "???" type never gets STAB
				// Not even if you Roost in Gen 4 and somehow manage to use
				// Struggle in the same turn.
				// (On second thought, it might be easier to get a MissingNo.)
				if (type !== '???') {
					let stab: number | [number, number] = 1;

					const isSTAB = move.forceSTAB || pokemon.hasType(type) || pokemon.getTypes(false, true).includes(type);
					if (isSTAB) {
						stab = 1.5;
					}

					// The Stellar tera type makes this incredibly confusing
					// If the move's type does not match one of the user's base types,
					// the Stellar tera type applies a one-time 1.2x damage boost for that type.
					//
					// If the move's type does match one of the user's base types,
					// then the Stellar tera type applies a one-time 2x STAB boost for that type,
					// and then goes back to using the regular 1.5x STAB boost for those types.
					if ((pokemon.terastallized || pokemon.m.thirdType) === 'Stellar') {
						if (!pokemon.stellarBoostedTypes.includes(type)) {
							stab = isSTAB ? 2 : [4915, 4096];
							if (pokemon.species.name !== 'Terapagos-Stellar') {
								pokemon.stellarBoostedTypes.push(type);
							}
						}
					} else {
						if (pokemon.terastallized === type && pokemon.getTypes(false, true).includes(type)) {
							stab = 2;
						}
						stab = this.battle.runEvent('ModifySTAB', pokemon, target, move, stab);
					}

					baseDamage = this.battle.modify(baseDamage, stab);
				}

				// types
				let typeMod = target.runEffectiveness(move);
				typeMod = this.battle.clampIntRange(typeMod, -6, 6);
				target.getMoveHitData(move).typeMod = typeMod;
				if (typeMod > 0) {
					if (!suppressMessages) this.battle.add('-supereffective', target);

					for (let i = 0; i < typeMod; i++) {
						baseDamage *= 2;
					}
				}
				if (typeMod < 0) {
					if (!suppressMessages) this.battle.add('-resisted', target);

					for (let i = 0; i > typeMod; i--) {
						baseDamage = tr(baseDamage / 2);
					}
				}

				if (isCrit && !suppressMessages) this.battle.add('-crit', target);

				if (pokemon.status === 'brn' && move.category === 'Physical' && !pokemon.hasAbility('guts')) {
					if (this.battle.gen < 6 || move.id !== 'facade') {
						baseDamage = this.battle.modify(baseDamage, 0.5);
					}
				}

				// Generation 5, but nothing later, sets damage to 1 before the final damage modifiers
				if (this.battle.gen === 5 && !baseDamage) baseDamage = 1;

				// Final modifier. Modifiers that modify damage after min damage check, such as Life Orb.
				baseDamage = this.battle.runEvent('ModifyDamage', pokemon, target, move, baseDamage);

				if (move.isZOrMaxPowered && target.getMoveHitData(move).zBrokeProtect) {
					baseDamage = this.battle.modify(baseDamage, 0.25);
					this.battle.add('-zbroken', target);
				}

				// Generation 6-7 moves the check for minimum 1 damage after the final modifier...
				if (this.battle.gen !== 5 && !baseDamage) return 1;

				// ...but 16-bit truncation happens even later, and can truncate to 0
				return tr(baseDamage, 16);
			},
		},
		pokemon: {
			getTypes(excludeAdded, preterastallized) {
				if (!preterastallized && this.terastallized && this.terastallized !== 'Stellar') {
					return [this.terastallized];
				}
				const types = this.battle.runEvent('Type', this, null, null, this.types);
				if (!excludeAdded && this.addedType) return types.concat(this.addedType);
				const addTeraType = this.m.thirdType;
				if (types.length) {
					if (addTeraType) return Array.from(new Set([...types, addTeraType]));
					return types;
				}
				return [this.battle.gen >= 5 ? 'Normal' : '???'];
			},
			runEffectiveness(move) {
				if ((this.terastallized || this.m.thirdType) && move.type === 'Stellar') return 1;
				let totalTypeMod = 0;
				for (const type of this.getTypes()) {
					let typeMod = this.battle.dex.getEffectiveness(move, type);
					typeMod = this.battle.singleEvent('Effectiveness', move, null, this, type, move, typeMod);
					totalTypeMod += this.battle.runEvent('Effectiveness', this, type, move, typeMod);
				}
				return totalTypeMod;
			},
		},
	},
	{
		name: "[Gen 9] The Card Game",
		desc: `The type chart is simplified based off of the Pok&eacute;mon Trading Card Game.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3716838/">The Card Game</a>`,
		],

		mod: 'thecardgame',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin',
			'Dragapult', 'Dragonite', 'Dudunsparce', 'Eternatus', 'Garchomp', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Haxorus', 'Ho-Oh', 'Hydreigon',
			'Iron Valiant', 'Kommo-o', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Latias', 'Latios', 'Lugia', 'Lunala', 'Mewtwo',
			'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regidrago', 'Regieleki', 'Reshiram',
			'Roaring Moon', 'Salamence', 'Shaymin-Sky', 'Solgaleo', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu-Base', 'Walking Wake', 'Zacian', 'Zacian-Crowned', 'Zekrom',
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.hpType = pokemon.hpType.replace(/(Ghost|Fairy)/g, 'Psychic')
					.replace(/Bug/g, 'Grass')
					.replace(/Ice/g, 'Water')
					.replace(/(Rock|Ground)/g, 'Fighting')
					.replace(/Flying/g, 'Normal')
					.replace(/Poison/g, 'Dark');
				pokemon.teraType = pokemon.teraType.replace(/(Ghost|Fairy)/g, 'Psychic')
					.replace(/Bug/g, 'Grass')
					.replace(/Ice/g, 'Water')
					.replace(/(Rock|Ground)/g, 'Fighting')
					.replace(/Flying/g, 'Normal')
					.replace(/Poison/g, 'Dark');
			}
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			pokemon.apparentType = pokemon.getTypes(true).join('/');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			pokemon.apparentType = pokemon.getTypes(true).join('/');
		},
	},
	{
		name: "[Gen 9] The Loser's Game",
		desc: `The first player to lose all of their Pok&eacute;mon wins.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714223/">The Loser's Game</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', '!OHKO Clause', 'Picked Team Size = 6', 'Adjust Level = 100'],
		banlist: ['Infiltrator', 'Choice Scarf', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Magic Room', 'Memento', 'Misty Explosion', 'Self-Destruct'],
		onValidateTeam(team) {
			const familyTable = new Set<ID>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				while (species.prevo) {
					species = this.dex.species.get(species.prevo);
				}
				if (familyTable.has(species.id)) {
					return [
						`You are limited to one Pok&eacute;mon from each family by the Family Clause.`,
						`(You have more than one evolution of ${species.name}.)`,
					];
				}
				familyTable.add(species.id);
			}
		},
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpTotal = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp).reduce((a, b) => a + b)
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpTotal[i])} total HP left`
				)).join('; '));
				const maxTotal = Math.max(...hpTotal);
				tiedSides = tiedSides.filter((side, i) => hpTotal[i] === maxTotal);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}
				return this.tie();
			},
			checkWin(faintData) {
				const team1PokemonLeft = this.sides[0].pokemonLeft;
				const team2PokemonLeft = this.sides[1].pokemonLeft;
				if (!team1PokemonLeft && !team2PokemonLeft) {
					this.win(faintData?.target.side || null);
					return true;
				}
				for (const side of this.sides) {
					if (!side.pokemonLeft) {
						this.win(side);
						return true;
					}
				}
			},
		},
	},
	{
		name: "[Gen 9] Trademarked",
		desc: `Sacrifice your Pok&eacute;mon's ability for a status move that activates on switch-in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714688/">Trademarked</a>`,
		],

		mod: 'trademarked',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Koraidon', 'Kyogre', 'Landorus-Base', 'Magearna', 'Mewtwo', 'Miraidon', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Slaking', 'Spectrier',
			'Urshifu-Base', 'Zacian', 'Zacian-Crowned', 'Arena Trap', 'Magnet Pull', 'Moody', 'Shadow Tag', 'Baton Pass', 'Last Respects', 'Revival Blessing',
		],
		restricted: [
			'Baneful Bunker', 'Block', 'Chilly Reception', 'Copycat', 'Detect', 'Destiny Bond', 'Encore', 'Fairy Lock', 'Ingrain', 'Instruct',
			'Mean Look', 'move:Metronome', 'Nasty Plot', 'Parting Shot', 'Protect', 'Roar', 'Silk Trap', 'Spiky Shield', 'Sleep Talk', 'Shed Tail',
			'Shell Smash', 'Substitute', 'Swords Dance', 'Teleport', 'Thunder Wave', 'Trick Room', 'Will-O-Wisp', 'Whirlwind',
		],
		onValidateTeam(team, format, teamHas) {
			const problems = [];
			for (const trademark of teamHas.trademarks.keys()) {
				if (teamHas.trademarks.get(trademark) > 1) {
					problems.push(`You are limited to 1 of each Trademark.`, `(You have ${teamHas.trademarks.get(trademark)} Pok\u00e9mon with ${trademark} as a Trademark.)`);
				}
			}
			return problems;
		},
		validateSet(set, teamHas) {
			const dex = this.dex;
			const ability = dex.moves.get(set.ability);
			if (!ability.exists) { // Not even a real move
				return this.validateSet(set, teamHas);
			}
			// Absolute trademark bans
			if (ability.category !== 'Status') {
				return [`${ability.name} is not a status move and cannot be used as a trademark.`];
			}
			// Contingent trademark bans
			if (this.ruleTable.isRestricted(`move:${ability.id}`)) {
				return [`${ability.name} is restricted from being used as a trademark.`];
			}
			if (set.moves.map(this.toID).includes(ability.id)) {
				return [`${set.name} may not use ${ability.name} as both a trademark and one of its moves simultaneously.`];
			}
			const customRules = this.format.customRules || [];
			if (!customRules.includes('!obtainableabilities')) customRules.push('!obtainableabilities');
			if (!customRules.includes('+noability')) customRules.push('+noability');

			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;

			const validator = new TeamValidator(dex.formats.get(`${this.format.id}@@@${customRules.join(',')}`));
			const moves = set.moves;
			set.moves = [ability.id];
			set.ability = 'No Ability';
			let problems = validator.validateSet(set, {}) || [];
			if (problems.length) return problems;
			set.moves = moves;
			set.ability = 'No Ability';
			problems = problems.concat(validator.validateSet(set, teamHas) || []);
			set.ability = ability.id;
			if (!teamHas.trademarks) teamHas.trademarks = new this.dex.Multiset<string>();
			teamHas.trademarks.add(ability.name);
			return problems.length ? problems : null;
		},
	},
	{
		name: "[Gen 9] Type Split",
		desc: `The Physical/Special split is reverted; All non-Status moves are Physical or Special depending on their type, no exceptions.`,
		threads: [
			`<b>Physical types:</b> <psicon type="Bug" /> <psicon type="Fighting" /> <psicon type="Flying" /> <psicon type="Ghost" /> <psicon type="Ground" /> <psicon type="Normal" /> <psicon type="Poison" /> <psicon type="Rock" /> <psicon type="Steel" />`,
			`<b>Special types:</b> <psicon type="Dark" /> <psicon type="Dragon" /> <psicon type="Electric" /> <psicon type="Fairy" /> <psicon type="Fire" /> <psicon type="Grass" /> <psicon type="Ice" /> <psicon type="Psychic" /> <psicon type="Water" />`,
			`<b>Dependent on the user's higher attacking stat:</b> <psicon type="Stellar" /><hr />&bullet; <a href="https://www.smogon.com/forums/threads/3740787/">Type Split</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Abilities Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Archaludon', 'Calyrex-Shadow', 'Chi-Yu', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Landorus-Base',
			'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki',
			'Reshiram', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Terapagos', 'Volcarona', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Arena Trap', 'Moody', 'Shadow Tag',
			'Bright Powder', 'Damp Rock', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		onModifyMovePriority: -1000,
		onModifyMove(move, pokemon, target) {
			if (move.category === 'Status') return;
			const specialTypes = ['Dark', 'Dragon', 'Electric', 'Fairy', 'Fire', 'Grass', 'Ice', 'Psychic', 'Water'];
			if (specialTypes.includes(move.type)) {
				move.category = 'Special';
			} else if (move.type === 'Stellar') {
				move.category = pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true) ? 'Physical' : 'Special';
			} else {
				move.category = 'Physical';
			}
		},
	},
	{
		name: "[Gen 6] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9029427/">ORAS Pure Hackmons</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'EV limit = 510'],
	},

	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex",
	},
	{
		name: "[Gen 9] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710848/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714511/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714863/">National Dex Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 8] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">SS National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667921/">SS National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">SS National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: ['ND Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass'],
	},

	// National Dex Other Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex Other Tiers",
	},
	{
		name: "[Gen 9] National Dex Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712168/">National Dex Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712170/">National Dex Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712169/">National Dex Ubers Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause'],
		banlist: ['ND AG', 'Assist', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711752/">National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719079/">National Dex UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725988/">National Dex UU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex', 'Terastal Clause'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay'],
	},
	{
		name: "[Gen 9] National Dex RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713801/">National Dex RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3721776/">National Dex RU Resources</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL', 'Slowbro-Base + Slowbronite'],
	},
	{
		name: "[Gen 9] National Dex LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3742178/">National Dex Little Cup</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Little Cup', 'Species Clause', 'OHKO Clause', 'Evasion Clause', 'Sleep Clause Mod'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Clamperl', 'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Dunsparce', 'Duraludon', 'Flittle', 'Girafarig',
			'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Stantler', 'Swirlix', 'Tangela', 'Vulpix-Alola', 'Woobat', 'Yanma', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Eevium Z', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] National Dex Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710738/">National Dex Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3716842/">National Dex Monotype Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715785/">National Dex Monotype Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Terastal Clause', 'Species Clause', 'OHKO Clause', 'Evasion Clause', 'Sleep Clause Mod'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao',
			'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana', 'Kingambit',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega',
			'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu-Base', 'Xerneas',
			'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete', 'Moody', 'Shadow Tag',
			'Power Construct', 'Booster Energy', 'Damp Rock', 'Focus Band', 'Icy Rock', 'King\'s Rock', 'Leppa Berry', 'Quick Claw', 'Razor Fang', 'Smooth Rock',
			'Terrain Extender', 'Acupressure', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3720802/">National Dex Doubles Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3726341/">National Dex Doubles Resources</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Species Clause', 'Gravity Sleep Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Melmetal', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike', 'Xerneas',
			'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Commander', 'Power Construct', 'Assist', 'Coaching', 'Dark Void', 'Swagger',
		],
	},
	{
		name: "[Gen 9] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 9] National Dex BH",
		desc: `Balanced Hackmons with National Dex elements mixed in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711099/">National Dex BH</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Standard NatDex', 'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', 'Terastal Clause', '!Obtainable'],
		banlist: [
			'Cramorant-Gorging', 'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja', 'Arena Trap',
			'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Pure Power',
			'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite', 'Berserk Gene', 'Belly Drum', 'Bolt Beak', 'Chatter', 'Double Iron Bash',
			'Electrify', 'Last Respects', 'Octolock', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Comatose + Sleep Talk', 'Imprison + Transform',
		],
		restricted: ['Arceus'],
		onValidateTeam(team, format) {
			// baseSpecies:count
			const restrictedPokemonCount = new this.dex.Multiset<string>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (!this.ruleTable.isRestrictedSpecies(species)) continue;
				restrictedPokemonCount.add(species.baseSpecies);
			}
			for (const [baseSpecies, count] of restrictedPokemonCount) {
				if (count > 1) {
					return [
						`You are limited to one ${baseSpecies} forme.`,
						`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
					];
				}
			}
		},
	},
	{
		name: "[Gen 8] National Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">SS National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672486/">SS National Dex UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672482/">SS National Dex UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay', 'Slowbronite'],
	},
	{
		name: "[Gen 8] National Dex Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715484/">SS National Dex Monotype</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Arceus', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dracovish',
			'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja-Bond', 'Greninja-Ash', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound',
			'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega',
			'Metagross-Mega', 'Mewtwo', 'Moltres-Galar', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega',
			'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Zygarde-Complete', 'Battle Bond', 'Power Construct', 'Moody', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock',
			'Terrain Extender', 'Baton Pass',
		],
	},

	// Randomized Format Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Format Spotlight",
		column: 3,
	},
	{
		name: "[Gen 9] Chimera 1v1 Random Battle",
		desc: "Merges a team of six into a single Pok\u00e9mon depending on the order chosen at team preview: It gains the typing of the first, item of the second, ability of the third, stats of the fourth, the first two moves of the fifth, and the last two moves of the sixth.",

		team: 'random',
		ruleset: ['[Gen 9] Random Battle', 'Chimera 1v1 Rule', 'Terastal Clause', 'Adjust Level = 100'],
		onBegin() {
			this.add(`raw|<div class="broadcast-blue"><b>Chimera Rands is a 1v1 format where you combine your 6 Pokemon into one "Chimera." The order you select during team preview is important! In sequence, your picks determine your Chimera's Type, Item, Ability, Stats, Moves 1 &amp; 2, then finally Moves 3 &amp; 4.</b></div>`);
		},
	},
	{
		name: "[Gen 9] BSS Factory",
		desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Stadium Singles.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3737058/">Information and Suggestions Thread</a>`,
		],

		mod: 'gen9',
		team: 'randomBSSFactory',
		ruleset: ['Flat Rules', 'VGC Timer'],
	},
	{
		name: "[Gen 9] Baby Random Battle",

		mod: 'gen9',
		team: 'randomBaby',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Random Roulette",
		desc: `Random Battles in a random generation! [Gen 1] Random Battle - [Gen 9] Random Battle.`,

		mod: 'randomroulette',
		team: 'random',
		searchShow: false,
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 3,
	},
	{
		name: "[Gen 9] Super Staff Bros Ultimate",
		desc: "The fifth iteration of Super Staff Bros is here! Battle with a random team of pokemon created by the sim staff.",
		threads: [
			`&bullet; <a href="https://www.smogon.com/articles/super-staff-bros-ultimate">Introduction &amp; Roster</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3741386/">Patch Notes</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3742599/">Discussion Thread</a>`,
		],

		mod: 'gen9ssb',
		debug: true,
		team: 'randomStaffBros',
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onBegin() {
			// TODO look into making an event to put this right after turn|1
			// https://discordapp.com/channels/630837856075513856/630845310033330206/716126469528485909
			// Requires client change
			this.add(`raw|<div class='broadcast-green'><b>Wondering what all these custom moves, abilities, and items do?<br />Check out the <a href="https://www.smogon.com/articles/super-staff-bros-ultimate" target="_blank">Super Staff Bros: Ultimate Guide</a> or use /ssb to find out!</b></div>`);
			if (this.ruleTable.has('dynamaxclause')) {
				// Old joke format we're bringing back
				this.add('message', 'Fox only');
				this.add('message', 'No items');
				this.add('message', 'Final Destination');
				return;
			}

			this.add('message', 'EVERYONE IS HERE!');
			this.add('message', 'FIGHT!');
		},
		onSwitchInPriority: 100,
		onSwitchIn(pokemon) {
			let name: string = this.toID(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			if (this.dex.species.get(name).exists || this.dex.moves.get(name).exists ||
				this.dex.abilities.get(name).exists || name === 'blitz') {
				// Certain pokemon have volatiles named after their id
				// To prevent overwriting those, and to prevent accidentaly leaking
				// that a pokemon is on a team through the onStart even triggering
				// at the start of a match, users with pokemon names will need their
				// statuses to end in "user".
				name = name + 'user';
			}
			// Add the mon's status effect to it as a volatile.
			const status = this.dex.conditions.get(name);
			if (status?.exists) {
				pokemon.addVolatile(name, pokemon);
			}
			if ((pokemon.illusion || pokemon).getTypes(true, true).join('/') !==
				this.dex.forGen(9).species.get((pokemon.illusion || pokemon).species.name).types.join('/') &&
				!pokemon.terastallized) {
				this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] Monotype Random Battle",

		mod: 'gen9',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Random Battle Mayhem",
		desc: `[Gen 9] Random Battle with Team Preview and elements of Camomons, Inverse, Scalemons, and Shared Power.`,

		mod: 'sharedpower',
		team: 'random',
		ruleset: ['[Gen 9] Random Battle', 'Team Preview', 'Camomons Mod', 'Inverse Mod', 'Scalemons Mod'],
		onValidateRule() {
			if (this.format.gameType !== 'singles') {
				throw new Error(`Shared Power currently does not support ${this.format.gameType} battles.`);
			}
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},

	},
	{
		name: "[Gen 9] Computer-Generated Teams",
		desc: `Teams generated automatically based on heuristics (rules), with levels based on previous success/failure in battle. ` +
			`Not affiliated with Random Battles formats. Some sets will by nature be worse than others, but you can report egregiously bad sets ` +
			`with <a href="https://forms.gle/DYwQN5qGVegz3YU38">this form</a>.`,

		mod: 'gen9',
		team: 'computerGenerated',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen9',
		team: 'randomHC',
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['CAP', 'LGPE', 'MissingNo.', 'Pikachu-Cosplay', 'Pichu-Spiky-eared', 'Pokestar Smeargle', 'Pokestar UFO', 'Pokestar UFO-2', 'Pokestar Brycen-Man', 'Pokestar MT', 'Pokestar MT2', 'Pokestar Transport', 'Pokestar Giant', 'Pokestar Humanoid', 'Pokestar Monster', 'Pokestar F-00', 'Pokestar F-002', 'Pokestar Spirit', 'Pokestar Black Door', 'Pokestar White Door', 'Pokestar Black Belt', 'Pokestar UFO-PropU2', 'Xerneas-Base'],
		unbanlist: ['All Pokemon'],
	},
	{
		name: "[Gen 9] Doubles Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item. Now with TWICE the Pok&eacute;mon per side!`,

		mod: 'gen9',
		team: 'randomHC',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] Hackmons Cup'],
	},
	{
		name: "[Gen 9] Broken Cup",
		desc: `[Gen 9] Hackmons Cup but with only the most powerful Pok&eacute;mon, moves, abilities, and items.`,

		team: 'randomHC',
		searchShow: false,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['All Pokemon', 'All Abilities', 'All Items', 'All Moves'],
		unbanlist: [
			'10,000,000 Volt Thunderbolt', 'Abomasnow-Mega', 'Absol-Mega', 'Accelerock', 'Acid Spray', 'Adaptability', 'Aeroblast',
			'Aerodactyl-Mega', 'Aftermath', 'Aggron', 'Aggron-Mega', 'Aguav Berry', 'Air Balloon', 'Air Slash', 'Alakazam-Mega',
			'Alluring Voice', 'Altaria-Mega', 'Ampharos-Mega', 'Analytic', 'Anchor Shot', 'Anger Shell', 'Annihilape', 'Anticipation',
			'Apple Acid', 'Aqua Step', 'Arcanine', 'Arcanine-Hisui', 'Archaludon', 'Archeops', 'Arena Trap', 'Armarouge', 'Armor Cannon',
			'Aromatherapy', 'Articuno', 'Articuno-Galar', 'As One (Glastrier)', 'As One (Spectrier)', 'Assault Vest', 'Astral Barrage',
			'Attack Order', 'Audino-Mega', 'Aura Sphere', 'Axe Kick', 'Azelf', 'Baddy Bad', 'Baneful Bunker', 'Banette-Mega',
			'Barb Barrage', 'Basculegion', 'Basculegion-F', 'Baton Pass', 'Baxcalibur', 'Beads of Ruin', 'Beak Blast', 'Beast Boost',
			'Behemoth Bash', 'Behemoth Blade', 'Belly Drum', 'Berserk', 'Bitter Blade', 'Bitter Malice', 'Blacephalon', 'Blastoise',
			'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Blazing Torque', 'Bleakwind Storm', 'Blissey', 'Blizzard', 'Blood Moon',
			'Blue Flare', 'Blunder Policy', 'Body Press', 'Body Slam', 'Bolt Beak', 'Bolt Strike', 'Boomburst', 'Bouncy Bubble',
			'Brave Bird', 'Bright Powder', 'Brute Bonnet', 'Bug Buzz', 'Bullet Punch', 'Burning Bulwark', 'Buzzwole', 'Buzzy Buzz',
			'Calm Mind', 'Calyrex-Ice', 'Calyrex-Shadow', 'Camerupt-Mega', 'Catastropika', 'Ceaseless Edge', 'Celebi', 'Celesteela',
			'Centiskorch', 'Ceruledge', 'Charizard', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Chatter', 'Chesnaught', 'Chesto Berry',
			'Chi-Yu', 'Chien-Pao', 'Chilan Berry', 'Chilling Neigh', 'Chilly Reception', 'Choice Band', 'Choice Scarf', 'Choice Specs',
			'Cinderace', 'Circle Throw', 'Clanging Scales', 'Clangorous Soul', 'Clangorous Soulblaze', 'Clear Amulet', 'Clear Body',
			'Clear Smog', 'Close Combat', 'Cloyster', 'Cobalion', 'Coil', 'Collision Course', 'Comatose', 'Combat Torque', 'Competitive',
			'Compound Eyes', 'Contrary', 'Core Enforcer', 'Cosmic Power', 'Cotton Guard', 'Court Change', 'Covert Cloak', 'Crabhammer',
			'Cresselia', 'Crobat', 'Cross Chop', 'Curse', 'Custap Berry', 'Dark Pulse', 'Darkest Lariat', 'Darkrai',
			'Darmanitan-Galar-Zen', 'Darmanitan-Zen', 'Decidueye', 'Decidueye-Hisui', 'Defend Order', 'Defiant', 'Defog', 'Delphox',
			'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Desolate Land', 'Dialga', 'Dialga-Origin', 'Diamond Storm',
			'Diancie', 'Diancie-Mega', 'Dire Claw', 'Disable', 'Discharge', 'Dondozo', 'Doom Desire', 'Double Iron Bash', 'Download',
			'Draco Meteor', 'Draco Plate', 'Dragapult', 'Dragon Ascent', 'Dragon Dance', 'Dragon Darts', 'Dragon Energy', 'Dragon Hammer',
			'Dragon Pulse', 'Dragon Tail', 'Dragonite', 'Drain Punch', 'Dread Plate', 'Drill Peck', 'Drizzle', 'Drought', 'Drum Beating',
			'Dry Skin', 'Duraludon', 'Dusknoir', 'Dynamax Cannon', 'Earth Eater', 'Earth Plate', 'Earth Power', 'Earthquake',
			'Eerie Spell', 'Effect Spore', 'Eject Pack', 'Electivire', 'Electric Surge', 'Electro Drift', 'Emboar', 'Empoleon',
			'Enamorus', 'Enamorus-Therian', 'Encore', 'Energy Ball', 'Entei', 'Eruption', 'Espeon', 'Esper Wing', 'Eternatus',
			'Eternatus-Eternamax', 'Exeggutor', 'Exeggutor-Alola', 'Expanding Force', 'Expert Belt', 'Explosion', 'Extreme Evoboost',
			'Extreme Speed', 'Fake Out', 'Feraligatr', 'Fezandipiti', 'Fickle Beam', 'Fiery Wrath', 'Figy Berry', 'Filter',
			'Fire Blast', 'Fire Lash', 'First Impression', 'Fishious Rend', 'Fist Plate', 'Flame Body', 'Flame Charge', 'Flame Plate',
			'Flamethrower', 'Flare Blitz', 'Flareon', 'Flash Cannon', 'Fleur Cannon', 'Flip Turn', 'Floaty Fall', 'Florges',
			'Flower Trick', 'Fluffy', 'Flutter Mane', 'Focus Blast', 'Focus Sash', 'Forewarn', 'Foul Play', 'Freeze-Dry', 'Freezing Glare',
			'Freezy Frost', 'Frost Breath', 'Full Metal Body', 'Fur Coat', 'Fusion Bolt', 'Fusion Flare', 'Future Sight', 'G-Max Befuddle',
			'G-Max Cannonade', 'G-Max Centiferno', 'G-Max Resonance', 'G-Max Steelsurge', 'G-Max Stonesurge', 'G-Max Sweetness',
			'G-Max Vine Lash', 'G-Max Volcalith', 'G-Max Wildfire', 'G-Max Wind Rage', 'Gallade-Mega', 'Garchomp', 'Garchomp-Mega',
			'Gardevoir-Mega', 'Gear Grind', 'Genesect', 'Genesis Supernova', 'Gengar-Mega', 'Gholdengo', 'Giga Drain', 'Gigaton Hammer',
			'Giratina', 'Giratina-Origin', 'Glaceon', 'Glacial Lance', 'Glaive Rush', 'Glalie-Mega', 'Glare', 'Glastrier', 'Glimmora',
			'Glitzy Glow', 'Gogoat', 'Golisopod', 'Good as Gold', 'Goodra', 'Goodra-Hisui', 'Gooey', 'Gorilla Tactics', 'Gouging Fire',
			'Grassy Surge', 'Grav Apple', 'Great Tusk', 'Greninja', 'Greninja-Ash', 'Grim Neigh', 'Groudon', 'Groudon-Primal',
			'Guardian of Alola', 'Gunk Shot', 'Guzzlord', 'Gyarados', 'Gyarados-Mega', 'Hadron Engine', 'Hammer Arm', 'Haxorus',
			'Haze', 'Head Charge', 'Head Smash', 'Headlong Rush', 'Heal Bell', 'Heal Order', 'Healing Wish', 'Heart Swap', 'Heat Crash',
			'Heat Wave', 'Heatran', 'Heavy-Duty Boots', 'Heracross-Mega', 'High Horsepower', 'High Jump Kick', 'Hippowdon', 'Ho-Oh',
			'Hone Claws', 'Hoopa', 'Hoopa-Unbound', 'Horn Leech', 'Houndoom-Mega', 'Huge Power', 'Hurricane', 'Hustle', 'Hydreigon',
			'Hydrapple', 'Hydro Pump', 'Hydro Steam', 'Hyper Drill', 'Iapapa Berry', 'Ice Beam', 'Ice Hammer', 'Ice Scales', 'Ice Shard',
			'Ice Spinner', 'Icicle Plate', 'Illusion', 'Imposter', 'Incineroar', 'Infernape', 'Innards Out', 'Insect Plate', 'Inteleon',
			'Intimidate', 'Intrepid Sword', 'Iron Barbs', 'Iron Boulder', 'Iron Bundle', 'Iron Crown', 'Iron Hands', 'Iron Head',
			'Iron Jugulis', 'Iron Leaves', 'Iron Moth', 'Iron Plate', 'Iron Tail', 'Iron Thorns', 'Iron Treads', 'Iron Valiant',
			'Ivy Cudgel', 'Jet Punch', 'Jirachi', 'Jolteon', 'Judgment', 'Jungle Healing', 'Kangaskhan-Mega', 'Kartana', 'Keldeo',
			'Keldeo-Resolute', 'King\'s Rock', 'King\'s Shield', 'Kingambit', 'Kingdra', 'Knock Off', 'Kommo-o', 'Koraidon', 'Kyogre',
			'Kyogre-Primal', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus', 'Landorus-Therian', 'Lapras', 'Last Respects', 'Latias',
			'Latias-Mega', 'Latios', 'Latios-Mega', 'Lava Plume', 'Leaf Blade', 'Leaf Storm', 'Leafeon', 'Leech Life', 'Leech Seed',
			'Leftovers', 'Leppa Berry', 'Let\'s Snuggle Forever', 'Levitate', 'Libero', 'Liechi Berry', 'Life Orb', 'Light Screen',
			'Light That Burns the Sky', 'Light of Ruin', 'Lightning Rod', 'Liquidation', 'Lopunny-Mega', 'Lovely Kiss', 'Low Kick',
			'Lucario', 'Lucario-Mega', 'Lugia', 'Lum Berry', 'Lumina Crash', 'Lunala', 'Lunar Blessing', 'Lunar Dance', 'Lunge',
			'Luster Purge', 'Mach Punch', 'Magearna', 'Magic Bounce', 'Magic Guard', 'Magical Torque', 'Magma Storm', 'Magmortar',
			'Magnezone', 'Mago Berry', 'Make It Rain', 'Malicious Moonsault', 'Malignant Chain', 'Mamoswine', 'Manaphy', 'Manectric-Mega',
			'Marshadow', 'Marvel Scale', 'Matcha Gotcha', 'Max Guard', 'Meadow Plate', 'Megahorn', 'Meganium', 'Melmetal', 'Meloetta',
			'Meloetta-Pirouette', 'Memento', 'Menacing Moonraze Maelstrom', 'Mental Herb', 'Meowscarada', 'Mesprit', 'Metagross',
			'Metagross-Mega', 'Meteor Mash', 'item: Metronome', 'Mew', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Mighty Cleave',
			'Milk Drink', 'Milotic', 'Mind Plate', 'Mind\'s Eye', 'Minimize', 'Miraidon', 'Mirror Herb', 'Mist Ball', 'Misty Surge',
			'Mold Breaker', 'Moltres', 'Moltres-Galar', 'Moody', 'Moonblast', 'Moongeist Beam', 'Moonlight', 'Morning Sun', 'Mortal Spin',
			'Mountain Gale', 'Moxie', 'Multiscale', 'Munkidori', 'Muscle Band', 'Mystical Fire', 'Mystical Power', 'Naganadel',
			'Nasty Plot', 'Natural Cure', 'Nature\'s Madness', 'Necrozma', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra',
			'Neuroforce', 'Neutralizing Gas', 'Night Daze', 'Night Shade', 'Nihilego', 'No Retreat', 'Noivern', 'Noxious Torque',
			'Nuzzle', 'Oblivion Wing', 'Obstruct', 'Oceanic Operetta', 'Octolock', 'Ogerpon', 'Ogerpon-Cornerstone', 'Ogerpon-Hearthflame',
			'Ogerpon-Wellspring', 'Okidogi', 'Opportunist', 'Orichalcum Pulse', 'Origin Pulse', 'Outrage', 'Overdrive', 'Overheat',
			'Pain Split', 'Palafin-Hero', 'Palkia', 'Palkia-Origin', 'Parental Bond', 'Parting Shot', 'Pecharunt', 'Perish Body',
			'Perish Song', 'Petaya Berry', 'Pheromosa', 'Photon Geyser', 'Pidgeot-Mega', 'Pinsir-Mega', 'Pixie Plate', 'Plasma Fists',
			'Play Rough', 'Poison Heal', 'Poison Point', 'Poison Touch', 'Pollen Puff', 'Poltergeist', 'Population Bomb', 'Porygon-Z',
			'Power Gem', 'Power Trip', 'Power Whip', 'Prankster', 'Precipice Blades', 'Primarina', 'Primordial Sea', 'Prism Armor',
			'Probopass', 'Protean', 'Protect', 'Psyblade', 'Psychic Fangs', 'Psychic Surge', 'Psychic', 'Psycho Boost', 'Psyshield Bash',
			'Psystrike', 'Pulverizing Pancake', 'Pure Power', 'Purifying Salt', 'Pursuit', 'Pyro Ball', 'Quaquaval', 'Quick Claw',
			'Quiver Dance', 'Rage Fist', 'Raging Bolt', 'Raging Bull', 'Raging Fury', 'Raikou', 'Rapid Spin', 'Rayquaza', 'Rayquaza-Mega',
			'Razor Claw', 'Recover', 'Red Card', 'Reflect', 'Regenerator', 'Regice', 'Regidrago', 'Regieleki', 'Regigigas', 'Regirock',
			'Registeel', 'Reshiram', 'Rest', 'Revelation Dance', 'Revival Blessing', 'Rhyperior', 'Rillaboom', 'Roar', 'Roaring Moon',
			'Rocky Helmet', 'Roost', 'Rough Skin', 'Ruination', 'Sacred Fire', 'Sacred Sword', 'Salac Berry', 'Salamence', 'Salamence-Mega',
			'Salt Cure', 'Samurott', 'Samurott-Hisui', 'Sandsear Storm', 'Sandy Shocks', 'Sap Sipper', 'Sappy Seed', 'Scald', 'Sceptile',
			'Sceptile-Mega', 'Scizor-Mega', 'Scope Lens', 'Scream Tail', 'Searing Shot', 'Searing Sunraze Smash', 'Secret Sword',
			'Seed Flare', 'Seismic Toss', 'Serene Grace', 'Serperior', 'Shadow Ball', 'Shadow Bone', 'Shadow Shield', 'Shadow Sneak',
			'Shadow Tag', 'Sharpedo-Mega', 'Shaymin', 'Shaymin-Sky', 'Shed Skin', 'Shed Tail', 'Sheer Force', 'Shell Side Arm',
			'Shell Smash', 'Shield Dust', 'Shift Gear', 'Silk Scarf', 'Silk Trap', 'Silvally', 'Simple', 'Sinister Arrow Raid',
			'Sitrus Berry', 'Sizzly Slide', 'Skeledirge', 'Sky Plate', 'Slack Off', 'Slaking', 'Sleep Powder', 'Slither Wing',
			'Slowbro-Mega', 'Sludge Bomb', 'Sludge Wave', 'Snarl', 'Snipe Shot', 'Snorlax', 'Soft-Boiled', 'Solgaleo', 'Solid Rock',
			'Soul-Heart', 'Soul-Stealing 7-Star Strike', 'Spacial Rend', 'Sparkly Swirl', 'Spectral Thief', 'Spectrier', 'Speed Boost',
			'Spikes', 'Spiky Shield', 'Spin Out', 'Spirit Break', 'Spirit Shackle', 'Splash Plate', 'Splintered Stormshards',
			'Splishy Splash', 'Spooky Plate', 'Spore', 'Springtide Storm', 'Stakataka', 'Stakeout', 'Stamina', 'Static', 'Stealth Rock',
			'Steam Eruption', 'Steelix-Mega', 'Sticky Web', 'Stoked Sparksurfer', 'Stone Axe', 'Stone Edge', 'Stone Plate', 'Stored Power',
			'Storm Drain', 'Storm Throw', 'Strange Steam', 'Strength Sap', 'Sturdy', 'Sucker Punch', 'Suicune', 'Sunsteel Strike',
			'Super Fang', 'Supercell Slam', 'Superpower', 'Supreme Overlord', 'Surf', 'Surging Strikes', 'Swampert', 'Swampert-Mega',
			'Sword of Ruin', 'Swords Dance', 'Sylveon', 'Synthesis', 'Tablets of Ruin', 'Tachyon Cutter', 'Tail Glow', 'Tangling Hair',
			'Tangrowth', 'Tapu Bulu', 'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Taunt', 'Techno Blast', 'Teleport', 'Tera Blast',
			'Tera Starstorm', 'Terapagos-Stellar', 'Terapagos-Terastal', 'Teravolt', 'Terrakion', 'Thermal Exchange', 'Thick Fat',
			'Thousand Arrows', 'Thousand Waves', 'Throat Spray', 'Thunder Cage', 'Thunder Wave', 'Thunder', 'Thunderbolt', 'Thunderclap',
			'Thunderous Kick', 'Thundurus', 'Thundurus-Therian', 'Tidy Up', 'Ting-Lu', 'Tinted Lens', 'Togekiss', 'Topsy-Turvy',
			'Torch Song', 'Tornadus', 'Tornadus-Therian', 'Torterra', 'Tough Claws', 'Toxic Chain', 'Toxic Debris', 'Toxic Plate',
			'Toxic Spikes', 'Toxic', 'Tri Attack', 'Triage', 'Triple Arrows', 'Triple Axel', 'Turboblaze', 'Type: Null', 'Typhlosion',
			'Typhlosion-Hisui', 'Tyranitar', 'Tyranitar-Mega', 'U-turn', 'Umbreon', 'Unaware', 'Unburden', 'Ursaluna', 'Ursaluna-Bloodmoon',
			'Urshifu', 'Urshifu-Rapid-Strike', 'Uxie', 'V-create', 'Vanilluxe', 'Vaporeon', 'Venusaur', 'Venusaur-Mega', 'Vessel of Ruin',
			'Victini', 'Victory Dance', 'Virizion', 'Volcanion', 'Volcarona', 'Volt Absorb', 'Volt Switch', 'Volt Tackle', 'Walking Wake',
			'Walrein', 'Water Absorb', 'Water Bubble', 'Water Shuriken', 'Water Spout', 'Waterfall', 'Wave Crash', 'Weakness Policy',
			'Well-Baked Body', 'Whirlwind', 'White Herb', 'Wicked Blow', 'Wicked Torque', 'Wide Lens', 'Wiki Berry', 'Wild Charge',
			'Wildbolt Storm', 'Will-O-Wisp', 'Wise Glasses', 'Wish', 'Wishiwashi-School', 'Wo-Chien', 'Wonder Guard', 'Wood Hammer',
			'Wyrdeer', 'Xerneas', 'Xurkitree', 'Yawn', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zap Plate',
			'Zapdos', 'Zapdos-Galar', 'Zarude', 'Zekrom', 'Zeraora', 'Zing Zap', 'Zippy Zap', 'Zygarde', 'Zygarde-Complete',
		],
	},
	{
		name: "[Gen 9] Challenge Cup 1v1",
		desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose one to battle.`,

		mod: 'gen9',
		team: 'randomCC',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Terastal Clause', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 9] Challenge Cup 2v2",
		desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose two to battle in a doubles format.`,

		mod: 'gen9',
		team: 'randomCC',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Picked Team Size = 2'],
	},
	{
		name: "[Gen 9] Challenge Cup 6v6",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item.`,

		mod: 'gen9',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 9] Metronome Battle",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Max Team Size = 2', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'Pokestar Spirit', 'Terapagos', 'Shedinja + Sturdy', 'Cheek Pouch', 'Commander', 'Cursed Body', 'Dry Skin', 'Earth Eater', 'Fur Coat', 'Gorilla Tactics',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Moody', 'Neutralizing Gas', 'Opportunist', 'Parental Bond', 'Perish Body', 'Poison Heal',
			'Power Construct', 'Pressure', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Seed Sower', 'Stamina', 'Volt Absorb', 'Water Absorb',
			'Wonder Guard', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene', 'Black Sludge',
			'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite', 'Steel Memory', 'Oran Berry',
			'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (set.teraType === 'Steel') {
				return [`${species.name} has Steel as its Tera type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.items.get(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.species.get(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 8] Free-For-All Random Battle",

		mod: 'gen8',
		team: 'random',
		gameType: 'freeforall',
		// searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 8] Multi Random Battle",

		mod: 'gen8',
		team: 'random',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod',
		],
	},
	{
		name: "[Gen 8] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen8',
		team: 'randomFactory',
		ruleset: ['Standard', 'Dynamax Clause'],
		onBegin() {
			this.add(`raw|<div class="broadcast-blue"><b>Battle Factory Tier: ${this.teamGenerator.factoryTier}</b></div>`);
		},
	},
	{
		name: "[Gen 8] BSS Factory",
		desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Stadium Singles.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675374/">Information and Suggestions Thread</a>`,
		],

		mod: 'gen8',
		team: 'randomBSSFactory',
		searchShow: false,
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 8] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen8',
		team: 'randomHC',
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Nonexistent'],
	},
	{
		name: "[Gen 8] CAP 1v1",
		desc: `Randomly generated 1v1-style teams only including Pok&eacute;mon made by the Create-A-Pok&eacute;mon Project.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3663533/">CAP 1v1</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		team: 'randomCAP1v1',
		ruleset: [
			'Picked Team Size = 1',
			'Max Team Size = 3',
			'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},
	{
		name: "[Gen 8 BDSP] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3693955/">BDSP Random Battle Set Discussion</a>`,
		],

		mod: 'gen8bdsp',
		team: 'random',
		searchShow: false,
		ruleset: ['[Gen 8] Random Battle', '!PotD'],
	},
	{
		name: "[Gen 7] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
		],

		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 7] Random Doubles Battle",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3601525/">Sets and Suggestions</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		team: 'random',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen7',
		team: 'randomFactory',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
		onBegin() {
			this.add(`raw|<div class="broadcast-blue"><b>Battle Factory Tier: ${this.teamGenerator.factoryTier}</b></div>`);
		},
	},
	{
		name: "[Gen 7] BSS Factory",
		desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Spot Singles.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3604845/">Information and Suggestions Thread</a>`,
		],

		mod: 'gen7',
		team: 'randomBSSFactory',
		searchShow: false,
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 7] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen7',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Nonexistent'],
	},
	{
		name: "[Gen 7 Let's Go] Random Battle",

		mod: 'gen7letsgo',
		team: 'random',
		searchShow: false,
		ruleset: ['Obtainable', 'Allow AVs', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 6] Random Battle",

		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen6',
		team: 'randomFactory',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
		onBegin() {
			this.add(`raw|<div class="broadcast-blue"><b>Battle Factory Tier: ${this.teamGenerator.factoryTier}</b></div>`);
		},
	},
	{
		name: "[Gen 5] Random Battle",

		mod: 'gen5',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] Random Battle",

		mod: 'gen4',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Random Battle",

		mod: 'gen3',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 2] Random Battle",

		mod: 'gen2',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] Random Battle",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] Challenge Cup",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Sleep Clause Mod', 'Freeze Clause Mod'],
	},
	{
		name: "[Gen 1] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any moves, types, and stats.`,

		mod: 'gen1',
		team: 'randomHC',
		searchShow: false,
		challengeShow: false,
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Team Type Preview'],
		banlist: ['Nonexistent'],
		onModifySpecies(species, target, source, effect) {
			if (!target) return;
			return {...species, ...(target.set as any).hc};
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
			for (const i in pokemon.species.baseStats) {
				if (i === 'spd') continue;
				this.add('-start', pokemon, `${pokemon.species.baseStats[i as keyof StatsTable]}${i === 'spa' ? 'spc' : i}`, '[silent]');
			}
		},
	},

	// Metronome Battle
	///////////////////////////////////////////////////////////////////

	{
		section: "Metronome Battle",
		column: 3,
	},
	{
		name: "[Gen 8] Metronome Battle",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Max Team Size = 2', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'Pokestar Spirit', 'Shedinja + Sturdy', 'Battle Bond', 'Cheek Pouch', 'Cursed Body', 'Dry Skin', 'Fur Coat', 'Gorilla Tactics',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Perish Body', 'Poison Heal',
			'Power Construct', 'Pressure', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Snow Warning', 'Stamina',
			'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene',
			'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.gen > 8) {
				return [`${species.name} is from gen 9, which is banned from [Gen 8] Metronome Battle.`];
			}
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.items.get(set.item);
			if (item.gen > 8) {
				return [`${species.name} is from gen 9, which is banned from [Gen 8] Metronome Battle.`];
			}
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.species.get(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			const ability = this.dex.abilities.get(set.ability);
			if (ability.gen > 8) {
				return [`${species.name} is from gen 9, which is banned from [Gen 8] Metronome Battle.`];
			}
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},

	// RoA Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "RoA Spotlight",
		column: 4,
	},
	{
		name: "[Gen 7] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621217/">USM UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641346/">USM UU Viability Rankings</a>`,
		],

		mod: 'gen7',
		// searchShow: false,
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought', 'Kommonium Z', 'Mewnium Z'],
	},
	{
		name: "[Gen 4] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dp/articles/little_cup_guide">DPP LC Guide</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7336500/">DPP LC Viability Rankings</a>`,
		],

		mod: 'gen4',
		// searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
		banlist: [
			'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma',
			'Berry Juice', 'Deep Sea Tooth', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 8] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687023/">NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673598/">NU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676265/">NU Viability Rankings</a>`,
		],

		mod: 'gen8',
		// searchShow: false,
		ruleset: ['[Gen 8] RU'],
		banlist: ['RU', 'NUBL', 'Drizzle', 'Drought', 'Slush Rush'],
	},

	// Past Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens OU",
		column: 4,
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710887/">SS OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710892/">SS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3717979/">SS OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685980/">USM OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695427/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719305/">ORAS OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694551/">ORAS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 5] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666724/">BW2 OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3686880/">BW2 OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3668699/">BW2 OU Viability Rankings</a>`,
		],

		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Swagger Clause', 'Gems Clause', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Soul Dew', 'Acupressure', 'Assist'],
	},
	{
		name: "[Gen 4] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685887/">DPP OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687351/">DPP OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3683332/">DPP OU Viability Rankings</a>`,
		],

		mod: 'gen4',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Stat Trap Clause', 'Freeze Clause Mod'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Quick Claw', 'Soul Dew', 'Swagger'],
	},
	{
		name: "[Gen 3] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687814/">ADV OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687813/">ADV OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503019/">ADV OU Viability Rankings</a>`,
		],

		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'Smeargle + Ingrain', 'Sand Veil', 'Soundproof', 'Assist', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Swagger'],
	},
	{
		name: "[Gen 2] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3688141/">GSC OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3688523/">GSC OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3633233/">GSC OU Viability Rankings</a>`,
		],

		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
	},
	{
		name: "[Gen 1] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685846/">RBY OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689726/">RBY OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685861/">RBY OU Viability Rankings</a>`,
		],

		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},

	// Past Gens Doubles OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens Doubles OU",
		column: 4,
	},
	{
		name: "[Gen 8] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689189/">SS Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658826/">SS Doubles OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673519/">SS Doubles OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 7] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661293/">USUM Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394179/">USUM Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394190/">USUM Doubles OU Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void'],
	},
	{
		name: "[Gen 6] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3606255/">ORAS Doubles OU Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7387213/">ORAS Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7387215/">ORAS Doubles OU Sample Teams</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void'],
	},
	{
		name: "[Gen 5] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3606719/">BW2 Doubles Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7393048/">BW2 Doubles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7393081/">BW2 Doubles Sample Teams</a>`,
		],

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Swagger Clause', 'Sleep Clause Mod'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void', 'Gravity'],
	},
	{
		name: "[Gen 4] Doubles OU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3717286/">DPP Doubles</a>`],

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause'],
		banlist: ['AG', 'Uber', 'Soul Dew', 'Dark Void'],
		unbanlist: ['Manaphy', 'Mew', 'Salamence', 'Wobbuffet', 'Wynaut'],
	},
	{
		name: "[Gen 3] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666831/">ADV Doubles OU</a>`,
		],

		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', '!Switch Priority Clause Mod'],
		banlist: ['Uber', 'Quick Claw', 'Soul Dew', 'Swagger'],
		unbanlist: ['Wobbuffet', 'Wynaut'],
	},

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
		column: 4,
	},
	{
		name: "[Gen 8] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462704/">SS Ubers</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['AG', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3681331/">UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679621/">UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674793/">UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] OU'],
		banlist: ['OU', 'UUBL', 'Light Clay'],
	},
	{
		name: "[Gen 8] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3733236/">SS RU Resources</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730849/">SS PU Resources</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3724530/">SS LC Resources</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Magby', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix',
			'Tangela', 'Vullaby', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 8] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710956/">SS Monotype Resources</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard', 'Evasion Abilities Clause', 'Dynamax Clause'],
		banlist: [
			'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Moody', 'Power Construct', 'Shadow Tag', 'Damp Rock',
			'Focus Band', 'King\'s Rock', 'Quick Claw', 'Smooth Rock', 'Terrain Extender', 'Acupressure', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/posts/8031457">SS 1v1 Resources</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause',
		],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Dialga', 'Dragonite', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye', 'Snorlax', 'Solgaleo', 'Victini', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Power Construct', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw',
			'Acupressure', 'Hypnosis', 'Perish Song', 'Sing',
		],
	},
	{
		name: "[Gen 8] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/posts/9552584">SS AG Resources</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/posts/8034677">SS ZU Resources</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] PU'],
		banlist: ['PU', 'ZUBL', 'Damp Rock', 'Grassy Seed'],
	},
	{
		name: "[Gen 8] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656824/">SS CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671157/">SS CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674024/">SS CAP Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles",

		mod: 'gen8',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8 BDSP] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3693629/">BDSP OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3693721/">BDSP OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3696088/">BDSP OU Viability Rankings</a>`,
		],

		mod: 'gen8bdsp',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass'],
	},
	{
		name: "[Gen 8 BDSP] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694036/">BDSP Ubers</a>`,
		],

		mod: 'gen8bdsp',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['AG', 'Baton Pass'],
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Doubles",
		column: 4,
	},
	{
		name: "[Gen 8] Doubles Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661142/">Doubles Ubers</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] Doubles UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658504/">Doubles UU</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 8] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 8] VGC 2022",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677186/">VGC 2022 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695848/">VGC 2022 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3696395/">VGC 2022 Viability Rankings</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] VGC 2021",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer'],
	},
	{
		name: "[Gen 8] VGC 2020",

		mod: 'gen8dlc1',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer'],
	},
	{
		name: "[Gen 8 BDSP] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3693891/">BDSP Doubles OU</a>`,
		],

		mod: 'gen8bdsp',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Dark Void'],
	},
	{
		name: "[Gen 8 BDSP] Battle Festival Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694269/">Battle Festival Doubles</a>`,
		],

		mod: 'gen8bdsp',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 8'],
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
		column: 4,
	},
	{
		name: "[Gen 7] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462706/">USM Ubers</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 7] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3733237/">USM RU Resources</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] UU'],
		banlist: ['UU', 'RUBL', 'Mimikyu', 'Aurora Veil'],
		unbanlist: ['Drought'],
	},
	{
		name: "[Gen 7] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730730/">USM NU Resources</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] RU'],
		banlist: ['RU', 'NUBL', 'Drought'],
	},
	{
		name: "[Gen 7] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730846/">USM PU Resources</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 7] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">USM LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3639319/">USM LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">USM LC Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
			'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Wingull', 'Yanma',
			'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411581/">USM Monotype</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard', 'Evasion Abilities Clause', 'Swagger Clause'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 7] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031458/">USUM 1v1</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Swagger Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
		banlist: [
			'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mew', 'Mewtwo',
			'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky',
			'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom', 'Moody', 'Focus Sash', 'Grass Whistle', 'Hypnosis',
			'Perish Song', 'Sing', 'Detect + Fightinium Z',
		],
	},
	{
		name: "[Gen 7] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">Anything Goes Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646736/">Anything Goes Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 7] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646743/">ZU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3643412/">ZU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646739/">ZU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 7] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621207/">USUM CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691482/">USUM CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691484/">USUM CAP Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', '+CAP'],
	},
	{
		name: "[Gen 7] Battle Spot Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601012/">Introduction to Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3605970/">Battle Spot Singles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601658/">Battle Spot Singles Role Compendium</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3619162/">Battle Spot Singles Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Battle Bond'],
	},
	{
		name: "[Gen 7 Let's Go] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667865/">LGPE OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656868/">LGPE OU Viability Rankings</a>`,
		],

		mod: 'gen7letsgo',
		searchShow: false,
		ruleset: ['Adjust Level = 50', 'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// US/UM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles",
		column: 4,
	},
	{
		name: "[Gen 7] Doubles UU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3598014/">Doubles UU Metagame Discussion</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 7] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 7] VGC 2019",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
		banlist: ['Unown', 'Battle Bond'],
	},
	{
		name: "[Gen 7] VGC 2018",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3631800/">VGC 2018 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3622041/">VGC 2018 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3628885/">VGC 2018 Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		timer: {
			starting: 5 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7'],
		banlist: ['Oranguru + Symbiosis', 'Passimian + Defiant', 'Unown', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry', 'Battle Bond'],
	},
	{
		name: "[Gen 7] VGC 2017",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3583926/">VGC 2017 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591794/">VGC 2017 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3590391/">VGC 2017 Sample Teams</a>`,
		],

		mod: 'gen7sm',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		timer: {
			starting: 15 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Flat Rules', 'Old Alola Pokedex', '!! Adjust Level = 50', 'Min Source Gen = 7'],
		banlist: ['Mega', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry'],
	},
	{
		name: "[Gen 7] Battle Spot Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595001/">Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3593890/">Battle Spot Doubles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595859/">Battle Spot Doubles Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Battle Bond'],
	},
	{
		name: "[Gen 7 Let's Go] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671748/#post-8685222">LGPE Doubles OU</a>`,
		],

		mod: 'gen7letsgo',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Sleep Clause Mod'],
		banlist: ['Mewtwo'],
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// OR/AS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Singles",
		column: 7,
	},
	{
		name: "[Gen 6] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462707/">ORAS Ubers</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Swagger Clause', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/uu/">ORAS UU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3598164/">ORAS UU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought'],
	},
	{
		name: "[Gen 6] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3733238/">ORAS RU Resources</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 6] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730794/">ORAS NU Resources</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 6] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730710/">ORAS PU Resources</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] NU'],
		banlist: ['NU', 'PUBL', 'Chatter'],
	},
	{
		name: "[Gen 6] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
			'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 6] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411583/">ORAS Monotype</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Swagger Clause', 'Evasion Abilities Clause', 'Same Type Clause'],
		banlist: [
			'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Keldeo', 'Kyogre', 'Kyurem-White', 'Lucario-Mega',
			'Lugia', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye-Mega', 'Salamence-Mega', 'Shaymin-Sky',
			'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang',
			'Smooth Rock', 'Soul Dew', 'Baton Pass',
		],
	},
	{
		name: "[Gen 6] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031459/">ORAS 1v1</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: [
			'Max Team Size = 3', 'Picked Team Size = 1', 'Obtainable', 'Nickname Clause', 'Moody Clause', 'OHKO Clause',
			'Evasion Moves Clause', 'Accuracy Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod',
			'Cancel Mod', 'Team Preview',
		],
		banlist: [
			'Arceus', 'Blaziken-Mega', 'Charizard-Mega-Y', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Focus Sash',
			'Soul Dew', 'Dark Void', 'Grass Whistle', 'Hypnosis', 'Perish Song', 'Sing', 'Sleep Powder', 'Yawn',
		],
	},
	{
		name: "[Gen 6] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3523229/">ORAS Anything Goes</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3548945/">ORAS AG Resources</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/zu/">ORAS ZU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8034679/">ORAS ZU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 6] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3537407/">ORAS CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8752281/">ORAS CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8752280/">ORAS CAP Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU', '+CAP'],
		banlist: ['Cawmodore'],
	},
	{
		name: "[Gen 6] Battle Spot Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3527960/">ORAS Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3554616/">ORAS BSS Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Soul Dew'],
	},
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// OR/AS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Doubles/Triples",
		column: 7,
	},
	{
		name: "[Gen 6] VGC 2016",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3558332/">VGC 2016 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3580592/">VGC 2016 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
		banlist: ['Soul Dew'],
	},
	{
		name: "[Gen 6] VGC 2015",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3524352/">VGC 2015 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560820/">ORAS Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3530547/">VGC 2015 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Soul Dew', 'Articuno + Snow Cloak', 'Zapdos + Static', 'Moltres + Flame Body', 'Dragonite + Barrier'],
	},
	{
		name: "[Gen 6] VGC 2014",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3493272/">VGC 2014 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3507789/">VGC 2014 Viability Rankings</a>`,
		],

		mod: 'gen6xy',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Kalos Pokedex', 'Min Source Gen = 6'],
	},
	{
		name: "[Gen 6] Battle Spot Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560820/">ORAS Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560824/">ORAS BSD Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Soul Dew'],
	},
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 6] Battle Spot Triples",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3533914/">ORAS Battle Spot Triples Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3549201/">ORAS BST Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
	},
	{
		name: "[Gen 6] Triples Custom Game",

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// B2/W2 Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "B2/W2 Singles",
		column: 7,
	},
	{
		name: "[Gen 5] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462708/">BW2 Ubers</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 5] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3474024/">BW2 UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Swagger Clause', 'Sleep Clause Mod'],
		banlist: ['Uber', 'OU', 'UUBL', 'Arena Trap', 'Drought', 'Sand Stream', 'Snow Warning', 'Prankster + Assist', 'Prankster + Copycat', 'Baton Pass'],
	},
	{
		name: "[Gen 5] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3733239/">BW2 RU Resources</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] UU', 'Baton Pass Clause', '!Sleep Clause Mod', 'Sleep Moves Clause'],
		banlist: ['UU', 'RUBL', 'Shadow Tag', 'Shell Smash + Baton Pass'],
		unbanlist: ['Prankster + Assist', 'Prankster + Copycat', 'Baton Pass'],
	},
	{
		name: "[Gen 5] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3731650/">BW2 NU Resources</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] RU', '!Sleep Moves Clause', 'Sleep Clause Mod'],
		banlist: ['RU', 'NUBL', 'Assist', 'Copycat'],
	},
	{
		name: "[Gen 5] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730796/">BW2 PU Resources</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] NU', 'Sleep Moves Clause'],
		banlist: ['NU', 'PUBL', 'Damp Rock'],
	},
	{
		name: "[Gen 5] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3485860/">BW2 LC Viability Rankings</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
		banlist: [
			'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scraggy', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma',
			'Sand Rush', 'Sand Veil', 'Berry Juice', 'Soul Dew', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 5] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411584/">BW2 Monotype</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] OU', 'Same Type Clause', '!Gems Clause'],
		banlist: ['Latios'],
		unbanlist: ['Cloyster'],
	},
	{
		name: "[Gen 5] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031460/">BW2 1v1</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Accuracy Moves Clause', 'Sleep Moves Clause',
		],
		banlist: [
			'Arceus', 'Blaziken', 'Cottonee', 'Darkrai', 'Deoxys', 'Dialga', 'Dragonite', 'Giratina', 'Groudon', 'Ho-Oh',
			'Jirachi', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mew', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram',
			'Shaymin-Sky', 'Togekiss', 'Victini', 'Whimsicott', 'Zekrom', 'Focus Band', 'Focus Sash', 'Quick Claw', 'Soul Dew',
			'Perish Song',
		],
	},
	{
		name: "[Gen 5] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8034680/">BW2 ZU</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] PU'],
		banlist: [
			// PU
			'Audino', 'Banette', 'Beheeyem', 'Bronzor', 'Dodrio', 'Duosion', 'Dwebble', 'Fraxure', 'Gabite', 'Golduck',
			'Huntail', 'Jumpluff', 'Klang', 'Krokorok', 'Mantine', 'Maractus', 'Mawile', 'Monferno', 'Murkrow', 'Natu',
			'Purugly', 'Rampardos', 'Rapidash', 'Relicanth', 'Scraggy', 'Shiftry', 'Simisage', 'Sneasel', 'Stoutland',
			'Stunfisk', 'Swanna', 'Swoobat', 'Tentacool', 'Torterra', 'Ursaring', 'Victreebel', 'Vileplume', 'Volbeat',
			'Zebstrika', 'Zweilous',
			// ZUBL
			'Articuno', 'Dragonair', 'Glalie', 'Machoke', 'Marowak', 'Omanyte', 'Regigigas', 'Trubbish', 'Whirlipede',
			'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass',
		],
		unbanlist: ['Damp Rock'],
	},
	{
		name: "[Gen 5] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8967093/">BW2 CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8969768/">BW2 CAP Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] OU', '+CAP'],
		banlist: ['Cawmodore'],
	},
	{
		name: "[Gen 5] GBU Singles",

		mod: 'gen5',
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer'],
		banlist: ['Dark Void', 'Sky Drop', 'Soul Dew'],
	},
	{
		name: "[Gen 5] Custom Game",

		mod: 'gen5',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// B2/W2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: 'B2/W2 Doubles',
		column: 7,
	},
	{
		name: "[Gen 5] VGC 2013",

		mod: 'gen5',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Flat Rules'],
		banlist: ['Chatot', 'Dark Void', 'Sky Drop', 'Soul Dew'],
	},
	{
		name: "[Gen 5] GS Cup 2013",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: true,
		bestOfDefault: true,
		restricted: ['Restricted Legendary'],
		ruleset: ['Flat Rules', 'Limit Two Restricted'],
		banlist: ['Chatot', 'Dark Void', 'Sky Drop', 'Soul Dew'],
	},
	{
		name: "[Gen 5] VGC 2012",

		mod: 'gen5bw1',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] VGC 2011",

		mod: 'gen5bw1',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Old Unova Pokedex'],
		banlist: ['Sky Drop', 'Belue Berry', 'Durin Berry', 'Nomel Berry', 'Rabuta Berry', 'Spelon Berry', 'Watmel Berry'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 5] Triples Custom Game",

		mod: 'gen5',
		gameType: 'triples',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// DPP Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Singles",
		column: 6,
	},
	{
		name: "[Gen 4] Standard Cup",

		mod: 'gen4SelfKO',
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Cancel Mod', 'Team Preview', 'Adjust Level Down = 50',
				  'Max Team Size = 6', 'Picked Team Size = 3', 'VGC Timer', 'Endless Battle Clause', 'Freeze Clause Mod', 'Stadium Sleep Clause'],
		banlist: ['Soul Dew'],
		restricted: ['Restricted Legendary', "Mythical"],
		onValidateTeam(team) {
			const restrictedSpecies = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) restrictedSpecies.push(species.name);
			}
			if (restrictedSpecies.length > 0) {
				return [`You cannot use any restricted Pok\u00E9mon (you have: ${restrictedSpecies.join(', ')})`];
			}
		},
		onBegin() {
			this.add('rule', 'Hypnosis Clause: The accuracy of hypnosis is increased to 70% from 60% due to Battle Revolution.');
		},
		onModifyMove(move, pokemon, target) {
			if (move.id === "hypnosis") {
				move.accuracy = 70;
				return;
			}
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
		bestOfDefault: true,
	},
	{
		name: "[Gen 4] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462709/">DPP Ubers</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['AG'],
	},
	{
		name: "[Gen 4] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3532624/">DPP UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503638/">DPP UU Viability Rankings</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] OU', '!Baton Pass Stat Trap Clause', '!Freeze Clause Mod'],
		banlist: ['OU', 'UUBL', 'Baton Pass'],
		unbanlist: ['Arena Trap', 'Snow Cloak', 'Quick Claw', 'Swagger'],
	},
	{
		name: "[Gen 4] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3731691/">DPP NU Resources</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] UU', 'Baton Pass Clause'],
		banlist: ['UU', 'NUBL'],
		unbanlist: ['Sand Veil', 'Baton Pass'],
	},
	{
		name: "[Gen 4] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730821/">DPP PU Resources</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] NU'],
		banlist: [
			'Articuno', 'Cacturne', 'Charizard', 'Cradily', 'Dodrio', 'Drifblim', 'Dusclops', 'Electrode',
			'Floatzel', 'Gardevoir', 'Gligar', 'Golem', 'Grumpig', 'Haunter', 'Hitmonchan', 'Hypno', 'Jumpluff',
			'Jynx', 'Lickilicky', 'Linoone', 'Magmortar', 'Magneton', 'Manectric', 'Medicham', 'Meganium',
			'Nidoqueen', 'Ninetales', 'Piloswine', 'Poliwrath', 'Porygon2', 'Regice', 'Regirock', 'Roselia',
			'Sandslash', 'Sharpedo', 'Shiftry', 'Skuntank', 'Slowking', 'Tauros', 'Typhlosion', 'Venomoth',
			'Vileplume',
		],
	},
	{
		name: "[Gen 4] Anything Goes",

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Obtainable', 'Arceus EV Limit', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031462/">DPP 1v1</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: [
			'Arceus', 'Clefable', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Garchomp',
			'Giratina', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kyogre', 'Latias', 'Latios', 'Lugia', 'Machamp', 'Manaphy', 'Mew', 'Mewtwo',
			'Palkia', 'Porygon-Z', 'Rayquaza', 'Salamence', 'Shaymin', 'Shaymin-Sky', 'Snorlax', 'Togekiss', 'Focus Band', 'Focus Sash',
			'Quick Claw', 'Soul Dew', 'Destiny Bond', 'Explosion', 'Perish Song', 'Self-Destruct',
		],
	},
	{
		name: "[Gen 4] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8034681/">DPP ZU</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] PU'],
		banlist: [
			'Ampharos', 'Armaldo', 'Bellossom', 'Dragonair', 'Electabuzz', 'Gabite', 'Gastrodon', 'Glaceon', 'Glalie',
			'Golduck', 'Gorebyss', 'Hippopotas', 'Kadabra', 'Kingler', 'Lapras', 'Machoke', 'Magmar', 'Mantine', 'Marowak',
			'Metang', 'Misdreavus', 'Monferno', 'Mr. Mime', 'Muk', 'Murkrow', 'Pinsir', 'Politoed', 'Purugly', 'Quagsire',
			'Raichu', 'Rampardos', 'Rapidash', 'Regigigas', 'Relicanth', 'Rhydon', 'Scyther', 'Sneasel', 'Snover',
			'Solrock', 'Tangela', 'Torkoal', 'Victreebel', 'Xatu', 'Walrein', 'Zangoose', 'Damp Rock',
		],
	},
	{
		name: "[Gen 4] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8851251/">DPP CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8869378/">DPP CAP Sample Teams</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] OU', '+CAP'],
	},
	{
		name: "[Gen 4] Custom Game",

		mod: 'gen4',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions
		ruleset: ['Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// DPP Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Doubles",
		column: 6,
	},
	{
		name: "[Gen 4] Double Cup 2009",

		mod: 'gen4',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Cancel Mod', 'Team Preview', 'Max Level = 50',
				  'Max Team Size = 6', 'Picked Team Size = 4', 'VGC Timer', 'Endless Battle Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod'],
		banlist: ['Soul Dew', "Rotom-Heat", "Rotom-Wash", "Rotom-Frost", "Rotom-Fan", "Rotom-Mow"],
		restricted: ['Restricted Legendary', "Mythical"],
		unbanlist: ["Rotom"],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Hypnosis Clause: The accuracy of hypnosis is increased to 70% from 60% due to Battle Revolution.');
		},
		onValidateTeam(team) {
			const Legendary = [];
			const mythical = [];
			const RestrictedLeg = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) Legendary.push(species.name);
				if (species.tags.includes("Mythical")) mythical.push(species.name);
				if (species.tags.includes("Restricted Legendary")) RestrictedLeg.push(species.name);
			}
			if (Legendary.length > 0) {
				return [`You can't use any Legendary Pok\u00E9mon (you have: ${Legendary.join(', ')})`];
			}
			if (mythical.length > 0) {
				return [`You can't use any mythical Pok\u00E9mon (you have: ${mythical.join(', ')})`];
			}
			if (RestrictedLeg.length > 0) {
				return [`You can't use any restricted Legendary Pok\u00E9mon (you have: ${RestrictedLeg.join(', ')})`];
			}
		},
		onModifyMove(move, source, target) {
			if (move.id === "hypnosis") {
				move.accuracy = 70;
			}
		},
	},
	{
		name: "[Gen 4] Masters Battle",

		mod: 'gen4',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Cancel Mod', 'Team Preview', 'Adjust Level Down = 50',
				  'Max Team Size = 6', 'Picked Team Size = 4', 'VGC Timer', 'Endless Battle Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod'],
		banlist: ["Rotom-Heat", "Rotom-Wash", "Rotom-Frost", "Rotom-Fan", "Rotom-Mow", "Shaymin-Sky", "Giratina-Origin", "Griseous Core"],
		unbanlist: ["Rotom"],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Hypnosis Clause: The accuracy of hypnosis is increased to 70% from 60% due to Battle Revolution.');
		},
		onModifyMove(move, source, target) {
			if (move.id === "hypnosis") {
				move.accuracy = 70;
			}
		},
	},
	{
		name: "[Gen 4] Double Cup 2010",

		mod: 'gen4',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Cancel Mod', 'Team Preview', 'Adjust Level Down = 50',
				  'Max Team Size = 6', 'Picked Team Size = 4', 'VGC Timer', 'Endless Battle Clause'],
		banlist: ['Soul Dew'],
		bestOfDefault: true,
	},
	{
		name: "[Gen 4] GS Cup 2010",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: true,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Team Size = 4', 'Max Team Size = 6', 'Picked Team Size = 4', 'Limit Two Restricted', 'Team Preview'],
		restricted: ['Restricted Legendary'],
		banlist: ['Judgment', 'Soul Dew', 'Dark Void'],
		onValidateTeam(team) {
			const restrictedSpecies = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) restrictedSpecies.push(species.name);
			}
			if (restrictedSpecies.length > 2) {
				return [`You can only use up to two restricted Pok\u00E9mon (you have: ${restrictedSpecies.join(', ')})`];
			}
		},
	},
	{
		name: "[Gen 4] Doubles Custom Game",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions
		ruleset: ['Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Generations",
		column: 6,
	},
	{
		name: "[Gen 3] Orre Colosseum",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666831/">ADV Doubles OU</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/"> Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Picked Team Size = 4', 'Exact HP Mod', "Item Clause"],
		banlist: ['Soul Dew', 'Deoxys-Defense', 'Deoxys-Attack', 'Deoxys-Speed'],
		unbanlist: ['Latios', 'Latias', 'Wobbuffet', 'Wynaut'],
		restricted: ['Restricted Legendary', "Mythical"],
		bestOfDefault: true,
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[0]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[0]);
				}

				return this.tie();
			},
		},
		onBeforeTurn(pokemon) {
			if (this.turn === 15 && this.effectState.printed === undefined && this.field.getPseudoWeather("timer")) {
				this.effectState.printed = true;
				this.add(`raw|<div class="broadcast-red"><b>The Battle ends after turn 18!</b></div>`);
			}
			if(this.turn > 18 && this.field.getPseudoWeather("timer")) {
				let allyAlive = 0
				let allyPer = 0

				let foeAlive = 0
				let foePer = 0

				for (const poke of pokemon.side.pokemon) {
					if (!poke.fainted) {
						allyAlive += 1;
						allyPer += (poke.hp / poke.maxhp)
					}
				}
				for (const poke of pokemon.side.foe.pokemon) {
					if (!poke.fainted) {
						foeAlive += 1;
						foePer += (poke.hp / poke.maxhp)
					}
				}

				this.hint("16 turn limit reached. Deciding the winner")
				if (allyAlive > foeAlive) {
					this.hint(`${pokemon.side.name} had more pokemon`)
					this.forceWin(pokemon.side.id)
				} else if (allyAlive < foeAlive) {
					this.hint(`${pokemon.side.foe.name} had more pokemon`)
					this.forceWin(pokemon.side.foe.id)
				} else if (allyPer > foePer) {
					this.hint(`${pokemon.side.name} had a higher total hp percentage`)
					this.forceWin(pokemon.side.id)
				} else if (allyPer < foePer) {
					this.hint(`${pokemon.side.foe.name} had a higher total hp percentage`)
					this.forceWin(pokemon.side.foe.id)
				} else {
					this.hint("The battle ended with no clear winner")
					this.tie()
				}
			}
		},
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyritecolosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,2)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onValidateTeam(team) {
			const restrictedSpecies = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) restrictedSpecies.push(species.name);
			}
			if (restrictedSpecies.length > 0) {
				return [`You can't use any restricted Pok\u00E9mon (you have: ${restrictedSpecies.join(', ')})`];
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] Orre Unlimited",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666831/">ADV Doubles OU</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/"> Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Picked Team Size = 4', 'Exact HP Mod', "Item Clause"],
		unbanlist: ['Latias', 'Wobbuffet', 'Wynaut'],
		bestOfDefault: true,
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[0]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[0]);
				}

				return this.tie();
			},
		},
		onBeforeTurn(pokemon) {
			if (this.turn === 15 && this.effectState.printed === undefined && this.field.getPseudoWeather("timer")) {
				this.effectState.printed = true;
				this.add(`raw|<div class="broadcast-red"><b>The Battle ends after turn 18!</b></div>`);
			}
			if(this.turn > 18 && this.field.getPseudoWeather("timer")) {
				let allyAlive = 0
				let allyPer = 0

				let foeAlive = 0
				let foePer = 0

				for (const poke of pokemon.side.pokemon) {
					if (!poke.fainted) {
						allyAlive += 1;
						allyPer += (poke.hp / poke.maxhp)
					}
				}
				for (const poke of pokemon.side.foe.pokemon) {
					if (!poke.fainted) {
						foeAlive += 1;
						foePer += (poke.hp / poke.maxhp)
					}
				}

				this.hint("16 turn limit reached. Deciding the winner")
				if (allyAlive > foeAlive) {
					this.hint(`${pokemon.side.name} had more pokemon`)
					this.forceWin(pokemon.side.id)
				} else if (allyAlive < foeAlive) {
					this.hint(`${pokemon.side.foe.name} had more pokemon`)
					this.forceWin(pokemon.side.foe.id)
				} else if (allyPer > foePer) {
					this.hint(`${pokemon.side.name} had a higher total hp percentage`)
					this.forceWin(pokemon.side.id)
				} else if (allyPer < foePer) {
					this.hint(`${pokemon.side.foe.name} had a higher total hp percentage`)
					this.forceWin(pokemon.side.foe.id)
				} else {
					this.hint("The battle ended with no clear winner")
					this.tie()
				}
			}
		},
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyritecolosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,2)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] Orre Limited",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666831/">ADV Doubles OU</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/"> Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', "Item Clause", 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Picked Team Size = 4', 'Exact HP Mod', 'Max Level = 50'],
		banlist: ['Soul Dew', 'Deoxys-Defense', 'Deoxys-Attack', 'Deoxys-Speed'],
		unbanlist: ['Wobbuffet', 'Wynaut'],
		restricted: ["Sub-Legendary"],
		bestOfDefault: true,
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[0]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[0]);
				}

				return this.tie();
			},
		},
		onBeforeTurn(pokemon) {
			if (this.turn === 15 && this.effectState.printed === undefined && this.field.getPseudoWeather("timer")) {
				this.effectState.printed = true;
				this.add(`raw|<div class="broadcast-red"><b>The Battle ends after turn 18!</b></div>`);
			}
			if(this.turn > 18 && this.field.getPseudoWeather("timer")) {
				let allyAlive = 0
				let allyPer = 0

				let foeAlive = 0
				let foePer = 0

				for (const poke of pokemon.side.pokemon) {
					if (!poke.fainted) {
						allyAlive += 1;
						allyPer += (poke.hp / poke.maxhp)
					}
				}
				for (const poke of pokemon.side.foe.pokemon) {
					if (!poke.fainted) {
						foeAlive += 1;
						foePer += (poke.hp / poke.maxhp)
					}
				}

				this.hint("16 turn limit reached. Deciding the winner")
				if (allyAlive > foeAlive) {
					this.hint(`${pokemon.side.name} had more pokemon`)
					this.forceWin(pokemon.side.id)
				} else if (allyAlive < foeAlive) {
					this.hint(`${pokemon.side.foe.name} had more pokemon`)
					this.forceWin(pokemon.side.foe.id)
				} else if (allyPer > foePer) {
					this.hint(`${pokemon.side.name} had a higher total hp percentage`)
					this.forceWin(pokemon.side.id)
				} else if (allyPer < foePer) {
					this.hint(`${pokemon.side.foe.name} had a higher total hp percentage`)
					this.forceWin(pokemon.side.foe.id)
				} else {
					this.hint("The battle ended with no clear winner")
					this.tie()
				}
			}
		},
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyritecolosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,2)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onValidateTeam(team) {
			const Legendary = [];
			const mythical = [];
			const RestrictedLeg = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) Legendary.push(species.name);
				if (species.tags.includes("Mythical")) mythical.push(species.name);
				if (species.tags.includes("Restricted Legendary")) RestrictedLeg.push(species.name);
			}
			if (Legendary.length > 1) {
				return [`You can use only one Legendary Pok\u00E9mon (you have: ${Legendary.join(', ')})`];
			}
			if (mythical.length > 0) {
				return [`You can't use any mythical Pok\u00E9mon (you have: ${mythical.join(', ')})`];
			}
			if (RestrictedLeg.length > 0) {
				return [`You can't use any restricted Legendary Pok\u00E9mon (you have: ${RestrictedLeg.join(', ')})`];
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] Realgam Colosseum",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666831/">ADV Doubles OU</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/">Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', "Item Clause", 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Picked Team Size = 4', 'Exact HP Mod', 'Max Level = 50'],
		banlist: ['Deoxys-Defense', 'Deoxys-Attack', 'Deoxys-Speed'],
		unbanlist: ['Wobbuffet', 'Wynaut'],
		restricted: ['Restricted Legendary', "Mythical", "Sub-Legendary", 'Soul Dew'],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyritecolosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,2)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onValidateTeam(team) {
			const restrictedSpecies = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) restrictedSpecies.push(species.name);
				if (this.ruleTable.isRestricted(set.item)) restrictedSpecies.push(species.name);
			}
			if (restrictedSpecies.length > 1) {
				return [`You can only use one restricted Pok\u00E9mon/Item (you have: ${restrictedSpecies.join(', ')})`];
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] Under Colosseum",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666831/">ADV Doubles OU</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/">Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		gameType: 'doubles',
		ruleset: ['Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Max Level = 50', "Item Clause",
				  'Picked Team Size = 4', 'Exact HP Mod'],
		unbanlist: ['Wynaut', 'Unreleased', 'Unobtainable', "Flareon"],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyritecolosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,2)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onValidateSet(set) {
			const species = this.dex.forGen(3).species.get(set.species);
			const Under =
				["rhydon", "pinsir", "togetic", "ninjask", "shedinja", "exeggutor", "mrmime", "charizard", "armaldo", "milotic",
				 "lapras", "nidoqueen", "hitmonlee", "blaziken", "flygon", "lanturn", "steelix", "dewgong", "camerupt", "torkoal",
				 "sceptile", "feraligatr", "vaporeon", "flareon", "umbreon", "cloyster", "aggron", "blastoise", "blissey",
				 "azumarill", "banette", "cradily",	"dodrio", "donphan", "exploud", "dugtrio", "electrode", "forretress",
				 "gardevoir", "glalie", "golduck", "golem", "grumpig", "gorebyss", "hitmontop", "kabutops", "manectric", "miltank",
				 "mantine", "muk", "linoone", "magneton", "lunatone", "magmar", "machamp", "ninetales", "raichu", "quagsire",
				 "primeape", "politoed", "porygon2", "poliwrath", "omastar", "persian", "piloswine", "rapidash", "sableye",
				 "scizor", "solrock", "tentacruel", "slowking", "walrein", "zangoose", "wobbuffet", "whiscash", "weezing", "sandslash",
				 "skarmory", "victreebel", "swellow", "smeargle", "ampharos", "ursaring", "slowbro", "cacturne", "sharpedo", "huntail",
				 "absol", "crawdaunt", "wailord", "venomoth", "sudowoodo", "relicanth", "hypno", "xatu", "kingler", "raticate",
				 "meganium", "venusaur", "altaria", "vileplume", "bellossom", "typhlosion"];
			const Pyrite =
				["lickitung", "tangela", "aipom", "yanma", "murkrow", "misdreavus", "girafarig", "dunsparce", "gligar", "sneasel",
				 "stantler", "nosepass", "roselia", "farfetchd", "qwilfish", "corsola", "ariados", "beautifly", "dustox", "ledian",
				 "masquerain", "mawile", "delcatty", "delibird", "shuckle", "spinda", "luvdisc", "beedrill", "butterfree", "ditto",
				 "unown", "tropius", "castform", "arbok", "chimecho", "octillery", "magcargo", "fearow", "pidgeot", "noctowl",
				 "furret", "granbull", "hitmonchan", "mightyena", "plusle", "minun", "volbeat", "illumise", "kecleon", "swalot",
				 "sunflora", "seaking", "pelipper", "parasect", "seviper"]
			if (!species.nfe && !Under.includes(this.toID(set.species)) && !Pyrite.includes(this.toID(set.species))) {
				return [set.species + " cannot evolve."];
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] Pyrite Colosseum",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666831/">ADV Doubles OU</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/">Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Max Level = 50', "Item Clause",
				  'Picked Team Size = 4', 'Exact HP Mod'],
		unbanlist: ['Wynaut'],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyriteColosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,2)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const Pyrite =
				["lickitung", "tangela", "aipom", "yanma", "murkrow", "misdreavus", "girafarig", "dunsparce", "gligar", "sneasel",
				 "stantler", "nosepass", "roselia", "farfetchd", "qwilfish", "corsola", "ariados", "beautifly", "dustox", "ledian",
				 "masquerain", "mawile", "delcatty", "delibird", "shuckle", "spinda", "luvdisc", "beedrill", "butterfree", "ditto",
				 "unown", "tropius", "castform", "arbok", "chimecho", "octillery", "magcargo", "fearow", "pidgeot", "noctowl",
				 "furret", "granbull", "hitmonchan", "mightyena", "plusle", "minun", "volbeat", "illumise", "kecleon", "swalot",
				 "sunflora", "seaking", "pelipper", "parasect", "seviper"]
			if (!species.nfe && !Pyrite.includes(this.toID(set.species))) {
				return [set.species + " cannot evolve."];
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] Phenac Stadium",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666831/">ADV Doubles OU</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/">Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Max Level = 50', "Item Clause",
				  'Picked Team Size = 4', 'Exact HP Mod'],
		unbanlist: ['Wynaut'],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyritecolosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,2)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onValidateSet(set) {
			let Pikachu = ["bide", "charge", "charm", "doubleSlap", "encore", "followme", "present", "reversal", "sweetkiss", "teeterdance", "volttackle", "wish"]
			let Clefairy = ["amnesia", "bellydrum", "charm", "icywind", "magicalleaf", "present", "splash", "sweetkiss", "wish"]
			let Jigglypuff = ["charm", "faintattack", "faketears", "icywind", "perishsong", "present", "sweetkiss", "tickle", "wish"]
			let Marill = ["bubble", "charm", "encore", "refresh", "sing", "slam", "splash", "tickle"]
			let species = this.dex.species.get(set.species);
			species = this.dex.forGen(species.gen).species.get(set.species);
			if (species.prevo !== '' && !species.nfe) {
				return [set.species + " cannot evolve."];
			}
			let bannedMoves = [];
			if (set.species === "Pikachu") {
				for (const move of set.moves) {
					if (Pikachu.includes(this.toID(move))) {
						bannedMoves.push(move)
					}
				}
			} else if (set.species === "Clefairy") {
				for (const move of set.moves) {
					if (Clefairy.includes(this.toID(move))) {
						bannedMoves.push(move)
					}
				}
			} else if (set.species === "Jigglypuff") {
				for (const move of set.moves) {
					if (Jigglypuff.includes(this.toID(move))) {
						bannedMoves.push(move)
					}
				}
			} else if (set.species === "Marill") {
				for (const move of set.moves) {
					if (Marill.includes(this.toID(move))) {
						bannedMoves.push(move)
					}
				}
			}
			if (bannedMoves.length > 0) {
				return [`You are using unavailable moves (you have: ${bannedMoves.join(', ')})`];
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] Orre Single",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687813/">ADV Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/"> Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		gameType: 'singles',
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Picked Team Size = 3', 'Exact HP Mod', "Item Clause"],
		banlist: ['Soul Dew', 'Deoxys-Defense', 'Deoxys-Attack', 'Deoxys-Speed'],
		unbanlist: ['Latios', 'Latias', 'Wobbuffet', 'Wynaut'],
		restricted: ['Restricted Legendary', "Mythical"],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyritecolosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,1)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onValidateTeam(team) {
			const restrictedSpecies = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) restrictedSpecies.push(species.name);
			}
			if (restrictedSpecies.length > 0) {
				return [`You can't use any restricted Pok\u00E9mon (you have: ${restrictedSpecies.join(', ')})`];
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] Single Unlimited",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687813/">ADV Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/"> Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		gameType: 'singles',
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Picked Team Size = 3', 'Exact HP Mod', "Item Clause"],
		unbanlist: ['Latias', 'Wobbuffet', 'Wynaut'],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyritecolosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,1)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] Single Limited",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687813/">ADV Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/orre-colosseum-now-playable.3698894/"> Orre Colosseum</a>`,
			`&bullet; <a href-"https://discord.gg/cSZE6MZX5Q">Join the discord server</a>`,
		],

		mod: 'gen3Colosseum',
		gameType: 'singles',
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Max Team Size = 6', "Item Clause", 'VGC Timer',
				  'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod', 'Picked Team Size = 3', 'Exact HP Mod', 'Max Level = 50'],
		banlist: ['Soul Dew', 'Deoxys-Defense', 'Deoxys-Attack', 'Deoxys-Speed'],
		unbanlist: ['Wobbuffet', 'Wynaut'],
		restricted: ["Sub-Legendary"],
		bestOfDefault: true,
		onBegin() {
			this.add('rule', 'Self-KO clause: If your last pokemon faints to a self-KO move or effect you will lose the battle');
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum orecolosseum">` +
					`Orre Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum phenacstadium">` +
					`Phenac Stadium` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum pyritecolosseum">` +
					`Pyrite Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum undercolosseum">` +
					`Under Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum realgamcolosseum">` +
					`Realgam Colosseum` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle13">` +
					`Mt. Battle 1-3` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle46">` +
					`Mt. Battle 4-6` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/colosseum mtbattle710">` +
					`Mt. Battle 7-10` +
				`</button>` +
				`</div></center>`);

			this.add('rule', 'Exact Very HP Mod: Exact HP is shown and printed on swap in');
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,1)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onValidateTeam(team) {
			const Legendary = [];
			const mythical = [];
			const RestrictedLeg = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) Legendary.push(species.name);
				if (species.tags.includes("Mythical")) mythical.push(species.name);
				if (species.tags.includes("Restricted Legendary")) RestrictedLeg.push(species.name);
			}
			if (Legendary.length > 1) {
				return [`You can use only one Legendary Pok\u00E9mon (you have: ${Legendary.join(', ')})`];
			}
			if (mythical.length > 0) {
				return [`You can't use any mythical Pok\u00E9mon (you have: ${mythical.join(', ')})`];
			}
			if (RestrictedLeg.length > 0) {
				return [`You can't use any restricted Legendary Pok\u00E9mon (you have: ${RestrictedLeg.join(', ')})`];
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct === undefined && move.recoil === undefined) return;

			let sourceFanted = 0;
			let targetFanted = 0;

			for (const mon of pokemon.side.pokemon) {
				if (mon.fainted) {
					sourceFanted++;
				}
			}
			for (const mon of pokemon.side.foe.pokemon) {
				if (mon.fainted) {
					targetFanted++;
				}
			}

			if (move.recoil === undefined) {
				let protect = false;

				for (const mon of pokemon.side.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						sourceFanted--;
					}
				}

				for (const mon of pokemon.side.foe.active) {
					if (mon.volatiles['protect'] || mon.volatiles['banefulbunker'] || mon.volatiles['kingsshield'] ||
						mon.volatiles['spikyshield']) {
						targetFanted--;
					}
				}

				if (sourceFanted > 1 && targetFanted > 1) {
					for (const poke of pokemon.side.foe.active) {
						poke.addVolatile("danger");
					}
				}
			} else {
				if (sourceFanted > 2 && targetFanted > 2) {
					pokemon.addVolatile("survivor");
				}
			}
		},
	},
	{
		name: "[Gen 3] AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462710/">ADV Ubers</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Obtainable', 'Nickname Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Min Source Gen = 3',],
	},
	{
		name: "[Gen 3] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462710/">ADV Ubers</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Deoxys Camouflage Clause', 'One Baton Pass Clause'],
		banlist: ['Wobbuffet + Leftovers', 'Wynaut + Leftovers', 'Baton Pass'],
	},
	{
		name: "[Gen 3] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3585923/">ADV UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3548578/">ADV UU Viability Rankings</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'Smeargle + Ingrain', 'Arena Trap', 'Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 3] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3733240/">ADV RU Resources</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['[Gen 3] UU'],
		banlist: [
			'Altaria', 'Ampharos', 'Arcanine', 'Blastoise', 'Clefable', 'Cradily', 'Electabuzz', 'Electrode', 'Fearow', 'Feraligatr', 'Gligar', 'Golduck',
			'Golem', 'Gorebyss', 'Granbull', 'Grumpig', 'Hitmonlee', 'Hitmontop', 'Jumpluff', 'Kangaskhan', 'Lanturn', 'Lunatone', 'Manectric', 'Misdreavus',
			'Muk', 'Nidoking', 'Nidoqueen', 'Ninjask', 'Omastar', 'Pinsir', 'Qwilfish', 'Sandslash', 'Scyther', 'Slowking', 'Solrock', 'Tentacruel', 'Vileplume',
			'Walrein', 'Xatu',
		],
	},
	{
		name: "[Gen 3] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730732/">ADV NU Resources</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 3] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729689">ADV PU</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'NUBL', 'NU', 'PUBL'],
	},
	{
		name: "[Gen 3] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8034684">ADV ZU</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Baton Pass Stat Trap Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'NUBL', 'NU', 'PUBL', 'PU', 'ZUBL', 'Baton Pass + Substitute'],
	},
	{
		name: "[Gen 3] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3722418/">ADV LC</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause', 'Accuracy Moves Clause'],
		banlist: ['Chansey', 'Meditite', 'Omanyte', 'Scyther', 'Wynaut', 'Zigzagoon', 'Deep Sea Tooth', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger'],
	},
	{
		name: "[Gen 3] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031463/">ADV 1v1</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: [
			'Clefable', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Groudon', 'Ho-Oh', 'Kyogre', 'Latias', 'Latios',
			'Lugia', 'Mew', 'Mewtwo', 'Rayquaza', 'Slaking', 'Snorlax', 'Suicune', 'Zapdos', 'Destiny Bond', 'Explosion', 'Perish Song',
			'Self-Destruct', 'Focus Band', 'King\'s Rock', 'Quick Claw',
		],
	},
	{
		name: "[Gen 3] Custom Game",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 3] Doubles Custom Game",

		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 2] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462711/">GSC Ubers</a>`,
		],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 2] UU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3576710/">GSC UU</a>`],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] OU'],
		banlist: ['OU', 'UUBL', 'Agility + Baton Pass'],
		unbanlist: ['Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
	},
	{
		name: "[Gen 2] NU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3642565/">GSC NU</a>`],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] UU'],
		banlist: ['UU', 'NUBL', 'Swagger'],
		unbanlist: ['Agility + Baton Pass'],
	},
	{
		name: "[Gen 2] PU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3671458/">GSC PU</a>`],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] NU'],
		banlist: ['NU', 'PUBL'],
		unbanlist: ['Swagger'],
	},
	{
		name: "[Gen 2] 1v1",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/posts/8031464/">GSC 1v1</a>`],

		mod: 'gen2',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: [
			'Alakazam', 'Celebi', 'Clefable', 'Ho-Oh', 'Lugia', 'Mew', 'Mewtwo', 'Snorlax', 'Zapdos',
			'Berserk Gene', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Attract', 'Destiny Bond',
			'Explosion', 'Perish Song', 'Present', 'Self-Destruct', 'Swagger',
		],
	},
	{
		name: "[Gen 2] NC 2000",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3682691/">NC 2000 Resource Hub</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677370/">Differences between NC 2000 and GSC OU</a>`,
		],

		mod: 'gen2stadium2',
		searchShow: false,
		bestOfDefault: true,
		ruleset: [
			'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155',
			'Obtainable', 'Stadium Sleep Clause', 'Freeze Clause Mod', 'Species Clause', 'Item Clause', 'Endless Battle Clause', 'Cancel Mod', 'Event Moves Clause', 'Nickname Clause', 'Team Preview', 'NC 2000 Move Legality',
		],
		banlist: ['Uber'],
		onBegin() {
			this.add('rule', 'Stadium Event Moves Clause: Event-only moves are banned');
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const learnsetData = {...(this.dex.data.Learnsets[species.id]?.learnset || {})};
			let prevo = species.prevo;
			while (prevo) {
				const prevoSpecies = this.dex.species.get(prevo);
				const prevoLsetData = this.dex.data.Learnsets[prevoSpecies.id]?.learnset || {};
				for (const moveid in prevoLsetData) {
					if (!(moveid in learnsetData)) {
						learnsetData[moveid] = prevoLsetData[moveid];
					} else {
						learnsetData[moveid].push(...prevoLsetData[moveid]);
					}
				}
				prevo = prevoSpecies.prevo;
			}
			const problems = [];
			if (set.moves?.length) {
				for (const move of set.moves) {
					if (learnsetData[this.toID(move)] && !learnsetData[this.toID(move)].filter(v => !v.includes('S')).length) {
						if ((this.toID(move) === "earthquake" && this.toID(set.species) === "gligar") ||
							(this.toID(move) === "batonpass" && this.toID(set.species) === "farfetchd")) {
							continue;
						}
						problems.push(`${species.name}'s move ${move} is obtainable only through events.`);
					}
				}
			}
			if (problems.length) problems.push(`(Event-only moves are banned.)`);
			return problems;
		},
		onBattleStart() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.pokemon.slice(0,2)) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
		onResidual() {
			const shuffle = function shuffle(array: String[]) {
				let currentIndex = array.length,  randomIndex;

				// While there remain elements to shuffle.
				while (currentIndex != 0) {

				  // Pick a remaining element.
				  randomIndex = Math.floor(Math.random() * currentIndex);
				  currentIndex--;

				  // And swap it with the current element.
				  [array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
				}

				return array;
			}

			let prints = [];

			for (const side of this.sides) {
				for (const poke of side.active) {
					prints.push(`${poke.baseSpecies.baseSpecies}-${side.name}: ${poke.hp}/${poke.maxhp}`);
				}
			}

			shuffle(prints);

			for (const status of prints) {
				this.hint(status);
			}
		},
	},
	{
		name: "[Gen 2] Stadium OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677370/">Placeholder</a>`,
		],

		mod: 'gen2stadium2',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 2] Prime Cup",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677370/">Placeholder</a>`,
		],

		mod: 'gen2',
		searchShow: true,
		bestOfDefault: true,
		ruleset: [
			'Item Clause', 'Endless Battle Clause', 'Picked Team Size = 3', 'VGC Timer', 'Event Moves Clause',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod',
		],
		unbanlist: ['Uber'],
		onTryMove(attacker, defender, move) {
			let fainted = 0;

			for (const mon of attacker.side.pokemon) {
				if (mon.fainted) {
					fainted++;
				}
			}

			if (fainted + 1 === attacker.side.pokemon.length) {
				if (move.selfdestruct === "always" || move.id === "destinybond" || move.id === "perishsong") {
					this.add('-fail', attacker, 'Your final pokemon cannot use a self ko move');
					this.attrLastMove('[still]');
					return null;
				}
			}
		},
	},
	{
		name: "[Gen 2] Poke Cup",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677370/">Placeholder</a>`,
		],

		mod: 'gen2',
		searchShow: true,
		bestOfDefault: true,
		ruleset: [
			'Item Clause', 'Endless Battle Clause', 'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155', 'VGC Timer',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod', 'Event Moves Clause',
		],
		banlist: ['Uber'],
		onTryMove(attacker, defender, move) {
			let fainted = 0;

			for (const mon of attacker.side.pokemon) {
				if (mon.fainted) {
					fainted++;
				}
			}

			if (fainted + 1 === attacker.side.pokemon.length) {
				if (move.selfdestruct === "always" || move.id === "destinybond" || move.id === "perishsong") {
					this.add('-fail', attacker, 'Your final pokemon cannot use a self ko move');
					this.attrLastMove('[still]');
					return null;
				}
			}
		},
	},
	{
		name: "[Gen 2] Poke Cup No OHKO",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677370/">Placeholder</a>`,
		],

		mod: 'gen2',
		searchShow: true,
		bestOfDefault: true,
		ruleset: [
			'Item Clause', 'Endless Battle Clause', 'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155', 'VGC Timer',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod', 'Event Moves Clause', 'OHKO Clause',
		],
		banlist: ['Uber'],
		onTryMove(attacker, defender, move) {
			let fainted = 0;

			for (const mon of attacker.side.pokemon) {
				if (mon.fainted) {
					fainted++;
				}
			}

			if (fainted + 1 === attacker.side.pokemon.length) {
				if (move.selfdestruct === "always" || move.id === "destinybond" || move.id === "perishsong") {
					this.add('-fail', attacker, 'Your final pokemon cannot use a self ko move');
					this.attrLastMove('[still]');
					return null;
				}
			}
		},
	},
	{
		name: "[Gen 2] Little Cup",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677370/">Placeholder</a>`,
		],

		mod: 'gen2',
		searchShow: true,
		bestOfDefault: true,
		ruleset: [
			'Item Clause', 'Endless Battle Clause', 'Picked Team Size = 3', 'VGC Timer', 'Max Level = 5', 'Event Moves Clause',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod',
		],
		banlist: ['Uber', 'Sonic Boom', 'Dragon Rage'],
		onValidateSet(set) {
			if (set.level > 5) {
				return [set.species + "'s level is higher than the cap of 5"];
			}
			const species = this.dex.species.get(set.species);
			if (species.prevo && this.dex.species.get(species.prevo).gen <= this.gen) {
				return [set.species + " isn't the first in its evolution family."];
			} else if (!species.nfe) {
				return [set.species + " is the only pokemon in its evolution family."];
			}
		},
		onTryMove(attacker, defender, move) {
			let fainted = 0;

			for (const mon of attacker.side.pokemon) {
				if (mon.fainted) {
					fainted++;
				}
			}

			if (fainted + 1 === attacker.side.pokemon.length) {
				if (move.selfdestruct === "always" || move.id === "destinybond" || move.id === "perishsong") {
					this.add('-fail', attacker, 'Your final pokemon cannot use a self ko move');
					this.attrLastMove('[still]');
					return null;
				}
			}
		},
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 1] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462712/">RBY Ubers</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3573896/">RBY UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3647713/">RBY UU Viability Rankings</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU', 'APT Clause'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 1] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679758/">RBY NU Metagame Discussion &amp; Resources</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] UU', '!APT Clause'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 1] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3700527/">RBY PU Metagame Discussion &amp; Resources</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 1] 1v1",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031468">RBY 1v1</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: ['Mew', 'Mewtwo', 'Bind', 'Clamp', 'Explosion', 'Fire Spin', 'Self-Destruct', 'Wrap'],
	},
	{
		name: "[Gen 1] Yellow Prime Cup",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3682412/">Nintendo Cup 1997 Discussion &amp; Resources</a>`,
		],

		mod: 'gen1',
		searchShow: true,
		bestOfDefault: true,
		ruleset: [
			'Picked Team Size = 3', 'VGC Timer',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod',
		],
	},
	{
		name: "[Gen 1] Yellow Poke Cup",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3682412/">Nintendo Cup 1997 Discussion &amp; Resources</a>`,
		],

		mod: 'gen1',
		searchShow: true,
		bestOfDefault: true,
		ruleset: [
			'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155', 'VGC Timer',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod',
		],
		onValidateSet(set) {
			if (set.level > 55) {
				return [set.species + "'s level is higher than the cap of 55"];
			} else
			if (set.level < 50) {
				return [set.species + "'s level is lower than the min of 50"];
			}
		},
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Yellow Pika Cup",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3682412/">Nintendo Cup 1997 Discussion &amp; Resources</a>`,
		],

		mod: 'gen1',
		searchShow: true,
		bestOfDefault: true,
		ruleset: [
			'Picked Team Size = 3', 'Min Level = 15', 'Max Level = 20', 'Max Total Level = 50', 'VGC Timer',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod',
		],
		onValidateSet(set) {
			if (set.level > 20) {
				return [set.species + "'s level is higher than the cap of 55"];
			} else
			if (set.level < 15) {
				return [set.species + "'s level is lower than the min of 50"];
			}
		},
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Yellow Petit Cup",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3682412/">Nintendo Cup 1997 Discussion &amp; Resources</a>`,
		],

		mod: 'gen1',
		searchShow: true,
		bestOfDefault: true,
		ruleset: [
			'Picked Team Size = 3', 'Min Level = 25', 'Max Level = 30', 'Max Total Level = 80', 'VGC Timer',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod',
		],
		banlist: ['Uber'],
		onValidateSet(set) {
			if (set.level > 30) {
				return [set.species + "'s level is higher than the cap of 30"];
			} else
			if (set.level < 25) {
				return [set.species + "'s level is lower than the min of 25"];
			}
			const species = this.dex.species.get(set.species || set.name);
			if (species.prevo && this.dex.species.get(species.prevo).gen <= this.gen) {
				return [set.species + " isn't the first in its evolution family."];
			}
			if (species.heightm > 2) {
				return [set.species + " is too tall. Must be 2m tall or less"]
			}
			if (species.weighthg > 200) {
				return [set.species + " is too heavy. Must be 20kg or less"]
			}
		},
	},
	{
		name: "[Gen 1] Japanese OU",
		desc: `Generation 1 with Japanese battle mechanics.`,

		mod: 'gen1jpn',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Stadium OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685877/">Stadium OU Viability Rankings</a>`,
		],

		mod: 'gen1stadium',
		searchShow: false,
		ruleset: ['Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Tradebacks OU",
		desc: `RBY OU with movepool additions from the Time Capsule.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/articles/rby-tradebacks-ou">RBY Tradebacks OU</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU', 'Allow Tradeback'],
	},
	{
		name: "[Gen 1] NC 1997",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3682412/">NC 1997 Discussion &amp; Resources</a>`,
		],

		mod: 'gen1jpn',
		searchShow: true,
		bestOfDefault: true,
		ruleset: [
			'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'HP Percentage Mod', 'Cancel Mod', 'NC 1997 Move Legality',
		],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Custom Game",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
];

// code for easily merging in staffbros.
const script_path = "../../dist/data/mods/dssb2/scripts.js";
const SSBscripts = require(script_path).Scripts;
const SSBtemplate = {
	name: "[Gen 9] Dawn Super Staff Bros.",

	searchShow: true,
	mod: 'dssb2',
	team: 'randomStaffBros',
	ruleset: ['Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
};

// SSB singles
/** @type {Object.<any, any>} */
const SSBbase = {...SSBtemplate}; // deep clone
for (const script in SSBscripts) {
	if (script.startsWith("on")) {
		SSBbase[script] = SSBscripts[script]; // merge the scripts
	}
}

const SSBDoubles = {...SSBbase};
SSBDoubles.gameType = "doubles";
SSBDoubles.name = "[Gen 9] Dawn Super Staff Bros. Doubles";

const SSBteamBuild = {...SSBbase};
SSBteamBuild.name = "[Gen 9] Dawn Super Staff Bros. Teambuilding";
SSBteamBuild.team = "randomStaffBros2";

const SSBcc1v1 = {...SSBbase};
SSBcc1v1.name = "[Gen 9] Dawn Super Staff Bros. Challenge Cup 1v1";
SSBcc1v1.team = "randomStaffBros";
SSBcc1v1.ruleset = [
	'Picked Team Size = 1',
	'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause',
];

function customToListString(arr: string[], conjunction = "and") {
	if (!arr.length) return '';
	if (arr.length === 1) return arr[0];
	if (arr.length === 2) return `${arr[0]} ${conjunction.trim()} ${arr[1]}`;
	return `${arr.slice(0, -1).join(", ")}, ${conjunction.trim()} ${arr.slice(-1)[0]}`;
}

function formatRunLearn(target: string, cmd: string, canAll: boolean, formatid: string) {
	const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
require('../sim/team-validator').TeamValidator;
	let format: Format = Dex.formats.get(formatid);
	const targets = target.split(',');
	let formatName = format.name;
	let minSourceGen = undefined;
	let level = 100;

	while (targets.length) {
		const targetid = Dex.toID(targets[0]);
		if (targetid === 'pentagon') {
			if (format.exists) {
				return {error: "'pentagon' can't be used with formats."};
			}
			minSourceGen = 6;
			targets.shift();
			continue;
		}
		if (targetid.startsWith('minsourcegen')) {
			if (format.exists) {
				return {error: "'min source gen' can't be used with formats."};
			}
			minSourceGen = parseInt(targetid.slice(12));
			if (isNaN(minSourceGen) || minSourceGen < 1) return {error: `Invalid min source gen "${targetid.slice(12)}"`};
			targets.shift();
			continue;
		}
		if (targetid === 'level5') {
			level = 5;
			targets.shift();
			continue;
		}
		break;
	}
	let gen;
	if (!format.exists) {
		const dex = Dex.mod(formatid).includeData();
		// can happen if you hotpatch formats without hotpatching chat
		if (!dex) return {error: `"${formatid}" is not a supported format.`};

		gen = dex.gen;
		format = new Dex.Format({mod: formatid});
		formatName = `Gen ${gen}`;
		if (minSourceGen) {
			formatName += ` (Min Source Gen = ${minSourceGen})`;
			const ruleTable = dex.formats.getRuleTable(format);
			ruleTable.minSourceGen = minSourceGen;
		}
	} else {
		gen = Dex.forFormat(format).gen;
	}
	const validator = TeamValidator.get(format);

	const species = validator.dex.species.get(targets.shift());
	const setSources = validator.allSources(species);
	const set: Partial<PokemonSet> = {
		name: species.baseSpecies,
		species: species.name,
		level,
	};
	const all = (cmd === 'learnall');

	if (!species.exists || species.id === 'missingno') {
		return {error: `Pok\u00e9mon '${species.id}' not found.`};
	}

	if (species.gen > gen) {
		return {error: `${species.name} didn't exist yet in generation ${gen}.`};
	}

	if (!targets.length) {
		return {error: "You must specify at least one move."};
	}

	const moveNames = [];
	for (const arg of targets) {
		if (['ha', 'hidden', 'hiddenability'].includes(Dex.toID(arg))) {
			setSources.isHidden = true;
			continue;
		}
		const move = validator.dex.moves.get(arg);
		moveNames.push(move.name);
		if (!move.exists) {
			return {error: `Move '${move.id}' not found.`};
		}
		if (move.gen > gen) {
			return {error: `${move.name} didn't exist yet in generation ${gen}.`};
		}
	}

	const problems = validator.validateMoves(species, moveNames, setSources, set);
	if (setSources.sources.length) {
		setSources.sources = setSources.sources.map(source => {
			if (source.charAt(1) !== 'E') return source;
			const fathers = validator.findEggMoveFathers(source, species, setSources, true);
			if (!fathers) return '';
			return source + ':' + fathers.join(',');
		}).filter(Boolean);
		if (!setSources.size()) {
			problems.push(`${species.name} doesn't have a valid father for its egg moves (${setSources.limitedEggMoves!.join(', ')})`);
		}
	}

	let buffer = `In ${formatName}, `;
	if (setSources.isHidden) {
		buffer += `${species.abilities['H'] || 'HA'} `;
	}
	buffer += `${species.name}` + (problems.length ? ` <span class="message-learn-cannotlearn">can't</span> learn ` : ` <span class="message-learn-canlearn">can</span> learn `) + customToListString(moveNames);
	if (!problems.length) {
		const sourceNames: {[k: string]: string} = {
			'7V': "virtual console transfer from gen 1-2", '8V': "Pok&eacute;mon Home transfer from LGPE", E: "", S: "event", D: "dream world", X: "traded-back ", Y: "traded-back event",
		};
		const sourcesBefore = setSources.sourcesBefore;
		let sources = setSources.sources;
		if (sources.length || sourcesBefore < gen) buffer += " only when obtained";
		buffer += " from:<ul class=\"message-learn-list\">";
		if (sources.length) {
			sources = sources.map(source => {
				if (source.startsWith('1ET')) {
					return '2X' + source.slice(3);
				}
				if (source.startsWith('1ST')) {
					return '2Y' + source.slice(3);
				}
				return source;
			}).sort();
			for (let source of sources) {
				buffer += `<li>Gen ${source.charAt(0)} ${sourceNames[source] || sourceNames[source.charAt(1)]}`;

				if (source.charAt(1) === 'E') {
					let fathers;
					[source, fathers] = source.split(':');
					fathers = fathers.split(',');
					if (fathers.length > 4 && !all) fathers = fathers.slice(-4).concat('...');
					if (source.length > 2) {
						buffer += `${source.slice(2)} `;
					}
					buffer += `egg`;
					if (!fathers[0]) {
						buffer += `: chainbreed`;
					} else {
						buffer += `: breed ${fathers.join(', ')}`;
					}
				}

				if (source.startsWith('5E') && species.maleOnlyHidden) {
					buffer += " (no hidden ability)";
				}
			}
		}
		if (sourcesBefore) {
			const sourceGen = sourcesBefore < gen ? `Gen ${sourcesBefore} or earlier` : `anywhere`;
			if (moveNames.length === 1) {
				if (sourcesBefore >= 8) {
					buffer += `<li>${sourceGen} (move is level-up/tutor/TM/HM/egg in Gen ${sourcesBefore})`;
				} else {
					buffer += `<li>${sourceGen} (move is level-up/tutor/TM/HM in Gen ${sourcesBefore})`;
				}
			} else if (gen >= 8) {
				const orEarlier = sourcesBefore < gen ? ` or level-up/tutor/TM/HM in Gen ${sourcesBefore}${
					sourcesBefore < 7 ? " to 7" : ""
				}` : ``;
				buffer += `<li>${sourceGen} (all moves are level-up/tutor/TM/HM/egg in Gen ${sourcesBefore}${orEarlier})`;
			} else {
				buffer += `<li>${sourceGen} (all moves are level-up/tutor/TM/HM in Gen ${Math.min(gen, sourcesBefore)}${sourcesBefore < gen ? " to " + gen : ""})`;
			}
		}
		if (setSources.babyOnly && sourcesBefore) {
			buffer += `<li>must be obtained as ` + Dex.species.get(setSources.babyOnly).name;
		}
		buffer += "</ul>";
	} else if (problems.length >= 1) {
		const expectedError = `${species.name} can't learn ${moveNames[0]}.`;
		if (problems.length > 1 || moveNames.length > 1 || problems[0] !== expectedError) {
			buffer += ` because:<ul class="message-learn-list">`;
			buffer += `<li>` + problems.join(`</li><li>`) + `</li>`;
			buffer += `</ul>`;
		}
	}
	return {reply: buffer};
}

/** @type FormatsData[] | {section: string, column?: number}[] */
const AzureFormats: FormatList = [
	{
		name: "[Gen 8] National Dex New Ultra Series",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: [
			'Picked Team Size = 4',
			'Standard NatDex', 'Dynamax Clause', 'Species Clause', 'Item Clause', 'Evasion Moves Clause', 'Adjust Level = 50', 'VGC Timer', 'Limit Two Restricted',
		],
		banlist: [
			'Hidden Power', 'Groudon + Heat Crash', 'Raichu + Follow Me', 'Rayquaza + V-Create',
			'Kangaskhan + Power-Up Punch', 'Kangaskhan + Seismic Toss', 'Frustration', 'Return',
			'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Keldeo',
			'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Volcanion', 'Magearna', 'Marshadow', 'Zeraora',
			'Meltan', 'Melmetal', 'Zarude', 'Shedinja', 'Sky Drop', 'Greninja + Battle Bond',
			'Smeargle + Dark Void',
		],
		restricted: ['Restricted Legendary'],
		onValidateSet(set) {
			if (set.species !== 'Smeargle') {
				for (const move of set.moves) {
					// @ts-ignore
					const learn = formatRunLearn(set.species + ',' + move);
					let canLearn = false;
					if (learn.reply) {
						const reply = learn.reply.toLowerCase();
						canLearn = reply.includes('<li>anywhere') || reply.includes('<li>gen 7');
					}
					if (!canLearn) {
						return [`${set.species} is restricted from using ${move}.`];
					}
				}
			}
			if (set.item && set.species === 'Calyrex-Shadow') return [`${set.species} is not allowed to have items.`];
			const item = this.dex.items.get(set.item);
			if (item.zMove && item.id !== 'ultranecroziumz') {
				return [`${set.name || set.species}'s item ${item.name} is banned by Z-Move Clause.`];
			}
		},
		onSwitchIn(pokemon) {
			if (pokemon.species.id === 'necrozmaultra') {
				pokemon.item = '';
			}
		},
		onAfterMega(pokemon) {
			if (pokemon.species.id === 'necrozmaultra') {
				pokemon.item = '';
			}
		},
		onUpdate(pokemon) {
			if (pokemon.species.id === 'necrozmaultra') {
				pokemon.item = '';
			}
		},
	},
	{
		section: "DSSB",
		column: 4,
	},
	SSBbase, SSBDoubles, SSBteamBuild, SSBcc1v1,
	{
		section: "Azuremons",
		column: 4,
	},
	{
		name: "[Gen 9] Azuremons Random Battle",

		mod: 'azuremons',
		team: 'randomAzureMons',
		ruleset: ['PotD', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] Azuremons Random Doubles Battle",

		mod: 'azuremons',
		gameType: 'doubles',
		team: 'randomAzureMons',
		ruleset: ['PotD', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] Azuremons Challenge Cup 1v1",

		mod: 'azuremons',
		team: 'randomAzureMons',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause', 'Picked Team Size = 1'],
	},
	{
		section: "Nat Dex MonotypeMonotype",
		column: 4,
	},
	{
		name: "[Gen 9] Dual Type",
		desc: `All Pok&eacute;mon on a team to share, at least, one of two types.`,

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Dual Type Clause'],
		banlist: [], // nothing for now, not my problem lol
		onValidateTeam(team) {
			// eslint-disable-next-line max-len
			const dualTypeUbers = ['Arceus', 'Blaziken-Mega', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Solgaleo', 'Yveltal', 'Zekrom', 'Zygarde', 'Melmetal', 'Kyurem-Black'];
			const dualTypeSpecial = ['Arceus', 'Giratina'];
			let n = 0;

			for (const set of team) {
				const setSpecies = set.species;
				if (dualTypeUbers.includes(setSpecies) || dualTypeSpecial.includes(set.name)) {
					if (n > 0) return ['You can not have more than one Dual Type Uber on your team!'];
					n++;
				}
			}
		},
	},
	{
		name: "[Gen 8] Dual Type",
		desc: `All Pok&eacute;mon on a team to share, at least, one of two types.`,

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Dual Type Clause'],
		banlist: [
				  'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Necrozma-Ultra', 'Xerneas',
			'Eternatus', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Damp Rock', 'Smooth Rock', 'Shadow Tag', 'Baton Pass',
			     'Dragon Ascent', 'Dynamax Cannon', 'Protean', 'Power Construct', 'Lunalium Z', 'Solganium Z', 'Ultranecrozium Z',
				  'Red Orb', 'Blue Orb',
		],
		onValidateTeam(team) {
			// eslint-disable-next-line max-len
			const dualTypeUbers = ['Arceus', 'Blaziken-Mega', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Solgaleo', 'Yveltal', 'Zekrom', 'Zygarde', 'Melmetal', 'Kyurem-Black'];
			const dualTypeSpecial = ['Arceus', 'Giratina'];
			let n = 0;

			for (const set of team) {
				const setSpecies = set.species;
				if (dualTypeUbers.includes(setSpecies) || dualTypeSpecial.includes(set.name)) {
					if (n > 0) return ['You can not have more than one Dual Type Uber on your team!'];
					n++;
				}
			}
		},
	},
	{
		name: "[Gen 7] Dual Type",
		desc: `All Pok&eacute;mon on a team to share, at least, one of two types.`,

		mod: 'gen7',
		ruleset: ['Dual Type Clause', 'Standard', 'Swagger Clause'],
		banlist: [
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma Ultra', 'Rayquaza-Mega', 'Xerneas', 'Zygarde-Complete',
			'Lunalium Z', 'Solganium Z', 'Ultranecrozium Z', 'Red Orb', 'Blue Orb',
			'Dragon Ascent',
			'Protean', 'Power Construct',
		],
		onValidateTeam(team) {
			// eslint-disable-next-line max-len
			const dualTypeUbers = ['Arceus', 'Blaziken-Mega', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Solgaleo', 'Yveltal', 'Zekrom', 'Zygarde'];
			const dualTypeSpecial = ['Arceus', 'Giratina'];
			let n = 0;

			for (const set of team) {
				const setSpecies = set.species;
				if (dualTypeUbers.includes(setSpecies) || dualTypeSpecial.includes(set.name)) {
					if (n > 0) return ['You can not have more than one Dual Type Uber on your team!'];
					n++;
				}
			}
		},
	},
	{
		section: "Digmon Metas",
		column: 4,
	},
	/* {
		name: "[Gen 8 Digimon] Digimon Showdown OU",
		desc: "Battle and play with your friends with Digimon.",

		mod: "digimon",
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		onValidateSet(set) {
		  if (!set) {
				return ["No set."];
			}
		},
		onBegin() {
			this.add('raw', '<center><table style="height: 34px;border-color: #006c86;background-color: #FFF;color: #000;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	}, */
	{
		name: "[Digimon] Digimon Showdown Singles",
		desc: "Battle and play with your friends with Digimon.",

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
			this.add('raw', '<center><table style="height: 34px;border-color: #006c86;background-color: #FFF;color: #000;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon Showdown Doubles",
		desc: "Battle and play with your friends with Digimon.",

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
			this.add('raw', '<center><table style="height: 34px;border-color: #006c86;background-color: #FFF;color: #000;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon Showdown Triples",
		desc: "Battle and play with your friends with Digimon.",

		mod: "digimon",
		gameType: 'triples',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
			this.add('raw', '<center><table style="height: 34px;border-color: #006c86;background-color: #FFF;color: #000;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon Showdown Monotype",
		desc: "Battle with Digimon across 9 Types!",

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Same Type Clause', 'Terastal Clause'],
		onBegin() {
			this.add('raw', '<center><table style="height: 34px;border-color: #006c86;background-color: #FFF;color: #000;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon Showdown Monotype Doubles",
		desc: "Battle with Digimon across 9 Types!",

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Same Type Clause', 'Terastal Clause'],
		onBegin() {
			this.add('raw', '<center><table style="height: 34px;border-color: #006c86;background-color: #FFF;color: #000;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon x Pokemon",
		desc: "Battle with Digimon and Pokemon Together!",

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
			this.add('raw', '<center><table style="height: 34px;border-color: #006c86;background-color: #FFF;color: #000;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Digimon] Digimon x Pokemon Doubles",
		desc: "Battle with Digimon and Pokemon Together!",

		mod: "digimon",
		gameType: 'doubles',
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
			this.add('raw', '<center><table style="height: 34px;border-color: #006c86;background-color: #FFF;color: #000;" border="4" width="276"><tbody><tr><td style="width: 260px; text-align: center;"><strong><a href="https://github.com/DieterReinert/Lets-Go-Digimon" target="_blank" rel="noopener">Let\'s Go Digimon!</a><br /></strong></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Mod Features</strong><hr /><ul><li style="text-align: left;">Let\'s Go Pikachu & Eevee Meta</li><li style="text-align: left;">Mega Stones & X-Antibody</li><li style="text-align: left;">Digimon Attribute Abilites</li></ul></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>Type Colors</strong></strong></strong><hr /><ul><li style="text-align: left;">DigiTypes are Color Coated</li><li style="text-align: left;">This is due to limitations</li></ul><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.imgur.com/20GLWTR.png" /></strong></p></td></tr><tr><td style="width: 260px; text-align: center;"><strong><strong><strong>X-Antibody</strong></strong></strong><hr /><ul><li style="text-align: left;">X-Antibody is a Held Item</li><li style="text-align: left;">Low HP Activates it</li><li style="text-align: left;">1 Digimon Per Party X-Evolves</li><li style="text-align: left;">Mega Stones are unaffected</li></ul><img src="https://i.imgur.com/Me5Sbt4.png" /></td></tr><tr><td style="width: 260px; text-align: center;"><strong>Digimon Abilities</strong><hr /><ul><li style="text-align: left;">Digimon have 3 Abilities</li><li style="text-align: left;">Vaccine, Virus & Data</li></ul><p><img src="https://i.imgur.com/RbZ8Wxv.png" /></p><ul><li style="text-align: left;">Base Power is <strong>🡅</strong>1.2x or <strong>🡇</strong>0.8x</li></ul><p><img src="https://i.imgur.com/asZtwWl.png" /></p></td></tr></tbody></table></center>');
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		section: "AI Battles",
		column: 5,
	},
	{
		name: "[Gen 8] Test",
		mod: "test",
		searchShow: false,
		challengeShow: false,
		tournamentShow: false,
		ruleset: ['[Gen 8] OU'],
	},
	/*
	{
		name: "[Gen 8] Sparky's Journey of True Love",
		aiBattle: true,
		// OI fuck you cunt
		mod: 'cuntladder',
		challengeShow: false,
		tournamentShow: false,
		ruleset: ['[Gen 8] OU'],
		banlist: [
			'Sylveon', 'Toxapex', 'Miltank', 'Glaceon', 'Ludicolo', 'Houndoom', 'Rillaboom', 'Eevee', 'Zubat',
		],
		unbanlist: ['Fennekin', 'Cinderace'],
		onBegin() {
			this.add('-message', `Sparkychild, the Fennekin, sets out on a long journey, looking for her one true love. Will she be able to find it?`);
		},
		onValidateTeam(team) {
			let found = false;
			for (const set of team) {
				const baseSpecies = this.dex.species.get(set.species).baseSpecies;
				if (baseSpecies === 'Fennekin') {
					found = true;
					if (this.dex.toID(set.name) !== 'sparkychild') set.name = 'Sparkychild';
					set.ability = 'Looking for Love';
				}
			}
			if (!found) return [`You must have a Fennekin on your team!`];
		},
	},
	*/
	{
		section: "Custom Doubles Metas",
		column: 4,
	},
	{
		name: "[Gen 8] National Dex Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	{
		section: "OM Collection",
		column: 5,
	},
	{
		name: "[Gen 9] Espionage OU",
		desc: "Battle and play with your friends with Espionage Mons.",

		mod: 'gen9espionage',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] PLA Random Battle",
		desc: "Battle and play with your friends with PLA Mons.",

		mod: "pla",
		team: "randomPLA",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex VGC 2022",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: [
			'Standard NatDex', 'VGC Timer', 'Species Clause', 'Item Clause', 'Limit Two Restricted',
			'Adjust Level Down = 50', 'Picked Team Size = Auto',
		],
		restricted: ['Restricted Legendary'],
	},
	/*{
		name: "[Gen 8] National Dex Civ",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677638/">National Dex Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677637/">National Dex Monotype Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677636/">National Dex Monotype Viability Rankings</a>`,
		],
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: [
			'Arceus', 'Blastoise-Mega', 'Blaziken + Speed Boost', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Dracovish',
			'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kyogre',
			'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo',
			'Spectrier', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Battle Bond', 'Moody', 'Power Construct', 'Shadow Tag', 'Regieleki',
			'Bright Powder', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Lax Incense', 'Quick Claw', 'Smooth Rock + Sand Stream',
			'Clangorous Soul', 'Geomancy', 'Hidden Power', 'Razor Fang', 'Darmanitan-Galar + Zen Mode', 'Cloyster', 'Greninja + Protean', 'Greninja + Battle Bond',
			'Terrain Extender + Electric Surge', 'Terrain Extender + Psychic Surge', 'Terrain Extender + Grassy Surge',
			'Terrain Extender + Misty Surge', 'Moltres-Galar', 'Darmanitan + Zen Mode', 'Latias-Mega',
			'Meloetta + Relic Song', 'Melmetal', 'Floette-Eternal', 'Alakazam-Mega', 'Mew',
		],
		onValidateTeam(team) {
			const problems = [];
			const types = {Normal: 0, Fighting: 0, Flying: 0, Poison: 0, Ground: 0, Rock: 0, Bug: 0, Ghost: 0, Steel: 0,
				Fire: 0, Water: 0, Grass: 0, Electric: 0, Psychic: 0, Ice: 0, Dragon: 0, Dark: 0, Fairy: 0};
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				const item = this.dex.items.get(set.item);
				const alreadyCounted = [];
				for (const type of species.types) {
					types[type]++;
					alreadyCounted[type] = true;
				}
				if (item.megaEvolves && item.megaEvolves === species.name) {
					species = this.dex.species.get(item.megaStone);
				}
				for (const type of species.types) {
					if (!alreadyCounted[type]) {
						types[type]++;
					}
				}
			}
			const maxCountSameType = Object.keys(types).reduce((a, b) => types[a] > types[b] ? a : b);
			if (types[maxCountSameType] < 5) {
				problems.push("You need at least 5 pokémon of the same type. (6 if you're not a mercenary)");
			}
			const isFlying = types['Flying'] >= 5 ? 1 : 0;
			const isSteel = types['Steel'] >= 5 ? 1 : 0;
			for (const set of team) {
				if (set.species === 'Kartana' && isSteel) problems.push('Kartana is banned on Steel.');
				if (set.species === 'Landorus' && isFlying) problems.push('Landrous-Incarnate is banned on Flying.');
			}
			return problems;
		},
	},*/
	{
		name: "[Gen 9] National Dex ONL Draft",
		mod: 'onldraft',
		ruleset: ['Obtainable', '+Unobtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Team Preview', 'Nickname Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
			'OHKO Clause', 'Evasion Clause', 'Accuracy Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'Z-Move Clause', 'Baton Pass Clause'],
		banlist: ['Arceus', 'Calyrex-Shadow', 'Eternatus', 'Koraidon', 'Kyogre', 'Miraidon', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Zacian',
		'Battle Bond', 'Gengarite', 'Salamencite', 'Groudon + Red Orb', 'Kangaskhan-Mega + Seismic Toss', 'Mewtwo + Nasty Plot', 'Xerneas + Geomancy',
		'Zygarde-10 + Power Construct', 'Swagger', 'Hidden Power', 'Pursuit', 'Acupressure', 'Secret Power', 'Chatter', 'Confuse Ray', 'Flatter', 'Supersonic', 'Sweet Kiss', 'Teeter Dance',
		'Moody', 'Last Respects', 'Kings Rock',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.natDexTier === 'Illegal') {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			// if (species.natDexTier === "Unreleased") {
			// 	const basePokemon = this.toID(species.baseSpecies);
			// 	if (this.ruleTable.has(`+pokemon:${species.id}`) || this.ruleTable.has(`+basepokemon:${basePokemon}`)) {
			// 		return;
			// 	}
			// 	return [`${set.name || set.species} does not exist in the National Dex.`];
			// }
			// Items other than Z-Crystals and Pokémon-specific items should be illegal
			if (!set.item) return;
			const item = this.dex.items.get(set.item);
			if (!item.isNonstandard) return;
			if (
				['Past', 'Unobtainable'].includes(item.isNonstandard) &&
				!item.zMove && !item.itemUser && !item.forcedForme && !item.isBerry
			) {
				if (this.ruleTable.has(`+item:${item.id}`)) return;
				return [`${set.name}'s item ${item.name} does not exist in Gen ${this.dex.gen}.`];
			}
		},
	},
	{
		name: "[Gen 9] National Dex Mega Draft",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710848/">National Dex Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: [
			'Obtainable', '+Unobtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Team Preview', 'Nickname Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
			'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause', 'Z-Move Clause', 'Terastal Clause', 'Baton Pass Clause'],
		banlist: ['Aurora Veil', 'Aromatherapy', 'Autotomize', 'Barrage', 'Barrier', 'Bestow', 'Bide', 'Bone Club', 'Bubble', 'Camouflage', 'Captivate',
			'Chip Away', 'Clamp', 'Comet Punch', 'Constrict', 'Crafty Shield', 'Dizzy Punch', 'Doom Desire', 'Double Slap', 'Dragon Hammer',
			'Dragon Rage', 'Dual Chop', 'Egg Bomb', 'Embargo', 'Eternabeam', 'Feint Attack', 'Flame Burst', 'Flash', 'Flower Shield', 'Foresight',
			'Frustration', 'Gear Up', 'Grass Whistle', 'Grudge', 'Hail', 'Heal Block', 'Heal Order', 'Heart Stamp', 'Hidden Power', 'Hyper Fang',
			'Ice Ball', 'Ion Deluge', 'Jump Kick', 'Karate Chop', 'Laser Focus', 'Leaf Tornado', 'Lucky Chant', 'Magic Coat', 'Magnet Bomb', 'Magnitude',
			'Mat Block', 'Meditate', 'Me First', 'Mind Reader', 'Miracle Eye', 'Mirror Move', 'Mirror Shot', 'Mud Bomb', 'Mud Sport', 'Natural Gift', 'Nature Power',
			'Needle Arm', 'Nightmare', 'Odor Sleuth', 'Ominous Wind', 'Powder', 'Power-Up Punch', 'Psycho Boost', 'Psycho Shift', 'Psywave', 'Punishment', 'Pursuit',
			'Rage', 'Razor Wind', 'Refresh', 'Return', 'Revenge', 'Rock Climb', 'Rolling Kick', 'Rototiller', 'Secret Power', 'Sharpen', 'Signal Beam', 'Silver Wind',
			'Skull Bash', 'Sky Drop', 'Sky Uppercut', 'Smelling Salts', 'Snatch', 'Sonic Boom', 'Spider Web', 'Spike Cannon', 'Spotlight', 'Steamroller', 'Submission',
			'Synchronoise', 'Tail Glow', 'Telekinesis', 'Trump Card', 'Twineedle', 'Venom Drench', 'Vital Throw', 'Wake-Up Slap', 'Water Sport', 'Wring Out',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.natDexTier === 'Illegal') {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			// if (species.natDexTier === "Unreleased") {
			// 	const basePokemon = this.toID(species.baseSpecies);
			// 	if (this.ruleTable.has(`+pokemon:${species.id}`) || this.ruleTable.has(`+basepokemon:${basePokemon}`)) {
			// 		return;
			// 	}
			// 	return [`${set.name || set.species} does not exist in the National Dex.`];
			// }
			// Items other than Z-Crystals and Pokémon-specific items should be illegal
			if (!set.item) return;
			const item = this.dex.items.get(set.item);
			if (!item.isNonstandard) return;
			if (
				['Past', 'Unobtainable'].includes(item.isNonstandard) &&
				!item.zMove && !item.itemUser && !item.forcedForme && !item.isBerry
			) {
				if (this.ruleTable.has(`+item:${item.id}`)) return;
				return [`${set.name}'s item ${item.name} does not exist in Gen ${this.dex.gen}.`];
			}
		},
	},
	/*{
		name: "[Gen 8] Dawn League",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672210/">OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672556/">OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674058/">OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Baton Pass'],
		unbanlist: ['Darmanitan-Galar', 'Spectrier', 'Cinderace', 'Kyurem'],
	},*/
	{
		name: "[Gen 8] National Dex Draft",
		desc: `The format created specifically for Dawns Official Draft League`,
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Moody Clause', 'Swagger Clause', 'Z-Move Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Dragapult', 'Eternatus',
			'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-oh', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Xerneas',
			'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Battle Bond', 'Power Construct', 'Shadow Tag', 'Arena Trap', 'Alakazite',
			'Blazikenite', 'Gengarite', 'Latiasite', 'Latiosite', 'Lucarionite', 'Metagrossite', 'Salamencite', 'Blaziken + Speed Boost',
			'Cinderace + Libero', 'Darmanitan-Galar + Gorilla Tactics', 'Greninja + Battle Bond', 'Greninja + Protean', 'Kommo-o + Clangorous Soul',
			'Landorus-Base + Sheer Force', 'Urshifu-Base + Wicked Blow', 'Blastoise-Mega + Shell Smash',
			'Kangaskhan-Mega + Seismic Toss', 'Hidden Power',
		],
	},
	/*{
		name: "[Gen 8] National Dex MPL Draft",
		desc: `The format created specifically for Masters Premiere Draft League`,
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Moody Clause', 'Swagger Clause', 'Z-Move Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Eternatus',
			'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-oh', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Urshifu-Base', 'Xerneas',
			'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Battle Bond', 'Power Construct', 'Blazikenite', 'Gengarite',
			'Latiasite', 'Latiosite', 'Lucarionite', 'Metagrossite', 'Salamencite', 'Alakazam-Mega + Nasty Plot', 'Blaziken + Speed Boost',
			'Cinderace + Libero', 'Darmanitan-Galar + Zen Mode', 'Deoxys-Speed + Nasty Plot', 'Greninja + Battle Bond', 'Greninja + Protean', 'Kommo-o + Clangorous Soul',
			'Blastoise-Mega + Shell Smash', 'Kangaskhan-Mega + Seismic Toss', 'Slowbro-Galar + Slowbronite',
		],
	},
	{
		name: "[Gen 4] Sinnoh Draft",
		desc: `The format created specifically for Dawns Sinnoh Based Draft League`,
		mod: 'gen4',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'Uber', 'Latias',
		],
	},
	{
		name: "[Gen 8] National Dex Item Swap",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667921/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Moody Clause', 'Z-Move Clause'],
		banlist: [
			'Blaziken + Speed Boost', 'Cinderace + Libero', 'Greninja + Battle Bond', 'Greninja + Protean', 'Blastoise-Mega + Shell Smash',
			'Kangaskhan-Mega + Seismic Toss', 'Power Construct',
		],
		onValidateTeam(team) {
			const choiceItems = ['Choice Band', 'Choice Scarf', 'Choice Specs'];
			let teamHasChoice = false;
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			for (const [i, set] of team.entries()) {
				if (choiceItems.includes(set.item) && teamHasChoice) return ['You can only have 1 choice item.'];
				if (choiceItems.includes(set.item)) teamHasChoice = true;
			}
		},
		onHit(target, source, move) {
			const immune = move.category === 'Status' || source.hasAbility('stickyhold') ||
					target.hasAbility('stickyhold') || source.volatiles['substitute'] ||
					target.volatiles['substitute'] || (move.multihit && move.hit !== 2);
			if (!immune) {
				const yourItem = target.takeItem(source);
				const myItem = source.takeItem();
				if (target.item || source.item || (!yourItem && !myItem)) {
					if (yourItem) target.item = yourItem.id;
					if (myItem) source.item = myItem.id;
					return false;
				}
				if (
					(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
					(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
				) {
					if (yourItem) target.item = yourItem.id;
					if (myItem) source.item = myItem.id;
					return false;
				}
				this.add('-activate', source, `move: ${move.name}`, '[of] ' + target);
				if (myItem) {
					target.setItem(myItem);
					this.add('-item', target, myItem, `[from] move: ${move.name}`);
				} else {
					this.add('-enditem', target, yourItem, '[silent]', `[from] move: ${move.name}`);
				}
				if (yourItem) {
					source.setItem(yourItem);
					this.add('-item', source, yourItem, `[from] move: ${move.name}`);
				} else {
					this.add('-enditem', source, myItem, '[silent]', `[from] move: ${move.name}`);
				}
			}
		},
	},
	{
		name: "[Gen 8] Fusion Mons Random Battle",
		desc: "Battle and play with your friends with Fusion Mons.",

		mod: "fusionmons",
		team: "randomFusionMon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview'],
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 8] National Dex AG Flat Rules",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'Item Clause'],
		banlist: ['Mythical', 'Restricted Legendary'],
	},*/
	{
		name: "[Gen 9] Tier Shift Monotype ",
		desc: `Pok&eacute;mon below OU get their stats, excluding HP, boosted. UU/RUBL get +10, RU/NUBL get +20, NU/PUBL get +30, and PU or lower get +40.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662165/">Tier Shift</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 8] Tier Shift', 'Same Type Clause'],
		banlist: ['Smooth Rock', 'Terrain Extender', 'Kartana', 'Blaziken', 'Urshifu'], // someone else can fix it later
		unbanlist: ['Cinderace', 'Darmanitan-Galar', 'Spectrier', 'Heat Rock'],
	},
	{
		name: '[Gen 9] Metronome 1v1',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		mod: 'gen9',
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Picked Team Size = 1', 'Max Team Size = 3'],
		banlist: [
			'Pokestar Spirit', 'Shedinja + Sturdy', 'Battle Bond', 'Cheek Pouch', 'Cursed Body', 'Dry Skin', 'Fluffy', 'Fur Coat', 'Gorilla Tactics',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Perish Body', 'Poison Heal',
			'Power Construct', 'Pressure', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Snow Warning', 'Stamina',
			'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene',
			'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry',
		], // someone else can fix it later
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.items.get(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.species.get(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},

	{
		name: "[Gen 8] Tier Shift",
		desc: `Pok&eacute;mon get a +10 boost to each stat, barring HP, per tier below OU they are in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662165/">Tier Shift</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Tier Shift Mod', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Spectrier', 'Urshifu-Base',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Base', 'Zekrom', 'Zygarde-Base', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil',
			'Shadow Tag', 'Snow Cloak', 'Damp Rock', 'Eviolite', 'Heat Rock', 'King\'s Rock', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Tier Shift Monotype ",
		desc: `Pok&eacute;mon below OU get their stats, excluding HP, boosted. UU/RUBL get +10, RU/NUBL get +20, NU/PUBL get +30, and PU or lower get +40.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662165/">Tier Shift</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] Tier Shift', 'Same Type Clause'],
		banlist: ['Smooth Rock', 'Terrain Extender', 'Kartana', 'Blaziken', 'Urshifu'],
		unbanlist: ['Cinderace', 'Darmanitan-Galar', 'Spectrier', 'Heat Rock'],
	},
	{
		name: '[Gen 8] Metronome 1v1',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		mod: 'gen8',
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Picked Team Size = 1', 'Max Team Size = 3'],
		banlist: [
			'Pokestar Spirit', 'Shedinja + Sturdy', 'Battle Bond', 'Cheek Pouch', 'Cursed Body', 'Dry Skin', 'Fluffy', 'Fur Coat', 'Gorilla Tactics',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Perish Body', 'Poison Heal',
			'Power Construct', 'Pressure', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Snow Warning', 'Stamina',
			'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene',
			'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.items.get(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.species.get(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	{
		name: "[Gen 8] Haxlessmons",
		desc: `No hax!!!`,
		column: 5,

		mod: 'nohaxmons',
		ruleset: ['[Gen 8] OU', 'No Haxmons Mod'],
	},
	{
		name: "[Gen 8] Haxlessmons Random Battle",
		desc: `No hax!!!`,
		column: 5,

		mod: 'nohaxmons',
		team: 'random',
		ruleset: ['[Gen 8] Random Battle', 'No Haxmons Mod'],
	},
	{
		name: "[Gen 8] Random Monocolor",
		desc: `All Pok&eacute;mon have the same color!`,
		column: 5,

		mod: 'monocolor',
		team: 'randomMonocolor',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Same Color Clause', 'Terastal Clause'],
	},
	{
		name: "[Gen 9] Monocolor Singles",
		desc: `All Pok&eacute;mon must have the same color!`,
		column: 5,

		mod: 'monocolor',
		ruleset: ['Standard', 'Dynamax Clause', 'Same Color Clause'],
		banlist: ['Uber', 'Power Construct', 'Shadow Tag', 'Gouging Fire'],
		unbanlist: ['Archaludon', 'Volcarona']
	},
	{
		name: "[Gen 8] Monocolor Singles",
		desc: `All Pok&eacute;mon must have the same color!`,
		column: 5,

		mod: 'monocolor',
		ruleset: ['Standard', 'Dynamax Clause', 'Same Color Clause'],
		banlist: ['Uber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 8] Monotype CC1v1",
		column: 5,

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause', 'Sleep Clause Mod', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 8] Metronome Random Battle",
		column: 5,
		mod: 'metronome',
		team: 'randomMetronomeCC',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Metronome CC1v1",
		column: 5,
		mod: 'metronome',
		team: 'randomMetronomeCC',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 9] Slow tour",
		desc: `1-Pokemon teams with only slowbro, slowbro-galar, slowking or slowking-galar are allowed.`,

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: ['Slowbronite'],
		onValidateTeam(team, format) {
			if (team.length !== 1) return ["Only one Pokemon per team is allowed."];
			// eslint-disable-next-line max-len
			if (!['slowbro', 'slowking', 'slowbrogalar', 'slowkinggalar'].includes(this.toID(team[0].species))) return [`Only slowbro, slowbro-galar, slowking or slowking-galar are allowed in ${format.name}.`];
		},
	},
	{
		name: "[Gen 9] Waffle Cup",
		desc: `1-Pokemon teams with only infernape, slowbro, clefable or metagross are allowed.`,

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: ['Slowbronite', 'Metagrossite'],
		onValidateTeam(team, format) {
			if (team.length !== 1) return ["Only one Pokemon per team is allowed."];
			// eslint-disable-next-line max-len
			if (!['infernape', 'clefable', 'slowbro', 'metagross'].includes(this.toID(team[0].species))) return [`Only infernape, slowbro, clefable or metagross are allowed in ${format.name}.`];
		},
	},
	{
		name: "[Gen 9] Eeveelution Cup",
		desc: `1-Pokemon teams with only Eevee or Eeveelutions are allowed.`,

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: [],
		onValidateTeam(team, format) {
			if (team.length !== 1) return ["Only one Pokemon per team is allowed."];
			// eslint-disable-next-line max-len
			if (!['eevee', 'vaporeon', 'jolteon', 'flareon', 'umbreon', 'glaceon', 'leafeon', 'espeon', 'sylveon'].includes(this.toID(team[0].species))) return [`Only Eevee or Eeveelutions are allowed in ${format.name}.`];
		},
	},
	{
		name: "[Gen 9] Benjamin Butterfree",
		desc: `Pok&eacute;mon that faint reincarnate as their prevo, but without the moves they can't learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3605680/">Benjamin Butterfree</a>`,
		],

		column: 5,
		mod: 'gen9',
		ruleset: ['[Gen 9] OU'],
		banlist: ['Blissey'], // someone else can fix it later
		onDamage(damage, target) {
			if (damage >= target.hp) {
				// eslint-disable-next-line max-len
				const prevo = target.baseSpecies.isMega ? this.dex.species.get(target.baseSpecies.baseSpecies).prevo : target.baseSpecies.prevo;
				if (!prevo || target.set.ability === 'Battle Bond') return damage;
				let template = this.dex.species.get(target.set.name);
				// @ts-ignore
				let abilitySlot = Object.keys(template.abilities).find(slot => template.abilities[slot] === target.set.ability);
				template = this.dex.species.get(prevo);
				// @ts-ignore
				if (!template.abilities[abilitySlot]) abilitySlot = '0';
				target.faintQueued = false;
				target.hp = target.maxhp;
				if (Object.values(target.boosts).find(boost => boost !== 0)) {
					target.clearBoosts();
					this.add('-clearboost', target);
				}
				target.formeChange(template, this.dex.formats.get(), true, '', abilitySlot);
				this.add('-message', `${target.name} has devolved into ${template.name}!`);
				target.cureStatus(true);
				// eslint-disable-next-line max-len
				const newHP = Math.floor(Math.floor(2 * target.species.baseStats['hp'] + target.set.ivs['hp'] + Math.floor(target.set.evs['hp'] / 4) + 100) * target.level / 100 + 10);
				target.maxhp = target.hp = newHP;
				this.add('-heal', target, target.getHealth, '[silent]');
				// eslint-disable-next-line max-len
				const learnset = this.dex.data.Learnsets[template.id].learnset || this.dex.data.Learnsets[this.dex.species.get(template.baseSpecies).id].learnset || {};
				const prevoset = template.prevo && this.dex.data.Learnsets[this.dex.spieces.get(template.prevo).id].learnset || {};
				for (const moveSlot of target.baseMoveSlots) {
					if (!learnset[moveSlot.id] && !prevoset[moveSlot.id]) {
						moveSlot.used = true;
						moveSlot.pp = 0;
					}
				}
				target.canMegaEvo = null;
				return 0;
			}
		},
	},
	{
		name: "[Gen 8] Slow tour",
		desc: `1-Pokemon teams with only slowbro, slowbro-galar, slowking or slowking-galar are allowed.`,

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: ['Slowbronite'],
		onValidateTeam(team, format) {
			if (team.length !== 1) return ["Only one Pokemon per team is allowed."];
			// eslint-disable-next-line max-len
			if (!['slowbro', 'slowking', 'slowbrogalar', 'slowkinggalar'].includes(this.toID(team[0].species))) return [`Only slowbro, slowbro-galar, slowking or slowking-galar are allowed in ${format.name}.`];
		},
	},
	{
		name: "[Gen 8] Waffle Cup",
		desc: `1-Pokemon teams with only infernape, slowbro, clefable or metagross are allowed.`,

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: ['Slowbronite', 'Metagrossite'],
		onValidateTeam(team, format) {
			if (team.length !== 1) return ["Only one Pokemon per team is allowed."];
			// eslint-disable-next-line max-len
			if (!['infernape', 'clefable', 'slowbro', 'metagross'].includes(this.toID(team[0].species))) return [`Only infernape, slowbro, clefable or metagross are allowed in ${format.name}.`];
		},
	},
	{
		name: "[Gen 8] Eeveelution Cup",
		desc: `1-Pokemon teams with only Eevee or Eeveelutions are allowed.`,

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: [],
		onValidateTeam(team, format) {
			if (team.length !== 1) return ["Only one Pokemon per team is allowed."];
			// eslint-disable-next-line max-len
			if (!['eevee', 'vaporeon', 'jolteon', 'flareon', 'umbreon', 'glaceon', 'leafeon', 'espeon', 'sylveon'].includes(this.toID(team[0].species))) return [`Only Eevee or Eeveelutions are allowed in ${format.name}.`];
		},
	},
	{
		name: "[Gen 8] Benjamin Butterfree",
		desc: `Pok&eacute;mon that faint reincarnate as their prevo, but without the moves they can't learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3605680/">Benjamin Butterfree</a>`,
		],

		column: 5,
		mod: 'gen8',
		ruleset: ['[Gen 8] OU'],
		banlist: ['Blissey'],
		onDamage(damage, target) {
			if (damage >= target.hp) {
				// eslint-disable-next-line max-len
				const prevo = target.baseSpecies.isMega ? this.dex.species.get(target.baseSpecies.baseSpecies).prevo : target.baseSpecies.prevo;
				if (!prevo || target.set.ability === 'Battle Bond') return damage;
				let template = this.dex.species.get(target.set.name);
				// @ts-ignore
				let abilitySlot = Object.keys(template.abilities).find(slot => template.abilities[slot] === target.set.ability);
				template = this.dex.species.get(prevo);
				// @ts-ignore
				if (!template.abilities[abilitySlot]) abilitySlot = '0';
				target.faintQueued = false;
				target.hp = target.maxhp;
				if (Object.values(target.boosts).find(boost => boost !== 0)) {
					target.clearBoosts();
					this.add('-clearboost', target);
				}
				target.formeChange(template, this.dex.formats.get(), true, '', abilitySlot);
				this.add('-message', `${target.name} has devolved into ${template.name}!`);
				target.cureStatus(true);
				// eslint-disable-next-line max-len
				const newHP = Math.floor(Math.floor(2 * target.species.baseStats['hp'] + target.set.ivs['hp'] + Math.floor(target.set.evs['hp'] / 4) + 100) * target.level / 100 + 10);
				target.maxhp = target.hp = newHP;
				this.add('-heal', target, target.getHealth, '[silent]');
				// eslint-disable-next-line max-len
				const learnset = this.dex.data.Learnsets[template.id].learnset || this.dex.data.Learnsets[this.dex.species.get(template.baseSpecies).id].learnset || {};
				const prevoset = template.prevo && this.dex.data.Learnsets[this.dex.spieces.get(template.prevo).id].learnset || {};
				for (const moveSlot of target.baseMoveSlots) {
					if (!learnset[moveSlot.id] && !prevoset[moveSlot.id]) {
						moveSlot.used = true;
						moveSlot.pp = 0;
					}
				}
				target.canMegaEvo = null;
				return 0;
			}
		},
	},
	{
		name: "[Gen 7] Gods and Followers",
		desc: `The Pok&eacute;mon in the first slot is the God; the Followers must share a type with the God. If the God Pok&eacute;mon faints, the Followers are inflicted with Embargo.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3589187/">Gods and Followers</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] Ubers'],
		onValidateTeam(team, format, teamHas) {
			let problemsArray = /** @type {string[]} */ ([]);
			let types = /** @type {string[]} */ ([]);
			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;
			for (const [i, set] of team.entries()) {
				if (i === 0) {
					const template = this.dex.species.get(set.species);
					types = template.types;
					// eslint-disable-next-line max-len
					if (template.name.substr(0, 9) === 'Necrozma-' && set.item && this.dex.items.get(set.item).id === 'ultranecroziumz') types = ['Psychic'];
					const validator = new TeamValidator(this.dex.formats.get('gen7ubers'));
					const problems = validator.validateSet(set, teamHas);
					if (problems) problemsArray = problemsArray.concat(problems);
				} else {
					const validator = new TeamValidator(this.dex.formats.get('gen7ou'));
					const problems = validator.validateSet(set, teamHas);
					if (problems) problemsArray = problemsArray.concat(problems);
					let template = this.dex.species.get(set.species);
					const item = this.dex.items.get(set.item);
					if (item && item.megaEvolves && template.name === item.megaEvolves) template = this.dex.species.get(item.megaStone);
					// eslint-disable-next-line max-len
					if (!template.types.some(type => types.includes(type))) problemsArray.push("Followers must share a type with the God.", `(${template.name} doesn't share a type with ${team[0].species}.)`);
				}
			}
			return problemsArray;
		},
		onBegin() {
			for (const side of this.sides) {
				// @ts-ignore
				side.god = side.pokemon[0];
			}
		},
		onFaint(pokemon) {
			// @ts-ignore
			if (pokemon.side.pokemonLeft > 1 && pokemon.side.god === pokemon) {
				this.add('-message', pokemon.set.name + " has fallen! " + pokemon.side.name + "'s team has been Embargoed!");
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			if (pokemon.side.god.hp === 0 && pokemon.addVolatile('embargo', pokemon)) delete pokemon.volatiles['embargo'].duration;
		},
	},
	{
		name: "[Gen 7] Sketchmons",
		desc: `Pok&eacute;mon can learn one of any move they don't normally learn, barring the few that are banned.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587743/">Sketchmons</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['Kartana', 'Porygon-Z', 'Battle Bond'],
		checkCanLearn(move, species, lsetData, set) {
			const problem = this.checkCanLearn(move, species, lsetData, set);
			if (!problem) return null;
			const restrictedMoves = [
				'Belly Drum', 'Celebrate', 'Chatter', 'Conversion', 'Extreme Speed', "Forest's Curse", 'Geomancy', 'Happy Hour', 'Hold Hands',
				'Lovely Kiss', 'Purify', 'Quiver Dance', 'Shell Smash', 'Shift Gear', 'Sketch', 'Spore', 'Sticky Web', 'Trick-or-Treat',
			];
			if (move.isZ || restrictedMoves.includes(move.name)) return problem;
			// @ts-ignore
			if (set.sketchMove) return {type: 'oversketched', maxSketches: 1};
			// @ts-ignore
			set.sketchMove = move.id;
			return null;
		},
		onValidateTeam(team, format, teamHas) {
			const sketches = {};
			for (const set of team) {
				// @ts-ignore
				if (set.sketchMove) {
					// @ts-ignore
					if (!sketches[set.sketchMove]) {
						// @ts-ignore
						sketches[set.sketchMove] = 1;
					} else {
						// @ts-ignore
						sketches[set.sketchMove]++;
					}
				}
			}
			const overSketched = Object.keys(sketches).filter(move => sketches[move] > 1);
			// eslint-disable-next-line max-len
			if (overSketched.length) return overSketched.map(move => `You are limited to 1 of ${this.dex.moves.get(move).name} by Sketch Clause. (You have sketched ${this.dex.moves.get(move).name} ${sketches[move]} times.)`);
		},
	},
	{
		name: "[Gen 7] Hidden Type",
		desc: "Pok&eacute;mon have an added type determined by their IVs. Same as the Hidden Power type.",
		threads: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3591194/\">Hidden Type</a>",
		],

		searchShow: false,
		mod: 'hiddentype2',
		ruleset: ['[Gen 7] OU'],
		onModifySpecies(species, pokemon) {
			if (!pokemon) return;
			if (species.types.includes(pokemon.hpType)) return;
			if (pokemon.types.includes(pokemon.hpType)) return {...species, types: pokemon.types};
			const types = [pokemon?.hpType, ...new Set(pokemon.types)];
			return {...species, types: types};
		},
	},
	{
		name: "[Gen 7] Fortemons",
		desc: `Pok&eacute;mon have all of their moves inherit the properties of the move in their item slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3638520/">Fortemons</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['Serene Grace'],
		validateSet(set, teamHas) {
			// eslint-disable-next-line max-len
			const restrictedMoves = ['Bide', 'Chatter', 'Dynamic Punch', 'Fake Out', 'Inferno', 'Power Trip', 'Power-Up Punch', 'Pursuit', 'Stored Power', 'Zap Cannon'];
			const item = set.item;
			const move = this.dex.moves.get(set.item);
			// eslint-disable-next-line max-len
			if (!move.exists || move.type === 'Status' || restrictedMoves.includes(move.name) || move.flags['charge']) return this.validateSet(set, teamHas);
			set.item = '';
			const problems = this.validateSet(set, teamHas) || [];
			set.item = item;
			/* eslint-disable max-len */
			// @ts-ignore
			if (this.format.checkCanLearn.call(this, move, this.dex.species.get(set.species))) problems.push(`${set.species} can't learn ${move.name}.`);
			// @ts-ignore
			if (move.secondaries && move.secondaries.some(secondary => secondary.boosts && secondary.boosts.accuracy < 0)) problems.push(`${set.name || set.species}'s move ${move.name} can't be used as an item.`);
			/* eslint-enable max-len */
			return problems.length ? problems : null;
		},
		checkCanLearn(move, species, lsetData, set) {
			if (move.id === 'beatup' || move.id === 'fakeout' || move.damageCallback || move.multihit) return {type: 'invalid'};
			return this.checkCanLearn(move, species, lsetData, set);
		},
		onBegin() {
			for (const pokemon of this.p1.pokemon.concat(this.p2.pokemon)) {
				const move = this.dex.moves.get(pokemon.set.item);
				if (move.exists && move.category !== 'Status') {
					// @ts-ignore
					pokemon.forte = move;
					const item = this.dex.items.get('ultranecroziumz');
					pokemon.item = item.id;
				}
			}
		},
		onModifyPriority(priority, pokemon, target, move) {
			// @ts-ignore
			if (move.category !== 'Status' && pokemon && pokemon.forte) return priority + pokemon.forte.priority;
		},
		onModifyMovePriority: 1,
		onModifyMove(move, pokemon) {
			// @ts-ignore
			if (move.category !== 'Status' && pokemon.forte) {
				// @ts-ignore
				Object.assign(move.flags, pokemon.forte.flags);
				// @ts-ignore
				if (pokemon.forte.self) {
					// @ts-ignore
					if (pokemon.forte.self.onHit && move.self && move.self.onHit) {
						// @ts-ignore
						for (const i in pokemon.forte.self) {
							if (i.startsWith('onHit')) continue;
							// @ts-ignore
							move.self[i] = pokemon.forte.self[i];
						}
					} else {
						// @ts-ignore
						move.self = Object.assign(move.self || {}, pokemon.forte.self);
					}
				}
				// @ts-ignore
				if (pokemon.forte.secondaries) move.secondaries = (move.secondaries || []).concat(pokemon.forte.secondaries);
				// @ts-ignore
				move.critRatio = (move.critRatio - 1) + (pokemon.forte.critRatio - 1) + 1;
				// eslint-disable-next-line max-len
				for (const prop of ['basePowerCallback', 'breaksProtect', 'defensiveCategory', 'drain', 'forceSwitch', 'ignoreAbility', 'ignoreDefensive', 'ignoreEvasion', 'ignoreImmunity', 'pseudoWeather', 'recoil', 'selfSwitch', 'sleepUsable', 'stealsBoosts', 'thawsTarget', 'useTargetOffensive', 'volatileStatus', 'willCrit']) {
					// @ts-ignore
					if (pokemon.forte[prop]) {
						// @ts-ignore
						if (typeof pokemon.forte[prop] === 'number') {
							// @ts-ignore
							const num = move[prop] || 0;
							// @ts-ignore
							move[prop] = num + pokemon.forte[prop];
						} else {
							// @ts-ignore
							move[prop] = pokemon.forte[prop];
						}
					}
				}
			}
		},
		// @ts-ignore
		onHitPriority: 1,
		onHit(target, source, move) {
			// @ts-ignore
			if (move && move.category !== 'Status' && source.forte) {
				// @ts-ignore
				if (source.forte.onHit) this.singleEvent('Hit', source.forte, {}, target, source, move);
				// @ts-ignore
				if (source.forte.self && source.forte.self.onHit) this.singleEvent('Hit', source.forte.self, {}, source, source, move);
				// @ts-ignore
				if (source.forte.onAfterHit) this.singleEvent('AfterHit', source.forte, {}, target, source, move);
			}
		},
		// @ts-ignore
		onAfterSubDamagePriority: 1,
		onAfterSubDamage(damage, target, source, move) {
			/* eslint-disable max-len */
			// @ts-ignore
			if (move && move.category !== 'Status' && source.forte && source.forte.onAfterSubDamage) this.singleEvent('AfterSubDamage', source.forte, null, target, source, move);
			/* eslint-enable max-len */
		},
		onModifySecondaries(secondaries, target, source, move) {
			if (secondaries.some(s => !!s.self)) move.selfDropped = false;
		},
		// @ts-ignore
		onAfterMoveSecondarySelfPriority: 1,
		onAfterMoveSecondarySelf(source, target, move) {
			/* eslint-disable max-len */
			// @ts-ignore
			if (move && move.category !== 'Status' && source.forte && source.forte.onAfterMoveSecondarySelf) this.singleEvent('AfterMoveSecondarySelf', source.forte, null, source, target, move);
			/* eslint-enable max-len */
		},
	},
	{
		name: "[Gen 8] Dawn of All Hallow’s Eve",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga',
			'Dracovish', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tornadus-Therian', 'Urshifu-Base',
			'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag',
			'Baton Pass',
		],
		unbanlist: [
			'Pikachu-Cosplay', 'Pikachu-Rock-Star', 'Pikachu-Belle', 'Pikachu-Pop-Star',
			'Pikachu-PhD', 'Pikachu-Libre',	'Pikachu-Starter',
		],
		onValidateTeam(team) {
			const AMOUNT_OF_COSTUME_POKEMON = 3;
			const AMOUNT_OF_HALLOWEEN_POKEMON = 1;
			const AMOUNT_OF_CREEPY_DEX_POKEMON = 1;

			const costumePokemon = [
				'Necrozma', 'Beheeyem', 'Deoxys-Speed', 'Deoxys-Defense', 'Ursaring',
				'Beartic', 'Bewear', 'Pangoro', 'Vespiquen', 'Beedrill',
				'Miltank', 'Tauros', 'Tapu Bulu', 'Butterfree', 'Beautifly',
				'Purugly', 'Delcatty', 'Espeon', 'Liepard', 'Umbreon',
				'Kerfluffle', 'Oricorio', 'Mr. Mime', 'Banette', 'Voodoom',
				'Aurorus', 'Tyrantrum', 'Rampardos', 'Dracovish', 'Dracozolt',
				'Charizard', 'Salamence', 'Flygon', 'Ribombee', 'Hoopa',
				'Thundurus', 'Tornadus', 'Landorus', 'Gengar', 'Tyranitar',
				'Nidoking', 'Volcarona', 'Hydreigon', 'Duraludon', 'Rillaboom',
				'Darmanitan', 'Oranguru', 'Primape', 'Zarude', 'Slaking',
				'Infernape', 'Bellossom', 'Marowak-Alola', 'Mudsdale', 'Bisharp',
				"Sirfetch'd", 'Escavalier', 'Gallade', 'Sawk', 'Throh',
				'Grapploct', 'Hitmonchan', 'Incineroar', 'Hawlucha', 'Machamp',
				'Hariyama', 'Vaporeon', 'Primarina', 'Tapu Fini', 'Cofagrigus',
				'Revenankh', 'Runerigus', 'Buzzwole', 'Ninjask', 'Greninja',
				'Accelgor', 'Blastoise', 'Chestnaught', 'Pikachu', 'Pikachu-Cosplay',
				'Pikachu-Rock-Star', 'Pikachu-Belle', 'Pikachu-Pop-Star', 'Pikachu-PhD', 'Pikachu-Libre',
				'Pikachu-Starter', 'Diancie', 'Gardevoir', 'Cinderace', 'Lopunny',
				'Diggersby', 'Azumarill', 'Dusknoir', 'Golurk', 'Regirock',
				'Registeel', 'Regice', 'Regigigas', 'Metagross', 'Toxtricity',
				'Thievul', 'Krookodile', 'Arghonaut', 'Scrafty', 'Honchkrow',
				'Decidueye', 'Samurott', 'Cacturne', 'Sharpedo', 'Rapidash-Galar',
				'Keldeo', 'Aegislash', 'Mismagius', 'Delphox', 'Hatterene',
				'Mightyena', 'Lycanroc', 'Houndoom', 'Zeraora', 'Lucario',
			];
			const halloweenPokemon = [
				'Zoroark', 'Mimikyu', 'Trevenant', 'Gourgeist', 'Lunatone',
				'Galvantula', 'Ariados', 'Chandelure', 'Shedinja', 'Cursola',
				'Stakataka', 'Noivern', 'Crobat', 'Swoobat', 'Spiritomb',
				'Honchkrow', 'Grimmsnarl', 'Ditto', 'Rotom', 'Gothitelle',
			];
			const creepyDexPokemon = [
				'Drifblim', 'Hypno', 'Pallosand', 'Hypno', 'Parasect',
				'Gorebyss', 'Goodra', 'Froslass', 'Pinsir', 'Kabutops',
				'Victreebell', 'Shiinotic',
			];

			const problems = [];

			const amountOfCostumeMons = team.filter(function (val) {
				return costumePokemon.includes(val.species);
			}).length;

			// eslint-disable-next-line max-len
			if (amountOfCostumeMons < AMOUNT_OF_COSTUME_POKEMON) problems.push(`You need at least ${AMOUNT_OF_COSTUME_POKEMON} costume pokémon`);

			const amountOfHalloweenMons = team.filter(function (val) {
				return halloweenPokemon.includes(val.species);
			}).length;

			// eslint-disable-next-line max-len
			if (amountOfHalloweenMons < AMOUNT_OF_HALLOWEEN_POKEMON) problems.push(`You need at least ${AMOUNT_OF_HALLOWEEN_POKEMON} halloween-themed pokémon.`);

			const amountOfCreepyDexMons = team.filter(function (val) {
				return creepyDexPokemon.includes(val.species);
			}).length;
			// eslint-disable-next-line max-len
			if (amountOfCreepyDexMons < AMOUNT_OF_CREEPY_DEX_POKEMON) problems.push(`You need at least ${AMOUNT_OF_CREEPY_DEX_POKEMON} creepy dex pokémon.`);

			const total = amountOfCostumeMons + amountOfHalloweenMons + amountOfCreepyDexMons;
			if (team.length === 6 && total < 6) problems.push("All Pokémon must come from one of the three categories.");

			return problems;
		},
	},
	{
		name: "[Gen 8] Pacifistmons",
		desc: "You can only use status-moves in this format.",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/pacifistmons.3658719/">Pacifistmons Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] Ubers'],
		banlist: [
			'Magic Guard', 'Magic Bounce', 'Regenerator',
			'Taunt', 'Nature Power', 'Heal Order', 'Life Dew', 'Moonlight',
			'Morning Sun', 'Purify', 'Recover', 'Rest',
			'Roost', 'Slack Off', 'Soft-Boiled', 'Strength Sap',
			'Swallow', 'Synthesis', 'Wish', 'Ingrain', 'move:Metronome',
			'Milk Drink', 'Shore Up',
		],
		onValidateSet(set) {
			if (set.level !== 100) return [`${set.name} needs to be level 100.`];
			for (const move of set.moves) {
				const moveInfo = this.dex.moves.get(move);
				if (moveInfo.category !== "Status") {
					return [`${set.name} can only have status moves.`];
				}
			}
		},
	},
	{
		name: "[Gen 8] Pacifistmons OU",
		desc: "You can only use status-moves in this format.",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/pacifistmons.3658719/">Pacifistmons Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU'],
		banlist: [
			'Magic Guard', 'Magic Bounce', 'Regenerator',
			'Taunt', 'Nature Power', 'Heal Order', 'Life Dew', 'Moonlight',
			'Morning Sun', 'Purify', 'Recover', 'Rest',
			'Roost', 'Slack Off', 'Soft-Boiled', 'Strength Sap',
			'Swallow', 'Synthesis', 'Wish', 'Ingrain', 'move:Metronome',
			'Milk Drink', 'Shore Up',
		],
		onValidateSet(set) {
			if (set.level !== 100) return [`${set.name} needs to be level 100.`];
			for (const move of set.moves) {
				const moveInfo = this.dex.moves.get(move);
				if (moveInfo.category !== "Status") {
					return [`${set.name} can only have status moves.`];
				}
			}
		},
	},
	{
		name: "[Gen 8] Frantic Fusions",
		desc: "By naming your Pok&eacute;mon after another Pok&eacute;mon it gains their first Ability as an additional ability, their stats are averaged and its secondary type is taken from their primary or secondary type depending on whether it is shiny.",

		mod: 'franticfusions',
		ruleset: ['[Gen 8] OU'],
		banlist: ['Kartana', 'Melmetal', 'Urshifu', 'Pheromosa', 'Regieleki', 'Shedinja', 'Swoobat', 'Assist', 'Huge Power', 'Pure Power'],
		onValidateTeam(team) {
			const nameTable: {[k: string]: boolean} = {};
			for (const {name} of team) {
				if (name) {
					if (nameTable[name]) {
						return ["Your Pokémon must have different nicknames.", "(You have more than one " + name + ")"];
					}
					nameTable[name] = true;
				}
			}
		},
		checkCanLearn(move, template, lsetData, set) {
			if (move.id === 'snore') return null;
			if (set?.fuseTemplate && !this.checkCanLearn(move, set.fuseTemplate)) return null;
			return this.checkCanLearn(move, template, lsetData, set);
		},
		validateSet(set, teamHas) {
			const fuseTemplate = this.dex.species.get(set.name);
			// eslint-disable-next-line max-len
			if (!fuseTemplate.exists || fuseTemplate.battleOnly || fuseTemplate.isNonstandard) return this.validateSet(set, teamHas);
			const fuseSet = {...set};
			fuseSet.species = fuseTemplate.name;
			fuseSet.item = '';
			fuseSet.ability = fuseTemplate.abilities['0'];
			fuseSet.moves = ['snore'];
			let problems = this.validateSet(fuseSet);
			if (problems) {
				fuseSet.shiny = !fuseSet.shiny;
				problems = this.validateSet(fuseSet);
			}
			if (problems) return problems;
			set.name = '';
			set.fuseTemplate = fuseTemplate;
			set.shiny = !set.shiny;
			problems = this.validateSet(set);
			if (!problems) this.validateSet(set, teamHas);
			set.shiny = !set.shiny;
			if (problems) problems = this.validateSet(set, teamHas);
			set.name = fuseTemplate.name;
			return problems;
		},
		onModifySpecies(template, target, format, effect) {
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === (template.battleOnly ? template.baseSpecies : template.name)) return;
			const fuseTemplate = this.dex.species.get(target.set.name);
			if (!fuseTemplate.exists) return;
			const mixedTemplate = this.dex.deepClone(template);
			mixedTemplate.heightm = Math.round((template.heightm + fuseTemplate.heightm) * 5) / 10;
			mixedTemplate.weighthg = Math.round((template.weighthg + fuseTemplate.weighthg) / 2);
			let statid: StatName;
			for (statid in template.baseStats) {
				mixedTemplate.baseStats[statid] = template.baseStats[statid] + fuseTemplate.baseStats[statid] >> 1;
			}

			mixedTemplate.types = [template.types[0]];
			const fuseType = target.set.shiny && fuseTemplate.types[1] || fuseTemplate.types[0];
			if (fuseType !== template.types[0]) mixedTemplate.types.push(fuseType);
			// eslint-disable-next-line max-len
			const ability = target.set.ability || Object.keys(template.abilities).length > 1 ? target.set.ability : template.abilities[0];
			if (fuseTemplate.abilities[0] !== ability) mixedTemplate.innate = this.dex.toID(fuseTemplate.abilities[0]);
			return mixedTemplate;
		},
		onBegin() {
			const allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (const pokemon of allPokemon) {
				pokemon.m.innate = pokemon.species.innate;
			}
		},
		onBeforeSwitchIn(pokemon) {
			if (pokemon.m.innate) {
				const effect = 'ability:' + pokemon.m.innate;
				pokemon.volatiles[effect] = {id: effect, target: pokemon};
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innate) {
				const effect = 'ability:' + pokemon.m.innate;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
		onSwitchOut(pokemon) {
			if (pokemon.m.innate) pokemon.removeVolatile('ability:' + pokemon.m.innate);
		},
	},
	{
		name: "[Gen 7] Frantic Fusions",
		desc: "By naming your Pok&eacute;mon after another Pok&eacute;mon it gains their first Ability as an additional ability, their stats are averaged and its secondary type is taken from their primary or secondary type depending on whether it is shiny.",

		mod: 'franticfusions7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['Shedinja', 'Swoobat', 'Kyurem-Black', 'Kartana', 'Serperior', 'Assist', 'Huge Power', 'Pure Power'],
		onValidateTeam(team) {
			const nameTable: {[k: string]: boolean} = {};
			for (const {name} of team) {
				if (name) {
					if (nameTable[name]) {
						return ["Your Pokémon must have different nicknames.", "(You have more than one " + name + ")"];
					}
					nameTable[name] = true;
				}
			}
		},
		checkCanLearn(move, template, lsetData, set) {
			if (move.id === 'snore') return null;
			if (set?.fuseTemplate && !this.checkCanLearn(move, set.fuseTemplate)) return null;
			return this.checkCanLearn(move, template, lsetData, set);
		},
		validateSet(set, teamHas) {
			const fuseTemplate = this.dex.species.get(set.name);
			// eslint-disable-next-line max-len
			if (!fuseTemplate.exists || fuseTemplate.battleOnly || fuseTemplate.isNonstandard) return this.validateSet(set, teamHas);
			const fuseSet = {...set};
			fuseSet.species = fuseTemplate.name;
			fuseSet.item = '';
			fuseSet.ability = fuseTemplate.abilities['0'];
			fuseSet.moves = ['snore'];
			let problems = this.validateSet(fuseSet);
			if (problems) {
				fuseSet.shiny = !fuseSet.shiny;
				problems = this.validateSet(fuseSet);
			}
			if (problems) return problems;
			set.name = '';
			set.fuseTemplate = fuseTemplate;
			set.shiny = !set.shiny;
			problems = this.validateSet(set);
			if (!problems) this.validateSet(set, teamHas);
			set.shiny = !set.shiny;
			if (problems) problems = this.validateSet(set, teamHas);
			set.name = fuseTemplate.name;
			return problems;
		},
		onModifySpecies(template, target, format, effect) {
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === (template.battleOnly ? template.baseSpecies : template.name)) return;
			const fuseTemplate = this.dex.species.get(target.set.name);
			if (!fuseTemplate.exists) return;
			const mixedTemplate = this.dex.deepClone(template);
			mixedTemplate.heightm = Math.round((template.heightm + fuseTemplate.heightm) * 5) / 10;
			mixedTemplate.weighthg = Math.round((template.weighthg + fuseTemplate.weighthg) / 2);
			let statid: StatName;
			for (statid in template.baseStats) {
				mixedTemplate.baseStats[statid] = template.baseStats[statid] + fuseTemplate.baseStats[statid] >> 1;
			}

			mixedTemplate.types = [template.types[0]];
			const fuseType = target.set.shiny && fuseTemplate.types[1] || fuseTemplate.types[0];
			if (fuseType !== template.types[0]) mixedTemplate.types.push(fuseType);
			// eslint-disable-next-line max-len
			const ability = target.set.ability || Object.keys(template.abilities).length > 1 ? target.set.ability : template.abilities[0];
			if (fuseTemplate.abilities[0] !== ability) mixedTemplate.innate = this.dex.toID(fuseTemplate.abilities[0]);
			return mixedTemplate;
		},
		onBegin() {
			const allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (const pokemon of allPokemon) {
				pokemon.m.innate = pokemon.species.innate;
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innate) pokemon.addVolatile('ability:' + pokemon.m.innate);
		},
		onSwitchOut(pokemon) {
			if (pokemon.m.innate) pokemon.removeVolatile('ability:' + pokemon.m.innate);
		},
		onAfterMega(pokemon) {
			if (pokemon.m.innate === this.dex.toID(pokemon.ability)) {
				pokemon.removeVolatile('ability:' + pokemon.m.innate);
				delete pokemon.m.innate;
			}
		},
	},
	// Universal
	///////////////////////////////////////////////////////////////////

	{
		section: "Worlds Collide",
		column: 3,
	},

	{
		name: "[Gen 9] Worlds Collide OU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: true,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', `Z-Move Clause`],
		banlist: ['OUBL', 'Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Thousand Arrows', 'Cursed Sash', 'Last Respects', 'Veiled Sky', 'Trickster', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock', 'Shade Trance', 'Dark Void', 'Deep Yawn', 'Grass Whistle', 'Hypnosis', 'Sing', 'Sleep Powder', 'Spore', 'Yawn'],
	},

	{
		name: "[Gen 9] Worlds Collide UU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: true,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', `Z-Move Clause`],
		banlist: ['OUBL', 'OU', 'UUBL', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Cursed Sash', 'Last Respects', 'Veiled Sky', 'Trickster', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock', 'Dark Void', 'Deep Yawn', 'Grass Whistle', 'Hypnosis', 'Sing', 'Sleep Powder', 'Spore', 'Yawn'],
	},

	{
		name: "[Gen 9] Worlds Collide RU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: true,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', `Z-Move Clause`],
		banlist: ['OUBL', 'OU', 'UUBL', 'UU', 'RUBL', 'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Cursed Sash', 'Last Respects', 'Veiled Sky', 'Trickster', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock', 'Dark Void', 'Deep Yawn', 'Grass Whistle', 'Hypnosis', 'Sing', 'Sleep Powder', 'Spore', 'Yawn'],
	},

	{
		name: "[Gen 9] Worlds Collide HU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: true,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', `Z-Move Clause`],
		banlist: ['OUBL', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'HUBL', 'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Cursed Sash', 'Last Respects', 'Veiled Sky', 'Trickster', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock', 'Dark Void', 'Deep Yawn', 'Grass Whistle', 'Hypnosis', 'Sing', 'Sleep Powder', 'Spore', 'Yawn'],
	},

	{
		name: "[Gen 9] Worlds Collide NU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: true,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', `Z-Move Clause`],
		banlist: ['OUBL', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'HUBL', 'HU', 'NUBL', 'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Cursed Sash', 'Last Respects', 'Veiled Sky', 'Trickster', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock', 'Dark Void', 'Deep Yawn', 'Grass Whistle', 'Hypnosis', 'Sing', 'Sleep Powder', 'Spore', 'Yawn'],
	},

	{
		name: "[Gen 9] Worlds Collide AU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: true,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', `Z-Move Clause`],
		banlist: ['OUBL', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'HUBL', 'HU', 'NUBL', 'NU', 'AUBL', 'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Cursed Sash', 'Last Respects', 'Veiled Sky', 'Trickster', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock', 'Dark Void', 'Deep Yawn', 'Grass Whistle', 'Hypnosis', 'Sing', 'Sleep Powder', 'Spore', 'Yawn'],
	},

	{
		name: "[Gen 9] Worlds Collide PU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],
		mod: 'gen9universal',
		searchShow: false,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', `Z-Move Clause`],
		banlist: ['OUBL', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'HUBL', 'HU', 'NUBL', 'NU', 'AUBL', 'AU', 'PUBL', 'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Cursed Sash', 'Last Respects', 'Veiled Sky', 'Trickster', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock', 'Dark Void', 'Deep Yawn', 'Grass Whistle', 'Hypnosis', 'Sing', 'Sleep Powder', 'Spore', 'Yawn'],
	},

	{
		name: "[Gen 9] Worlds Collide ZU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: false,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', `Z-Move Clause`],
		banlist: ['OUBL', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'HUBL', 'HU', 'NUBL', 'NU', 'AUBL', 'AU', 'PUBL', 'PU', 'ZUBL', 'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Cursed Sash', 'Last Respects', 'Veiled Sky', 'Trickster', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock', 'Dark Void', 'Deep Yawn', 'Grass Whistle', 'Hypnosis', 'Sing', 'Sleep Powder', 'Spore', 'Yawn'],
	},

	{
		name: "[Gen 9] Worlds Collide FU", //the wasteland!!!
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: true,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', `Z-Move Clause`],
		banlist: ['OUBL', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'HUBL', 'HU', 'NUBL', 'NU', 'AUBL', 'AU', 'PUBL', 'PU', 'ZUBL', 'ZU', 'FUBL', 'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Cursed Sash', 'Last Respects', 'Veiled Sky', 'Trickster', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock', 'Dark Void', 'Deep Yawn', 'Grass Whistle', 'Hypnosis', 'Sing', 'Sleep Powder', 'Spore', 'Yawn'],
	},

	{
		name: "[Gen 9] Worlds Collide OUBL",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: true,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause', 'Terastal Clause', 'Z-Move Clause'],
		banlist: ['Uber', 'AG', 'Assist', 'Baton Pass', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock'],
	},

	{
		name: "[Gen 9] Worlds Collide Ubers",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/287/report-worlds-collide-bug">Worlds Collide Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/42/worlds-collide-resources">Worlds Collide Resources</a>`,
		],

		mod: 'gen9universal',
		searchShow: true,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause', 'Terastal Clause', 'Z-Move Clause'],
		banlist: ['AG', 'Assist', 'Baton Pass', 'Velvet Scales', 'Enigma Orb', 'Sketch', 'Trick Rock'],
	},

	// Spiral Sanctum
///////////////////////////////////////////////////////////////////

{
	section: "Sanctified Singles",
	column: 3,
},
{
	name: "[Gen 9] Sanctified OU",
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],

	mod: 'gen9sanctified',
	ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause'],
	banlist: ['ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Shed Tail'],
},
{
	name: "[Gen 9] Sanctified Ubers",
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],

	mod: 'gen9sanctified',
	ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause', 'Terastal Clause'],
	banlist: ['ND AG', 'Assist', 'Baton Pass'],
},
{
	name: "[Gen 9] Sanctified UU",
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],

	mod: 'gen9sanctified',
	ruleset: ['[Gen 9] Sanctified OU'],
	banlist: ['ND OU', 'ND UUBL', 'Battle Bond'],
},
{
	name: "[Gen 9] Sanctified RU",
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],

	mod: 'gen9sanctified',
	searchShow: false,
	ruleset: ['[Gen 9] Sanctified UU'],
	banlist: ['ND UU', 'ND RUBL', 'Drizzle', 'Heat Rock', 'Light Clay'],
},
{
	name: "[Gen 9] Sanctified NU",
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],
	mod: 'gen9sanctified',
	searchShow: false,
	ruleset: ['[Gen 9] Sanctified RU'],
	banlist: ['ND RU', /*'ND NUBL'*/],
},
{
	name: "[Gen 9] Sanctified PU",
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],
	mod: 'gen9sanctified',
	searchShow: false,
	ruleset: ['[Gen 9] Sanctified NU'],
	// banlist: ['ND NU'],
},
{
	name: "[Gen 9] Sanctified ZU",
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],
	mod: 'gen9sanctified',
	searchShow: false,
	ruleset: ['[Gen 9] Sanctified PU'],
	// banlist: ['ND PU'],
},
{
	name: "[Gen 9] Sanctified Monotype",
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],
	mod: 'gen9sanctified',
	ruleset: ['Standard NatDex', 'Same Type Clause', 'Terastal Clause', 'Species Clause', 'OHKO Clause', 'Evasion Clause', 'Sleep Clause Mod'],
	banlist: [
		'Annihilape', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai',
		'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega',
		'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Houndstone', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana',
		'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega',
		'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin',
		'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal',
		'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete', 'Moody', 'Shadow Tag',
		'Power Construct', 'Booster Energy', 'Damp Rock', 'Focus Band', 'Icy Rock', 'King\'s Rock', 'Leppa Berry', 'Quick Claw', 'Smooth Rock',
		'Terrain Extender', 'Acupressure', 'Baton Pass',
	],
},
{
	name: "[Gen 9] Sanctified AG",
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],
	mod: 'gen9sanctified',
	searchShow: false,
	ruleset: ['Standard NatDex'],
},
{
	name: "[Gen 9] Sanctified BH",
	desc: `Balanced Hackmons with National Dex elements mixed in.`,
	threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/288/report-bug-spiral-sanctum-format">Spiral Sanctum Bug Report</a>`,
		'&bullet; <a href="https://dawn-ps.boards.net/board/53/spiral-sanctum-resources">Spiral Sanctum Resources</a>',
	],
	mod: 'gen9sanctified',
	ruleset: ['-Nonexistent', 'Standard NatDex', 'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', '!Obtainable'],
	banlist: [
		'Cramorant-Gorging', 'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja',
		'Zygarde-Complete', 'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody',
		'Neutralizing Gas', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite', 'Belly Drum',
		'Bolt Beak', 'Chatter', 'Double Iron Bash', 'Electrify', 'Last Respects', 'Octolock', 'Rage Fist', 'Revival Blessing', 'Shed Tail',
		'Shell Smash', 'Comatose + Sleep Talk', 'Imprison + Transform',
	],
	restricted: ['Arceus'],
	onValidateTeam(team, format) {
		// baseSpecies:count
		const restrictedPokemonCount = new Map<string, number>();
		for (const set of team) {
			const species = this.dex.species.get(set.species);
			if (!this.ruleTable.isRestrictedSpecies(species)) continue;
			restrictedPokemonCount.set(species.baseSpecies, (restrictedPokemonCount.get(species.baseSpecies) || 0) + 1);
		}
		for (const [baseSpecies, count] of restrictedPokemonCount) {
			if (count > 1) {
				return [
					`You are limited to one ${baseSpecies} forme.`,
					`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
				];
			}
		}
	},
},

////////////SV OU Rebalanced///////////////////////////////////////////////////////////////////

	{
		section: "SV Rebalanced",
	},

	{
			name: "[Gen 9] Rebalanced OU",
			threads: [
				`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
				`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
		],
			mod: 'gen9rebalanced',
			ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod', 'Terastal Clause'],
			banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass',
					'Quick Draw', 'Quick Claw', 'Focus Band', 'Shed Tail', 'Light Clay', 'Soul Dew', 'Razor Fang'],
	},
	{
			name: "[Gen 9] Rebalanced Ubers",
			threads: [
					`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
					`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
			],
			mod: 'gen9rebalanced',
			ruleset: ['Standard', 'Terastal Clause'],
			banlist: ['AG', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 9] Rebalanced OUBL",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
	],
		mod: 'gen9rebalanced',
		ruleset: ['Standard', 'Terastal Clause'],
		banlist: ['AG', 'Uber', 'King\'s Rock', 'Baton Pass', 'Arena Trap', 'Shadow Tag', 'Moody', 'Dark Void', 'Soul Dew'],
	},
	{
		name: "[Gen 9] Rebalanced UU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
	],
		mod: 'gen9rebalanced',
		ruleset: ['[Gen 9] Rebalanced OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 9] Rebalanced RU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
	],
		mod: 'gen9rebalanced',
		ruleset: ['[Gen 9] Rebalanced UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 9] Rebalanced HU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
	],
		mod: 'gen9rebalanced',
		ruleset: ['[Gen 9] Rebalanced RU'],
		banlist: ['RU', 'HUBL', 'Drizzle'],
	},
	{
		name: "[Gen 9] Rebalanced NU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
	],
		mod: 'gen9rebalanced',
		ruleset: ['[Gen 9] Rebalanced HU'],
		banlist: ['HU', 'NUBL', 'Drought'],
	},
	{
		name: "[Gen 9] Rebalanced AU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
	],
		mod: 'gen9rebalanced',
		ruleset: ['[Gen 9] Rebalanced NU'],
		banlist: ['NU', 'AUBL'],
	},
	{
		name: "[Gen 9] Rebalanced PU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
	],
		mod: 'gen9rebalanced',
		ruleset: ['[Gen 9] Rebalanced AU'],
		banlist: ['AU', 'PUBL'],
	},
	/*
	{			I don't have time to finish random-sets.ts this week, will uncomment out when i finish
		name: "[Gen 9] Rebalanced Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
		`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Rebalanced Bug Report</a>`,
		`&bullet; <a href="https://dawn-ps.boards.net/board/34/rebalanced-resources">Rebalanced Resources</a>`,
],
	
		mod: 'gen9rebalanced',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	*/

///END OF REBALANCED | START OF GPT///
	{
		section: "SV GPT",
	},
	{
			name: "[Gen 9] GPT OU",
			threads: [
				`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">GPT Bug Report</a>`,
				`&bullet; <a href="https://dawn-ps.boards.net/board/54/gpt-resources">GPT Resources</a>`,
		],
			mod: 'gen9gpt',
			ruleset: ['Standard Natdex', 'Terastal Clause', 'Ability Clause = 1', 'Z-Move Clause', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Moves Clause'],
			banlist: ['Uber', 'OUBL', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass',
					'Focus Band', 'Shed Tail', 'Leppa Berry', 'Assist', 'Huge Power', 'Pure Power', 'Razor Fang'],
	},
	{
			name: "[Gen 9] GPT Ubers",
			threads: [
				`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">GPT Bug Report</a>`,
				`&bullet; <a href="https://dawn-ps.boards.net/board/54/gpt-resources">GPT Resources</a>`,
		],
			mod: 'gen9gpt',
			ruleset: ['Standard Natdex', 'Terastal Clause', 'Ability Clause = 1', 'Z-Move Clause', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
			banlist: ['AG', 'King\'s Rock', 'Baton Pass', 'Assist', 'Leppa Berry'],
	},

	{
		name: "[Gen 9] GPT OUBL",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">GPT Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/54/gpt-resources">GPT Resources</a>`,
	],

		mod: 'gen9gpt',
		ruleset: ['[Gen 9] GPT Ubers'],
		banlist: ['Uber', 'Huge Power', 'Pure Power', 'Shadow Tag', 'Arena Trap'],
	},

	{
		name: "[Gen 9] GPT UU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">GPT Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/54/gpt-resources">GPT Resources</a>`,
	],
		mod: 'gen9gpt',
		ruleset: ['[Gen 9] GPT OU'],
		banlist: ['UUBL', 'OU'],
	},
	{
		name: "[Gen 9] GPT RU",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">GPT Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/54/gpt-resources">GPT Resources</a>`,
	],
		mod: 'gen9gpt',
		ruleset: ['[Gen 9] GPT UU'],
		banlist: ['RUBL', 'UU'],
	},

	///END OF GPT START OF AFTERSHOCK OMS///
	{
		section: "Aftershock Other Metas",
	},
	{
		name: "[Gen 9] Rebalanced OU With Tera",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/56/rebalanced-ou-tera">Rebalanced OU with Tera Resources</a>`,
	],
		mod: 'gen9rebalanced',
		ruleset: ['Standard'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass',
				'Quick Draw', 'Quick Claw', 'Focus Band', 'Shed Tail', 'Light Clay', 'Dark Void', 'Soul Dew', 'Tera Blast', 'Ogerpon-Hearthflame', 'Terapagos', 'Regieleki'],
	},
	{
		name: "[Gen 9] GPT Monotype",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">GPT Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/58/gpt-monotype">GPT Monotype Resources</a>`,
	],
		mod: 'gen9gpt',
		ruleset: ['Standard Natdex', 'Terastal Clause', 'Ability Clause = 1', 'Z-Move Clause', 'Evasion Abilities Clause', 'Same Type Clause',],
		banlist: ['Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Blaziken', 'Deoxys-Base', 'Deoxys-Attack',
		'Dialga', 'Dialga-Origin', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre',
		'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
		'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Urshifu-Base', 'Zacian',
		'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Booster Energy', 'Damp Rock', 'Focus Band',
		'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Acupressure', 'Baton Pass', 'Last Respects', 'Shed Tail',],
	},
	{
		name: "[Gen 9] GPT OU Hectic Edition",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">GPT Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/57/gpt-ou-hectic-edition">GPT OU Hectic Edition Resources</a>`,
	],
		mod: 'gen9gpt',
		ruleset: ['Standard Natdex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: ['Uber', 'OUBL', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass',
				'Quick Draw', 'Quick Claw', 'Focus Band', 'Shed Tail', 'Leppa Berry', 'Assist', 'Last Respects', 'Huge Power', 'Pure Power', 'Genesect-Chill'],
		unbanlist: ["Haxorus", "Tapu Koko", "Keldeo-Resolute", "Venusaur-Mega", "Charizard-Mega-X", "Charizard-Mega-Y", "Beedrill-Mega", "Pidgeot-Mega", "Slowbro-Mega",
		 "Gyarados-Mega", "Ampharos-Mega", "Steelix-Mega", "Scizor-Mega", "Heracross-Mega", "Houndoom-Mega", "Tyranitar-Mega", "Sceptile-Mega", "Swampert-Mega",
		  "Sableye-Mega", "Aggron-Mega", "Manectric-Mega", "Camerupt-Mega", "Altaria-Mega", "Absol-Mega", "Glalie-Mega", "Latias-Mega", "Lopunny-Mega",
		   "Abomasnow-Mega", "Audino-Mega"],
	},
	{
		name: "[Gen 9] GPT Ubers Hectic Edition",
		threads: [
			`&bullet; <a href="https://dawn-ps.boards.net/thread/289/rebalanced-chat-gpt-bug-reporting">GPT Bug Report</a>`,
			`&bullet; <a href="https://dawn-ps.boards.net/board/59/gpt-ubers-hectic-edition">GPT Ubers Hectic Edition Resources</a>`,
	],
		mod: 'gen9gpt',
		ruleset: ['Standard Natdex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: ['AG', 'King\'s Rock', 'Baton Pass', 'Assist'],
		unbanlist: ["Venusaur-Mega", "Charizard-Mega-X", "Charizard-Mega-Y", "Blastoise-Mega", "Beedrill-Mega", "Pidgeot-Mega", "Alakazam-Mega", "Slowbro-Mega", "Pinsir-Mega",
		 "Gyarados-Mega", "Kangaskhan-Mega", "Aerodactyl-Mega", "Mewtwo-Mega-X", "Mewtwo-Mega-Y", "Ampharos-Mega", "Steelix-Mega", "Scizor-Mega", "Heracross-Mega", "Houndoom-Mega", "Tyranitar-Mega", "Sceptile-Mega",
		 "Blaziken-Mega", "Swampert-Mega", "Gardevoir-Mega", "Mawile-Mega", "Sableye-Mega", "Aggron-Mega", "Medicham-Mega", "Manectric-Mega", "Sharpedo-Mega", "Camerupt-Mega", "Altaria-Mega",
		  "Absol-Mega", "Glalie-Mega", "Salamence-Mega", "Metagross-Mega", "Latias-Mega", "Latios-Mega", "Lopunny-Mega", "Garchomp-Mega", "Lucario-Mega", "Abomasnow-Mega", "Audino-Mega", "Groudon-Primal", "Kyogre-Primal"],
	},
	///END OF AFTERSHOCK OMS///
	{
		section: "Monotype fields",
		column: 3,
	},
	{
		name: "[Gen 9] National Dex Fields AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656779/">AG Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659562/">AG Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658581/">AG Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		banlist: ["Light of Ruin"],
		gen: 9,
		ruleset: ['Standard NatDex'],
		onBegin() {
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/setfield junglefield">` +
					`Jungle Field (Bug)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield eclipsefield">` +
					`Eclipse Field (Dark)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield dragonsden">` +
					`Dragon's Den (Dragon)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield thunderingplateau">` +
					`Thundering Plateau (Electric)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield starlightarena">` +
					`Starlight Arena (Fairy)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ringarena">` +
					`Ring Arena (Fighting)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield volcanictop">` +
					`Volcanic Top (Fire)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield skyfield">` +
					`Sky Field (Flying)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield hauntedgraveyard">` +
					`Haunted Graveyard (Ghost)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield flowergarden">` +
					`Flower Garden (Grass)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield desertfield">` +
					`Desert Field (Ground)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield snowypeaks">` +
					`Snowy Peaks (Ice)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield blessedsanctum">` +
					`Blessed Sanctum (Normal)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield acidicwasteland">` +
					`Acidic Wasteland (Poison)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ancientruins">` +
					`Ancient Ruins (Psychic)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield cave">` +
					`Cave (Rock)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield factoryfield">` +
					`Factory Field (Steel)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield waterssurface">` +
					`Water's Surface (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield underwater">` +
					`Underwater (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield rainbowfield">` +
					`Rainbow Field (Eevee)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield bewitchedwoods">` +
					`Bewitched Woods` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ashenbeach">` +
					`Ashen Beach` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield undercolony">` +
					`Under Colony` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield corrosivemist">` +
					`Corrosive Mist` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield tempestfield">` +
					`Tempest Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield forgottenbattlefield">` +
					`Forgotten Battlefield` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield inverse">` +
					`Inverse Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield fable">` +
					`Fable` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield error">` +
					`Glitch` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield random">` +
					`Disable Fields (lock)` +
				`</button>` +
				`</div></center>`);
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		onValidateSet(set) {
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
	},
	{
		name: "[Gen 9] National Dex Fields",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],
		searchShow: false,

		mod: 'omnifield',
		gen: 9,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass',
		],
		unbanlist: ["Roaring Moon", "Houndstone", "Shedinja", 'Blaziken', "Gholdengo", "Melmetal", "Regieleki", "Light of Ruin", 'Booster Energy'],
		onEnd() {
			const wrap = function (number: number, mod: number, limit: number) {
				let result = number + mod;
				if (result < 0) {
					result += limit;
				} else if (result >= limit) {
					result -= limit;
				}
				return result;
			};
			const hashCode = function (str: string) {
				const CharMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
								 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
								 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
								 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
								 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
								 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
								 'Y', 'Z', '!', '@', '#', '%', '^', '&', '*', '(',
								 ')', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
								 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
								 't', 'u', 'v', 'w', 'x', 'y', 'z', '=', '+', '-'];
				const Repeated = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
								  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
								  'u', 'v', 'w', 'x', 'y', 'z'];
				const Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
				let hash = 0;
				let chr = 0;
				let endhash = "";
				const chunk = Math.floor(str.length / 16);
				if (str.length === 0) return hash;
				for (let i = 0; i < str.length; i++) {
					chr = str.charCodeAt(i);
					hash = ((hash << 5) - hash) + chr;
					hash |= 0;
					if (i % chunk === 0 && (str.length - i) > chunk) {
						if (hash < 0) {
							hash *= -1;
						}
						endhash += String(hash);
						const shift = Math.floor(String(hash).length / 4 * 3);
						hash = hash >> shift;
					}
				}
				if (hash < 0) {
					hash *= -1;
				}
				endhash += String(hash);
				if (endhash.length % 2 === 1) {
					endhash += "0";
				}
				let encodedHash = "";
				for (let i = 0; i < endhash.length; i += 2) {
					const charNum = Number(endhash[i] + endhash[i + 1]);
					let gen = Math.floor(Math.random() * 100);
					let mod = 0;
					if (Repeated.includes(CharMap[gen])) {
						if (Repeated.indexOf(CharMap[gen]) % 2 === 0) {
							mod = 2;
						} else {
							mod = -2;
						}
					} else if (!(Numbers.includes(CharMap[gen]))) {
						if (CharMap.indexOf(CharMap[gen]) % 2 === 0) {
							mod = 1;
						} else {
							mod = -1;
						}
					}
					if (Repeated.includes(CharMap[wrap(charNum, mod, CharMap.length)])) {
						gen = Math.floor(Math.random() * 10);
						mod = 0;
					}
					encodedHash += CharMap[gen];
					encodedHash += CharMap[wrap(charNum, mod, CharMap.length)];
				}
				return encodedHash;
			};

			let endStr = "Debug Data - ";
			let start = true;

			for (const side of this.sides) {
				if (start) {
					start = false;
				} else {
					endStr += "_";
				}
				side.pokemon.sort(function (a, b) {
					if (a.baseSpecies.baseSpecies > b.baseSpecies.baseSpecies) return 1;
					if (a.baseSpecies.baseSpecies < b.baseSpecies.baseSpecies) return -1;
					return 0;
				});
				let rawHash = "";
				let prism = 0;
				let numPoke = 0;
				for (const poke of side.pokemon) {
					numPoke += 1;
					const moves = [...poke.set.moves];
					moves.sort(function (a: string, b: string) {
						if (a.toLowerCase() > b.toLowerCase()) return 1;
						if (a.toLowerCase() < b.toLowerCase()) return -1;
						return 0;
					});
					for (const attack of moves) {
						if (this.toID(attack).includes("hiddenpower")) {
							if (poke.set.hpType) {
								rawHash += String(poke.set.hpType.toLowerCase());
							}
						}
					}
					rawHash += String(poke.level);
					const pokeItem = String(this.toID(poke.set.item.toLowerCase()));
					if (pokeItem === "prismscale") {
						prism = numPoke;
					}
					rawHash += pokeItem;
					if (poke.set.happiness === undefined) {
						rawHash += "255";
					} else {
						rawHash += String(poke.set.happiness);
					}
					rawHash += String(poke.getNature().id);
					if (poke.set.ivs.hp < 30) {
						rawHash += String(poke.set.ivs.hp);
					} else {
						rawHash += "null";
					}
					if (poke.set.evs.spe > 0) {
						rawHash += String(poke.set.evs.spe);
					} else {
						rawHash += "null";
					}
					rawHash += this.toID(poke.set.ability);
					if (poke.set.ivs.atk < 30) {
						rawHash += String(poke.set.ivs.atk);
					} else {
						rawHash += "null";
					}
					if (poke.set.evs.spd > 0) {
						rawHash += String(poke.set.evs.spd);
					} else {
						rawHash += "null";
					}
					rawHash += this.toID(poke.set.species);
					if (poke.set.ivs.def < 30) {
						rawHash += String(poke.set.ivs.def);
					} else {
						rawHash += "null";
					}
					if (poke.set.evs.spa > 0) {
						rawHash += String(poke.set.evs.spa);
					} else {
						rawHash += "null";
					}
					if (moves.length > 0) {
						if (this.toID(moves[0]).includes("hiddenpower")) {
							rawHash += "hiddenpower"
						} else {
							rawHash += this.toID(moves[0]);
						}
					}
					if (poke.set.ivs.spa < 30) {
						rawHash += String(poke.set.ivs.spa);
					} else {
						rawHash += "null";
					}
					if (poke.set.evs.def > 0) {
						rawHash += String(poke.set.evs.def);
					} else {
						rawHash += "null";
					}
					if (moves.length > 1) {
						if (this.toID(moves[1]).includes("hiddenpower")) {
							rawHash += "hiddenpower"
						} else {
							rawHash += this.toID(moves[1]);
						}
					}
					if (poke.set.ivs.spd < 30) {
						rawHash += String(poke.set.ivs.spd);
					} else {
						rawHash += "null";
					}
					if (poke.set.evs.atk > 0) {
						rawHash += String(poke.set.evs.atk);
					} else {
						rawHash += "null";
					}
					if (moves.length > 2) {
						if (this.toID(moves[2]).includes("hiddenpower")) {
							rawHash += "hiddenpower"
						} else {
							rawHash += this.toID(moves[2]);
						}
					}
					if (poke.set.ivs.spe < 30) {
						rawHash += String(poke.set.ivs.spe);
					} else {
						rawHash += "null";
					}
					if (poke.set.evs.hp > 0) {
						rawHash += String(poke.set.evs.hp);
					} else {
						rawHash += "null";
					}
					if (moves.length > 3) {
						if (this.toID(moves[3]).includes("hiddenpower")) {
							rawHash += "hiddenpower"
						} else {
							rawHash += this.toID(moves[3]);
						}
					}
				}
				endStr += hashCode(rawHash) + String(prism);
			}
			this.add(`raw|<small style="display:none;font-size:1px">${endStr}</small>`);
		},
		onFaint(target) {
			let dead = true;
			for (const poke of target.side.pokemon) {
				if (!poke.fainted && target.baseSpecies.name !== poke.baseSpecies.name) {
					dead = false;
				}
			}
			if (dead) {
				const wrap = function (number: number, mod: number, limit: number) {
					let result = number + mod;
					if (result < 0) {
						result += limit;
					} else if (result >= limit) {
						result -= limit;
					}
					return result;
				};
				const hashCode = function (str: string) {
					const CharMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
									 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
									 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
									 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
									 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
									 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
									 'Y', 'Z', '!', '@', '#', '%', '^', '&', '*', '(',
									 ')', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
									 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
									 't', 'u', 'v', 'w', 'x', 'y', 'z', '=', '+', '-'];
					const Repeated = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
									  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
									  'u', 'v', 'w', 'x', 'y', 'z'];
					const Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
					let hash = 0;
					let chr = 0;
					let endhash = "";
					const chunk = Math.floor(str.length / 16);
					if (str.length === 0) return hash;
					for (let i = 0; i < str.length; i++) {
						chr = str.charCodeAt(i);
						hash = ((hash << 5) - hash) + chr;
						hash |= 0;
						if (i % chunk === 0 && (str.length - i) > chunk) {
							if (hash < 0) {
								hash *= -1;
							}
							endhash += String(hash);
							const shift = Math.floor(String(hash).length / 4 * 3);
							hash = hash >> shift;
						}
					}
					if (hash < 0) {
						hash *= -1;
					}
					endhash += String(hash);
					if (endhash.length % 2 === 1) {
						endhash += "0";
					}
					let encodedHash = "";
					for (let i = 0; i < endhash.length; i += 2) {
						const charNum = Number(endhash[i] + endhash[i + 1]);
						let gen = Math.floor(Math.random() * 100);
						let mod = 0;
						if (Repeated.includes(CharMap[gen])) {
							if (Repeated.indexOf(CharMap[gen]) % 2 === 0) {
								mod = 2;
							} else {
								mod = -2;
							}
						} else if (!(Numbers.includes(CharMap[gen]))) {
							if (CharMap.indexOf(CharMap[gen]) % 2 === 0) {
								mod = 1;
							} else {
								mod = -1;
							}
						}
						if (Repeated.includes(CharMap[wrap(charNum, mod, CharMap.length)])) {
							gen = Math.floor(Math.random() * 10);
							mod = 0;
						}
						encodedHash += CharMap[gen];
						encodedHash += CharMap[wrap(charNum, mod, CharMap.length)];
					}
					return encodedHash;
				};

				let endStr = "Debug Data - ";
				let start = true;

				for (const side of this.sides) {
					if (start) {
						start = false;
					} else {
						endStr += "_";
					}
					side.pokemon.sort(function (a, b) {
						if (a.baseSpecies.baseSpecies > b.baseSpecies.baseSpecies) return 1;
						if (a.baseSpecies.baseSpecies < b.baseSpecies.baseSpecies) return -1;
						return 0;
					});
					let rawHash = "";
					let prism = 0;
					let numPoke = 0;
					for (const poke of side.pokemon) {
						numPoke += 1;
						const moves = [...poke.set.moves];
						moves.sort(function (a: string, b: string) {
							if (a.toLowerCase() > b.toLowerCase()) return 1;
							if (a.toLowerCase() < b.toLowerCase()) return -1;
							return 0;
						});
						for (const attack of moves) {
							if (this.toID(attack).includes("hiddenpower")) {
								if (poke.set.hpType) {
									rawHash += String(poke.set.hpType.toLowerCase());
								}
							}
						}
						rawHash += String(poke.level);
						const pokeItem = String(this.toID(poke.set.item.toLowerCase()));
						if (pokeItem === "prismscale") {
							prism = numPoke;
						}
						rawHash += pokeItem;
						if (poke.set.happiness === undefined) {
							rawHash += "255";
						} else {
							rawHash += String(poke.set.happiness);
						}
						rawHash += String(poke.getNature().id);
						if (poke.set.ivs.hp < 30) {
							rawHash += String(poke.set.ivs.hp);
						} else {
							rawHash += "null";
						}
						if (poke.set.evs.spe > 0) {
							rawHash += String(poke.set.evs.spe);
						} else {
							rawHash += "null";
						}
						rawHash += this.toID(poke.set.ability);
						if (poke.set.ivs.atk < 30) {
							rawHash += String(poke.set.ivs.atk);
						} else {
							rawHash += "null";
						}
						if (poke.set.evs.spd > 0) {
							rawHash += String(poke.set.evs.spd);
						} else {
							rawHash += "null";
						}
						rawHash += this.toID(poke.set.species);
						if (poke.set.ivs.def < 30) {
							rawHash += String(poke.set.ivs.def);
						} else {
							rawHash += "null";
						}
						if (poke.set.evs.spa > 0) {
							rawHash += String(poke.set.evs.spa);
						} else {
							rawHash += "null";
						}
						if (moves.length > 0) {
							if (this.toID(moves[0]).includes("hiddenpower")) {
								rawHash += "hiddenpower"
							} else {
								rawHash += this.toID(moves[0]);
							}
						}
						if (poke.set.ivs.spa < 30) {
							rawHash += String(poke.set.ivs.spa);
						} else {
							rawHash += "null";
						}
						if (poke.set.evs.def > 0) {
							rawHash += String(poke.set.evs.def);
						} else {
							rawHash += "null";
						}
						if (moves.length > 1) {
							if (this.toID(moves[1]).includes("hiddenpower")) {
								rawHash += "hiddenpower"
							} else {
								rawHash += this.toID(moves[1]);
							}
						}
						if (poke.set.ivs.spd < 30) {
							rawHash += String(poke.set.ivs.spd);
						} else {
							rawHash += "null";
						}
						if (poke.set.evs.atk > 0) {
							rawHash += String(poke.set.evs.atk);
						} else {
							rawHash += "null";
						}
						if (moves.length > 2) {
							if (this.toID(moves[2]).includes("hiddenpower")) {
								rawHash += "hiddenpower"
							} else {
								rawHash += this.toID(moves[2]);
							}
						}
						if (poke.set.ivs.spe < 30) {
							rawHash += String(poke.set.ivs.spe);
						} else {
							rawHash += "null";
						}
						if (poke.set.evs.hp > 0) {
							rawHash += String(poke.set.evs.hp);
						} else {
							rawHash += "null";
						}
						if (moves.length > 3) {
							if (this.toID(moves[3]).includes("hiddenpower")) {
								rawHash += "hiddenpower"
							} else {
								rawHash += this.toID(moves[3]);
							}
						}
					}
					endStr += hashCode(rawHash) + String(prism);
				}
				this.add(`raw|<small style="display:none;font-size:1px">${endStr}</small>`);
			}
		},
		checkCanLearn(move, species, setSources, set) {
			if (move.id === "lightofruin") {
				return null;
			} else {
				return this.checkCanLearn(move, species, setSources, set);
			}
		},
		onBegin() {
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/setfield junglefield">` +
					`Jungle Field (Bug)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield eclipsefield">` +
					`Eclipse Field (Dark)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield dragonsden">` +
					`Dragon's Den (Dragon)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield thunderingplateau">` +
					`Thundering Plateau (Electric)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield starlightarena">` +
					`Starlight Arena (Fairy)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ringarena">` +
					`Ring Arena (Fighting)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield volcanictop">` +
					`Volcanic Top (Fire)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield skyfield">` +
					`Sky Field (Flying)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield hauntedgraveyard">` +
					`Haunted Graveyard (Ghost)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield flowergarden">` +
					`Flower Garden (Grass)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield desertfield">` +
					`Desert Field (Ground)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield snowypeaks">` +
					`Snowy Peaks (Ice)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield blessedsanctum">` +
					`Blessed Sanctum (Normal)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield acidicwasteland">` +
					`Acidic Wasteland (Poison)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ancientruins">` +
					`Ancient Ruins (Psychic)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield cave">` +
					`Cave (Rock)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield factoryfield">` +
					`Factory Field (Steel)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield waterssurface">` +
					`Water's Surface (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield underwater">` +
					`Underwater (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield rainbowfield">` +
					`Rainbow Field (Eevee)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield bewitchedwoods">` +
					`Bewitched Woods` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ashenbeach">` +
					`Ashen Beach` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield undercolony">` +
					`Under Colony` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield corrosivemist">` +
					`Corrosive Mist` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield tempestfield">` +
					`Tempest Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield forgottenbattlefield">` +
					`Forgotten Battlefield` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield inverse">` +
					`Inverse Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield fable">` +
					`Fable` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield error">` +
					`Glitch` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield random">` +
					`Disable Fields (lock)` +
				`</button>` +
				`</div></center>`);
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
	},
	{
		name: "[Gen 9] National Dex Fields Ranked",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],
		rated: true,

		mod: 'omnifield',
		gen: 9,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin'
		],
		unbanlist: ["Roaring Moon", "Houndstone", "Shedinja", 'Blaziken', "Gholdengo", "Melmetal", "Regieleki", 'Booster Energy'],
		onBegin() {
			this.add('rule', 'Draft fields. Click the Start field draft and select the field you don\'t want. Last field starts automatically.');
			this.add(`raw|` +
			`<center>` +
			`<div` +
			`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
				`background-size: cover;` +
				`border: double 1px #000000 ;` +
				`color: black ;` +
				`padding: 4px 0px;` +
				`border-radius: 12px 12px;` +
				`z-index=-1;">` +
			`<button name="send" style="height:35px;width:195px" value="/setfield startranked">` +
				`Start field draft` +
			`</button>` +
			`</div></center>`);
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
	},
	/*
	{
		name: "[Gen 9] National Dex Fields UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672486/">National Dex UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672482/">National Dex UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		ruleset: ['[Gen 9] National Dex Fields'],
		// Used to distinguish UU from below UU in the client
		restricted: [
			'Aegislash', 'Absol-Mega', 'Aggron-Mega', 'Altaria-Mega', 'Amoonguss', 'Beedrill-Mega', 'Bisharp', 'Breloom', 'Buzzwole', 'Celesteela',
			'Chesnaught', 'Crobat', 'Dragonite', 'Grimmsnarl', 'Hippowdon', 'Hoopa-Unbound', 'Infernape', 'Jirachi', 'Keldeo', 'Krookodile',
			'Mandibuzz', 'Manectric-Mega', 'Melmetal', 'Mew', 'Mienshao', 'Moltres-Base', 'Nihilego', 'Porygon2', 'Regieleki', 'Rotom-Heat',
			'Rotom-Wash', 'Ribombee', 'Sableye-Mega', 'Scizor', 'Sharpedo-Mega', 'Skarmory', 'Slowking', 'Slowking-Galar', 'Staraptor', 'Swampert',
			'Umbreon', 'Urshifu-Rapid-Strike', 'Victini', 'Weavile', 'Zapdos-Galar',
		],
		onBegin() {
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/setfield junglefield">` +
					`Jungle Field (Bug)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield eclipsefield">` +
					`Eclipse Field (Dark)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield dragonsden">` +
					`Dragon's Den (Dragon)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield thunderingplateau">` +
					`Thundering Plateau (Electric)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield starlightarena">` +
					`Starlight Arena (Fairy)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ringarena">` +
					`Ring Arena (Fighting)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield volcanictop">` +
					`Volcanic Top (Fire)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield skyfield">` +
					`Sky Field (Flying)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield hauntedgraveyard">` +
					`Haunted Graveyard (Ghost)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield flowergarden">` +
					`Flower Garden (Grass)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield desertfield">` +
					`Desert Field (Ground)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield snowypeaks">` +
					`Snowy Peaks (Ice)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield blessedsanctum">` +
					`Blessed Sanctum (Normal)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield acidicwasteland">` +
					`Acidic Wasteland (Poison)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ancientruins">` +
					`Ancient Ruins (Psychic)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield cave">` +
					`Cave (Rock)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield factoryfield">` +
					`Factory Field (Steel)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield waterssurface">` +
					`Water's Surface (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield underwater">` +
					`Underwater (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield rainbowfield">` +
					`Rainbow Field (Eevee)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield bewitchedwoods">` +
					`Bewitched Woods` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ashenbeach">` +
					`Ashen Beach` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield undercolony">` +
					`Under Colony` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield corrosivemist">` +
					`Corrosive Mist` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield tempestfield">` +
					`Tempest Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield forgottenbattlefield">` +
					`Forgotten Battlefield` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield inverse">` +
					`Inverse Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield fable">` +
					`Fable` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield error">` +
					`Glitch` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield none">` +
					`None (removes the field)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield random">` +
					`LOCK FIELDS (Random)` +
				`</button>` +
				`</div></center>`);
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'lediancrest' || this.dex.toID(set.item) === 'upgrade') &&
				this.dex.toID(set.species).startsWith('ledian')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (this.dex.toID(set.ability) === 'sheerforce' && this.dex.toID(set.species).startsWith('landorus')) {
				return [`${set.ability} is banned.`];
			}
		},
	},
	*/
	{
		name: "[Gen 9] National Dex Fields Doubles [BETA]",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672010/">Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658826/">Doubles OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673519/">Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Gravity Sleep Clause', 'Hail Clause Mod', 'terastalclause'],
		banlist: [
			'Annihilape', 'Arceus', "Calyrex-Ice", "Calyrex-Shadow", 'Dialga', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', "Giratina-Origin",
			'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', "Melmetal", "Miraidon",
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',	'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', "Urshifu-Mega-G",
			"Urshifu-RS-Mega-G", 'Xerneas', 'Yveltal', 'Zacian', "Zacian-Crowned", "Zamazenta-Crowned", 'Zekrom',
			// items
			'Eevium Z', 'Gengarite',
			// abilities
			'Power Construct', 'Shadow Tag', 'Commander',
			// moves
			'Swagger', 'Dark Void', 'Light of Ruin', 'Coaching'
		],
		onBegin() {
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/setfield junglefield">` +
					`Jungle Field (Bug)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield eclipsefield">` +
					`Eclipse Field (Dark)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield dragonsden">` +
					`Dragon's Den (Dragon)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield thunderingplateau">` +
					`Thundering Plateau (Electric)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield starlightarena">` +
					`Starlight Arena (Fairy)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ringarena">` +
					`Ring Arena (Fighting)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield volcanictop">` +
					`Volcanic Top (Fire)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield skyfield">` +
					`Sky Field (Flying)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield hauntedgraveyard">` +
					`Haunted Graveyard (Ghost)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield flowergarden">` +
					`Flower Garden (Grass)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield desertfield">` +
					`Desert Field (Ground)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield snowypeaks">` +
					`Snowy Peaks (Ice)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield blessedsanctum">` +
					`Blessed Sanctum (Normal)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield acidicwasteland">` +
					`Acidic Wasteland (Poison)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ancientruins">` +
					`Ancient Ruins (Psychic)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield cave">` +
					`Cave (Rock)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield factoryfield">` +
					`Factory Field (Steel)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield waterssurface">` +
					`Water's Surface (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield underwater">` +
					`Underwater (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield rainbowfield">` +
					`Rainbow Field (Eevee)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield bewitchedwoods">` +
					`Bewitched Woods` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ashenbeach">` +
					`Ashen Beach` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield undercolony">` +
					`Under Colony` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield corrosivemist">` +
					`Corrosive Mist` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield tempestfield">` +
					`Tempest Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield forgottenbattlefield">` +
					`Forgotten Battlefield` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield inverse">` +
					`Inverse Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield fable">` +
					`Fable` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield error">` +
					`Glitch` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield random">` +
					`Disable Fields (lock)` +
				`</button>` +
				`</div></center>`);
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] National Dex Fields CDL",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],
		gen: 9,

		banlist: ['Light of Ruin'],
		mod: 'omnifielddraft',
		ruleset: ['Obtainable Moves', 'Obtainable Abilities', 'Obtainable Formes', 'EV Limit = Auto', 'Obtainable Misc',
				  'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod',
				  'Hail Clause Mod', '+Unobtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Team Preview', 'Nickname Clause',
				  'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		onBegin() {
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/setfield junglefield">` +
					`Jungle Field (Bug)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield eclipsefield">` +
					`Eclipse Field (Dark)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield dragonsden">` +
					`Dragon's Den (Dragon)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield thunderingplateau">` +
					`Thundering Plateau (Electric)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield starlightarena">` +
					`Starlight Arena (Fairy)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ringarena">` +
					`Ring Arena (Fighting)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield volcanictop">` +
					`Volcanic Top (Fire)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield skyfield">` +
					`Sky Field (Flying)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield hauntedgraveyard">` +
					`Haunted Graveyard (Ghost)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield flowergarden">` +
					`Flower Garden (Grass)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield desertfield">` +
					`Desert Field (Ground)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield snowypeaks">` +
					`Snowy Peaks (Ice)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield blessedsanctum">` +
					`Blessed Sanctum (Normal)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield acidicwasteland">` +
					`Acidic Wasteland (Poison)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ancientruins">` +
					`Ancient Ruins (Psychic)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield cave">` +
					`Cave (Rock)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield factoryfield">` +
					`Factory Field (Steel)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield waterssurface">` +
					`Water's Surface (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield underwater">` +
					`Underwater (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield rainbowfield">` +
					`Rainbow Field (Eevee)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield bewitchedwoods">` +
					`Bewitched Woods` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ashenbeach">` +
					`Ashen Beach` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield undercolony">` +
					`Under Colony` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield corrosivemist">` +
					`Corrosive Mist` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield tempestfield">` +
					`Tempest Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield forgottenbattlefield">` +
					`Forgotten Battlefield` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield inverse">` +
					`Inverse Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield fable">` +
					`Fable` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield error">` +
					`Glitch` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield random">` +
					`Disable Fields (lock)` +
				`</button>` +
				`</div></center>`);
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Jungle Field",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin'
		],
		onBegin() {
			this.field.addPseudoWeather('junglefield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Eclipse Field",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin'
		],
		onBegin() {
			this.field.addPseudoWeather('eclipsefield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Dragon's Den",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin'
		],
		onBegin() {
			this.field.addPseudoWeather('dragonsden');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Thunderstorm Field",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin'
		],
		onBegin() {
			this.field.addPseudoWeather('thunderingplateau');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Starlight Arena",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin'
		],
		onBegin() {
			this.field.addPseudoWeather('starlightarena');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Ring Arena",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('ringarena');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Volcanic Top",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('volcanictop');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Sky Field",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('skyfield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Haunted Graveyard",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('hauntedgraveyard');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Flower Garden",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('flowergarden');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Desert Field",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('desertfield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Snowy Peaks",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('snowypeaks');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Blessed Sanctum",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('blessedsanctum');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Acidic Wasteland",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('acidicwasteland');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Ancient Ruins",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('ancientruins');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Cave",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('cave');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Factory Field",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('factoryfield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Water's Surface",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('waterssurface');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Underwater",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('underwater');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Rainbow Field",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('rainbowfield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Bewitched Woods",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('bewitchedwoods');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Ashen Beach",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('ashenbeach');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Under Colony",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('undercolony');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Mountain Field",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('mountainfield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Corrosive Mist",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('corrosivemist');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Tempest Field",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('tempestfield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Hivework",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('hivework');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Forgotten Battlefield",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('forgottenbattlefield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 8] Tour Inverse",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('inverse');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Fable",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('fable');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	{
		name: "[Gen 9] Tour Glitch",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
			`&bullet; <b>Type '/help gym' or '/help setfield' to learn how to use this format</b>`,
			`&bullet; <b>if you forget what a field does, you can use /dt on the fields</b>`,
		],

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		challengeShow: false,
		TeamBuilderShow: false,
		desc: "random",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Light of Ruin',
		],
		onBegin() {
			this.field.addPseudoWeather('glitchfield');
		},
		onValidateSet(set) {
			if ((this.dex.toID(set.item) === 'urshifuite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifu')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'urshifurapidstrikeite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('urshifurapidstrike')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'melmetalite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('melmetal')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'corviknightite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('corviknight')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'cinderaceite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('cinderace')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if ((this.dex.toID(set.item) === 'drednawite' || this.dex.toID(set.item) === 'beastball') &&
				this.dex.toID(set.species).startsWith('drednaw')) {
				return [`${set.species}'s ${set.item} is banned.`];
			}
			if (set.species.includes("Mega-G")) {
				return [`${set.species}'s cannot enter the battle already mega evolved.`];
			}
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
	/*
	{
		name: "[Gen 9] National Dex Crests",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
		],

		rated: true,
		mod: 'omnifield',
		gen: 9,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Lucheon',
			'Breezeon', 'Toxeon', 'Terreon', 'Petreon', 'Entomeon', 'Alateon', 'Spectreon', 'Metaleon', 'Draceon', 'Wyrmeon', 'Eevoluteon', 'Eevoluteon-Mega'
		],
		unbanlist: ["Roaring Moon", "Houndstone", "Shedinja", 'Blaziken', "Gholdengo", "Melmetal", "Regieleki"],
	},
	*/
	{
		name: "[Gen 9] Random Crest",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
		],
		onBegin() {
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/setfield junglefield">` +
					`Jungle Field (Bug)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield eclipsefield">` +
					`Eclipse Field (Dark)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield dragonsden">` +
					`Dragon's Den (Dragon)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield thunderingplateau">` +
					`Thundering Plateau (Electric)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield starlightarena">` +
					`Starlight Arena (Fairy)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ringarena">` +
					`Ring Arena (Fighting)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield volcanictop">` +
					`Volcanic Top (Fire)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield skyfield">` +
					`Sky Field (Flying)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield hauntedgraveyard">` +
					`Haunted Graveyard (Ghost)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield flowergarden">` +
					`Flower Garden (Grass)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield desertfield">` +
					`Desert Field (Ground)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield snowypeaks">` +
					`Snowy Peaks (Ice)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield blessedsanctum">` +
					`Blessed Sanctum (Normal)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield acidicwasteland">` +
					`Acidic Wasteland (Poison)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ancientruins">` +
					`Ancient Ruins (Psychic)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield cave">` +
					`Cave (Rock)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield factoryfield">` +
					`Factory Field (Steel)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield waterssurface">` +
					`Water's Surface (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield underwater">` +
					`Underwater (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield rainbowfield">` +
					`Rainbow Field (Eevee)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield bewitchedwoods">` +
					`Bewitched Woods` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ashenbeach">` +
					`Ashen Beach` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield undercolony">` +
					`Under Colony` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield corrosivemist">` +
					`Corrosive Mist` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield tempestfield">` +
					`Tempest Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield forgottenbattlefield">` +
					`Forgotten Battlefield` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield inverse">` +
					`Inverse Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield fable">` +
					`Fable` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield error">` +
					`Glitch` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield random">` +
					`Disable Fields (lock)` +
				`</button>` +
				`</div></center>`);
		},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},

		rated: true,
		mod: 'omnifield',
		gen: 9,
		team: 'random',
		ruleset: ['OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'terastalclause', 'Hail Clause Mod','Obtainable',
		          '+Unobtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Nickname Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	/*
	{
		name: "[Gen 9] VGC 2023 crests [BETA^2]",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677186/">VGC 2022 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695848/">VGC 2022 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3696395/">VGC 2022 Viability Rankings</a>`,
		],

		mod: 'omnifield',
		gen: 9,
		gameType: 'doubles',
		// searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Limit Two Restricted', 'Hail Clause Mod'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] National Dex Fields Free For All",

		mod: 'omnifield',
		gen: 9,
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack',
			'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega',
			'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky',
			'Solgaleo', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		onBegin() {
			this.add(`raw|` +
				`<center>` +
				`<div` +
				`style="background: url(&quot;https://www.sirvisual.com/Attachment/100/5860_32763_100-706%20Principale.jpg&quot;);` +
					`background-size: cover;` +
					`border: double 1px #000000 ;` +
					`color: black ;` +
					`padding: 4px 0px;` +
					`border-radius: 12px 12px;` +
					`z-index=-1;">` +
				`<button name="send" style="height:35px;width:195px" value="/setfield junglefield">` +
					`Jungle Field (Bug)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield eclipsefield">` +
					`Eclipse Field (Dark)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield dragonsden">` +
					`Dragon's Den (Dragon)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield thunderingplateau">` +
					`Thundering Plateau (Electric)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield starlightarena">` +
					`Starlight Arena (Fairy)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ringarena">` +
					`Ring Arena (Fighting)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield volcanictop">` +
					`Volcanic Top (Fire)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield skyfield">` +
					`Sky Field (Flying)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield hauntedgraveyard">` +
					`Haunted Graveyard (Ghost)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield flowergarden">` +
					`Flower Garden (Grass)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield desertfield">` +
					`Desert Field (Ground)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield snowypeaks">` +
					`Snowy Peaks (Ice)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield blessedsanctum">` +
					`Blessed Sanctum (Normal)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield acidicwasteland">` +
					`Acidic Wasteland (Poison)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ancientruins">` +
					`Ancient Ruins (Psychic)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield cave">` +
					`Cave (Rock)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield factoryfield">` +
					`Factory Field (Steel)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield waterssurface">` +
					`Water's Surface (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield underwater">` +
					`Underwater (Water)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield rainbowfield">` +
					`Rainbow Field (Eevee)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield bewitchedwoods">` +
					`Bewitched Woods` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield ashenbeach">` +
					`Ashen Beach` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield mountainfield">` +
					`Mountain Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield corrosivemist">` +
					`Corrosive Mist` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield hivework">` +
					`Hivework` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield inverse">` +
					`Inverse Field` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield none">` +
					`None (removes the field)` +
				`</button>` +
				`<button name="send" style="height:35px;width:195px" value="/setfield random">` +
					`LOCK FIELDS (Random)` +
				`</button>` +
				`</div></center>`);
		},
	},
	{
		name: "[Gen 9] Random Eevee Day",
		desc: `Randomized teams of eevees, with custom eevees.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
		],
		onSwitchIn(pokemon) {
			pokemon.setType(pokemon.baseSpecies.types[0]);
			this.add('-start', pokemon, 'typechange', pokemon.baseSpecies.types[0]);
		},

		rated: true,
		mod: 'omnifield',
		gen: 9,
		team: 'randomCrestMon',
		ruleset: ['Max Team Size = 6', 'Dynamax Clause', 'terastalclause',
				  'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},/*
	{
		name: "[Gen 8] National Dex Crest Bosses",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
			`&bullet; <a href-"https://discord.gg/cmgZrVn">Join the offical league discord</a>`,
		],
		desc: "One or both players should bring a team of 2 identical mon. This is to ensure everything works, though the fastest mon should be made into the boss",

		rated: true,
		mod: 'omnifield',
		gen: 9,
		gameType: 'doubles',
		ruleset: [
			'Max Move Count = 7', 'Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Gravity Sleep Clause', 'Dynamax Clause', 'Swagger Clause'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'darkvoid',
			'Dialga', 'Eternatus', 'Gengar-Mega', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega',
			'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Rayquaza', 'Reshiram',
			'Solgaleo', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Complete',
			'Power Construct', 'Shadow Tag', 'Melmetal', 'Jirachi', 'Magearna', 'Eevium Z', 'Imprison', 'Shedinja',
		],
		onValidateTeam(team, format) {
			if (team.length < 3) {
				for (const set of team) {
					if (this.dex.items.get(set.item).megaEvolves) {
						return [`Bosses cannot mega evolve, as such ${set.item} is banned`];
					}
				}
				if (format.ruleTable) {
					format.ruleTable.maxMoveCount = 7;
				}
			} else {
				const speciesTable = new Set<number>();
				for (const set of team) {
					const species = this.dex.species.get(set.species);
					if (speciesTable.has(species.num)) {
						return [`You are limited to one of each Pokémon by Species Clause.`, `(You have more than one ${species.baseSpecies})`];
					}
					if (set.moves.length > 4) {
						return [`${set.name} has ${set.moves.length} moves, which is more than the limit of 4.`];
					}
					speciesTable.add(species.num);
				}
			}
		},
		onValidateSet(set, format) {
			if (this.dex.toID(set.ability) === 'speedboost' && this.dex.toID(set.species).startsWith('blaziken')) {
				return [`${set.ability} is banned.`];
			}
			if (this.dex.toID(set.ability) === 'sheerforce' && this.dex.toID(set.species).startsWith('landorus')) {
				return [`${set.ability} is banned.`];
			}
			if (this.dex.toID(set.species).endsWith('kyuremblack')) {
				let found = false;
				const results = [];
				if (set.moves.includes("dragondance")) {
					found = true;
					results.push('Swords Dance is banned on Kyurem-Black');
				}
				if (set.moves.includes("iciclespear")) {
					found = true;
					results.push('Icicle Spear is banned on Kyurem-Black');
				}
				if (found) {
					return results;
				}
			}
		},
		onSwitchInPriority: -1,
		onSwitchIn(pokemon) {
			if (!this.effectState.player1) {
				this.effectState.player1 = pokemon.side.id;
				this.effectState.player1Boss = pokemon.side.pokemon.length < 3;
				this.effectState.player1BossSet = false || !this.effectState.player1Boss;
			}
			if (!this.effectState.player2) {
				this.effectState.player2 = pokemon.side.foe.id;
				this.effectState.player2Boss = pokemon.side.foe.pokemon.length < 3;
				this.effectState.player2BossSet = false || !this.effectState.player2Boss;
			}

			if (pokemon.side.id === this.effectState.player1 && this.effectState.player1Boss) {
				if (this.effectState.player1BossSet) {
					const boss = pokemon.side.allies().filter(target => (
						target.getVolatile('boss') !== null
					))[0];
					this.actions.runMove("Transform", pokemon, pokemon.getLocOf(boss), this.format, undefined, true, undefined, boss);
					pokemon.addVolatile("dig");
					this.add('-prepare', pokemon, "dig");
					pokemon.addVolatile("doll");
				} else {
					this.effectState.player1BossSet = true;
					this.add('-start', pokemon, 'Dynamax');
					pokemon.addVolatile("boss");

					pokemon.maxhp = Math.floor(pokemon.maxhp * 2);
					pokemon.hp = Math.floor(pokemon.hp * 2);
				}
			} else if (pokemon.side.id === this.effectState.player2 && this.effectState.player2Boss) {
				if (this.effectState.player2BossSet) {
					const boss = pokemon.side.allies().filter(target => (
						target.getVolatile('boss') !== null
					))[0];
					this.actions.runMove("Transform", pokemon, pokemon.getLocOf(boss), this.format, undefined, true, undefined, boss);
					pokemon.addVolatile("dig");
					this.add('-prepare', pokemon, "dig");
					pokemon.addVolatile("doll");
				} else {
					this.effectState.player2BossSet = true;
					this.add('-start', pokemon, 'Dynamax');
					pokemon.addVolatile("boss");

					pokemon.maxhp = Math.floor(pokemon.maxhp * 2);
					pokemon.hp = Math.floor(pokemon.hp * 2);
				}
			}
		},
	},
	*/
	{
		name: "[Gen 9] National Dex Fields Custom Game",

		mod: 'omnifield',
		gen: 9,
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		onSwitchIn(pokemon) {
			pokemon.m.addedWorkAround = false;
			if (!pokemon.m.zMoveWorkAround && this.dex.items.getByID(pokemon.item).zMove) {
				const CUSTOM_MOVES = ["deluge", "etherealtempest", "hexingslash", "irritation", "magmadrift", "mirrorbeam",
					"mudbarrage", "poisonsweep", "quicksilverspear", "slashandburn", "stackingshot", "wakeupshock", "vileassault"]

				const NEW_MOVE = [
					["bouncybubble"],
					["floatyfall"],
					["shadowstrike"],
					["signalbeam", "infestation", "pollenpuff", "bugbuzz"],
					["sizzlyslide"],
					["doomdesire", "steelbeam", "tachyoncutter", "flashcannon"],
					["mudslap", "mudshot", "mudbomb", "earthpower"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"],
					["anchorshot", "behemothbash", "behemothblade", "doubleironbash"],
					["sappyseed"],
					["armthrust", "axekick", "circlethrow", "collisioncourse"],
					["buzzybuzz"],
					["poisonsting", "barbbarrage", "crosspoison", "direclaw", "gunkshot"]]

				pokemon.m.zMoveWorkAround = true;

				let moves = []
				for (const move of pokemon.moves) {
					moves.push(this.toID(move));
				}

				let addMoves = [];

				for (const moveSlot of pokemon.moveSlots) {
					if (CUSTOM_MOVES.includes(moveSlot.id)) {
						if (!pokemon.m.workAroundMoves) {
							pokemon.m.workAroundMoves = [];
							pokemon.m.customMoves = [];
						}
						let index = CUSTOM_MOVES.indexOf(moveSlot.id);
						let workAroundMove = NEW_MOVE[index][0];
						for (let i = 1; i < NEW_MOVE[index].length; i++) {
							if (moves.includes(workAroundMove)) {
								workAroundMove = NEW_MOVE[index][i];
							}
						}

						moves.push(workAroundMove)
						addMoves.push ({
							id: this.dex.toID(workAroundMove),
							move: this.dex.moves.getByID(this.dex.toID(workAroundMove)).name,
							pp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							maxpp: this.dex.moves.getByID(this.dex.toID(workAroundMove)).pp,
							disabled: false,
							used: false,
							target: this.dex.moves.getByID(this.dex.toID(workAroundMove)).target})

						pokemon.m.workAroundMoves.push(workAroundMove)
						pokemon.m.customMoves.push(moveSlot.id)
					}
				}

				for (const newSlot of addMoves) {
					pokemon.m.addedWorkAround = true;
					pokemon.moveSlots.push(newSlot)
				}
			}
		},
		onBeforeTurn(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			let changes: ActionChoice[] = []
			for (let act of this.queue.list) {
				if (act.choice === "move" && act.zmove) {
					if (act.pokemon.m.zMoveWorkAround && act.pokemon.m.workAroundMoves.includes(act.moveid)) {
						const index = act.pokemon.m.workAroundMoves.indexOf(act.moveid)
						changes.push({
							choice: 'move',
							order: act.order,
							priority: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])).priority,
							fractionalPriority: act.fractionalPriority,
							speed: act.speed,
							pokemon: act.pokemon,
							targetLoc: act.targetLoc,
							originalTarget: act.originalTarget,
							moveid: this.toID(pokemon.m.customMoves[index]),
							move: this.dex.moves.getByID(this.toID(pokemon.m.customMoves[index])),
							mega: false,
							zmove: act.zmove,
							maxMove: act.maxMove,
							sourceEffect: act.sourceEffect,
						})
					}
				}
			}
			for (let change of changes) {
				this.queue.changeAction(pokemon, change)
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.m.addedWorkAround) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (pokemon.m.workAroundMoves.includes(moveSlot.id)) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Hail Clause Mod'],
	},
];

const PPFormats: FormatList = [
	{
		section: "Project Tao",
		column: 3,
	},
	{
		name: "[Gen 8] Project Tao OU",

		mod: 'tao',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass'],
		unbanlist: ['Cinderace'],
	},

	{
		name: "[Gen 8] Project Tao UU",

		mod: 'tao',
		ruleset: ['[Gen 8] OU'],
		banlist: ['OU', 'UUBL', 'Cinderace', 'Drizzle'],
	},
	{
		name: "[Gen 8] Project Tao National Dex",

		mod: 'tao',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga',
			'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Project Tao  National Dex UU",

		mod: 'tao',
		ruleset: ['[Gen 8] National Dex'],
		banlist: [
			// National Dex OU
			'Blacephalon', 'Chansey', 'Charizard-Mega-Y', 'Clefable', 'Corviknight', 'Excadrill', 'Ferrothorn',
			'Garchomp', 'Garchomp-Mega', 'Gliscor', 'Greninja', 'Hawlucha', 'Heatran', 'Kartana', 'Kommo-o', 'Landorus-Therian', 'Lopunny-Mega',
			'Magnezone', 'Medicham-Mega', 'Melmetal', 'Pelipper', 'Rillaboom', 'Scizor-Mega', 'Serperior', 'Skarmory', 'Slowbro-Base', 'Slowbro-Mega',
			'Swampert-Mega', 'Tangrowth', 'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Tyranitar', 'Tyranitar-Mega', 'Volcanion', 'Volcarona', 'Zapdos',
			'nduubl', // National Dex UUBL
			'Aegislash', 'Alakazam', 'Azumarill', 'Charizard-Mega-X', 'Deoxys-Defense', 'Dragonite', 'Gallade-Mega', 'Gardevoir-Mega', 'Gengar',
			'Heracross-Mega', 'Hoopa-Unbound', 'Hydreigon', 'Kyurem', 'Latias-Mega', 'Latios', 'Latios-Mega', 'Manaphy', 'Mawile-Mega', 'Mew',
			'Pinsir-Mega', 'Scolipede', 'Staraptor', 'Thundurus', 'Thundurus-Therian', 'Victini', 'Drizzle', 'Drought', 'Aurora Veil',
		],
	},


];

Formats.push(...AzureFormats, ...PPFormats);
// Hack for New Ultra Series
const nationalDexSectionIndex = Formats.findIndex(format => format.section === "National Dex");
const newUltraSeriesIndex = Formats.findIndex(format => format.name === "[Gen 8] National Dex New Ultra Series");
Formats.splice(nationalDexSectionIndex + 1, 0, Formats.splice(newUltraSeriesIndex, 1)[0]);
// exports.Formats = Formats;
