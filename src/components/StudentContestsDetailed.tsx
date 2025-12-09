"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Trophy, Users, Calendar, Star, ChevronRight } from "lucide-react";

export default function StudentContestsDetailed() {
    return (
        <section id="contest-details" className="py-24 bg-background text-foreground relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Heading & Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-6 text-muted-foreground text-sm">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            <span>Contest Details</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-foreground">
                            Showcase Your <br />
                            <span className="text-primary-foreground bg-primary px-2">Innovation</span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground mb-10">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-primary font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xl mb-1">Present to Experts</h3>
                                    <p className="text-base">Finalists will present submissions to distinguished judges from top institutions.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-primary font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xl mb-1">Win Grand Prizes</h3>
                                    <p className="text-base">Exciting rewards and scholarships for the top performers.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-primary font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xl mb-1">Open for All</h3>
                                    <p className="text-base">Inclusive participation with dedicated Q&A sessions.</p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none shadow-sm border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                            Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    {/* Right Column: Tabs */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <Tabs defaultValue="robotics" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-auto p-0 bg-transparent border-b border-border mb-8 rounded-none gap-2 md:gap-8">
                                <TabsTrigger
                                    value="robotics"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0 text-xs md:text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
                                >
                                    Robotics
                                </TabsTrigger>
                                <TabsTrigger
                                    value="science"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0 text-xs md:text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
                                >
                                    Science
                                </TabsTrigger>
                                <TabsTrigger
                                    value="coding"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0 text-xs md:text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
                                >
                                    Coding
                                </TabsTrigger>
                                <TabsTrigger
                                    value="eco-tech"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0 text-xs md:text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
                                >
                                    Eco-Tech
                                </TabsTrigger>
                            </TabsList>

                            <div className="border border-border bg-card/30 p-6 rounded-xl min-h-[400px]">
                                <TabsContent value="robotics" className="mt-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">Robotics Challenge</h3>
                                    <p className="text-muted-foreground">
                                        Design, build, and program an autonomous robot to navigate a complex obstacle course.
                                        Teams will be judged on speed, accuracy, and engineering design.
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Team Size: 2-4 Members
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Duration: 4 Hours
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Kit: Standard LEGO/Arduino
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Prize Pool: $5,000
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="science" className="mt-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">Science Fair</h3>
                                    <p className="text-muted-foreground">
                                        Present your original research and experiments to a panel of distinguished judges.
                                        Focus areas include Physics, Chemistry, and Biology.
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Individual Participation
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Format: Poster Presentation
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Mentorship Available
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Prize Pool: $3,000
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="coding" className="mt-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">Coding Hackathon</h3>
                                    <p className="text-muted-foreground">
                                        Solve real-world problems using software and algorithms in a high-intensity 24-hour sprint.
                                        Open to all languages and frameworks.
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Team Size: 3-5 Members
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Duration: 24 Hours
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Theme: Smart Cities
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Prize Pool: $8,000
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="eco-tech" className="mt-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">Eco-Tech Innovation</h3>
                                    <p className="text-muted-foreground">
                                        Design sustainable solutions for environmental challenges.
                                        Create prototypes that address climate change, waste management, or energy efficiency.
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Team Size: 2-4 Members
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Focus: Sustainability
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Materials: Recycled/Bio
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            Prize Pool: $4,000
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
