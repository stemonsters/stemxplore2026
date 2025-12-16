"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Sparkles, X, User, Mail, Phone, Building, Star, MonitorPlay, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WebinarRegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        isParent: false,
        organization: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataObj = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataObj.append(key, value.toString());
            });

            await fetch("https://script.google.com/macros/s/AKfycbzVwmOaJ3cE9KQ9Z2nBFuK7aB5kXa2AfAZ9c5k0XMLHVc8644OJ7f1pJ6DJ8h-yvuW1LQ/exec", {
                method: "POST",
                mode: "no-cors",
                body: formDataObj,
            });

            console.log("Form submitted:", formData);
            setShowSuccessModal(true);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                isParent: false,
                organization: "",
            });
        } catch (error) {
            console.error("Error submitting webinar registration:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section className="py-12 bg-background relative overflow-hidden border-b border-border">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Left Column - Info */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-none bg-primary/10 text-xs font-medium text-primary uppercase tracking-widest border border-primary/20">
                            <MonitorPlay className="w-3.5 h-3.5" />
                            Live Webinar
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground leading-tight">
                            Learning for Careers/ <br />
                            <span className="text-primary">Life in 2030</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                            How do we prepare ourselves and the next generation for careers that don't exist yet? Join our expert panelists as they explore the skills, mindsets, and learning strategies needed to thrive in 2030 and beyond.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                                    <Star className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Upskilling</h4>
                                    <p className="text-sm text-muted-foreground">Learn how to continuously adapt and grow your skillset for the future.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                                    <Users className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">2030 Careers</h4>
                                    <p className="text-sm text-muted-foreground">Discover emerging career paths and industries of the future.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Lifelong Learning</h4>
                                    <p className="text-sm text-muted-foreground">Strategies for continuous education in an ever-evolving world.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="relative">
                        {/* Decorative corners */}
                        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
                        <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
                        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />

                        <form
                            onSubmit={handleSubmit}
                            className="bg-card/50 backdrop-blur-sm border border-border p-8 space-y-6 shadow-xl"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                                    Reserve Your Spot
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Fill out the form below to receive joining details.
                                </p>
                            </div>

                            {/* Full Name */}
                            <div className="space-y-2">
                                <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                                    Full Name <span className="text-primary">*</span>
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="fullName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={(e) => handleChange("fullName", e.target.value)}
                                        required
                                        className="pl-9 h-11 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                                    Email Address <span className="text-primary">*</span>
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        required
                                        className="pl-9 h-11 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                                    Phone Number <span className="text-muted-foreground text-xs font-normal ml-1">(Optional)</span>
                                </Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                        className="pl-9 h-11 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            {/* Parent Toggle */}
                            <div className="flex items-center space-x-2 py-1">
                                <Checkbox
                                    id="isParent"
                                    checked={formData.isParent}
                                    onCheckedChange={(checked) => handleChange("isParent", checked as boolean)}
                                />
                                <Label
                                    htmlFor="isParent"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                >
                                    I am a parent
                                </Label>
                            </div>

                            {/* Organization - Conditional */}
                            <AnimatePresence>
                                {!formData.isParent && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="space-y-2 pb-1">
                                            <Label htmlFor="organization" className="text-sm font-medium text-foreground">
                                                Organization <span className="text-primary">*</span>
                                            </Label>
                                            <div className="relative">
                                                <Building className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    id="organization"
                                                    type="text"
                                                    placeholder="School or Company Name"
                                                    value={formData.organization}
                                                    onChange={(e) => handleChange("organization", e.target.value)}
                                                    required={!formData.isParent}
                                                    className="pl-9 h-11 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group mt-2"
                            >
                                {isSubmitting ? (
                                    "Submitting..."
                                ) : (
                                    <>
                                        Register for Webinar
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccessModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                        onClick={() => setShowSuccessModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md bg-card border border-border p-8 shadow-2xl"
                        >
                            <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-primary" />
                            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-primary" />
                            <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-primary" />
                            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-primary" />

                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="p-4 bg-primary/10 rounded-full relative">
                                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                                    <Sparkles className="w-10 h-10 text-primary relative z-10" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold font-mono tracking-tight">Registration Confirmed</h3>
                                    <p className="text-muted-foreground">
                                        You have successfully registered for the webinar. We have sent the joining details to your email.
                                    </p>
                                </div>

                                <Button
                                    onClick={() => setShowSuccessModal(false)}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-12 text-base font-semibold border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all"
                                >
                                    Close
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
