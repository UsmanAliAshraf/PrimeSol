import RevealWrapper from "./RevealWrapper";

const delays = ["", "reveal-d1", "reveal-d2", "reveal-d3", "reveal-d4"];

export default function SolutionFlow({ solution }) {
    return (
        <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
            <RevealWrapper>
                <p className="brand-pill mx-auto w-max rounded-full px-10 py-2 text-center font-semibold">
                    Our Process
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold text-[#080B2B]">
                    {solution.title}
                </h2>
            </RevealWrapper>

            <div className="relative mt-14">
                {/* Vertical connector line on desktop */}
                <div
                    aria-hidden="true"
                    className="absolute left-[calc(50%-1px)] top-0 hidden h-full w-0.5 bg-gradient-to-b from-transparent via-[#8B5CF6]/40 to-transparent lg:block"
                />

                <div className="flex flex-col gap-10">
                    {solution.steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <RevealWrapper key={index} delay={delays[index]} className="w-full">
                                <div className={`flex flex-col items-center gap-6 lg:flex-row lg:gap-16 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                                    {/* Text card */}
                                    <div className="brand-card flex-1 rounded-2xl p-7">
                                        <div className="btn-primary inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold">
                                            {step.step}
                                        </div>
                                        <h3 className="mt-4 text-lg font-semibold text-[#080B2B]">
                                            {step.title}
                                        </h3>
                                        <p className="mt-3 text-sm/6 text-[#28304A]">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Center dot (desktop) */}
                                    <div
                                        aria-hidden="true"
                                        className="hidden size-4 shrink-0 rounded-full border-2 border-[#8B5CF6] bg-white shadow-[0_0_0_4px_rgba(139,92,246,0.2)] lg:block"
                                    />

                                    {/* Spacer */}
                                    <div className="flex-1 lg:block hidden" />
                                </div>
                            </RevealWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
