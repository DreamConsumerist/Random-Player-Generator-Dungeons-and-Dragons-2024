import { GenerateCharSheetInput, Species, Ability } from "../../common/types";
import {
	DRAGONBORN_SUBSPECIES,
	ELF_SUBSPECIES,
	GNOME_SUBSPECIES,
	GOLIATH_SUBSPECIES,
	SPECIES_LIST,
	TIEFLING_SUBSPECIES,
} from "../../common/speciesData";
import { getRandomInt } from "../../common/generalScripts";

export default function generateSpecies(
	input: GenerateCharSheetInput,
	level: number
): Species {
	try {
		const speciesListLength = SPECIES_LIST.length;
		const speciesIndex = getRandomInt(0, speciesListLength - 1);
		if (!SPECIES_LIST[speciesIndex]) {
			throw new Error("Species not found");
		}
		let charSpecies = SPECIES_LIST[speciesIndex];
		const filteredSpeciesAbilities = charSpecies.abilities.filter(
			(ability: Ability) => !ability.levelReq || level >= ability.levelReq
		);
		charSpecies.abilities = filteredSpeciesAbilities;
		console.log(filteredSpeciesAbilities);
		charSpecies.subspecies = getSubspecies(charSpecies.name);
		//TODO: Resolve subspecies abilities. Maybe I'll just make any customization part of this rather than the broader resolution
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

function getSubspecies(species: string): string | undefined {
	let options: string[];
	switch (species) {
		case "Dragonborn":
			options = DRAGONBORN_SUBSPECIES;
			break;
		case "Elf":
			options = ELF_SUBSPECIES;
			break;
		case "Gnome":
			options = GNOME_SUBSPECIES;
			break;
		case "Goliath":
			options = GOLIATH_SUBSPECIES;
			break;
		case "Tiefling":
			options = TIEFLING_SUBSPECIES;
			break;
		default:
			return undefined;
	}
	const optionsLength = options.length;
	const optionsIndex = getRandomInt(0, optionsLength - 1);
	return options[optionsIndex];
}
