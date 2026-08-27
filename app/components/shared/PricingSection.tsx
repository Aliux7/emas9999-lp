"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// Standard bullion weights (12) — used for both metals to produce 24 rows total.
const WEIGHTS: { g: number; label: string }[] = [
  { g: 0.5, label: "0,5 g" },
  { g: 1, label: "1 g" },
  { g: 2, label: "2 g" },
  { g: 3, label: "3 g" },
  { g: 5, label: "5 g" },
  { g: 10, label: "10 g" },
  { g: 25, label: "25 g" },
  { g: 50, label: "50 g" },
  { g: 100, label: "100 g" },
  { g: 250, label: "250 g" },
  { g: 500, label: "500 g" },
  { g: 1000, label: "1 kg" },
];

// Per-gram rates (Indonesian rupiah). Edit these two numbers per metal to reprice the whole list.
const GOLD_SELL = 1_750_000;
const GOLD_BUY = 1_690_000;
const SILVER_SELL = 20_000;
const SILVER_BUY = 19_000;

function formatIDR(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

function PriceColumn({
  title,
  sellRate,
  buyRate,
}: {
  title: string;
  sellRate: number;
  buyRate: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div
        className="text-[10px] font-semibold uppercase tracking-widest md:text-xs"
        style={{ color: "#8b7355" }}
      >
        {title}
      </div>

      {/* Column headers */}
      <div
        className="mt-4 grid grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)_minmax(0,1fr)] items-baseline gap-x-3 border-b pb-2 text-[9px] font-semibold uppercase tracking-widest md:text-[10px]"
        style={{ color: "#8b7355", borderColor: "rgba(26,19,11,0.18)" }}
      >
        <div>Berat</div>
        <div className="text-right">Harga Jual</div>
        <div className="text-right">Harga Buyback</div>
      </div>

      {/* Rows */}
      <div>
        {WEIGHTS.map((w) => (
          <div
            key={w.g}
            className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)_minmax(0,1fr)] items-baseline gap-x-3 border-b py-2 md:py-2.5"
            style={{ borderColor: "rgba(26,19,11,0.06)" }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-widest md:text-xs"
              style={{ color: "#1a130b" }}
            >
              {w.label}
            </span>
            <span
              className="whitespace-nowrap text-right"
              style={{
                fontFamily: "var(--font-serif), serif",
                fontSize: "clamp(0.875rem, 1.6vw, 1.15rem)",
                fontWeight: 700,
                color: "#1a130b",
                lineHeight: 1.2,
                letterSpacing: "-0.005em",
              }}
            >
              {formatIDR(Math.round(w.g * sellRate))}
            </span>
            <span
              className="whitespace-nowrap text-right"
              style={{
                fontFamily: "var(--font-serif), serif",
                fontSize: "clamp(0.875rem, 1.6vw, 1.15rem)",
                fontWeight: 700,
                color: "#4D280C",
                lineHeight: 1.2,
                letterSpacing: "-0.005em",
              }}
            >
              {formatIDR(Math.round(w.g * buyRate))}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Fake but plausible 30-point gold-market series (0..1000 wide, y inverted so lower y = higher price).
const CHART_LINE =
  "M 0 200 L 34 195 L 68 192 L 103 185 L 137 189 L 172 178 L 206 175 L 241 170 L 275 165 L 310 170 L 344 155 L 379 150 L 413 145 L 448 140 L 482 142 L 517 130 L 551 125 L 586 118 L 620 115 L 655 112 L 689 110 L 724 100 L 758 95 L 793 90 L 827 88 L 862 80 L 896 75 L 931 70 L 965 60 L 1000 50";
const CHART_AREA = `${CHART_LINE} L 1000 300 L 0 300 Z`;

export function PricingSection() {
  return (
    <section
      data-scroll-section
      className="relative w-full overflow-hidden bg-transparent py-16 md:py-24"
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      <svg
        aria-hidden
        data-scroll
        data-scroll-speed="-0.3"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-50"
      >
        <defs>
          <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b58a45" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#b58a45" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d={CHART_AREA}
          fill="url(#priceFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
        />
        <motion.path
          d={CHART_LINE}
          fill="none"
          stroke="#b58a45"
          strokeOpacity={0.35}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 5, ease: EASE }}
        />
      </svg>

      <div className="relative z-10 px-5 sm:px-10 xl:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 md:mb-14"
        >
          <div
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest md:text-xs"
            style={{ color: "#8b7355" }}
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span>Live · Harga Hari Ini</span>
          </div>
          <h2
            className="mt-3 uppercase"
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              lineHeight: 1,
              color: "#1a130b",
              letterSpacing: "-0.01em",
            }}
          >
            Harga Emas
          </h2>
        </motion.div>

        {/* Two columns: Gold (12) + Silver (12) = 24 rows */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <PriceColumn
            title="Emas Batangan — 999.9 Murni"
            sellRate={GOLD_SELL}
            buyRate={GOLD_BUY}
          />
          <PriceColumn
            title="Perak Batangan — 999.9 Murni"
            sellRate={SILVER_SELL}
            buyRate={SILVER_BUY}
          />
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          className="mt-10 text-[10px] font-semibold uppercase tracking-widest md:text-xs"
          style={{ color: "#8b7355" }}
        >
          Harga diperbarui setiap hari
        </motion.p>
      </div>
    </section>
  );
}
