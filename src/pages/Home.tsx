import { useNavigate } from "@tanstack/react-router";
import charSheetGeneration from "../utils/app-logic/charSheetGeneration";
import { CharacterSheet, GenerateCharSheetInput } from "../common/types";

export const Home = () => {
	const navigate = useNavigate();
	const HandleGenerationAndRedirect = async () => {
		const charSheetInput: GenerateCharSheetInput = {
			numOpponents: 1,
			difficulty: 3,
			numMagicItems: 1,
			strMagicItems: 1,
		};
		const newCharSheet: CharacterSheet = charSheetGeneration(charSheetInput);
		await navigate({
			to: "/characterSheetPage",
			search: { charData: JSON.stringify(newCharSheet) },
		});
	};
	return (
		<div className="bg-blue-500 font-bold w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-white text-6xl">YO</p>
			<button
				className="hover:cursor-pointer"
				type="submit"
				onClick={HandleGenerationAndRedirect}
			>
				Click this button for a random character
			</button>
		</div>
	);
};
