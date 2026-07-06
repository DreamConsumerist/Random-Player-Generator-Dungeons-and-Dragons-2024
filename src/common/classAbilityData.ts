import { AssocAbilities } from "./types";

export const CLASS_ABILITIES: AssocAbilities[] = [
	{
		assoc: "Artificer",
		abilities: [
			{
				name: "Spellcasting",
				trimFeatures: [], // Manually account for any spells here in spell generation
				realFeatures: [
					{
						name: "Tools Required",
						description:
							"You produce your Artificer spells through tools. You can use Thieves’ Tools, Tinker’s Tools, or another kind of Artisan’s Tools with which you have proficiency as a Spellcasting Focus, and you must have one of those focuses in hand when you cast an Artificer spell (meaning the spell has an M component when you cast it).",
						canBeEnabled: false,
					},
					{
						name: "Cantrips",
						description:
							"You know two Artificer cantrips of your choice. Acid Splash and Prestidigitation are recommended.",
						canBeEnabled: false,
					},
					{
						name: "Spell Slots",
						description:
							"The Artificer Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.",
						canBeEnabled: false,
					},
					{
						name: "Prepared Spells of Level 1+",
						description:
							"You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Artificer spells. Cure Wounds and Grease are recommended. The number of spells on your list increases as you gain Artificer levels, as shown in the Prepared Spells column of the Artificer Features table. Whenever that number increases, choose additional Artificer spells until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you’re a level 5 Artificer, your list of prepared spells can include six Artificer spells of levels 1 and 2 in any combination. If another Artificer feature gives you spells that you always have prepared, those don’t count against the number of spells you can prepare with this feature, but those spells otherwise count as Artificer spells for you.",
						canBeEnabled: false,
					},
					{
						name: "Changing Your Prepared Spells",
						description:
							"Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Artificer spells for which you have spell slots.",
						canBeEnabled: false,
					},
					{
						name: "Spellcasting Ability",
						description:
							"Intelligence is your spellcasting ability for your Artificer spells.",
						canBeEnabled: false,
					},
				],
				levelReq: 1,
			},
			{
				name: "Tinker's Magic",
				trimFeatures: [
					{
						description:
							"As a Magic action while holding Tinker's Tools, you can create one item in an unoccupied space within 5 feet of yourself, choosing the item from the following list:",
						canBeEnabled: false,
					},
				],
				realFeatures: [
					{
						description:
							"As a Magic action while holding Tinker's Tools, you can create one item in an unoccupied space within 5 feet of yourself, choosing the item from the following list: You can use this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.",
						canBeEnabled: false,
					},
				],
				levelReq: 1,
			},
			{
				name: "Replicate Magic Item",
				trimFeatures: [],
				realFeatures: [],
				levelReq: 2,
			},
			{
				name: "Magic Item Tinker",
				trimFeatures: [],
				realFeatures: [
					{
						name: "Charge Magic Item",
						description:
							"You can touch a magic item within 5 feet of yourself that you created with Replicate Magic Item and that uses charges. You expend a level 1+ spell slot and recharge the item. The number of charges the item regains is equal to the level of spell slot expended.",
						canBeEnabled: false,
						actionEcon: "Bonus Action",
					},
					{
						name: "Drain Magic Item",
						description:
							"You can touch a magic item within 5 feet of yourself that you created with Replicate Magic Item and cause the item to vanish, converting its magical energy into a spell slot. The slot is level 1 if the item is Common or level 2 if the item is Uncommon or Rare. Once you use this feature, you can’t do so again until you finish a Long Rest. Any spell slot you create with this feature vanishes when you finish a Long Rest.",
						canBeEnabled: false,
						maxUses: 1,
						currUses: 1,
						refreshTime: "Long Rest",
						actionEcon: "Bonus Action",
					},
					{
						name: "Transmute Magic Item",
						description:
							"You can touch one magic item within 5 feet of yourself that you created with Replicate Magic Item and transform it into a different magic item. The resulting item must be based on a magic item plan you know. Once you use this feature, you can’t do so again until you finish a Long Rest.",
						canBeEnabled: false,
						maxUses: 1,
						currUses: 1,
						refreshTime: "Long Rest",
						actionEcon: "Magic Action",
					},
				],
				levelReq: 6,
			},
			{
				name: "Flash of Genius",
				trimFeatures: [
					{
						description:
							"When you or a creature you can see within 30 feet of you fails an ability check or a saving throw, you can add a bonus to the roll, potentially causing it to succeed. The bonus equals your Intelligence modifier (minimum of +1). You can take this Reaction a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a Long Rest.",
						canBeEnabled: false,
						maxUses: "INTMOD",
						currUses: "INTMOD",
						actionEcon: "Reaction",
						refreshTime: "Long Rest",
					},
				],
				realFeatures: [
					{
						description:
							"When you or a creature you can see within 30 feet of you fails an ability check or a saving throw, you can add a bonus to the roll, potentially causing it to succeed. The bonus equals your Intelligence modifier (minimum of +1). You can take this Reaction a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a Long Rest.",
						canBeEnabled: false,
						maxUses: "INTMOD",
						currUses: "INTMOD",
						actionEcon: "Reaction",
						refreshTime: "Long Rest",
					},
				],
				levelReq: 7,
			},
			//TODO: Abilities over level 7
			// Magic Item Adept (10): This should just inflate the number of magic items opponents bring into battle
			// Spell-Storing Item (11)
			// Advanced Artifice (14)
			// Magic Item Master (18)
			// Soul of Artifice (20)
		],
		spellAbility: "INT",
	},
	{
		assoc: "Barbarian",
		abilities: [
			{
				name: "Rage",
				levelReq: 1,
			},
			{
				name: "Unarmored Defense",
				levelReq: 1,
			},
			{
				name: "Danger Sense",
				levelReq: 2,
			},
			{
				name: "Reckless Attack",
				levelReq: 2,
			},
			{
				name: "Extra Attack",
				levelReq: 5, // prob going to move this elsewhere in the char sheet
			},
			{
				name: "Fast Movement",
				levelReq: 5,
			},
			{
				name: "Feral Instinct",
				levelReq: 7,
			},
			{
				name: "Instinctive Pounce",
				levelReq: 7,
			},
			// Brutal Strike (has upgrades)
			// Relentless Rage
			// Persistent Rage
			// Indomitable Might
			// Primal Champion
		],
	},
	{
		assoc: "Bard",
		abilities: [
			{
				name: "Bardic Inspiration",
				levelReq: 1,
			},
			{
				name: "Spellcasting",
				levelReq: 1,
			},
			{
				name: "Expertise",
				levelReq: 2,
			},
			{
				name: "Jack of All Trades",
				levelReq: 2,
			},
			{
				name: "Font of Inspiration",
				levelReq: 5,
			},
			{
				name: "Countercharm",
				levelReq: 7,
			},
			{
				name: "Magical Secrets",
				levelReq: 10,
			},
			{
				name: "Superior Inspiration",
				levelReq: 18,
			},
			{
				name: "Words of Creation",
				levelReq: 20,
			},
		],
		spellAbility: "CHA",
	},
	{
		assoc: "Cleric",
		abilities: [
			{
				name: "Spellcasting",
				levelReq: 1,
			},
			{
				name: "Divine Order",
				levelReq: 1,
			},
			{
				name: "Channel Divinity",
				levelReq: 2,
			},
			{
				name: "Sear Undead",
				levelReq: 5,
			},
			{
				name: "Blessed Strikes", // has upgrade
				levelReq: 7,
			},
			{
				name: "Divine Intervention", // has upgrade
				levelReq: 10,
			},
		],
		spellAbility: "CHA",
	},
	{
		assoc: "Druid",
		abilities: [
			{
				name: "Spellcasting",
				levelReq: 1,
			},
			{
				name: "Druidic",
				levelReq: 1,
			},
			{
				name: "Primal Order",
				levelReq: 1,
			},
			{
				name: "Wild Shape",
				levelReq: 2,
			},
			{
				name: "Wild Companion",
				levelReq: 2,
			},
			{
				name: "Wild Resurgence",
				levelReq: 5,
			},
			{
				name: "Elemental Fury", // has upgrade
				levelReq: 7,
			},
			{
				name: "Beast Spells",
				levelReq: 18,
			},
			{
				name: "Archdruid",
				levelReq: 20,
			},
		],
		spellAbility: "WIS",
	},
	{
		assoc: "Fighter",
		abilities: [
			// Fighting Style will be in Feat resolution
			{
				name: "Second Wind",
				// Will need to have a unique ability upgrade resolution script
				trimFeatures: [
					{
						description:
							"You have a limited well of physical and mental stamina that you can draw on. You can use it to regain Hit Points equal to 1d10 plus your Fighter level.",
						canBeEnabled: false,
						maxUses: 2,
						refreshTime: "Long Rest",
					},
				],
				realFeatures: [
					{
						description:
							"You have a limited well of physical and mental stamina that you can draw on. You can use it to regain Hit Points equal to 1d10 plus your Fighter level.",
						canBeEnabled: false,
						maxUses: 2,
						refreshTime: "Long Rest",
					},
				],
				levelReq: 1,
			},
			// Weapon Mastery will be in Weapon Mastery resolution
			{
				name: "Action Surge",
				trimFeatures: [
					{
						description:
							"You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.",
						canBeEnabled: false,
						maxUses: 1,
						refreshTime: "Short Rest",
					},
				],
				realFeatures: [
					{
						description:
							"You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.",
						canBeEnabled: false,
						maxUses: 1,
						refreshTime: "Short Rest",
					},
				],
				levelReq: 2,
			},
			{
				name: "Tactical Mind",
				trimFeatures: [
					{
						description:
							"You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn’t expended.",
						canBeEnabled: false,
					},
				],
				levelReq: 2,
			},
			{
				name: "Extra Attack",
				trimFeatures: [
					{
						description:
							"You can attack twice instead of once whenever you take the Attack action on your turn.",
						canBeEnabled: false,
					},
				],
				levelReq: 5,
			},
			{
				name: "Tactical Shift",
				trimFeatures: [
					{
						description:
							"Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attacks.",
						canBeEnabled: false,
					},
				],
				levelReq: 5,
			},
			//TODO: Abilities over level 7
			// Indomitable
			// Tactical Master
			// Two Extra Attacks
			// Studied Attacks
			// Three Extra Attacks
		],
	},
	{
		assoc: "Monk",
		abilities: [
			{
				name: "Martial Arts",
				levelReq: 1,
			},
			{
				name: "Unarmored Defense",
				levelReq: 1,
			},
			{
				name: "Monk's Focus",
				levelReq: 2,
			},
			{
				name: "Unarmored Movement",
				levelReq: 2,
			},
			{
				name: "Uncanny Metabolism",
				levelReq: 2,
			},
			{
				name: "Deflect Attacks",
				levelReq: 3,
			},
			{
				name: "Slow Fall",
				levelReq: 4,
			},
			{
				name: "Extra Attack",
				levelReq: 5,
			},
			{
				name: "Stunning Strike",
				levelReq: 5,
			},
			{
				name: "Empowered Strikes",
				levelReq: 6,
			},
			{
				name: "Evasion",
				levelReq: 7,
			},
			{
				name: "Acrobatic Movement",
				levelReq: 9,
			},
			{
				name: "Heightened Focus",
				levelReq: 10,
			},
			{
				name: "Self-Restoration",
				levelReq: 10,
			},
			{
				name: "Deflect Energy",
				levelReq: 13,
			},
			{
				name: "Disciplined Survivor",
				levelReq: 14,
			},
			{
				name: "Perfect Focus",
				levelReq: 15,
			},
			{
				name: "Superior Defense",
				levelReq: 18,
			},
			{
				name: "Body and Mind",
				levelReq: 20,
			},
		],
	},
	{
		assoc: "Paladin",
		abilities: [
			{
				name: "Lay On Hands",
				levelReq: 1,
			},
			{
				name: "Spellcasting",
				levelReq: 1,
			},
			{
				name: "Paladin's Smite",
				levelReq: 2,
			},
			{
				name: "Channel Divinity",
				levelReq: 3,
			},
			{
				name: "Extra Attack",
				levelReq: 5,
			},
			{
				name: "Faithful Steed",
				levelReq: 5,
			},
			{
				name: "Aura of Protection",
				levelReq: 6,
			},
			{
				name: "Abjure Foes",
				levelReq: 9,
			},
			{
				name: "Aura of Courage",
				levelReq: 10,
			},
			{
				name: "Radiant Strikes",
				levelReq: 11,
			},
			{
				name: "Restoring Touch",
				levelReq: 14,
			},
			{
				name: "Aura Expansion",
				levelReq: 18,
			},
		],
		spellAbility: "CHA",
	},
	{
		assoc: "Ranger",
		abilities: [
			{
				name: "Spellcasting",
				levelReq: 1,
			},
			{
				name: "Favored Enemy",
				levelReq: 1,
			},
			{
				name: "Deft Explorer",
				levelReq: 2,
			},
			{
				name: "Extra Attack",
				levelReq: 5,
			},
			{
				name: "Roving",
				levelReq: 6,
			},
			{
				name: "Expertise",
				levelReq: 9,
			},
			{
				name: "Tireless",
				levelReq: 10,
			},
			{
				name: "Relentless Hunter",
				levelReq: 12,
			},
			{
				name: "Nature's Veil",
				levelReq: 14,
			},
			{
				name: "Precise Hunter",
				levelReq: 17,
			},
			{
				name: "Feral Senses",
				levelReq: 18,
			},
			{
				name: "Foe Slayer",
				levelReq: 20,
			},
		],
		spellAbility: "WIS",
	},
	{
		assoc: "Rogue",
		abilities: [
			{
				name: "Expertise",
				levelReq: 1,
			},
			{
				name: "Sneak Attack",
				levelReq: 1,
			},
			{
				name: "Thieves' Cant",
				levelReq: 1,
			},
			{
				name: "Cunning Action",
				levelReq: 2,
			},
			{
				name: "Steady Aim",
				levelReq: 3,
			},
			{
				name: "Cunning Strike", // has upgrade
				levelReq: 5,
			},
			{
				name: "Uncanny Dodge",
				levelReq: 5,
			},
			{
				name: "Evasion",
				levelReq: 7,
			},
			{
				name: "Reliable Talent",
				levelReq: 7,
			},
			{
				name: "Devious Strikes",
				levelReq: 14,
			},
			{
				name: "Slippery Mind",
				levelReq: 15,
			},
			{
				name: "Elusive",
				levelReq: 18,
			},
			{
				name: "Stroke of Luck",
				levelReq: 20,
			},
		],
	},
	{
		assoc: "Sorcerer",
		abilities: [
			{
				name: "Spellcasting",
				levelReq: 1,
			},
			{
				name: "Innate Sorcery",
				levelReq: 2,
			},
			{
				name: "Font of Magic",
				levelReq: 2,
			},
			{
				name: "Metamagic",
				levelReq: 2,
			},
			{
				name: "Sorcerous Restoration",
				levelReq: 5,
			},
			{
				name: "Sorcery Incarnate",
				levelReq: 7,
			},
			{
				name: "Arcane Apotheosis",
				levelReq: 20,
			},
		],
		spellAbility: "CHA",
	},
	{
		assoc: "Warlock",
		abilities: [
			{
				name: "Eldritch Invocations",
				levelReq: 1,
			},
			{
				name: "Pact Magic",
				levelReq: 1,
			},
			{
				name: "Magical Cunning",
				levelReq: 2,
			},
			{
				name: "Contact Patron",
				levelReq: 9,
			},
			{
				name: "Mystic Arcanum",
				levelReq: 11,
			},
			{
				name: "Eldritch Master",
				levelReq: 20,
			},
		],
		spellAbility: "CHA",
	},
	{
		assoc: "Wizard",
		abilities: [
			{
				name: "Spellcasting",
				levelReq: 1,
			},
			{
				name: "Ritual Adept",
				levelReq: 1,
			},
			{
				name: "Arcane Recovery",
				levelReq: 1,
			},
			{
				name: "Scholar",
				levelReq: 2,
			},
			{
				name: "Memorize Spell",
				levelReq: 5,
			},
			{
				name: "Spell Mastery",
				levelReq: 18,
			},
			{
				name: "Signature Spells",
				levelReq: 20,
			},
		],
		spellAbility: "INT",
	},
];
