import { CheckIcon } from "lucide-react";

export const pricingData = [
    {
        title: "Starter Build",
        price: 29,
        features: [
            {
                name: "Single-page or small website",
                icon: CheckIcon,
            },
            {
                name: "Responsive design",
                icon: CheckIcon,
            },
            {
                name: "Contact form setup",
                icon: CheckIcon,
            },
            {
                name: "Basic SEO structure",
                icon: CheckIcon,
            },
            {
                name: "Launch support",
                icon: CheckIcon,
            },
        ],
        buttonText: "Get Started",
    },
    {
        title: "Business Build",
        price: 79,
        mostPopular: true,
        features: [
            {
                name: "Multi-page website or app",
                icon: CheckIcon,
            },
            {
                name: "Custom UI sections",
                icon: CheckIcon,
            },
            {
                name: "Admin or dashboard features",
                icon: CheckIcon,
            },
            {
                name: "Integrations and forms",
                icon: CheckIcon,
            },
            {
                name: "Analytics setup",
                icon: CheckIcon,
            },
            {
                name: "Priority launch support",
                icon: CheckIcon,
            }
        ],
        buttonText: "Start Project",
    },
    {
        title: "Custom Build",
        price: 149,
        features: [
            {
                name: "Custom app or platform",
                icon: CheckIcon,
            },
            {
                name: "CRM, HRM, or SaaS features",
                icon: CheckIcon,
            },
            {
                name: "Automation and AI workflows",
                icon: CheckIcon,
            },
            {
                name: "Third-party integrations",
                icon: CheckIcon,
            },
            {
                name: "Ongoing support plan",
                icon: CheckIcon,
            }
        ],
        buttonText: "Contact Sales",
    }
];
