import AboutPageClient from "./AboutPageClient";

export const metadata = {
    title: "About PrimeSol | AI-First Software Agency",
    description:
        "Learn how PrimeSol started and what drives us. We are an AI-first software agency helping growing businesses go digital with websites, apps, automation, and AI agents.",
    keywords: [
        "about PrimeSol",
        "AI software agency",
        "software development team",
        "web development company Pakistan",
        "AI-first agency",
        "business software company",
    ],
    alternates: {
        canonical: "https://primesol.co/about",
    },
    openGraph: {
        title: "About PrimeSol | AI-First Software Agency",
        description:
            "Learn how PrimeSol started and what drives us. We are an AI-first software agency helping growing businesses go digital with websites, apps, automation, and AI agents.",
        url: "https://primesol.co/about",
        type: "website",
    },
    twitter: {
        title: "About PrimeSol | AI-First Software Agency",
        description:
            "Learn how PrimeSol started and what drives us. We are an AI-first software agency helping growing businesses go digital with websites, apps, automation, and AI agents.",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
