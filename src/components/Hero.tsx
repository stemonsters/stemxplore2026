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
        <section className="relative h-auto lg:h-screen flex items-center justify-center pt-20 pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-background">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,var(--background))]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div
                        className="lg:col-span-7"
                    >
                        {/* Logo and Knowledge Partner Container */}
                        <div className="flex items-center gap-4 md:gap-8 mb-4 md:mb-6">
                            {/* Main Event Logo */}
                            <Image
                                src="/images/stemxplore-logo.png"
                                alt="STEMXplore 2026 Logo"
                                width={180}
                                height={180}
                                className="h-20 md:h-24 lg:h-28 w-auto"
                            />

                            {/* subtle divider */}
                            <div className="h-12 w-px bg-border flex-shrink-0" />

                            {/* Knowledge Partner section */}
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                                    Knowledge Partner
                                </span>
                                <Image
                                    src="/images/ieee-pes-logo.png"
                                    alt="IEEE PES Bangalore Chapter"
                                    width={200}
                                    height={200}
                                    className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                                />
                            </div>
                        </div>


                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
                            NATIONAL SCIENCE <br />
                            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--primary),var(--accent),var(--primary),var(--accent),var(--primary))] animate-gradient-flow">
                                DAY SYMPOSIUM
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 font-light border-l-2 border-accent pl-4 md:pl-6">
                            A 2-day mega event celebrating science and hands-on learning: starting virtually and concluding at IISc Bangalore.
                        </p>

                        {/* Mobile Version of IISc Image - shown between text and buttons with more height */}
                        <div className="lg:hidden relative mb-8">
                            <div className="relative h-[405px] sm:h-[505px] w-full overflow-hidden shadow-xl border-4 border-white">
                                <Image
                                    src="/images/iisc-bangalore.png"
                                    alt="IISc Bangalore"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent pt-16 pb-4 px-6 text-center">
                                    <div className="relative z-10">
                                        <p className="text-primary font-bold text-[14px] uppercase tracking-wider opacity-90 mb-1">
                                            Your registration can lead you to
                                        </p>
                                        <h3 className="text-primary font-bold text-2xl uppercase whitespace-nowrap">
                                            IISc Bangalore
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 md:mb-8">
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

                    <div className="lg:col-span-5 hidden lg:block relative lg:mb-0">
                        <div className="relative h-[350px] sm:h-[450px] md:h-[612px] w-full ml-auto overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/images/iisc-bangalore.png"
                                alt="IISc Bangalore"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent pt-32 pb-8 px-8 text-center">
                                <div className="relative z-10">
                                    <p className="text-primary font-bold text-base md:text-lg uppercase tracking-tight opacity-90">
                                        Your registration can lead you to
                                    </p>
                                    <h3 className="text-primary font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight leading-none uppercase whitespace-nowrap">
                                        IISc Bangalore
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

