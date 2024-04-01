import { Pokemon, PokemonList } from "@/app/types";
import { getPokemon, listPokemon } from "@/app/utils/fetchPokemon";
import Image from "next/image";
import React from "react";

const ListB = async () => {
  const pokemons: PokemonList = await listPokemon(4);
  return (
    <div className="flex flex-wrap gap-4">
      {pokemons.results.map((pokemon) => (
        <DetailPokemon name={pokemon.name} key={pokemon.name} />
      ))}
    </div>
  );
};
const DetailPokemon = async ({ name }: { name: string }) => {
  const pokemon: Pokemon = await getPokemon(name);

  return (
    <div className="bg-three space-y-4 border p-2 text-center rounded-md shadow-md">
      <div className="flex justify-center items-center py-4">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={150}
          height={150}
        />
      </div>
      <h1 className="font-bold text-2xl capitalize">{pokemon.name}</h1>
      <div className="px-2 pt-2 pb-2 space-x-2">
        <span className="inline-block text-gray-700 bg-gray-200 text-sm py-1 rounded-full px-3">
          #character
        </span>
        <span className="inline-block text-gray-700 bg-gray-200 text-sm py-1 rounded-full px-3">
          #{pokemon.name}
        </span>
        <span className="inline-block text-gray-700 bg-gray-200 text-sm py-1 rounded-full px-3">
          #photography
        </span>
      </div>
      <p className="px-10 text-sm font-normal text-slate-700 line-clamp-2">{`${pokemon.name} Active ${pokemon.base_experience} Pokemon Character`}</p>
      <h1 className="font-semibold">${pokemon.weight}</h1>
      <button className="rounded-lg shadow-lg bg-black py-2 text-sm text-slate-200 px-5 cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default ListB;
