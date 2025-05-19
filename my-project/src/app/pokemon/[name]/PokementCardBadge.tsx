import { cn } from "@/lib/utils";

interface PokementCardBadgeProps {
    type: string
}

export const PokementCardBadge = ({ type }: PokementCardBadgeProps) => {

    const colorTag = {
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

    const color = (colorTag as Record<string, string>)[type] || "bg-gray-500";

    return (
        <div
            className={cn(
                "px-4 py-1.5 text-white rounded-full text-sm font-semibold shadow-lg transition-transform hover:scale-105",
                color
            )}
        >

            {type}
        </div>)
}