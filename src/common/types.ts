export type FunctionComponent = React.ReactElement | null;

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
	title?: string;
	titleId?: string;
};
export type Heroicon = React.FC<IconProps>;

export interface GenerateCharSheetInput {
	numOpponents: number;
	difficulty: number;
	numMagicItems: number;
	strMagicItems: number;
}
export interface Ability {
	name: string;
	realFeatures?: Feature[];
	trimFeatures?: Feature[];
	levelReq?: number;
}
export interface Armor {
	name: string;
	armorClass: string;
	ability?: Ability[];
}
export interface AssocAbilities {
	assoc: string;
	abilities: Ability[];
	spellAbility?: string;
}
export interface CharDetails {
	age: number;
	background: string;
	relationship?: string;
}
export interface CharacterSheet {
	// name: string,
	level: number;
	class: Class;
	species: Species;
	stats: StatArray;
	// currHp: number,
	// maxHp: number,
	// raceAbilities: Ability[],
	// classAbilities: Ability[],
	// deathSaves: DeathSaves,
	// weapons: Weapon[],
	// armor: Armor[],
	// armorClass: number,
	// lore?: CharDetails
}
export interface Class {
	name: string;
	subclass?: string;
	abilities: Ability[];
	spellAbility?: string;
}
export interface ClassSubclasses {
	class: string;
	subclass: string[];
}
export interface DamageDice {
	numDice: number;
	damageType: string;
	diceSides: number;
}
export interface DeathSaves {
	successes: number;
	failures: number;
}
// export interface Dragonborn
export interface Feature {
	name?: string;
	description: string;
	actionEcon?: string;
	maxUses?: number | string;
	currUses?: number | string;
	canBeEnabled: boolean;
	enabled?: boolean;
	duration?: number; //seconds, converted to turns
	refreshTime?: string;
	options?: string[];
}
export interface Species {
	name: string;
	subspecies?: string;
	abilities: Ability[];
	creatureType: string;
	size: string[];
	speed: Speed;
	resistances?: string[];
	darkvision?: number;
}
export interface Speed {
	groundSpeed: number;
	flySpeed?: number;
	burrowSpeed?: number;
	swimSpeed?: number;
	climbSpeed?: number;
}
export interface StatArray {
	str: number;
	dex: number;
	con: number;
	int: number;
	wis: number;
	cha: number;
}
export interface Weapon {
	name: string;
	masteryType: string;
	damage: DamageDice[];
	ability?: Ability[];
	bonusAmt: number;
}
