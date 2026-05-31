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
            className="brand-card brand-card-hover group relative overflow-hidden rounded-3xl"
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
            <div className="relative aspect-[4/5] min-h-88 overflow-hidden bg-gradient-to-br from-[#F3ECFF] via-[#EEF4FF] to-[#FFF7FE]">
              <img
                className={`h-full w-full object-contain object-center transition duration-500 ${member.imageClassName}`}
                src={member.image}
                alt={`${member.name}, ${member.role}`}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080B2B]/72 via-[#080B2B]/18 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="w-max rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {member.role}
                </p>
              </div>
            </div>

            <div className="space-y-4 p-6">
              <div>
                <h3 className="text-xl font-semibold text-[#080B2B]">
                  {member.name}
                </h3>
                <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#19A7FF] via-[#8B5CF6] to-[#E83EBB]" />
              </div>

              <p className="text-sm/7 text-[#28304A]">
                {member.summary}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
