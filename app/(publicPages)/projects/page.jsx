"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Bot,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  Cpu,
  BriefcaseBusiness,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const tabs = [
  "All",
  "Websites",
  "Web Apps",
  "Mobile Apps",
  "AI Automation",
  "E-commerce",
  "CRM / HRM",
];

const projects = [
  {
    title: "Corporate Business Website",
    category: "Websites",
    icon: Globe,
    image: "/assets/ringer.png",
    description:
      "A professional company website built with modern sections, responsive layout, service pages, and lead-focused call-to-actions.",
    tags: ["Website", "Branding", "Responsive"],
    link: "/contact",
  },
  {
    title: "Software Agency Website",
    category: "Websites",
    icon: Globe,
    image: "/assets/parallel.png",
    description:
      "A premium agency website designed to present services, portfolio, team, process, testimonials, and strong conversion flows.",
    tags: ["Agency", "Portfolio", "UI/UX"],
    link: "/contact",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web Apps",
    icon: Cpu,
    image: "/assets/parallel.png",
    description:
      "A SaaS dashboard with analytics, user roles, data cards, charts, subscriptions, and scalable business management features.",
    tags: ["SaaS", "Dashboard", "Analytics"],
    link: "/contact",
  },
  {
    title: "Admin Management Panel",
    category: "Web Apps",
    icon: LayoutDashboard,
    image: "/assets/taxi.png",
    description:
      "A custom admin panel for managing users, records, reports, operations, workflow status, and internal business data.",
    tags: ["Admin Panel", "Backend", "Management"],
    link: "/contact",
  },
  {
    title: "Ride Booking Mobile App",
    category: "Mobile Apps",
    icon: Smartphone,
    image: "/assets/taxi.png",
    description:
      "A mobile app interface for ride booking with simple user flow, booking management, live status, and clean navigation.",
    tags: ["Mobile App", "Booking", "Transport"],
    link: "/contact",
  },
  {
    title: "Service Booking App",
    category: "Mobile Apps",
    icon: Smartphone,
    image: "/assets/ringer.png",
    description:
      "A mobile-first service booking solution where users can select services, book slots, and receive instant updates.",
    tags: ["Appointments", "App Flow", "UX"],
    link: "/contact",
  },
  {
    title: "AI Receptionist Agent",
    category: "AI Automation",
    icon: Bot,
    image: "/assets/parallel.png",
    description:
      "An AI receptionist that responds to customer queries, collects details, checks availability, and books appointments automatically.",
    tags: ["AI Agent", "Leads", "Automation"],
    link: "/contact",
  },
  {
    title: "Real Estate AI Assistant",
    category: "AI Automation",
    icon: Bot,
    image: "/assets/taxi.png",
    description:
      "An AI assistant that understands property requirements, recommends suitable listings, captures leads, and notifies the sales team.",
    tags: ["AI Assistant", "Real Estate", "CRM"],
    link: "/contact",
  },
  {
    title: "Fashion E-commerce Store",
    category: "E-commerce",
    icon: ShoppingCart,
    image: "/assets/ringer.png",
    description:
      "A complete online store with product catalog, cart, checkout, product filters, payment setup, and order management.",
    tags: ["E-commerce", "Checkout", "Products"],
    link: "/contact",
  },
  {
    title: "Shopify Product Store",
    category: "E-commerce",
    icon: ShoppingCart,
    image: "/assets/parallel.png",
    description:
      "A Shopify-based product store with custom theme setup, product management, payment integration, and sales-focused design.",
    tags: ["Shopify", "Store", "Sales"],
    link: "/contact",
  },
  {
    title: "Sales CRM System",
    category: "CRM / HRM",
    icon: BriefcaseBusiness,
    image: "/assets/taxi.png",
    description:
      "A CRM platform for managing leads, customers, sales pipelines, follow-ups, communication, and business reporting.",
    tags: ["CRM", "Leads", "Sales"],
    link: "/contact",
  },
  {
    title: "HRM Management Portal",
    category: "CRM / HRM",
    icon: BriefcaseBusiness,
    image: "/assets/ringer.png",
    description:
      "An HRM portal for employee records, attendance, leaves, payroll, HR requests, and internal company operations.",
    tags: ["HRM", "Employees", "Portal"],
    link: "/contact",
  },
];

const processSteps = [
  "Discovery & Planning",
  "UI/UX Design",
  "Development",
  "Launch & Support",
];

const industries = [
  "Startups",
  "E-commerce",
  "Real Estate",
  "Healthcare",
  "Education",
  "Service Businesses",
  "Agencies",
  "Local Businesses",
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden px-4 pt-44 pb-24 text-center bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
        <motion.p
          className="mx-auto flex w-max items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-2 text-xs dark:border-slate-600 dark:bg-slate-600/20"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.p>

        <motion.h1
          className="mx-auto mt-4 max-w-5xl text-5xl/15 font-semibold md:text-[64px]/19"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Digital Projects Built for{" "}
          <span className="bg-gradient-to-r from-[#923FEF] to-[#C35DE8] bg-clip-text text-transparent dark:from-[#C99DFF] dark:to-[#E1C9FF]">
            Real Business Growth
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-3 max-w-2xl text-base dark:text-slate-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our recent work across websites, web applications, mobile
          apps, AI automation, e-commerce, CRM, and HRM solutions.
        </motion.p>
      </div>

      {/* Projects Tabs + Grid */}
      <section className="mt-28">
        <SectionTitle
          text1="Featured Work"
          text2="Explore Projects by Category"
          text3="Click a category to view relevant projects built for different business needs."
        />

        <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                activeTab === tab
                  ? "border-purple-500 bg-purple-600 text-white shadow-[0_0_25px_rgba(147,51,234,0.35)]"
                  : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-purple-500/40 dark:border-slate-800 dark:bg-slate-800/20 dark:text-slate-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Showing {filteredProjects.length} project
          {filteredProjects.length > 1 ? "s" : ""} in{" "}
          <span className="text-purple-500">{activeTab}</span>
        </p>

        <motion.div
          key={activeTab}
          className="mt-12 grid grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-24 xl:px-35"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_0_40px_rgba(147,51,234,0.08)] transition hover:-translate-y-2 hover:border-purple-500/30 dark:border-slate-800 dark:bg-slate-900/50"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                  {project.category}
                </div>

                <div className="absolute bottom-5 left-5 flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur">
                  <project.icon className="size-6" strokeWidth={1.5} />
                </div>
              </div>

              <div className="p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-600 dark:text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 text-sm/7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-300"
                  >
                    View Project
                    <ExternalLink className="size-4" />
                  </Link>

                  <div className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition group-hover:bg-purple-600 dark:border-slate-700 dark:bg-slate-800">
                    <ArrowRight className="size-4 transition group-hover:text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Project Process */}
      <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
        <SectionTitle
          text1="Our Process"
          text2="How We Build Projects"
          text3="A clear process from idea to launch, focused on quality and business results."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-purple-600 text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-base font-semibold">{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
        <SectionTitle
          text1="Industries"
          text2="Projects for Different Business Types"
          text3="We build solutions for startups, agencies, service businesses, e-commerce brands, and growing teams."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((item, index) => (
            <motion.span
              key={index}
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm text-slate-600 transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/20 dark:text-slate-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {item}
            </motion.span>
          ))}
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
          Have a Similar Project in Mind?
        </h3>

        <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-200">
          Let’s build a modern digital solution tailored to your business goals.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link href="/contact">
            <button className="h-11 rounded-md bg-purple-600 px-6 text-white transition hover:bg-purple-700">
              Start Your Project
            </button>
          </Link>

          <Link href="/about">
            <button className="h-11 rounded-md border border-purple-900 px-6 text-slate-600 transition dark:text-white">
              About PrimeSol
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}