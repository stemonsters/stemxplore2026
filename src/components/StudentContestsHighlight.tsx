"use client";

import { Button } from "@/components/ui/button";

import { Trophy, Globe, Ticket, ArrowRight } from "lucide-react";

export default function StudentContestsHighlight() {
    const features = [
        {
            icon: <Trophy className="w-6 h-6 text-primary" />,
            text: "Grand Prizes",
        },
        {
            icon: <Globe className="w-6 h-6 text-accent" />,
            text: "Global Stage",
        },
        {
            icon: <Ticket className="w-6 h-6 text-foreground" />,
            text: "Free Event",
        },
    ];

    return (
        <section id="contests" className="py-12 border-y border-border bg-muted/50 scroll-mt-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">
                                Student Contests
                                <span className="block text-primary text-lg mt-2 font-normal">
                                    Register Now
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-0 md:mb-8 leading-relaxed">
                                Participate in our flagship challenges. Showcase your innovation. Win big.
                            </p>
                            {/* Desktop button */}
                            <Button asChild size="lg" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                                <a href="#contest-details">
                                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <div className="grid grid-cols-3 gap-px bg-border border border-border">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-background p-4 md:p-8 hover:bg-muted/30 transition-colors group flex flex-col items-center text-center"
                                >
                                    <div className="mb-2 md:mb-4 p-2 md:p-3 bg-muted w-fit group-hover:bg-primary/10 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-base md:text-lg font-medium">{feature.text}</h3>
                                </div>
                            ))}
                        </div>
                        {/* Mobile button - under cards */}
                        <Button asChild size="lg" className="md:hidden w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                            <a href="#contest-details">
                                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
