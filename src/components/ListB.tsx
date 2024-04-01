import { Pokemon, PokemonList } from "@/app/types";
import { getPokemon, listPokemon } from "@/app/utils/fetchPokemon";
import Image from "next/image";
import React from "react";
// Define the interface for the props
interface ListProps {
  fontFamily: "Inter" | "Poppins";
  headerSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  paragraphSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  backgroundColor: string;
  fontColor: string;
}

// Extra prop for additional functionality
interface ExtraProps {
  name: string;
}

// ListB component displays a list of Pokemon with specified styles and an extra prop

const ListB: React.FC<ListProps> = async ({
  fontFamily,
  headerSize,
  paragraphSize,
  backgroundColor,
  fontColor,
}) => {
  // Fetch a list of Pokemons

  const pokemons: PokemonList = await listPokemon(4);
  return (
    <div className="container w-full h-full space-y-0">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        {pokemons.results.map((pokemon) => (
          <DetailPokemon
            name={pokemon.name}
            key={pokemon.name}
            fontFamily={fontFamily}
            headerSize={headerSize}
            paragraphSize={paragraphSize}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
          />
        ))}
      </div>
    </div>
  );
};
// DetailPokemon component displays detailed information about a specific Pokemon

const DetailPokemon: React.FC<ListProps & ExtraProps> = async ({
  fontFamily,
  headerSize,
  paragraphSize,
  backgroundColor,
  fontColor,
  name,
}) => {
  // Fetch details of the Pokemon by name

  const pokemon: Pokemon = await getPokemon(name);

  return (
    <div
      className={`bg-three border p-2 text-center rounded-md bg-${backgroundColor} shadow-md w-200 px-10 h-fit`}
    >
      {pokemon ? (
        <>
          <div className="flex justify-center items-center py-4">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={150}
              height={150}
            />
          </div>
          <h1
            className={`font-${fontFamily} text-left text-${headerSize} font-bold text-${fontColor} capitalize py-1 text-center`}
          >
            {pokemon.name}
          </h1>
          <div className="px-2 pt-2 pb-2 space-x-2 space-y-2">
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
          <p
            className={`font-${fontFamily} py-1 text-${paragraphSize} line-clamp-4`}
          >
            {`${pokemon.name} Active ${pokemon.base_experience} Pokemon Character`}
          </p>

          <div className="grid w-full place-items-center rounded-lg p-4">
            <div className="flex items-center gap-2 font-bold text-blue-gray-500">
              <div className="inline-flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer text-blue-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    ></path>
                  </svg>
                </span>
              </div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500">
                {pokemon.height} Reviews
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-2xl">${pokemon.weight}</p>
            <button className="rounded-lg shadow-lg bg-black hover:text-black border hover:bg-white hover:border py-2 text-sm text-slate-200 px-5 cursor-pointer">
              Add to Cart
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ListB;
