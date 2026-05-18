import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Amazing photography team! They captured our wedding beautifully like a movie. Every frame felt like a still from a film.",
    name: "Arun & Priya",
    role: "Wedding, Mumbai",
  },
  {
    quote:
      "The cinematic highlight video brought us to tears. Worth every rupee — our memories now feel timeless.",
    name: "Neha Sharma",
    role: "Pre-Wedding, Goa",
  },
  {
    quote:
      "Professional, calm, and incredibly creative. Our corporate gala photos looked like editorial covers.",
    name: "Rohit Mehta",
    role: "Corporate Event, Delhi",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  const r = reviews[i];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent">Kind Words</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-12">What Clients Say</h2>

        <div key={i} className="animate-fade-in">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, n) => (
              <Star key={n} size={16} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-balance mb-8">
            "{r.quote}"
          </p>
          <div className="text-sm">{r.name}</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
            {r.role}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Review ${n + 1}`}
              className={`h-1 transition-all ${
                n === i ? "w-10 bg-accent" : "w-5 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
