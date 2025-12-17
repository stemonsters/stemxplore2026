"use client";


import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function About() {
    return (
        <section id="about" className="py-24 bg-background border-b border-border scroll-mt-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6 tracking-tighter">
                            About the Event
                        </h2>
                        <div className="w-12 h-12 border-t-4 border-l-4 border-primary mb-8" />
                    </div>

                    <div className="md:col-span-8 space-y-8">
                        <div
                            className="border-l-2 border-primary pl-6"
                        >
                            <p className="text-xl md:text-2xl font-light leading-relaxed">
                                <strong className="font-bold text-primary">STEMXplore 2026</strong> celebrates India’s National Science Day through discovery, creativity, and innovation.
                            </p>
                        </div>



                        <div className="grid md:grid-cols-2 gap-8">
                            <div
                                className="bg-background border border-border p-6"
                            >
                                <h3 className="font-bold text-lg mb-4 text-accent">Our Mission</h3>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                    Empowering students through knowledge. Bringing together educators, parents, and thought leaders.
                                </p>
                            </div>

                            <div
                                className="bg-background border border-border p-6"
                            >
                                <h3 className="font-bold text-lg mb-4 text-accent">Program Highlights</h3>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                    Explore STEM beyond textbooks. Build future-ready skills through hands-on challenges.
                                </p>
                            </div>
                        </div>

                        <div>
                            <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold text-lg group">
                                <Link href="/about" className="flex items-center">
                                    Read Our Full Story
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    );
}
