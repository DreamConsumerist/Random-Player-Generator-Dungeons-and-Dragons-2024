import { CharacterSheet, GenerateCharSheetInput } from "./../../common/types";
import generateLevel from "../../utils/app-logic/generateLevel";
import generateClass from "../../utils/app-logic/generateClass";
import generateSpecies from "./generateSpecies";
import generateStats from "./generateStats";
import generateHp from "./generateHp";
import generateName from "./generateName";

export default function generateCharSheet(
	input: GenerateCharSheetInput
): CharacterSheet {
	const charLevel = generateLevel(input);
	const charClass = generateClass(input, charLevel);
	const charSpecies = generateSpecies(input, charLevel);
	const charStats = generateStats(charClass);
	// const charStatsEnhanced = generateBackground(charStats);
	const charHp = generateHp(charLevel, charClass, charStats);
	// const charWeapons = generateWeapons(charClass); // also include Weapon Mastery stuff here
	// const charArmor = generateArmor(charClass); // also include AC calculation here
	// should have something that handles spells separately
	const charName = generateName(charSpecies, charClass.name, charLevel);
	const charSheet: CharacterSheet = {
		name: charName,
		level: charLevel,
		class: charClass,
		species: charSpecies,
		stats: charStats,
		currHp: charHp,
		maxHp: charHp,
		deathSaves: { successes: 0, failures: 0 },
		// weapons: charWeapons,
		// armor: charArmor,
		// armorClass: charArmorClass,
		// lore: charLore
	};
	return charSheet;
}
