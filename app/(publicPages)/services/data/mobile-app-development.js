const BASE = "https://www.primesol.co";

const mobileAppDevelopment = {
    slug: "mobile-app-development",
    name: "Mobile App Development",

    metadata: {
        title: "Mobile App Development for iOS & Android | PrimeSol",
        description:
            "PrimeSol builds user-friendly mobile applications for iOS and Android — customer-facing apps, internal team tools, booking apps, e-commerce, and more — designed for real usage, not just demo day.",
        keywords: [
            "mobile app development",
            "iOS app development",
            "Android app development",
            "cross-platform app development",
            "React Native development",
            "mobile app development agency",
            "custom mobile app development",
        ],
        canonical: `${BASE}/services/mobile-app-development`,
    },

    schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Mobile App Development for iOS and Android",
        description:
            "Custom mobile applications for iOS and Android — customer-facing apps, internal tools, booking apps, and mobile-first business solutions.",
        provider: {
            "@type": "Organization",
            name: "PrimeSol",
            url: BASE,
        },
        areaServed: "Worldwide",
        serviceType: "Mobile App Development",
        url: `${BASE}/services/mobile-app-development`,
    },

    hero: {
        badge: "Mobile App Development",
        h1: "Mobile Apps That Your Customers||Actually Want||to Use",
        subtitle:
            "We build iOS and Android mobile applications for businesses that need to reach customers on their phones — from booking apps and e-commerce to internal team tools and service platforms.",
        primaryCta: { label: "Start a Project", href: "/contact" },
        secondaryCta: { label: "View Our Work", href: "/projects" },
    },

    problems: [
        {
            icon: "📲",
            title: "Your customers expect a mobile experience you don't have",
            description:
                "Competitors with a polished mobile app are winning customers who find a web browser too slow or inconvenient for their use case.",
        },
        {
            icon: "🔄",
            title: "Internal teams use WhatsApp and email instead of proper tools",
            description:
                "Field teams, drivers, or service staff rely on personal messaging apps because there is no dedicated mobile tool for their workflows.",
        },
        {
            icon: "🔔",
            title: "You have no way to re-engage customers after their first visit",
            description:
                "Without push notifications, you lose the most powerful channel for driving repeat purchases, appointments, and referrals.",
        },
        {
            icon: "📍",
            title: "Location and device features are underused",
            description:
                "GPS, camera, biometrics, and offline capability are unavailable on a mobile website — the features that make a mobile app genuinely more useful.",
        },
        {
            icon: "🎨",
            title: "The mobile experience feels like an afterthought",
            description:
                "A responsive website scaled down to a phone screen is not a mobile app. Users notice the difference in speed, feel, and capability immediately.",
        },
        {
            icon: "🏗",
            title: "You tried to build an app and it stalled in development",
            description:
                "App projects fail when scope isn't controlled, technology choices are wrong, or the team lacks mobile-specific experience. The result is wasted budget and no launch.",
        },
    ],

    solution: {
        title: "How We Build Your Mobile Application",
        steps: [
            {
                step: "01",
                title: "Product Scope & User Flows",
                description:
                    "We define exactly what the app does, who uses it, and what each user type needs to accomplish — turning a rough idea into a structured feature set before any design work begins.",
            },
            {
                step: "02",
                title: "UI/UX Design",
                description:
                    "We design the app screen by screen in Figma — navigation, interactions, states, and edge cases. You review and approve every screen before we write code.",
            },
            {
                step: "03",
                title: "Development",
                description:
                    "We build the app using React Native for cross-platform delivery or native Swift/Kotlin for performance-critical products. Backend APIs are built alongside the app so they fit perfectly.",
            },
            {
                step: "04",
                title: "Testing on Real Devices",
                description:
                    "We test on physical iOS and Android devices — not just emulators — covering different screen sizes, OS versions, and real-world network conditions.",
            },
            {
                step: "05",
                title: "App Store Submission & Launch",
                description:
                    "We handle the Apple App Store and Google Play submission process, including compliance requirements, screenshots, metadata, and review response if needed.",
            },
        ],
    },

    useCases: [
        {
            industry: "Retail & E-Commerce",
            title: "Shopping & Customer Loyalty Apps",
            description:
                "Native shopping experiences with product browsing, cart management, push notifications, loyalty points, and seamless checkout flows.",
            link: "/projects",
        },
        {
            industry: "Transport & Logistics",
            title: "Driver & Delivery Management Apps",
            description:
                "Real-time driver tracking, job assignment, route management, and customer-facing delivery status apps for logistics and transport businesses.",
            link: "/projects",
        },
        {
            industry: "Healthcare",
            title: "Patient & Booking Apps",
            description:
                "Mobile apps for appointment booking, teleconsultation, prescription tracking, and patient health records with secure authentication.",
            link: "/contact",
        },
        {
            industry: "Field Services",
            title: "Inspection & Audit Apps",
            description:
                "Mobile tools for field teams to complete inspections, capture photos, fill reports, and sync data back to headquarters — even offline.",
            link: "/projects",
        },
        {
            industry: "Fintech",
            title: "Wallet & Financial Apps",
            description:
                "Secure mobile wallet applications, investment tracking tools, and financial management apps with biometric authentication and real-time data.",
            link: "/projects",
        },
        {
            industry: "Education",
            title: "Student & Learning Apps",
            description:
                "Mobile learning platforms with course delivery, progress tracking, quizzes, push reminders, and offline content access for learners on the go.",
            link: "/contact",
        },
    ],

    comparison: {
        headers: ["Factor", "Responsive Website", "Native / Cross-Platform App"],
        rows: [
            [
                "Performance",
                "Browser overhead — slower animations, delayed input response",
                "Near-native speed — smooth scrolling, instant interactions",
            ],
            [
                "Device Features",
                "Limited — no camera, GPS, biometrics, or offline mode",
                "Full access — camera, GPS, push notifications, background sync",
            ],
            [
                "Re-engagement",
                "No push notifications — users must remember to return",
                "Push notifications — re-engage users anytime with offers or reminders",
            ],
            [
                "App Store Presence",
                "Not searchable in App Store or Google Play",
                "Discoverable — additional acquisition channel via store search",
            ],
            [
                "Offline Capability",
                "Requires internet connection for every interaction",
                "Offline-first architectures allow usage without connectivity",
            ],
            [
                "User Trust",
                "Web browser — no install, no persistent relationship",
                "Installed on device — higher trust, habitual usage, brand visibility",
            ],
        ],
    },

    faqs: [
        {
            question: "Do you build for iOS only, Android only, or both?",
            answer:
                "We build for both simultaneously using React Native for most projects — one codebase that deploys to both platforms. For apps that require maximum performance or deep platform integration (like heavy camera use or real-time processing), we recommend native development for the target platform and can advise on the tradeoffs.",
        },
        {
            question: "What is React Native and why do you use it?",
            answer:
                "React Native is a framework from Meta that compiles to native iOS and Android components — not a web view. It delivers near-native performance while allowing one team to build and maintain a single codebase for both platforms, which significantly reduces cost and timeline without meaningful quality sacrifice for most business applications.",
        },
        {
            question: "How long does it take to build a mobile app?",
            answer:
                "A focused app with clear scope — one user type, core workflows, no complex integrations — typically takes 8–14 weeks from approved designs to App Store submission. Multi-role apps, complex backends, or apps with real-time features take 14–24 weeks. We define scope clearly upfront so timelines don't drift.",
        },
        {
            question: "Do you handle the App Store and Google Play submissions?",
            answer:
                "Yes. We handle the full submission process — compliance requirements, store metadata, screenshots, app icons, and review correspondence. You need to have developer accounts set up for both platforms (Apple Developer and Google Play), and we walk you through that if needed.",
        },
        {
            question: "Can the mobile app connect to our existing backend or website?",
            answer:
                "Yes. If you already have a backend or API, we connect the mobile app to it. If your existing backend isn't designed for mobile consumption, we often build a lightweight mobile API layer on top. We audit the existing infrastructure before recommending an approach.",
        },
        {
            question: "Will you build the backend for the app too?",
            answer:
                "If you need a backend, yes. We build the full stack — mobile frontend, REST or GraphQL API, database, authentication, and cloud deployment. We prefer to keep this in one team so the mobile experience and backend fit each other perfectly.",
        },
        {
            question: "What happens after the app is live?",
            answer:
                "Apps need ongoing maintenance — OS updates from Apple and Google break things regularly. We offer maintenance plans that cover compatibility updates, bug fixes, performance monitoring, and iterative improvements based on user feedback.",
        },
        {
            question: "Can you add features to an existing mobile app?",
            answer:
                "Yes. We can take over an existing React Native or native app, audit the codebase, and add new features or fix existing problems. We'll flag anything in the existing code that will cause problems before committing to a scope.",
        },
        {
            question: "How do you handle app performance on older devices?",
            answer:
                "We test on lower-spec devices and set a minimum supported OS version before development begins. Performance budgets are established in the design phase, and we profile the app during development — not as an afterthought before submission.",
        },
    ],

    relatedServices: [
        {
            title: "Custom Web App Development",
            slug: "web-development",
            description:
                "Build the web-based counterpart to your mobile app — an admin dashboard, customer portal, or full web platform that shares the same backend.",
        },
        {
            title: "AI Automation",
            slug: "ai-automation",
            description:
                "Add intelligent automation to your mobile app — smart notifications, AI-powered search, conversational interfaces, and automated workflows.",
        },
        {
            title: "SaaS Development",
            slug: "saas-development",
            description:
                "Turn your mobile app into a commercial product with subscription billing, user management, admin tools, and multi-tenant support.",
        },
    ],
};

export default mobileAppDevelopment;
