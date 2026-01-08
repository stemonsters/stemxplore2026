"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { School, Users, Trophy, Globe } from "lucide-react";

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

export default function About() {
    return (
        <section id="about" className="py-24 bg-background border-b border-border scroll-mt-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-12 gap-12">
                    <ScrollReveal className="md:col-span-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6 tracking-tighter">
                            About the Event
                        </h2>
                        <div className="w-12 h-12 border-t-4 border-l-4 border-primary mb-8" />
                    </ScrollReveal>

                    <div className="md:col-span-8 space-y-8">
                        <ScrollReveal delay={0.1}>
                            <div className="border-l-2 border-primary pl-6">
                                <p className="text-xl md:text-2xl font-light leading-relaxed">
                                    <strong className="font-bold text-primary">STEMXplore 2026</strong> celebrates India's National Science Day through discovery, creativity, and innovation.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-8">
                            <ScrollReveal delay={0.2}>
                                <div className="bg-background border border-border p-6 h-full">
                                    <h3 className="font-bold text-lg mb-4 text-accent">Our Mission</h3>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                        Empowering students through knowledge. Bringing together educators, parents, and thought leaders.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="bg-background border border-border p-6 h-full">
                                    <h3 className="font-bold text-lg mb-4 text-accent">Program Highlights</h3>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                        Explore STEM beyond textbooks. Build future-ready skills through hands-on challenges.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal delay={0.4}>
                            <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold text-lg group">
                                <Link href="/about" className="flex items-center">
                                    Read Our Full Story
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Stats Cards moved out of the content column to align with section start */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-border mt-16">
                    {[
                        { icon: School, end: 10, label: "Cities", suffix: "+" },
                        { icon: Users, end: 1000, label: "Participants", suffix: "+" },
                        { icon: Trophy, end: 30000, label: "Prizes", prefix: "₹" },
                        { icon: Globe, end: 2000, label: "Community", suffix: "+" }
                    ].map((stat, index) => (
                        <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                            <div className="bg-background border border-border p-6 h-full flex flex-col items-center justify-center transition-all duration-300 hover:border-primary group">
                                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                                    <stat.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold mb-1 text-primary">
                                    <CountUp end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
