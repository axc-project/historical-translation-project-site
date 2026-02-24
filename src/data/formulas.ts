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
  bottleImage?: string; // /images/bottles/...
  dossierUrl?: string; // link to PDF
  shopUrl?: string; // Shopify product page
  ingredientRationale?: { ingredient: string; rationale: string }[];
  evidence?: { label: string; url: string }[];
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
    image: "/images/hero-landscape.png",
    bottleImage: "/images/bottles/bottle-digestive.jpg",
    dossierUrl: "",
    shopUrl: "",
    ingredientRationale: [
      {
        ingredient: "Coriander seed",
        rationale:
          "Chosen for its long-standing culinary–medical role in Mediterranean digestive practice and its gentle carminative profile supporting post‑meal comfort.*"
      },
      {
        ingredient: "Fennel seed",
        rationale:
          "Selected as a classical aromatic used to support gas modulation and digestive ease; modern clinical work has evaluated fennel-containing preparations for GI comfort.*"
      },
      {
        ingredient: "Caraway seed",
        rationale:
          "Included as a traditional carminative; caraway (often in combination preparations) has been studied for functional dyspepsia and post‑meal discomfort.*"
      },
      {
        ingredient: "Ginger root (standardized)",
        rationale:
          "Added for evidence-informed support of nausea/dyspepsia pathways and gastric motility signaling; standardized gingerols support reproducibility.*"
      },
      {
        ingredient: "Peppermint leaf",
        rationale:
          "Included for smooth‑muscle relaxation and comfort signaling in the GI tract; peppermint oil/leaf preparations have been evaluated in IBS and GI discomfort.*"
      }
    ],
    evidence: [
      {
        label: "Peppermint oil for IBS: systematic review/meta‑analysis (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=peppermint+oil+irritable+bowel+syndrome+meta-analysis"
      },
      {
        label: "Ginger for functional dyspepsia: clinical evidence overview (PubMed search)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=ginger+functional+dyspepsia+randomized"
      },
      {
        label: "Caraway for dyspepsia: clinical evidence (PubMed search)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=caraway+functional+dyspepsia+trial"
      }
    ]
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
    image: "/images/hero-landscape.png",
    bottleImage: "/images/bottles/bottle-circulatory.jpg",
    dossierUrl: "",
    shopUrl: "",
    ingredientRationale: [
      {
        ingredient: "Olive leaf (20% oleuropein)",
        rationale:
          "Selected for its traditional Mediterranean lineage and standardized oleuropein content; human trials and meta-analyses have evaluated olive leaf extract for cardiovascular risk factors.*"
      },
      {
        ingredient: "Hawthorn",
        rationale:
          "Historically used for cardiac and vascular vitality; evaluated in randomized trials and meta-analyses (notably in chronic heart failure adjunct settings).*"
      },
      {
        ingredient: "Pomegranate",
        rationale:
          "Included for polyphenol-rich antioxidant vascular support; meta-analyses have reported blood pressure effects in clinical trials.*"
      },
      {
        ingredient: "Garlic",
        rationale:
          "Chosen for traditional use and mechanistic relevance to vascular tone; multiple meta-analyses have evaluated blood pressure outcomes with garlic supplementation.*"
      }
    ],
    evidence: [
      {
        label: "Olive leaf extract (oleuropein) and blood pressure: clinical evidence (PubMed search)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=olive+leaf+extract+oleuropein+blood+pressure+meta-analysis"
      },
      {
        label: "Hawthorn extract for chronic heart failure: meta‑analysis (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/12798455/"
      },
      {
        label: "Pomegranate juice and blood pressure: meta‑analysis (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/27888156/"
      },
      {
        label: "Garlic and blood pressure: meta‑analysis (PMC)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=aged+garlic+extract+blood+pressure+meta-analysis"
      }
    ]
  },
  {
    slug: "cellular-resilience-complex",
    name: "Cellular Resilience Complex™",
    category: "Advanced Immune & Cellular Support",
    heroTagline: "Supports immune balance and healthy cellular signaling.*",
    serving: "Serving Size: 4 capsules",
    ingredients: [
      { name: "Vitamin D3", amount: "50 mcg (2,000 IU)" },
      { name: "Broccoli Sprout Extract", amount: "200 mg" },
      { name: "Trametes versicolor (Turkey Tail) Extract", amount: "500 mg" },
      { name: "Curcumin Phytosome", amount: "500 mg" }
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
    image: "/images/hero-landscape.png",
    bottleImage: "/images/bottles/bottle-cellular.jpg",
    dossierUrl: "",
    shopUrl: "",
    ingredientRationale: [
      {
        ingredient: "Vitamin D3",
        rationale:
          "Selected due to its central role in immune signaling and widespread deficiency risk; large meta-analyses have evaluated supplementation and respiratory infection outcomes.*"
      },
      {
        ingredient: "Broccoli sprout extract",
        rationale:
          "Chosen for sulforaphane/glucoraphanin pathway relevance (Nrf2/antioxidant response); human trials have evaluated broccoli sprout extracts in metabolic and biomarker settings.*"
      },
      {
        ingredient: "Trametes versicolor (Turkey Tail)",
        rationale:
          "Included for immune-modulating polysaccharide fractions (e.g., PSP/PSK) with clinical investigation history, including oncology-support contexts.*"
      },
      {
        ingredient: "Curcumin phytosome",
        rationale:
          "Curcumin is widely studied for inflammatory balance; phytosome delivery is used to improve absorption versus raw curcumin.*"
      }
    ],
    evidence: [
      {
        label: "Vitamin D and acute respiratory infections: IPD meta‑analysis (BMJ)",
        url: "https://pubmed.ncbi.nlm.nih.gov/28202713/"
      },
      {
        label: "Broccoli sprout extract RCT (Nature Microbiology, 2025)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=broccoli+sprout+extract+randomized+trial+sulforaphane"
      },
      {
        label: "Trametes versicolor phase I trial post‑radiotherapy (PMC)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3369477/"
      },
      {
        label: "Phytosomal curcumin clinical study (PMC)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=curcumin+phytosome+randomized+trial"
      }
    ]
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
    image: "/images/hero-landscape.png",
    bottleImage: "/images/bottles/bottle-urinary.jpg",
    dossierUrl: "",
    shopUrl: "",
    ingredientRationale: [
      {
        ingredient: "Pumpkin seed",
        rationale:
          "Included for traditional urinary comfort use and clinical study history in male LUTS/BPH symptom scoring outcomes.*"
      },
      {
        ingredient: "Nettle root",
        rationale:
          "Selected for historical use in urinary flow support and clinical trials in BPH symptom contexts.*"
      },
      {
        ingredient: "Cranberry extract",
        rationale:
          "Included for urinary tract support tradition and evidence base in recurrent UTI prevention via anti-adhesion PAC mechanisms.*"
      }
    ],
    evidence: [
      {
        label: "Pumpkin seed for LUTS/BPH (GRANU study, PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/25196580/"
      },
      {
        label: "Stinging nettle root in BPH (placebo‑controlled study, PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/15045190/"
      },
      {
        label: "Cranberry and recurrent UTI prevention: meta‑analysis (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/29046404/"
      },
      {
        label: "d‑Mannose for recurrent UTI prevention: RCT (PubMed, 2024)",
        url: "https://pubmed.ncbi.nlm.nih.gov/38587819/"
      }
    ]
  }
];

export function getFormulaBySlug(slug: string) {
  return formulas.find((f) => f.slug === slug);
}
