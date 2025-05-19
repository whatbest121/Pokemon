"use client";
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { PokementCardBadge } from './PokementCardBadge'
import { useRouter } from "next/navigation";
interface CardEvolutionProps {
    evolutions: {
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
    }[]
}
export const CardEvolution = ({ evolutions }: CardEvolutionProps) => {
    const router = useRouter();
    const handleClick = (name: string) => {
        router.push(`/pokemon/${name}`);
    };
    return (
        <Card className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full mr-2 text-sm">✨</span>
                    Evlutions Pokedex
                </h3>
                <div className="flex justify-around items-center flex-wrap gap-4">
                    {evolutions.map((evo, index) => (
                        <div key={evo.id} className="text-center group">
                            {index > 0 && (
                                <div className="flex justify-center mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                            <div key={index} onClick={() => handleClick(evo.name)} className="cursor-pointer">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/30 rounded-full m-auto w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseInt(evo.number)}.png`}
                                        alt={evo.name}
                                        className="w-24 h-24 mx-auto transition-transform group-hover:scale-110 duration-300"
                                    />
                                </div>
                            </div>
                            <p className="text-sm mt-2 font-semibold">{evo.name}</p>
                            <p className="text-xs text-gray-400">{evo.classification}</p>
                            <div className="flex justify-center gap-1 mt-1">
                                {evo.types.map((type) => (
                                    <PokementCardBadge
                                        key={type}
                                        type={type}
                                    />

                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
