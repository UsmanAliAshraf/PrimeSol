"use client"
import SectionTitle from "@/components/SectionTitle";
import { pricingData } from "@/data/pricingData";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";

export default function Pricing() {
    return (
        <div className="relative">
            <Image className="pointer-events-none absolute -mt-20 opacity-80 md:-mt-100 md:left-20" src="/assets/color-splash-light.svg" alt="color-splash" width={1000} height={1000} />
            <SectionTitle text1="PRICING" text2="Our Pricing Plans" text3="Simple starting points. Final pricing depends on scope, features, and timeline." />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
                {pricingData.map((plan, index) => (
                    <div key={index} className={`brand-card brand-card-hover w-full max-w-75 rounded-2xl p-6 ${plan.mostPopular ? "relative pt-12 bg-gradient-to-br from-[#4F20E8] via-[#8B5CF6] to-[#E83EBB]" : ""}`}>
                        {plan.mostPopular && (
                            <div className="absolute right-4 top-4 flex items-center gap-1 rounded bg-white/90 px-2 py-1.5 text-xs font-medium text-[#5B22E8]">
                                <SparklesIcon size={14} />
                                <p>Most Popular</p>
                            </div>
                        )}
                        <p className={plan.mostPopular ? "text-white" : "text-[#11142D]"}>{plan.title}</p>
                        <h4 className={`mt-1 text-3xl font-semibold ${plan.mostPopular ? "text-white" : "text-[#080B2B]"}`}>${plan.price}<span className={`text-sm font-normal ${plan.mostPopular ? "text-white/85" : "text-[#5B22E8]"}`}>/mo</span></h4>
                        <hr className={`my-8 ${plan.mostPopular ? "border-white/30" : "border-[rgba(91,34,232,0.18)]"}`} />
                        <div className={`space-y-2 ${plan.mostPopular ? "text-white" : "text-[#28304A]"}`}>
                            {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-1.5">
                                    <feature.icon size={18} className={`${plan.mostPopular ? "text-white" : "text-[#5B22E8]"}`} />
                                    <span>{feature.name}</span>
                                </div>
                            ))}
                        </div>
                        <button className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${plan.mostPopular ? "bg-white/92 text-[#5B22E8] hover:bg-white" : "btn-primary"}`}>
                            <span>{plan.buttonText}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
