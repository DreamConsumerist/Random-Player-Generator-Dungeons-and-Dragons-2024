import { WeightedArray } from "./types";

export const BASE_STAT_ARRAYS: WeightedArray<number[]>[] = [
	{ value: [16, 14, 12, 10, 10, 8], weight: 75 }, // 68
	{ value: [18, 12, 12, 10, 8, 8], weight: 15 }, // 68
	{ value: [12, 12, 12, 12, 12, 12], weight: 4 }, // 72
	{ value: [16, 16, 16, 8, 8, 8], weight: 3 }, // 72
	{ value: [18, 18, 10, 10, 6, 6], weight: 3 }, // 68
];
