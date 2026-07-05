import { getRouteApi } from "@tanstack/react-router";
import { CharacterSheet } from "../common/types";

export const CharacterSheetPage = () => {
	const routeApi = getRouteApi("/characterSheetPage");
	const searchParameters = routeApi.useSearch();
	const rawCharData = searchParameters.charData;
	if (!rawCharData) {
		return <div>Missing data to generate a character</div>;
	} else {
		const charData = JSON.parse(rawCharData) as CharacterSheet;
		return (
			<div>
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
					<strong>Species:</strong> {charData.species.name}
				</div>
				<div>
					<strong>Species Abilities:</strong>
					<ul className="list-disc list-inside">
						{charData.species.abilities.map((ability, index) => (
							<li key={`class-ability-${index}`}>{ability.name}</li>
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
			</div>
		);
	}
};
