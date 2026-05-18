import { Instagram } from "lucide-react";
import { buildWaUrl, trackWaClick } from "@/lib/wa";

// ✅ LOGO IMPORT
import logo from "@/assets/logo.png";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/jayarajs2006";

const footerWa = buildWaUrl({
  message: "Hi Neopics, I want to book a photoshoot",
  source: "footer",
  campaign: "footer_link",
});

const grid = [p1, p2, p3, p4, p5, p6];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
            Follow Us
          </span>

          <h3 className="font-serif text-2xl md:text-3xl mt-3">
            Instagram Profile
          </h3>

          {/* INSTAGRAM ICON (CENTER) */}
          <div className="flex justify-center mt-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-10 rounded-full border border-foreground/15 flex items-center justify-center 
                         hover:bg-pink-500 hover:text-white transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-20">
          {grid.map((src, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group"
            >
              <img
                src={src}
                alt="Instagram post"
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </a>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-border">

          {/* LOGO (REPLACED TEXT) */}
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Neopics Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5">

            {/* INSTAGRAM */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-9 rounded-full border border-foreground/15 flex items-center justify-center 
                         hover:bg-pink-500 hover:text-white transition-all"
            >
              <Instagram size={14} />
            </a>

            {/* WHATSAPP */}
            <a
              href={footerWa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onClick={() => trackWaClick("footer")}
              className="size-9 rounded-full border border-foreground/15 flex items-center justify-center 
                         hover:bg-green-500 hover:text-white transition-all text-[11px] font-bold"
            >
              W
            </a>

          </div>

          {/* COPYRIGHT */}
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Neopics Studio
          </div>

        </div>

      </div>
    </footer>
  );
}