"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";

// Importing social media icons from react-icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; 

export default function Footer() {
    const { theme } = useThemeContext();

    return (
        <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full dark:text-slate-50">
            <Image
                className="absolute max-w-4xl w-full h-auto -mt-30 max-md:px-4 right-0 md:right-16 lg:right-24 xl:right-32 top-0 pointer-events-none"
                src={theme === "dark" ? "/assets/landing-text-dark.svg" : "/assets/landing-text-light.svg"}
                alt="landing"
                width={930}
                height={340}
                priority
                fetchPriority="high"
            />
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 dark:border-slate-700 pb-6">
                <div className="md:max-w-114">
                    <a href="https://prebuiltui.com?utm_source=landing">
                        <Image
                            className="h-9 md:h-9.5 w-auto shrink-0"
                            src={theme === "dark" ? "/assets/logo-light.svg" : "/assets/logo-dark.svg"}
                            alt="Logo"
                            width={140}
                            height={40}
                            priority
                            fetchPriority="high"
                        />
                    </a>
                    <p className="mt-6">
                        Launch your SaaS product in record time with our all-in-one platform designed for speed, flexibility, and growth. Whether you're a solo founder or a fast-moving team, we provide everything you need.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-purple-600 transition">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="space-y-2">
                            <p>+1-212-456-7890</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-6 flex justify-center gap-6">
                <Link href="https://www.facebook.com" target="_blank" className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-600">
                    <FaFacebook className="size-6" />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-600">
                    <FaTwitter className="size-6" />
                </Link>
                <Link href="https://www.instagram.com" target="_blank" className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-600">
                    <FaInstagram className="size-6" />
                </Link>
                <Link href="https://www.linkedin.com" target="_blank" className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-600">
                    <FaLinkedin className="size-6" />
                </Link>
                <Link href="https://github.com" target="_blank" className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-600">
                    <FaGithub className="size-6" />
                </Link>
            </div>

            <p className="pt-4 text-center pb-5">
                Copyright 2024 © <a href="https://prebuiltui.com?utm_source=landing">PrebuiltUI</a>. All Rights Reserved.
            </p>
        </footer>
    );
}