// ============================================================
// CENTRAL CONTENT FILE — edit everything about the site here.
// Fields marked [TODO: LinkedIn] need real data from
// https://www.linkedin.com/in/thealexgrey/
// ============================================================

export const profile = {
  name: 'Akhilesh Reddy',
  brand: 'AKHILESH.',
  signature: 'Akhilesh',
  location: 'Hyderabad, India',
  email: 'team@zerodesk.in',
  linkedin: 'https://www.linkedin.com/in/thealexgrey/',
  company: {
    name: 'ZeroDesk',
    url: 'https://zerodesk.in',
    tagline: '24/7 Autonomous AI Front Desk for Indian SMBs',
  },
} as const;

export const hero = {
  headlineLines: [
    { text: 'I BUILD', tone: 'light' },
    { text: 'BRANDS THAT', tone: 'gold' },
    { text: 'CONVERT.', tone: 'amber' },
  ] as const,
  roles: [
    'PERFORMANCE MARKETER',
    'CREATIVE DIRECTOR',
    'AI & RAG BUILDER',
  ] as const,
  bio: [
    'I turn ad spend into revenue engines and ideas into brands.',
    'Founder of ZeroDesk — where marketing instinct meets AI infrastructure.',
  ] as const,
  quote: {
    line1: 'STORY IS MY WEAPON.',
    line2: 'GROWTH IS MY PROOF.',
  },
  ctas: {
    primary: { label: 'EXPLORE MY WORK', href: '#work' },
    secondary: { label: "LET'S TALK", href: '#contact' },
  },
} as const;

export const about = {
  eyebrow: '01 / ABOUT ME',
  headline: ['I DON\u2019T JUST RUN ADS.', 'I BUILD GROWTH ENGINES.'],
  bio: `I'm Akhilesh Reddy, a performance marketing and creative direction specialist from Hyderabad, and the founder of ZeroDesk — an AI infrastructure company building 24/7 autonomous front-desk systems for Indian businesses. I operate at the intersection of paid media, brand storytelling, and applied AI: engineering funnels that convert, creative that stops the scroll, and RAG-powered systems that think. [TODO: LinkedIn — add years of experience, education, certifications]`,
  stats: [
    { value: '[TODO]', label: 'AD SPEND MANAGED' },
    { value: '[TODO]', label: 'AVG. ROAS DELIVERED' },
    { value: '[TODO]', label: 'BRANDS SCALED' },
    { value: '24/7', label: 'AI SYSTEMS DEPLOYED' },
  ],
} as const;

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  link: string;
  linkLabel: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'ZeroDesk',
    category: 'AI VOICE INFRASTRUCTURE',
    description:
      'Founded and built an autonomous AI front desk for Indian SMBs — a multi-lingual voice receptionist speaking English, Hindi & Telugu, with live calendar booking, instant WhatsApp automation, and a unified CRM dashboard. Deployed across clinics, salons, real estate, and hospitality.',
    link: 'https://zerodesk.in',
    linkLabel: 'VISIT ZERODESK',
    tech: [
      'Voice AI',
      'RAG Pipelines',
      'WhatsApp Automation',
      'Calendar Sync',
      'CRM Dashboard',
      'Prompt Engineering',
    ],
    metrics: [
      { label: 'LANGUAGES', value: 'EN • HI • TE' },
      { label: 'UPTIME', value: '24/7/365' },
      { label: 'GO-LIVE', value: '14 Days' },
    ],
  },
  {
    number: '02',
    title: 'Custom RAG Systems',
    category: 'AI / KNOWLEDGE INFRASTRUCTURE',
    description:
      'Designing retrieval-augmented generation systems trained on business-specific data — pricing, service FAQs, and operational knowledge — with anti-hallucination guardrails. Turning company knowledge into instant, accurate answers across chat and voice channels.',
    link: 'https://zerodesk.in/architecture',
    linkLabel: 'VIEW ARCHITECTURE',
    tech: [
      'RAG',
      'Vector Search',
      'LLM Orchestration',
      'Python',
      'Anti-Hallucination',
      'Knowledge Hubs',
    ],
    metrics: [
      { label: 'ENGINE', value: 'Retrieval + LLM' },
      { label: 'TRAINING', value: 'Your Business Data' },
      { label: 'ACCURACY', value: 'Zero-Hallucination' },
    ],
  },
  {
    number: '03',
    title: 'Performance Marketing Engine',
    category: 'GROWTH / PAID MEDIA',
    description:
      'Full-funnel paid media systems across Meta and Google — engineered creatives, audience architecture, and relentless CRO. Built to turn attention into pipeline and pipeline into revenue. [TODO: add case-study metrics from ad accounts]',
    link: '#contact',
    linkLabel: 'REQUEST CASE STUDIES',
    tech: [
      'Meta Ads',
      'Google Ads',
      'Funnel Engineering',
      'CRO',
      'Audience Architecture',
      'Analytics',
    ],
    metrics: [
      { label: 'PLATFORMS', value: 'Meta + Google' },
      { label: 'FOCUS', value: 'Full-Funnel ROAS' },
      { label: 'CASE STUDIES', value: '[TODO]' },
    ],
  },
  {
    number: '04',
    title: 'Brand & Creative Direction',
    category: 'CONTENT / VIDEO SYSTEMS',
    description:
      'End-to-end brand management and creative direction — social media management, video editing, campaign concepts, and design systems. Building brands with a voice, a look, and a growth loop behind them. [TODO: add notable campaigns from LinkedIn]',
    link: '#contact',
    linkLabel: 'SEE THE WORK',
    tech: [
      'Brand Management',
      'Video Editing',
      'Social Media Management',
      'Campaign Concepts',
      'Design Systems',
      'Storytelling',
    ],
    metrics: [
      { label: 'SCOPE', value: 'Strategy → Edit' },
      { label: 'CHANNELS', value: 'Social + Video' },
      { label: 'CAMPAIGNS', value: '[TODO]' },
    ],
  },
];

export interface SkillCategory {
  title: string;
  badge: string;
  items: string[];
  description: string;
  stat: string;
  colSpan: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'PERFORMANCE MARKETING',
    badge: 'CORE PILLAR',
    items: ['Meta Ads', 'Google Ads', 'Funnel Engineering', 'CRO'],
    description:
      'Engineering paid media systems that scale — full-funnel architecture, creative testing at volume, and conversion optimization that compounds.',
    stat: 'FULL-FUNNEL',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'BRAND & CREATIVE DIRECTION',
    badge: 'STORYTELLING',
    items: ['Video Editing', 'Campaign Concepts', 'Design Systems', 'Copywriting'],
    description:
      'Directing brands end-to-end — from positioning and visual identity to scroll-stopping video edits and campaign systems that carry a voice.',
    stat: 'STRATEGY → EDIT',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'SOCIAL & DIGITAL',
    badge: 'GROWTH CHANNELS',
    items: ['Social Media Management', 'Content Strategy', 'Community', 'Analytics'],
    description:
      'Owning the always-on channels — content calendars, community engagement, and analytics loops that feed back into creative and spend decisions.',
    stat: 'ALWAYS-ON',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'AI & RAG DEVELOPMENT',
    badge: 'INTELLIGENCE',
    items: ['RAG Pipelines', 'Prompt Engineering', 'Voice AI', 'Automation'],
    description:
      'Building retrieval-augmented systems on business data — voice agents, knowledge hubs, and automation layers that replace manual front-desk labor.',
    stat: 'PRODUCTION AI',
    colSpan: 'lg:col-span-7',
  },
];

export interface JourneyStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

export const journey: JourneyStop[] = [
  {
    id: '01',
    year: '2025 — PRESENT',
    title: 'FOUNDER & LEAD ARCHITECT',
    organization: 'ZERODESK',
    description:
      'Founded ZeroDesk — building 24/7 autonomous AI front-desk systems (voice AI, live booking, WhatsApp automation) deployed across clinics, salons, real estate, and hospitality.',
  },
  {
    id: '02',
    year: '[TODO: LinkedIn]',
    title: '[ROLE]',
    organization: '[COMPANY]',
    description:
      '[TODO: Add role, company, and achievements from LinkedIn — e.g. performance marketing roles, brand management positions, or agency work.]',
  },
  {
    id: '03',
    year: '[TODO: LinkedIn]',
    title: '[ROLE]',
    organization: '[COMPANY]',
    description:
      '[TODO: Add earlier roles — marketing, creative, or media work from LinkedIn.]',
  },
  {
    id: '04',
    year: '[TODO: LinkedIn]',
    title: '[EDUCATION]',
    organization: '[INSTITUTION]',
    description:
      '[TODO: Add education and certifications from LinkedIn.]',
  },
];

export const contact = {
  eyebrow: '05 / CONTACT',
  headline: ["LET'S BUILD", 'SOMETHING LOUD.'],
  blurb:
    'Have a brand to scale, a funnel to fix, or an AI system to deploy? Send a direct dispatch below.',
  socials: [
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/thealexgrey/' },
    { label: 'ZERODESK', href: 'https://zerodesk.in' },
    { label: 'EMAIL', href: 'mailto:team@zerodesk.in' },
  ],
} as const;
