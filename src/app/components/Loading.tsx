// components/Loading.tsx
"use client";
import { motion } from "framer-motion";
import Signature from "@/app/components/Signature";

const Loading: React.FC = () => {
    return (
        <motion.div
            className="w-screen h-screen bg-primary flex items-center justify-center scrollbar-hide"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Signature />
        </motion.div>
    );
};

export default Loading;
