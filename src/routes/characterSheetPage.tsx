import { createFileRoute } from "@tanstack/react-router";
import { CharacterSheetPage } from "../pages/CharacterSheetPage";

export const Route = createFileRoute("/characterSheetPage")({
	component: CharacterSheetPage,
});
