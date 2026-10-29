export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  serviceType: string;
  isFeatured?: boolean;
  status: 'Completed' | 'Ongoing';
  description: string;
  outcomes?: {
    metric: string;
    label: string;
    note?: string;
  }[];
  highlights?: string[];
  link?: string;
  linkLabel?: string;
  images?: string[];
  tags: string[];
}

export interface MilestoneItem {
  number: string;
  title: string;
  subtitle: string;
  timeframe?: string;
  description: string;
  lessons: string[];
  link?: string;
  linkLabel?: string;
  stats?: {
    value: string;
    label: string;
  };
}

export const FOUNDER_DATA = {
  name: "Dangeti Jnana Kushal",
  shortName: "Kushal",
  role: "Founder, WEBB HEADS",
  designation: "Entrepreneur & Digital Strategist",
  education: "B.Tech Graduate in Computer Science & Business Systems",
  location: "Visakhapatnam & Hyderabad, India",
  heroImage: "/assets/kushal_hero.jpg",
  heroImageFull: "/assets/kushal_hero_full.jpg",
  
  bio: "From an early e-commerce experiment to building a marketing and technology agency, my journey has been shaped by practical execution, learning from setbacks, and helping businesses build their digital presence.",
  
  currentFocus: "Building WebbHeads into a business that connects digital strategy, content, websites, and technology.",
  
  purpose: "A concise introduction to my entrepreneurial journey, experience, and ambitions — shared in the spirit of learning from an experienced business leader.",

  documentedSkills: [
    "Client Relationship & Growth",
    "B2B Sales & Outreach",
    "Strategic Partnerships",
    "Digital Media Transformation",
    "Website Engineering",
    "Content-Led Audience Growth",
    "Business Development",
    "Operational Discipline"
  ],

  contact: {
    email: "dangetijnanakushal@gmail.com",
    phones: ["+91 9494259453", "+91 8985250220"],
    linkedin: "https://www.linkedin.com/in/djkushal",
    website: "https://www.webbheads.com/"
  },

  principles: [
    {
      title: "Operational Controls",
      quote: "A business model needs operational controls, not just a product and a sales channel."
    },
    {
      title: "End-to-End Economics",
      quote: "Customer acquisition and customer experience are connected; returns, fulfilment, and policies affect the economics."
    },
    {
      title: "Foundation of Trust",
      quote: "A service business depends on trust, clear scope, consistent delivery, and communication."
    },
    {
      title: "Continuous Evolution",
      quote: "A venture can evolve as the founder gains experience and a clearer understanding of the market."
    }
  ]
};

export const WEBBHEADS_DATA = {
  name: "WEBB HEADS",
  domain: "webbheads.com",
  url: "https://www.webbheads.com/",
  coreMission: "Digital Media Transformation",
  overview: "WebbHeads helps businesses transform their digital presence through strategic digital marketing, creative content, brand development, and technology-driven solutions. We focus on building a strong online identity, connecting businesses with their target audiences, and creating digital experiences that support business growth.",
  
  crossIndustryExposure: [
    "FMCG & Organic Products",
    "Real Estate & Land Development",
    "Print Media & Academic Portals",
    "Nanotechnology & CleanTech",
    "Community Initiatives & Sports"
  ]
};

export const PERSONAL_MILESTONES: MilestoneItem[] = [
  {
    number: "01",
    title: "Elixir.store",
    subtitle: "E-Commerce Dropshipping Experiment",
    timeframe: "1st Year B.Tech",
    description: "Launched during my first year of B.Tech, selling printed T-shirts through an online dropshipping model. The store generated approximately ₹17,000 in sales revenue.",
    lessons: [
      "Generated ~₹17,000 in gross revenue from direct online customer orders.",
      "Frequent returns and limited understanding of return policies, payment terms, and operational controls made the model difficult to sustain.",
      "Early hands-on lesson: unit economics and operational discipline matter just as much as marketing."
    ],
    stats: {
      value: "₹17,000",
      label: "Revenue Generated"
    }
  },
  {
    number: "02",
    title: "Sri Chess Academy",
    subtitle: "Website Development & Event Marketing",
    timeframe: "Visakhapatnam",
    description: "Worked with a prominent chess coaching company in Visakhapatnam, where I developed two websites: one for the coaching academy and another for its founder's personal portfolio. Beyond website development, I was entrusted with the marketing requirements for a chess event, including banner designs, promotional creatives, and event collaterals.",
    lessons: [
      "Engineered two custom web platforms: academy coaching portal + founder personal authority site.",
      "Handled comprehensive event marketing collaterals: large-format hoardings, tournament banners, and social creatives.",
      "First major client engagement translating offline sports activities into a coherent digital presence."
    ],
    stats: {
      value: "2 Sites + Event",
      label: "Delivered & Promoted"
    }
  },
  {
    number: "03",
    title: "Matrix Services Internship",
    subtitle: "Direct B2B Sales & Corporate Outreach",
    timeframe: "Sales Internship",
    description: "Completed a specialized internship focused on direct B2B corporate sales, gaining rigorous firsthand exposure to cold business outreach, corporate customer communication, and enterprise sales cycles.",
    lessons: [
      "Conducted direct B2B sales outreach and structured enterprise presentations.",
      "Learned the discipline of pipeline qualification, corporate objection handling, and relationship management.",
      "Connected customer business pain points directly to solution positioning."
    ],
    link: "https://www.matricservices.in/",
    linkLabel: "View Matrix Services",
    stats: {
      value: "B2B Sales",
      label: "Corporate Outreach"
    }
  },
  {
    number: "04",
    title: "Sunrise Group Internship",
    subtitle: "Real Estate Sales & High-Ticket Trust",
    timeframe: "Sales Internship",
    description: "Worked with real estate clients in a direct-sales context, learning about customer conversations, buyer psychology, and the paramount importance of transparency and trust in property-related decisions.",
    lessons: [
      "Facilitated direct buyer consultations for high-ticket property and land investments.",
      "Gained deep appreciation of why customer trust and clear due diligence dictate real estate transactions.",
      "Built the domain expertise that later informed real estate digital marketing strategies."
    ],
    stats: {
      value: "Real Estate",
      label: "Direct Sales & Trust"
    }
  },
  {
    number: "05",
    title: "Wrogx Internship",
    subtitle: "Digital Marketing & Direct Online Sales",
    timeframe: "Digital Marketing Internship",
    description: "Focused on online sales through targeted digital marketing campaigns. Leveraged performance ad copy and customer engagement to personally sell 9 units of the Wrogx Spin 100 stationary exercise bike.",
    lessons: [
      "Executed targeted digital campaigns driving qualified consumer traffic.",
      "Personally closed 9 direct units of the Wrogx Spin 100 stationary exercise bike.",
      "Understood buyer purchase friction in e-commerce fitness hardware."
    ],
    link: "https://www.flipkart.com/wrogx-spin-100-bike-adjustable-handlebar-magnetic-resistance-upright-stationary-exercise/p/itm722422c7fd980",
    linkLabel: "View Wrogx Spin 100 Reference",
    stats: {
      value: "9 Units Sold",
      label: "Spin 100 Stationary Bikes"
    }
  },
  {
    number: "06",
    title: "WEBB HEADS Agency Formation",
    subtitle: "Institutionalizing Freelance Work with a Structured Team",
    timeframe: "Current Chapter",
    description: "After gaining experience through independent projects and sales internships, I wanted to institutionalize my work by transitioning from freelancing to building a structured agency with a team, enabling us to expand our scope of work and take on larger client opportunities.",
    lessons: [
      "Structured agency operations combining website design, content creation, social media marketing, and digital growth.",
      "Built a dedicated creative and technical team to handle multi-disciplinary client engagements.",
      "Serving high-growth clients across FMCG, Real Estate, CleanTech, and Academic Publishing."
    ],
    stats: {
      value: "Founder-Led",
      label: "Marketing + Technology"
    }
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "avani-organics",
    name: "Avani Organics",
    category: "Organic Food Products & FMCG",
    serviceType: "Content Creation & Social Media Growth",
    isFeatured: true,
    status: "Completed",
    description: "Avani Organics is an organic food products business for which WebbHeads provides comprehensive content creation and social media support. The engagement has focused on high-retention video production, organic audience growth, product education (vermicomposting, pot-roasted cashews, organic farming techniques), and directing interested consumers to dedicated social and web channels.",
    outcomes: [
      {
        metric: "200K+",
        label: "Views on High-Performing Reel",
        note: "Reported organic viral reach on Instagram"
      },
      {
        metric: "750 → 4,300+",
        label: "Instagram Follower Growth",
        note: "Over approximately 3 months of consistent content execution"
      },
      {
        metric: "Direct Sales",
        label: "Commercial Impact Observed",
        note: "Observed direct customer enquiries and orders via social and website channels"
      }
    ],
    highlights: [
      "High-performing video storytelling focusing on product authenticity and organic farming provenance.",
      "Educational narrative arcs around vermicompost production and chemical-free roasted cashews.",
      "Engineered conversion touchpoints directing social audiences to the digital lander.",
      "Evidence note: Figures based on reported results; verified via Instagram Insights and analytics records."
    ],
    link: "https://avaniorganics.co.in/lander",
    linkLabel: "View Client Lander",
    images: [
      "/assets/projects/avani_farm_field.png",
      "/assets/projects/avani_vermicompost.png",
      "/assets/projects/avani_reel_1.png",
      "/assets/projects/avani_reel_2.png"
    ],
    tags: ["FMCG", "Short-Form Video", "Audience Growth", "Product Storytelling", "Organic Food"]
  },
  {
    id: "prahari-realty",
    name: "Prahari Realty",
    category: "Real Estate (Hyderabad)",
    serviceType: "Social Media Brand Development & Educational Content",
    isFeatured: true,
    status: "Ongoing",
    description: "An ongoing, early-stage engagement focused on building a consistent digital identity and creating educational video content that helps prospective buyers and investors navigate Hyderabad's real estate landscape. Content demystifies critical property topics, regional growth corridors such as the Outer Ring Road (ORR), and the fundamentals of land verification.",
    outcomes: [
      {
        metric: "15K+",
        label: "Views on High-Performing Reel",
        note: "Early reported reach on property education reel"
      },
      {
        metric: "0 → 400+",
        label: "Followers from Ground Zero",
        note: "Organic audience built within approximately two months"
      },
      {
        metric: "@prahari_realty",
        label: "Content Inspiration Channel",
        note: "Instagram handle driving educational authority & series reels"
      }
    ],
    highlights: [
      "Instagram account @prahari_realty developed for content inspiration and buyer education.",
      "Multi-part educational series '#decodeORR' unpacking how major infrastructure corridors transform property valuation.",
      "Consumer protection content guiding buyers on legal verification and smart land investment principles.",
      "Establishing long-term digital authority before aggressive commercial sales campaigns."
    ],
    link: "https://praharirealty.com/",
    linkLabel: "View Client Website",
    images: [
      "/assets/projects/notice you first.png",
      "/assets/projects/digital dominence.png",
      "/assets/projects/CRM and more.png",
      "/assets/projects/same same but diff.png"
    ],
    tags: ["Real Estate", "Hyderabad ORR", "Brand Authority", "Video Production", "@prahari_realty"]
  },
  {
    id: "callotropes",
    name: "Callotropes",
    category: "Nanotechnology & CleanTech",
    serviceType: "Website Design & Development",
    status: "Completed",
    description: "Callotropes is an advanced nanotechnology company developing sustainable carbon nanomaterials from biomass waste for energy and environmental applications. WebbHeads developed a professional corporate website to showcase its cutting-edge innovations, communicate technical offerings, and engage B2B stakeholders and institutional partners.",
    highlights: [
      "Structured information architecture for complex deep-tech and biomass material science.",
      "Clean, modern digital presentation tailored to institutional researchers, investors, and industrial clients.",
      "Showcased sustainable carbon nanomaterials engineered for modern energy storage and filtration."
    ],
    tags: ["CleanTech", "Nanotechnology", "B2B Web Engineering", "Biomass Materials"]
  },
  {
    id: "aum-free-yoga",
    name: "AUM Free Yoga",
    category: "Community Initiative & Health",
    serviceType: "Website Design & Development",
    status: "Completed",
    description: "AUM Free Yoga is a charitable yoga initiative offering free yoga instruction and holistic wellness guidance to the local community in Visakhapatnam. WebbHeads developed a dedicated website to communicate its mission, showcase daily schedules, and enable local residents to discover and join free sessions.",
    highlights: [
      "Designed an inviting, accessible web interface reflecting holistic community wellness.",
      "Streamlined session timings, venue locations, and teacher profiles for public participation.",
      "Amplified digital accessibility for a grassroots non-profit initiative."
    ],
    tags: ["Community", "Non-Profit", "Yoga & Wellness", "Visakhapatnam"]
  },
  {
    id: "yog-andhra",
    name: "Yog Andhra",
    category: "Government Event & Software Engineering",
    serviceType: "Participant Allocation & Seating Software",
    status: "Completed",
    description: "Contributed to the development of temporary participant seating and allocation software for Yog Andhra — a massive state-level yoga event organised with the Government of Andhra Pradesh and the Central Government, aiming for a Guinness World Records milestone. Engineered to streamline participant logistics, sector seating, and registration verification at scale.",
    highlights: [
      "Hands-on software development managing logistical allocation for thousands of event attendees.",
      "Developed under strict government event parameters and record-adjudication guidelines.",
      "Provided crucial operational reliability during high-throughput participant check-in."
    ],
    tags: ["Event Technology", "Guinness World Record Attempt", "Allocation Engine", "Govt of AP"]
  },
  {
    id: "veridica-publications",
    name: "Veridica Publications",
    category: "Academic Research & Publishing (Ongoing Project)",
    serviceType: "Digital Research Publication Portal",
    status: "Ongoing",
    description: "WebbHeads is currently developing a digital publication portal for Veridica Publications, designed to provide a peer-reviewed platform for publishing, indexing, and accessing academic research papers. The project is underway, with our focus on delivering a reliable, user-friendly platform that meets the publication's requirements and is completed within the agreed timeline.",
    highlights: [
      "Ongoing project under active development within agreed release milestones.",
      "Architected for research paper indexing, metadata tagging, and author submissions.",
      "Structured for high legibility, digital archiving, and cross-disciplinary citations."
    ],
    tags: ["Ongoing Project", "Academic Publishing", "Research Portal", "Web Architecture"]
  }
];

export const MYDIYAS_DATA = {
  title: "Mydiyas",
  badge: "Future Venture — Envisioned Initiative",
  conceptHeadline: "21st-Century Skills Development for the Next Generation",
  description: "Mydiyas is a future venture I envision to help the younger generation develop essential 21st-century skills that contribute to both professional success and personal growth. The concept is to build a hybrid learning ecosystem that combines online education with offline coaching, focusing on practical skills, critical thinking, communication, problem-solving, and self-development to help young people navigate their careers and lives with greater confidence.",
  
  pillars: [
    {
      number: "01",
      title: "Critical Thinking & Problem Solving",
      detail: "Teaching students and early professionals how to dissect complex real-world situations, evaluate evidence, and structure viable solutions."
    },
    {
      number: "02",
      title: "Business & Digital Communication",
      detail: "Mastering practical negotiation, collaborative discourse, digital storytelling, and executive presentation."
    },
    {
      number: "03",
      title: "Self-Development & Personal Mastery",
      detail: "Cultivating emotional resilience, operational discipline, financial awareness, and autonomous learning habits."
    },
    {
      number: "04",
      title: "Hybrid Learning Architecture",
      detail: "Bridging asynchronous digital masterclasses with hands-on offline cohort workshops, peer debates, and mentor critiques."
    }
  ],

  disclaimer: "Note: Mydiyas represents an upcoming, envisioned venture currently in conceptual planning for 21st-century learning. It is not currently operating as a commercial entity."
};
