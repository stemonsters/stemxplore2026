"use client";

import { Button } from "@/components/ui/button";

import { Calendar, ArrowRight, ChevronRight, Atom, Microscope, Code, Globe, Rocket } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-background">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,var(--background))]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div
                        className="lg:col-span-7"
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
                                <span>08.03.2026</span>
                            </div>
                            <div className="w-px h-4 bg-border" />
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-accent" />
                                <span>15.03.2026</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 hidden lg:block relative">
                        <div className="relative aspect-square flex items-center justify-center scale-125">
                            {/* Central Circle */}
                            <div className="absolute w-[60%] h-[60%] border border-primary/20 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-background border border-border rounded-full shadow-sm">
                                    <Atom className="w-6 h-6 text-primary" />
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-3 bg-background border border-border rounded-full shadow-sm">
                                    <Microscope className="w-6 h-6 text-accent" />
                                </div>
                            </div>

                            {/* Outer Circle */}
                            <div className="absolute w-[80%] h-[80%] border border-border rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-background border border-border rounded-full shadow-sm">
                                    <Code className="w-6 h-6 text-foreground" />
                                </div>
                                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-3 bg-background border border-border rounded-full shadow-sm">
                                    <Globe className="w-6 h-6 text-muted-foreground" />
                                </div>
                            </div>

                            {/* Center Element */}
                            <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/stemxplore-hero-logo.png"
                                        alt="STEMXplore 2026 Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
