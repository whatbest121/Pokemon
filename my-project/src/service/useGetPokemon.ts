import { GET_POKEMON } from "@/graphql/getPokemons";
import { useQuery } from "@apollo/client";

export type PokemonList = {
  id: string;
  number: string;
  name: string;
  types: string[];
};

export type UseGetPokemonResult = {
  pokemons: PokemonList[];
};

type UseGetPokemonVariables = {
  first: number;
};

export function useGetPokemon(first: number) {
  return useQuery<UseGetPokemonResult, UseGetPokemonVariables>(
    GET_POKEMON,
    {
      variables: { first },
      notifyOnNetworkStatusChange: true,
    }
  );
}

