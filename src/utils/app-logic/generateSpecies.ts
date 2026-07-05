import { GenerateCharSheetInput, Species, Ability } from "../../common/types";
import { SPECIES_LIST } from "../../common/speciesData";
import { getRandomInt } from "../../common/generalScripts";

export default function generateSpecies(
	input: GenerateCharSheetInput,
	level: number
): Species {
	try {
		const speciesListLength = SPECIES_LIST.length;
		const speciesIndex = getRandomInt(0, speciesListLength - 1);
		if (!SPECIES_LIST[1]) {
			throw new Error("Species not found");
		}
		let charSpecies = SPECIES_LIST[1];
		const filteredSpeciesAbilities = charSpecies.abilities.filter(
			(ability: Ability) => !ability.levelReq || level >= ability.levelReq
		);
		charSpecies.abilities = filteredSpeciesAbilities;
		console.log(filteredSpeciesAbilities);
		//TODO: Make special case function for unique lineages for Dragonborn and Elves
		return charSpecies;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error.message);
		} else {
			console.error("An unexpected error occurred:", error);
		}
		throw error;
	}
}
