"use client";

import { CardPokemon } from '@/components/card';
import { SearchPokemon } from '@/components/search';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Pokemon, useGetPokemon } from '@/service/useGetPokemon';
import { useGetPokemon_search } from '@/service/useGetPokemon_Name_Id';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(12);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [name, setName] = useState("")

  const { data, loading, fetchMore } = useGetPokemon(12);

  const [searchPokemon, { loading: loadingSearch }] = useGetPokemon_search();

  useEffect(() => {
    if (data?.pokemons) {
      setPokemonList(data.pokemons);
    }
  }, [data]);

  const handleOnClickSearch = () => {
    searchPokemon({ variables: { name } }).then((res) => {
      if (res.data) {
        setPokemonList([res.data.pokemon]);
      }
    });
  };

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

  const handleClick = (name: string) => {
    router.push(`/pokemon/${name}`);
  };

  return (
    <div>
      <SearchPokemon handleOnClickSearch={handleOnClickSearch} setName={setName} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-5'>

        {loadingSearch || loading ? (
          Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-120 w-full rounded-xl" />
          ))
        ) : (
          pokemonList.map((v, i) => (
            <div key={i} onClick={() => handleClick(v.name)} className="cursor-pointer">
              <CardPokemon key={i} name={v.name} number={v.number} types={v.types} />
            </div>
          ))
        )}

      </div>
      <Button onClick={handleOnClickLoadMore}>load more...</Button>
    </div>
  );
}
