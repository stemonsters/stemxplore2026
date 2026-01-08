import { Target, Rocket, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function OurStory() {
    return (
        <section className="py-20 bg-muted/50 border-y border-border relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side */}
                    <ScrollReveal className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

                        <div className="relative bg-card border border-border p-8 rounded-xl shadow-lg">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <Rocket className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Virtual Symposium</h3>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                            A 2-day symposium starting with a virtual track and culminating in-person at IISc Bangalore.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                                        <Target className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Innovation First</h3>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                            Focusing on hands-on challenges and creative problem-solving rather than rote learning.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <Lightbulb className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Community Led</h3>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                            Bringing together students, educators, parents, and industry experts on a single platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Text Side */}
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Celebrating Science, <br />
                            <span className="text-primary">Igniting Innovation</span>
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                            <p>
                                <strong>STEMXplore 2026</strong> is a premier symposium starting with a virtual track for students across the nation and culminating in a grand finale at IISc Bangalore. Our goal is simple: to celebrate India’s National Science Day through discovery, creativity, and practical application.
                            </p>
                            <p>
                                We believe that true learning happens beyond textbooks. This event provides a unique platform for young minds (Grades 3-12) to showcase their ideas, compete in hackathons, and engage with thought leaders in the field of STEM.
                            </p>
                            <p>
                                Whether it's building a project in Scratch, debating the future of AI, or presenting a scientific model, STEMXplore is about empowering the next generation of innovators with the skills they need for the future.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
