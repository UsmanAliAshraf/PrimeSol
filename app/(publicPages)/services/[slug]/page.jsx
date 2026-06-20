import { notFound } from "next/navigation";
import { servicePages, serviceSlugs } from "../data/index";
import ServiceHero from "../components/ServiceHero";
import ProblemSection from "../components/ProblemSection";
import SolutionFlow from "../components/SolutionFlow";
import UseCasesSection from "../components/UseCasesSection";
import ComparisonTable from "../components/ComparisonTable";
import ServiceFAQ from "../components/ServiceFAQ";
import RelatedServices from "../components/RelatedServices";
import ServiceCTA from "../components/ServiceCTA";

export async function generateStaticParams() {
    return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const data = servicePages[slug];
    if (!data) return {};

    const { metadata } = data;
    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        alternates: { canonical: metadata.canonical },
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            url: metadata.canonical,
            type: "website",
            siteName: "PrimeSol",
        },
        twitter: {
            card: "summary_large_image",
            title: metadata.title,
            description: metadata.description,
        },
    };
}

export default async function ServiceSlugPage({ params }) {
    const { slug } = await params;
    const data = servicePages[slug];
    if (!data) notFound();

    const jsonLd = JSON.stringify(data.schema);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd }}
            />

            <ServiceHero {...data.hero} />
            <ProblemSection problems={data.problems} />
            <SolutionFlow solution={data.solution} />
            <UseCasesSection useCases={data.useCases} />
            <ComparisonTable comparison={data.comparison} />
            <ServiceFAQ faqs={data.faqs} serviceName={data.name} />
            <RelatedServices services={data.relatedServices} />
            <ServiceCTA serviceName={data.name} />
        </>
    );
}
