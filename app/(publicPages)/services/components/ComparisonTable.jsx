import { CheckCircle2, XCircle } from "lucide-react";
import RevealWrapper from "./RevealWrapper";

export default function ComparisonTable({ comparison }) {
    const [, col1Header, col2Header] = comparison.headers;

    return (
        <section className="mt-28 px-6 md:px-16 lg:px-24 xl:px-35">
            <RevealWrapper>
                <p className="brand-pill mx-auto w-max rounded-full px-10 py-2 text-center font-semibold">
                    Why It Matters
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold text-[#080B2B]">
                    Old Way vs. The Right Way
                </h2>
            </RevealWrapper>

            <RevealWrapper className="mt-12" delay="reveal-d1">
                <div className="brand-card overflow-hidden rounded-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-[rgba(91,34,232,0.14)]">
                                    <th className="py-4 pl-6 pr-4 text-left font-semibold text-[#080B2B]">
                                        {comparison.headers[0]}
                                    </th>
                                    <th className="px-4 py-4 text-left font-semibold text-[#E83EBB]">
                                        <div className="flex items-center gap-2">
                                            <XCircle className="size-4 shrink-0" />
                                            {col1Header}
                                        </div>
                                    </th>
                                    <th className="px-4 py-4 text-left font-semibold text-[#5B22E8]">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 shrink-0" />
                                            {col2Header}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.rows.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-[rgba(91,34,232,0.08)] last:border-0 odd:bg-[rgba(243,236,255,0.28)]"
                                    >
                                        <td className="py-4 pl-6 pr-4 font-semibold text-[#080B2B]">
                                            {row[0]}
                                        </td>
                                        <td className="px-4 py-4 text-[#28304A]">{row[1]}</td>
                                        <td className="px-4 py-4 text-[#28304A]">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </RevealWrapper>
        </section>
    );
}
