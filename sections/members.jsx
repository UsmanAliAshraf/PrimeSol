"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const team = [
  {
    name: "Usman Ali Ashraf",
    role: "Founder & Product Lead",
    image: "/assets/usman.png",
    imageClassName: "object-[50%_18%] scale-[1.16] group-hover:scale-[1.2]",
    linkedin: "https://www.linkedin.com/in/usmanaleeashraff/",
    summary:
      "Leads PrimeSol’s product direction, AI solution strategy, client communication, and overall vision for building useful software.",
  },
  {
    name: "Basit Mehmood",
    role: "Co-Founder & Operations Lead",
    image: "/assets/basit.png",
    imageClassName: "object-[50%_16%] scale-[1.14] group-hover:scale-[1.18]",
    linkedin: "#",
    summary:
      "Manages delivery, project planning, client experience, and ensures projects move smoothly from idea to launch.",
  },
  {
    name: "Ehtisham Yousaf",
    role: "Co-Founder & Web Developer",
    image: "/assets/abc.png",
    imageClassName: "object-[50%_18%] scale-[1.12] group-hover:scale-[1.16]",
    linkedin: "https://www.linkedin.com/in/ehtishamyousaf/",
    summary:
      "Builds responsive websites, clean web interfaces, and performance-focused digital products for clients.",
  },
  {
    name: "Arslan Ashraf",
    role: "Business Developer",
    image: "/assets/arslan.jpeg",
    imageClassName: "object-[50%_18%] scale-[1.1] group-hover:scale-[1.14]",
    linkedin: "https://www.linkedin.com/in/m-arslan-ab98a0370/",
    summary:
      "Works on partnerships, lead generation, client needs, and helps turn business opportunities into clear project plans.",
  },
];

export default function Members() {
  return (
    <section className="mt-32 px-6 md:px-16 lg:px-24 xl:px-35">
      <SectionTitle
        text1="Our Team"
        text2="Meet the People Behind PrimeSol"
        text3="A focused team combining product thinking, AI automation strategy, operations, and hands-on development."
      />

      <div className="mx-auto mt-14 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {team.map((member, index) => (
          <motion.article
            key={member.name}
            className="brand-card brand-card-hover group relative overflow-hidden rounded-3xl p-6"
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
            <div className="relative overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-[#4F20E8] via-[#8B5CF6] to-[#E83EBB] p-1.5 shadow-[0_22px_55px_rgba(91,34,232,0.22)]">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#F3ECFF] via-[#EEF4FF] to-[#FFF7FE]">
                <img
                  className={`h-full w-full object-cover transition duration-500 ${member.imageClassName}`}
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                />
              </div>
              <div className="pointer-events-none absolute inset-x-1.5 bottom-1.5 h-24 rounded-b-[1.35rem] bg-gradient-to-t from-[#080B2B]/42 to-transparent" />
            </div>

            <div className="mt-7 space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#080B2B]">
                  {member.name}
                </h3>
                <p className="mx-auto w-max rounded-full border border-[rgba(91,34,232,0.18)] bg-[#F3ECFF]/80 px-3 py-1 text-xs font-semibold text-[#5B22E8]">
                  {member.role}
                </p>
                <div className="mx-auto h-px w-16 bg-gradient-to-r from-[#19A7FF] via-[#8B5CF6] to-[#E83EBB]" />
              </div>

              <p className="text-sm/7 text-[#28304A]">
                {member.summary}
              </p>
              <a
                href={member.linkedin}
                className="btn-secondary inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold transition"
              >
                View LinkedIn
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
