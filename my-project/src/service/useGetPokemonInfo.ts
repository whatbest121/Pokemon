import { GET_POKEMON_INFO } from "@/graphql/getPokemonsInfo";
import { useQuery } from "@apollo/client";

export type pokemonInfo = {

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
  attacks: {
    fast: [
      {
        name: string,
        type: string,
        damage: number
      }
    ],
    special: [
      {
        name: string,
        type: string,
        damage: number
      }
    ]
  }
  evolutions: [
    {
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
    }
  ]

};

export type UseGetPokemonResult = {
  pokemon: pokemonInfo;
};

type UseGetPokemonVariables = {
  id?: string,
  name?: string

};

export function useGetPokemonInfo({ id, name }: UseGetPokemonVariables) {
  return useQuery<UseGetPokemonResult, UseGetPokemonVariables>(
    GET_POKEMON_INFO,
    {
      variables: { id, name },
      notifyOnNetworkStatusChange: true,
    }
  );
}

