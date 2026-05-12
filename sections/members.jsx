"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Members() {
  const ref = useRef([]);

  const data = [
    {
      review:
        "Works closely with clients to turn vague ideas into clear product plans and usable interfaces.",
      name: "Richard Nelson",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      review:
        "Focuses on clean user flows, responsive layouts, and details that make a product easier to use.",
      name: "Sophia Martinez",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      review:
        "Builds reliable frontends, dashboards, and web app screens that stay maintainable after launch.",
      name: "Ethan Roberts",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "Handles backend logic, integrations, APIs, and the parts users do not see but rely on every day.",
      name: "Isabella Kim",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "Works on automation flows, AI-assisted processes, and ways to reduce repetitive admin work.",
      name: "Liam Johnson",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      review:
        "Keeps projects organized with clear communication, scope tracking, and launch support.",
      name: "Ava Patel",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="mt-32 flex flex-col items-center px-6">
      <SectionTitle
        text1="Our Team"
        text2="Meet the People Behind PrimeSol"
        text3="Designers, developers, and project minds working together to ship useful software."
      />

      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="w-full space-y-5 rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-[0_0_35px_rgba(147,51,234,0.10)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80"
            initial={{ y: 150, opacity: 0 }}
            ref={(el) => (ref.current[index] = el)}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
            onAnimationComplete={() => {
              const card = ref.current[index];
              if (card) {
                card.classList.add("transition", "duration-300");
              }
            }}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium text-white">{item.about}</p>

              <img
                className="size-10 rounded-full border border-slate-600 object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>

            <p className="line-clamp-3 text-sm/6 text-slate-300">
              “{item.review}”
            </p>

            <p className="font-medium text-slate-400">- {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
