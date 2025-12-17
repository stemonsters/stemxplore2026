"use client";

import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Trophy, Users, Calendar, Star, ChevronRight, Gavel } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function StudentContestsDetailed() {
    return (
        <section id="contest-details" className="py-24 bg-muted/50 text-foreground relative overflow-hidden border-b border-border">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Heading & Steps */}
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-none bg-primary/10 text-sm font-medium text-primary tracking-widest border border-primary/20">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            CONTEST DETAILS
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-foreground">
                            Showcase Your <br />
                            <span className="text-primary">Innovation</span>
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-primary font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xl mb-1">Present to Experts</h3>
                                    <p className="text-lg md:text-xl leading-relaxed">Finalists will present submissions to distinguished judges from top institutions.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-primary font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xl mb-1">Win Grand Prizes</h3>
                                    <p className="text-lg md:text-xl leading-relaxed">Exciting rewards and scholarships for the top performers.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-primary font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xl mb-1">Open for All</h3>
                                    <p className="text-lg md:text-xl leading-relaxed">Inclusive participation with dedicated Q&A sessions.</p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop button */}
                        <Button asChild size="lg" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-none shadow-sm border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                            <a href="#register">Register Now</a>
                        </Button>
                    </ScrollReveal>

                    {/* Right Column: Tabs */}
                    <ScrollReveal className="w-full" delay={0.1}>
                        <Tabs defaultValue="junior-hackathon" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 h-auto p-0 bg-transparent mb-8 rounded-none gap-0">
                                <TabsTrigger
                                    value="junior-hackathon"
                                    className="rounded-none border-b-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-xs md:text-base font-medium text-muted-foreground transition-all"
                                >
                                    Jr. Hackathon
                                </TabsTrigger>
                                <TabsTrigger
                                    value="lets-talk-stem"
                                    className="rounded-none border-b-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-xs md:text-base font-medium text-muted-foreground transition-all"
                                >
                                    Let&apos;s Talk STEM
                                </TabsTrigger>
                                <TabsTrigger
                                    value="tech-story"
                                    className="rounded-none border-b-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-xs md:text-base font-medium text-muted-foreground transition-all"
                                >
                                    Story Behind Tech
                                </TabsTrigger>
                            </TabsList>

                            <div className="border border-border bg-card/30 p-6 rounded-xl min-h-[400px]">
                                <TabsContent value="junior-hackathon" className="mt-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">Junior Hackathon - Scratch</h3>
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>
                                            <span className="font-semibold">Grades 3-5</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="font-semibold">March 8, 2026</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold">10:30 AM - 11:30 AM IST</span>
                                        </div>
                                    </div>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                        Theme: <strong>&quot;Reduce Reuse Recycle&quot;</strong>.
                                        Quiz + Hackathon format.
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 text-base text-muted-foreground pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Submission: Within 72 Hours
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Deliverables: Code Link + Video Explanation
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Platform: Scratch
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="lets-talk-stem" className="mt-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">Let&apos;s Talk STEM</h3>
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>
                                            <span className="font-semibold">Grades 7+</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="font-semibold">March 8, 2026</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold">11:45 AM - 12:30 PM IST</span>
                                        </div>
                                    </div>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                        Present your perspective on the thought-provoking topic: <strong>&quot;Science is not necessary when we have AI&quot;</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 text-base text-muted-foreground pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Round 1 Deadline: Feb 20th
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Finals: 7 Finalists Present Live
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="tech-story" className="mt-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">Story Behind my Tech</h3>
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>
                                            <span className="font-semibold">Grades 7+</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="font-semibold">March 15, 2026</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold">11:00 AM IST</span>
                                        </div>
                                    </div>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                        Innovative solutions for <strong>&quot;Water Sustainability&quot;</strong> or <strong>&quot;Energy Efficient Solutions&quot;</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 text-base text-muted-foreground pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Round 1 Deadline: Feb 20th
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Scientific Model / Arduino / App
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Finals: 3 Winners (Online) / 6 Finalists (Offline)
                                        </div>
                                    </div>
                                </TabsContent>

                            </div>
                        </Tabs>
                        {/* Mobile button - full width under tabs */}
                        <Button asChild size="lg" className="md:hidden w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none shadow-sm border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                            <a href="#register">Register Now</a>
                        </Button>
                    </ScrollReveal>
                </div>

                {/* Judges & Mentors Section (Merged) */}
                <ScrollReveal className="mt-24 pt-12 border-t border-border" delay={0.2}>
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl font-bold font-mono mb-2">Judges & Mentors</h2>
                        <div className="w-20 h-1 bg-primary mb-8 mx-auto md:mx-0" />
                        <div className="w-full flex flex-col md:flex-row gap-8">
                            <p className="flex-1 text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Be ready to impress and be inspired as finalists and winners present their submissions to our distinguished judges and mentors.
                            </p>
                            <p className="flex-1 text-lg md:text-xl text-muted-foreground leading-relaxed">
                                At the end of the events, all attendees get a chance to interact with the esteemed judges for a no-filter Q&A session!
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-border bg-card/30 p-12 text-center">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,transparent,var(--background))]" />

                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                                <div className="relative p-4 rounded-full bg-background border border-border shadow-sm">
                                    <Gavel className="w-10 h-10 text-primary" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3">Jury Selection in Progress</h3>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
                                Our team is currently selecting a panel of distinguished judges to guide the participants.
                            </p>

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Updates Pending
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
