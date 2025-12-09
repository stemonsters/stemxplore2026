"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-background">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,var(--background))]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6 md:mb-8">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            National Science Day 2026
                        </div>

                        <div className="text-lg md:text-2xl font-bold text-primary mb-2 tracking-wide">
                            STEMXplore 2026
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
                            NATIONAL SCIENCE <br />
                            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--primary),var(--accent),var(--primary),var(--accent),var(--primary))] animate-gradient-flow">
                                DAY SYMPOSIUM
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mb-8 font-light border-l-2 border-accent pl-4 md:pl-6">
                            A 2-day mega virtual event to celebrate science and hands-on learning.
                            <br />
                            <span className="text-sm font-medium mt-2 block text-primary/80">Initializing STEMXplore 2026</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 md:mb-12">
                            <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 h-auto rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                                <a href="#about">
                                    Learn More <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="w-full sm:w-auto px-6 py-3 h-auto rounded-none border-2 border-muted-foreground/20 hover:border-primary hover:text-primary hover:bg-primary/5">
                                <a href="#schedule">
                                    View Schedule
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 text-sm font-mono text-muted-foreground border-t border-border pt-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-accent" />
                                <span>28.02.2026</span>
                            </div>
                            <div className="w-px h-4 bg-border" />
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-accent" />
                                <span>01.03.2026</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-4 hidden lg:block"
                    >
                        <div className="relative aspect-square border border-border bg-card/50 p-2">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -mt-1 -ml-1" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary -mt-1 -mr-1" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary -mb-1 -ml-1" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary -mb-1 -mr-1" />

                            <div className="w-full h-full relative overflow-hidden bg-muted/20">
                                <Image
                                    src="/images/hero-illustration-v3.png"
                                    alt="STEMXplore 2026 Hero Illustration"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
