// app/(site)/page.tsx
import Section from "@/components/Section";
import Showcase from "@/components/Showcase";
import Image from "next/image";
import Link from "next/link";
import profile from "@/content/profile.json";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="mx-auto max-w-5xl px-4 pt-16 pb-10 grid md:grid-cols-[140px_1fr] items-center gap-6">
        <div className="relative">
          <Image
            src="/Manuel_oficial.png"        // asegúrate de tener esta imagen en /public
            alt="Manuel Ramírez"
            width={144}
            height={144}
            className="rounded-2xl border object-cover shadow-sm"
            priority
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Portafolio • Full Stack
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            {profile.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href={profile.links.linkedin} className="underline">
              LinkedIn
            </Link>
            <Link href={profile.links.github} className="underline">
              GitHub
            </Link>
            <Link href={profile.links.cv} className="underline">
              Descargar CV
            </Link>
          </div>
        </div>
      </header>

      {/* SOBRE MÍ */}
      <Section title="Sobre mí">
        <p className="text-muted-foreground leading-relaxed">
          {profile.tagline}
        </p>
      </Section>

      {/* PROYECTOS DESTACADOS (Showcase) */}
      <Section title="Proyectos destacados">
        <Showcase
          items={[
            {
              title: "ControlAgro25",
              image: "/screens/controlagro.png", // coloca la imagen en /public/screens/controlagro.png
              caption: "Mobile • React Native",
              href: "https://github.com/SaidPR/ControlAgro25",
            },
            {
              title: "AsistenciasREST",
              image: "/screens/asistencias.png", // /public/screens/asistencias.png
              caption: "API • FastAPI",
              href: "https://github.com/CHGL17/AsistenciasREST",
            },
            {
              title: "Mini Donas Arenita",
              image: "/screens/arenita.png", // /public/screens/arenita.png
              caption: "Web • React + FastAPI",
              href: "https://github.com/AngelMariscal01/MDA",
            },
          ]}
        />
      </Section>
    </>
  );
}
