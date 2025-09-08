import Section from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/data";


export default function ProjectsPage() {
    const projects = getProjects();
    return (
        <Section title="Proyectos destacados">
            <p className="text-sm text-muted-foreground -mt-2 mb-2">
                Selección de proyectos con impacto real y aprendizaje continuo.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                {/* cards */}
            </div>
        </Section>
    );
}