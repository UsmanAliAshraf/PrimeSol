"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Members from "@/sections/members";
import Link from "next/link";
const points = [
  "Clear websites that explain your offer",
  "Automations that remove repetitive work",
  "Dashboards and portals for daily operations",
  "Clean builds that are easy to maintain",
];
const fadeUp = { hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1 } };
export default function AboutPage() {
  return (
    <>
      {" "}
      {/* Hero Section */}{" "}
      <div className="brand-hero flex flex-col items-center justify-center px-4 pt-44 pb-24 text-center">
        {" "}
        <motion.p
          className="brand-pill flex flex-wrap items-center justify-center gap-3 rounded-full px-6 py-2 text-xs"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          {" "}
          About PrimeSol{" "}
        </motion.p>{" "}
        <motion.h1
          className="mt-4 max-w-4xl text-4xl/12 font-semibold text-[#080B2B] md:text-[64px]/19"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {" "}
          Building Useful Software for{" "}
          <span className="brand-gradient-text">
            {" "}
            Real Business Work{" "}
          </span>{" "}
        </motion.h1>{" "}
        <motion.p
          className="mt-3 max-w-2xl text-base text-[#28304A]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {" "}
          PrimeSol helps businesses turn rough ideas, manual processes, and
          scattered tools into websites, apps, and systems that are easier to
          run every day.{" "}
        </motion.p>{" "}
        <motion.div
          className="flex items-center gap-4 mt-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {" "}
          <Link href="/services" scroll={false}>
            {" "}
            <button className="btn-primary h-11 rounded-xl px-6 font-semibold transition">
              {" "}
              Explore Services{" "}
            </button>{" "}
          </Link>{" "}
          <Link href="/contact" scroll={false}>
            {" "}
            <button className="btn-secondary flex h-11 items-center gap-2 rounded-xl px-6 font-semibold transition">
              {" "}
              Contact Us <ArrowRight className="size-4" />{" "}
            </button>{" "}
          </Link>{" "}
        </motion.div>{" "}
      </div>{" "}
      {/* Who We Are */}{" "}
      <section className="px-6 md:px-16 lg:px-24 xl:px-35 mt-28">
        {" "}
        <SectionTitle
          text1="Who We Are"
          text2="A Practical Tech Partner for Growing Teams"
          text3="We focus on software that is useful, clear, and built around how your business actually works."
        />{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-center">
          {" "}
          <motion.div
            className="brand-card rounded-3xl p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {" "}
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              We turn business problems into working products.{" "}
            </h3>{" "}
            <p className="text-sm/7 text-[#28304A]">
              {" "}
              At PrimeSol, we build websites, web applications, mobile apps,
              SaaS products, dashboards, and automation systems. Our job is to
              understand what is slowing your team down, then build the right
              tool to make that work easier.{" "}
            </p>{" "}
            <p className="mt-4 text-sm/7 text-[#28304A]">
              {" "}
              We care about clean design, stable development, and simple
              handover. The final product should look professional, work
              reliably, and make sense to the people using it.{" "}
            </p>{" "}
          </motion.div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {" "}
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="brand-card brand-card-hover rounded-2xl p-5"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {" "}
                <CheckCircle2
                  className="mb-4 size-7 text-[#5B22E8]"
                  strokeWidth={1.5}
                />{" "}
                <p className="text-sm font-semibold text-[#11142D]">
                  {" "}
                  {point}{" "}
                </p>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* What We Do */}{" "}
      <section className="mt-28">
        {" "}
        <SectionTitle
          text1="What We Do"
          text2="What We Help You Build"
          text3="From first website to internal software, we help you ship the tools your team needs."
        />{" "}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-35">
          {" "}
          {servicesData.slice(0, 5).map((service, index) => (
            <motion.div
              key={index}
              className="brand-card brand-card-hover max-w-80 rounded-2xl p-6 md:max-w-86"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {" "}
              <service.icon
                className="size-8 text-[#5B22E8]"
                strokeWidth={1.3}
              />{" "}
              <h3 className="text-base font-semibold text-[#080B2B]">{service.title}</h3>{" "}
              <p className="line-clamp-2 text-[#28304A]">
                {" "}
                {service.description}{" "}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        <motion.div
          className="flex justify-center mt-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <Link href="/services" scroll={false}>
            {" "}
            <button className="btn-primary rounded-xl px-6 py-2 font-semibold transition">
              {" "}
              View More{" "}
            </button>{" "}
          </Link>{" "}
        </motion.div>{" "}
      </section>{" "}
      <Members /> {/* CTA */}{" "}
      <motion.div
        className="soft-section mx-6 mt-24 flex flex-col items-center justify-center rounded-[2rem] px-6 py-16 text-center md:mx-16 lg:mx-24 xl:mx-35"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {" "}
        <h3 className="text-3xl font-semibold mt-16 mb-4">
          {" "}
          Ready to Build Something Useful?{" "}
        </h3>{" "}
        <p className="mx-auto max-w-xl text-[#28304A]">
          {" "}
          Let us help you plan the website, app, or automation your business
          actually needs next.{" "}
        </p>{" "}
        <div className="flex items-center gap-4 mt-8">
          {" "}
          <Link href="/contact" scroll={false}>
            {" "}
            <button className="btn-primary h-11 rounded-xl px-6 font-semibold transition">
              {" "}
              Get Started{" "}
            </button>{" "}
          </Link>{" "}
          <Link href="/projects" scroll={false}>
            {" "}
            <button className="btn-secondary h-11 rounded-xl px-6 font-semibold transition">
              {" "}
              View Projects{" "}
            </button>{" "}
          </Link>{" "}
        </div>{" "}
      </motion.div>{" "}
    </>
  );
}
