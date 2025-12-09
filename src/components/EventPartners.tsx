"use client";

import { motion } from "framer-motion";

export default function EventPartners() {
    const partners = Array.from({ length: 10 });

    return (
        <div id="partners" className="w-full py-20 bg-background border-b border-border overflow-hidden scroll-mt-16">
            <div className="container mx-auto px-4 mb-10">
                <h2 className="text-xl md:text-3xl font-bold tracking-tight text-center">
                    Our Event Partners
                </h2>
            </div>

            <div className="relative w-full flex overflow-hidden mask-gradient-to-r from-transparent via-black to-transparent">
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

                <motion.div
                    className="flex gap-8 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* First set of partners */}
                    {partners.map((_, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-muted/30 border border-border items-center justify-center p-6 hover:bg-muted/50 transition-colors"
                        >
                            <span className="text-sm font-medium text-muted-foreground">Partner {index + 1}</span>
                        </div>
                    ))}

                    {/* Second set of partners for seamless loop */}
                    {partners.map((_, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-muted/30 border border-border items-center justify-center p-6 hover:bg-muted/50 transition-colors"
                        >
                            <span className="text-sm font-medium text-muted-foreground">Partner {index + 1}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
