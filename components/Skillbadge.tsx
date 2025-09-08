import { Badge } from "@/components/ui/badge";


export function SkillBadge({ label, level }: { label: string; level?: number }) {
    return (
        <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-sm">{label}</Badge>
            {typeof level === "number" && (
                <div className="h-2 w-40 bg-muted rounded">
                    <div className="h-2 rounded bg-foreground/80" style={{ width: `${level}%` }} />
                </div>
            )}
        </div>
    );
}