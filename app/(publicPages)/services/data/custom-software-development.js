const BASE = "https://www.primesol.co";

const customSoftwareDevelopment = {
    slug: "custom-software-development",
    name: "Custom Software Development",

    metadata: {
        title: "Custom Software Development Services | PrimeSol",
        description:
            "PrimeSol builds custom software tailored to your business — internal tools, operational systems, CRM, HRM, ERP-style platforms, and complex business applications that off-the-shelf products can't handle.",
        keywords: [
            "custom software development",
            "bespoke software development",
            "business software development",
            "enterprise software development",
            "custom CRM development",
            "custom ERP development",
            "internal tools development",
        ],
        canonical: `${BASE}/services/custom-software-development`,
    },

    schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Custom Software Development Services",
        description:
            "Bespoke software development for businesses that need internal tools, operational systems, and complex applications that standard software cannot handle.",
        provider: {
            "@type": "Organization",
            name: "PrimeSol",
            url: BASE,
        },
        areaServed: "Worldwide",
        serviceType: "Custom Software Development",
        url: `${BASE}/services/custom-software-development`,
    },

    hero: {
        badge: "Custom Software Development",
        h1: "Custom Software Built Around||How Your Business||Actually Works",
        subtitle:
            "When generic tools force you to change your process to fit the software, we build the software that fits your process — internal tools, operational platforms, CRM systems, and complex business applications designed specifically for how your team works.",
        primaryCta: { label: "Start a Project", href: "/contact" },
        secondaryCta: { label: "View Our Work", href: "/projects" },
    },

    problems: [
        {
            icon: "🔧",
            title: "Off-the-shelf software doesn't fit how you actually work",
            description:
                "Generic tools are built for generic businesses. Your workflows, approval chains, data relationships, and reporting needs are specific — and no template covers them properly.",
        },
        {
            icon: "🕸",
            title: "Operations run on a patchwork of disconnected tools",
            description:
                "Your team uses five different apps, three spreadsheets, and two WhatsApp groups to manage a process that should live in one place. Data gets lost in the gaps.",
        },
        {
            icon: "💸",
            title: "You're paying for features you don't use and missing ones you need",
            description:
                "Enterprise software licenses are expensive. Half the features don't apply to your business, and the specific things your team needs either don't exist or require costly customisation.",
        },
        {
            icon: "📤",
            title: "Vendor lock-in prevents you from owning your data",
            description:
                "When a software company raises prices or shuts down, you're stuck. Custom software means you own the codebase, the database, and the infrastructure.",
        },
        {
            icon: "🔒",
            title: "Sensitive business data is stored in third-party systems",
            description:
                "Customer records, pricing models, internal processes, and financial data should not live in a cloud product built by someone else with their own terms of service.",
        },
        {
            icon: "📉",
            title: "Manual workarounds are costing more than a real system would",
            description:
                "When the cost of manual labour, errors, and wasted time is calculated, a custom system typically pays for itself within the first year of use.",
        },
    ],

    solution: {
        title: "How We Build Your Custom Software",
        steps: [
            {
                step: "01",
                title: "Business Process Analysis",
                description:
                    "We map your current workflows, interview team members who use the system, and document exactly what the software needs to do before any design work begins.",
            },
            {
                step: "02",
                title: "System Architecture",
                description:
                    "We design the data model, user roles, permissions, integrations, and technical architecture. Complex business rules are documented and reviewed before development.",
            },
            {
                step: "03",
                title: "Iterative Development",
                description:
                    "We build in structured phases — core system first, then secondary features — so you can start using and validating the system before the full build is complete.",
            },
            {
                step: "04",
                title: "Integration & Data Migration",
                description:
                    "We connect the new system to your existing tools and migrate historical data cleanly, with validation to make sure nothing is lost or corrupted in the transition.",
            },
            {
                step: "05",
                title: "Deployment, Training & Support",
                description:
                    "We deploy to production, train your team on the system, and remain available for the first weeks of live usage to catch and fix any issues that arise in real conditions.",
            },
        ],
    },

    useCases: [
        {
            industry: "Operations",
            title: "Custom CRM & Sales Management Systems",
            description:
                "CRM systems built around your actual sales process — with the pipeline stages, follow-up rules, reporting views, and integrations your team needs — not what a generic CRM assumes.",
            link: "/projects",
        },
        {
            industry: "Manufacturing",
            title: "Inventory & Production Management",
            description:
                "Real-time inventory tracking, purchase order management, supplier records, production scheduling, and quality control workflows built for your specific production model.",
            link: "/contact",
        },
        {
            industry: "HR & People Operations",
            title: "Custom HRM & Payroll Systems",
            description:
                "Employee records, attendance tracking, leave management, payroll calculation, and performance management — built for your team structure and compliance requirements.",
            link: "/projects",
        },
        {
            industry: "Healthcare",
            title: "Clinical & Practice Management Systems",
            description:
                "Patient records, appointment scheduling, billing, prescription management, and reporting systems for clinics and hospitals that need control over sensitive data.",
            link: "/contact",
        },
        {
            industry: "Legal & Finance",
            title: "Case & Document Management Systems",
            description:
                "Custom systems for managing case files, contracts, deadlines, document versions, client communication logs, and billing — built for your practice structure.",
            link: "/contact",
        },
        {
            industry: "Logistics",
            title: "Fleet & Delivery Management Platforms",
            description:
                "Real-time fleet tracking, job dispatch, driver management, route optimisation, and customer delivery visibility built for logistics businesses that have outgrown generic tools.",
            link: "/contact",
        },
    ],

    comparison: {
        headers: ["Consideration", "Generic Software", "Custom Software"],
        rows: [
            [
                "Process Fit",
                "You adapt your process to the software's limitations",
                "Software is built around how your business actually operates",
            ],
            [
                "Features",
                "70% features you don't need, 30% critical gaps",
                "Every feature exists for a specific reason your team identified",
            ],
            [
                "Data Ownership",
                "Data stored in vendor cloud — subject to their terms and pricing",
                "You own the codebase, database, and infrastructure outright",
            ],
            [
                "Integration",
                "Limited to vendor's approved integrations and API",
                "Can integrate with anything — any API, any internal system, any data source",
            ],
            [
                "Scalability",
                "Pricing scales with your growth — costs increase as users grow",
                "Fixed infrastructure cost — scales without increasing per-seat licensing",
            ],
            [
                "Long-Term Cost",
                "Ongoing licensing fees for years — often exceeds custom build cost in 3–5 years",
                "Higher upfront investment, significantly lower total cost over 5 years",
            ],
        ],
    },

    faqs: [
        {
            question: "How do you scope a custom software project?",
            answer:
                "We start with a discovery process — mapping your current workflows, documenting requirements, and identifying what the system must do at launch versus what can wait. We produce a scoping document that covers features, user roles, integrations, and a timeline estimate. You review and approve this before we begin development.",
        },
        {
            question: "What's the difference between custom software and a SaaS product?",
            answer:
                "A SaaS product is commercial software sold to many customers with subscription billing and multi-tenant infrastructure. Custom software is built for your business specifically — one company, one set of requirements, no subscription sales to third parties. Custom software is typically internal tooling or a system that manages your specific operations.",
        },
        {
            question: "How long does a custom software project take?",
            answer:
                "A focused internal tool with one or two user roles and clear requirements takes 8–14 weeks. A comprehensive operational platform — with multiple departments, complex data relationships, and integrations — takes 16–36 weeks. Scope clarity at the start is the biggest factor in how accurately we can estimate timeline.",
        },
        {
            question: "Can you migrate data from our existing systems into the new software?",
            answer:
                "Yes. Data migration is usually part of the project scope. We audit existing data sources, design the migration mapping, clean and transform data as needed, validate the migrated records, and run parallel operation periods where both systems are live before decommissioning the old one.",
        },
        {
            question: "Who owns the software and code after delivery?",
            answer:
                "You do. All source code, documentation, and intellectual property is fully transferred to you on project completion. We don't retain licensing rights over work we build for you.",
        },
        {
            question: "What if our requirements change during development?",
            answer:
                "Requirements evolve — that's normal. We handle changes through a structured change management process: the change is documented, impact on scope and timeline is assessed, and you decide whether to include it in the current phase or a future one. We don't absorb unbounded scope creep, but we do handle reasonable changes professionally.",
        },
        {
            question: "Can your team integrate the software with our existing tools?",
            answer:
                "Yes. Custom software rarely lives in isolation. We integrate with CRMs, accounting tools, payment gateways, communication platforms, ERP systems, and any system with an API. Where an integration API doesn't exist, we can build data bridges using file exports, webhooks, or direct database connections.",
        },
        {
            question: "Do you offer training for the team that will use the system?",
            answer:
                "Yes. We produce user documentation and conduct training sessions for the core team and any administrators who manage the system. We stay available for questions during the first weeks of live usage when real-world issues are most likely to surface.",
        },
        {
            question: "What support is available after the project is complete?",
            answer:
                "We offer post-delivery maintenance plans covering bug fixes, performance monitoring, dependency updates, and small improvements. For ongoing development — adding new modules or expanding existing features — we work on either a fixed-scope project or a monthly retainer basis.",
        },
    ],

    relatedServices: [
        {
            title: "AI Automation",
            slug: "ai-automation",
            description:
                "Add intelligent automation to your custom software — AI-powered data processing, decision automation, and workflow intelligence built into your system.",
        },
        {
            title: "Web Development",
            slug: "web-development",
            description:
                "Need a customer-facing web interface to complement your internal system? We build both sides and make sure they share data cleanly.",
        },
        {
            title: "SaaS Development",
            slug: "saas-development",
            description:
                "If your custom software could be sold to other businesses, we can evolve it into a commercial SaaS product with billing, multi-tenancy, and a sales-ready interface.",
        },
    ],
};

export default customSoftwareDevelopment;
