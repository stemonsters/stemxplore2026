"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, School } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function SchoolRegistration() {
    const schools = Array(5).fill([
        "kerela-public-school-logo.png",
        "sparklingmindz-logo.png"
    ]).flat();
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="py-16 bg-background border-y border-border relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <ScrollReveal className="flex-1 text-center md:text-left">
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
                    </ScrollReveal>

                    <ScrollReveal
                        className="shrink-0"
                        delay={0.1}
                    >
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-lg rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                            Know More
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </ScrollReveal>
                </div>

                {/* Partner Schools Carousel */}
                <ScrollReveal className="mt-20" delay={0.2}>
                    <div className="mb-10 text-center">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                            Our Partner Schools
                        </h3>
                    </div>

                    <div className="relative w-full flex overflow-hidden mask-gradient-to-r from-transparent via-black to-transparent group">
                        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

                        <div
                            className="flex gap-8 items-center animate-scroll group-hover:[animation-play-state:paused]"
                            style={{ width: "fit-content", animationDuration: "20s" }}
                        >
                            {/* First set of schools */}
                            {schools.map((school, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-white border border-border items-center justify-center p-2 hover:bg-white/80 transition-colors"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={`/images/schools/${school}`}
                                            alt={`School ${index + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Second set of schools for seamless loop */}
                            {schools.map((school, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-white border border-border items-center justify-center p-2 hover:bg-white/80 transition-colors"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={`/images/schools/${school}`}
                                            alt={`School ${index + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
