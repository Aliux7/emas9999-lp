export type SellPrice = {
  id: string;
  name: string;
  weight: number | null;
  price: number;
};

export type BuyBackPrice = {
  id: string;
  name: string;
  weight: number | null;
  price: number;
};

export type PricesPayload = {
  sellPrices: SellPrice[];
  buyBackPrices: BuyBackPrice[];
  generatedAt: string;
};

export type PricesResult =
  | { ok: true; data: PricesPayload }
  | { ok: false; error: string };

const ENDPOINT = "https://api.eurogroup.my.id/api/public/prices";

export async function getPrices(): Promise<PricesResult> {
  try {
    const res = await fetch(ENDPOINT, { next: { revalidate: 900 } });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    const json = (await res.json()) as { success: boolean; data: PricesPayload };
    if (!json.success || !json.data) return { ok: false, error: "Invalid response" };
    return { ok: true, data: json.data };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Fetch failed" };
  }
}

export type PriceRow = {
  id: string;
  name: string;
  weight: number;
  sell: number;
  buyback: number | null;
};

// "24K (99.9%)" is the per-gram buyback rate for 999.9 pure gold bullion.
const GOLD_BUYBACK_KARAT = "24K (99.9%)";

export function shapeRows(data: PricesPayload): { gold: PriceRow[]; silver: PriceRow[] } {
  const goldBuybackPerGram =
    data.buyBackPrices.find((b) => b.name === GOLD_BUYBACK_KARAT)?.price ?? null;

  const gold: PriceRow[] = [];
  const silver: PriceRow[] = [];

  for (const item of data.sellPrices) {
    if (item.weight == null) continue;
    const isGold = item.name.toLowerCase().startsWith("euro gold");
    const isSilver = item.name.toLowerCase().startsWith("silver bar");
    if (!isGold && !isSilver) continue;

    const row: PriceRow = {
      id: item.id,
      name: item.name,
      weight: item.weight,
      sell: item.price,
      buyback: isGold && goldBuybackPerGram != null ? goldBuybackPerGram * item.weight : null,
    };
    (isGold ? gold : silver).push(row);
  }

  gold.sort((a, b) => a.weight - b.weight);
  silver.sort((a, b) => a.weight - b.weight || a.name.localeCompare(b.name));

  return { gold, silver };
}
