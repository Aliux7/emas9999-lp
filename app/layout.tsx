import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import {
  BRAND_LEGAL,
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  INSTAGRAM_URL,
  SHOPEE_URL,
  SITE_ADDRESS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "./lib/site";
import { SmoothScrollProvider } from "./components/layout/SmoothScrollProvider";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} — Emas & Perak 999,9 di Surabaya`,
    template: `%s · ${BRAND_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: BRAND_NAME,
  authors: [{ name: BRAND_LEGAL, url: SITE_URL }],
  creator: BRAND_LEGAL,
  publisher: BRAND_LEGAL,
  category: "shopping",
  keywords: [
    "emas 9999",
    "emas batangan Surabaya",
    "perak batangan Surabaya",
    "toko emas Kapasan",
    "harga emas hari ini",
    "buyback emas Surabaya",
    "jual emas Surabaya",
    "beli emas Surabaya",
    "999,9 fine gold",
    "hallmarked gold Indonesia",
    "Euro Gold Silver",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${BRAND_NAME} — Emas & Perak 999,9 di Surabaya`,
    description: SITE_TAGLINE,
    url: SITE_URL,
    locale: "id_ID",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: BRAND_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: SITE_TAGLINE,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "JewelryStore"],
  "@id": `${SITE_URL}#business`,
  name: BRAND_LEGAL,
  alternateName: BRAND_NAME,
  url: SITE_URL,
  description: SITE_TAGLINE,
  image: `${SITE_URL}/brand/logo.webp`,
  logo: `${SITE_URL}/brand/logo.webp`,
  telephone: `+${CONTACT_PHONE}`,
  email: CONTACT_EMAIL,
  currenciesAccepted: "IDR",
  paymentAccepted: ["Cash", "Bank Transfer", "QRIS"],
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    ...SITE_ADDRESS,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.2402344927359,
    longitude: 112.74908811067111,
  },
  hasMap: `https://www.google.com/maps/place/?q=place_id:ChIJk7-6c-yLDT7RvUL8bo-_1b0`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  sameAs: [INSTAGRAM_URL, SHOPEE_URL],
  makesOffer: [
    { "@type": "Offer", name: "Emas Batangan 999,9 Murni" },
    { "@type": "Offer", name: "Perak Batangan 999,9 Murni" },
    { "@type": "Offer", name: "Perhiasan Emas & Perak" },
    { "@type": "Offer", name: "Buyback Emas & Perak" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${serif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain bg-ivory text-espresso">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
