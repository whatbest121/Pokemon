import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";

interface CardPokemonProps {
    className?: string;
    name: string;
    number: string;
    types?: string[];
}

export function CardPokemon({ className, name, number, types }: CardPokemonProps) {
    const numberImage = parseInt(number);
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

    // Background gradient based on type
    const getBgGradient = () => {
        if (!types || types.length === 0) return "from-slate-800 to-slate-900";

        const mainType = types[0];
        const bgMap = {
            Fire: "from-red-700 to-orange-900",
            Water: "from-blue-700 to-blue-900",
            Grass: "from-green-700 to-emerald-900",
            Electric: "from-yellow-600 to-amber-900",
            Poison: "from-purple-700 to-purple-900",
            Flying: "from-sky-600 to-sky-900",
            Psychic: "from-pink-600 to-pink-900",
            Bug: "from-lime-700 to-green-900",
            Normal: "from-gray-700 to-gray-900",
            Ground: "from-amber-700 to-amber-900",
            Fairy: "from-pink-400 to-pink-700",
            Fighting: "from-red-800 to-red-950",
            Rock: "from-stone-700 to-stone-900",
            Ghost: "from-indigo-800 to-violet-950",
            Ice: "from-cyan-500 to-cyan-900",
            Dragon: "from-purple-700 to-indigo-900",
            Dark: "from-gray-800 to-gray-950",
            Steel: "from-gray-600 to-slate-800",
        };
        return (bgMap as Record<string, string>)[mainType] || "from-slate-800 to-slate-900";
    };
    return (
        <Card
            className={cn(
                "rounded-2xl bg-gradient-to-br border-0 shadow-xl transition-all duration-300 overflow-hidden",
                getBgGradient(),
                className
            )}
        >
            <div className="absolute top-0 left-0 p-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm text-xs font-bold text-white">
                    #{number}
                </span>
            </div>

            <CardContent className="flex flex-col items-center pt-10 pb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <div className="w-32 h-32 rounded-full bg-white/50"></div>
                    <div className="absolute w-32 h-1 bg-white/80"></div>
                    <div className="absolute w-8 h-8 rounded-full bg-white/80"></div>
                </div>

                <div className="relative z-10 w-32 h-32 mb-2 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/10 rounded-full transform scale-75 blur-lg"></div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numberImage}.png`}
                        alt={name}
                        className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300 transform hover:scale-110 z-10"
                    />
                </div>

                <h2 className="text-xl font-bold text-white mt-2 capitalize">{name}</h2>
            </CardContent>

            <CardFooter className="flex justify-center gap-2 pb-4">
                {types?.map((type) => (
                    <Badge
                        key={type}
                        className={cn(
                            "px-3 py-1 text-white rounded-full text-xs font-semibold shadow-md",
                            colorTag[type] || "bg-gray-500"
                        )}
                    >
                        {type}
                    </Badge>
                ))}
            </CardFooter>
        </Card>
    );
}