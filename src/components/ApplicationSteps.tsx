"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, UserPlus, Mail, Upload, Trophy, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const steps: Step[] = [
    {
        id: 1,
        title: "Online Registration",
        description: "Begin your journey by signing up through our official portal and providing your basic details.",
        icon: <UserPlus className="w-5 h-5" />,
    },
    {
        id: 2,
        title: "Submission Details",
        description: "Check your email for a comprehensive guide containing your unique submission ID and detailed participation guidelines.",
        icon: <Mail className="w-5 h-5" />,
    },
    {
        id: 3,
        title: "Project Upload",
        description: "Complete and upload your final submission according to the guidelines before the project deadline.",
        icon: <Upload className="w-5 h-5" />,
    },
    {
        id: 4,
        title: "Finalist Shortlisting",
        description: "Our panel will review all entries. Shortlisted finalists will receive formal invitations to present their work.",
        icon: <Trophy className="w-5 h-5" />,
    },
    {
        id: 5,
        title: "IISc Grand Finale",
        description: "Showcase your innovation at IISc Bangalore for the final round, prize distribution, and the grand finale events.",
        icon: <MapPin className="w-5 h-5" />,
    },
];

export default function ApplicationSteps() {
    const [openStep, setOpenStep] = useState<number | null>(1);

    return (
        <section className="py-12 md:py-16 bg-muted/30 border-b border-border/50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-start md:items-center mb-10 md:mb-12 text-left md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-foreground">How it Works</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">Follow these 5 simple stages to successfully complete your application for STEMexplore 2026.</p>
                    <div className="w-16 md:w-24 h-1 bg-primary rounded-full mt-4 md:mx-auto" />
                </div>

                <div className="max-w-4xl mx-auto relative px-0 md:px-0">
                    {/* Vertical Timeline Line - Centered behind circles */}
                    <div className="absolute left-[16px] md:left-[32px] top-8 bottom-8 w-0.5 bg-border z-0 -translate-x-1/2" />

                    <div className="space-y-8 relative z-10">
                        {steps.map((step, index) => {
                            const isOpen = openStep === step.id;

                            return (
                                <div
                                    key={step.id}
                                    className="flex gap-4 md:gap-8 group"
                                >
                                    {/* Indicator Circle - Responsive Sizing */}
                                    <div className="relative shrink-0 flex items-start justify-center w-8 md:w-16 pt-2">
                                        <div className={cn(
                                            "w-8 h-8 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 bg-background",
                                            isOpen ? "border-primary shadow-lg" : "border-border group-hover:border-primary/50"
                                        )}>
                                            <div className={cn(
                                                "w-6 h-6 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300",
                                                isOpen ? "bg-primary text-primary-foreground" : "bg-muted/30 text-muted-foreground group-hover:text-primary"
                                            )}>
                                                <div className="scale-75 md:scale-100">
                                                    {step.icon}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={cn(
                                            "flex-grow bg-background border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm",
                                            isOpen ? "border-primary/50 ring-1 ring-primary/20" : "border-border hover:border-border/80"
                                        )}
                                        onClick={() => setOpenStep(isOpen ? null : step.id)}
                                    >
                                        <div className="p-4 md:p-6 flex items-center justify-between gap-4">
                                            <div className="flex flex-wrap items-center gap-x-2">
                                                <h3 className={cn(
                                                    "text-lg md:text-xl font-bold transition-colors",
                                                    isOpen ? "text-primary" : "text-foreground"
                                                )}>
                                                    Stage {step.id}: {step.title}
                                                </h3>
                                            </div>
                                            <ChevronDown className={cn(
                                                "w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0",
                                                isOpen ? "rotate-180 text-primary" : ""
                                            )} />
                                        </div>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0 border-t border-border/50">
                                                        <div className="py-4 text-muted-foreground leading-relaxed md:text-lg">
                                                            {step.description}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-2">
                                                            <CheckCircle2 className="w-4 h-4" />
                                                            Required for Next Level
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
