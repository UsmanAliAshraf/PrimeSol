import ContactPageClient from "./ContactPageClient";

export const metadata = {
    title: "Contact PrimeSol | Start Your Project",
    description:
        "Get in touch with PrimeSol to discuss your website, web app, mobile app, AI automation, or SaaS project. Free initial consultation. We respond within 24 hours.",
    keywords: [
        "contact PrimeSol",
        "hire software agency",
        "start a software project",
        "get a quote software development",
        "AI automation consultation",
        "web development inquiry",
        "mobile app development contact",
    ],
    alternates: {
        canonical: "https://primesol.co/contact",
    },
    openGraph: {
        title: "Contact PrimeSol | Start Your Project",
        description:
            "Get in touch with PrimeSol to discuss your website, web app, mobile app, AI automation, or SaaS project. Free initial consultation. We respond within 24 hours.",
        url: "https://primesol.co/contact",
        type: "website",
    },
    twitter: {
        title: "Contact PrimeSol | Start Your Project",
        description:
            "Get in touch with PrimeSol to discuss your website, web app, mobile app, AI automation, or SaaS project. Free initial consultation. We respond within 24 hours.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
