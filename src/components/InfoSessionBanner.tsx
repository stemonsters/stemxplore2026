"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Video } from "lucide-react";

export default function InfoSessionBanner() {
    return (
        <section className="border-y border-border bg-muted/30 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
                    {/* Left Side: Content */}
                    <div className="flex flex-col md:flex-row items-start gap-4 max-w-3xl">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                            <Video className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="flex items-center justify-start gap-2 mb-1">
                                <span className="text-primary font-bold uppercase text-xs tracking-wider">Watch the Session</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                                Missed the live session? Watch the recording now!
                            </h3>
                            <p className="text-muted-foreground font-medium mt-1.5 text-sm sm:text-base">
                                Information session for parents, educators and students.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Action */}
                    <div className="flex-shrink-0 w-full md:w-auto">
                        <Button
                            asChild
                            size="default"
                            className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-6 font-medium border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group shadow-sm"
                        >
                            <a
                                href="https://youtu.be/z0ehRXQmBdk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Watch on YouTube <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
