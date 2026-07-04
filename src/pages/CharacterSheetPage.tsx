import { useSearch } from "@tanstack/react-router";
import { CharacterSheet } from "../common/types";

export const CharacterSheetPage = () => {
	const searchParameters = useSearch({ from: "/characterSheetPage" });
	const rawCharData = searchParameters["charData"];
	if (!rawCharData) {
		return <div>Missing data to generate a character</div>;
	} else {
		const charData = JSON.parse(rawCharData) as CharacterSheet;
		return <div>Hey there level {charData.level}</div>;
	}
};
