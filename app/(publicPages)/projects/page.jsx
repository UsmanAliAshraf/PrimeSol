import ProjectsPageClient from "./ProjectsPageClient";

export const metadata = {
    title: "Projects | Portfolio of Web, Mobile & AI Work",
    description:
        "Browse PrimeSol's project portfolio: CRM dashboards, SaaS platforms, e-commerce stores, mobile apps, AI tools, and websites built for real business needs.",
    keywords: [
        "software portfolio",
        "web development projects",
        "mobile app portfolio",
        "SaaS projects",
        "AI projects",
        "UI/UX portfolio",
        "e-commerce projects",
        "EdTech development",
        "PrimeSol portfolio",
    ],
    alternates: {
        canonical: "https://www.primesol.co/projects",
    },
    openGraph: {
        title: "Projects | Portfolio of Web, Mobile & AI Work",
        description:
            "Browse PrimeSol's project portfolio: CRM dashboards, SaaS platforms, e-commerce stores, mobile apps, AI tools, and websites built for real business needs.",
        url: "https://www.primesol.co/projects",
        type: "website",
    },
    twitter: {
        title: "Projects | Portfolio of Web, Mobile & AI Work",
        description:
            "Browse PrimeSol's project portfolio: CRM dashboards, SaaS platforms, e-commerce stores, mobile apps, AI tools, and websites built for real business needs.",
    },
};

export default function ProjectsPage() {
    return <ProjectsPageClient />;
}
