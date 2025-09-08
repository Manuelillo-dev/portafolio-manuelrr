import Section from "@/components/Section";


export default function ContactPage() {
    return (
        <Section title="Contacto">
            <form method="post" action="/api/contact" className="grid gap-4 max-w-lg">
                <input name="name" placeholder="Nombre" className="border rounded px-3 py-2" required />
                <input name="email" type="email" placeholder="Email" className="border rounded px-3 py-2" required />
                <textarea name="message" placeholder="Mensaje" className="border rounded px-3 py-2 min-h-32" required />
                <button className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm">Enviar</button>
            </form>
            <p className="text-sm text-muted-foreground">También puedes escribirme a: manuel.raamirez03@gmail.com • manuel.ramirez@compucloud.com.mx</p>
        </Section>
    );
}