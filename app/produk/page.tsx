import type { Metadata } from "next";
import { ProductGrid } from "../components/produk/ProductGrid";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Koleksi emas batangan, perak batangan, dan perhiasan halus Emas9999.",
};

export default function ProdukPage() {
  return (
    <main className="pt-4 md:pt-12">
      <ProductGrid />
    </main>
  );
}
