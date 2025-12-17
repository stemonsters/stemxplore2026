"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Heart, Gift, ShoppingBag, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

export default function Support() {
    const partners = [
        "Karakuri-logo.webp", "anydlogo.webp", "doughremom-logo.webp",
        "earthandaroma-logo.png", "enlit-kids.webp", "kornayas-logo.png", "newsahoot-logo.jpg",
        "ortus-logo.png", "peepaltree-logo.webp", "prithvimitra-logo.webp", "souldesibysj-logo.jpg",
        "totsandmoms-logo.jpg", "wonderwhales-logo.jpeg", "cornucopia.webp"
    ];
    const [isPaused, setIsPaused] = useState(false);
    return (
        <section id="support" className="py-24 bg-muted/50 relative overflow-hidden border-b border-border scroll-mt-16">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,var(--background))]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Why Support */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-none bg-primary/10 text-sm font-medium text-primary tracking-widest border border-primary/20">
                            <Heart className="w-3 h-3" />
                            SUPPORT THE MISSION
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
                            Empower the <br />
                            <span className="text-primary">Next Generation</span>
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-primary font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xl mb-1">Enhance Brand Purpose</h3>
                                    <p className="text-lg md:text-xl leading-relaxed">Align your brand with a meaningful cause empowering the next generation.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-primary font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xl mb-1">Reach 2000+ Community</h3>
                                    <p className="text-lg md:text-xl leading-relaxed">Reach our engaged community of over 2000 parents directly.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-primary font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xl mb-1">Create Brand Awareness</h3>
                                    <p className="text-lg md:text-xl leading-relaxed">Showcase your brand to a diverse audience of students and educators.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: How to Support Tabs */}
                    <div className="w-full">
                        <div>
                            <Tabs defaultValue="sponsor" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 h-auto p-0 bg-transparent mb-8 rounded-none gap-0">
                                    <TabsTrigger
                                        value="sponsor"
                                        className="rounded-none border-b-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-xs md:text-base font-medium text-muted-foreground transition-all"
                                    >
                                        Sponsor
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="gifting"
                                        className="rounded-none border-b-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-xs md:text-base font-medium text-muted-foreground transition-all"
                                    >
                                        Partner
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="merch"
                                        className="rounded-none border-b-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-xs md:text-base font-medium text-muted-foreground transition-all"
                                    >
                                        Merch
                                    </TabsTrigger>
                                </TabsList>

                                <div className="border border-border bg-card/30 p-6 rounded-xl min-h-[400px]">
                                    <TabsContent value="sponsor" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 bg-primary/10 text-primary">
                                                <Handshake className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">Become a Sponsor</h3>
                                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                                    Position your brand at the forefront of STEM education. Gain visibility among a highly engaged audience of students, educators, and leaders.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {["Logo placement on event materials and promotions", "Dedicated mentions during the event sessions", "Recognition in media outreach and post-event reports", "Connect with leading schools across India"].map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-lg text-muted-foreground">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-6">
                                            <a href="https://api.whatsapp.com/send?phone=919741165171&text=Become%20A%20Sponsor" target="_blank" rel="noopener noreferrer">
                                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none group w-full sm:w-auto border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                                                    Contact Us
                                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </a>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="gifting" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 bg-primary/10 text-primary">
                                                <Gift className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">Become a Gifting Partner</h3>
                                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                                    Provide gifts or prizes to inspire participants. Your contribution of educational tools or vouchers will directly encourage students on their STEM journey.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {["Your logo featured on gifting materials", "Acknowledgement in the event's digital communications", "Direct engagement with participants", "Inspire students to continue their STEM journey"].map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-lg text-muted-foreground">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-6">
                                            <a href="https://api.whatsapp.com/send?phone=919741165171&text=Become%20A%20Gifting%20Partner" target="_blank" rel="noopener noreferrer">
                                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none group w-full sm:w-auto border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                                                    Contact Us
                                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </a>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="merch" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 bg-primary/10 text-primary">
                                                <ShoppingBag className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">Purchase Event Merchandise</h3>
                                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                                    Support STEMXplore 2026 by purchasing our curated merchandise. Every purchase helps organize this event and ensures accessibility for all students.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {["Limited edition t-shirts & hoodies", "Stickers, badges & accessories", "Every purchase supports the event", "Help shape the future of STEM education"].map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-lg text-muted-foreground">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-6">
                                            <a href="https://stemonsters.com/shop/" target="_blank" rel="noopener noreferrer">
                                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none group w-full sm:w-auto border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                                                    Shop Now
                                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </a>
                                        </div>
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>

                {/* Event Partners Carousel */}
                <div className="mt-20">
                    <div className="mb-10 text-center">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                            Past Partners
                        </h3>
                    </div>

                    <div className="relative w-full flex overflow-hidden mask-gradient-to-r from-transparent via-black to-transparent group">
                        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

                        <div
                            className="flex gap-8 items-center animate-scroll group-hover:[animation-play-state:paused]"
                            style={{ width: "fit-content" }}
                        >
                            {/* First set of partners */}
                            {partners.map((partner, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-white border border-border items-center justify-center p-2 hover:bg-white/80 transition-colors"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={`/images/past-partners/${partner}`}
                                            alt={`Partner ${index + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Second set of partners for seamless loop */}
                            {partners.map((partner, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-white border border-border items-center justify-center p-2 hover:bg-white/80 transition-colors"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={`/images/past-partners/${partner}`}
                                            alt={`Partner ${index + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
