// Shared site data. Copy follows the tekFoundation brand guidelines:
// confident, clear, human — "we amplify the impact of charities."

export const SITE = {
  name: "tekFoundation",
  abn: "21679029826",
  email: "joni@tekfoundation.org.au",
  liveSite: "https://www.tekfoundation.org.au",
  linkedin: "https://www.linkedin.com/company/tekfoundation/",
  instagram: "https://www.instagram.com/tekfoundation_/",
};

// ── Functional embeds (preserve — do not rewire) ────────────────────────

// LeadConnector sign-up/interest survey, lifted verbatim from the live site.
export const SIGNUP_SURVEY = {
  src: "https://api.leadconnectorhq.com/widget/survey/blu8pS2IoHrMNfA3KcVG",
  id: "blu8pS2IoHrMNfA3KcVG",
  script: "https://link.msgsndr.com/js/form_embed.js",
};

// Donation config replicated 1:1 from the live Squarespace donation block
// (block-context JSON on tekfoundation.org.au/donate). Payment itself is
// completed on the live checkout — see DonationWidget for the handoff.
export const DONATION = {
  checkoutUrl: "https://www.tekfoundation.org.au/donate",
  currencySymbol: "$",
  currencyCode: "AUD",
  suggestedAmounts: [50, 100, 500, 1500],
  customAmountEnabled: true,
  frequencies: [
    { value: "ONE_TIME", label: "One-Time Donation" },
    { value: "MONTHLY", label: "Monthly Donation" },
  ],
  defaultFrequency: "ONE_TIME",
  coverTheFee: {
    enabled: true,
    feePercent: 3.0,
    description: "Support us by covering the payment fees.",
    lineLabel: "3% Cover the Fee",
  },
  buttonText: "Donate Today",
  disclaimer:
    "Thank you for considering a donation! While we're registered with the ACNC, we do not currently hold Deductible Gift Recipient (DGR) status, so direct donations are not tax-deductible. However, if you wish to make a tax-deductible donation of $5,000 or more, we've recently formed an auspice partnership with a DGR-endorsed organisation. Please contact us at joni@tekfoundation.org.au for details. We appreciate your support and are committed to transparency.",
};

// ── Content ─────────────────────────────────────────────────────────────

export const STATS = [
  { value: "55+", label: "Charities matched with skilled volunteers since 2023" },
  { value: "2,000+", label: "Hours of expertise donated by 70+ volunteers" },
  { value: "$320k+", label: "Value delivered through digital services" },
];

export const TESTIMONIALS = [
  {
    quote:
      "It's been such a positive and reassuring experience. It's made what could have been quite a daunting process feel much more achievable. I'm very grateful for the time (the volunteer) is giving us and the way he's helping untangle our technology maze.",
    name: "Yvonne Balakian",
    role: "Operations Manager, Skillz4me",
    avatar: "/images/testimonials/yvonne-balakian.png",
  },
  {
    quote:
      "There's a hundred times that I've thought to myself, I could put up a job ad. But the reality is you have to vet people. Having tekFoundation take that process out makes it so accessible and I trust the candidates you're sending back.",
    name: "Maddie Catlin",
    role: "General Manager, Future2 Foundation",
    avatar: "/images/testimonials/maddie-catlin.jpeg",
  },
  {
    quote:
      "tekFoundation have been a brilliant resource for our organisation and the NFPs we support across the country. They have been able to very quickly find and recruit volunteers with the skills, knowledge and enthusiasm to really dig deep and help where they're needed most.",
    name: "James Happell",
    role: "Asia Pacific Consultant Lead, Infoxchange",
    avatar: "/images/testimonials/james-happell.jpeg",
  },
];

export const CHARITY_TESTIMONIALS = [
  {
    quote:
      "Thank you tekFoundation, your work in the charity space is incredible and should be an example to other organisations. Love you guys.",
    name: "Cheryl Sing",
    role: "Founder & Director, The Laptop Initiative",
  },
  {
    quote:
      "We had our first meeting with Darren yesterday, and he was absolutely fantastic. He's already sorted out some issues and explained a lot of things we didn't know. He's definitely the unicorn we were searching for!",
    name: "Claire Torkington",
    role: "CEO, Ability Enterprises",
  },
];

// "Trusted by" strip. logo path is relative to /public.
export const CHARITY_NETWORK = [
  { name: "OzHarvest", href: "https://www.ozharvest.org", logo: "/images/logos/charities/ozharvest.svg" },
  { name: "Wagga Women's Health Centre", href: "https://www.wwhc.org.au", logo: "/images/logos/charities/wwhc.png" },
  { name: "FoodLab Sydney", href: "https://foodlabsydney.com", logo: "/images/logos/charities/foodlab-sydney.webp" },
  { name: "Kids with Cancer Foundation", href: "https://kidswithcancer.org.au", logo: "/images/logos/charities/kids-with-cancer.png" },
  { name: "Ability Enterprises", href: "https://www.abilityenterprises.com.au", logo: "/images/logos/charities/ability-enterprises.jpg" },
  { name: "future2 Foundation", href: "https://future2.org.au", logo: "/images/logos/charities/future2.png" },
  { name: "The Laptop Initiative", href: "https://thelaptopinitiative.org.au", logo: "/images/logos/charities/laptop-initiative.png" },
  { name: "Kookaburra Kids", href: "https://www.kookaburrakids.org.au", logo: "/images/logos/charities/kookaburra-kids.png" },
  { name: "Fiji Book Drive", href: "", logo: "/images/logos/charities/fiji-book-drive.png" },
  { name: "LocalKind", href: "", logo: "/images/logos/charities/localkind.webp" },
  { name: "Diabetes Australia", href: "https://www.diabetesaustralia.com.au", logo: "/images/logos/charities/diabetes-australia.webp" },
  { name: "St. Francis Social Services", href: "https://sfss.org.au", logo: "" },
];

export const PROJECT_TYPES = [
  { icon: "design", label: "Website design" },
  { icon: "code", label: "Software support" },
  { icon: "megaphone", label: "Marketing" },
  { icon: "chart", label: "Data & reporting" },
  { icon: "wrench", label: "IT support & strategy" },
  { icon: "spark", label: "AI coaching" },
  { icon: "coins", label: "Finance & accounting" },
  { icon: "shield", label: "Cyber security" },
];

export const MEMBERSHIP_TIERS = [
  {
    name: "Basic",
    price: "$500",
    cadence: "/ year",
    blurb:
      "For events, networking and access to our vetted online community for self-service volunteer support.",
    featured: false,
    items: [
      "Unlimited online community access",
      "Self-managed volunteer requests",
      "Free virtual events",
      "Discounts on in-person events for networking & matchmaking",
      "Discounts on products & services",
    ],
  },
  {
    name: "Core",
    price: "$1,500",
    cadence: "/ year",
    blurb: "For charities seeking support with scoping projects and matching vetted volunteers.",
    featured: true,
    flag: "Most popular",
    items: [
      "Everything in Basic, plus:",
      "Up to 2 tekFoundation-supported digital initiatives / year",
      "Complete sourcing & matching support",
      "Event speaking opportunities",
      "Social media & newsletter features",
    ],
  },
  {
    name: "Enterprise",
    price: "$5,000",
    cadence: "/ year",
    blurb:
      "For charities over $10M annual revenue or 20+ paid staff, whose membership helps sustain access for smaller charities.",
    featured: false,
    items: [
      "Everything in Core, plus:",
      "Dedicated program manager",
      "A chance to host or contribute to peer learning opportunities",
    ],
  },
];

export const PARTNER_TIERS = [
  {
    name: "Impact Supporter",
    price: "$5,000",
    blurb: "A light-weight option to back tech-for-good and explore skilled volunteering.",
    unlocks: "Unlocks support for 3 grassroots charities",
    featured: false,
    groups: [
      {
        heading: "What's included",
        items: [
          "Official digital partner badge",
          "Website, newsletter and socials visibility",
          "tekFoundation event invites",
        ],
      },
      {
        heading: "Skilled volunteering",
        items: [
          "Employees invited to access our online community and self-select into skilled volunteering projects",
        ],
      },
    ],
  },
  {
    name: "Impact Builder",
    price: "$15,000",
    blurb: "For organisations ready for a stronger profile and structured employee engagement.",
    unlocks: "Unlocks support for 10 grassroots charities",
    featured: false,
    groups: [
      {
        heading: "Included + Supporter",
        items: [
          "Event recognition & speaking opportunities as sponsor",
          "Option to align funding to a CSR pillar, with mention",
        ],
      },
      {
        heading: "Skilled volunteering",
        items: ["Small-scale Volunteering as a Service (VaaS)", "Board-ready impact report"],
      },
    ],
  },
  {
    name: "Impact Catalyser",
    price: "$30,000",
    blurb:
      "For organisations wanting highly visible alignment, an official sector title, and powerful engagement.",
    unlocks: "Unlocks support for 20 grassroots charities",
    featured: false,
    groups: [
      {
        heading: "Included + Builder",
        items: [
          "Prominent logo placement on website and for events",
          "1 case study and blog article",
          "Free event ticket allocations",
          "Co-designed event or initiative",
          "Recognition as official sponsor for a CSR pillar",
        ],
      },
      {
        heading: "Skilled volunteering",
        items: ["Medium-scale VaaS"],
      },
    ],
  },
  {
    name: "Impact Anchor",
    price: "$50,000",
    blurb:
      "For strategic partners looking for premium ecosystem visibility and deep national impact.",
    unlocks: "Unlocks support for 30 grassroots charities",
    featured: false,
    groups: [
      {
        heading: "Included + Catalyser",
        items: [
          "Premium logo placements",
          "Lead event sponsor for the year and keynote speech",
          "Strategic digital capability partner designation",
          "Video storytelling",
        ],
      },
      {
        heading: "Skilled volunteering",
        items: ["Large-scale Volunteering as a Service (VaaS)"],
      },
    ],
  },
];

export const VAAS_FORMATS = [
  {
    name: "2-hour employee activation",
    bestFor: "Quick, low-complexity, high-value and volume.",
    body: "A lightweight session for teams to contribute in a short but impactful way. Ideal for curiosity, training, or quick fixes and deliverables. Staff are pre-mobilised individually, as pairs or small teams.",
    featured: false,
  },
  {
    name: "Year-round bespoke matching",
    bestFor: "Offering ongoing employee volunteering and holistic participation.",
    body: "A managed service for employees who want to contribute throughout the year, without your team having to coordinate every detail internally. We match individuals, pairs, or small teams to current charity needs and track impact.",
    featured: true,
  },
  {
    name: "12-week impactathon",
    bestFor: "A team-based deliverable, a CSR story with deeper impact and leadership investment.",
    body: "A structured program for teams to build together and deliver something tangible over a defined period. Especially useful for offsites, leadership involvement and demonstrating aggregate impact.",
    featured: false,
  },
];

export const FAQS = [
  {
    q: "How do you define skilled volunteering?",
    a: {
      intro: "A good fit for skilled volunteering usually means:",
      bullets: [
        "Volunteers do not receive payment or salary from your organisation.",
        "The work is clearly scoped, with a defined outcome and a practical path to delivery.",
        "The timing is flexible enough to suit volunteer availability.",
        "The volunteer role adds capacity and specialist skills, and does not replace paid staff or contractors.",
        "You can provide the context, goals, and resources needed to do the work well.",
        "Agreed expenses are covered.",
        "Legal, confidentiality, and intellectual property requirements are considered.",
      ],
      outro:
        "Some needs may be ongoing at the charity level, but the volunteer role itself should have clear boundaries, agreed expectations, and a finish point or review point. If the work is urgent, business-critical, or effectively requires ongoing capacity, it may be better suited to a paid or hybrid model.",
    },
  },
  {
    q: "What counts as an “Initiative”? (Up to 2 per year for Core)",
    a: {
      intro:
        "An initiative is based on a clearly scoped, standalone workstream — not on the number of meetings or volunteers involved. Examples include:",
      bullets: [
        "Rebuilding a donations page to optimise user journeys.",
        "Cleaning up CRM data and creating a reliable reporting dashboard.",
        "Refreshing an entire website to integrate a new brand layout.",
      ],
      intro2: "Things that sit outside a single initiative:",
      bullets2: [
        "Introductory calls, high-level triage, or general mentoring without a defined output.",
        "Ongoing support that effectively requires a standing, unpaid role with no finish point.",
        "Urgent, business-critical delivery with rigid, contractor-style deadlines.",
      ],
      outro:
        "If an initiative naturally expands beyond its original boundaries, we will always pause and collectively decide how to categorise it before moving forward.",
    },
  },
];

export const ACKNOWLEDGEMENT = {
  body: "tekFoundation acknowledges the Traditional Custodians of the lands on which we work, innovate, and build relationships. We pay our deepest respects to their Elders past, present, and emerging. tekFoundation recognises that Aboriginal and Torres Strait Islander cultures are the oldest living continuous cultures in the world, and we honour their deep connection to the land, waters, skies, and community.",
  credit:
    "Crafted with Land on Heart, advancing first nation's cultural awareness in a digital world.",
};
