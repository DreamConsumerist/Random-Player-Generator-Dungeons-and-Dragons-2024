import { useNavigate } from "@tanstack/react-router";
import { GenerateCharSheetInput } from "../common/types";
import { useCharacterStore } from "../store/characterStore";

export const Home = () => {
	const navigate = useNavigate();
	const generate = useCharacterStore((state) => state.generate);
	const HandleGenerationAndRedirect = async () => {
		const charSheetInput: GenerateCharSheetInput = {
			numOpponents: 1,
			difficulty: 3,
			numMagicItems: 1,
			strMagicItems: 1,
		};
		generate(charSheetInput);
		await navigate({ to: "/characterSheetPage" });
	};
	return (
		<div className="bg-blue-500 font-bold w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-white text-6xl">YO</p>
			<button
				className="hover:cursor-pointer"
				type="button"
				onClick={HandleGenerationAndRedirect}
			>
				Click this button for a random character
			</button>
		</div>
	);
};
