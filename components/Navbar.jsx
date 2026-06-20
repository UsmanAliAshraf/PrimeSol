"use client";
import { navLinks } from "@/data/navLinks";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [bookingOpen, setBookingOpen] = useState(false);

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <>
        <nav className={`fixed top-0 z-50 flex w-full items-center justify-between border-b border-[rgba(91,34,232,0.10)] bg-white/72 px-6 py-3 shadow-[0_10px_35px_rgba(91,34,232,0.08)] backdrop-blur-[18px] md:px-16 md:py-3.5 lg:px-24 xl:px-32 ${openMobileMenu ? "" : "backdrop-blur"}`}>
            <Link href="/" scroll={false} className="flex shrink-0 items-center gap-2.5 md:gap-3">
                <Image
                    className="size-12 shrink-0 object-contain md:size-14"
                    src="/assets/primesol-icon-light-mode.svg"
                    alt="PrimeSol"
                    width={56}
                    height={56}
                    priority
                    fetchPriority="high"
                />
                <span className="text-lg font-semibold tracking-tight text-[#080B2B] md:text-xl">
                    PrimeSol
                </span>
            </Link>
            <div className="hidden items-center md:gap-8 lg:gap-9 md:flex lg:pl-20">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        scroll={false}
                        className="group relative text-sm font-medium text-[#11142D] transition-colors hover:text-[#5B22E8]"
                    >
                        {link.name}
                        <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-[#4F20E8] via-[#8B5CF6] to-[#E83EBB] transition-all group-hover:w-full" />
                    </Link>
                ))}
            </div>
            {/* Mobile menu */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 bg-[#F7F2FF]/90 text-lg font-medium text-[#11142D] backdrop-blur-md transition duration-300 md:hidden ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} scroll={false} onClick={() => setOpenMobileMenu(false)}>
                        {link.name}
                    </Link>
                ))}
                <button
                    onClick={() => { setOpenMobileMenu(false); setBookingOpen(true); }}
                    className="btn-primary rounded-xl px-5 py-2 text-sm font-semibold transition"
                >
                    Book a Call
                </button>
                <button className="btn-primary flex aspect-square size-10 items-center justify-center rounded-xl p-1 transition" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setBookingOpen(true)}
                    className="btn-primary hidden items-center rounded-xl px-4 py-2 text-sm font-semibold transition md:inline-flex"
                >
                    Book a Call
                </button>
                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="text-[#11142D] md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>

        <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
        </>
    );
}
