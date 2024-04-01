import { Pokemon, PokemonList } from "@/app/types";
import { listPokemon } from "@/app/utils/fetchPokemon";
import React from "react";
import Image from "next/image";
// Props interface for Customization
interface ListProps {
  fontFamily: "Inter" | "Poppins";
  headerSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  paragraphSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  backgroundColor: string;
  fontColor: string;
}

// Displays a list of Pokemon

const ListA: React.FC<ListProps> = async ({
  fontFamily,
  headerSize,
  paragraphSize,
  backgroundColor,
  fontColor,
}) => {
  // Fetch a list of Pokemons
  const pokemons: PokemonList = await listPokemon(10);

  return (
    <div className="flex gap-4 flex-wrap">
      {pokemons.results.map((pokemon) => (
        <div
          className={`border border-gray-300 bg-${backgroundColor} flex flex-col justify-center items-center gap-2 w-80 rounded-lg`}
          key={pokemon.name}
        >
          <Image
            src={"https://source.unsplash.com/random"}
            alt={pokemon.name}
            width={320}
            height={220}
          />
          <div className="py-4 px-4">
            <span className="inline-block bg-red-200 text-gray-700 text-xs py-1 rounded-full px-3">
              HIGHLIGHT
            </span>
            <h3
              className={`font-${fontFamily} text-left text-${headerSize} font-bold text-${fontColor} capitalize py-1`}
            >
              {pokemon.name}
            </h3>
            <p
              className={`font-${fontFamily} py-1 text-${paragraphSize} line-clamp-4`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex
              saepe accusantium, rerum dignissimos commodi incidunt harum
              tempore sed quae quo ad, deserunt voluptate nobis ipsa libero vel
              hic perspiciatis.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListA;
