// src/Components/ScrollReveal.jsx
import { motion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
            whileInView={{ opacity: 1, y: 0 }} // Animate to final state when in view
            viewport={{ once: true, margin: "-50px" }} // Trigger animation once
            transition={{ duration: 0.6, delay: delay, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
