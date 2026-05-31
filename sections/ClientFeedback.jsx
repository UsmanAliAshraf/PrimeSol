"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "PrimeSol understood the requirements clearly and delivered a clean, functional solution on time.",
    name: "Client Name",
    role: "Business Owner",
  },
  {
    quote:
      "The team communicated well throughout the project and helped us shape the idea into a working product.",
    name: "Client Name",
    role: "Business Owner",
  },
  {
    quote:
      "We appreciated their support after delivery and their ability to quickly fix issues and improve the system.",
    name: "Client Name",
    role: "Business Owner",
  },
  {
    quote:
      "PrimeSol helped us think through the workflow, remove manual steps, and launch something our team could actually use.",
    name: "Client Name",
    role: "Business Owner",
  },
];

export default function ClientFeedback() {
  return (
    <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
      <SectionTitle
        text1="Client Feedback"
        text2="What Clients Say"
        text3="Early feedback from businesses that trusted PrimeSol to build clearer digital systems."
      />

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((item, index) => (
          <motion.article
            key={`${item.name}-${index}`}
            className="brand-card brand-card-hover flex min-h-72 flex-col justify-between rounded-3xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div>
              <div className="icon-gradient flex size-11 items-center justify-center rounded-2xl">
                <Quote className="size-5" strokeWidth={1.8} />
              </div>
              <p className="mt-6 text-sm/7 text-[#28304A]">“{item.quote}”</p>
            </div>
            <div className="mt-8 border-t border-[rgba(91,34,232,0.16)] pt-4">
              <h3 className="font-semibold text-[#080B2B]">{item.name}</h3>
              <p className="mt-1 text-sm text-[#5B22E8]">{item.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
