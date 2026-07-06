import { Ability, AssocAbilities } from "./../../common/types";
import { CLASS_ABILITIES } from "./../../common/classAbilityData";
import { GenerateCharSheetInput, Class } from "../../common/types";
import { DND_CLASS_SUBCLASS } from "../../common/classNameData";
import { getRandomInt } from "../../common/generalScripts";

export default function generateClass(
	input: GenerateCharSheetInput,
	level: number
): Class {
	try {
		const classListLength = DND_CLASS_SUBCLASS.length;
		const classIndex = getRandomInt(0, classListLength - 1);
		const charBaseClass = DND_CLASS_SUBCLASS[classIndex]?.class;
		let charSubclass;
		if (level >= 3) {
			const subclassListLength =
				DND_CLASS_SUBCLASS[classIndex]?.subclass.length;
			if (!subclassListLength) {
				throw new Error("No subclasses found");
			}
			const subclassIndex = getRandomInt(0, subclassListLength - 1);
			charSubclass = DND_CLASS_SUBCLASS[classIndex]?.subclass[subclassIndex];
		}
		if (!charBaseClass) {
			throw new Error("No class found");
		}
		//TODO: Add subclass abilities
		const filteredAbilities = CLASS_ABILITIES.filter(
			(abilityColl: AssocAbilities) => abilityColl.assoc == charBaseClass
		);
		if (!filteredAbilities[0]) {
			throw new Error("No abilities found");
		}
		const classAbilities = filteredAbilities[0];
		const charClassAbilities = classAbilities.abilities.filter(
			(ability: Ability) => !ability.levelReq || level >= ability.levelReq
		);
		// Copy so we don't mutate the shared DND_CLASS_SUBCLASS entry (generateHp
		// also mutates numDice on this object).
		const charHitDice = { ...DND_CLASS_SUBCLASS[classIndex].hitdice };
		charHitDice.numDice = level;

		const charClass: Class = {
			name: charBaseClass,
			subclass: charSubclass,
			abilities: charClassAbilities,
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
