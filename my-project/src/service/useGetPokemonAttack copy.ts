import { GET_POKEMON } from "@/graphql/getPokemons";
import { GET_POKEMON_Attack } from "@/graphql/getPokemonsAttack";
import { useQuery } from "@apollo/client";

export type pokemonAttack = {

  id: string,
  name: string,
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
};

export type UseGetPokemonResult = {
  pokemon: pokemonAttack;
};

type UseGetPokemonVariables = {
  id?: string,
  name?: string
};

export function useGetPokemonAttack(payload: UseGetPokemonVariables) {
  return useQuery<UseGetPokemonResult, UseGetPokemonVariables>(
    GET_POKEMON_Attack,
    {
      variables: { name: payload.name, id: payload.id },
      notifyOnNetworkStatusChange: true,
    }
  );
}

