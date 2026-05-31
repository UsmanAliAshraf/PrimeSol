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
                className="brand-hero flex min-h-[760px] flex-col items-center justify-center px-4 text-center"
            >
                {/* Users */}
                <motion.div
                    variants={smoothFade}
                    className="brand-pill mt-40 flex flex-wrap items-center justify-center gap-3 rounded-full p-1.5 pr-4"
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
                <motion.h1 variants={smoothFade} className="mt-3 max-w-4xl text-4xl/12 font-semibold text-[#080B2B] md:text-[64px]/19">
                    We Build Reliable Software for{" "}
                    <span className="brand-gradient-text">
                        Ambitious Teams
                    </span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p variants={smoothFade} className="mt-3 max-w-xl text-base text-[#28304A]">
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
                            className="btn-primary inline-flex h-11 items-center justify-center rounded-xl px-6 font-semibold transition"
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
                            className="btn-secondary inline-flex h-11 items-center gap-2 rounded-xl px-6 font-semibold transition"
                        >
                            <VideoIcon strokeWidth={1} />
                            <span>View Projects</span>
                        </Link>
                    </motion.div>
                </div>

            </motion.div>

            {/* SERVICES */}
            <SectionTitle text1="Our Services" text2="Our Services" />

            <div className="mt-10 flex flex-wrap justify-center gap-6 px-6 md:px-16 lg:px-24 xl:px-35">
                {servicesData.slice(0, 6).map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="brand-card brand-card-hover max-w-80 rounded-2xl p-6"
                    >
                        <div className="icon-gradient mb-4 flex size-12 items-center justify-center rounded-2xl">
                            <service.icon className="size-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-base font-semibold text-[#080B2B]">{service.title}</h3>
                        <p className="line-clamp-2 text-[#28304A]">{service.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* View All */}
            <div className="flex justify-center mt-6">
                <Link href="/services" scroll={false}>
                    <button className="btn-primary rounded-xl px-6 py-2 font-semibold transition">
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
                className="soft-section mt-24 flex flex-col items-center justify-center rounded-[2rem] px-6 py-16 text-center md:mx-16 lg:mx-24 xl:mx-35"
            >
                <h3 className="text-3xl font-semibold mt-16 mb-4">
                    Ready to Get Started?
                </h3>

                <p className="mx-auto max-w-xl text-[#28304A]">
                    Tell us what you are trying to build. We will help you shape the right scope, stack, and launch plan.
                </p>

                <div className="flex gap-4 mt-8">
                    <Link
                        href="/contact"
                        scroll={false}
                        className="btn-primary inline-flex h-11 items-center justify-center rounded-xl px-6 font-semibold transition"
                    >
                        Start Your Project
                    </Link>

                    <Link
                        href="/contact"
                        scroll={false}
                        className="btn-secondary inline-flex h-11 items-center justify-center rounded-xl px-6 font-semibold transition"
                    >
                        Book a Call
                    </Link>
                </div>
            </motion.div>
        </>
    );
}
