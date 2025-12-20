"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowRight, GraduationCap, MapPin, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

export default function StudentRegistration() {
    const [formData, setFormData] = useState({
        studentName: "",
        studentEmail: "",
        mobile: "",
        grade: "",
        schoolName: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create form data object
            const formDataObj = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataObj.append(key, value);
            });

            await fetch("https://script.google.com/macros/s/AKfycbwEyYH-tewLZpl8XodSWHvgjJt2oM-Q9kATKH-My_YyiciIcpFaUcbOBGHSDqjP9LP9dA/exec", {
                method: "POST",
                mode: "no-cors",
                body: formDataObj,
            });

            // alert("Registration submitted successfully! We'll be in touch soon.");
            setShowSuccessModal(true);
            setFormData({
                studentName: "",
                studentEmail: "",
                mobile: "",
                grade: "",
                schoolName: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section id="register" className="py-24 bg-background relative overflow-hidden scroll-mt-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
                    {/* Left Column - Info */}
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-none bg-primary/10 text-xs font-medium text-primary uppercase tracking-widest border border-primary/20">
                            <Sparkles className="w-3.5 h-3.5" />
                            Register Now
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-foreground leading-tight">
                            Join the <br />
                            <span className="text-primary">STEMXplore 2026</span> <br />
                            Revolution
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                            Be part of India&apos;s most exciting virtual STEM symposium.
                            Register now to participate in competitions, attend panel discussions,
                            and showcase your innovation.
                        </p>

                        <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-primary font-bold text-base">1</span>
                                </div>
                                <span>Fill in your details below</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-primary font-bold text-base">2</span>
                                </div>
                                <span>Receive confirmation & event details via email</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-primary font-bold text-base">3</span>
                                </div>
                                <span>Get ready to innovate on Mar 8 & Mar 15!</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column - Form */}
                    <ScrollReveal delay={0.1}>
                        <div className="relative">
                            {/* Decorative corners */}
                            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
                            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
                            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />

                            <form
                                onSubmit={handleSubmit}
                                className="bg-card/50 backdrop-blur-sm border border-border p-6 md:p-8 space-y-6"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <GraduationCap className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Student Registration</h3>
                                </div>

                                {/* Student Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="studentName" className="text-base font-medium text-foreground">
                                        Student Name <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="studentName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={formData.studentName}
                                        onChange={(e) => handleChange("studentName", e.target.value)}
                                        required
                                        className="h-12 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-base"
                                    />
                                </div>

                                {/* Student Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="studentEmail" className="text-base font-medium text-foreground">
                                        Student Email <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="studentEmail"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        value={formData.studentEmail}
                                        onChange={(e) => handleChange("studentEmail", e.target.value)}
                                        required
                                        className="h-12 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-base"
                                    />
                                </div>

                                {/* Mobile & Grade Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="mobile" className="text-base font-medium text-foreground">
                                            Mobile <span className="text-muted-foreground text-xs">(optional)</span>
                                        </Label>
                                        <Input
                                            id="mobile"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            value={formData.mobile}
                                            onChange={(e) => handleChange("mobile", e.target.value)}
                                            className="h-12 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-base"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="grade" className="text-base font-medium text-foreground">
                                            Grade <span className="text-primary">*</span>
                                        </Label>
                                        <Select
                                            value={formData.grade}
                                            onValueChange={(value) => handleChange("grade", value)}
                                            required
                                        >
                                            <SelectTrigger className="h-12 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-base">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="3-6">Grades 3-6</SelectItem>
                                                <SelectItem value="7-9">Grades 7-9</SelectItem>
                                                <SelectItem value="10-12">Grades 10-12</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* School Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="schoolName" className="text-base font-medium text-foreground">
                                        Name of School <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="schoolName"
                                        type="text"
                                        placeholder="Enter your school name"
                                        value={formData.schoolName}
                                        onChange={(e) => handleChange("schoolName", e.target.value)}
                                        required
                                        className="h-12 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-base"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-base font-medium text-foreground">
                                        Message <span className="text-muted-foreground text-xs">(optional)</span>
                                    </Label>
                                    <textarea
                                        id="message"
                                        placeholder="Any questions or comments?"
                                        value={formData.message}
                                        onChange={(e) => handleChange("message", e.target.value)}
                                        rows={3}
                                        className="w-full rounded-none border border-border bg-background/50 px-3 py-3 text-base placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        "Registering..."
                                    ) : (
                                        <>
                                            Register Now
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-sm text-muted-foreground text-center pt-2">
                                    By registering, you agree to receive event updates via email.
                                </p>
                            </form>
                        </div>
                    </ScrollReveal>
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
                            {/* Decorative corners */}
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
                                        Thank you for joining STEMXplore 2026! We have received your registration and sent a confirmation to your email.
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
