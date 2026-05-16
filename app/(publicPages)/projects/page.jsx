"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
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
  Palette,
  GraduationCap,
  Wallet,
  Plane,
  Building2,
  LineChart,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const tabs = [
  "All",
  "UI/UX",
  "Websites",
  "SaaS Platforms",
  "E-Commerce",
  "Mobile Apps",
  "AI & Blockchain",
  "EdTech",
];

const projects = [
  {
    title: "Material UI CRM Dashboard",
    category: "UI/UX",
    icon: LayoutDashboard,
    image: "/assets/projects/material-ui-crm-dashboard.png",
    description:
      "A Material UI-based CRM dashboard concept for sales and business management workflows, with clean analytics views and enterprise-style layouts.",
    tags: ["UI/UX", "Dashboard", "CRM"],
    link: "https://dashboard-mui-two.vercel.app/",
  },
  {
    title: "E-commerce Checkout Flow",
    category: "UI/UX",
    icon: ShoppingCart,
    image: "/assets/projects/ecommerce-checkout-flow.png",
    description:
      "A Next.js checkout prototype focused on a smoother cart-to-payment flow, responsive behavior, and fewer points of friction for buyers.",
    tags: ["UI/UX", "Checkout", "Next.js"],
    link: "https://e-commerce-website-one-rosy.vercel.app/",
  },
  {
    title: "Figma UI/UX Design Collection",
    category: "UI/UX",
    icon: Palette,
    image: "/assets/projects/figma-ui-ux-collection.png",
    description:
      "A curated set of Figma designs for websites, dashboards, SaaS platforms, mobile apps, e-commerce flows, and brand-focused product screens.",
    tags: ["Figma", "Design Systems", "Prototypes"],
    link: "/contact",
    linkLabel: "Request Prototypes",
  },
  {
    title: "Fairagora Asia",
    category: "Websites",
    icon: Globe,
    image: "/assets/ringer.png",
    description:
      "A business website project included in the portfolio list, available for discussion during a project walkthrough.",
    tags: ["Website", "Business", "Portfolio"],
    link: "/contact",
    linkLabel: "Ask About Project",
  },
  {
    title: "Alexander Kraft",
    category: "Websites",
    icon: Globe,
    image: "/assets/projects/alexander-kraft.png",
    description:
      "A high-end lifestyle brand website with elegant presentation, luxury visual direction, and an immersive brand experience.",
    tags: ["Luxury", "Brand Website", "Lifestyle"],
    link: "https://alexanderkraft.com",
  },
  {
    title: "Midwest Land Group",
    category: "Websites",
    icon: Building2,
    image: "/assets/projects/midwest-land-group.png",
    description:
      "A real estate platform for land and property discovery, with listing structures built for browsing, filtering, and responsive viewing.",
    tags: ["Real Estate", "Listings", "Responsive"],
    link: "https://midwestlandgroup.com",
  },
  {
    title: "Asset Planet",
    category: "Websites",
    icon: LineChart,
    image: "/assets/projects/asset-planet.png",
    description:
      "A wealth management platform with a professional financial services presentation and a polished user experience.",
    tags: ["Finance", "Wealth", "Platform"],
    link: "https://assetplanet.com",
  },
  {
    title: "Airport Pilot Shop",
    category: "E-Commerce",
    icon: Plane,
    image: "/assets/projects/airport-pilot-shop.png",
    description:
      "An aviation gear e-commerce store designed for product browsing, online purchasing, and customer-focused shopping flows.",
    tags: ["E-Commerce", "Aviation", "Retail"],
    link: "https://airportpilotshop.com",
  },
  {
    title: "Farm to People",
    category: "E-Commerce",
    icon: ShoppingCart,
    image: "/assets/projects/farm-to-people.png",
    description:
      "A farm-to-table e-commerce platform connecting customers with fresh produce suppliers through a clean shopping experience.",
    tags: ["Food", "E-Commerce", "Marketplace"],
    link: "https://farmtopeople.com",
  },
  {
    title: "Data Rovers",
    category: "SaaS Platforms",
    icon: Cpu,
    image: "/assets/projects/data-rovers.png",
    description:
      "A data-focused platform centered on analytics, information systems, and scalable web architecture.",
    tags: ["Data", "SaaS", "Analytics"],
    link: "https://datarovers.com/",
  },
  {
    title: "Positive Prime",
    category: "SaaS Platforms",
    icon: BriefcaseBusiness,
    image: "/assets/projects/positive-prime.png",
    description:
      "A membership-based web application with user authentication and platform features built for a growing subscriber base.",
    tags: ["Membership", "Web App", "SaaS"],
    link: "https://positiveprime.com",
  },
  {
    title: "UseParallel",
    category: "SaaS Platforms",
    icon: Cpu,
    image: "/assets/projects/useparallel.png",
    description:
      "A productivity SaaS platform built around collaboration, workflow management, and helping teams move faster.",
    tags: ["Productivity", "SaaS", "Workflow"],
    link: "https://useparallel.com",
  },
  {
    title: "AI Dashboard Concept",
    category: "AI & Blockchain",
    icon: Bot,
    image: "/assets/parallel.png",
    description:
      "A predictive analytics dashboard concept showing machine learning visualizations and business intelligence patterns.",
    tags: ["AI", "Analytics", "Dashboard"],
    link: "/contact",
    linkLabel: "Request Demo",
  },
  {
    title: "Chatbot SaaS Prototype",
    category: "AI & Blockchain",
    icon: Bot,
    image: "/assets/ringer.png",
    description:
      "A customer support automation prototype with chatbot integrations, conversational flows, and automated assistance.",
    tags: ["Chatbot", "SaaS", "Support"],
    link: "/contact",
    linkLabel: "Request Demo",
  },
  {
    title: "Woebot Health",
    category: "AI & Blockchain",
    icon: Bot,
    image: "/assets/projects/woebot-health.png",
    description:
      "An AI-driven mental health companion platform using conversational guidance to support emotional wellbeing.",
    tags: ["AI", "Healthcare", "Chat"],
    link: "https://woebothealth.com",
  },
  {
    title: "Callidus AI",
    category: "AI & Blockchain",
    icon: Bot,
    image: "/assets/projects/callidus-ai.png",
    description:
      "An AI productivity platform focused on workflow improvement, intelligent automation, and enterprise efficiency.",
    tags: ["AI", "Productivity", "Enterprise"],
    link: "https://strongsuit.com/",
  },
  {
    title: "Inecta Food",
    category: "AI & Blockchain",
    icon: Cpu,
    image: "/assets/projects/inecta-food.png",
    description:
      "A blockchain-powered food supply chain platform built for transparency, tracking, and operational trust.",
    tags: ["Blockchain", "Food", "Supply Chain"],
    link: "https://inecta.com",
  },
  {
    title: "Cashii Wallet",
    category: "Mobile Apps",
    icon: Wallet,
    image: "/assets/taxi.png",
    description:
      "A crypto wallet mobile application focused on secure asset management and accessible financial tools.",
    tags: ["Fintech", "Crypto", "Mobile"],
    link: "https://apps.apple.com/us/app/cashii-crypto-wallet/id6468092902",
  },
  {
    title: "Dubai Mall App",
    category: "Mobile Apps",
    icon: Smartphone,
    image: "/assets/projects/dubai-mall.png",
    description:
      "A retail mobile experience for shopping, store discovery, navigation, and customer engagement inside Dubai Mall.",
    tags: ["Retail", "Shopping", "Mobile"],
    link: "https://thedubaimall.com",
  },
  {
    title: "Taxif",
    category: "Mobile Apps",
    icon: Smartphone,
    image: "/assets/projects/taxif.png",
    description:
      "A transportation and ride-booking application designed for real-time ride management and customer convenience.",
    tags: ["Ride-Hailing", "Transport", "Mobile"],
    link: "https://www.taxif.com/en",
  },
  {
    title: "GoAudits",
    category: "Mobile Apps",
    icon: Smartphone,
    image: "/assets/projects/goaudits.png",
    description:
      "An enterprise auditing app supporting inspections, reporting workflows, and operational management.",
    tags: ["Enterprise", "Audits", "Mobile"],
    link: "https://goaudits.com",
  },
  {
    title: "Alter Learning",
    category: "EdTech",
    icon: GraduationCap,
    image: "/assets/projects/alter-learning.png",
    description:
      "A gamified education platform with progress tracking, engagement systems, and collaborative learning experiences.",
    tags: ["Education", "Gamified", "Learning"],
    link: "https://alter-learning.com",
  },
  {
    title: "Alef Education",
    category: "EdTech",
    icon: GraduationCap,
    image: "/assets/projects/alef-education.png",
    description:
      "A scalable edtech ecosystem with adaptive learning, analytics, and multi-device educational experiences.",
    tags: ["EdTech", "Analytics", "Learning"],
    link: "https://alefeducation.com",
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
  "Fintech",
  "Healthcare",
  "Education",
  "SaaS Teams",
  "Service Businesses",
  "Enterprise Teams",
];

function ProjectAction({ project }) {
  const label = project.linkLabel || "View Project";
  const className = "flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-300";

  if (project.link?.startsWith("http")) {
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className={className}>
        {label}
        <ExternalLink className="size-4" />
      </a>
    );
  }

  return (
    <Link href={project.link || "/contact"} scroll={false} className={className}>
      {label}
      <ExternalLink className="size-4" />
    </Link>
  );
}

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
          Work Examples Across{" "}
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Real Business Needs
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-3 max-w-2xl text-base dark:text-slate-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Browse selected work across UI/UX, websites, SaaS platforms,
          e-commerce, mobile apps, AI, blockchain, and education products.
        </motion.p>
      </div>

      {/* Projects Tabs + Grid */}
      <section className="mt-28">
        <SectionTitle
          text1="Featured Work"
          text2="Explore Projects by Category"
          text3="The projects are grouped by category so you can quickly find work close to what you need."
        />

        <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                activeTab === tab
                  ? "border-sky-400 bg-sky-500 text-white shadow-[0_0_25px_rgba(56,189,248,0.35)]"
                  : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-sky-400/40 dark:border-slate-800 dark:bg-slate-800/20 dark:text-slate-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Showing {filteredProjects.length} project
          {filteredProjects.length > 1 ? "s" : ""} in{" "}
          <span className="text-sky-400">{activeTab}</span>
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
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_0_40px_rgba(56,189,248,0.10)] transition hover:-translate-y-2 hover:border-sky-400/30 dark:border-slate-800 dark:bg-slate-900/50"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={720}
                  height={512}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  onError={(event) => {
                    event.currentTarget.src = "/assets/parallel.png";
                  }}
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
                      className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-700 dark:text-sky-300"
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
                  <ProjectAction project={project} />

                  <div className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition group-hover:bg-sky-500 dark:border-slate-700 dark:bg-slate-800">
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
          text3="We keep each project moving with clear planning, design, development, and launch support."
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
              <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-sky-500 text-white">
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
          text2="Built for Different Teams"
          text3="We work with startups, agencies, service businesses, online stores, and companies with internal operations to manage."
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
          Have Something Similar in Mind?
        </h3>

        <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-200">
          Share the idea with us and we will help turn it into a realistic plan.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link href="/contact" scroll={false}>
            <button className="h-11 rounded-md bg-sky-500 px-6 text-white transition hover:bg-sky-600">
              Start Your Project
            </button>
          </Link>

          <Link href="/about" scroll={false}>
            <button className="h-11 rounded-md border border-sky-500/40 px-6 text-slate-600 transition dark:text-white">
              About PrimeSol
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
