import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
interface CardAttackProps {
    attacks: {
        fast: {
            name: string;
            type: string;
            damage: number;
        }[];
        special: {
            name: string;
            type: string;
            damage: number;
        }[];
    }
}
export const CardAttack = ({ attacks }: CardAttackProps) => {
    return (
        <Card className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full mr-2 text-sm">⚡</span>
                    Attack
                </h3>

                <div className="space-y-4">
                    <div>
                        <h4 className="text-md font-semibold mb-2 text-gray-300">Fast Attacks</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {attacks.fast.map((attack, index) => (
                                <div key={index} className="bg-slate-700/60 p-2 rounded-lg flex justify-between">
                                    <span>{attack.name}</span>
                                    <span className="font-bold text-yellow-400">{attack.damage}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold mb-2 text-gray-300">Special Attacks</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {attacks.special.map((attack, index) => (
                                <div key={index} className="bg-slate-700/60 p-2 rounded-lg flex justify-between">
                                    <span>{attack.name}</span>
                                    <span className="font-bold text-yellow-400">{attack.damage}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
