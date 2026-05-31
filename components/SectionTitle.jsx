import { motion } from "framer-motion";

export default function SectionTitle({tag, text1, text2, text3, title, description }) {
    return (
        <>
            {(text1 || tag) && <p className="brand-pill mx-auto mt-28 w-max rounded-full px-10 py-2 text-center font-semibold">{text1} {tag}</p>}
            {text2 && <h3 className="mx-auto mt-4 text-center text-3xl font-semibold text-[#080B2B]">{text2}</h3>}
            {text3 && <p className="mx-auto mt-2 max-w-lg text-center text-[#28304A]">{text3}</p>}
           <div className="text-center">
            {title && <motion.h2 className="brand-gradient-text mx-auto mt-4 max-w-lg text-3xl font-semibold"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}  
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {title}
            </motion.h2>}
            {description && <motion.p className="mx-auto mt-4 max-w-md text-center text-sm/7 text-[#28304A]"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                {description}
            </motion.p>}
        </div>
        </>

    );
}
