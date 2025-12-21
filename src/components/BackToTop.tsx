"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down more than 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-4 lg:right-8 z-[100]">
            <button
                onClick={scrollToTop}
                className="w-12 h-12 flex items-center justify-center rounded-none bg-primary text-primary-foreground shadow-xl cursor-pointer group transition-all border-2 border-primary hover:bg-transparent hover:text-primary active:scale-95"
                aria-label="Back to top"
            >
                <ChevronUp className="w-7 h-7" strokeWidth={2.5} />
            </button>
        </div>
    );
};


