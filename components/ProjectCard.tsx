import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import Link from "next/link";


export function ProjectCard({ name, description, stack, repo }: { name: string; description: string; stack?: string[]; repo?: string }) {
    return (
        // components/ProjectCard.tsx (solo la clase del Card)
        <Card className="hover:shadow-lg hover:-translate-y-0.5 transition-all border rounded-2xl">
            <CardHeader>
                <CardTitle className="text-lg">{name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                {stack && (
                    <div className="flex flex-wrap gap-2">
                        {stack.map((s) => (
                            <span key={s} className="text-xs px-2 py-1 rounded bg-muted">{s}</span>
                        ))}
                    </div>
                )}
                {repo && (
                    <Link href={repo} target="_blank" className="inline-flex items-center gap-2 text-sm underline">
                        <Github className="h-4 w-4" /> Código en GitHub
                    </Link>
                )}
            </CardContent>
        </Card>
    );
}