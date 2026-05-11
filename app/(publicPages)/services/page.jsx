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
  "Understand your business needs",
  "Plan the right digital solution",
  "Design and develop the system",
  "Launch, support, and improve",
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
          Digital Services Built to Help{" "}
          <span className="bg-gradient-to-r from-[#923FEF] dark:from-[#C99DFF] to-[#C35DE8] dark:to-[#E1C9FF] bg-clip-text text-transparent">
            Businesses Scale
          </span>
        </motion.h1>

        <motion.p
          className="text-base dark:text-slate-300 max-w-2xl mt-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          PrimeSol provides modern websites, web apps, mobile apps, SaaS
          platforms, and AI automation systems designed to improve workflows and
          accelerate business growth.
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
              Get Started
            </button>
          </Link>

          <Link href="/projects">
            <button className="flex items-center gap-2 border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
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
          text2="Solutions for Modern Businesses"
          text3="Choose the right service to build, automate, and scale your business."
        />

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-35">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="p-7 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-86 transition hover:-translate-y-1 hover:border-purple-500/30"
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
                className="text-purple-500 size-9 mt-3"
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
          text2="How We Build Your Solution"
          text3="A simple and focused process from idea to launch."
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
              <div className="size-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
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
          text2="Built With Quality, Speed, and Scalability"
          text3="We focus on clean design, reliable development, and practical business outcomes."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {[
            "Modern UI with responsive layouts",
            "Scalable architecture for future growth",
            "AI automation that reduces manual work",
            "Business-focused delivery and support",
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
                className="size-7 text-purple-500 shrink-0"
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
          Let’s build a modern digital solution that helps your business grow.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link href="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
              Contact Us
            </button>
          </Link>

          <Link href="/about">
            <button className="border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
              About PrimeSol
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}