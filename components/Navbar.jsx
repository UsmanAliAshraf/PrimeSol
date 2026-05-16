"use client";
import { navLinks } from "@/data/navLinks";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <nav className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-3 md:py-3.5 ${openMobileMenu ? "" : "backdrop-blur"}`}>
            <Link href="/" scroll={false} className="flex shrink-0 items-center gap-2.5 md:gap-3">
                <Image
                    className="size-12 shrink-0 object-contain md:size-14 dark:hidden"
                    src="/assets/web-app-manifest-192x192.png"
                    alt="PrimeSol"
                    width={56}
                    height={56}
                    priority
                    fetchPriority="high"
                />
                <Image
                    className="hidden size-12 shrink-0 object-contain md:size-14 dark:block"
                    src="/assets/web-app-manifest-192x192.png"
                    alt="PrimeSol"
                    width={56}
                    height={56}
                />
                <span className="text-lg font-semibold tracking-tight text-stone-900 dark:text-white md:text-xl">
                    PrimeSol
                </span>
            </Link>
            <div className="hidden items-center md:gap-8 lg:gap-9 md:flex lg:pl-20">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        scroll={false}
                        className="text-sm text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            {/* Mobile menu */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/60 dark:bg-black/40 backdrop-blur-md md:hidden transition duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} scroll={false} onClick={() => setOpenMobileMenu(false)}>
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    scroll={false}
                    onClick={() => setOpenMobileMenu(false)}
                    className="rounded-md border border-sky-500/40 bg-sky-500/10 px-5 py-2 text-sm text-sky-800 transition hover:bg-sky-500/20 dark:bg-sky-500/15 dark:text-sky-100 dark:hover:bg-sky-500/25"
                >
                    Book a Call
                </Link>
                <button className="aspect-square size-10 p-1 items-center justify-center bg-sky-500 hover:bg-sky-600 transition text-white rounded-md flex" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link
                    href="/contact"
                    scroll={false}
                    className="hidden md:inline-flex items-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
                >
                    Book a Call
                </Link>
                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}
