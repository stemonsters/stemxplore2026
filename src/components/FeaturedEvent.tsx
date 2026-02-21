"use client";


import { Brain, Cpu, Settings, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

export default function FeaturedEvent() {
    return (
        <section id="events" className="py-32 border-y border-border bg-background relative overflow-hidden scroll-mt-16">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,transparent,var(--background))]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Featured Event Section */}
                <div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center mb-32"
                >
                    {/* Left Column */}
                    <ScrollReveal className="relative">
                        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-none bg-accent/10 text-sm font-medium text-accent tracking-widest border border-accent/20">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                            Panel Discussion
                        </div>

                        <h2 className="text-3xl md:text-5xl font-medium mb-8 leading-tight tracking-tight">
                            "The 2030 Horizon and Beyond: <br />
                            <span className="text-primary mt-2 block">Skills, Mindsets, and Learning"</span>
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 md:gap-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-base font-medium border border-primary/20">
                                <User className="w-4 h-4" />
                                For Parents & Educators
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted text-muted-foreground text-base font-medium border border-border">
                                March 8, 2026
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted text-muted-foreground text-base font-medium border border-border">
                                10:30 AM IST
                            </span>
                        </div>

                        {/* Decorative Element - Gear */}
                        <div className="absolute -z-10 -top-20 -left-20 opacity-[0.05] pointer-events-none">
                            <Settings className="w-96 h-96 text-primary animate-[spin_30s_linear_infinite]" />
                        </div>
                    </ScrollReveal>

                    {/* Right Column */}
                    <ScrollReveal className="flex flex-col justify-center relative" delay={0.1}>
                        <div className="pl-8 border-l-2 border-primary/20">
                            <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light leading-relaxed">
                                How do we prepare ourselves and the next generation for careers that don't exist yet? Join our expert panelists as they explore the skills, mindsets, and learning strategies needed to thrive in 2030 and beyond.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 mb-12">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <span className="text-base md:text-lg">Skills</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <span className="text-base md:text-lg">Careers</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <span className="text-base md:text-lg">Human Intelligence</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 mt-4">
                                <Button asChild className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all cursor-pointer px-8 py-4 text-lg">
                                    <a href="/webinar-registration">
                                        Register for Webinar
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Expert Panel Section */}
                <ScrollReveal delay={0.2}>
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Meet the Experts</h2>
                            <div className="w-20 h-1 bg-primary mb-8 mx-auto md:mx-0" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
                        {/* Expert Card: Dr. Jitendra Balakrishnan */}
                        <div className="relative w-[80%] mx-auto min-h-[336px] md:min-h-[392px]">
                            <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3" />
                            <div className="relative w-full h-full min-h-[336px] md:min-h-[392px] overflow-hidden border-2 border-primary bg-background isolate">
                                <img
                                    src="/images/speakers/jitendra_balakrishnan.jpg"
                                    alt="Dr. Jitendra Balakrishnan"
                                    className="absolute inset-0 w-full h-full object-cover object-top -z-10"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent -z-10" />
                                <div className="absolute inset-x-0 bottom-0 p-4 pb-5 flex flex-col items-center text-center z-10 w-full">
                                    <div className="w-12 h-1 bg-primary mb-3" />
                                    <h3 className="text-xl font-bold text-white mb-0.5 tracking-tight">Dr. Jitendra Balakrishnan</h3>
                                    <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">CEO TRYST</p>
                                    <p className="text-xs text-white/90 mb-3 w-full px-2">
                                        The IIT Bombay Translational Research Foundation
                                    </p>
                                    <a
                                        href="https://www.linkedin.com/in/jitendra-balakrishnan/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Expert Card: Mekin Maheshwari */}
                        <div className="relative w-[80%] mx-auto min-h-[336px] md:min-h-[392px]">
                            <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3" />
                            <div className="relative w-full h-full min-h-[336px] md:min-h-[392px] overflow-hidden border-2 border-primary bg-background isolate">
                                <img
                                    src="/images/speakers/mekin_maheshwari.png"
                                    alt="Mekin Maheshwari"
                                    className="absolute inset-0 w-full h-full object-cover object-top -z-10"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent -z-10" />
                                <div className="absolute inset-x-0 bottom-0 p-4 pb-5 flex flex-col items-center text-center z-10 w-full">
                                    <div className="w-12 h-1 bg-primary mb-3" />
                                    <h3 className="text-xl font-bold text-white mb-0.5 tracking-tight">Mekin Maheshwari</h3>
                                    <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">Founder</p>
                                    <p className="text-xs text-white/90 mb-3 w-full px-2">
                                        Udhyam Learning Foundation
                                    </p>
                                    <a
                                        href="https://www.linkedin.com/in/mekin/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Expert Card: Shreya Santra */}
                        <div className="relative w-[80%] mx-auto min-h-[336px] md:min-h-[392px]">
                            <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3" />
                            <div className="relative w-full h-full min-h-[336px] md:min-h-[392px] overflow-hidden border-2 border-primary bg-background isolate">
                                <img
                                    src="/images/speakers/shreya_santra.png"
                                    alt="Shreya Santra"
                                    className="absolute inset-0 w-full h-full object-cover object-top -z-10"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent -z-10" />
                                <div className="absolute inset-x-0 bottom-0 p-4 pb-5 flex flex-col items-center text-center z-10 w-full">
                                    <div className="w-12 h-1 bg-primary mb-3" />
                                    <h3 className="text-xl font-bold text-white mb-0.5 tracking-tight">Shreya Santra</h3>
                                    <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">Specially Appointed Lecturer</p>
                                    <p className="text-xs text-white/90 mb-3 w-full px-2">
                                        Dept. Aerospace Engineering, Tohoku University Japan
                                    </p>
                                    <a
                                        href="https://www.linkedin.com/in/shreya-santra/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
