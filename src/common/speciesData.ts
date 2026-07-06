import { Species } from "./types";

export const SPECIES_LIST: Species[] = [
	{
		name: "Aasimar",
		abilities: [
			{
				name: "Healing Hands",
				trimFeatures: [
					{
						description:
							"You can touch a creature and roll a number of dice equal to your Proficiency Bonus. The creature regains a number of Hit Points equal to the total rolled.",
						canBeEnabled: false,
						actionEcon: "Magic Action",
						maxUses: 1,
						refreshTime: "Long Rest",
					},
				],
			},
			{
				name: "Light Bearer",
				trimFeatures: [
					{
						description:
							"You know the Light cantrip. Charisma is your spellcasting ability for it.",
						canBeEnabled: false,
					},
				],
			},
			{
				name: "Celestial Revelation",
				trimFeatures: [
					{
						description:
							"You can transform into one of the options provided. Once on each of your turns before the transformation ends, you can deal extra damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your Proficiency Bonus, and the extra damage's type is either Necrotic for Necrotic Shroud or Radiant for Heavenly Wings and Inner Radiance.",
						options: [
							"Heavenly Wings: Two spectral wings sprout from your back temporarily. Until the transformation ends, you have a Fly Speed equal to your Speed.",
							"Inner Radiance: Searing light temporarily radiates from your eyes and mouth. For the duration, you shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes Radiant damage equal to your Proficiency Bonus.",
							"Necrotic Shroud: Your eyes briefly become pools of darkness, and flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you must succeed on a Charisma saving throw (DC 8 plus your Charisma modifier and Proficiency Bonus) or have the Frightened condition until the end of your next turn.",
						],
						canBeEnabled: true,
						enabled: false,
						duration: 60,
						maxUses: 1,
						refreshTime: "Long Rest",
					},
				],
				levelReq: 3,
			},
		],
		speed: { groundSpeed: 30 },
		creatureType: "Humanoid",
		size: ["Small", "Medium"],
		resistances: ["Necrotic", "Radiant"],
		darkvision: 60,
	},
	{
		name: "Dragonborn",
		abilities: [
			{
				name: "Draconic Ancestry",
				trimFeatures: [
					{
						description:
							"Your lineage stems from a dragon progenitor. Choose the kind of dragon from the Draconic Ancestors table. Your choice affects your Breath Weapon and Damage Resistance traits as well as your appearance.",
					},
				],
			},
			{
				name: "Breath Weapon",
				trimFeatures: [
					{
						description:
							"You can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose the shape each time). Each creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry trait. On a successful save, a creature takes half as much damage. This damage increases by 1d10 when you reach levels 5, 11, 17.",
						actionEcon: "Attack Action",
						maxUses: "Proficiency Bonus",
						refreshTime: "Long Rest",
					},
				],
			},
			{
				name: "Damage Resistance",
				trimFeatures: [
					{
						description:
							"You have resistance to the damage type determined by your Draconic Ancestry trait.",
					},
				],
			},
			{
				name: "Draconic Flight",
				trimFeatures: [
					{
						description:
							"You can channel draconic magic to give yourself temporary flight. You sprout spectral wings on your back that last for 10 minutes or until you retract your wings (no action required) or have the Incapacitated condition. During that time, you have a Fly Speed equal to your Speed. Your wings appear to be made of the same energy as your Breath Weapon.",
						canBeEnabled: true,
						duration: 600,
						actionEcon: "Bonus Action",
						refreshTime: "Long Rest",
					},
				],
				levelReq: 5,
			},
		],
		speed: { groundSpeed: 30 },
		creatureType: "Humanoid",
		size: ["Medium"],
		darkvision: 60,
	},
	{
		name: "Dwarf",
		abilities: [
			{
				name: "Dwarven Resilience",
				trimFeatures: [
					{
						description:
							"You have Advantage on saving throws you make to avoid or end the Poisoned condition",
					},
				],
			},
			{
				name: "Dwarven Toughness",
				trimFeatures: [
					{
						description:
							"Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level.",
					},
				],
			},
			{
				name: "Stonecunning",
				trimFeatures: [
					{
						description:
							"You gain Tremorsense with a range of 60 feet. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked.",
						canBeEnabled: true,
						duration: 600,
						maxUses: "Proficiency Bonus",
						refreshTime: "Long Rest",
					},
				],
			},
		],
		speed: { groundSpeed: 30 },
		creatureType: "Humanoid",
		size: ["Medium"],
		darkvision: 120,
		resistances: ["Poison"],
	},
	{
		name: "Elf",
		abilities: [
			{
				name: "Elven Lineage",
				trimFeatures: [
					{
						description: "",
					},
				],
			},
			{
				name: "Fey Ancestry",
				trimFeatures: [
					{
						description: "",
					},
				],
			},
			{
				name: "Keen Senses",
				trimFeatures: [
					{
						description: "",
					},
				],
			},
			{
				name: "Trance",
				trimFeatures: [
					{
						description: "",
					},
				],
			},
		],
		speed: { groundSpeed: 30 },
		creatureType: "Humanoid",
		size: ["Medium"],
		darkvision: 60,
	},
	{
		name: "Gnome",
		abilities: [
			{
				name: "Gnomish Cunning",
				trimFeatures: [
					{
						description:
							"You have Advantage on Intelligence, Wisdom, and Charisma saving throws.",
					},
				],
			},
			{
				name: "Gnomish Lineage",
				trimFeatures: [
					{
						description: "",
					},
				],
			},
		],
		speed: { groundSpeed: 30 },
		creatureType: "Humanoid",
		size: ["Small"],
		darkvision: 60,
	},
	{
		name: "Goliath",
		abilities: [
			{
				name: "Giant Ancestry",
				trimFeatures: [
					{
						description: "",
					},
				],
			},
			{
				name: "Large Form",
				trimFeatures: [
					{
						description:
							"You can change your size to Large if you're in a big enough space. This transformation lasts for 10 minutes or until you end it (no action required). For that duration, you have Advantage on Strength checks, and your Speed increases by 10 feet.",
						canBeEnabled: true,
						maxUses: 1,
						actionEcon: "Bonus Action",
						refreshTime: "Long Rest",
						duration: 600,
					},
				],
				levelReq: 5,
			},
			{
				name: "Powerful Build",
				trimFeatures: [
					{
						description:
							"You have advantage on any saving throw you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity.",
					},
				],
			},
		],
		speed: { groundSpeed: 30 },
		creatureType: "Humanoid",
		size: ["Medium"],
	},
	{
		name: "Halfling",
		abilities: [
			{
				name: "Brave",
				trimFeatures: [
					{
						description:
							"You have Advantage on saving throws you make to avoid or end the Frightened condition.",
					},
				],
			},
			{
				name: "Halfling Nimbleness",
				trimFeatures: [
					{
						description:
							"You can move through the space of any creature that is a size larger than you, but you can't stop in the same space",
					},
				],
			},
			{
				name: "Lucky",
				trimFeatures: [
					{
						description:
							"When you roll a 1 on the d20 of a D20 test, you can reroll the die, and you must use the new roll.",
					},
				],
			},
			{
				name: "Naturally Stealthy",
				trimFeatures: [
					{
						description:
							"You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you.",
					},
				],
			},
		],
		speed: { groundSpeed: 30 },
		creatureType: "Humanoid",
		size: ["Small"],
	},
	{
		name: "Human",
		abilities: [
			{
				name: "Resourceful",
				trimFeatures: [
					{
						description:
							"You gain Heroic Inspiration whenever you finish a Long Rest",
					},
				],
			},
			{
				name: "Skillful",
				trimFeatures: [
					{
						description: "You gain proficiency in one skill of your choice.",
					},
				],
			},
			{
				name: "Versatile",
				trimFeatures: [
					{
						description: "You gain an Origin feat of your choice.",
					},
				],
			},
		],
		speed: { groundSpeed: 30 },
		creatureType: "Humanoid",
		size: ["Small", "Medium"],
	},
	{
		name: "Orc",
		abilities: [
			{
				name: "Adrenaline Rush",
				trimFeatures: [
					{
						description:
							"You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus.",
						maxUses: "Proficiency Bonus",
						refreshTime: "Short Rest",
					},
				],
			},
			{
				name: "Relentless Endurance",
				trimFeatures: [
					{
						description:
							"When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead.",
						maxUses: 1,
						refreshTime: "Long Rest",
					},
				],
			},
		],
		speed: { groundSpeed: 35 },
		creatureType: "Humanoid",
		size: ["Medium"],
		darkvision: 120,
	},
	{
		name: "Tiefling",
		abilities: [
			{
				name: "Fiendish Legacy",
				trimFeatures: [
					{
						description: "",
					},
				],
			},
			{
				name: "Otherworldly Presence",
				trimFeatures: [
					{
						description:
							"You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy trait.",
					},
				],
			},
		],
		speed: { groundSpeed: 30 },
		creatureType: "Humanoid",
		size: ["Small", "Medium"],
	},
];

// interface SubspeciesFeatures

export const DRAGONBORN_SUBSPECIES: string[] = [
	"Black",
	"Blue",
	"Brass",
	"Bronze",
	"Copper",
	"Gold",
	"Green",
	"Red",
	"Silver",
	"White",
];
export const ELF_SUBSPECIES: string[] = ["Drow", "High", "Wood"];
export const GNOME_SUBSPECIES: string[] = ["Rock", "Forest"];
export const GOLIATH_SUBSPECIES: string[] = [
	"Fire",
	"Frost",
	"Hill",
	"Stone",
	"Storm",
];
export const TIEFLING_SUBSPECIES: string[] = [
	"Abyssal",
	"Chthonic",
	"Infernal",
];
