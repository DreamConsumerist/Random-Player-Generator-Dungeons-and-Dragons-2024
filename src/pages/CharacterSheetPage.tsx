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
				<div>Level: {charData.level}</div>
				<div>Class: {charData.class.name}</div>
				<div>Subclass: {charData.class.subclass}</div>
				<div>
					Abilities: &nbsp;
					{charData.class.abilities.map((ability) => ability.name).join(", ")}
				</div>
				<div>Species: {charData.species.name}</div>{" "}
				<div>
					Abilities: &nbsp;
					{charData.species.abilities.map((ability) => ability.name).join(", ")}
				</div>
			</div>
		);
	}
};
