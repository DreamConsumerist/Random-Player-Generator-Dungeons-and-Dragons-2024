import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CharacterSheet, GenerateCharSheetInput } from "../common/types";
import generateCharSheet from "../utils/app-logic/charSheetGeneration";

interface CharacterState {
	character: CharacterSheet | null;
	/** Generate a new character sheet, store it, and return it. */
	generate: (input: GenerateCharSheetInput) => CharacterSheet;
	/** Clear the current character. */
	clear: () => void;
}

/**
 * Holds the generated character. Persisted to sessionStorage so a page
 * refresh keeps the current character instead of showing a blank sheet.
 * This replaces passing the whole sheet through the URL search param.
 */
export const useCharacterStore = create<CharacterState>()(
	persist(
		(set) => ({
			character: null,
			generate: (input) => {
				const character = generateCharSheet(input);
				set({ character });
				return character;
			},
			clear: () => set({ character: null }),
		}),
		{
			name: "character-store",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
