import ThemeToggle from './ThemeToggle'

export default function NavBar() {
  return (
    <header className="w-full border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-bold">ManuelRR</div>
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-slate-600 hover:text-slate-900">Sobre</a>
          <a href="#projects" className="text-slate-600 hover:text-slate-900">Proyectos</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900">Contacto</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
