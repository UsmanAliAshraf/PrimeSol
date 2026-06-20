import "./globals.css";

export const metadata = {
    metadataBase: new URL("https://primesol.co"),
    title: {
        default: "PrimeSol | AI Automation, SaaS & Software Development",
        template: "%s | PrimeSol",
    },
    description:
        "PrimeSol builds AI automation systems, SaaS products, web applications, mobile apps, and custom software solutions for growing businesses.",
    keywords: [
        "AI automation",
        "SaaS development",
        "web application development",
        "mobile app development",
        "software development agency",
        "AI agents",
        "custom software",
        "business automation",
        "Next.js development",
        "PrimeSol",
    ],
    authors: [{ name: "PrimeSol", url: "https://primesol.co" }],
    creator: "PrimeSol",
    publisher: "PrimeSol",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://primesol.co",
        siteName: "PrimeSol",
        title: "PrimeSol | AI Automation, SaaS & Software Development",
        description:
            "PrimeSol builds AI automation systems, SaaS products, web applications, mobile apps, and custom software solutions for growing businesses.",
        images: [
            {
                url: "/assets/primesol-icon-light-mode.svg",
                width: 1200,
                height: 630,
                alt: "PrimeSol — AI Automation, SaaS & Software Development",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PrimeSol | AI Automation, SaaS & Software Development",
        description:
            "PrimeSol builds AI automation systems, SaaS products, web applications, mobile apps, and custom software solutions for growing businesses.",
        images: ["/assets/primesol-icon-light-mode.svg"],
        creator: "@primesol",
    },
    alternates: {
        canonical: "https://primesol.co",
    },
    icons: {
        icon: [{ url: "/assets/primesol-icon-light-mode.svg", type: "image/svg+xml" }],
        apple: [{ url: "/assets/primesol-icon-light-mode.svg", type: "image/svg+xml" }],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
