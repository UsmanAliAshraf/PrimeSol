const BASE = "https://www.primesol.co";

const webDevelopment = {
    slug: "web-development",
    name: "Web Development",

    metadata: {
        title: "Custom Web Development Services | Websites & Web Apps | PrimeSol",
        description:
            "PrimeSol builds fast, conversion-focused websites and custom web applications — business sites, portals, dashboards, and internal tools — designed to attract customers and improve daily operations.",
        keywords: [
            "custom web development",
            "website development services",
            "web application development",
            "business website design",
            "Next.js development",
            "web app development agency",
            "custom website development Pakistan",
        ],
        canonical: `${BASE}/services/web-development`,
    },

    schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Custom Web Development Services",
        description:
            "Fast, conversion-focused websites and custom web applications for businesses that need a strong digital presence and practical internal tools.",
        provider: {
            "@type": "Organization",
            name: "PrimeSol",
            url: BASE,
        },
        areaServed: "Worldwide",
        serviceType: "Web Development",
        url: `${BASE}/services/web-development`,
    },

    hero: {
        badge: "Web Development",
        h1: "Custom Websites & Web Apps That||Work as Hard||as Your Business",
        subtitle:
            "We build fast, clean, conversion-focused websites and web applications — from business sites and landing pages to portals, dashboards, and internal tools that your team uses every day.",
        primaryCta: { label: "Start a Project", href: "/contact" },
        secondaryCta: { label: "View Our Work", href: "/projects" },
    },

    problems: [
        {
            icon: "🐢",
            title: "Your current website is slow and losing visitors",
            description:
                "Every second of load time costs you visitors. Slow sites rank lower in Google and drive away potential customers before they see your offer.",
        },
        {
            icon: "📱",
            title: "The site doesn't work properly on mobile",
            description:
                "More than half of web traffic is mobile. If your site breaks, scrolls awkwardly, or looks outdated on a phone, you are losing real business.",
        },
        {
            icon: "🔍",
            title: "Visitors arrive but don't convert into leads",
            description:
                "Traffic without conversion is wasted marketing budget. Most business sites fail to guide visitors to the action that actually matters.",
        },
        {
            icon: "🛠",
            title: "Your team relies on manual tools and spreadsheets",
            description:
                "Internal operations run on workarounds — spreadsheets, email threads, and manual data entry — because there's no proper web app built for the job.",
        },
        {
            icon: "🔒",
            title: "The current site has no proper security or authentication",
            description:
                "Outdated sites without SSL, secure login, or proper access controls expose your business and your customers to unnecessary risk.",
        },
        {
            icon: "📦",
            title: "You can't update content without a developer",
            description:
                "Every small text change or image swap requires a developer ticket. You end up with outdated content because updates are too slow and expensive.",
        },
    ],

    solution: {
        title: "How We Build Your Web Solution",
        steps: [
            {
                step: "01",
                title: "Discovery & Scope",
                description:
                    "We learn how your business works, who your customers are, what actions the site needs to drive, and what the technical requirements are before designing anything.",
            },
            {
                step: "02",
                title: "UI/UX Design",
                description:
                    "We design the layout, user flows, and visual direction. You see and approve every screen before development begins — no surprises.",
            },
            {
                step: "03",
                title: "Development",
                description:
                    "We build with modern, performant technology — Next.js, React, clean backends — with mobile responsiveness, fast load times, and SEO structure built in from the start.",
            },
            {
                step: "04",
                title: "Testing & QA",
                description:
                    "We test across devices, browsers, screen sizes, and connection speeds. Forms, links, performance, and accessibility are all verified before launch.",
            },
            {
                step: "05",
                title: "Launch & Support",
                description:
                    "We deploy to a production environment and stay available for fixes, improvements, and updates after launch. Handover includes documentation for anything you manage yourself.",
            },
        ],
    },

    useCases: [
        {
            industry: "Service Businesses",
            title: "Lead-Generating Business Websites",
            description:
                "Clean, fast websites that explain your offer clearly, build trust through social proof, and turn visitors into qualified leads via contact forms and CTAs.",
            link: "/projects",
        },
        {
            industry: "SaaS & Startups",
            title: "Marketing Sites & Product Landing Pages",
            description:
                "High-converting product sites with feature breakdowns, pricing tables, trial CTAs, and the speed required for good Quality Scores on paid ads.",
            link: "/projects",
        },
        {
            industry: "Internal Operations",
            title: "Custom Portals & Business Dashboards",
            description:
                "Internal tools for managing orders, customers, tasks, employees, or data — built around exactly how your team works, not a generic template.",
            link: "/projects",
        },
        {
            industry: "Real Estate",
            title: "Property Listing Platforms",
            description:
                "Property search and listing platforms with filtering, map views, agent profiles, and lead capture — built to handle large property catalogues cleanly.",
            link: "/projects",
        },
        {
            industry: "Professional Services",
            title: "Booking & Scheduling Portals",
            description:
                "Appointment booking systems, client intake portals, and scheduling tools integrated with calendars, payment processors, and CRM systems.",
            link: "/contact",
        },
        {
            industry: "Education",
            title: "Learning Portals & Course Platforms",
            description:
                "Student portals, course delivery platforms, assessment tools, and institutional dashboards with role-based access and progress tracking.",
            link: "/contact",
        },
    ],

    comparison: {
        headers: ["Area", "Template / DIY Approach", "Custom Web Development"],
        rows: [
            [
                "Performance",
                "Bloated themes — slow load times, poor Core Web Vitals",
                "Built lean — fast by default, optimised for Lighthouse scores",
            ],
            [
                "Design Control",
                "Limited to template constraints and plugin styles",
                "Every screen designed to match your brand and conversion goals",
            ],
            [
                "SEO Structure",
                "Generic headings, poor metadata, slow server response",
                "Proper H1/H2 structure, metadata, sitemaps, canonical URLs built in",
            ],
            [
                "Scalability",
                "Plugin conflicts and performance degradation as site grows",
                "Clean architecture that expands without becoming unmaintainable",
            ],
            [
                "Business Logic",
                "Must bend your process to fit the template's limitations",
                "Built around exactly how your business actually works",
            ],
            [
                "Long-Term Cost",
                "Low upfront, high ongoing — premium plugins, developer workarounds",
                "Higher upfront, lower ongoing — clean code, fewer dependencies",
            ],
        ],
    },

    faqs: [
        {
            question: "What technologies does PrimeSol use for web development?",
            answer:
                "For most projects we use Next.js and React on the frontend — fast, SEO-friendly, and scalable. The backend depends on the project: Node.js, Python, or FastAPI for APIs; PostgreSQL or MongoDB for databases; and Vercel, AWS, or DigitalOcean for hosting. We choose the stack that fits the project, not the one we're most comfortable with.",
        },
        {
            question: "Can you build both the website and the backend system?",
            answer:
                "Yes. We handle the full stack — design, frontend, backend, database, and deployment. For most projects it makes sense to keep this in one team so nothing gets lost in handoff.",
        },
        {
            question: "How long does a website project take?",
            answer:
                "A focused business website with 5–8 pages typically takes 3–5 weeks from approved designs to launch. A custom web app with authentication, data management, and multiple user roles takes 8–16 weeks depending on complexity. We agree on a clear timeline before starting.",
        },
        {
            question: "Will the site work properly on mobile and tablet?",
            answer:
                "Yes. All our websites are fully responsive and tested across common device sizes and browsers. Mobile performance is treated as a requirement, not an afterthought.",
        },
        {
            question: "Is SEO built into the site by default?",
            answer:
                "Yes. Every site we build includes proper heading structure, page metadata, Open Graph tags, canonical URLs, sitemap generation, and fast load times — the technical SEO foundations that matter for ranking. Content strategy is separate but we advise on it.",
        },
        {
            question: "Can I update the website content myself after launch?",
            answer:
                "Depending on the setup, yes. For content-heavy sites we can integrate a headless CMS (like Sanity or Contentful) so you can edit text and images without touching code. For web apps, admin panels are built into the product itself.",
        },
        {
            question: "What if I already have a designer?",
            answer:
                "No problem. If you provide Figma files or design assets, we handle the development. We're comfortable picking up from someone else's design and building it faithfully — we review designs before starting to flag anything that would be expensive or slow to build.",
        },
        {
            question: "Do you offer maintenance after launch?",
            answer:
                "Yes. We offer monthly maintenance plans covering performance monitoring, bug fixes, dependency updates, and small improvements. Scope and cost depend on the site's complexity.",
        },
        {
            question: "Can you redesign an existing website?",
            answer:
                "Yes. Redesigns are a common request. We audit the existing site first — content, structure, performance, and SEO — then design and build the new version with a migration plan that preserves your existing Google rankings where possible.",
        },
    ],

    relatedServices: [
        {
            title: "AI Automation",
            slug: "ai-automation",
            description:
                "Add AI-powered workflows to your web app — lead handling, support automation, and intelligent data processing built on top of your platform.",
        },
        {
            title: "SaaS Development",
            slug: "saas-development",
            description:
                "Turn your web application into a fully commercial SaaS product with subscription billing, multi-tenancy, and a scalable architecture.",
        },
        {
            title: "Mobile App Development",
            slug: "mobile-app-development",
            description:
                "Extend your web platform to iOS and Android with a native or cross-platform mobile app that shares your backend.",
        },
    ],
};

export default webDevelopment;
