export type Ingredient = {
  name: string;
  amount: string;
};

export type Formula = {
  slug: string;
  name: string;
  category: string;
  heroTagline: string;
  serving: string;
  ingredients: Ingredient[];
  historicalFoundation: string;
  mechanismFocus: string[];
  safety?: string[];
  stacking?: string[];
  addOn?: string;
  image?: string; // /images/...
};

export const formulas: Formula[] = [
  {
    slug: "digestive-metabolic-core",
    name: "Digestive Metabolic Core™",
    category: "Foundational Digestive Support",
    heroTagline:
      "Supports digestive comfort, post-meal ease, and healthy motility as part of a daily wellness routine.*",
    serving: "Serving Size: 2 capsules",
    ingredients: [
      { name: "Coriander Seed Extract (10:1)", amount: "250 mg" },
      { name: "Fennel Seed Extract (10:1)", amount: "200 mg" },
      { name: "Caraway Seed Extract (10:1)", amount: "200 mg" },
      { name: "Ginger Root Extract (5% gingerols)", amount: "150 mg" },
      { name: "Peppermint Leaf Extract (4:1)", amount: "150 mg" }
    ],
    historicalFoundation:
      "Across classical preventive traditions, digestion was regarded as the foundation of vitality. In medieval Mediterranean medical frameworks, including those articulated by Rambam, digestive integrity was central to systemic balance.\n\nMeals were structured intentionally, aromatic seeds were incorporated regularly, and digestive ease was preserved to prevent downstream imbalance. Digestive Metabolic Core™ translates those enduring principles into a modern botanical format designed for daily use.",
    mechanismFocus: [
      "GI smooth muscle balance",
      "Post-meal digestive tone",
      "Motility signaling pathways",
      "Gas modulation"
    ],
    safety: [
      "Consult healthcare professional if taking anticoagulants (ginger).",
      "Use caution if reflux-prone.",
      "Avoid if allergic to Apiaceae family plants."
    ],
    stacking: [
      "Safe with Cellular Resilience Complex™.",
      "May combine with Circulatory Vitality Core™ (consult if on anticoagulants)."
    ],
    addOn: "Bitter Metabolic Support™ — Optional pre-meal digestive tone support layer.*",
    image: "/images/formula-digestive.jpg"
  },
  {
    slug: "circulatory-vitality-core",
    name: "Circulatory Vitality Core™",
    category: "Foundational Cardiovascular & Vascular Support",
    heroTagline: "Supports healthy circulation and vascular tone.*",
    serving: "Serving Size: 2 capsules",
    ingredients: [
      { name: "Olive Leaf Extract (20% oleuropein)", amount: "300 mg" },
      { name: "Hawthorn Extract", amount: "300 mg" },
      { name: "Pomegranate Extract", amount: "250 mg" },
      { name: "Garlic Extract", amount: "150 mg" }
    ],
    historicalFoundation:
      "Classical Mediterranean medical systems emphasized preservation of vascular vitality through botanical support and lifestyle balance. Olive leaf, hawthorn, garlic, and pomegranate were traditionally incorporated to maintain strength and clarity.",
    mechanismFocus: [
      "Endothelial nitric oxide support",
      "Antioxidant vascular protection",
      "Healthy blood flow balance"
    ],
    safety: [
      "Consult if taking anticoagulants.",
      "Discontinue before surgery."
    ],
    addOn: "Nitric Oxide Support™ — Optional vascular optimization layer.*",
    image: "/images/formula-circulatory.jpg"
  },
  {
    slug: "cellular-resilience-complex",
    name: "Cellular Resilience Complex™",
    category: "Advanced Immune & Cellular Support",
    heroTagline: "Supports immune balance and healthy cellular signaling.*",
    serving: "Serving Size: 4 capsules",
    ingredients: [
      { name: "Vitamin D3 (2,000 IU)", amount: "2,000 IU" },
      { name: "Broccoli Sprout Extract", amount: "—" },
      { name: "Trametes versicolor Extract", amount: "—" },
      { name: "Curcumin Phytosome", amount: "—" }
    ],
    historicalFoundation:
      "Across civilizations, physicians emphasized strengthening internal resilience through sunlight, cruciferous plants, medicinal mushrooms, and botanical anti-inflammatory supports.",
    mechanismFocus: [
      "Immune modulation",
      "Nrf2 antioxidant activation",
      "Inflammatory balance"
    ],
    safety: [
      "Consult if on anticoagulants.",
      "Consult if managing calcium disorders."
    ],
    addOn: "Omega-3 Cellular Support™",
    image: "/images/formula-cellular.jpg"
  },
  {
    slug: "urinary-flow-support",
    name: "Urinary Flow Support™",
    category: "Urological Comfort & Flow Support",
    heroTagline: "Supports healthy urinary function and bladder comfort.*",
    serving: "Serving Size: 2 capsules",
    ingredients: [
      { name: "Pumpkin Seed Extract", amount: "500 mg" },
      { name: "Nettle Root Extract", amount: "250 mg" },
      { name: "Cranberry Extract", amount: "250 mg" }
    ],
    historicalFoundation:
      "Classical medical traditions viewed urinary clarity and flow as markers of systemic balance. Pumpkin seed and nettle root were used to preserve urinary comfort.",
    mechanismFocus: [
      "Urinary flow dynamics",
      "Bladder support",
      "Prostate physiology"
    ],
    addOn: "D-Mannose Support™",
    image: "/images/formula-urinary.jpg"
  }
];

export function getFormulaBySlug(slug: string) {
  return formulas.find((f) => f.slug === slug);
}
