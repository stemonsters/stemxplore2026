"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, School } from "lucide-react";


export default function SchoolRegistration() {
    return (
        <section className="py-16 bg-background border-y border-border relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <School className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">For Institutions</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
                            Are you a progressive school looking to participate?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                            Partner with <span className="font-semibold text-foreground">STEMXplore 2026</span>. Register to receive a custom portal link for your students to sign up for events seamlessly.
                        </p>
                    </div>

                    <div
                        className="shrink-0"
                    >
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-lg rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                            Know More
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
