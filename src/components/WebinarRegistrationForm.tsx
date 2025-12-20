"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Sparkles, X, User, Mail, Phone, Building, Star, MonitorPlay, Users, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WebinarRegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
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

            await fetch("https://script.google.com/macros/s/AKfycbyDLo4v0ErB3JcxA1-a2thKcmJgoQhq9pJxMNqOwdFOJb2qfxpjg3_3uqQzLC2vxP0MdA/exec", {
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
                city: "",
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
                            "The 2030 Horizon and Beyond: <br />
                            <span className="text-primary mt-2 block">Skills, Mindsets, and Learning"</span>
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                            How do we prepare ourselves and the next generation for careers that don't exist yet? Join our expert panelists as they explore the skills, mindsets, and learning strategies needed to thrive in 2030 and beyond.
                        </p>

                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                                <Star className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Skills</h4>
                                <p className="text-base md:text-lg text-muted-foreground">Learn how to continuously adapt and grow your skillset for the future.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                                <Users className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Careers</h4>
                                <p className="text-base md:text-lg text-muted-foreground">Discover emerging career paths and industries of the future.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                                <Sparkles className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Human Intelligence</h4>
                                <p className="text-base md:text-lg text-muted-foreground">Strategies for continuous education in an ever-evolving world.</p>
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
                                <Label htmlFor="fullName" className="text-base font-medium text-foreground">
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
                                <Label htmlFor="email" className="text-base font-medium text-foreground">
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
                                <Label htmlFor="phone" className="text-base font-medium text-foreground">
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

                            {/* City */}
                            <div className="space-y-2">
                                <Label htmlFor="city" className="text-base font-medium text-foreground">
                                    City <span className="text-muted-foreground text-xs font-normal ml-1">(Optional)</span>
                                </Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="city"
                                        type="text"
                                        placeholder="e.g. Bangalore"
                                        value={formData.city}
                                        onChange={(e) => handleChange("city", e.target.value)}
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
                                            <Label htmlFor="organization" className="text-base font-medium text-foreground">
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

                                <div className="w-full space-y-4">
                                    <a
                                        href="https://chat.whatsapp.com/JtoS9pQkhX6Kgk4PwYvPXs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full h-12 text-base font-semibold rounded-none bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
                                    >
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        Join WhatsApp Group
                                    </a>
                                    <p className="text-sm text-muted-foreground text-center">Get official updates and announcements</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
