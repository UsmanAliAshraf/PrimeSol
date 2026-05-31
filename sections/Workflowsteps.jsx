import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: " The Ringer",
    description:
      "A content-heavy publishing experience with strong navigation, fast browsing, and room for articles, shows, and media.",
    link: "https://www.theringer.com/",
    image: "/assets/ringer.png",
  },
  {
    id: 2,
    title: "UseParallel",
    description:
      "A workflow product focused on speed, clarity, and helping teams move through complex work with less friction.",
    link: "https://www.useparallel.com/",
    image: "/assets/parallel.png",
  },
  {
    id: 3,
    title: "Taxif",
    description:
      "A ride-booking app concept with clean trip flows, booking details, and simple mobile-first navigation.",
    link: "https://apps.apple.com/",
    image: "/assets/taxi.png",
  },
];

export default function WorkflowSteps() {
  return (
    <section className="mt-32 relative">
      <SectionTitle
          tag="Our Projects"
          description="A quick look at the kind of interfaces and product flows we can plan, design, and build."
      />

      <motion.div
        className="relative space-y-20 md:space-y-30 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex">
          <p className="brand-pill my-10 flex aspect-square items-center justify-center rounded-full p-2 font-medium">
            01
          </p>
          <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-[#8B5CF6]/50 to-transparent" />
          <p className="brand-pill my-10 flex aspect-square items-center justify-center rounded-full p-2 font-medium">
            02
          </p>
          <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-[#E83EBB]/50 to-transparent" />
          <p className="brand-pill my-10 flex aspect-square items-center justify-center rounded-full p-2 font-medium">
            03
          </p>
        </div>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-center gap-6 md:gap-20 ${index % 2 !== 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"}`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <Image
              src={step.image}
              alt={step.title}
              width={560}
              height={360}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="brand-card h-auto w-full max-w-sm flex-1 rounded-3xl object-cover p-2"
            />
            <div className="brand-card flex max-w-md flex-1 flex-col gap-6 rounded-3xl p-7 md:px-8">
              <h3 className="text-2xl font-semibold text-[#080B2B]">{step.title}</h3>
              <p className="line-clamp-3 pb-2 text-sm/6 text-[#28304A]">
                {step.description}
              </p>
              <a href={step.link} className="flex items-center gap-2 font-semibold text-[#5B22E8]">
                Learn More
                <ExternalLinkIcon className="size-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-16 flex justify-center">
        <Link
          href="/projects"
          scroll={false}
          className="btn-primary rounded-full px-8 py-3 text-sm font-semibold transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
