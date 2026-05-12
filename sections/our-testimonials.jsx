"use client";

import { StarIcon } from "lucide-react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    review:
      "PrimeSol understood what we were trying to do and turned it into a clean site without making the process complicated.",
    name: "Richard Nelson",
    date: "12 Jan 2025",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    review:
      "The team was easy to work with, quick on updates, and clear about what mattered for launch.",
    name: "Sophia Martinez",
    date: "15 Mar 2025",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
];

export default function OurTestimonials() {
  return (
    <section className="relative mx-auto mt-32 flex max-w-6xl flex-col items-center overflow-hidden px-4 py-20">
      <div className="mb-5 rounded-full border border-violet-400/30 bg-violet-500/10 px-8 py-2 text-sm font-medium text-violet-300">
        Testimonials
      </div>

      <h3 className="text-center text-3xl font-bold text-white md:text-4xl">
        What Our Clients Say
      </h3>

      <p className="mt-4 max-w-xl text-center text-sm leading-6 text-slate-400">
        Clients come to us when they need clear communication, dependable
        delivery, and software that feels simple to use.
      </p>

      <div className="mt-16 w-full">
        <Marquee
          pauseOnHover
          gradient
          autoFill
          gradientColor="#020617"
          gradientWidth={80}
          speed={30}
        >
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </Marquee>

        <Marquee
          pauseOnHover
          className="mt-6"
          direction="right"
          gradient
          autoFill
          gradientColor="#020617"
          gradientWidth={80}
          speed={30}
        >
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="mx-3 w-[22rem] max-w-sm space-y-5 rounded-2xl border border-violet-400/20 bg-slate-900/70 p-5 text-slate-300 shadow-[0_0_35px_rgba(168,85,247,0.12)] backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: item.rating }).map((_, index) => (
            <StarIcon
              key={index}
              className="size-4 fill-violet-400 text-violet-400"
            />
          ))}
        </div>

        <p className="text-sm text-slate-500">{item.date}</p>
      </div>

      <p className="text-sm leading-6 text-slate-400">“{item.review}”</p>

      <div className="flex items-center gap-3 pt-2">
        <img
          src={item.image}
          alt={item.name}
          width={40}
          height={40}
          className="size-10 rounded-full border border-violet-400/30 object-cover"
        />

        <p className="font-semibold text-white">{item.name}</p>
      </div>
    </div>
  );
}
