export const Home = () => {
	return (
		<div className="bg-blue-500 font-bold w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-white text-6xl">YO</p>
			<button
				className="hover:cursor-pointer"
				type="submit"
			>
				Click this button for a random class
			</button>
		</div>
	);
};