import "./globals.css";

export const metadata = {
    title: "PrimeSol - Websites, Apps & Automation",
    description:
        "PrimeSol helps businesses go digital with AI-powered websites, apps, dashboards, agents, and automation systems.",
    icons: {
        icon: [
            { url: "/assets/primesol-icon-light-mode.svg", type: "image/svg+xml" },
        ],
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
