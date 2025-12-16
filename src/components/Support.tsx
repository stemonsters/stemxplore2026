"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Heart, Gift, ShoppingBag, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Support() {
    const partners = Array.from({ length: 10 });
    return (
        <section id="support" className="py-24 bg-muted/50 relative overflow-hidden border-b border-border scroll-mt-16">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,var(--background))]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-stretch">
                    {/* Left Side: Why Support */}
                    <div className="lg:col-span-5 flex">
                        <div className="flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6 w-fit">
                                <Heart className="w-3 h-3" />
                                <span>Support the Mission</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                                Empower the <br />
                                <span className="text-primary">Next Generation</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/50 pl-6">
                                STEMXplore is free for all student participants. In order to encourage students and maximize participation, we aim to maintain this philosophy. All funds generated through sponsorship, gifting partnerships, or merchandise sales will go exclusively toward organizing the event.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: How to Support Tabs */}
                    <div className="lg:col-span-7">
                        <div>
                            <Tabs defaultValue="sponsor" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 h-auto p-0 bg-transparent mb-8 rounded-none gap-0">
                                    <TabsTrigger
                                        value="sponsor"
                                        className="rounded-none border-b-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-base font-medium text-muted-foreground transition-all"
                                    >
                                        Sponsor
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="gifting"
                                        className="rounded-none border-b-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-base font-medium text-muted-foreground transition-all"
                                    >
                                        Partner
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="merch"
                                        className="rounded-none border-b-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-base font-medium text-muted-foreground transition-all"
                                    >
                                        Merch
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="sponsor" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 bg-primary/10 text-primary">
                                            <Handshake className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">Become a Sponsor</h3>
                                            <p className="text-muted-foreground">
                                                As a sponsor, your brand will be at the forefront of a transformative event connecting students, educators, and STEM leaders. Gain visibility among a highly engaged audience and showcase your commitment to advancing STEM education.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {["Logo placement on event materials and promotions", "Dedicated mentions during the event sessions", "Recognition in media outreach and post-event reports", "Connect with leading schools across India"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
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
                                            <p className="text-muted-foreground">
                                                Partner with us to provide gifts or prizes for participants. Whether it is educational tools, student accessories, children's products or vouchers, your contribution will directly inspire participants to continue their STEM journey.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {["Your logo featured on gifting materials", "Acknowledgement in the event's digital communications", "Direct engagement with participants", "Inspire students to continue their STEM journey"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
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
                                            <p className="text-muted-foreground">
                                                Support STEMXplore 2026 by purchasing our specially curated merchandise. Every purchase directly supports the organization of this event, ensuring its success and accessibility to a wider audience.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {["Limited edition t-shirts & hoodies", "Stickers, badges & accessories", "Every purchase supports the event", "Help shape the future of STEM education"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
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
                            </Tabs>
                        </div>
                    </div>
                </div>

                {/* Three Benefit Cards - Full Width */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                    <div className="p-4 bg-muted/50 border border-border">
                        <div className="text-lg font-bold text-primary mb-1">Enhance Brand Purpose</div>
                        <div className="text-sm text-muted-foreground">Align your brand with a meaningful cause: empowering the next generation through STEM education.</div>
                    </div>
                    <div className="p-4 bg-muted/50 border border-border">
                        <div className="text-lg font-bold text-primary mb-1">Reach 2000+ Community</div>
                        <div className="text-sm text-muted-foreground">Get your brand directly to the inbox of our actively engaged community of over 2000 parents across the country.</div>
                    </div>
                    <div className="p-4 bg-muted/50 border border-border">
                        <div className="text-lg font-bold text-primary mb-1">Create Brand Awareness</div>
                        <div className="text-sm text-muted-foreground">Gain visibility and recognition by showcasing your brand to a diverse audience of students, educators, and school leaders.</div>
                    </div>
                </div>

                {/* Event Partners Carousel */}
                <div className="mt-20">
                    <div className="mb-10 text-center">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                            Past Partners
                        </h3>
                    </div>

                    <div className="relative w-full flex overflow-hidden mask-gradient-to-r from-transparent via-black to-transparent">
                        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

                        <motion.div
                            className="flex gap-8 items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            style={{ width: "fit-content" }}
                        >
                            {/* First set of partners */}
                            {partners.map((_, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-muted/30 border border-border items-center justify-center p-6 hover:bg-muted/50 transition-colors"
                                >
                                    <span className="text-sm font-medium text-muted-foreground">Partner {index + 1}</span>
                                </div>
                            ))}

                            {/* Second set of partners for seamless loop */}
                            {partners.map((_, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex-shrink-0 w-[200px] h-[120px] flex rounded-xl bg-muted/30 border border-border items-center justify-center p-6 hover:bg-muted/50 transition-colors"
                                >
                                    <span className="text-sm font-medium text-muted-foreground">Partner {index + 1}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
