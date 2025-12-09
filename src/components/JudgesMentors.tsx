"use client";

import { Gavel } from "lucide-react";

export default function JudgesMentors() {
    return (
        <section className="py-20 bg-background border-b border-border">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold font-mono uppercase mb-2">Judges & Mentors</h2>
                    <div className="w-20 h-1 bg-primary mb-8" />
                    <div className="space-y-4">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Be ready to impress and be inspired as finalists and winners present their submissions to our distinguished judges and mentors.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
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
                        <p className="text-muted-foreground max-w-md mx-auto mb-6">
                            Our team is currently selecting a panel of distinguished judges and mentors to guide and evaluate the participants.
                        </p>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Updates Pending
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
