import { useEffect, useState } from "react";
import { Menu, X, Instagram, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";
import logo from "@/assets/logo.png";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#testimonials", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

const INSTAGRAM_URL = "https://www.instagram.com/jayarajs2006";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-5 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      {/* LOGO */}
      <a href="#" className="flex items-center">
        <img
          src={logo}
          alt="Neopics Logo"
          className="h-10 md:h-12 w-auto"
        />
      </a>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em]">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hover:text-accent transition-colors duration-300"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
      

        {/* INSTAGRAM */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors duration-300"
        >
          <Instagram size={20} />
        </a>

        {/* THEME TOGGLE */}
        <button
          onClick={toggle}
          className="hover:text-accent transition-colors duration-300"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
          {/* ENQUIRE BUTTON */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
        >
          Enquire
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden hover:text-accent transition-colors duration-300"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md p-6 flex flex-col gap-5 md:hidden border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] hover:text-accent transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}

          {/* MOBILE ENQUIRE BUTTON */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
}