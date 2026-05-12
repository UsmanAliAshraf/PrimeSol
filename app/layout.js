import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import LenisScroll from "@/components/Lenis";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "PrimeSol — Websites, Apps & Automation",
    description:
        "PrimeSol helps businesses build clear websites, useful apps, internal dashboards, online stores, and automation systems.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeContextProvider>
                    <LenisScroll />
                    {children}
                </ThemeContextProvider>
            </body>
        </html>
    );
}
