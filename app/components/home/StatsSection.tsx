"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type StatFormat = "int" | "decimal1";

const STATS: {
  end: number;
  format: StatFormat;
  suffix?: string;
  label: string;
}[] = [
  { end: 9999, format: "int", label: "Batangan Dicetak" },
  { end: 999.9, format: "decimal1", label: "Kemurnian Emas" },
  { end: 24, format: "int", label: "Standar Karat" },
  { end: 5, format: "int", suffix: "+", label: "Tahun Berkarya" },
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

export function StatsSection() {
  return (
    <section
      data-scroll-section
      className="w-full py-16 md:py-24"
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      <div className="grid grid-cols-2 gap-y-12 px-5 sm:px-10 md:grid-cols-4 md:gap-y-0 xl:px-20 pt-30 sm:pt-0">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
            className="flex flex-col items-center text-center"
          >
            <div
              style={{
                fontFamily: "var(--font-serif), serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1,
                color: "#000000",
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
    </section>
  );
}
