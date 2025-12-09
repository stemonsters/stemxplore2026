"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Laptop, Users, Trophy, Globe } from "lucide-react";

function StatItem({ icon: Icon, value, label, prefix = "", suffix = "" }: { icon: any, value: number, label: string, prefix?: string, suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayValue = useTransform(rounded, (latest) => latest.toLocaleString());

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, value, count]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-primary/10 rounded-full mb-2">
                <Icon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center">
                <span>{prefix}</span>
                <motion.span>{displayValue}</motion.span>
                <span>{suffix}</span>
            </div>
            <p className="text-muted-foreground font-medium">{label}</p>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" className="py-24 bg-muted/10 border-b border-border scroll-mt-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-12 gap-12 mb-16">
                    <div className="md:col-span-4">
                        <h2 className="text-4xl font-bold font-mono mb-6 tracking-tighter">
                            About the Event
                        </h2>
                        <div className="w-12 h-12 border-t-4 border-l-4 border-primary mb-6" />
                    </div>

                    <div className="md:col-span-8 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-primary pl-6"
                        >
                            <p className="text-xl md:text-2xl font-light leading-relaxed">
                                <strong className="font-bold text-primary">STEMXplore 2026</strong> celebrates India’s National Science Day through discovery, creativity, and innovation.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-background border border-border p-6"
                            >
                                <h3 className="font-bold text-lg mb-4 text-accent">Our Mission</h3>
                                <p className="text-muted-foreground">
                                    Empowering students through knowledge. Bringing together educators, parents, and thought leaders.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-background border border-border p-6"
                            >
                                <h3 className="font-bold text-lg mb-4 text-accent">Program Highlights</h3>
                                <p className="text-muted-foreground">
                                    Explore STEM beyond textbooks. Build future-ready skills through hands-on challenges.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                    <StatItem icon={Laptop} value={10} label="Cities and Schools" suffix="+" />
                    <StatItem icon={Users} value={1000} label="Participants" suffix="+" />
                    <StatItem icon={Globe} value={2000} label="Community" suffix="+" />
                    <StatItem icon={Trophy} value={30000} label="Worth Prizes" prefix="₹" />
                </div>
            </div>
        </section>
    );
}
