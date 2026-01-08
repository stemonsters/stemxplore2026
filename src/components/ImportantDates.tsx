"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DateItem {
    id: number;
    date: string;
    month: string;
    year: string;
    title: string;
}

const dates: DateItem[] = [
    { id: 1, date: "22", month: "Dec", year: "'25", title: "Announcement Date" },
    { id: 2, date: "25", month: "Dec", year: "'25", title: "Registrations Open for Students" },
    { id: 3, date: "25", month: "Dec", year: "'25", title: "Registrations Open for Webinar" },
    { id: 4, date: "01", month: "Mar", year: "'26", title: "Submission Deadline: Let's Talk STEM" },
    { id: 5, date: "01", month: "Mar", year: "'26", title: "Submission Deadline: Story Behind My Tech" },
    { id: 6, date: "03", month: "Mar", year: "'26", title: "Finalists: Let's Talk STEM" },
    { id: 7, date: "03", month: "Mar", year: "'26", title: "Finalists: Story Behind My Tech" },
    { id: 8, date: "08", month: "Mar", year: "'26", title: "Hackathon Starts" },
    { id: 9, date: "12", month: "Mar", year: "'26", title: "Hackathon Finalists Announced" },
    { id: 10, date: "15", month: "Mar", year: "'26", title: "Finals: Story Behind My Tech" },
    { id: 11, date: "15", month: "Mar", year: "'26", title: "Award Ceremony & Grand Finale at IISc" },
];

export default function ImportantDates() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Auto-scroll logic
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev < dates.length - 1 ? prev + 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]); // Re-run when index or auto-playing state changes

    const nextDate = () => {
        setCurrentIndex((prev) => (prev < dates.length - 1 ? prev + 1 : prev));
    };

    const prevDate = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const goToDate = (index: number) => {
        setCurrentIndex(index);
    };

    // Brand Palette 
    // Active: primary (Teal), Inactive: solid white/grey
    const activeColor = "bg-primary";
    const inactiveColor = "bg-[#f8fafc]"; // Solid greyish white
    const activeTextColor = "text-primary-foreground";
    const inactiveTextColor = "text-muted-foreground";
    const labelColor = "text-primary";

    // Adjusted for 5 items visibility (Desktop)
    const itemWidth = isMobile ? 180 : 230;

    return (
        <section
            className="py-6 md:py-8 bg-background overflow-hidden relative border-y border-border/50"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="container px-4 md:px-6 mx-auto">
                {/* Heading - Left-aligned on mobile, Centered on Desktop */}
                <div className="flex flex-col items-start md:items-center mb-4 md:mb-6 text-left md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-foreground">Important Dates</h2>
                    <div className="w-16 md:w-24 h-1 bg-primary rounded-full mt-1" />
                </div>

                <div className="relative max-w-7xl mx-auto h-[240px] md:h-[320px] flex items-center justify-center">
                    {/* The Connecting Line - At the back of everything */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

                    {/* Navigation Buttons - Side-positioned on desktop, Bottom-right on mobile */}
                    <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 z-20">
                        <Button
                            variant="outline"
                            size="icon"
                            className={cn(
                                "rounded-full h-10 w-10 md:h-12 md:w-12 border border-border bg-background transition-all shadow-md",
                                currentIndex === 0
                                    ? "opacity-100 text-muted-foreground/30 border-muted bg-background cursor-not-allowed"
                                    : "opacity-100 text-muted-foreground hover:bg-muted hover:text-primary cursor-pointer"
                            )}
                            onClick={prevDate}
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                    </div>

                    <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 z-20">
                        <Button
                            variant="outline"
                            size="icon"
                            className={cn(
                                "rounded-full h-10 w-10 md:h-12 md:w-12 border border-border bg-background transition-all shadow-md",
                                currentIndex === dates.length - 1
                                    ? "opacity-100 text-muted-foreground/30 border-muted bg-background cursor-not-allowed"
                                    : "opacity-100 text-muted-foreground hover:bg-muted hover:text-primary cursor-pointer"
                            )}
                            onClick={nextDate}
                            disabled={currentIndex === dates.length - 1}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <motion.div
                            className="flex items-center absolute left-1/2 z-10"
                            animate={{
                                x: `calc(-${currentIndex * itemWidth}px - ${itemWidth / 2}px)`
                            }}
                            initial={false}
                            transition={{
                                type: "tween",
                                ease: "easeInOut",
                                duration: 0.5
                            }}
                        >
                            {dates.map((item, index) => {
                                const isActive = index === currentIndex;
                                const diff = index - currentIndex;

                                return (
                                    <motion.div
                                        key={item.id}
                                        className="relative flex flex-col items-center md:items-center justify-center shrink-0 cursor-pointer"
                                        style={{ width: `${itemWidth}px` }}
                                        onClick={() => goToDate(index)}
                                        animate={{
                                            opacity: Math.abs(diff) > (isMobile ? 1 : 2) ? 0.3 : 1,
                                            scale: isActive ? 1.05 : 0.8,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {/* Date Circle */}
                                        <motion.div
                                            className={cn(
                                                "rounded-full flex flex-col items-center justify-center shadow-md md:shadow-lg transition-all duration-500 z-10 border-2",
                                                isActive
                                                    ? `${activeColor} ${activeTextColor} border-primary w-32 h-32 md:w-44 md:h-44 scale-110`
                                                    : `${inactiveColor} ${inactiveTextColor} border-border w-20 h-20 md:w-24 md:h-24`
                                            )}
                                        >
                                            <motion.span
                                                className="font-bold tracking-tight text-center"
                                                animate={{
                                                    fontSize: isActive ? (isMobile ? "1.75rem" : "3.75rem") : (isMobile ? "1rem" : "1.5rem"),
                                                    lineHeight: isActive ? (isMobile ? "2rem" : "4rem") : (isMobile ? "1.25rem" : "1.75rem")
                                                }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            >
                                                {item.date}
                                            </motion.span>
                                            <motion.span
                                                className="font-medium text-center"
                                                animate={{
                                                    fontSize: isActive ? (isMobile ? "0.875rem" : "1.25rem") : (isMobile ? "0.6rem" : "0.875rem")
                                                }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            >
                                                {item.month} {item.year}
                                            </motion.span>
                                        </motion.div>

                                        {/* Label (Only for Active) */}
                                        <div className="absolute top-[100%] mt-3 md:mt-4 w-[240px] md:w-[450px] text-center">
                                            <AnimatePresence mode="wait">
                                                {isActive && (
                                                    <motion.h3
                                                        key={`title-${item.id}`}
                                                        className={cn("text-base md:text-xl font-bold tracking-tight leading-tight px-4 whitespace-pre-line", labelColor)}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        {item.title.includes(": ")
                                                            ? item.title.replace(": ", ":\n")
                                                            : item.title
                                                        }
                                                    </motion.h3>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Navigation Buttons - Bottom Right */}
                <div className="flex md:hidden justify-end gap-3 mt-4 pr-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "rounded-full h-10 w-10 border border-border bg-background transition-all shadow-sm",
                            currentIndex === 0
                                ? "opacity-30 cursor-not-allowed"
                                : "opacity-100 hover:bg-muted"
                        )}
                        onClick={prevDate}
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "rounded-full h-10 w-10 border border-border bg-background transition-all shadow-sm",
                            currentIndex === dates.length - 1
                                ? "opacity-30 cursor-not-allowed"
                                : "opacity-100 hover:bg-muted"
                        )}
                        onClick={nextDate}
                        disabled={currentIndex === dates.length - 1}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
