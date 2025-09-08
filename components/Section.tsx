import { PropsWithChildren } from "react";


export default function Section({ children, title, id }: PropsWithChildren<{ title: string; id?: string }>) {
    return (
        <section id={id} className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">{title}</h2>
            <div className="grid gap-6">{children}</div>
        </section>
    );
}