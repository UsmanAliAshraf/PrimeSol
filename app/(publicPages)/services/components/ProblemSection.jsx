import RevealWrapper from "./RevealWrapper";

const delays = ["", "reveal-d1", "reveal-d2", "reveal-d3", "reveal-d4", "reveal-d5"];

export default function ProblemSection({ problems }) {
    return (
        <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
            <RevealWrapper>
                <p className="brand-pill mx-auto w-max rounded-full px-10 py-2 text-center font-semibold">
                    The Problem
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold text-[#080B2B]">
                    Challenges Businesses Face Without This
                </h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-[#28304A]">
                    These are the real operational problems that slow down teams every week.
                </p>
            </RevealWrapper>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {problems.map((problem, index) => (
                    <RevealWrapper key={index} delay={delays[index % 6]} className="h-full">
                        <div className="brand-card brand-card-hover flex h-full flex-col rounded-2xl p-6">
                            <span className="text-3xl" role="img" aria-hidden="true">
                                {problem.icon}
                            </span>
                            <h3 className="mt-4 text-base font-semibold text-[#080B2B]">
                                {problem.title}
                            </h3>
                            <p className="mt-3 text-sm/6 text-[#28304A]">
                                {problem.description}
                            </p>
                        </div>
                    </RevealWrapper>
                ))}
            </div>
        </section>
    );
}
