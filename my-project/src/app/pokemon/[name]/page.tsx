"use client";
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { averageWithUnit, cn } from '@/lib/utils';
import { useGetPokemon_search } from '@/service/useGetPokemon_Name_Id';
import { useGetPokemonAttack } from '@/service/useGetPokemonAttack copy';
import { useGetPokemonEvolutions } from '@/service/useGetPokemonEvolutions';
import { Badge } from 'lucide-react';
import React, { useEffect } from 'react'
interface PageProps {
    params: {
        name: string;
    };
}
const PokemonDetailPage = ({ params }: PageProps) => {
    const { name: nameParams } = params
    const [searchPokemon, { data, loading }] = useGetPokemon_search();
    const { data: dataAttack, loading: loadingAttack, error: errorAttack } = useGetPokemonAttack({ name: nameParams })
    const { data: dataEvolution, loading: loadingEvolution, error: errorEvolutions } = useGetPokemonEvolutions({ name: nameParams })

    useEffect(() => {
        if (typeof nameParams === 'string') {
            searchPokemon({ variables: { name: nameParams } });
        }
    }, [nameParams]);
    if (!data) return (
        <Skeleton className="h-120 w-full rounded-xl" />
    )

    const { pokemon: { classification, fleeRate, height, id, image, maxCP, maxHP, name, number, resistant, types, weaknesses, weight } } = data
    const colorTag: Record<string, string> = {
        Normal: "bg-gray-400",
        Fire: "bg-red-600",
        Water: "bg-blue-600",
        Electric: "bg-yellow-400",
        Grass: "bg-green-600",
        Ice: "bg-cyan-300",
        Fighting: "bg-red-800",
        Poison: "bg-purple-600",
        Ground: "bg-yellow-700",
        Flying: "bg-sky-500",
        Psychic: "bg-pink-500",
        Bug: "bg-lime-500",
        Rock: "bg-yellow-800",
        Ghost: "bg-indigo-600",
        Dragon: "bg-purple-800",
        Dark: "bg-gray-800",
        Steel: "bg-gray-500",
        Fairy: "bg-pink-300",
    };
    const numberImage = parseInt(number)
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white p-6">
            <h1 className="text-center text-3xl font-bold mb-6">โปเกเด็กซ์</h1>

            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Pokemon Basic Info */}
                <Card className="bg-slate-800 rounded-xl shadow-xl">
                    <CardContent className="p-6 text-center">
                        <p className="text-sm text-sky-400">{number}</p>
                        <h2 className="text-2xl font-bold mb-2">{name}</h2>
                        <div className="flex justify-center mb-4">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numberImage}.png`}
                                alt={name}
                                className="w-48 h-48 object-contain"
                            />
                        </div>
                        <div className="flex justify-center gap-2 mb-2">
                            {types?.map((type) => (
                                <Badge
                                    key={type}
                                    className={cn(
                                        "px-4 py-1 text-white rounded-full text-sm font-semibold",
                                        colorTag[type] || "bg-gray-500"
                                    )}
                                >
                                    {type}
                                </Badge>
                            ))}

                        </div>
                        <div className="text-left space-y-1 text-sm">
                            <p><strong>height:</strong>{averageWithUnit(height.maximum, height.minimum)}</p>
                            <p><strong>weight:</strong> {averageWithUnit(weight.maximum, weight.minimum)}</p>
                            <p><strong>เพศ:</strong> ♂ / ♀</p>
                            <p><strong>classification:</strong>{classification}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Right: Stats & Evolution */}
                <div className="space-y-6">
                    <Card className="bg-slate-800 rounded-xl shadow-lg">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-4">ค่าพลัง</h3>
                            <div className="space-y-2">
                                {[
                                    { label: "HP", value: 45 },
                                    { label: "โจมตี", value: 49 },
                                    { label: "ป้องกัน", value: 49 },
                                    { label: "โจมตีพิเศษ", value: 65 },
                                    { label: "ป้องกันพิเศษ", value: 65 },
                                    { label: "ความเร็ว", value: 45 },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className="flex justify-between text-sm">
                                            <span>{stat.label}</span>
                                            <span>{stat.value}</span>
                                        </div>
                                        <Progress value={stat.value} className="h-2 bg-slate-600" />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-800 rounded-xl shadow-lg">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-4">วิวัฒนาการโปเกมอน</h3>
                            <div className="flex justify-around items-center">
                                {[
                                    { id: 1, name: "ฟูชิกิดาเนะ" },
                                    { id: 2, name: "ฟูชิโซ" },
                                    { id: 3, name: "ฟูชิกิบานะ" },
                                ].map((poke) => (
                                    <div key={poke.id} className="text-center">
                                        <img
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                                            alt={poke.name}
                                            className="w-24 h-24 mx-auto"
                                        />
                                        <p className="text-sm mt-2">{poke.name}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10 bg-slate-700 p-4 rounded-md text-sm">
                <p className="font-bold mb-2">เวอร์ชัน:</p>
                <p>
                    ในช่วงเวลากลางวันหลังจากเกิดมาแล้ว จะดูดซับแสงอาทิตย์สะสมไว้ในเมล็ดที่อยู่กลางหลังเพื่อเติบโตให้เต็มโต
                </p>
            </div>
        </div>
    )
}

export default PokemonDetailPage
