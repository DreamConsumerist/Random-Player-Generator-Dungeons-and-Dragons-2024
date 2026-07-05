import { CharacterSheet, GenerateCharSheetInput } from "./../../common/types";
import generateLevel from "../../utils/app-logic/generateLevel";
import generateClass from "../../utils/app-logic/generateClass";
import generateSpecies from "./generateSpecies";
import generateStats from "./generateStats";

export default function generateCharSheet(
	input: GenerateCharSheetInput
): CharacterSheet {
	const charLevel = generateLevel(input);
	const charClass = generateClass(input, charLevel);
	const charSpecies = generateSpecies(input, charLevel);
	const charStats = generateStats(charClass);
	// const charHp = generateHp(charLevel, charClass);
	// const charWeapons = generateWeapons(charClass);
	// const charArmor = generateArmor(charClass)

	// const charName = generateCharName(charClass);
	const charSheet: CharacterSheet = {
		// name: charName,
		level: charLevel,
		class: charClass,
		species: charSpecies,
		stats: charStats,
		// currHp: charHp,
		// maxHp: charHp,
		// deathSaves: {successes: 0, failures: 0},
		// weapons: charWeapons,
		// armor: charArmor,
		// armorClass: charArmorClass,
		// lore: charLore
	};
	return charSheet;
}
