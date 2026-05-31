"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Globe2, HeartHandshake, Rocket } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "25+",
    label: "Projects Delivered",
    description: "Websites, apps, dashboards, and automation systems shipped for real business needs.",
  },
  {
    icon: HeartHandshake,
    value: "10+",
    label: "Happy Clients",
    description: "Small and growing businesses supported with clear communication and practical delivery.",
  },
  {
    icon: BrainCircuit,
    value: "AI-First",
    label: "Solutions",
    description: "Software combined with AI automation to reduce manual work and improve operations.",
  },
  {
    icon: Globe2,
    value: "Global",
    label: "Client Experience",
    description: "Remote collaboration across different markets, industries, and business workflows.",
  },
];

export default function SocialProofStats() {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-35">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            className="brand-card brand-card-hover rounded-3xl p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="icon-gradient flex size-12 items-center justify-center rounded-2xl">
              <stat.icon className="size-6" strokeWidth={1.6} />
            </div>
            <h3 className="mt-5 text-3xl font-semibold text-[#080B2B]">
              {stat.value}
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#5B22E8]">
              {stat.label}
            </p>
            <p className="mt-3 text-sm/6 text-[#28304A]">
              {stat.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
