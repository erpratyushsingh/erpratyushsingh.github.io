import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export interface NavbarProps {
  name?: string;
}

function Navbar({ name = "Pratyush Singh" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          className="font-semibold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-mint">/</span> {name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.06] bg-ink px-5 py-3 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              className="block rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-mint"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
