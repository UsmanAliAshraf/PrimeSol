import { motion } from "framer-motion";

export default function SectionTitle({tag, text1, text2, text3, title, description }) {
    return (
        <>
            <p className="text-center font-medium text-indigo-600 dark:text-indigo-400 mt-28 px-10 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 w-max mx-auto">{text1} {tag}</p>
            <h3 className="text-3xl font-semibold text-center mx-auto mt-4">{text2}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-center mt-2 max-w-lg mx-auto">{text3}</p>
           <div className="text-center">
            <motion.h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}  
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {title}
            </motion.h2>
            <motion.p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                {description}
            </motion.p>
        </div>
        </>

    );
}