import Link from "next/link";

export default function ServiceHero({ badge, h1, subtitle, primaryCta, secondaryCta }) {
    return (
        <div className="brand-hero flex flex-col items-center justify-center px-4 pt-44 pb-24 text-center">
            <p className="brand-pill inline-flex items-center rounded-full px-6 py-2 text-xs font-semibold">
                {badge}
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl/12 font-semibold text-[#080B2B] md:text-[58px]/17">
                {h1.split("||").map((part, i) =>
                    i % 2 === 0
                        ? part
                        : <span key={i} className="brand-gradient-text">{part}</span>
                )}
            </h1>

            <p className="mt-4 max-w-2xl text-base/7 text-[#28304A]">{subtitle}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                    href={primaryCta.href}
                    scroll={false}
                    className="btn-primary inline-flex h-11 items-center justify-center rounded-xl px-7 font-semibold transition"
                >
                    {primaryCta.label}
                </Link>
                {secondaryCta && (
                    <Link
                        href={secondaryCta.href}
                        scroll={false}
                        className="btn-secondary inline-flex h-11 items-center justify-center rounded-xl px-7 font-semibold transition"
                    >
                        {secondaryCta.label}
                    </Link>
                )}
            </div>
        </div>
    );
}
