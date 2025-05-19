import React from 'react'
import { StatBar } from './StatBar';
import { Card, CardContent } from '@/components/ui/card';

interface CardPowerProps {
    types: string[]
    maxHP: number
    maxCP: number
    fastAttackDamage: number
    specialAttackDamage: number
    animateStats: boolean

}
export const CardPower = ({ animateStats, fastAttackDamage, maxCP, maxHP, specialAttackDamage, types }: CardPowerProps) => {
    const mainType = types && types.length > 0 ? types[0] : "Normal";
    const statBarColors = {
        hp: mainType === "Grass" ? "bg-green-500" :
            mainType === "Fire" ? "bg-red-500" :
                mainType === "Water" ? "bg-blue-500" :
                    mainType === "Electric" ? "bg-yellow-500" :
                        "bg-blue-500",
        cp: mainType === "Grass" ? "bg-green-600" :
            mainType === "Fire" ? "bg-red-600" :
                mainType === "Water" ? "bg-blue-600" :
                    mainType === "Electric" ? "bg-yellow-600" :
                        "bg-purple-500",
        fast: mainType === "Grass" ? "bg-green-400" :
            mainType === "Fire" ? "bg-red-400" :
                mainType === "Water" ? "bg-blue-400" :
                    mainType === "Electric" ? "bg-yellow-400" :
                        "bg-orange-500",
        special: mainType === "Grass" ? "bg-green-700" :
            mainType === "Fire" ? "bg-red-700" :
                mainType === "Water" ? "bg-blue-700" :
                    mainType === "Electric" ? "bg-yellow-700" :
                        "bg-pink-500",
    };
    const stats = [
        { label: "HP", value: maxHP, maxValue: 150, colorKey: "hp" },
        { label: "MAX CP", value: maxCP, maxValue: 3000, colorKey: "cp" },
        { label: "ATTACK FAST", value: fastAttackDamage, maxValue: 100, colorKey: "fast" },
        { label: "ATTACK SPECIAL", value: specialAttackDamage, maxValue: 300, colorKey: "special" },
    ]

    return (
        <Card className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                    <span className="bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full mr-2 text-sm">⚔️</span>
                    Powwer
                </h3>
                <div className="space-y-4">
                    {
                        stats.map(({ label, value, maxValue, colorKey }) => (
                            <StatBar
                                key={label}
                                label={label}
                                value={value}
                                maxValue={maxValue}
                                color={animateStats ? (statBarColors as Record<string, string>)[colorKey] : "bg-transparent"}
                            />
                        ))
                    }
                </div>
            </CardContent>
        </Card>

    )
}
