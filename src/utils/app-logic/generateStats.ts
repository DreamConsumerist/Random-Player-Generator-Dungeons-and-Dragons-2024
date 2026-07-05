import { GenerateCharSheetInput, StatArray } from "../../common/types";

export default function generateStats(
	input: GenerateCharSheetInput,
	level: number
): StatArray {
	const stats: StatArray = {
		str: 18,
		dex: 12,
		con: 14,
		int: 9,
		wis: 10,
		cha: 10,
	};
	return stats;
}
