import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { PokementCardBadge } from './PokementCardBadge'
import { averageWithUnit } from '@/lib/utils'
import Image from "next/image"

interface CardInfoProps {
    name: string
    types: string[]
    height: {
        maximum: string
        minimum: string
    }
    weight: {
        maximum: string
        minimum: string
    }
    classification: string
    resistant: string[]
    weaknesses: string[]
    numberImage: number

}
export const CardInfo = ({ classification, height, name, resistant, types, weaknesses, weight, numberImage }: CardInfoProps) => {
    return (
        <Card className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700">

            <div className="h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <CardContent className="p-6 ">
                <h2 className="text-2xl font-bold">{name}</h2>
                <div className="flex justify-center mb-6 relative">


                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/50 rounded-full m-auto w-48 h-48 flex items-center justify-center opacity-70"></div>

                    <Image
                    width={300}
                    height={300}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numberImage}.png`}
                        alt={name}
                        className="w-56 h-56 object-contain transition-transform hover:scale-110 duration-300 z-10 drop-shadow-xl"
                    />
                </div>

                <div className="flex justify-center gap-2 mb-4">
                    {types?.map((type) => (
                        <PokementCardBadge
                            key={type}
                            type={type}

                        />

                    ))}
                </div>

                <div className="text-left space-y-4 text-sm mb-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-700/60 p-3 rounded-lg">
                            <p className="text-gray-300 text-xs mb-1">HEIGHT</p>
                            <p className="font-semibold">{averageWithUnit(height.maximum, height.minimum)}</p>
                        </div>
                        <div className="bg-slate-700/60 p-3 rounded-lg">
                            <p className="text-gray-300 text-xs mb-1">WEIGHT</p>
                            <p className="font-semibold">{averageWithUnit(weight.maximum, weight.minimum)}</p>
                        </div>
                    </div>

                    <div className="bg-slate-700/60 p-3 rounded-lg">
                        <p className="text-gray-300 text-xs mb-1">SEX</p>
                        <p className="font-semibold">♂ / ♀</p>
                    </div>

                    <div className="bg-slate-700/60 p-3 rounded-lg">
                        <p className="text-gray-300 text-xs mb-1">CLASSIFICATION</p>
                        <p className="font-semibold">{classification}</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <p className="font-semibold mb-2 text-gray-300">Resistant</p>
                        <div className="flex flex-wrap gap-2">
                            {resistant?.map((type) => (
                                <PokementCardBadge key={type} type={type} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold mb-2 text-gray-300">Weaknesses</p>
                        <div className="flex flex-wrap gap-2">
                            {weaknesses?.map((type) => (
                                <PokementCardBadge key={type} type={type} />
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

    )
}
