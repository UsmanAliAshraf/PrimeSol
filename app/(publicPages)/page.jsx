import HomePageClient from "./HomePageClient";

export const metadata = {
    title: "PrimeSol | AI Automation, SaaS & Software Development",
    description:
        "PrimeSol builds AI automation systems, SaaS products, web applications, mobile apps, and custom software solutions for growing businesses.",
    keywords: [
        "AI automation agency",
        "SaaS development company",
        "web app development",
        "mobile app development",
        "AI agents for business",
        "software development Pakistan",
        "custom software solutions",
        "business process automation",
    ],
    alternates: {
        canonical: "https://primesol.co",
    },
    openGraph: {
        title: "PrimeSol | AI Automation, SaaS & Software Development",
        description:
            "PrimeSol builds AI automation systems, SaaS products, web applications, mobile apps, and custom software solutions for growing businesses.",
        url: "https://primesol.co",
        type: "website",
    },
    twitter: {
        title: "PrimeSol | AI Automation, SaaS & Software Development",
        description:
            "PrimeSol builds AI automation systems, SaaS products, web applications, mobile apps, and custom software solutions for growing businesses.",
    },
};

export default function Page() {
    return <HomePageClient />;
}
