"use client";
import { CardPokemon } from '@/components/card';
import { SearchPokemon } from '@/components/search';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { PokemonList, useGetPokemon } from '@/service/useGetPokemon';
import { useGetPokemon_search } from '@/service/useGetPokemon_Name_Id';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import Image from "next/image"

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(12);
  const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
  const [name, setName] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { data, loading, fetchMore } = useGetPokemon(12);
  const [searchPokemon, { loading: loadingSearch }] = useGetPokemon_search();


  useEffect(() => {
    if (data?.pokemons && pokemonList.length === 0) {
      setPokemonList(data.pokemons);
    }
  }, [data, pokemonList.length]);

  const handleOnClickSearch = () => {
    if (!name.trim()) return;

    searchPokemon({ variables: { name: name.toLowerCase() } }).then((res) => {
      if (res.data?.pokemon) {
        setPokemonList([res.data.pokemon]);
      }
    });
  };

  const handleOnClickLoadMore = async () => {
    setIsLoadingMore(true);
    const newPage = page + 12;
    setPage(newPage);

    const { data: newData } = await fetchMore({
      variables: { first: newPage },
    });

    if (newData?.pokemons) {
      setPokemonList((prev) => [...prev, ...newData.pokemons.slice(prev.length)]);
    }
    setIsLoadingMore(false);
  };

  const handleClick = (name: string) => {
    router.push(`/pokemon/${name}`);
  };

  const handleClearSearch = () => {
    if (data?.pokemons) {
      setPokemonList(data.pokemons);
      setName("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
        <div className="w-[80vh] h-[80vh] rounded-full bg-white border-[20px] border-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/3 h-1/3 rounded-full bg-gray-200 border-[20px] border-gray-300"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Image
              src="/pokemon-logo.png"
              alt="Pokemon Logo"
              height={12}
              width={12}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                document.getElementById('text-logo')!.style.display = 'block';
              }}
            />
            <div id="text-logo" className="text-4xl font-extrabold text-yellow-400 tracking-wider" style={{ display: 'none' }}>
              &quot;โปเกเด็กซ์&quot;
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <SearchPokemon
              setName={setName}
              handleOnClickSearch={handleOnClickSearch}
              name={name}
              handleClearSearch={handleClearSearch}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {loadingSearch || (loading && pokemonList.length === 0) ? (
            Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <Skeleton className="h-64 rounded-xl" />
              </div>
            ))
          ) : (
            <>
              {pokemonList.length > 0 ? (
                pokemonList.map((pokemon, i) => (
                  <div
                    key={i}
                    onClick={() => handleClick(pokemon.name)}
                    className="transform transition duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    <CardPokemon name={pokemon.name} number={pokemon.number} types={pokemon.types} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="bg-slate-800/80 rounded-lg p-8 max-w-md mx-auto">
                    <Image
                      width={12}
                      height={12}
                      src="/pokemon-not-found.png"
                      alt="Pokemon Not Found"
                      className="w-24 h-24 mx-auto mb-6 opacity-60"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                    <div className="text-xl font-bold text-white mb-2">&quot;ไม่พบโปเกมอน!&quot;</div>
                    <div className="text-gray-400">&quot;ไม่พบโปเกมอนชื่อ {name} ลองค้นหาชื่ออื่นดูนะ&quot;</div>

                  </div>
                </div>
              )}

              {isLoadingMore &&
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={`loading-more-${i}`} className="animate-pulse">
                    <Skeleton className="h-64 rounded-xl" />
                  </div>
                ))
              }
            </>
          )}
        </div>

        {pokemonList.length > 0 && pokemonList.length % 12 === 0 && !name && (
          <div className="flex justify-center py-10">
            <Button
              onClick={handleOnClickLoadMore}
              disabled={isLoadingMore}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-6 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              {isLoadingMore ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  กำลังโหลด...
                </div>
              ) : "โหลดเพิ่มเติม"}
            </Button>
          </div>
        )}

        <footer className="text-center mt-12 border-t border-gray-800 pt-6 text-gray-400">
          <div>&quot;2025 โปเกเด็กซ์ | ข้อมูลจาก PokeAPI&quot;</div>


        </footer>
      </div>
    </div>
  );
}