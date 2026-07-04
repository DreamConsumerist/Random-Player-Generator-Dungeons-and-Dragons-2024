export type FunctionComponent = React.ReactElement | null;

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
	title?: string;
	titleId?: string;
};
export type Heroicon = React.FC<IconProps>;

export interface GenerateCharSheetInput {
	numOpponents: number,
	difficulty: number,
	numMagicItems: number,
	strMagicItems: number,
}

export interface CharacterSheet {
	// name: string,
	level: number,
	// class: Class,
	// race: Race,
	// stats: StatArray,
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

export interface StatArray {
	str: number,
	dex: number,
	con: number,
	int: number,
	wis: number,
	cha: number,
}

export interface Class { 
	name: string,
	subclass: string,
	abilities: Ability[]
}

export interface Race {
	name: string,
	abilities: Ability[],
	speed: Speed
}

export interface Speed {
	groundSpeed: number,
	flySpeed: number,
	burrowSpeed: number,
	swimSpeed: number,
	climbSpeed: number,
}

export interface Ability {
	name: string,
	availUses: number,
	maxUses: number,
	feature: string,
	canBeActivated: boolean,
	active: boolean,
}

export interface DeathSaves { 
	successes: number,
	failures: number,
}

export interface Weapon {
	name: string,
	masteryType: string,
	damage: DamageDice[],
	ability?: Ability[],
	bonusAmt: number
}

export interface Armor {
	name: string,
	armorClass: string,
	ability?: Ability[]
}

export interface DamageDice {
	numDice: number,
	damageType: string,
	diceSides: number
}

export interface CharDetails {
	age: number,
	background: string,
	relationship?: string
}