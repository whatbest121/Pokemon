import { GET_POKEMON } from "@/graphql/getPokemons";
import { GET_POKEMON_EVOLUTIONS } from "@/graphql/getPokemonsEvolutions";
import { useQuery } from "@apollo/client";

export type pokemonEvolution = {
  
    id: string,
    name: string,
    evolutions: [
      {
        id: string,
        number: string,
        name: string,
        classification: string,
        types: [
          string
        ],
        resistant: [
          string
        ],
        weaknesses: [
          string
        ],
        fleeRate: number,
        maxCP: number,
        maxHP: number,
        image: string
      }
    ]
  
};

export type UseGetPokemonResult = {
  pokemon: pokemonEvolution;
};

type UseGetPokemonVariables = {
  id?: string,
  name?: string

};

export function useGetPokemonEvolutions(payload: UseGetPokemonVariables) {
  return useQuery<UseGetPokemonResult, UseGetPokemonVariables>(
    GET_POKEMON_EVOLUTIONS,
    {
      variables: { id:payload.id, name:payload.name },
      notifyOnNetworkStatusChange: true,
    }
  );
}

