export const SITE = {
  name: "Historical Translation Project™",
  tagline: "Historical foundations + modern evidence",
  email: "info@axellaresearch.com",
  amazonBookUrl: "https://www.amazon.com/dp/B0GPNWH877",
  shopPlaceholderUrl: "/shop",
};

export type Formula = {
  slug: string;
  name: string;
  short: string;
  focus: string;
  heroBullets: string[];
  overview: string[];
  ingredientStory: { name: string; historical: string; modern: string; notes?: string }[];
  addOns: { title: string; items: { name: string; why: string; shopifyHandle?: string }[] }[];
  cautions: string[];
};

export const FORMULAS: Formula[] = [
  {
    slug: "digestive-metabolic-core",
    name: "Digestive Metabolic Core™",
    focus: "Digestive comfort • motility • metabolic rhythm",
    short: "A foundational botanical program inspired by classical preventive traditions—built to support digestive comfort, post‑meal ease, and healthy metabolic rhythm.",
    heroBullets: [
      "Supports digestive comfort and post‑meal ease",
      "Supports healthy motility and digestive capacity",
      "Supports a steady metabolic rhythm as part of a daily routine",
    ],
    overview: [
      "Digestive Metabolic Core™ is built as a daily foundation for people who want a simple botanical routine that supports comfort, regularity, and post‑meal ease.",
      "The ingredient story is inspired by classical preventive writings and culinary‑medicinal traditions, then translated into a modern structure/function presentation.",
      "Formulation strategy: keep the core broad and practical; use add‑ons only when a targeted need is not already addressed by the core.",
    ],
    ingredientStory: [
      {
        name: "Coriander seed",
        historical: "Coriander appears widely across traditional Mediterranean and Near‑Eastern dietary practice as a digestive aromatic—used with meals to support comfort and reduce post‑meal heaviness.",
        modern: "Modern literature describes coriander seed as an aromatic spice with bioactives that may support digestive comfort and normal GI function (structure/function framing only).",
        notes: "Kept as a cornerstone per your preference."
      },
      {
        name: "Ginger (standardized extract)",
        historical: "Ginger has a long cross‑cultural record as a warming digestive—often used for nausea, stomach unease, and post‑meal discomfort.",
        modern: "Human studies support ginger’s role in digestive comfort and gastric motility signals; standardized extracts help consistency.",
      },
      {
        name: "Fennel seed",
        historical: "Fennel is a classic after‑meal aromatic for bloating and comfort across European and Middle‑Eastern traditions.",
        modern: "Widely used in contemporary herbal practice for digestive comfort; contains volatile oils associated with gut comfort.",
      },
      {
        name: "Caraway seed",
        historical: "Caraway has been used traditionally to support digestion and reduce gas/abdominal discomfort—often paired with fennel.",
        modern: "Commonly used in modern GI blends; aromatic compounds support digestive comfort in structure/function language.",
      },
      {
        name: "Peppermint leaf",
        historical: "Mint preparations have long been used after meals for soothing comfort and pleasant breath.",
        modern: "Peppermint is broadly recognized for supporting digestive comfort; often included in blends addressing occasional bloating.",
      },
      {
        name: "Dill seed (optional)",
        historical: "Dill seed appears in culinary‑medicinal contexts as an aromatic for digestive ease—especially in after‑meal preparations.",
        modern: "Dill is used today for digestive comfort; inclusion can be tuned based on capsule constraints and odor profile.",
        notes: "Optional—add if it fits capsule constraints and sensory profile."
      },
    ],
    addOns: [
      {
        title: "Targeted add‑ons (when needed)",
        items: [
          {
            name: "Artichoke leaf (curated)",
            why: "For individuals seeking additional after‑meal support not fully addressed by the aromatic core. Include only if it does not duplicate your core intent.",
            shopifyHandle: "artichoke-leaf"
          },
          {
            name: "Magnesium glycinate (commercial recommendation)",
            why: "If occasional constipation or stress tension is present and you want a gentle, broadly tolerated option. We can link to a vetted product in Shopify.",
            shopifyHandle: "magnesium-glycinate"
          },
        ],
      },
    ],
    cautions: [
      "If pregnant/nursing, on anticoagulants, or managing gallbladder disease, consult a clinician before use.",
      "Stop use and consult a clinician if adverse symptoms occur.",
    ],
  },
  {
    slug: "circulatory-vitality-core",
    name: "Circulatory Vitality Core™",
    focus: "Circulatory vitality • endothelial support • daily resilience",
    short: "A daily circulatory foundation inspired by classical preventive medicine and modern cardiometabolic research—built for steady, long‑term use.",
    heroBullets: [
      "Supports healthy circulation and vascular function",
      "Supports antioxidant capacity and cellular resilience",
      "Supports healthy energy and activity as part of a routine",
    ],
    overview: [
      "Circulatory Vitality Core™ is designed as a long‑term daily foundation for vascular vitality—prioritizing conservative botanicals with deep historical roots.",
      "We frame benefits in compliant structure/function language and keep the core broad; add‑ons are reserved for needs not already addressed by the core.",
    ],
    ingredientStory: [
      {
        name: "Pomegranate (extract)",
        historical: "Pomegranate has long cultural significance across the Mediterranean and Middle East as a nourishing food traditionally associated with vitality.",
        modern: "Studied for polyphenols that support antioxidant status and healthy vascular function (structure/function).",
      },
      {
        name: "Hawthorn (leaf/flower)",
        historical: "Hawthorn has a long European herbal record in traditional heart tonics and vitality preparations.",
        modern: "Used in contemporary herbal practice for cardiovascular support; researched for circulation and antioxidant effects.",
      },
      {
        name: "Olive leaf",
        historical: "Olive traditions emphasize the olive tree as a cornerstone of Mediterranean preventive living.",
        modern: "Olive polyphenols are studied for cardiometabolic and antioxidant support; commonly used for healthy vascular tone.",
      },
      {
        name: "Garlic (odor‑neutral, standardized)",
        historical: "Garlic appears in historic dietary practice as a staple associated with strength and resilience.",
        modern: "Odor‑controlled extracts offer a practical way to include garlic while minimizing odor; widely researched for cardiovascular support.",
        notes: "Odor‑neutral per your requirement."
      },
    ],
    addOns: [
      {
        title: "Targeted add‑ons (when needed)",
        items: [
          {
            name: "CoQ10 (commercial recommendation)",
            why: "A practical add‑on for people seeking mitochondrial/energy support—especially if not fully covered by the botanical core.",
            shopifyHandle: "coq10"
          },
          {
            name: "Beetroot (powder/extract)",
            why: "For those targeting exercise performance and nitric‑oxide related circulation support; include only if desired and not duplicative of diet.",
            shopifyHandle: "beetroot"
          },
        ],
      },
    ],
    cautions: [
      "If on blood pressure meds, nitrates, or anticoagulants, consult a clinician before use.",
      "Stop use and consult a clinician if adverse symptoms occur.",
    ],
  },
  {
    slug: "urinary-flow-support",
    name: "Urinary Flow Support™",
    focus: "Urinary comfort • flow support • daily hydration habits",
    short: "A curated urinary support program combining historically rooted botanicals with vetted modern options—built to avoid duplication with the core programs.",
    heroBullets: [
      "Supports urinary comfort and healthy flow",
      "Supports normal bladder function",
      "Designed as a standalone program that can sit alongside either core",
    ],
    overview: [
      "Urinary Flow Support™ is curated as a stand‑alone program because urinary tract needs are not fully captured by the digestive or circulatory cores.",
      "We avoid duplication: the urinary program focuses on urinary comfort/flow, while the cores cover broader daily foundations.",
    ],
    ingredientStory: [
      {
        name: "Pumpkin seed",
        historical: "Pumpkin seed has traditional use as a nourishing food and is frequently referenced in modern herbal contexts for urinary comfort.",
        modern: "Widely used in contemporary supplements for urinary function and flow support.",
      },
      {
        name: "Nettle root (curated)",
        historical: "Nettle has a broad traditional record; root preparations are commonly used in modern tradition‑aligned urinary programs.",
        modern: "Frequently used for urinary flow support in men’s health formulations (structure/function).",
      },
      {
        name: "Cranberry (commercial recommendation)",
        historical: "A modern standard option for urinary routines; included where appropriate.",
        modern: "Commonly used for urinary tract health support; we will link to a vetted product in Shopify.",
      },
    ],
    addOns: [
      {
        title: "Targeted add‑ons (when needed)",
        items: [
          {
            name: "D‑mannose (commercial recommendation)",
            why: "A widely used modern option for urinary comfort routines; add when relevant, not as a default.",
            shopifyHandle: "d-mannose"
          },
          {
            name: "Hibiscus (tea/extract)",
            why: "A tradition‑aligned botanical often used for hydration‑friendly routines; optional and lifestyle‑adjacent.",
            shopifyHandle: "hibiscus"
          },
        ],
      },
    ],
    cautions: [
      "If experiencing pain, fever, blood in urine, or symptoms suggestive of infection, seek medical evaluation.",
      "Consult a clinician if pregnant/nursing or on prescription meds.",
    ],
  },
];
