"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import { Calendar, ArrowRight, ChevronRight, School, Users, Trophy, Globe } from "lucide-react";
import Image from "next/image";

function CountUp({ end, prefix = "", suffix = "", duration = 2000 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <>{prefix}{count.toLocaleString()}{suffix}</>;
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-0 overflow-hidden bg-background">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,var(--background))]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div
                        className="lg:col-span-7"
                    >
                        {/* Hero Logo - visible initially */}
                        <Image
                            src="/images/stemxplore-logo.png"
                            alt="STEMXplore 2026 Logo"
                            width={180}
                            height={180}
                            className="h-24 md:h-32 w-auto mb-4 md:mb-6"
                        />


                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
                            NATIONAL SCIENCE <br />
                            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--primary),var(--accent),var(--primary),var(--accent),var(--primary))] animate-gradient-flow">
                                DAY SYMPOSIUM
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 font-light border-l-2 border-accent pl-4 md:pl-6">
                            A 2-day mega virtual event to celebrate science and hands-on learning.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 md:mb-12">
                            <Button asChild className="w-full sm:w-48 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 h-auto rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                                <a href="#register">
                                    Register Now <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="w-full sm:w-48 px-6 py-3 h-auto rounded-none border-2 border-muted-foreground/20 hover:border-primary hover:text-primary hover:bg-primary/5">
                                <a href="#about">
                                    Know More
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 border-t border-border pt-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 flex flex-col items-center justify-center text-primary-foreground shadow-lg">
                                    <span className="text-2xl font-bold leading-none">08</span>
                                    <span className="text-xs uppercase tracking-wide">Mar</span>
                                </div>
                                <div>
                                    <div className="text-lg text-primary font-bold uppercase tracking-wider">Day 1</div>
                                    <div className="text-base text-muted-foreground">Saturday, 2026</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 flex flex-col items-center justify-center text-accent-foreground shadow-lg">
                                    <span className="text-2xl font-bold leading-none">15</span>
                                    <span className="text-xs uppercase tracking-wide">Mar</span>
                                </div>
                                <div>
                                    <div className="text-lg text-accent font-bold uppercase tracking-wider">Day 2</div>
                                    <div className="text-base text-muted-foreground">Saturday, 2026</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 hidden lg:block relative">
                        <div className="grid grid-cols-2 gap-6 mt-[60px]">
                            {/* Column 1 - Staggered Down */}
                            <div className="space-y-6 pt-12">
                                <div className="relative p-6 bg-card/50 backdrop-blur-md border-2 border-primary/30 hover:border-primary transition-all duration-300 group shadow-lg shadow-primary/5 hover:shadow-primary/20 hover:shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                                            <School className="w-7 h-7 text-primary" />
                                        </div>
                                        <div className="text-4xl font-bold mb-1 text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--primary),var(--accent),var(--primary),var(--accent),var(--primary))] animate-gradient-flow"><CountUp end={10} suffix="+" /></div>
                                        <div className="text-sm text-muted-foreground font-medium">Cities and Schools</div>
                                    </div>
                                </div>
                                <div className="relative p-6 bg-card/50 backdrop-blur-md border-2 border-accent/30 hover:border-accent transition-all duration-300 group shadow-lg shadow-accent/5 hover:shadow-accent/20 hover:shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                                            <Globe className="w-7 h-7 text-accent" />
                                        </div>
                                        <div className="text-4xl font-bold mb-1 text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--primary),var(--accent),var(--primary),var(--accent),var(--primary))] animate-gradient-flow"><CountUp end={2000} suffix="+" /></div>
                                        <div className="text-sm text-muted-foreground font-medium">Community</div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 - Normal Position */}
                            <div className="space-y-6">
                                <div className="relative p-6 bg-card/50 backdrop-blur-md border-2 border-accent/30 hover:border-accent transition-all duration-300 group shadow-lg shadow-accent/5 hover:shadow-accent/20 hover:shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                                            <Users className="w-7 h-7 text-accent" />
                                        </div>
                                        <div className="text-4xl font-bold mb-1 text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--primary),var(--accent),var(--primary),var(--accent),var(--primary))] animate-gradient-flow"><CountUp end={1000} suffix="+" /></div>
                                        <div className="text-sm text-muted-foreground font-medium">Participants</div>
                                    </div>
                                </div>
                                <div className="relative p-6 bg-card/50 backdrop-blur-md border-2 border-primary/30 hover:border-primary transition-all duration-300 group shadow-lg shadow-primary/5 hover:shadow-primary/20 hover:shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                                            <Trophy className="w-7 h-7 text-primary" />
                                        </div>
                                        <div className="text-4xl font-bold mb-1 text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--primary),var(--accent),var(--primary),var(--accent),var(--primary))] animate-gradient-flow"><CountUp end={30000} prefix="₹" /></div>
                                        <div className="text-sm text-muted-foreground font-medium">Worth Prizes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

