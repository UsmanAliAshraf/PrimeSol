"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/usmanaliashraf/30min?hide_gdpr_banner=1&background_color=f3ecff&text_color=080b2b&primary_color=5b22e8";

export default function BookingModal({ isOpen, onClose }) {
    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on Escape key
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") onClose();
        },
        [onClose],
    );

    useEffect(() => {
        if (!isOpen) return;
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Book a call"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#080B2B]/60 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal panel */}
            <div className="relative z-10 flex w-full max-w-[900px] flex-col overflow-hidden rounded-3xl shadow-[0_32px_80px_rgba(91,34,232,0.28)]"
                style={{ height: "min(80vh, 720px)" }}
            >
                {/* Header bar */}
                <div className="flex shrink-0 items-center justify-between bg-white px-6 py-4 border-b border-[rgba(91,34,232,0.12)]">
                    <div>
                        <p className="text-xs font-semibold text-[#5B22E8] uppercase tracking-widest">PrimeSol</p>
                        <h2 className="text-base font-semibold text-[#080B2B]">Book a Free 30-Minute Call</h2>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close booking modal"
                        className="flex size-9 items-center justify-center rounded-xl border border-[rgba(91,34,232,0.18)] bg-[#F3ECFF] text-[#5B22E8] transition hover:bg-[#5B22E8] hover:text-white"
                    >
                        <X className="size-4" strokeWidth={2.5} />
                    </button>
                </div>

                {/* Calendly iframe */}
                <iframe
                    src={CALENDLY_URL}
                    title="Schedule a call with PrimeSol"
                    className="w-full flex-1 bg-white"
                    frameBorder="0"
                    loading="lazy"
                    allow="payment"
                />
            </div>
        </div>
    );
}
