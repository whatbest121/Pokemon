import { GET_POKEMON_BY_NAME } from "@/graphql/getPokemonByIdOrName";
import { useLazyQuery } from "@apollo/client";
import { Pokemon } from "./useGetPokemon";

interface Payload {
  name?: string
  id?: string
}
export function useGetPokemon_search() {
  return useLazyQuery<{ pokemon: Pokemon }, Payload>(GET_POKEMON_BY_NAME);
}

