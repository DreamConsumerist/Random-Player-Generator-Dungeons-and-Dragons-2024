import { GenerateCharSheetInput } from "../../common/types";

export default function generateLevel(input: GenerateCharSheetInput): number {
	if (input.difficulty <= 1) {
		return 1;
	}
	if (input.difficulty >= 20) {
		return 20;
	}

	const randomOffset = Math.random();
	switch (true) {
		case randomOffset <= 0.1:
			return input.difficulty - 1;
		case randomOffset <= 0.7:
			return input.difficulty;
		default:
			return input.difficulty + 1;
	}
}
