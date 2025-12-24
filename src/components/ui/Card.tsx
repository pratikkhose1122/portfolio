import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm",
                hoverEffect && "transition-colors duration-300 hover:bg-zinc-800/50 hover:border-zinc-700",
                className
            )}
            {...props}
        />
    );
}
