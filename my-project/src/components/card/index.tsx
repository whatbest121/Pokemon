import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"

interface CardPokemonProps {
    className?: string
    name: string
    number: string
    types?: string[]
}

export function CardPokemon({ className, name, number, types }: CardPokemonProps) {
    console.log("🚀 ~ CardPokemon ~ name:", name)
    const numberImage = parseInt(number)
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
    return (
        <Card className={cn(" rounded-2xl bg-[#0f172a] text-white shadow-lg", className)}>
            <CardContent className="flex flex-col items-center pt-6 pb-2">
                <div className="w-full rounded-full bg-black/20 flex items-center justify-center mb-2">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numberImage}.png`} alt={name} className=" object-contain" />
                </div>
                <p className="text-sm text-sky-300">#{number}</p>
                <h2 className="text-xl font-bold">{name}</h2>
            </CardContent>
            <CardFooter className="flex justify-center pb-4">
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
            </CardFooter>
        </Card>
    )
}
