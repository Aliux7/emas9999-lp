"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const lines = [
    {
      key: "discover",
      content: (
        <div className="flex items-center justify-center">
          <span>Disc</span>
          <motion.span
            initial={{ width: "0.85em" }}
            animate={{ width: "1.35em" }}
            transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
            className="relative mx-[0.03em] inline-block overflow-hidden rounded-full align-middle"
            style={{ height: "0.85em" }}
          >
            <Image
              src="/hero/discover-o.webp"
              alt=""
              fill
              sizes="160px"
              className="object-cover object-center"
            />
          </motion.span>
          <span>ver</span>
        </div>
      ),
    },
    { key: "indonesias-finest", content: "Indonesia’s Finest" },
    {
      key: "jewelry",
      content: (
        <>
          Jewelry
          <span
            style={{
              fontSize: "0.55em",
              verticalAlign: "super",
              marginLeft: "0.05em",
            }}
          >
            *
          </span>
        </>
      ),
    },
  ] as const;

  return (
    <section
      data-scroll-section
      className="relative min-h-screen w-full text-black"
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      <div
        data-scroll
        className="absolute z-10 mx-auto w-full max-w-6xl px-5 space-y-4 md:space-y-0 text-center uppercase sm:px-10 xl:px-20 top-1/2 left-1/2 -translate-x-1/2 translate-y-[-110%] sm:-translate-y-2/3 text-5xl sm:text-7xl md:text-8xl xl:text-9xl"
        style={{
          fontFamily: "var(--font-serif), serif",
          lineHeight: 0.95,
          letterSpacing: "-0.01em",
        }}
      >
        {lines.map((line, i) => (
          <span key={line.key} className={`block overflow-hidden ${i === 2 ? "pb-3": ""}`}>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.75, ease: EASE }}
              className="block"
            >
              {line.content}
            </motion.span>
          </span>
        ))}
      </div>

      <motion.div
        aria-hidden
        data-scroll
        data-scroll-speed="0.2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: EASE }}
        className="pointer-events-none absolute z-20 w-full inset-x-0 bottom-0"
      >
        {/* Below sm — portrait phone composition */}
        <Image
          src="/hero/hero-bottom-phone.webp"
          alt=""
          width={1024}
          height={1536}
          sizes="100vw"
          priority
          className="block h-auto w-full sm:hidden translate-y-1/5 sm:translate-y-0"
        />
        {/* sm+ — landscape composition */}
        <Image
          src="/hero/hero-bottom.webp"
          alt=""
          width={1672}
          height={941}
          sizes="100vw"
          priority
          className="hidden h-auto w-full sm:block md:translate-y-10"
        />
      </motion.div>

    </section>
  );
}
