import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealWrapper from "./RevealWrapper";

const delays = ["", "reveal-d1", "reveal-d2", "reveal-d3", "reveal-d4", "reveal-d5"];

export default function UseCasesSection({ useCases }) {
    return (
        <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
            <RevealWrapper>
                <p className="brand-pill mx-auto w-max rounded-full px-10 py-2 text-center font-semibold">
                    Use Cases
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold text-[#080B2B]">
                    Who This Is Built For
                </h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-[#28304A]">
                    Real-world applications across different industries and team types.
                </p>
            </RevealWrapper>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {useCases.map((uc, index) => (
                    <RevealWrapper key={index} delay={delays[index % 6]} className="h-full">
                        <div className="brand-card brand-card-hover group flex h-full flex-col rounded-2xl p-6">
                            <span className="brand-pill w-max rounded-full px-4 py-1 text-xs font-semibold">
                                {uc.industry}
                            </span>
                            <h3 className="mt-4 text-base font-semibold text-[#080B2B]">
                                {uc.title}
                            </h3>
                            <p className="mt-3 flex-1 text-sm/6 text-[#28304A]">
                                {uc.description}
                            </p>
                            <Link
                                href={uc.link}
                                scroll={false}
                                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B22E8] transition group-hover:gap-2.5"
                            >
                                See examples
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    </RevealWrapper>
                ))}
            </div>
        </section>
    );
}
