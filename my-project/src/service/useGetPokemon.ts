import { GET_POKEMON_BY_NAME } from "@/graphql/test";
import { useQuery } from "@apollo/client";

export type Pokemon = {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
};

export type UseGetPokemonResult = {
  pokemons: Pokemon[];
};

type UseGetPokemonVariables = {
  first: number;
};

export function useGetPokemon(first: number) {
  return useQuery<UseGetPokemonResult, UseGetPokemonVariables>(
    GET_POKEMON_BY_NAME,
    {
      variables: { first },
      notifyOnNetworkStatusChange: true,
    }
  );
}

