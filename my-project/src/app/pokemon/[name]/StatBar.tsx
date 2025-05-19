
interface StatBarProps {
    label: string
    value: number
    maxValue: number
    color: string
}
export const StatBar = ({ label, value, maxValue = 200, color }: StatBarProps) => {


    const percentage = Math.min(100, (value / maxValue) * 100);

    return (
        <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{label}</span>
                <span className="font-bold">{value}</span>
            </div>
            <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color || "bg-blue-500"} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};