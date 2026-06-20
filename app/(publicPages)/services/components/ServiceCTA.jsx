import Link from "next/link";
import RevealWrapper from "./RevealWrapper";

export default function ServiceCTA({ serviceName }) {
    return (
        <RevealWrapper className="mx-6 mt-24 mb-8 md:mx-16 lg:mx-24 xl:mx-35">
            <div className="soft-section flex flex-col items-center justify-center rounded-[2rem] px-6 py-20 text-center">
                <h2 className="max-w-2xl text-3xl font-semibold text-[#080B2B]">
                    Ready to Get Started with {serviceName}?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[#28304A]">
                    Tell us what you are trying to build or automate. We will help you scope it clearly and decide the best way to move forward.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        scroll={false}
                        className="btn-primary inline-flex h-11 items-center justify-center rounded-xl px-7 font-semibold transition"
                    >
                        Start a Conversation
                    </Link>
                    <Link
                        href="/projects"
                        scroll={false}
                        className="btn-secondary inline-flex h-11 items-center justify-center rounded-xl px-7 font-semibold transition"
                    >
                        View Our Work
                    </Link>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-[#28304A]">
                    <span>✓ Free initial consultation</span>
                    <span>✓ Response within 24 hours</span>
                    <span>✓ No commitment required</span>
                </div>
            </div>
        </RevealWrapper>
    );
}
