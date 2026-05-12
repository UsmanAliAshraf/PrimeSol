"use client";

import SectionTitle from "@/components/SectionTitle";
import { servicesData } from "@/data/servicesData";
import { FaqSection } from "@/sections/FaqSection";
import WorkflowSteps from "@/sections/Workflowsteps";
import { VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
    const smoothFade = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const staggerSlow = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    return (
        <>
            {/* HERO */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerSlow}
                className="flex flex-col items-center justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover"
            >
                {/* Users */}
                <motion.div
                    variants={smoothFade}
                    className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 mt-46 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20"
                >
                    <div className="flex items-center -space-x-3">
                        <Image className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                            alt="userImage1" />
                        <Image className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                            alt="userImage2" />
                        <Image className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="userImage3" />
                    </div>
                    <p className="text-xs">Websites, apps, automations, and software support</p>
                </motion.div>

                {/* Heading */}
                <motion.h1 variants={smoothFade} className="mt-2 text-5xl/15 md:text-[64px]/19 font-semibold max-w-4xl">
                    We Build Reliable Software for{" "}
                    <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                        Ambitious Teams
                    </span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p variants={smoothFade} className="text-base dark:text-slate-300 max-w-xl mt-2">
                    PrimeSol helps businesses launch cleaner websites, automate busywork, and build practical software that supports daily operations without unnecessary complexity.
                </motion.p>

                {/* Buttons (ONLY hover animation) */}
                <div className="flex items-center gap-4 mt-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link
                            href="/services"
                            scroll={false}
                            className="inline-flex h-11 items-center justify-center rounded-md bg-sky-500 px-6 text-white hover:bg-sky-600"
                        >
                            Explore Services
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link
                            href="/projects"
                            scroll={false}
                            className="inline-flex h-11 items-center gap-2 rounded-md border border-sky-500/40 px-6 text-slate-600 dark:text-white"
                        >
                            <VideoIcon strokeWidth={1} />
                            <span>View Projects</span>
                        </Link>
                    </motion.div>
                </div>

            </motion.div>

            {/* SERVICES */}
            <SectionTitle text1="Our Services" text2="Our Services" />

            <div className="flex flex-wrap justify-center gap-6 mt-10 px-6 md:px-16 lg:px-24 xl:px-35">
                {servicesData.slice(0, 6).map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80"
                    >
                        <service.icon className="text-sky-400 size-8 mt-4" strokeWidth={1.3} />
                        <h3 className="text-base font-medium">{service.title}</h3>
                        <p className="text-slate-400 line-clamp-2">{service.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* View All */}
            <div className="flex justify-center mt-6">
                <Link href="/services" scroll={false}>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-md px-6 py-2">
                        View All Services
                    </button>
                </Link>
            </div>

            {/* OTHER SECTIONS */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <WorkflowSteps />
            </motion.div>

            {/* FAQ FIXED */}
            <motion.div
                key="faq"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <FaqSection />
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center justify-center mt-20"
            >
                <h3 className="text-3xl font-semibold mt-16 mb-4">
                    Ready to Get Started?
                </h3>

                <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
                    Tell us what you are trying to build. We will help you shape the right scope, stack, and launch plan.
                </p>

                <div className="flex gap-4 mt-8">
                    <Link
                        href="/contact"
                        scroll={false}
                        className="inline-flex h-11 items-center justify-center rounded-md bg-sky-500 px-6 text-white hover:bg-sky-600"
                    >
                        Start Your Project
                    </Link>

                    <Link
                        href="/contact"
                        scroll={false}
                        className="inline-flex h-11 items-center justify-center rounded-md border border-sky-500/40 px-6 text-slate-600 dark:text-white"
                    >
                        Book a Call
                    </Link>
                </div>
            </motion.div>
        </>
    );
}
