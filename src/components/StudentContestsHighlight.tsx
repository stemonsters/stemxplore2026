"use client";

import { Button } from "@/components/ui/button";

import { Trophy, Gift, Zap, ArrowRight } from "lucide-react";

export default function StudentContestsHighlight() {
    const features = [
        {
            icon: <Trophy className="w-6 h-6 text-primary" />,
            text: "Grand Prizes",
            subtext: "To be won by finalists"
        },
        {
            icon: <Gift className="w-6 h-6 text-accent" />,
            text: "Rewards",
            subtext: "Vouchers & e-certificates"
        },
        {
            icon: <Zap className="w-6 h-6 text-foreground" />,
            text: "No Cost",
            subtext: "Free participation"
        },
    ];

    return (
        <section id="contests" className="py-20 border-y border-border bg-background scroll-mt-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-4">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 md:mb-6 tracking-tight">
                                Student Contests
                                <span className="block text-primary text-lg mt-2 font-normal">
                                    Register Now
                                </span>
                            </h2>
                            <p className="text-muted-foreground mb-0 md:mb-8">
                                Participate in our flagship challenges. Showcase your innovation. Win big.
                            </p>
                            {/* Desktop button */}
                            <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 h-auto rounded-none text-base group border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
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
                                    <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{feature.text}</h3>
                                    <p className="text-xs md:text-sm text-muted-foreground">{feature.subtext}</p>
                                </div>
                            ))}
                        </div>
                        {/* Mobile button - under cards */}
                        <Button asChild className="md:hidden w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 h-auto rounded-none text-base group border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
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
