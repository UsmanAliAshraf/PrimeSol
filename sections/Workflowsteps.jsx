import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { ExternalLinkIcon } from "lucide-react";

const steps = [
  {
    id: 1,
    title: " The Ringer",
    description:
      " A modern digital media platform blending sports, culture, and entertainment into sharp, opinion-led content ecosystems ",
    link: "https://www.theringer.com/",
    image: "/assets/ringer.png",
  },
  {
    id: 2,
    title: "UseParallel",
    description:
      "A powerful tool for parallel processing and optimization accelerating workflows and improving performance.",
    link: "https://www.useparallel.com/",
    image: "/assets/parallel.png",
  },
  {
    id: 3,
    title: "Taxif",
    description:
      "Ride-hailing app offering convenient transportation solutions with a user-friendly interface.",
    link: "https://apps.apple.com/",
    image: "/assets/taxi.png",
  },
];

export default function WorkflowSteps() {
  return (
    <section className="mt-32 relative">
      <SectionTitle
          tag="Our Projects"
          description="A few of the 100+ projects delivered for founders and businesses worldwide."
      />

      <motion.div
        className="relative space-y-20 md:space-y-30 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
          <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
            01
          </p>
          <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
          <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
            02
          </p>
          <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
          <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
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
            <img
              src={step.image}
              alt="step"
              className="flex-1 h-auto w-full max-w-sm rounded-2xl"
            />
            <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
              <h3 className="text-2xl font-medium text-white">{step.title}</h3>
              <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                {step.description}
              </p>
              <a href={step.link} className="flex items-center gap-2">
                Learn More
                <ExternalLinkIcon className="size-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-16 flex justify-center">
        <a
          href="/projects"
          className="rounded-full border border-purple-500/40 bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(147,51,234,0.35)] transition hover:bg-purple-700"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}
