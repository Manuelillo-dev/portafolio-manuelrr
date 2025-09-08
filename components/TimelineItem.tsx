import { Separator } from "@/components/ui/separator";


export function TimelineItem({ title, subtitle, period }: { title: string; subtitle?: string; period: string }) {
    return (
        <div className="relative pl-6">
            <div className="absolute left-0 top-1 h-full w-px bg-border" />
            <div className="absolute left-[-3px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
            <div className="text-base font-medium">{title}</div>
            {subtitle && <div className="text-sm text-muted-foreground">{subtitle}</div>}
            <div className="text-xs mt-1 text-muted-foreground">{period}</div>
        </div>
    );
}