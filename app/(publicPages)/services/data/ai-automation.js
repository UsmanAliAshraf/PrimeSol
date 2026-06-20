const BASE = "https://primesol.co";

const aiAutomation = {
    slug: "ai-automation",
    name: "AI Automation",

    metadata: {
        title: "AI Automation Services for Businesses | PrimeSol",
        description:
            "PrimeSol builds custom AI automation systems that eliminate manual work — lead follow-up, customer support, reporting, document handling, and daily operations — so your team focuses on growth.",
        keywords: [
            "AI automation services",
            "business process automation",
            "AI workflow automation",
            "AI agents for business",
            "automate business operations",
            "AI automation agency",
            "custom AI automation",
        ],
        canonical: `${BASE}/services/ai-automation`,
    },

    schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Automation Services",
        description:
            "Custom AI automation systems that eliminate repetitive manual workflows, automate lead handling, customer support, and business operations.",
        provider: {
            "@type": "Organization",
            name: "PrimeSol",
            url: BASE,
        },
        areaServed: "Worldwide",
        serviceType: "AI Automation",
        url: `${BASE}/services/ai-automation`,
    },

    hero: {
        badge: "AI Automation",
        h1: "AI Automation That Removes||Manual Work||From Your Business",
        subtitle:
            "We build custom AI systems that handle lead intake, customer replies, reporting, reminders, approvals, and other repetitive tasks — so your team can focus on work that actually moves the business forward.",
        primaryCta: { label: "Start a Project", href: "/contact" },
        secondaryCta: { label: "View Our Work", href: "/projects" },
    },

    problems: [
        {
            icon: "⏱",
            title: "Your team is stuck in repetitive manual work",
            description:
                "Hours disappear into copy-pasting data, sending status updates, and following up on leads that should be handled automatically.",
        },
        {
            icon: "📉",
            title: "Leads go cold because follow-up is inconsistent",
            description:
                "Without automated sequences, potential customers fall through the gaps when your team is busy or unavailable.",
        },
        {
            icon: "📊",
            title: "Reports are assembled manually every week",
            description:
                "Weekly reporting takes hours and involves pulling data from multiple places just to answer basic business questions.",
        },
        {
            icon: "🤖",
            title: "Support teams answer the same questions repeatedly",
            description:
                "Staff handle the same 10 queries every day when AI could resolve them instantly — 24 hours a day.",
        },
        {
            icon: "🔗",
            title: "Your tools don't communicate with each other",
            description:
                "Data lives in separate apps. Nothing syncs. Updating one system means manually updating three others.",
        },
        {
            icon: "📈",
            title: "Scaling means hiring more people, not better systems",
            description:
                "Every growth stage requires more headcount because underlying operations are still entirely manual.",
        },
    ],

    solution: {
        title: "How We Build Your AI Automation System",
        steps: [
            {
                step: "01",
                title: "Workflow Audit",
                description:
                    "We map your current processes, identify the most time-consuming repetitive tasks, and find the highest-impact automation opportunities before touching any code.",
            },
            {
                step: "02",
                title: "System Design",
                description:
                    "We design the automation logic, data flows, decision trees, and integration points. You see and approve the complete blueprint before we build.",
            },
            {
                step: "03",
                title: "Build & Integrate",
                description:
                    "We build the automation and connect it to your existing tools — CRM, email, Slack, WhatsApp, Google Sheets, or custom APIs — without disrupting what already works.",
            },
            {
                step: "04",
                title: "Test Thoroughly",
                description:
                    "We run the system through real-world scenarios, edge cases, and failure conditions before you use it in production. Nothing goes live untested.",
            },
            {
                step: "05",
                title: "Deploy & Monitor",
                description:
                    "We launch the automation and monitor performance closely in the first weeks. You get logs, alerts, and regular check-ins until the system is stable.",
            },
        ],
    },

    useCases: [
        {
            industry: "E-Commerce",
            title: "Order Updates & Support Automation",
            description:
                "Automate order confirmations, shipping status updates, return processing, and common customer support queries — without increasing headcount.",
            link: "/projects",
        },
        {
            industry: "Real Estate",
            title: "Lead Qualification & Follow-Up Sequences",
            description:
                "Auto-qualify incoming leads, assign them to agents, and trigger follow-up sequences based on property interest and behaviour.",
            link: "/projects",
        },
        {
            industry: "Healthcare",
            title: "Appointment Reminders & Patient Workflows",
            description:
                "Automate patient scheduling, appointment reminders, post-visit follow-up instructions, and intake form processing.",
            link: "/contact",
        },
        {
            industry: "Marketing Agencies",
            title: "Client Reporting Automation",
            description:
                "Auto-generate and deliver weekly or monthly reports by pulling data from ad platforms, analytics tools, and CRM systems.",
            link: "/contact",
        },
        {
            industry: "HR Teams",
            title: "Onboarding & Approval Workflows",
            description:
                "Automate employee onboarding checklists, leave approvals, document collection, and task handoffs between departments.",
            link: "/contact",
        },
        {
            industry: "Professional Services",
            title: "Document Intake & Client Routing",
            description:
                "AI-powered intake that classifies documents, extracts key information, and routes requests to the correct team member automatically.",
            link: "/contact",
        },
    ],

    comparison: {
        headers: ["Workflow", "Manual Approach", "AI-Automated Approach"],
        rows: [
            [
                "Lead Follow-Up",
                "Sales rep follows up individually — 1 to 2 day delay",
                "Instant AI-triggered sequence, no human needed for first contact",
            ],
            [
                "Customer Support",
                "Staff answers every query, limited to business hours",
                "AI resolves 70–80% of common questions instantly, 24/7",
            ],
            [
                "Weekly Reporting",
                "2–3 hours assembling data from multiple sources manually",
                "Auto-generated report delivered to your inbox on schedule",
            ],
            [
                "Data Entry",
                "Team manually copies data between tools after each transaction",
                "Real-time sync across all connected systems automatically",
            ],
            [
                "Appointment Booking",
                "Back-and-forth emails or calls to confirm a time slot",
                "Self-service booking with automatic confirmations and reminders",
            ],
            [
                "Scaling Operations",
                "Must hire more staff as transaction volume grows",
                "Add automation rules — no headcount increase required",
            ],
        ],
    },

    faqs: [
        {
            question: "What business processes can PrimeSol automate?",
            answer:
                "We can automate lead intake and follow-up, customer support queries, appointment booking, report generation, data sync between tools, document handling, approval workflows, onboarding sequences, invoice processing, and any repeatable task your team currently handles manually.",
        },
        {
            question: "Do we need to replace our existing software?",
            answer:
                "No. We build automations that connect to the tools you already use — CRM, email platforms, WhatsApp, Slack, Google Sheets, project management tools, and custom internal systems. The goal is to extend what you have, not rip it out.",
        },
        {
            question: "How is AI automation different from simple rule-based automation?",
            answer:
                "Rule-based automation follows fixed if-then logic and breaks when input doesn't match the expected format. AI automation understands context, intent, and variation — it can classify incoming messages, extract structured data from unstructured text, decide how to respond, and handle situations that don't fit a fixed pattern.",
        },
        {
            question: "What AI tools or models do you use?",
            answer:
                "We choose the right tool for each problem. We use OpenAI GPT models for language tasks, custom classifiers for specific data problems, n8n or Make for integration workflows, and custom-built APIs for complex orchestration. We recommend what fits your problem — not just what's trending.",
        },
        {
            question: "How long does it take to build an AI automation system?",
            answer:
                "A focused automation targeting one workflow and one integration typically takes 2–4 weeks. A more complex system with multiple workflows, custom AI logic, and several tool integrations takes 6–10 weeks. We give you a clear timeline after the initial scoping call.",
        },
        {
            question: "What does the process look like from the first call?",
            answer:
                "We start with a workflow audit to understand your current processes and identify automation opportunities. Then we design the system logic and get your approval before building. After the build, we test thoroughly, deploy, and monitor performance in the first weeks.",
        },
        {
            question: "Can the automation improve over time?",
            answer:
                "Yes. AI models can be fine-tuned on your specific data and feedback. Workflows can be adjusted and expanded as your business changes. We treat automation as a system that evolves, not a one-time delivery.",
        },
        {
            question: "What is the ongoing cost after launch?",
            answer:
                "There is a monthly API usage cost paid directly to the AI provider (based on usage volume). PrimeSol's maintenance fee covers monitoring, fixes, and improvements. We agree on a clear support scope before launch so there are no surprises.",
        },
        {
            question: "What happens if the automation breaks or produces wrong outputs?",
            answer:
                "We build monitoring, logging, and fallback logic into every system. If something unexpected happens, alerts fire before a customer notices. We catch failures early and fix them quickly — usually before they affect your operations.",
        },
        {
            question: "Can you automate WhatsApp or Instagram messages?",
            answer:
                "Yes. We can build automation for WhatsApp Business API, Instagram DMs, and other messaging channels — handling inquiries, sending follow-ups, and routing conversations to a human when the AI reaches its limit.",
        },
    ],

    relatedServices: [
        {
            title: "Custom Web App Development",
            slug: "web-development",
            description:
                "Pair your automation with a custom dashboard or portal so your team can monitor, control, and manage the system visually.",
        },
        {
            title: "SaaS Development",
            slug: "saas-development",
            description:
                "Turn your AI-powered automation into a full product with user management, billing, multi-tenant support, and a polished interface.",
        },
        {
            title: "Custom Software Development",
            slug: "custom-software-development",
            description:
                "Need something more complex than off-the-shelf automation? We build fully custom systems around your specific business logic.",
        },
    ],
};

export default aiAutomation;
