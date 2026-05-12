"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTransition({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main key={pathname} className="page-transition">
            {children}
        </main>
    );
}
