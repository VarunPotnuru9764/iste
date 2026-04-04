import { cn } from "@/lib/utils";

type TemplateStyle = {
  sectionAccent: string;
  sigChip: string;
  statusChip: string;
  cardBorder: string;
  hoverBorder: string;
  button: string;
  tag: string;
};

export const PROJECT_TEMPLATE_KEYS = [
  "crypt",
  "clutch",
  "concrete",
  "chronicle",
  "catalyst",
  "charge",
  "create",
  "credit",
] as const;

export type ProjectTemplateKey = (typeof PROJECT_TEMPLATE_KEYS)[number];

const baseStyle: TemplateStyle = {
  sectionAccent: "from-primary/20 via-primary/10 to-transparent",
  sigChip: "border-primary/40 bg-primary/10 text-primary",
  statusChip: "border-secondary/40 bg-secondary/10 text-secondary",
  cardBorder: "border-white/10",
  hoverBorder: "hover:border-primary/40",
  button:
    "border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-white",
  tag: "border-white/15 bg-white/5 text-gray-200",
};

const sigTemplateStyles: Record<ProjectTemplateKey, Partial<TemplateStyle>> = {
  crypt: {
    sectionAccent: "from-cyan-400/25 via-sky-500/10 to-transparent",
    sigChip: "border-cyan-300/40 bg-cyan-400/10 text-cyan-200",
    statusChip: "border-sky-300/40 bg-sky-400/10 text-sky-200",
    hoverBorder: "hover:border-cyan-300/45",
    button:
      "border-cyan-300/40 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-300 hover:text-slate-950",
    tag: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
  },
  clutch: {
    sectionAccent: "from-lime-400/20 via-emerald-400/10 to-transparent",
    sigChip: "border-lime-300/40 bg-lime-300/10 text-lime-200",
    statusChip: "border-emerald-300/40 bg-emerald-300/10 text-emerald-200",
    hoverBorder: "hover:border-lime-300/45",
    button:
      "border-lime-300/40 bg-lime-300/10 text-lime-200 hover:bg-lime-300 hover:text-slate-950",
    tag: "border-lime-300/20 bg-lime-300/10 text-lime-100",
  },
  concrete: {
    sectionAccent: "from-slate-200/20 via-zinc-300/10 to-transparent",
    sigChip: "border-slate-200/35 bg-slate-200/10 text-slate-100",
    statusChip: "border-zinc-300/35 bg-zinc-200/10 text-zinc-100",
    hoverBorder: "hover:border-slate-200/45",
    button:
      "border-slate-200/35 bg-slate-200/10 text-slate-100 hover:bg-slate-200 hover:text-slate-950",
    tag: "border-slate-100/20 bg-slate-100/10 text-slate-50",
  },
  chronicle: {
    sectionAccent: "from-fuchsia-300/20 via-pink-300/10 to-transparent",
    sigChip: "border-fuchsia-300/40 bg-fuchsia-300/10 text-fuchsia-200",
    statusChip: "border-pink-300/40 bg-pink-300/10 text-pink-200",
    hoverBorder: "hover:border-fuchsia-300/45",
    button:
      "border-fuchsia-300/40 bg-fuchsia-300/10 text-fuchsia-200 hover:bg-fuchsia-300 hover:text-slate-950",
    tag: "border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-100",
  },
  catalyst: {
    sectionAccent: "from-amber-300/25 via-orange-300/10 to-transparent",
    sigChip: "border-amber-300/40 bg-amber-300/10 text-amber-200",
    statusChip: "border-orange-300/40 bg-orange-300/10 text-orange-200",
    hoverBorder: "hover:border-amber-300/45",
    button:
      "border-amber-300/40 bg-amber-300/10 text-amber-200 hover:bg-amber-300 hover:text-slate-950",
    tag: "border-amber-300/20 bg-amber-300/10 text-amber-100",
  },
  charge: {
    sectionAccent: "from-yellow-300/25 via-orange-200/10 to-transparent",
    sigChip: "border-yellow-300/40 bg-yellow-300/10 text-yellow-200",
    statusChip: "border-orange-200/40 bg-orange-200/10 text-orange-100",
    hoverBorder: "hover:border-yellow-300/45",
    button:
      "border-yellow-300/40 bg-yellow-300/10 text-yellow-200 hover:bg-yellow-300 hover:text-slate-950",
    tag: "border-yellow-300/20 bg-yellow-300/10 text-yellow-100",
  },
  create: {
    sectionAccent: "from-rose-300/25 via-violet-300/10 to-transparent",
    sigChip: "border-rose-300/40 bg-rose-300/10 text-rose-200",
    statusChip: "border-violet-300/40 bg-violet-300/10 text-violet-200",
    hoverBorder: "hover:border-rose-300/45",
    button:
      "border-rose-300/40 bg-rose-300/10 text-rose-200 hover:bg-rose-300 hover:text-slate-950",
    tag: "border-rose-300/20 bg-rose-300/10 text-rose-100",
  },
  credit: {
    sectionAccent: "from-indigo-300/25 via-blue-300/10 to-transparent",
    sigChip: "border-indigo-300/40 bg-indigo-300/10 text-indigo-200",
    statusChip: "border-blue-300/40 bg-blue-300/10 text-blue-200",
    hoverBorder: "hover:border-indigo-300/45",
    button:
      "border-indigo-300/40 bg-indigo-300/10 text-indigo-200 hover:bg-indigo-300 hover:text-slate-950",
    tag: "border-indigo-300/20 bg-indigo-300/10 text-indigo-100",
  },
};

export const getSigTemplateStyle = (
  projectTemplate?: string,
  sigSlug?: string
): TemplateStyle => {
  const key = (projectTemplate ?? sigSlug ?? "crypt") as ProjectTemplateKey;
  const custom = sigTemplateStyles[key] ?? sigTemplateStyles.crypt;

  return {
    sectionAccent: cn(baseStyle.sectionAccent, custom.sectionAccent),
    sigChip: cn(baseStyle.sigChip, custom.sigChip),
    statusChip: cn(baseStyle.statusChip, custom.statusChip),
    cardBorder: cn(baseStyle.cardBorder, custom.cardBorder),
    hoverBorder: cn(baseStyle.hoverBorder, custom.hoverBorder),
    button: cn(baseStyle.button, custom.button),
    tag: cn(baseStyle.tag, custom.tag),
  };
};
