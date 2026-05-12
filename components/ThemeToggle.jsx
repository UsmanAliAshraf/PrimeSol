'use client';

import { useThemeContext } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useThemeContext();
    const toggleTheme = () => {
        if (theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button onClick={toggleTheme} className="flex items-center justify-center size-9 p-2 rounded-full bg-sky-500/10 hover:bg-sky-500/20 dark:bg-sky-400/20 dark:hover:bg-sky-400/30 transition-colors duration-200 ease-in-out">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}