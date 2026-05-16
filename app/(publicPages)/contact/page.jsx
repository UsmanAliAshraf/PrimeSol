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

const CONTACT_EMAIL = "hello@primesol.co";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: CONTACT_EMAIL,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+923198622852",
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
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent("New PrimeSol project inquiry");
    const body = encodeURIComponent(
      [
        `Full Name: ${formData.get("name") || ""}`,
        `Email: ${formData.get("email") || ""}`,
        `Phone: ${formData.get("phone") || ""}`,
        `Service Needed: ${formData.get("service") || ""}`,
        `Project Budget: ${formData.get("budget") || ""}`,
        "",
        "Project Details:",
        formData.get("details") || "",
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

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
          Let’s Talk About Your Next{" "}
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Project
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-3 max-w-2xl text-base dark:text-slate-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tell us what you are trying to build, fix, or automate. We will help
          you figure out the best next step.
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
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
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
          text2="Tell Us What You Need"
          text3="A short message is enough. We can help shape the details from there."
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
            <div className="flex size-14 items-center justify-center rounded-2xl bg-sky-500 text-white">
              <MessageSquare className="size-7" strokeWidth={1.5} />
            </div>

            <h3 className="mt-6 text-3xl font-semibold">
              Not sure where to start?
            </h3>

            <p className="mt-4 text-sm/7 text-slate-600 dark:text-slate-300">
              Whether you need a website, app, automation, CRM, HRM, or online
              store, we can help you understand the scope and choose a sensible
              way to build it.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Free initial project discussion",
                "Clear scope and practical technical guidance",
                "Design and development handled together",
                "Support and improvements after launch",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    className="size-5 text-sky-400"
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
              <h4 className="mt-1 text-2xl font-semibold text-sky-400">
                Within 24 Hours
              </h4>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_0_40px_rgba(56,189,248,0.10)] dark:border-slate-800 dark:bg-slate-900/60"
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
                  name="name"
                  placeholder="Your name"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-sky-400 dark:border-slate-800 dark:bg-slate-800/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-sky-400 dark:border-slate-800 dark:bg-slate-800/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+923198622852"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-sky-400 dark:border-slate-800 dark:bg-slate-800/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Service Needed</label>
                <select name="service" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-sky-400 dark:border-slate-800 dark:bg-slate-800/40">
                  <option>Select service</option>
                  {services.map((service, index) => (
                    <option key={index}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium">Project Budget</label>
              <select name="budget" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-sky-400 dark:border-slate-800 dark:bg-slate-800/40">
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
                name="details"
                placeholder="Tell us about your project..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-400 dark:border-slate-800 dark:bg-slate-800/40"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 text-white transition hover:bg-sky-600"
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
          Let’s discuss your idea and decide what should happen next.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link href="/projects" scroll={false}>
            <button className="h-11 rounded-md bg-sky-500 px-6 text-white transition hover:bg-sky-600">
              View Projects
            </button>
          </Link>

          <Link href="/services" scroll={false}>
            <button className="h-11 rounded-md border border-sky-500/40 px-6 text-slate-600 transition dark:text-white">
              View Services
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
