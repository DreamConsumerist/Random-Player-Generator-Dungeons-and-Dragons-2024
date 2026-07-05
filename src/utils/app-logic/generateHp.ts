import { Class, StatArray, DiceRoll } from "../../common/types";
import { rollDice, statToMod } from "../../common/generalScripts";

export default function generateHp(
	level: number,
	charClass: Class,
	stats: StatArray
): number {
	let charHp = charClass.hitdice.diceSides;
	const conMod = statToMod(stats.con);
	if (level > 1) {
		const levelUpRoll: DiceRoll = charClass.hitdice;
		levelUpRoll.numDice -= 1;
		const result = rollDice(levelUpRoll).numResult;
		charHp += result;
		console.log(
			`Rolled ${levelUpRoll.numDice}d${levelUpRoll.diceSides} and got ${result}`
		);
	}
	charHp += level * conMod;

	return charHp;
}
