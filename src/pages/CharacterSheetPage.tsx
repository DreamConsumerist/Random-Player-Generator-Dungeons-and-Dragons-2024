import { Link } from "@tanstack/react-router";
import { useCharacterStore } from "../store/characterStore";

export const CharacterSheetPage = () => {
	const charData = useCharacterStore((state) => state.character);
	if (!charData) {
		return (
			<div>
				No character yet — <Link to="/">generate one</Link>.
			</div>
		);
	}
	return (
		<div>
			<div>
				<strong>{charData.name}</strong>
			</div>
			<div>
				<strong>Level:</strong> {charData.level}
			</div>
			<br />
			<div>
				<strong>Class:</strong> {charData.class.name}
			</div>
			<div>
				<strong>Subclass:</strong> {charData.class.subclass}
			</div>
			<div>
				<strong>Class Abilities:</strong>
				<ul className="list-disc list-inside">
					{charData.class.abilities.map((ability, index) => (
						<li key={`class-ability-${index}`}>{ability.name}</li>
					))}
				</ul>
			</div>
			<br />
			<div>
				<strong>Species:</strong> {charData.species.subspecies}&nbsp;
				{charData.species.name}
			</div>
			<div>
				<strong>Species Abilities:</strong>
				<ul className="list-disc list-inside">
					{charData.species.abilities.map((ability, index) => (
						<li key={`species-ability-${index}`}>{ability.name}</li>
					))}
				</ul>
			</div>
			<br />
			<div>
				<strong>Stats</strong>
				<div>STR: {charData.stats.str}</div>
				<div>DEX: {charData.stats.dex}</div>
				<div>CON: {charData.stats.con}</div>
				<div>INT: {charData.stats.int}</div>
				<div>WIS: {charData.stats.wis}</div>
				<div>CHA: {charData.stats.cha}</div>
			</div>
			<br />
			<div>
				<strong>HP</strong>
				<div>
					{charData.currHp} / {charData.maxHp}{" "}
				</div>
			</div>
		</div>
	);
};
