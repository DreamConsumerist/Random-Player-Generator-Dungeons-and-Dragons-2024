import { StatArray, Class } from "../../common/types";
import { BASE_STAT_ARRAYS } from "../../common/statData";
import { getRandomInt } from "../../common/generalScripts";

export default function generateStats(charClass: Class): StatArray {
	const baseStatArrayLength = BASE_STAT_ARRAYS.length;
	const randomStatArrayIndex = getRandomInt(0, baseStatArrayLength - 1);
	const statArray = BASE_STAT_ARRAYS[randomStatArrayIndex];
	if (!statArray) {
		throw new Error("No stat array found");
	}
	return preferenceBaseAllocation(statArray, charClass);
}

function preferenceBaseAllocation(
	statArray: number[],
	charClass: Class
): StatArray {
	const fighterOdds: number[] = [20, 40, 70, 77, 93, 100];
	switch (charClass.name) {
		case "Fighter":
			return distributeStats(fighterOdds, statArray);
		default:
			throw new Error("Class not eligible.");
	}
}

// while loop that iterates over baseStatArray indices, taking a customized array, and returns a stat name for each
function distributeStats(odds: number[], statArray: number[]): StatArray {
	const charStatArray: StatArray = {
		str: -1,
		dex: -1,
		con: -1,
		int: -1,
		wis: -1,
		cha: -1,
	};
	let iter = 0;
	while (iter < 6) {
		const currStatValue = statArray[iter];
		if (!currStatValue) {
			throw new Error("Blah");
		}
		const randPick = getRandomInt(0, 100);
		switch (true) {
			case randPick <= odds[0] && charStatArray.str == -1:
				charStatArray.str = currStatValue;
				iter++;
				break;
			case randPick <= odds[1] && charStatArray.dex == -1:
				charStatArray.dex = currStatValue;
				iter++;
				break;
			case randPick <= odds[2] && charStatArray.con == -1:
				charStatArray.con = currStatValue;
				iter++;
				break;
			case randPick <= odds[3] && charStatArray.int == -1:
				charStatArray.int = currStatValue;
				iter++;
				break;
			case randPick <= odds[4] && charStatArray.wis == -1:
				charStatArray.wis = currStatValue;
				iter++;
				break;
			case randPick <= odds[5] && charStatArray.cha == -1:
				charStatArray.cha = currStatValue;
				iter++;
				break;
			default:
				break;
		}
	}
	return charStatArray;
}
