"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type FAQItem = { q: string; a: string };

const FAQS: FAQItem[] = [
  {
    q: "Bagaimana harga emas ditentukan?",
    a: "Kami mengacu pada harga LBMA (London Bullion Market Association) dan disesuaikan dengan kurs Rupiah harian. Harga diperbarui dua kali sehari mengikuti pergerakan pasar internasional.",
  },
  {
    q: "Apakah harga jual dan beli kembali (buyback) sama?",
    a: "Tidak. Harga jual adalah harga saat Anda membeli emas dari kami. Harga beli kembali adalah harga saat kami membeli emas Anda. Selisih ini menutup biaya operasional dan margin usaha.",
  },
  {
    q: "Apa artinya emas 999,9?",
    a: "999,9 (dibaca 'nine nines fine') adalah tingkat kemurnian emas 99,99%, standar tertinggi untuk investment bullion. Setiap batangan kami disertai sertifikat kemurnian.",
  },
  {
    q: "Bisakah saya menjual kembali emas ke Emas9999?",
    a: "Ya, kami menerima buyback untuk semua produk kami tanpa batas waktu, selama emas dalam kondisi baik dan disertai sertifikat asli. Bawa langsung ke butik kami di Jakarta.",
  },
  {
    q: "Bagaimana cara memesan?",
    a: "Anda dapat memesan langsung di butik, melalui aplikasi WhatsApp, atau menjadwalkan kunjungan. Pemesanan online tersedia untuk pelanggan terdaftar dengan pengiriman aman.",
  },
  {
    q: "Apakah ada biaya tambahan?",
    a: "Harga yang tertera belum termasuk biaya administrasi, pengemasan khusus, dan pengiriman. Rincian biaya akan diinformasikan sebelum transaksi diselesaikan.",
  },
  {
    q: "Bagaimana cara menyimpan emas dengan aman?",
    a: "Kami menyediakan layanan safe deposit box di butik dengan biaya tahunan. Anda juga dapat menyimpan di brankas pribadi atau safe deposit box bank pilihan Anda.",
  },
  {
    q: "Apakah emas Emas9999 diakui secara internasional?",
    a: "Ya. Emas batangan kami tersertifikasi internasional dengan hallmark 999,9 dan dapat diperdagangkan di pasar global sesuai standar LBMA.",
  },
];

function FAQRow({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: EASE }}
      className="border-b"
      style={{ borderColor: "rgba(26,19,11,0.12)" }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-opacity hover:opacity-75 md:py-6"
      >
        <span
          className="text-sm font-semibold uppercase tracking-widest md:text-base"
          style={{ color: "#1a130b" }}
        >
          {item.q}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors"
          style={{ borderColor: "rgba(26,19,11,0.25)", color: "#1a130b" }}
        >
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 pr-14 text-sm leading-relaxed md:text-base"
              style={{ color: "#1a130b" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section
      data-scroll-section
      className="w-full py-16 md:py-24"
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      <div className="px-5 sm:px-10 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 md:mb-14"
        >
          <div
            className="text-[10px] font-semibold uppercase tracking-widest md:text-xs"
            style={{ color: "#8b7355" }}
          >
            Pertanyaan Umum
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
            FAQ
          </h2>
        </motion.div>

        <div>
          {FAQS.map((item, i) => (
            <FAQRow key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
