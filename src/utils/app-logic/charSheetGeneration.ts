import { CharacterSheet, GenerateCharSheetInput } from './../../common/types';
import generateLevel from "../../utils/app-logic/generateLevel"

export default function generateCharSheet(input: GenerateCharSheetInput): CharacterSheet {
    const charLevel = generateLevel(input);
    // const charClass = generateClass(input, charLevel);
    // const charRace = generateRace(input, charLevel);
    // const charStats = generateStats(charClass, charLevel);
    // const charHp = generateHp(charLevel, charClass);
    // const charWeapons = generateWeapons(charClass);
    // const charArmor = generateArmor(charClass)

    // const charName = generateCharName(charClass);
    const charSheet: CharacterSheet = {
        // name: charName,
        level: charLevel,
        // class: charClass,
        // race: charRace,
        // stats: charStats,
        // currHp: charHp,
        // maxHp: charHp,
        // deathSaves: {successes: 0, failures: 0},
        // weapons: charWeapons,
        // armor: charArmor,
        // armorClass: charArmorClass,
        // lore: charLore
    }
    return charSheet;
}