import NavBar from '../components/NavBar'
import Hero from '../components/Hero'

export default function Page() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />

      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="text-slate-600">Aquí puedes colocar una breve introducción sobre ti, tus intereses y qué tipo de proyectos quieres mostrar.</p>
      </section>

      <footer className="border-t mt-20 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Manuel — Portafolio
      </footer>
    </main>
  )
}
