import { PokemonList } from "@/app/types";
import { listPokemon } from "@/app/utils/fetchPokemon";
import React from "react";
import Image from "next/image";
const ListA = async () => {
  const pokemons: any = await listPokemon(10);

  return (
    <div className="flex gap-4 flex-wrap">
      {pokemons.results.map((pokemon: any) => (
        <div
          className="border border-gray-300 bg-white flex flex-col justify-center items-center gap-2 w-80 rounded-md"
          key={pokemon.name}
        >
          <Image
            src={"https://source.unsplash.com/random"}
            alt={pokemon.name}
            width={320}
            height={220}

          />
          <div className="p-2">
            <h3 className="text-left text-xl font-bold capitalize">
              {pokemon.name}
            </h3>
            <p className="py-1">
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
