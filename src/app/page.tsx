import Image from "next/image";
import { getPokemon } from "./utils/fetchPokemon";

export default async function Home() {
	const pokemon = await getPokemon("charizard");
	return <div className="min-h-screen max-h-full w-full flex flex-col gap-4 items-center justify-center bg-[#FCFCFC] p-20">
		<h1 className="text-4xl font-bold text-center">ProximaHQ Coding Challenge</h1>
		<p>Check out the instructions in the README.md</p>
		<div className="border border-gray-300 bg-white flex flex-col justify-center items-center gap-2 h-40 w-40 rounded-md">
			<h3 className="text-center text-xl font-bold capitalize">{pokemon.name}</h3>
			<Image src={pokemon.sprites.front_default} alt={pokemon.name} width={96} height={96} />
		</div>
	</div>
}
