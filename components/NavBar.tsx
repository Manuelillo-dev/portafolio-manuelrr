import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b">
            <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
                <Link href="/" className="font-semibold tracking-tight">Manuel Ramírez</Link>
                <div className="flex items-center gap-4 text-sm">
                    <Link href="/proyectos" className="hover:underline">Proyectos</Link>
                    <Link href="/contacto" className="hover:underline">Contacto</Link>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
