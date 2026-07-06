import { createFileRoute } from "@tanstack/react-router";
import { CharacterSheetPage } from "../pages/CharacterSheetPage";

export const Route = createFileRoute("/characterSheetPage")({
	validateSearch: (search: Record<string, unknown>): { charData?: string } => ({
		charData:
			typeof search["charData"] === "string" ? search["charData"] : undefined,
	}),
	component: CharacterSheetPage,
});
