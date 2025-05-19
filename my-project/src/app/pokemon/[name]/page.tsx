"use client";
import { Skeleton } from '@/components/ui/skeleton';
import { useGetPokemonInfo } from '@/service/useGetPokemonInfo';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { CardInfo } from './CardInfo';
import { CardPower } from './CardPower';
import { CardAttack } from './CardAttack';
import { CardEvolution } from './CardEvolution';
import { useRouter } from "next/navigation";
import { ChevronLeft } from 'lucide-react';
const PokemonDetailPage = () => {
    const router = useRouter();
    const params = useParams();
    const nameParams = params.name as string;
    const [animateStats, setAnimateStats] = useState(false);

    const { data, loading } = useGetPokemonInfo({ name: nameParams });

    useEffect(() => {
        if (data?.pokemon) {
            setTimeout(() => setAnimateStats(true), 300);
        }
    }, [data]);

    if (loading || !data?.pokemon) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black flex items-center justify-center p-6">
                <div className="w-full max-w-4xl">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-8 bg-slate-700 rounded w-64 mb-8"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                            <Skeleton className="h-96 w-full rounded-xl" />
                            <div className="space-y-6">
                                <Skeleton className="h-40 w-full rounded-xl" />
                                <Skeleton className="h-40 w-full rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const {
        classification,
        height,
        maxCP,
        maxHP,
        name,
        number,
        resistant,
        types,
        weaknesses,
        weight,
        attacks,
        evolutions
    } = data.pokemon;

    const numberImage = parseInt(number);


    const fastAttackDamage = attacks.fast.reduce((sum, atk) => sum + atk.damage, 0);
    const specialAttackDamage = attacks.special.reduce((sum, atk) => sum + atk.damage, 0);

    return (
        <div className={`min-h-screen bg-gradient-to-br text-black p-6`}>
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-5 z-0">
                <div className="w-96 h-96 rounded-full bg-white border-8 border-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1/3 h-1/3 rounded-full bg-gray-200 border-8 border-gray-300"></div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 ">

                <div className="flex  items-center gap-7 mb-8">
                    <div onClick={() => router.push("/")} className="cursor-pointer">

                        <ChevronLeft />
                    </div>
                    <h1 className="text-3xl font-bold tracking-wider">
                        Pokedex
                        <span className="text-sm ml-2 text-gray-500">#{number.padStart(3, '0')}</span>
                    </h1>

                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <CardInfo classification={classification} height={height} name={name} numberImage={numberImage} resistant={resistant} types={types} weaknesses={weaknesses} weight={weight} />

                    <div className="space-y-6">
                        <CardPower animateStats={animateStats} fastAttackDamage={fastAttackDamage} maxCP={maxCP} maxHP={maxHP} specialAttackDamage={specialAttackDamage} types={types} />


                        {attacks && (
                            <CardAttack attacks={attacks} />
                        )}

                        {evolutions?.length > 0 && (
                            <CardEvolution evolutions={evolutions} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetailPage;