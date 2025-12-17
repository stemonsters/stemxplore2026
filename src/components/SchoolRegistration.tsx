"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, School } from "lucide-react";
import { motion } from "framer-motion";

export default function SchoolRegistration() {
    const schools = Array.from({ length: 10 });
    return (
        <section className="py-16 bg-background border-y border-border relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <School className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">For Institutions</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                            Are you a progressive school looking to participate?
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            Partner with <span className="font-semibold text-foreground">STEMXplore 2026</span>. Register to receive a custom portal link for your students to sign up for events seamlessly.
                        </p>
                    </div>

                    <div
                        className="shrink-0"
                    >
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-lg rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                            Know More
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>

                {/* Partner Schools Carousel */}
                <div className="mt-20">
                    <div className="mb-10 text-center">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                            Our Partner Schools
                        </h3>
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
                            {/* First set of schools */}
                            {schools.map((_, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-muted/30 border border-border items-center justify-center p-6 hover:bg-muted/50 transition-colors"
                                >
                                    <span className="text-sm font-medium text-muted-foreground">School {index + 1}</span>
                                </div>
                            ))}

                            {/* Second set of schools for seamless loop */}
                            {schools.map((_, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-muted/30 border border-border items-center justify-center p-6 hover:bg-muted/50 transition-colors"
                                >
                                    <span className="text-sm font-medium text-muted-foreground">School {index + 1}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
