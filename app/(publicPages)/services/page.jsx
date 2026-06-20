import ServicesPageClient from "./ServicesPageClient";

export const metadata = {
    title: "Services | AI Automation, Web & Mobile App Development",
    description:
        "PrimeSol offers AI automation, SaaS development, web applications, mobile apps, e-commerce stores, CRM systems, and AI agents. Practical digital solutions for growing businesses.",
    keywords: [
        "AI automation services",
        "web development services",
        "mobile app development services",
        "SaaS development",
        "e-commerce development",
        "CRM development",
        "AI agent development",
        "business automation",
        "dashboard development",
    ],
    alternates: {
        canonical: "https://www.primesol.co/services",
    },
    openGraph: {
        title: "Services | AI Automation, Web & Mobile App Development",
        description:
            "PrimeSol offers AI automation, SaaS development, web applications, mobile apps, e-commerce stores, CRM systems, and AI agents. Practical digital solutions for growing businesses.",
        url: "https://www.primesol.co/services",
        type: "website",
    },
    twitter: {
        title: "Services | AI Automation, Web & Mobile App Development",
        description:
            "PrimeSol offers AI automation, SaaS development, web applications, mobile apps, e-commerce stores, CRM systems, and AI agents. Practical digital solutions for growing businesses.",
    },
};

export default function ServicesPage() {
    return <ServicesPageClient />;
}
