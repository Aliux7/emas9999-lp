"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BUTIK_MAP_URL, CONTACT_HREF } from "../../lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CTASection() {
  return (
    <section
      data-scroll-section
      className="relative w-full overflow-hidden pb-32 lg:pb-0"
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      <div className="relative z-10 px-5 text-center sm:px-10 lg:absolute lg:right-0 lg:top-1/2 lg:w-1/2 lg:-translate-y-1/2 lg:px-0 lg:pr-10 lg:text-start xl:pr-20">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-[10px] font-semibold uppercase tracking-widest md:text-xs"
          style={{ color: "#8b7355" }}
        >
          Siap Berinvestasi
        </motion.div>

        {/* Big serif headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
          className="mt-4 uppercase"
          style={{
            fontFamily: "var(--font-serif), serif",
            fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
            lineHeight: 1,
            color: "#1a130b",
            letterSpacing: "-0.01em",
          }}
        >
          Kunjungi Butik Kami.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
          className="mx-auto mt-5 max-w-lg text-sm leading-relaxed md:text-base lg:mx-0"
          style={{ color: "#4D280C" }}
        >
          Harga dikunci sejak Anda duduk di meja kami. Chat kami langsung
          lewat WhatsApp atau kunjungi lokasi butik untuk memesan emas
          batangan.
        </motion.p>

        {/* Two pill buttons — centered row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.35, duration: 0.6, ease: EASE }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
        >
          <a
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4D280C] px-8 py-4 text-[11px] font-semibold uppercase tracking-widest text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#6B3C1A] hover:shadow-lg hover:shadow-[#4D280C]/25 sm:w-auto md:text-xs"
          >
            Jadwalkan Kunjungan
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={BUTIK_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#4D280C] text-[#4D280C] px-8 py-4 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#6B3C1A]/5 sm:w-auto md:text-xs"
            style={{ color: "#1a130b" }}
          >
            <MapPin className="h-4 w-4" />
            Lihat Lokasi
          </a>
        </motion.div>
      </div>

      {/* Bottom hero image — full-width, natural aspect, with fade-to-ivory overlay */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.5, duration: 1, ease: EASE }}
        className="pointer-events-none mt-12 w-full md:mt-16 relative bottom-0 lg:relative"
      >
        <div className="relative mx-auto lg:mx-0 aspect-video w-full max-h-[calc(100dvh-8rem)] max-w-full lg:-translate-x-1/10 xl:translate-x-0 lg:max-w-3xl xl:max-w-4xl">
          <Image
            src="/cta/cta-background.webp"
            alt=""
            fill
            sizes="(min-width: 1280px) 896px, 100vw"
            className="object-contain"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-transparent to-ivory/20 lg:from-transparent lg:via-transparent lg:to-ivory"
          />
        </div>
      </motion.div>
    </section>
  );
}
