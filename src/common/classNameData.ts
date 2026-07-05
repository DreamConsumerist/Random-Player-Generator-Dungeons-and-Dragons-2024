import { ClassSubclasses } from "./types";

export const DND_CLASS_SUBCLASS: ClassSubclasses[] = [
	{
		class: "Artificer",
		subclass: [
			"Alchemist",
			"Armorer",
			"Artillerist",
			"Battle Smith",
			"Cartographer",
			"Reanimator",
		],
		hitdice: { numDice: 1, diceSides: 8 },
	},
	{
		class: "Barbarian",
		subclass: [
			"Path of the Berserker",
			"Path of the Wild Heart",
			"Path of the World Tree",
			"Path of the Zealot",
		],
		hitdice: { numDice: 1, diceSides: 12 },
	},
	{
		class: "Bard",
		subclass: [
			"College of Dance",
			"College of Glamour",
			"College of Lore",
			"College of Spirits",
			"College of the Moon",
			"College of Valor",
		],
		hitdice: { numDice: 1, diceSides: 8 },
	},
	{
		class: "Cleric",
		subclass: [
			"Grave Domain",
			"Knowledge Domain",
			"Life Domain",
			"Light Domain",
			"Trickery Domain",
			"War Domain",
		],
		hitdice: { numDice: 1, diceSides: 8 },
	},
	{
		class: "Druid",
		subclass: [
			"Circle of the Land",
			"Circle of the Moon",
			"Circle of the Sea",
			"Circle of the Stars",
		],
		hitdice: { numDice: 1, diceSides: 8 },
	},
	{
		class: "Fighter",
		subclass: [
			"Banneret",
			"Battle Master",
			"Champion",
			"Eldritch Knight",
			"Psi Warrior",
		],
		hitdice: { numDice: 1, diceSides: 10 },
	},
	{
		class: "Monk",
		subclass: [
			"Warrior of Mercy",
			"Warrior of Shadow",
			"Warrior of the Elements",
			"Warrior of the Open Hand",
		],
		hitdice: { numDice: 1, diceSides: 8 },
	},
	{
		class: "Paladin",
		subclass: [
			"Oath of Devotion",
			"Oath of Glory",
			"Oath of the Ancients",
			"Oath of the Noble Genies",
			"Oath of Vengeance",
		],
		hitdice: { numDice: 1, diceSides: 10 },
	},
	{
		class: "Ranger",
		subclass: [
			"Beast Master",
			"Fey Wanderer",
			"Gloom Stalker",
			"Hollow Warden",
			"Hunter",
			"Winter Walker",
		],
		hitdice: { numDice: 1, diceSides: 10 },
	},
	{
		class: "Rogue",
		subclass: [
			"Arcane Trickster",
			"Assassin",
			"Phantom",
			"Scion of the Three",
			"Soulknife",
			"Thief",
		],
		hitdice: { numDice: 1, diceSides: 8 },
	},
	{
		class: "Sorcerer",
		subclass: [
			"Aberrant Sorcery",
			"Clockwork Sorcery",
			"Draconic Sorcery",
			"Shadow Sorcery",
			"Spellfire Sorcery",
			"Wild Magic Sorcery",
		],
		hitdice: { numDice: 1, diceSides: 6 },
	},
	{
		class: "Warlock",
		subclass: [
			"Archfey Patron",
			"Celestial Patron",
			"Fiend Patron",
			"Great Old One Patron",
			"Undead Patron",
		],
		hitdice: { numDice: 1, diceSides: 8 },
	},
	{
		class: "Wizard",
		subclass: ["Abjurer", "Bladesinger", "Diviner", "Evoker", "Illusionist"],
		hitdice: { numDice: 1, diceSides: 6 },
	},
];
