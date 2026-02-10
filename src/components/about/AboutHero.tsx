import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-background border-b border-border">
            {/* Background Gradients */}
            {/* Background Image and Overlay */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <Image
                    src="/images/about-hero-bg.jpg"
                    alt="About Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-white/80 z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Empowering Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                Innovators.
                            </span>
                        </h1>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                            STEMonsters is an organization committed to sparking curiosity and fostering innovation in young minds. We provide the platform for students to explore, create, and solve real-world problems through Science, Technology, Engineering, and Mathematics.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 h-auto rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group">
                                <Link href="https://stemonsters.com" target="_blank" rel="noopener noreferrer">
                                    Visit Website <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative flex justify-center items-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/images/stemonsters-logo.png"
                                alt="STEMonsters Logo"
                                width={500}
                                height={500}
                                className="object-contain w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
