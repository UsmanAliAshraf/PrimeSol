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
      <div className="brand-pill mb-5 rounded-full px-8 py-2 text-sm font-semibold">
        Testimonials
      </div>

      <h3 className="text-center text-3xl font-bold text-[#080B2B] md:text-4xl">
        What Our Clients Say
      </h3>

      <p className="mt-4 max-w-xl text-center text-sm leading-6 text-[#28304A]">
        Clients come to us when they need clear communication, dependable
        delivery, and software that feels simple to use.
      </p>

      <div className="mt-16 w-full">
        <Marquee
          pauseOnHover
          gradient
          autoFill
          gradientColor="#f3ecff"
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
          gradientColor="#f3ecff"
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
    <div className="brand-card brand-card-hover mx-3 w-[22rem] max-w-sm space-y-5 rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: item.rating }).map((_, index) => (
            <StarIcon
              key={index}
              className="size-4 fill-violet-400 text-violet-400"
            />
          ))}
        </div>

        <p className="text-sm text-[#5B22E8]">{item.date}</p>
      </div>

      <p className="text-sm leading-6 text-[#28304A]">“{item.review}”</p>

      <div className="flex items-center gap-3 pt-2">
        <img
          src={item.image}
          alt={item.name}
          width={40}
          height={40}
          className="size-10 rounded-full border border-violet-400/30 object-cover"
        />

        <p className="font-semibold text-[#080B2B]">{item.name}</p>
      </div>
    </div>
  );
}
