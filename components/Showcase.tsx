import Image from "next/image";
import Link from "next/link";

type Item = {
  title: string;
  image: string;
  caption?: string;    // texto corto en esquina inferior derecha
  href?: string;       // link al proyecto o repo
};

export default function Showcase({ items }: { items: Item[] }) {
  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((it, idx) => (
          <article
            key={idx}
            className="snap-center shrink-0 w-[min(90vw,880px)] mx-auto rounded-2xl border overflow-hidden bg-background"
          >
            <div className="relative aspect-[16/9]">
              <Image src={it.image} alt={it.title} fill className="object-cover" />
              {/* caption bottom-right */}
              {it.caption && (
                <div className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded bg-background/80 border">
                  {it.caption}
                </div>
              )}
              {/* title bottom-left */}
              <div className="absolute bottom-3 left-3 text-sm md:text-base px-2 py-1 rounded bg-background/80 border">
                {it.title}
              </div>
            </div>
            {it.href && (
              <div className="p-3 text-right text-sm">
                <Link href={it.href} target="_blank" className="underline">Ver proyecto →</Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
