import { DiceRoll, RollResult, GeneralArray, WeightedArray } from "./types";

export function getRandomInt(min: number, max: number): number {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export function getRandomInList<T>(list: T[]): T {
	if (list.length === 0) {
		throw new Error("Attempted to get value from an empty list");
	}

	return list[getRandomInt(0, list.length - 1)];
}

export function rollDice(roll: DiceRoll): RollResult {
	let results: number = 0;
	for (let i = 0; i < roll.numDice; i++) {
		const singleResult = getRandomInt(1, roll.diceSides);
		console.log(`Rolled ${singleResult} on 1d${roll.diceSides}`);
		results += singleResult;
	}
	return { numResult: results, damageType: roll?.damageType };
}

export function statToMod(stat: number): number {
	const offset = stat - 10;
	const mod = Math.floor(offset / 2);
	return mod;
}

export function getWeightedRandom<T>(items: WeightedArray<T>[]): T {
	if (items.length === 0) {
		throw new Error("Cannot select from an empty array");
	}

	const totalWeight = items.reduce(
		(sum: number, item: WeightedArray<T>): number => sum + item.weight,
		0
	);

	if (totalWeight <= 0) {
		throw new Error("Total weight must be greater than zero.");
	}

	let randomValue = Math.random() * totalWeight;

	for (const item of items) {
		randomValue -= item.weight;
		if (randomValue <= 0) {
			return item.value;
		}
	}
	return items[items.length - 1].value;
}
