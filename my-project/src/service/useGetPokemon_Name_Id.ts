import { GET_POKEMON_BY_NAME } from "@/graphql/getPokemonByIdOrName";
import { useLazyQuery } from "@apollo/client";
import { PokemonList } from "./useGetPokemon";

interface Payload {
  name?: string
  id?: string
}
export function useGetPokemon_search() {
  return useLazyQuery<{ pokemon: PokemonList }, Payload>(GET_POKEMON_BY_NAME);
}

