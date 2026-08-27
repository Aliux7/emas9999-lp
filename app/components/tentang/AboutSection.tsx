"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Hammer, LineChart, RefreshCw, ShieldCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type StatFormat = "int" | "decimal1";

// Statistics shown in the About-page hero — same pattern as StatsSection but
// tailored to the "who we are / why trust us" story.
const STATS: {
  end: number;
  format: StatFormat;
  suffix?: string;
  label: string;
}[] = [
  { end: 5, format: "int", suffix: "+", label: "Tahun Melayani" },
  { end: 999.9, format: "decimal1", label: "Kadar Kemurnian" },
  { end: 24000, format: "int", suffix: "+", label: "Batangan Dicetak" },
  { end: 100, format: "int", suffix: "%", label: "Buyback Terjamin" },
];

// Value propositions — why customers choose Emas9999.
const REASONS = [
  {
    Icon: ShieldCheck,
    title: "Kemurnian Terjamin",
    body: "Emas 999,9 dengan sertifikat kemurnian resmi pada setiap keping. Diuji dengan XRF spectrometer dan uji api sebelum dihallmark.",
  },
  {
    Icon: RefreshCw,
    title: "Buyback Fleksibel",
    body: "Kami menerima buyback semua produk kami tanpa batas waktu. Bawa kembali emas Anda kapan saja dengan harga pasar terkini.",
  },
  {
    Icon: Hammer,
    title: "Pengrajin Ahli",
    body: "Setiap batangan ditangani langsung oleh pengrajin senior kami — bukan produksi mesin massal. Warisan keahlian puluhan tahun.",
  },
  {
    Icon: LineChart,
    title: "Harga Transparan",
    body: "Harga jual dan buyback diperbarui dua kali sehari mengikuti pergerakan pasar emas global LBMA. Tanpa biaya tersembunyi.",
  },
];

const PILLARS = [
  {
    number: "01",
    title: "Ditempa Api",
    body: "Setiap batangan dilebur dan dituang pada suhu 1.064°C, kemudian dicetak dengan mesin presisi Jerman. Kadar 999,9 diuji ulang sebelum dihallmark.",
  },
  {
    number: "02",
    title: "Diuji Kadar",
    body: "Kami menggunakan XRF spectrometer dan uji api untuk memastikan setiap keping sesuai standar LBMA. Sertifikat kemurnian menyertai setiap produk yang keluar dari butik.",
  },
  {
    number: "03",
    title: "Dijaga Turun-Temurun",
    body: "Emas9999 berdiri sejak generasi pendiri di Kapasan, Surabaya. Kami bekerja untuk keluarga — dari mahar pernikahan hingga warisan investasi untuk cucu.",
  },
];

function formatValue(v: number, format: StatFormat) {
  if (format === "decimal1") {
    return v.toLocaleString("id-ID", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }
  return Math.round(v).toLocaleString("id-ID");
}

function CountUp({
  end,
  format,
  suffix,
  delay,
}: {
  end: number;
  format: StatFormat;
  suffix?: string;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => formatValue(v, format));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, end, {
      duration: 1.8,
      delay,
      ease: EASE,
    });
    return () => controls.stop();
  }, [inView, end, delay, count]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section
      data-scroll-section
      className="w-full py-16 md:py-24"
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      <div className="px-5 sm:px-10 xl:px-20">
        {/* ═══════════════ HERO — magazine layout ═══════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative h-[calc(100dvh-10rem)] min-h-[520px] xl:min-h-[600px]"
        >
          {/* Top-left — quote / positioning line */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
            className="absolute left-0 top-0 z-20 max-w-[220px] md:max-w-xs"
          >
            <div
              className="text-[10px] font-semibold tracking-widest md:text-xs"
              style={{ color: "#8b7355" }}
            >
              *
            </div>
            <p
              className="mt-2 text-[11px] font-semibold uppercase leading-relaxed tracking-widest md:text-xs"
              style={{ color: "#1a130b" }}
            >
              Emas dan perak 999,9 murni yang ditempa, diuji, dan dihallmark
              oleh pengrajin ahli kami.
            </p>
            <p
              className="mt-2 text-[10px] tracking-widest"
              style={{ color: "#8b7355" }}
            >
              — Emas9999, Kapasan
            </p>
          </motion.div>

          {/* Huge brand text — sits behind the portrait */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.9, ease: EASE }}
            aria-label="Tentang Emas9999"
            className="pointer-events-none absolute inset-x-0 top-1/2 sm:top-0 z-0 -translate-y-1/2 sm:translate-y-full lg:translate-y-1/2 select-none whitespace-nowrap text-center uppercase"
            style={{
              fontFamily: "var(--font-serif), 'Instrument Serif', serif",
              fontWeight: 400,
              fontSize: "clamp(4.5rem, 22vw, 20rem)",
              lineHeight: 0.9,
              color: "#4D280C",
              letterSpacing: "-0.03em",
            }}
          >
            Emas9999
          </motion.h1>

          {/* Center portrait — cuts through the big text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
            className="absolute left-1/2 top-1/2 z-10 aspect-[3/2] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg"
          >
            <Image
              src="/cta/cta-background.webp"
              alt="Emas9999 — perhiasan warisan"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              quality={100}
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Bottom-right — info card (Locomotive on outer, framer on inner) */}
          <div
            data-scroll
            data-scroll-speed="0.6"
            className="absolute bottom-0 right-0 z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
              className="min-w-[210px] shadow-xl rounded-md p-4 sm:min-w-[240px] bg-[#f2ead9]/50 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className="rounded-sm px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white md:text-[10px]"
                  style={{ backgroundColor: "#4D280C" }}
                >
                  Buka
                </span>
                <span
                  className="text-[10px] font-semibold uppercase tracking-widest md:text-xs"
                  style={{ color: "#8b7355" }}
                >
                  08.00 – 18.00 WIB
                </span>
              </div>
              <div
                className="mt-3 flex flex-col gap-0.5 border-t pt-3 text-[11px] font-semibold leading-snug md:text-xs"
                style={{ borderColor: "rgba(26,19,11,0.12)", color: "#1a130b" }}
              >
                <span>Jl. Kapasan No 28-30-32. Surabaya</span> 
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ═══════════════ STATS ═══════════════ */}
        <div
          className="mb-20 grid grid-cols-2 gap-y-10 border-b py-12 md:mb-28 md:grid-cols-4 md:gap-y-0 md:py-16"
          style={{ borderColor: "rgba(26,19,11,0.15)" }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
              className="flex flex-col items-center text-left"
            >
              <div
                style={{
                  fontFamily: "var(--font-serif), serif",
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  lineHeight: 1,
                  color: "#1a130b",
                  letterSpacing: "-0.01em",
                }}
              >
                <CountUp
                  end={stat.end}
                  format={stat.format}
                  suffix={stat.suffix}
                  delay={i * 0.1}
                />
              </div>
              <div
                className="mt-3 text-[10px] font-semibold uppercase tracking-widest md:text-xs"
                style={{ color: "#8b7355" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div> 

        {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8 md:mb-12"
        >
          <div
            className="text-[10px] font-semibold uppercase tracking-widest md:text-xs"
            style={{ color: "#8b7355" }}
          >
            Kenapa Memilih Kami
          </div>
          <h2
            className="mt-3 uppercase"
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              lineHeight: 1,
              color: "#1a130b",
              letterSpacing: "-0.01em",
            }}
          >
            Empat Alasan Emas9999
          </h2>
        </motion.div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:mb-28 md:grid-cols-2 md:gap-12">
          {REASONS.map((reason, i) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
              className="flex gap-5"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "#4D280C", color: "#f0e6d2" }}
              >
                <reason.Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-serif), serif",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    lineHeight: 1.1,
                    color: "#1a130b",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-sm leading-relaxed md:text-base"
                  style={{ color: "#1a130b" }}
                >
                  {reason.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ═══════════════ PRINCIPLES ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8 md:mb-12"
        >
          <div
            className="text-[10px] font-semibold uppercase tracking-widest md:text-xs"
            style={{ color: "#8b7355" }}
          >
            Prinsip Kami
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {PILLARS.map((pillar, i) => (
            <motion.article
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
              className="flex flex-col gap-4 border-t pt-6"
              style={{ borderColor: "rgba(26,19,11,0.18)" }}
            >
              <div
                className="text-[10px] font-semibold uppercase tracking-widest md:text-xs"
                style={{ color: "#8b7355" }}
              >
                {pillar.number}
              </div>
              <h3
                className="uppercase"
                style={{
                  fontFamily: "var(--font-serif), serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1,
                  color: "#1a130b",
                  letterSpacing: "-0.01em",
                }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed md:text-base"
                style={{ color: "#1a130b" }}
              >
                {pillar.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
