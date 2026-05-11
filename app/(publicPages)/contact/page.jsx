"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@primesol.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+92 300 0000000",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lahore, Pakistan",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat, 9:00 AM - 6:00 PM",
  },
];

const services = [
  "Website Development",
  "Web App Development",
  "Mobile App Development",
  "AI Automation",
  "CRM / HRM System",
  "E-commerce Store",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden px-4 pt-44 pb-24 text-center bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
        <motion.p
          className="mx-auto w-max rounded-full border border-slate-300 bg-white/70 px-6 py-2 text-xs dark:border-slate-600 dark:bg-slate-600/20"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.p>

        <motion.h1
          className="mx-auto mt-4 max-w-5xl text-5xl/15 font-semibold md:text-[64px]/19"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let’s Build Your Next{" "}
          <span className="bg-gradient-to-r from-[#923FEF] to-[#C35DE8] bg-clip-text text-transparent dark:from-[#C99DFF] dark:to-[#E1C9FF]">
            Digital Solution
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-3 max-w-2xl text-base dark:text-slate-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tell us about your idea, business need, or automation goal. Our team
          will help you plan and build the right solution.
        </motion.p>
      </div>

      {/* Contact Cards */}
      <section className="mt-20 px-6 md:px-16 lg:px-24 xl:px-35">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/60"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-purple-600/10 text-purple-500">
                <item.icon className="size-6" strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
        <SectionTitle
          text1="Start a Conversation"
          text2="Tell Us About Your Project"
          text3="Fill out the form and we’ll get back to you with the best solution for your business."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Info */}
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900/60"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex size-14 items-center justify-center rounded-2xl bg-purple-600 text-white">
              <MessageSquare className="size-7" strokeWidth={1.5} />
            </div>

            <h3 className="mt-6 text-3xl font-semibold">
              Need help choosing the right solution?
            </h3>

            <p className="mt-4 text-sm/7 text-slate-600 dark:text-slate-300">
              Whether you need a website, web application, mobile app, AI agent,
              CRM, HRM, or e-commerce store, PrimeSol can help you turn your
              idea into a scalable digital product.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Free initial project discussion",
                "Clear scope and technical guidance",
                "Modern design and scalable development",
                "Post-launch support and improvements",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    className="size-5 text-purple-500"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/30">
              <p className="text-sm text-slate-500 dark:text-slate-300">
                Average response time
              </p>
              <h4 className="mt-1 text-2xl font-semibold text-purple-500">
                Within 24 Hours
              </h4>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_0_40px_rgba(147,51,234,0.08)] dark:border-slate-800 dark:bg-slate-900/60"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-purple-500 dark:border-slate-800 dark:bg-slate-800/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-purple-500 dark:border-slate-800 dark:bg-slate-800/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  placeholder="+92 300 0000000"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-purple-500 dark:border-slate-800 dark:bg-slate-800/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Service Needed</label>
                <select className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-purple-500 dark:border-slate-800 dark:bg-slate-800/40">
                  <option>Select service</option>
                  {services.map((service, index) => (
                    <option key={index}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium">Project Budget</label>
              <select className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-purple-500 dark:border-slate-800 dark:bg-slate-800/40">
                <option>Select budget range</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $3,000</option>
                <option>$3,000 - $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium">Project Details</label>
              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 dark:border-slate-800 dark:bg-slate-800/40"
              />
            </div>

            <button
              type="button"
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 text-white transition hover:bg-purple-700"
            >
              Send Message
              <Send className="size-4" />
            </button>
          </motion.form>
        </div>
      </section>

      {/* CTA */}
      <motion.div
        className="mt-20 flex flex-col items-center justify-center px-6 pb-24 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-4 mt-16 text-3xl font-semibold">
          Ready to Start Your Project?
        </h3>

        <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-200">
          Let’s discuss your idea and build a modern digital solution for your
          business.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link href="/projects">
            <button className="h-11 rounded-md bg-purple-600 px-6 text-white transition hover:bg-purple-700">
              View Projects
            </button>
          </Link>

          <Link href="/services">
            <button className="h-11 rounded-md border border-purple-900 px-6 text-slate-600 transition dark:text-white">
              View Services
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}