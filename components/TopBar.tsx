// components/TopBar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import ProfileSheet from "@/components/ProfileSheet";

const tabs = [
  { href: "/", label: "Inicio" },
  { href: "/acerca", label: "Acerca" },
  { href: "/experiencia", label: "Experiencia" },
];

export default function TopBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b">
      <div className="mx-auto max-w-5xl px-4 h-14 grid grid-cols-3 items-center">
        <div className="text-xs text-muted-foreground">America/Mexico_City</div>
        <nav className="justify-self-center">
          <ul className="flex items-center gap-1 rounded-xl border p-1 text-sm">
            {tabs.map((t) => {
              const active = pathname === t.href;
              return (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className={[
                      "px-3 py-1.5 rounded-lg transition",
                      active ? "bg-foreground text-background" : "hover:bg-muted",
                    ].join(" ")}
                  >
                    {t.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="justify-self-end flex items-center gap-2">
          {/* <ProfileSheet /> */}
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}
