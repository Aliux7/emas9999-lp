"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const COLLECTIONS = [
  {
    src: "/products/band-bracelet.webp",
    kicker: "Koleksi 01",
    title: "Gelang Perak",
    subtitle: "Buatan Tangan",
    objectClass: "object-[50%_35%]",
  },
  {
    src: "/products/band-gold-bar.webp",
    kicker: "Koleksi 02",
    title: "Emas Batangan",
    subtitle: "999.9 Murni",
    objectClass: "object-[50%_27.5%]",
  },
  {
    src: "/products/band-ring.webp",
    kicker: "Koleksi 03",
    title: "Cincin Perak",
    subtitle: "Bertahtakan Safir",
    objectClass: "object-[50%_47.5%]",
  },
  {
    src: "/products/band-silver-bar.webp",
    kicker: "Koleksi 04",
    title: "Perak Batangan",
    subtitle: "999.9 Murni",
    objectClass: "object-[50%_32%]",
  },
] as const;

type CollectionItem = (typeof COLLECTIONS)[number];

function CollectionRow({ item, index }: { item: CollectionItem; index: number }) {
  // Detect on a static wrapper — the inner article can slide off-screen without breaking IntersectionObserver.
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { once: true, margin: "-120px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={wrapperRef} className="relative h-1/4 w-full">
      <motion.article
        initial={{ opacity: 0, x: isEven ? "-100%" : "100%" }}
        animate={inView ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 1.5, ease: EASE }}
        className={`relative h-full w-full md:w-9/10 lg:w-4/5 overflow-hidden ${
          isEven ? "md:mr-auto md:rounded-r-xl" : "md:ml-auto md:rounded-l-xl"
        }`}
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="100vw"
          className={`object-cover ${item.objectClass}`}
        />

        {/* Dark scrim for text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Overlay content — vertically centered, single-line title, alternating alignment */}
        <div
          className={`relative z-10 flex h-full flex-col justify-center px-5 sm:px-10 xl:px-20 ${
            isEven ? "items-start text-left" : "items-end text-right"
          }`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
            className="whitespace-nowrap uppercase text-white"
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </motion.h2>
        </div>
      </motion.article>
    </div>
  );
}

export function CollectionsSection() {
  return (
    <section
      data-scroll-section
      className="flex h-screen w-full flex-col gap-1 overflow-x-hidden text-white"
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      {COLLECTIONS.map((item, i) => (
        <CollectionRow key={item.kicker} item={item} index={i} />
      ))}
    </section>
  );
}
