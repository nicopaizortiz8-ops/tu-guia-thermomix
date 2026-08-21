// Seeded reference prices for Guatemala (Phase 1)
// Each entry contains source metadata and price normalizations to allow later cost calculations.

export const guatemalaPrices = [
  {
    id: "chicken-breast",
    name: "Pechuga de pollo (sin hueso, sin piel)",
    unit: "kg",
    pricePerKg: 69.11,
    pricePerGram: 0.06911,
    source: "PriceSmart Guatemala",
    sourceDate: "2026-08-18",
    retailer: "PriceSmart",
    category: "meat",
    note: "Derived from PriceSmart bulk price Q469.95 / 6.8 kg",
  },
  {
    id: "cherry-tomato",
    name: "Tomate cherry",
    unit: "kg",
    pricePerKg: 54.34,
    pricePerGram: 0.05434,
    source: "PriceSmart Guatemala",
    sourceDate: "2026-08-18",
    retailer: "PriceSmart",
    category: "produce",
  },
  {
    id: "rice",
    name: "Arroz",
    unit: "kg",
    pricePerKg: 11.45,
    pricePerGram: 0.01145,
    source: "PriceSmart Guatemala",
    sourceDate: "2026-08-18",
    retailer: "PriceSmart",
    category: "pantry",
  },
  {
    id: "tomato-paste",
    name: "Pasta de tomate (concentrado)",
    unit: "kg",
    pricePerKg: 25.38,
    pricePerGram: 0.02538,
    source: "PriceSmart Guatemala",
    sourceDate: "2026-08-18",
    retailer: "PriceSmart",
    category: "pantry",
  },
  {
    id: "greek-yogurt",
    name: "Yogur griego",
    unit: "kg",
    pricePerKg: 35.35,
    pricePerGram: 0.03535,
    source: "PriceSmart Guatemala",
    sourceDate: "2026-08-18",
    retailer: "PriceSmart",
    category: "dairy",
  },
];

// These are seed benchmarks, not absolute truths. UI must clearly state these are reference prices
// and allow the user to override them in future phases.