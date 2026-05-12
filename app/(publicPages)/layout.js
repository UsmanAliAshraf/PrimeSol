import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
        </>
    );
}
