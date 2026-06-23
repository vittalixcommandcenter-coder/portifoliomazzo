"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, socials } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg shadow-black/30" : "glass"
        }`}
      >
        <a
          href="#topo"
          className="font-display text-lg font-bold tracking-tight text-ash-100"
        >
          GM<span className="text-amber">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-ash-300 transition-colors hover:bg-white/[0.04] hover:text-ash-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${socials.email}`}
          className="hidden rounded-lg bg-amber px-4 py-2 text-sm font-semibold text-obsidian-950 shadow-glow-amber transition-transform hover:scale-[1.03] md:inline-block"
        >
          Fale comigo
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ash-200 transition-colors hover:bg-white/[0.05] md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mx-auto mt-2 max-w-6xl space-y-1 rounded-2xl p-3 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-ash-300 transition-colors hover:bg-white/[0.05] hover:text-ash-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
