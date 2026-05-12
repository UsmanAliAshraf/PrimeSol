"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const processSteps = [
  "Understand the problem",
  "Shape the scope",
  "Design and build",
  "Launch and improve",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 pt-44 pb-24 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
        <motion.p
          className="flex flex-wrap items-center justify-center gap-3 p-1.5 px-6 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20 text-xs"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.p>

        <motion.h1
          className="mt-4 text-5xl/15 md:text-[64px]/19 font-semibold max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Services for Teams That Need{" "}
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Things Built Properly
          </span>
        </motion.h1>

        <motion.p
          className="text-base dark:text-slate-300 max-w-2xl mt-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From websites and online stores to internal dashboards and automation,
          we help you build the tools your customers and team actually need.
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/contact" scroll={false}>
            <button className="bg-sky-500 hover:bg-sky-600 transition text-white rounded-md px-6 h-11">
              Get Started
            </button>
          </Link>

          <Link href="/projects" scroll={false}>
            <button className="flex items-center gap-2 border border-sky-500/40 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
              View Projects
              <ArrowRight className="size-4" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Services Grid */}
      <section className="mt-28">
        <SectionTitle
          text1="What We Offer"
          text2="Choose What You Need Help With"
          text3="Start with one focused service, or combine a few into a complete project."
        />

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-35">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="p-7 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-86 transition hover:-translate-y-1 hover:border-sky-400/40"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <service.icon
                className="text-sky-400 size-9 mt-3"
                strokeWidth={1.3}
              />

              <h3 className="text-lg font-semibold">{service.title}</h3>

              <p className="text-slate-400 text-sm/6">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
        <SectionTitle
          text1="Our Process"
          text2="How We Work"
          text3="A straightforward process that keeps the project clear from first call to launch."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 transition hover:-translate-y-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="size-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-semibold">
                {index + 1}
              </div>

              <p className="mt-5 text-sm font-medium text-slate-700 dark:text-slate-200">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
        <SectionTitle
          text1="Why PrimeSol"
          text2="Why Teams Work With PrimeSol"
          text3="We keep the work clear, practical, and focused on what the product needs to do."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {[
            "Clean interfaces that work on every screen",
            "Architecture that can grow without becoming messy",
            "Automation that removes repetitive admin work",
            "Clear delivery, support, and honest communication",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 transition hover:-translate-y-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <CheckCircle2
                className="size-7 text-sky-400 shrink-0"
                strokeWidth={1.5}
              />

              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.div
        className="flex flex-col items-center text-center justify-center mt-20 pb-24 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-semibold mt-16 mb-4">
          Ready to Start Your Project?
        </h3>

        <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
          Let’s talk through what you need and turn it into a clear project plan.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link href="/contact" scroll={false}>
            <button className="bg-sky-500 hover:bg-sky-600 transition text-white rounded-md px-6 h-11">
              Contact Us
            </button>
          </Link>

          <Link href="/about" scroll={false}>
            <button className="border border-sky-500/40 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
              About PrimeSol
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
