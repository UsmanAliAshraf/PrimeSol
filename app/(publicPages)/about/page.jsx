"use client";
import { useEffect, useRef, useState } from "react";
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
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const counterRef = useRef(null);
  useEffect(() => {
    if (!counterRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!startCounter) return;
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [startCounter, end]);
  return (
    <span ref={counterRef}>
      {" "}
      {count} {suffix}{" "}
    </span>
  );
}
export default function AboutPage() {
  return (
    <>
      {" "}
      {/* Hero Section */}{" "}
      <div className="flex flex-col items-center justify-center text-center px-4 pt-44 pb-24 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
        {" "}
        <motion.p
          className="flex flex-wrap items-center justify-center gap-3 p-1.5 px-6 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20 text-xs"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          {" "}
          About PrimeSol{" "}
        </motion.p>{" "}
        <motion.h1
          className="mt-4 text-5xl/15 md:text-[64px]/19 font-semibold max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {" "}
          Building Useful Software for{" "}
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            {" "}
            Real Business Work{" "}
          </span>{" "}
        </motion.h1>{" "}
        <motion.p
          className="text-base dark:text-slate-300 max-w-2xl mt-3"
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
            <button className="bg-sky-500 hover:bg-sky-600 transition text-white rounded-md px-6 h-11">
              {" "}
              Explore Services{" "}
            </button>{" "}
          </Link>{" "}
          <Link href="/contact" scroll={false}>
            {" "}
            <button className="flex items-center gap-2 border border-sky-500/40 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
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
            className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20"
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
            <p className="text-slate-600 dark:text-slate-300 text-sm/7">
              {" "}
              At PrimeSol, we build websites, web applications, mobile apps,
              SaaS products, dashboards, and automation systems. Our job is to
              understand what is slowing your team down, then build the right
              tool to make that work easier.{" "}
            </p>{" "}
            <p className="text-slate-600 dark:text-slate-300 text-sm/7 mt-4">
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
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 transition hover:-translate-y-1"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {" "}
                <CheckCircle2
                  className="text-sky-400 size-7 mb-4"
                  strokeWidth={1.5}
                />{" "}
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
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
              className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-86 transition hover:-translate-y-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {" "}
              <service.icon
                className="text-sky-400 size-8 mt-4"
                strokeWidth={1.3}
              />{" "}
              <h3 className="text-base font-medium">{service.title}</h3>{" "}
              <p className="text-slate-400 line-clamp-2">
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
            <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-md px-6 py-2 transition">
              {" "}
              View More{" "}
            </button>{" "}
          </Link>{" "}
        </motion.div>{" "}
      </section>{" "}
      {/* Stats */}{" "}
      <section className="px-6 md:px-16 lg:px-24 xl:px-35 mt-28">
        {" "}
        <SectionTitle
          text1="Our Impact"
          text2="A Few Simple Measures"
          text3="Our work is measured by shipped projects, happy clients, and systems that keep doing their job."
        />{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-10">
          {" "}
          {[150, 50, 100].map((number, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 transition hover:-translate-y-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {" "}
              <h3 className="text-4xl font-semibold bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                {index === 0 && <Counter end={150} suffix="+" />}{" "}
                {index === 1 && <Counter end={50} suffix="+" />}{" "}
                {index === 2 && <Counter end={100} suffix="%" />}{" "}
              </h3>{" "}
              <p className="text-slate-500 dark:text-slate-300 mt-2">
                {" "}
                {index === 0 && "Projects Delivered"}{" "}
                {index === 1 && "Business Clients"}{" "}
                {index === 2 && "Delivery Focused"}{" "}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <Members /> {/* CTA */}{" "}
      <motion.div
        className="flex flex-col items-center text-center justify-center mt-20 pb-24 px-6"
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
        <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
          {" "}
          Let us help you plan the website, app, or automation your business
          actually needs next.{" "}
        </p>{" "}
        <div className="flex items-center gap-4 mt-8">
          {" "}
          <Link href="/contact" scroll={false}>
            {" "}
            <button className="bg-sky-500 hover:bg-sky-600 transition text-white rounded-md px-6 h-11">
              {" "}
              Get Started{" "}
            </button>{" "}
          </Link>{" "}
          <Link href="/projects" scroll={false}>
            {" "}
            <button className="border border-sky-500/40 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
              {" "}
              View Projects{" "}
            </button>{" "}
          </Link>{" "}
        </div>{" "}
      </motion.div>{" "}
    </>
  );
}
