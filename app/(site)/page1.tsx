import Section from "@/components/Section";
import { TimelineItem } from "@/components/TimelineItem";
import Image from "next/image";
import Link from "next/link";
import profile from "@/content/profile.json";

export default function Home() {
    return (
        <>
            <header className="mx-auto max-w-5xl px-4 pt-16 pb-10 grid md:grid-cols-[140px_1fr] items-center gap-6">
                <div className="relative">
                    <img
                        src="/Manuel_oficial.png"
                        alt="Manual Ramírez"
                        className="h-36 w-36 rounded-2xl border object-cover shadow-sm"
                    />
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Portafolio • Full Stack</p>
                    <h1 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight">
                        Manuel Ramírez Rodríguez
                    </h1>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                        Estudiante en ITESZ · React Native & Firebase · Python · JavaScript · Git & DevOps
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                        <a href="https://linkedin.com/in/manuelramírez-mich" className="underline">LinkedIn</a>
                        <a href="https://github.com/Manuelillo-dev" className="underline">GitHub</a>
                        <a href="/Profile.pdf" className="underline">Descargar CV</a>
                    </div>
                </div>
            </header>

            <Section title="Sobre mí">
                <p className="text-muted-foreground leading-relaxed">{profile.tagline}</p>
            </Section>

            <Section title="Tecnologías y herramientas">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold mb-2">Tecnologías dominadas</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Lenguajes: Python, Java, JavaScript, HTML, CSS</li>
                            <li>Frontend: React, React Native</li>
                            <li>Backend: FastAPI, Firebase, Node.js</li>
                            <li>Bases de Datos: SQLite, MongoDB, MySQL, PostgreSQL</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Herramientas & plataformas</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Git, GitHub, Figma, Swagger, Linux, Windows</li>
                            <li>AWS (S3, CloudFront, RDS, EC2), Azure DevOps</li>
                            <li>Notion, Trello, Planner</li>
                        </ul>
                        <h4 className="font-semibold mt-4 mb-2">Actualmente aprendiendo</h4>
                        <p className="text-sm text-muted-foreground">
                            C, C#, C++, Unity, Prolog, PHP, Angular, SQL Server Express
                        </p>
                    </div>
                </div>
            </Section>

            <Section id="logros" title="Logros y evidencias">
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Ganador del Hackathon 2025 (ITESZ & CompuCloud)</li>
                    <li>AWS Academy Graduate - Data Engineering</li>
                    <li>AWS Academy Graduate - Machine Learning Foundations</li>
                    <li>CCNAv7: Introducción a Redes</li>
                    <li>CCNAv7: Enterprise Networking, Security, and Automation</li>
                    <li>TecNM: Modelo Talento Emprendedor</li>
                </ul>
            </Section>

            {/* Experiencia */}
            <section className="mx-auto max-w-5xl px-4 py-10">
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Experiencia</h2>
                <div className="grid gap-2">
                    <TimelineItem
                        title="Apoyo en Implementaciones | Compucloud (Guadalajara, Híbrido)"
                        period="Jul 2025 – Presente"
                    />
                    <TimelineItem
                        title="Técnico instalador de internet | ATOM TECHNOLOGY (Michoacán)"
                        period="May 2024 – Jul 2025"
                    />
                </div>
            </section>

            {/* Escolaridad */}
            <section className="mx-auto max-w-5xl px-4 py-10">
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Escolaridad</h2>
                <div className="grid gap-2">
                    <TimelineItem
                        title="Ciencias de la Computación | ITESZ"
                        period="2021 – 2026 (proyectado)"
                    />
                </div>
            </section>
        </>
    );
}
