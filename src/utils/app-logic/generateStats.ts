import { StatArray, Class } from "../../common/types";
import { BASE_STAT_ARRAYS } from "../../common/statData";
import { CLASS_DEFINITIONS } from "../../common/classData";
import { getRandomInt, getWeightedRandom } from "../../common/generalScripts";

export default function generateStats(charClass: Class): StatArray {
	const statArray = getWeightedRandom(BASE_STAT_ARRAYS);
	if (!statArray) {
		throw new Error("No stat array found");
	}
	const classDef = CLASS_DEFINITIONS.find((c) => c.name === charClass.name);
	if (!classDef) {
		throw new Error("Class not eligible.");
	}
	return distributeStats(classDef.statWeights, statArray);
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
	const strThreshold = odds[0];
	const dexThreshold = odds.slice(0, 2).reduce((acc, curr) => {
		return acc + curr;
	});
	const conThreshold = odds.slice(0, 3).reduce((acc, curr) => {
		return acc + curr;
	});
	const intThreshold = odds.slice(0, 4).reduce((acc, curr) => {
		return acc + curr;
	});
	const wisThreshold = odds.slice(0, 5).reduce((acc, curr) => {
		return acc + curr;
	});
	const chaThreshold = odds.reduce((acc, curr) => {
		return acc + curr;
	});
	if (
		!strThreshold ||
		!dexThreshold ||
		!conThreshold ||
		!intThreshold ||
		!wisThreshold ||
		!chaThreshold
	) {
		throw new Error("Odds array not populated");
	}
	if (chaThreshold !== 100) {
		throw new Error("Odds array does not sum to 100");
	}
	// console.log(`str threshold: ${strThreshold}`);
	// console.log(`dex threshold: ${dexThreshold}`);
	// console.log(`con threshold: ${conThreshold}`);
	// console.log(`int threshold: ${intThreshold}`);
	// console.log(`wis threshold: ${wisThreshold}`);
	// console.log(`cha threshold: ${chaThreshold}`);
	let iter = 0;
	while (iter < 6) {
		const currStatValue = statArray[iter];
		if (!currStatValue) {
			throw new Error("No stat value");
		}
		const randPick = getRandomInt(0, 100);
		// console.log(`Rolled ${randPick}`);
		switch (true) {
			case randPick <= strThreshold && charStatArray.str == -1:
				charStatArray.str = currStatValue;
				iter++;
				break;
			case randPick > strThreshold &&
				randPick <= dexThreshold &&
				charStatArray.dex == -1:
				charStatArray.dex = currStatValue;
				iter++;
				break;
			case randPick > dexThreshold &&
				randPick <= conThreshold &&
				charStatArray.con == -1:
				charStatArray.con = currStatValue;
				iter++;
				break;
			case randPick > conThreshold &&
				randPick <= intThreshold &&
				charStatArray.int == -1:
				charStatArray.int = currStatValue;
				iter++;
				break;
			case randPick > intThreshold &&
				randPick <= wisThreshold &&
				charStatArray.wis == -1:
				charStatArray.wis = currStatValue;
				iter++;
				break;
			case randPick > wisThreshold &&
				randPick <= chaThreshold &&
				charStatArray.cha == -1:
				charStatArray.cha = currStatValue;
				iter++;
				break;
			default:
				break;
		}
	}
	return charStatArray;
}
