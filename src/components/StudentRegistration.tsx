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
import { ArrowRight, GraduationCap, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

            await fetch("https://script.google.com/macros/s/AKfycbwhMgb5faffDaZUiQ_sLiUMhpyEQhYjplowJNJluUpYDZ9w6G0NSeF4ryO14BwbEwnk/exec", {
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
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-none bg-primary/10 text-xs font-medium text-primary uppercase tracking-widest border border-primary/20">
                            <Sparkles className="w-3.5 h-3.5" />
                            Register Now
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground leading-tight">
                            Join the <br />
                            <span className="text-primary">STEMXplore 2026</span> <br />
                            Revolution
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                            Be part of India&apos;s most exciting virtual STEM symposium.
                            Register now to participate in competitions, attend panel discussions,
                            and showcase your innovation.
                        </p>

                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold text-xs">1</span>
                                </div>
                                <span>Fill in your details below</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold text-xs">2</span>
                                </div>
                                <span>Receive confirmation & event details via email</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold text-xs">3</span>
                                </div>
                                <span>Get ready to innovate on Mar 8 & Mar 15!</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        <div className="relative">
                            {/* Decorative corners */}
                            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
                            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
                            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />

                            <form
                                onSubmit={handleSubmit}
                                className="bg-card/50 backdrop-blur-sm border border-border p-6 space-y-4"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="p-1.5 bg-primary/10 rounded-lg">
                                        <GraduationCap className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground">Student Registration</h3>
                                </div>

                                {/* Student Name */}
                                <div className="space-y-1.5">
                                    <Label htmlFor="studentName" className="text-xs font-medium text-foreground">
                                        Student Name <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="studentName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={formData.studentName}
                                        onChange={(e) => handleChange("studentName", e.target.value)}
                                        required
                                        className="h-10 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-sm"
                                    />
                                </div>

                                {/* Student Email */}
                                <div className="space-y-1.5">
                                    <Label htmlFor="studentEmail" className="text-xs font-medium text-foreground">
                                        Student Email <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="studentEmail"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        value={formData.studentEmail}
                                        onChange={(e) => handleChange("studentEmail", e.target.value)}
                                        required
                                        className="h-10 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-sm"
                                    />
                                </div>

                                {/* Mobile & Grade Row */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="mobile" className="text-xs font-medium text-foreground">
                                            Mobile <span className="text-muted-foreground text-[10px]">(optional)</span>
                                        </Label>
                                        <Input
                                            id="mobile"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            value={formData.mobile}
                                            onChange={(e) => handleChange("mobile", e.target.value)}
                                            className="h-10 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-sm"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="grade" className="text-xs font-medium text-foreground">
                                            Grade <span className="text-primary">*</span>
                                        </Label>
                                        <Select
                                            value={formData.grade}
                                            onValueChange={(value) => handleChange("grade", value)}
                                            required
                                        >
                                            <SelectTrigger className="h-10 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-sm">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="6">Grade 6</SelectItem>
                                                <SelectItem value="7">Grade 7</SelectItem>
                                                <SelectItem value="8">Grade 8</SelectItem>
                                                <SelectItem value="9">Grade 9</SelectItem>
                                                <SelectItem value="10">Grade 10</SelectItem>
                                                <SelectItem value="11">Grade 11</SelectItem>
                                                <SelectItem value="12">Grade 12</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* School Name */}
                                <div className="space-y-1.5">
                                    <Label htmlFor="schoolName" className="text-xs font-medium text-foreground">
                                        Name of School <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="schoolName"
                                        type="text"
                                        placeholder="Enter your school name"
                                        value={formData.schoolName}
                                        onChange={(e) => handleChange("schoolName", e.target.value)}
                                        required
                                        className="h-10 rounded-none border-border bg-background/50 focus:border-primary focus:ring-primary/20 text-sm"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-1.5">
                                    <Label htmlFor="message" className="text-xs font-medium text-foreground">
                                        Message <span className="text-muted-foreground text-[10px]">(optional)</span>
                                    </Label>
                                    <textarea
                                        id="message"
                                        placeholder="Any questions or comments?"
                                        value={formData.message}
                                        onChange={(e) => handleChange("message", e.target.value)}
                                        rows={2}
                                        className="w-full rounded-none border border-border bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full h-11 text-sm bg-primary hover:bg-primary/90 text-primary-foreground rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        "Registering..."
                                    ) : (
                                        <>
                                            Register Now
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-muted-foreground text-center pt-2">
                                    By registering, you agree to receive event updates via email.
                                </p>
                            </form>
                        </div>
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

                                <Button
                                    onClick={() => setShowSuccessModal(false)}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-12 text-base font-semibold border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all"
                                >
                                    Continue Exploring
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
