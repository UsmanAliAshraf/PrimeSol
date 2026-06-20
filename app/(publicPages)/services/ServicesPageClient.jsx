"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { servicesData } from "@/data/servicesData";
import ClientFeedback from "@/sections/ClientFeedback";
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

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero Section */}
      <div className="brand-hero flex flex-col items-center justify-center px-4 pt-44 pb-24 text-center">
        <motion.p
          className="brand-pill flex flex-wrap items-center justify-center gap-3 rounded-full px-6 py-2 text-xs"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.p>

        <motion.h1
          className="mt-4 max-w-4xl text-4xl/12 font-semibold text-[#080B2B] md:text-[64px]/19"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          AI-First Services for Businesses That Need{" "}
          <span className="brand-gradient-text">
            Practical Results
          </span>
        </motion.h1>

        <motion.p
          className="mt-3 max-w-2xl text-base text-[#28304A]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We build websites, apps, dashboards, automations, and AI agents that
          help businesses go digital, reduce manual work, and operate more
          efficiently.
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/contact" scroll={false}>
            <button className="btn-primary h-11 rounded-xl px-6 font-semibold transition">
              Get Started
            </button>
          </Link>

          <Link href="/projects" scroll={false}>
            <button className="btn-secondary flex h-11 items-center gap-2 rounded-xl px-6 font-semibold transition">
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
          text2="Choose the Right Digital Solution"
          text3="Start with one focused service, or combine software development and AI automation into a complete business system."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-24 xl:px-35">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="brand-card brand-card-hover rounded-3xl p-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="icon-gradient flex size-14 items-center justify-center rounded-2xl">
                <service.icon className="size-8" strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#080B2B]">{service.title}</h3>

              <p className="mt-3 text-sm/6 text-[#28304A]">
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
          text3="A straightforward process that keeps your website, app, dashboard, or AI automation project clear from first call to launch."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="brand-card brand-card-hover rounded-2xl p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="btn-primary flex size-10 items-center justify-center rounded-full font-semibold">
                {index + 1}
              </div>

              <p className="mt-5 text-sm font-semibold text-[#11142D]">
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
            "AI automation that removes repetitive admin work",
            "Clear delivery, support, and honest communication",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="brand-card brand-card-hover flex items-center gap-4 rounded-2xl p-6"
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
                className="size-7 shrink-0 text-[#5B22E8]"
                strokeWidth={1.5}
              />

              <p className="text-sm font-semibold text-[#11142D]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <ClientFeedback />

      {/* CTA */}
      <motion.div
        className="soft-section mx-6 mt-24 flex flex-col items-center justify-center rounded-[2rem] px-6 py-16 text-center md:mx-16 lg:mx-24 xl:mx-35"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mt-16 mb-4">
          Ready to Start Your Project?
        </h2>

        <p className="mx-auto max-w-xl text-[#28304A]">
          Let's talk through what you need and turn it into a clear project plan.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link href="/contact" scroll={false}>
            <button className="btn-primary h-11 rounded-xl px-6 font-semibold transition">
              Contact Us
            </button>
          </Link>

          <Link href="/about" scroll={false}>
            <button className="btn-secondary h-11 rounded-xl px-6 font-semibold transition">
              About PrimeSol
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
