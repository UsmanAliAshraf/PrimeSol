import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealWrapper from "./RevealWrapper";

const delays = ["", "reveal-d1", "reveal-d2", "reveal-d3"];

export default function RelatedServices({ services }) {
    return (
        <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
            <RevealWrapper>
                <p className="brand-pill mx-auto w-max rounded-full px-10 py-2 text-center font-semibold">
                    Also From PrimeSol
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold text-[#080B2B]">
                    Related Services
                </h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-[#28304A]">
                    Combine services or explore what else PrimeSol can build for your business.
                </p>
            </RevealWrapper>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((svc, index) => (
                    <RevealWrapper key={index} delay={delays[index % 4]} className="h-full">
                        <Link
                            href={`/services/${svc.slug}`}
                            scroll={false}
                            className="brand-card brand-card-hover group flex h-full flex-col rounded-2xl p-6 no-underline"
                        >
                            <h3 className="text-base font-semibold text-[#080B2B]">
                                {svc.title}
                            </h3>
                            <p className="mt-3 flex-1 text-sm/6 text-[#28304A]">
                                {svc.description}
                            </p>
                            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B22E8] transition group-hover:gap-2.5">
                                Learn more
                                <ArrowRight className="size-4" />
                            </span>
                        </Link>
                    </RevealWrapper>
                ))}
            </div>
        </section>
    );
}
