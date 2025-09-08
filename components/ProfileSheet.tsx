"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import profile from "@/content/profile.json";

export default function ProfileSheet() {
  return (
    <Sheet>
      <SheetTrigger className="rounded-xl border px-3 py-1.5 text-sm hover:bg-muted transition">
        Perfil
      </SheetTrigger>
      <SheetContent className="w-[min(96vw,720px)] sm:w-[600px]">
        <SheetHeader>
          <SheetTitle>Sobre mí</SheetTitle>
        </SheetHeader>
        <div className="grid md:grid-cols-[200px_1fr] gap-6 mt-4 h-[80vh]">
          <div className="space-y-3">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border">
              <Image src="/Manuel_oficial.png" alt="Foto de perfil" fill className="object-cover" />
            </div>
            <div className="text-sm text-muted-foreground">América/México City</div>
            <div className="text-sm">Idiomas: <span className="text-muted-foreground">ES / EN</span></div>
            <div className="flex flex-wrap gap-2 text-sm">
              <Link href={profile.links.github} className="underline">GitHub</Link>
              <Link href={profile.links.linkedin} className="underline">LinkedIn</Link>
              <Link href={profile.links.cv} className="underline">CV</Link>
              <Link href={profile.links.emailPersonal} className="underline">Email</Link>
            </div>
          </div>
          <div className="overflow-y-auto pr-2">
            <h3 className="font-semibold">{profile.name}</h3>
            <p className="text-sm text-muted-foreground">{profile.title}</p>
            <p className="mt-3 leading-relaxed text-sm">{profile.tagline}</p>

            <h4 className="mt-6 font-semibold">Experiencia</h4>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Apoyo en Implementaciones — Compucloud (2025–Presente)</li>
              <li>Técnico instalador — ATOM TECHNOLOGY (2024–2025)</li>
            </ul>

            <h4 className="mt-6 font-semibold">Habilidades</h4>
            <div className="text-sm text-muted-foreground">
              Frontend: React, React Native <br />
              Backend: FastAPI, Node.js <br />
              DB: PostgreSQL, MongoDB, MySQL
            </div>

            <h4 className="mt-6 font-semibold">Educación</h4>
            <div className="text-sm text-muted-foreground">ITESZ — Ciencias de la Computación (2021–2026)</div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
