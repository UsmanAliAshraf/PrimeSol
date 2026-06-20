const BASE = "https://www.primesol.co";

const saasDevelopment = {
    slug: "saas-development",
    name: "SaaS Development",

    metadata: {
        title: "SaaS App Development for Startups & Scale-Ups | PrimeSol",
        description:
            "PrimeSol builds production-ready SaaS platforms — multi-tenant architecture, subscription billing, user authentication, admin dashboards, and the infrastructure a real software business needs to launch and grow.",
        keywords: [
            "SaaS development",
            "SaaS app development",
            "SaaS product development",
            "SaaS startup development",
            "multi-tenant SaaS development",
            "subscription software development",
            "SaaS MVP development",
        ],
        canonical: `${BASE}/services/saas-development`,
    },

    schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "SaaS App Development",
        description:
            "Production-ready SaaS platform development with multi-tenant architecture, subscription billing, user management, and scalable infrastructure.",
        provider: {
            "@type": "Organization",
            name: "PrimeSol",
            url: BASE,
        },
        areaServed: "Worldwide",
        serviceType: "SaaS Development",
        url: `${BASE}/services/saas-development`,
    },

    hero: {
        badge: "SaaS Development",
        h1: "SaaS Platforms Built to||Launch, Scale,||and Generate Revenue",
        subtitle:
            "We build production-ready SaaS products with multi-tenant architecture, subscription billing, user authentication, admin dashboards, and all the infrastructure your software business needs from day one.",
        primaryCta: { label: "Start a Project", href: "/contact" },
        secondaryCta: { label: "View Our Work", href: "/projects" },
    },

    problems: [
        {
            icon: "🧱",
            title: "You have a SaaS idea but don't know where to start technically",
            description:
                "SaaS infrastructure — multi-tenancy, billing, authentication, usage limits — is complex to get right from the start. Wrong decisions here become expensive technical debt.",
        },
        {
            icon: "💳",
            title: "Stripe integration is harder than it looks",
            description:
                "Subscription billing, plan upgrades, trials, metered usage, failed payments, and proration all need to be handled correctly. A broken billing system loses customers and revenue.",
        },
        {
            icon: "🏗",
            title: "You've outgrown your current architecture",
            description:
                "A system built for one customer starts breaking under multi-tenant load. Shared databases, poor isolation, and missing role controls create security and performance problems.",
        },
        {
            icon: "🔐",
            title: "Authentication and user management is fragile",
            description:
                "Login, sign-up, password reset, email verification, SSO, and role-based permissions — getting any of these wrong costs you trust and customers.",
        },
        {
            icon: "📊",
            title: "You have no visibility into how customers use the product",
            description:
                "Without usage analytics, feature flags, and admin tooling, you can't see which features drive retention and which ones customers never touch.",
        },
        {
            icon: "🚀",
            title: "Building the MVP is taking longer than planned",
            description:
                "Scope creep, wrong technology choices, and rebuilding decisions from scratch are common when there's no experienced SaaS team leading development.",
        },
    ],

    solution: {
        title: "How We Build Your SaaS Product",
        steps: [
            {
                step: "01",
                title: "Product Architecture Design",
                description:
                    "We design the data model, tenancy strategy, permission system, and API structure before writing code. These decisions are hard to reverse — we get them right first.",
            },
            {
                step: "02",
                title: "Auth & Billing Infrastructure",
                description:
                    "We build secure authentication (email, social, SSO) and a complete Stripe billing system — plans, trials, upgrades, failed payments, and customer portal — as a foundation, not an add-on.",
            },
            {
                step: "03",
                title: "Core Product Development",
                description:
                    "We build the product features your customers pay for — with a clean UI, fast backend, and the API structure that makes future features easy to add without rewrites.",
            },
            {
                step: "04",
                title: "Admin & Operations Tooling",
                description:
                    "We build the admin dashboard your team needs to manage customers, monitor usage, handle support escalations, and control the product without touching the database.",
            },
            {
                step: "05",
                title: "Launch, Monitoring & Growth",
                description:
                    "We deploy with CI/CD pipelines, error monitoring, and performance tracking. Post-launch, we help you iterate based on real user behaviour, not assumptions.",
            },
        ],
    },

    useCases: [
        {
            industry: "Productivity",
            title: "Team Collaboration & Project Management Tools",
            description:
                "Workspace-based SaaS products with team management, task tracking, file sharing, and real-time collaboration built for B2B subscription sales.",
            link: "/projects",
        },
        {
            industry: "Healthcare",
            title: "Practice Management & Patient Platforms",
            description:
                "Compliant SaaS platforms for clinics — appointment management, patient records, billing, and practitioner dashboards — with proper data isolation.",
            link: "/contact",
        },
        {
            industry: "Education",
            title: "EdTech & LMS Platforms",
            description:
                "Institutional SaaS tools with course management, student tracking, assessment delivery, instructor dashboards, and school-level subscriptions.",
            link: "/projects",
        },
        {
            industry: "Marketing",
            title: "Analytics & Reporting SaaS",
            description:
                "Multi-account analytics tools that pull data from advertising platforms, websites, and CRM systems — delivered to clients through a white-label interface.",
            link: "/contact",
        },
        {
            industry: "Operations",
            title: "Business Operations Platforms",
            description:
                "Internal-facing SaaS for operations management — inventory, field service, logistics, or HR — with role-based access and enterprise billing.",
            link: "/projects",
        },
        {
            industry: "Fintech",
            title: "Financial Tools & Accounting SaaS",
            description:
                "Subscription financial tools for invoicing, expense tracking, multi-currency accounting, or investment reporting with secure payment integrations.",
            link: "/contact",
        },
    ],

    comparison: {
        headers: ["Component", "No-Code / Glue Approach", "Properly Built SaaS"],
        rows: [
            [
                "Multi-Tenancy",
                "Shared tables with manual filtering — data leakage risk",
                "Proper tenant isolation — each customer's data is structurally separated",
            ],
            [
                "Billing",
                "Basic Stripe checkout — no plan management, proration, or trials",
                "Full billing lifecycle — plans, trials, upgrades, failed payment recovery",
            ],
            [
                "Authentication",
                "Basic email/password — no SSO, no MFA, fragile password reset",
                "Complete auth system — social login, SSO, MFA, and secure sessions",
            ],
            [
                "Scalability",
                "Performance degrades with user growth — no caching or query optimization",
                "Built for growth — optimised queries, caching, background jobs, and CDN",
            ],
            [
                "Admin Tooling",
                "Direct database access or exported CSVs",
                "Admin dashboard for managing customers, usage, features, and support",
            ],
            [
                "Custom Features",
                "Blocked by no-code platform limits — complex features become impossible",
                "No ceiling — any feature can be built because you control the codebase",
            ],
        ],
    },

    faqs: [
        {
            question: "What does PrimeSol include in a SaaS build?",
            answer:
                "A standard SaaS build from PrimeSol includes: multi-tenant data architecture, user authentication with email and social login, Stripe subscription billing with plan management, a customer-facing product, a super-admin dashboard for your team, email notifications, error monitoring, and deployment to a production cloud environment. Scope varies by product — we agree on exactly what's included before starting.",
        },
        {
            question: "Can you build just the MVP first?",
            answer:
                "Yes. We regularly build MVPs — the smallest version of the product that validates the core hypothesis with real customers. An MVP is not a prototype — it has real infrastructure, real billing, and real authentication. We just build fewer features, not a lower-quality foundation.",
        },
        {
            question: "How do you handle multi-tenancy?",
            answer:
                "We design multi-tenancy based on your requirements. Most B2B SaaS products use a shared-database, row-level isolation approach with tenant_id scoping throughout the data layer. For products where customers have strict data isolation requirements (regulated industries), we use schema-per-tenant or database-per-tenant strategies with the cost tradeoffs explained clearly.",
        },
        {
            question: "Do you integrate Stripe for billing?",
            answer:
                "Yes. We implement the full Stripe billing lifecycle — subscription plans, free trials, plan upgrades and downgrades, proration, usage-based billing where needed, failed payment recovery with retry logic and dunning emails, and a customer portal where users can manage their own subscription.",
        },
        {
            question: "What authentication options do you support?",
            answer:
                "We implement email and password authentication, social login (Google, GitHub, etc.), SSO via SAML or OAuth for enterprise customers, multi-factor authentication, email verification, and secure password reset flows. Authentication is built on proven libraries (Auth.js, Clerk, or custom), not written from scratch.",
        },
        {
            question: "How long does a SaaS MVP take to build?",
            answer:
                "A focused MVP with two or three core user flows, authentication, billing, and a minimal admin panel typically takes 10–16 weeks. A full-featured V1 with multiple user roles, complex workflows, and third-party integrations takes 16–28 weeks. Timeline depends heavily on scope clarity — the clearer the requirements, the faster we move.",
        },
        {
            question: "What happens after the SaaS product launches?",
            answer:
                "Post-launch, the product needs iteration based on real user data. We offer a retainer engagement for ongoing feature development, bug fixes, performance improvements, and infrastructure scaling as your user base grows. Most of our SaaS clients stay with us through multiple feature cycles.",
        },
        {
            question: "Can you take over a SaaS product someone else built?",
            answer:
                "Yes. We do technical audits of existing SaaS codebases — reviewing architecture, security, performance, and code quality — then provide a clear picture of what needs to be fixed versus what can be built on. We take over projects with clear documentation of the current state.",
        },
        {
            question: "Do you help with product strategy or just the technical build?",
            answer:
                "We contribute to product decisions — data model choices, feature prioritisation, UX flows, and technical tradeoffs all have product implications. We're not a pure execution shop. That said, the vision and business strategy are yours — we help you execute it with the right technical decisions.",
        },
    ],

    relatedServices: [
        {
            title: "AI Automation",
            slug: "ai-automation",
            description:
                "Add AI-powered features to your SaaS product — intelligent data processing, automated workflows, AI assistants, and smart recommendations.",
        },
        {
            title: "Mobile App Development",
            slug: "mobile-app-development",
            description:
                "Extend your SaaS platform to iOS and Android with a native mobile app that connects to the same backend.",
        },
        {
            title: "Custom Software Development",
            slug: "custom-software-development",
            description:
                "Need something that doesn't fit the standard SaaS pattern? We build fully custom software systems around your specific business requirements.",
        },
    ],
};

export default saasDevelopment;
