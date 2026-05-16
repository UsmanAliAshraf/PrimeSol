"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    const { theme } = useThemeContext();
    const email = "hello@primesol.co";

    return (
        <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full dark:text-slate-50">
            <Image
                className="absolute max-w-4xl w-full h-auto -mt-30 max-md:px-4 right-0 md:right-16 lg:right-24 xl:right-32 top-0 pointer-events-none select-none"
                src={theme === "dark" ? "/assets/primesol-text-dark.svg" : "/assets/primesol-text-light.svg"}
                alt=""
                width={930}
                height={340}
                aria-hidden
            />
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 dark:border-slate-700 pb-6">
                <div className="md:max-w-114">
                    <Link href="/" scroll={false} className="inline-flex items-center gap-3">
                        <Image
                            className="size-12 shrink-0 object-contain md:size-14 dark:hidden"
                            src="/assets/primesol-icon-light-mode.svg"
                            alt="PrimeSol"
                            width={56}
                            height={56}
                        />
                        <Image
                            className="hidden size-12 shrink-0 object-contain md:size-14 dark:block"
                            src="/assets/primesol-icon-dark-mode.svg"
                            alt="PrimeSol"
                            width={56}
                            height={56}
                        />
                        <span className="text-xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-2xl">
                            PrimeSol
                        </span>
                    </Link>
                    <p className="mt-6 text-stone-700 dark:text-slate-300">
                        PrimeSol helps teams plan, design, and build websites, apps, dashboards, stores, and automations that are clear to use and reliable after launch.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} scroll={false} className="hover:text-sky-500 transition">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="space-y-2">
                            <p>+923198622852</p>
                            <Link href={`mailto:${email}`} className="block hover:text-sky-500 transition">
                                {email}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-center gap-6">
                <Link href="https://www.facebook.com" target="_blank" className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                    <FaFacebook className="size-6" />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                    <FaTwitter className="size-6" />
                </Link>
                <Link href="https://www.instagram.com/primesol.official?igsh=aHowdHZqZ3M5dzBi&utm_source=qr" target="_blank" className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                    <FaInstagram className="size-6" />
                </Link>
                <Link href="https://www.linkedin.com/company/primesol-technologies" target="_blank" className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                    <FaLinkedin className="size-6" />
                </Link>
                <Link href="https://github.com/usmanaliashraf" target="_blank" className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                    <FaGithub className="size-6" />
                </Link>
            </div>

            <p className="pt-4 text-center pb-5 text-stone-600 dark:text-slate-400">
                © {new Date().getFullYear()} PrimeSol. All rights reserved.
            </p>
        </footer>
    );
}
