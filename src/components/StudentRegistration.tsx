"use client";

import { XCircle, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function StudentRegistration() {
    return (
        <section id="register" className="py-24 bg-background relative overflow-hidden scroll-mt-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <ScrollReveal>



                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-foreground leading-tight">
                            Contest Registrations <br />
                            are now <span className="text-destructive">Closed</span>
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
                            Thank you for the overwhelming response! Registrations for STEMXplore 2026 contests are now closed.
                            Stay tuned for event updates and announcements.
                        </p>


                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
