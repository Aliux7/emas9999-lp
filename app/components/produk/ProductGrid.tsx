"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SHOPEE_CATEGORY, SHOPEE_URL } from "../../lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

type Product = {
  src: string;
  category: string;
  title: string;
  weight?: string;
  price?: string;
  href: string;
  objectClass: string;
};

const PRODUCTS: Product[] = [
  {
    src: "/products/band-gold-bar.webp",
    category: "Emas Batangan",
    title: "Euro Gold",
    href: SHOPEE_CATEGORY.gold,
    objectClass: "object-[50%_30%]",
  },
  {
    src: "/products/band-necklace.webp",
    category: "Kalung",
    title: "Kalung Perak",
    href: SHOPEE_CATEGORY.kalung,
    objectClass: "object-[50%_35%]",
  },
  {
    src: "/products/band-silver-bar.webp",
    category: "Perak Batangan",
    title: "Euro Silver",
    href: SHOPEE_CATEGORY.silver,
    objectClass: "object-top",
  },
  {
    src: "/products/band-ring-1.webp",
    category: "Cincin",
    title: "Cincin Silver",
    href: SHOPEE_CATEGORY.cincin,
    objectClass: "object-[50%_40%]",
  },
  {
    // placeholder — swap image later
    src: "/products/band-liontin.webp",
    category: "Liontin",
    title: "Liontin Silver",
    href: SHOPEE_CATEGORY.liontin,
    objectClass: "object-[50%_40%]",
  },
  {
    // placeholder — swap image later
    src: "/products/band-bracelet.webp",
    category: "Gelang",
    title: "Gelang Silver",
    href: SHOPEE_CATEGORY.gelang,
    objectClass: "object-[50%_35%]",
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: EASE }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f2ead9]">
        <Image
          src={product.src}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${product.objectClass}`}
        />
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <div
          className="text-[10px] font-semibold uppercase tracking-widest md:text-xs"
          style={{ color: "#8b7355" }}
        >
          {product.category}
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <h3
            className="uppercase"
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              lineHeight: 1,
              color: "#1a130b",
              letterSpacing: "-0.01em",
            }}
          >
            {product.title}
          </h3>
        </div>
      </div>
    </motion.a>
  );
}

export function ProductGrid() {
  return (
    <section
      data-scroll-section
      className="w-full py-16 md:py-24"
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      <div className="px-5 sm:px-10 xl:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 flex items-end justify-between gap-8 md:mb-16"
        >
          <div>
            <div
              className="text-[10px] font-semibold uppercase tracking-widest md:text-xs"
              style={{ color: "#8b7355" }}
            >
              Koleksi Kami
            </div>
            <h1
              className="mt-3 uppercase"
              style={{
                fontFamily: "var(--font-serif), serif",
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                lineHeight: 1,
                color: "#1a130b",
                letterSpacing: "-0.01em",
              }}
            >
              Produk
            </h1>
          </div>
          <a
            href={SHOPEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden shrink-0 items-baseline gap-1 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-60 sm:inline-flex"
            style={{ color: "#1a130b" }}
          >
            <span className="border-b border-current pb-1">Semua Koleksi</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:gap-12 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <ProductCard
              key={`${p.title}-${p.weight ?? "no-weight"}-${i}`}
              product={p}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
