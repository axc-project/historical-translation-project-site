export const formulations = [
  {
    slug: "digestive-metabolic-core",
    tier: "Core",
    name: "Digestive Metabolic Core™",
    subtitle: "Digestive comfort • Motility • Post‑meal balance",
    heroTagline: "Foundation first: digestion, rhythm, and metabolic steadiness.",
    purchase: { label: "Purchase (Coming Soon)", href: "/shop" },
    cta: {
      label: "Notify Me",
      type: "email",
      email: "info@historicaltranslationproject.com",
      subject: "Notify me — Digestive Metabolic Core™",
      body:
`Hello Historical Translation Project™ team,

Please notify me when Digestive Metabolic Core™ becomes available.

Name:
Email:
City/State:
Interested product: Digestive Metabolic Core™

Thank you.`
    },
    serving: "Serving size: 2 capsules",
    overview:
      "A foundational botanical formula designed to support digestive comfort, healthy motility, and post‑meal balance—built as a daily core in a modular system.",
    formulaTable: {
      title: "Proposed formula (per 2‑capsule serving)",
      rows: [
        ["Fennel seed extract (Foeniculum vulgare) 10:1", "250 mg"],
        ["Cumin seed extract (Cuminum cyminum) 10:1", "200 mg"],
        ["Coriander seed extract (Coriandrum sativum) 10:1", "200 mg"],
        ["Ginger root extract (Zingiber officinale) (standardized to 5% gingerols)", "150 mg"],
        ["Black pepper extract (Piper nigrum) (standardized to 95% piperine)", "5 mg"]
      ],
      notes: [
        "Other ingredients: vegetable cellulose capsule, microcrystalline cellulose (generic excipients).",
        "Educational content only; not medical advice."
      ]
    },
    blocks: [
      {
        heading: "Who it’s for",
        body:
          "Designed for adults seeking general digestive comfort support and post‑meal ease as part of a wellness routine. Not intended to diagnose, treat, cure, or prevent any disease."
      },
      {
        heading: "Historical foundations (high level)",
        body:
          "Across medieval Mediterranean preventive frameworks, digestion is treated as a central pillar of resilience. Our approach follows that hierarchy: support digestive rhythm and comfort first, then layer targeted add‑ons if needed."
      },
      {
        heading: "Modern evidence overview (high level)",
        body:
          "The core ingredients are widely used culinary and supplemental botanicals with published research on digestive comfort and motility support. Human evidence varies by ingredient, preparation, and dose; this page summarizes general evidence categories and safety considerations without medical advice."
      },
      {
        heading: "Synergy logic",
        body:
          "Fennel, cumin, and coriander are traditional carminatives used together for digestive comfort. Ginger supports gastric comfort and motility. Low‑dose piperine is included to support absorption of select phytochemicals."
      },
      {
        heading: "Safety, interactions & cautions (important)",
        bullets: [
          "Consult a clinician if pregnant/nursing, have a medical condition, or take prescription medications.",
          "Apiaceae family sensitivity/allergy: fennel, cumin, and coriander may trigger reactions in susceptible individuals.",
          "Ginger may have additive effects with anticoagulants/antiplatelets in some contexts; use caution and consult your clinician if you take these medications.",
          "Piperine may influence absorption/metabolism of certain medications (potentially increasing levels). Use caution with narrow‑therapeutic‑index drugs and consult your clinician.",
          "Stop use if you experience an adverse reaction."
        ]
      },
      {
        heading: "Quality & manufacturing notes",
        bullets: [
          "Identity testing: botanical ID verification (HPTLC/DNA where appropriate).",
          "Purity testing: heavy metals, microbiology, pesticide residues.",
          "Standardization verification: gingerols (ginger) and piperine (black pepper) assay confirmation.",
          "Vegan capsule. Kosher certification depends on manufacturer and supply chain."
        ]
      },
      {
        heading: "Compliant structure/function examples",
        bullets: [
          "Supports digestive comfort after meals.",
          "Supports healthy gastrointestinal motility.",
          "Supports normal digestive function.",
          "Supports digestive rhythm and post‑meal ease.",
          "Supports healthy botanical antioxidant balance."
        ]
      }
    ]
  },

  {
    slug: "circulatory-vitality-core",
    tier: "Core",
    name: "Circulatory Vitality Core™",
    subtitle: "Circulation • Antioxidant balance • Cellular energy",
    heroTagline: "A preservation‑first vitality core—without stimulants.",
    purchase: { label: "Purchase (Coming Soon)", href: "/shop" },
    cta: {
      label: "Notify Me",
      type: "email",
      email: "info@historicaltranslationproject.com",
      subject: "Notify me — Circulatory Vitality Core™",
      body:
`Hello Historical Translation Project™ team,

Please notify me when Circulatory Vitality Core™ becomes available.

Name:
Email:
City/State:
Interested product: Circulatory Vitality Core™

Thank you.`
    },
    serving: "Serving size: 2 capsules",
    overview:
      "A second foundational core designed around circulation support and vitality preservation. Final ingredient list is in development and will be published with a full evidence-and-safety dossier prior to launch.",
    blocks: [
      {
        heading: "Why a second core",
        body:
          "In historical preventive models, sustaining vitality includes movement, circulation, and recovery. This core is designed to complement the digestive core while keeping routines simple."
      },
      {
        heading: "Planned design principles (placeholder)",
        bullets: [
          "Odor‑neutral approach (avoid strong garlic odor where possible).",
          "Polyphenol‑forward Mediterranean logic.",
          "Non‑stimulant daily use profile.",
          "Transparent safety and interaction disclosure before launch."
        ]
      },
      {
        heading: "Safety-first placeholder (important)",
        bullets: [
          "If you use anticoagulants/antiplatelets, blood pressure medications, or have a bleeding risk, consult a clinician before using circulation‑support supplements.",
          "Discontinue prior to procedures per clinician guidance.",
          "Stop use if adverse reaction occurs."
        ]
      }
    ]
  }
];

export function getFormulationBySlug(slug){ return formulations.find(f=>f.slug===slug); }
