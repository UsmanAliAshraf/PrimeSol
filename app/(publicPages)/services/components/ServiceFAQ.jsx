"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import RevealWrapper from "./RevealWrapper";

export default function ServiceFAQ({ faqs, serviceName }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
            <RevealWrapper>
                <p className="brand-pill mx-auto w-max rounded-full px-10 py-2 text-center font-semibold">
                    FAQ
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold text-[#080B2B]">
                    Common Questions About {serviceName}
                </h2>
            </RevealWrapper>

            <div className="mx-auto mt-12 max-w-3xl space-y-3">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="brand-card overflow-hidden rounded-2xl">
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => toggle(index)}
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                            >
                                <h3 className="text-sm font-semibold text-[#080B2B]">
                                    {faq.question}
                                </h3>
                                <span className="icon-gradient flex size-8 shrink-0 items-center justify-center rounded-xl">
                                    {isOpen
                                        ? <Minus className="size-4 text-[#5B22E8]" strokeWidth={2} />
                                        : <Plus className="size-4 text-[#5B22E8]" strokeWidth={2} />
                                    }
                                </span>
                            </button>
                            <div className={`faq-body ${isOpen ? "open" : ""}`}>
                                <div>
                                    <p className="px-6 pb-5 text-sm/6 text-[#28304A]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
