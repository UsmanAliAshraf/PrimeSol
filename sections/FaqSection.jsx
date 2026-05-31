"use client";
import SectionTitle from "@/components/SectionTitle";
import { faqsData } from "@/data/faqsData";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="relative max-w-2xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
            <Image className="pointer-events-none absolute -left-40 -z-10 -mb-120 opacity-80" src="/assets/color-splash-light.svg" alt="color-splash" width={1000} height={1000} />
            <SectionTitle text1="FAQs" text2="Frequently asked questions" text3="A few quick answers before we talk about your project." />
            <div className="brand-card mt-8 w-full rounded-3xl px-6">
                {faqsData.map((faq, index) => (
                    <div className="w-full cursor-pointer border-b border-[rgba(91,34,232,0.14)] py-4 last:border-b-0" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-[#080B2B]">
                                {faq.question}
                            </h3>
                            <ChevronDown size={18} className={`${openIndex === index && "rotate-180"} transition-all duration-500 ease-in-out`} />
                        </div>
                        <p className={`max-w-xl text-sm text-[#28304A] transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[500px] translate-y-0 pt-4" : "opacity-0 max-h-0 overflow-hidden -translate-y-2"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
