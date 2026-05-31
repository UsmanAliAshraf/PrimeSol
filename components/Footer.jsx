"use client";

import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    const email = "hello@primesol.co";

    return (
        <footer className="relative mt-40 w-full px-6 text-[#28304A] md:px-16 lg:px-24 xl:px-32">
            <Image
                className="pointer-events-none absolute right-0 top-0 h-auto w-full max-w-4xl -mt-30 select-none opacity-70 max-md:px-4 md:right-16 lg:right-24 xl:right-32"
                src="/assets/primesol-text-light.svg"
                alt=""
                width={930}
                height={340}
                aria-hidden
            />

            <div className="brand-card flex w-full flex-col justify-between gap-10 rounded-3xl p-8 md:flex-row">
                <div className="md:max-w-114">
                    <Link href="/" scroll={false} className="inline-flex items-center gap-3">
                        <Image
                            className="size-12 shrink-0 object-contain md:size-14"
                            src="/assets/primesol-icon-light-mode.svg"
                            alt="PrimeSol"
                            width={56}
                            height={56}
                        />
                        <span className="text-xl font-semibold tracking-tight text-[#080B2B] md:text-2xl">
                            PrimeSol
                        </span>
                    </Link>
                    <p className="mt-6 text-[#28304A]">
                        PrimeSol helps teams plan, design, and build websites, apps, dashboards, stores, and automations that are clear to use and reliable after launch.
                    </p>
                </div>

                <div className="flex flex-1 items-start gap-20 md:justify-end">
                    <div>
                        <h2 className="mb-5 font-semibold">Company</h2>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} scroll={false} className="transition hover:text-[#5B22E8]">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-5 font-semibold">Get in touch</h2>
                        <div className="space-y-2">
                            <p>+923198622852</p>
                            <Link href={`mailto:${email}`} className="block transition hover:text-[#5B22E8]">
                                {email}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-center gap-6">
                <Link href="https://www.facebook.com" target="_blank" className="text-[#28304A] transition hover:text-[#5B22E8]">
                    <FaFacebook className="size-6" />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="text-[#28304A] transition hover:text-[#5B22E8]">
                    <FaTwitter className="size-6" />
                </Link>
                <Link href="https://www.instagram.com/primesol.official?igsh=aHowdHZqZ3M5dzBi&utm_source=qr" target="_blank" className="text-[#28304A] transition hover:text-[#E83EBB]">
                    <FaInstagram className="size-6" />
                </Link>
                <Link href="https://www.linkedin.com/company/primesol-technologies" target="_blank" className="text-[#28304A] transition hover:text-[#5B22E8]">
                    <FaLinkedin className="size-6" />
                </Link>
                <Link href="https://github.com/usmanaliashraf" target="_blank" className="text-[#28304A] transition hover:text-[#5B22E8]">
                    <FaGithub className="size-6" />
                </Link>
            </div>

            <p className="pb-5 pt-4 text-center text-[#28304A]">
                © {new Date().getFullYear()} PrimeSol. All rights reserved.
            </p>
        </footer>
    );
}
