"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Heart, Gift, ShoppingBag, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Support() {
    return (
        <section id="support" className="py-24 bg-background relative overflow-hidden border-b border-border scroll-mt-16">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,var(--background))]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side: Why Support */}
                    <div className="lg:col-span-5">
                        <div
                            className="sticky top-24"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
                                <Heart className="w-3 h-3" />
                                <span>Support the Mission</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                                Empower the <br />
                                <span className="text-primary">Next Generation</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-primary/50 pl-6">
                                Your contribution directly fuels innovation. By supporting STEMXplore, you bridge the gap between education and industry, providing students with the resources they need to build a better future.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-muted/50 border border-border">
                                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Impact on Students</div>
                                </div>
                                <div className="p-4 bg-muted/50 border border-border">
                                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Partner Schools</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: How to Support Tabs */}
                    <div className="lg:col-span-7">
                        <div>
                            <Tabs defaultValue="merch" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 h-auto p-0 bg-transparent border-b border-border mb-8 rounded-none gap-8">
                                    <TabsTrigger
                                        value="merch"
                                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0 text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
                                    >
                                        Merch
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="sponsor"
                                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0 text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
                                    >
                                        Sponsor
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="gifting"
                                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0 text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
                                    >
                                        Partner
                                    </TabsTrigger>
                                </TabsList>

                                <div className="min-h-[400px]">
                                    <TabsContent value="merch" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 bg-primary/10 text-primary">
                                                <ShoppingBag className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">Purchase Event Merchandise</h3>
                                                <p className="text-muted-foreground">
                                                    Show your support by purchasing official STEMXplore 2026 merchandise.
                                                    100% of the proceeds go towards funding student scholarships and providing resources for underfunded schools.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {["Limited edition t-shirts & hoodies", "Stickers, badges & accessories", "Global shipping available", "Support a good cause"].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-6">
                                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 h-auto rounded-none text-base group w-full sm:w-auto border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                                                Learn More
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="sponsor" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 bg-primary/10 text-primary">
                                                <Handshake className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">Become a Corporate Sponsor</h3>
                                                <p className="text-muted-foreground">
                                                    Gain visibility among thousands of students, educators, and tech enthusiasts.
                                                    Sponsorship tiers include logo placement, speaking opportunities, and direct access to top talent.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {["Brand visibility on all materials", "Speaking slots in webinars", "Virtual expo booth space", "Access to resume database"].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-6">
                                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 h-auto rounded-none text-base group w-full sm:w-auto border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                                                Learn More
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
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
                                                    Help us reward excellence! We are looking for partners to provide prizes for our hackathons
                                                    and contests. This could be hardware, software licenses, educational kits, or vouchers.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {["Product placement in showcases", "Social media shoutouts", "Direct engagement with winners", "Tax deduction benefits"].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-6">
                                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 h-auto rounded-none text-base group w-full sm:w-auto border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                                                Learn More
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
