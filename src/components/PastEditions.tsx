"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PastEditions() {
    const years = [2025, 2024, 2023, 2022];

    return (
        <section className="py-20 bg-background border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-2 md:gap-0">
                    <h2 className="text-3xl font-bold">Past Editions</h2>
                    <span className="text-sm text-muted-foreground">Our History</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {years.map((year, index) => (
                        <motion.div
                            key={year}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-video bg-muted relative overflow-hidden border border-border group-hover:border-primary transition-colors">
                                <Image
                                    src={index % 2 === 0 ? "/images/past-2025.png" : "/images/past-2024.png"}
                                    alt={`Past Edition ${year}`}
                                    fill
                                    className="object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <span className="font-mono text-4xl font-bold text-foreground/80 group-hover:text-transparent transition-colors">
                                        {year}
                                    </span>
                                </div>

                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                                    <span className="bg-background border border-primary px-3 py-1 text-xs text-primary">
                                        View Gallery
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 bg-background border-t border-r border-border px-2 py-1 z-20">
                                    <span className="text-xs font-bold">Vol {year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
