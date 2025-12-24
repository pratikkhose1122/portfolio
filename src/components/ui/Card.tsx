import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-2xl p-6",
                className
            )}
            {...props}
        />
    );
}
