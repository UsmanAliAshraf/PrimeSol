import SectionTitle from "@/components/SectionTitle";
import { BotIcon, BrainIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: BotIcon,
            title: "Autonomous Agents",
            description: "Agents that plan, execute & think step-by-step.",
        },
        {
            icon: BrainIcon,
            title: "Memory & Learning",
            description: "Agents retain memory and improve over time.",
        },
        {
            icon: ZapIcon,
            title: "Real-time Execution",
            description: "Fast responses with async task processing.",
        }
    ];

    return (
        <section className="mt-32">
            <SectionTitle
                title="Our Services"
                description="We build websites, apps, and automations that help teams work with less friction."
            />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="brand-card brand-card-hover w-full max-w-80 rounded-2xl p-6"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className="icon-gradient flex size-12 items-center justify-center rounded-2xl">
                            <feature.icon className="size-7" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-[#080B2B]">
                            {feature.title}
                        </h3>
                        <p className="line-clamp-2 pb-2 text-[#28304A]">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
