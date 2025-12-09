"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Atom, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedEvent() {
    return (
        <section id="events" className="py-32 border-y border-border bg-background relative overflow-hidden scroll-mt-16">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,transparent,var(--background))]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Featured Event Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center mb-32"
                >
                    {/* Left Column */}
                    <div className="relative">
                        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-none bg-accent/10 text-xs font-medium text-accent uppercase tracking-widest border border-accent/20">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                            Launch Event
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                            HANDS-ON STEM <br />
                            <span className="text-primary">IN THE AGE OF AI</span>
                        </h2>
                        <span className="block text-xl md:text-2xl font-medium text-muted-foreground tracking-tight">Expert Panel Discussion</span>

                        {/* Decorative Element */}
                        <div className="absolute -z-10 -top-20 -left-20 opacity-[0.05] pointer-events-none">
                            <Atom className="w-96 h-96 text-primary" />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-center relative">
                        <div className="pl-8 border-l-2 border-primary/20">
                            <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light leading-relaxed">
                                Analyzing the intersection of Artificial Intelligence and tactile learning methodologies. Join industry leaders as they discuss the future of education.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-bold">AI Integration</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-bold">Future Skills</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 mt-4">
                                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">MEET THE PANELISTS BELOW</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Expert Panel Section (Merged) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 border-b border-border pb-6 text-center md:text-left">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Expert Panel</h2>
                        </div>
                        <Button className="hidden md:inline-flex rounded-none bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                            Register Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-border bg-card/30 p-12 text-center backdrop-blur-sm">
                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                                <div className="relative p-4 rounded-full bg-background border border-border shadow-sm">
                                    <User className="w-10 h-10 text-primary" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3">Panelists Announcement Pending</h3>
                            <p className="text-muted-foreground max-w-md mx-auto mb-6">
                                We are currently finalizing our lineup of industry experts and thought leaders.
                                Check back soon for the full reveal!
                            </p>

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Coming Soon
                            </div>
                        </div>
                    </div>

                    <Button className="w-full md:hidden mt-8 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                        Register Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
