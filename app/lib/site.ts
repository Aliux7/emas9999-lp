export const BRAND_NAME = "Emas 9999";
export const BRAND_LEGAL = "Emas 9999";
export const SITE_NAME = BRAND_NAME;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://emas9999.id"
).replace(/\/$/, "");

export const SITE_TAGLINE =
  "Butik emas dan perak murni 999,9 di Surabaya — emas batangan, perak batangan, dan perhiasan halus yang dicetak, diuji kadar, dan dihallmark langsung oleh pengrajin kami di Kapasan.";

export const SITE_SHORT_DESCRIPTION =
  "Emas dan perak batangan 999,9 serta perhiasan halus, dicetak dan diuji di Kapasan, Surabaya.";

export const SITE_ADDRESS = {
  streetAddress: "Jl. Kapasan No.30, Simokerto, Kec. Simokerto",
  addressLocality: "Surabaya",
  addressRegion: "Jawa Timur",
  postalCode: "60143",
  addressCountry: "ID",
} as const;

export const CONTACT_EMAIL = "hello@emas9999.id";

export const NAV_LINKS = [
  { href: "/produk", label: "Produk" },
  { href: "/harga", label: "Harga" },
  { href: "/tentang", label: "Tentang" },
] as const;

// WhatsApp contact — customers can tap the button and land in chat with a
// pre-filled message instead of having to copy the number.
export const CONTACT_PHONE = "628113478788";
const CONTACT_WA_MESSAGE =
  "Halo Emas9999, saya ingin bertanya tentang produk dan harga.";
export const CONTACT_HREF = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(CONTACT_WA_MESSAGE)}`;
export const CONTACT_LABEL = "Hubungi Kami";

// External storefronts / social — reused across Footer, ProductGrid, etc.
export const SHOPEE_URL = "https://shopee.co.id/eurogoldsilver";
export const INSTAGRAM_URL = "https://www.instagram.com/eurogoldandsilver";

// Shopee category deep-links — used by the produk page and any future filter chips.
export const SHOPEE_CATEGORY = {
  gold: `${SHOPEE_URL}?originalCategoryId=11042958&page=0`,
  silver: `${SHOPEE_URL}?originalCategoryId=11042959&page=0`,
  cincin: `${SHOPEE_URL}?originalCategoryId=11042981&page=0`,
  kalung: `${SHOPEE_URL}?originalCategoryId=11042979&page=0`,
  gelang: `${SHOPEE_URL}?originalCategoryId=11042980&page=0`,
  liontin: `${SHOPEE_URL}?originalCategoryId=11042984&page=0`,
} as const;

// Butik address used by the CTA map + address block.
export const BUTIK_ADDRESS =
  "Jl. Kapasan No.30, Simokerto, Kec. Simokerto, Surabaya, Jawa Timur 60143";
// Full embed URL — drop into an <iframe> if you want an in-page map.
export const BUTIK_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.005283150442!2d112.74908811067111!3d-7.2402344927359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9f1824b3f93%3A0xbd5dbf8f68fc72f4!2sJl.%20Kapasan%20No.30%2C%20Simokerto%2C%20Kec.%20Simokerto%2C%20Surabaya%2C%20Jawa%20Timur%2060143%2C%20Indonesia!5e0!3m2!1sen!2suk!4v1787765588748!5m2!1sen!2suk";
// Click-through URL — resolves to the address (Google shows the place card
// with "Jl. Kapasan No.30" as the header rather than raw coordinates).
export const BUTIK_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BUTIK_ADDRESS}, Indonesia`,
)}`;
