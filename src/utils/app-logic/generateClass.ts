import { GenerateCharSheetInput, Class } from "../../common/types";
import { CLASS_DEFINITIONS } from "../../common/classData";
import { getRandomInList, getRandomInt } from "../../common/generalScripts";

export default function generateClass(
	input: GenerateCharSheetInput,
	level: number
): Class {
	try {
		const classDef = getRandomInList(CLASS_DEFINITIONS);
		if (!classDef) {
			throw new Error("No class found");
		}
		let charSubclass;
		if (level >= 3) {
			const subclassListLength = classDef.subclasses.length;
			if (!subclassListLength) {
				throw new Error("No subclasses found");
			}
			const subclassIndex = getRandomInt(0, subclassListLength - 1);
			charSubclass = classDef.subclasses[subclassIndex];
		}
		//TODO: Add subclass abilities
		const charClassAbilities = classDef.abilities.filter(
			(ability) => !ability.levelReq || level >= ability.levelReq
		);
		// Copy so we don't mutate the shared CLASS_DEFINITIONS entry (generateHp
		// also mutates numDice on this object).
		const charHitDice = { ...classDef.hitdice, numDice: level };

		const charClass: Class = {
			name: classDef.name,
			subclass: charSubclass,
			abilities: charClassAbilities,
			spellAbility: classDef.spellAbility,
			hitdice: charHitDice,
		};

		return charClass;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error.message);
		} else {
			console.error("An unexpected error occurred:", error);
		}
		throw error;
	}
}
