"use client";

import { CardPokemon } from '@/components/card';
import { Button } from '@/components/ui/button';
import { Pokemon, useGetPokemon } from '@/service/useGetPokemon';
import { useEffect, useState } from 'react';

export default function Home() {
  const [page, setPage] = useState(12);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const { data, loading, fetchMore } = useGetPokemon(page);

  useEffect(() => {
    if (data?.pokemons) {
      setPokemonList(data.pokemons);
    }
  }, [data]);

  const handleOnClickLoadMore = async () => {
    const newPage = page + 12;
    setPage(newPage);

    const { data: newData } = await fetchMore({
      variables: { first: newPage },
    });

    if (newData?.pokemons) {
      setPokemonList(newData.pokemons);
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-5'>
      {pokemonList.map((v, i) =>
        <CardPokemon key={i} name={v.name} number={v.number} types={v.types} />
      )}
      <Button onClick={handleOnClickLoadMore}>load more...</Button>
    </div>
  );
}
