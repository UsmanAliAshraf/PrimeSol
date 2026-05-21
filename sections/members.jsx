"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const team = [
  {
    name: "Usman Ali Ashraf",
    role: "Founder",
    image: "/assets/usman.png",
    imageClassName: "scale-100 group-hover:scale-[1.03]",
    summary:
      "Leads PrimeSol's product direction, client strategy, and the standard for useful, polished software.",
  },
  {
    name: "Basit Mehmood",
    role: "CEO",
    image: "/assets/basit.png",
    imageClassName: "scale-100 group-hover:scale-[1.03]",
    summary:
      "Guides operations, delivery planning, and the client experience from first conversation to launch.",
  },
  {
    name: "Ali Ahmer",
    role: "Website Developer",
    image: "/assets/abc.png",
    imageClassName: "scale-100 group-hover:scale-[1.03]",
    summary:
      "Builds responsive websites and clean web interfaces with a focus on speed, clarity, and detail.",
  },
  {
    name: "Arslan Ashraf",
    role: "Business Developer",
    image: "/assets/arslan.jpeg",
    imageClassName: "scale-90 group-hover:scale-95",
    summary:
      "Develops partnerships, understands business needs, and helps shape opportunities into clear plans.",
  },
];

export default function Members() {
  return (
    <section className="mt-32 px-6 md:px-16 lg:px-24 xl:px-35">
      <SectionTitle
        text1="Our Team"
        text2="Meet the People Behind PrimeSol"
        text3="A focused team combining business thinking, product direction, and hands-on web development."
      />

      <div className="mx-auto mt-14 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {team.map((member, index) => (
          <motion.article
            key={member.name}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-[0_0_45px_rgba(56,189,248,0.08)] dark:hover:border-sky-500/50"
            initial={{ y: 90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 280,
              damping: 60,
              mass: 1,
            }}
          >
            <div className="relative aspect-[4/5] min-h-88 overflow-hidden bg-[#111111]">
              <img
                className={`h-full w-full object-contain object-center transition duration-500 ${member.imageClassName}`}
                src={member.image}
                alt={`${member.name}, ${member.role}`}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="w-max rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {member.role}
                </p>
              </div>
            </div>

            <div className="space-y-4 p-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                  {member.name}
                </h3>
                <div className="mt-3 h-px w-16 bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400" />
              </div>

              <p className="text-sm/7 text-slate-600 dark:text-slate-300">
                {member.summary}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
