"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, CONTACT_HREF, CONTACT_LABEL } from "../../lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 pt-5 pb-3 transition-colors duration-300 sm:px-10 md:pt-6 md:pb-4 xl:px-20 ${
          menuOpen
            ? "bg-ivory/95 backdrop-blur-md"
            : scrolled
              ? "bg-ivory/50 backdrop-blur-sm"
              : ""
        }`}
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }} 
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/logo.webp"
              alt=""
              width={88}
              height={88}
              priority
              className="h-9 w-9 object-contain md:h-11 md:w-11"
            />
            <span
              className="text-base font-semibold uppercase tracking-wide text-black md:text-lg"
              style={{
                fontFamily:
                  'Futura, "Futura PT", "Trebuchet MS", "Century Gothic", ui-sans-serif, sans-serif',
              }}
            >
              Emas9999
            </span>
          </Link>
        </motion.div>

        <div className="flex justify-center items-center gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 * (i + 1),
                  duration: 0.5,
                  ease: EASE,
                }}
              >
                <Link
                  href={link.href}
                  className="text-[14px] font-bold uppercase tracking-widest text-[#4D280C] transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Hubungi Kami pill button — entrance on wrapper, hover on inner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
            className="hidden md:block"
          >
            <motion.a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="group inline-flex items-center gap-2 rounded-full bg-[#4D280C] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white transition-colors duration-300 ease-out hover:bg-[#6B3C1A] hover:shadow-lg hover:shadow-[#4D280C]/25 md:text-xs"
            >
              {CONTACT_LABEL}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </motion.div>

          {/* Mobile: hamburger — toggles between Menu and X icons */}
          <motion.button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4D280C] text-white md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile dropdown — full-height panel below nav, slides down/up on toggle */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: "calc(100dvh - 4rem)" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-x-0 top-16 z-40 flex flex-col overflow-hidden bg-ivory/95 shadow-lg backdrop-blur-md md:hidden"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            {/* Nav items — top */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.3, ease: EASE }}
              className="flex flex-col divide-y divide-black/10 px-5 pt-4 sm:px-10"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-6 text-2xl font-semibold uppercase tracking-widest text-black transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>

            {/* Bottom — separator + Hubungi Kami CTA pinned to viewport bottom */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3, ease: EASE }}
              className="mt-auto border-t border-black/10 px-5 py-6 sm:px-10"
            >
              <a
                href={CONTACT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4D280C] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#6B3C1A] hover:shadow-lg hover:shadow-[#4D280C]/25"
              >
                {CONTACT_LABEL}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
