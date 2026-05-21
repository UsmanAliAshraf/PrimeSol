import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";

export const metadata = {
    title: "PrimeSol - Websites, Apps & Automation",
    description:
        "PrimeSol helps businesses build clear websites, useful apps, internal dashboards, online stores, and automation systems.",
    icons: {
        icon: [
            { url: "/assets/primesol-icon-light-mode.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
            { url: "/assets/primesol-icon-dark-mode.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
            { url: "/assets/primesol-icon-light-mode.svg", type: "image/svg+xml" },
        ],
        apple: [{ url: "/assets/primesol-icon-light-mode.svg", type: "image/svg+xml" }],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeContextProvider>{children}</ThemeContextProvider>
            </body>
        </html>
    );
}
