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

export default function ContactPageClient() {
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
      <div className="brand-hero relative overflow-hidden px-4 pt-44 pb-24 text-center">
        <motion.p
          className="brand-pill mx-auto w-max rounded-full px-6 py-2 text-xs"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.p>

        <motion.h1
          className="mx-auto mt-4 max-w-5xl text-4xl/12 font-semibold text-[#080B2B] md:text-[64px]/19"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's Talk About Your Next{" "}
          <span className="brand-gradient-text">
            Project
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-3 max-w-2xl text-base text-[#28304A]"
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
              className="brand-card brand-card-hover rounded-2xl p-6 text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="icon-gradient mx-auto flex size-12 items-center justify-center rounded-xl">
                <item.icon className="size-6" strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[#28304A]">
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
            className="brand-card rounded-3xl p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="btn-primary flex size-14 items-center justify-center rounded-2xl">
              <MessageSquare className="size-7" strokeWidth={1.5} />
            </div>

            <h3 className="mt-6 text-3xl font-semibold">
              Not sure where to start?
            </h3>

            <p className="mt-4 text-sm/7 text-[#28304A]">
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
                    className="size-5 text-[#5B22E8]"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm text-[#28304A]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[rgba(91,34,232,0.14)] bg-[#F3ECFF] p-5">
              <p className="text-sm text-[#28304A]">
                Average response time
              </p>
              <h4 className="brand-gradient-text mt-1 text-2xl font-semibold">
                Within 24 Hours
              </h4>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="brand-card rounded-3xl p-8"
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
                  className="mt-2 h-12 w-full rounded-xl border border-[rgba(91,34,232,0.18)] bg-white px-4 text-sm text-[#11142D] outline-none transition focus:border-[#8B5CF6] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 h-12 w-full rounded-xl border border-[rgba(91,34,232,0.18)] bg-white px-4 text-sm text-[#11142D] outline-none transition focus:border-[#8B5CF6] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+923198622852"
                  className="mt-2 h-12 w-full rounded-xl border border-[rgba(91,34,232,0.18)] bg-white px-4 text-sm text-[#11142D] outline-none transition focus:border-[#8B5CF6] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Service Needed</label>
                <select name="service" className="mt-2 h-12 w-full rounded-xl border border-[rgba(91,34,232,0.18)] bg-white px-4 text-sm text-[#11142D] outline-none transition focus:border-[#8B5CF6] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]">
                  <option>Select service</option>
                  {services.map((service, index) => (
                    <option key={index}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium">Project Budget</label>
              <select name="budget" className="mt-2 h-12 w-full rounded-xl border border-[rgba(91,34,232,0.18)] bg-white px-4 text-sm text-[#11142D] outline-none transition focus:border-[#8B5CF6] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]">
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
                className="mt-2 w-full resize-none rounded-xl border border-[rgba(91,34,232,0.18)] bg-white px-4 py-3 text-sm text-[#11142D] outline-none transition focus:border-[#8B5CF6] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"
              />
            </div>

            <button
              type="submit"
              className="btn-primary mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 font-semibold transition"
            >
              Send Message
              <Send className="size-4" />
            </button>
          </motion.form>
        </div>
      </section>

      {/* CTA */}
      <motion.div
        className="soft-section mx-6 mt-24 flex flex-col items-center justify-center rounded-[2rem] px-6 py-16 text-center md:mx-16 lg:mx-24 xl:mx-35"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 mt-16 text-3xl font-semibold">
          Ready to Start Your Project?
        </h2>

        <p className="mx-auto max-w-xl text-[#28304A]">
          Let's discuss your idea and decide what should happen next.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link href="/projects" scroll={false}>
            <button className="btn-primary h-11 rounded-xl px-6 font-semibold transition">
              View Projects
            </button>
          </Link>

          <Link href="/services" scroll={false}>
            <button className="btn-secondary h-11 rounded-xl px-6 font-semibold transition">
              View Services
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
