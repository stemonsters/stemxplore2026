"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NotificationItem {
    id: string;
    text: string;
    linkText?: string;
    link?: string;
    highlight?: boolean;
}

const notifications: NotificationItem[] = [
    {
        id: "registration-closed",
        text: "Contest Registrations are now Closed",
        highlight: true,
    },
    {
        id: "recording",
        text: "Missed the information live session? ",
        linkText: "Watch the recording now!",
        link: "https://youtu.be/z0ehRXQmBdk",
        highlight: true,
    },
    { id: "submissions", text: "Mar 01 '26: Submission Deadline" },
    { id: "hackathon", text: "Mar 08 '26: Hackathon Starts" },
    { id: "hackathon-finalists", text: "Mar 12 '26: Finalists Announced" },
    { id: "finale", text: "Mar 15 '26: Grand Finale at IISc" },
];

export default function NotificationMarquee() {
    return (
        <div className="w-full lg:max-w-[80vw] mx-auto">
            <div className="bg-muted/30 border-b border-border text-muted-foreground py-1.5 overflow-hidden relative z-50 text-xs sm:text-sm rounded-t-lg md:rounded-b-none">
                <div className="flex select-none">
                    <MarqueeContent />
                    <MarqueeContent />
                    <MarqueeContent />
                    <MarqueeContent />
                </div>
            </div>
        </div>
    );
}

function MarqueeContent() {
    return (
        <motion.div
            className="flex items-center shrink-0"
            animate={{ x: "-100%" }}
            transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 50,
            }}
        >
            {notifications.map((item) => (
                <div key={item.id} className="flex items-center mx-6 sm:mx-8 font-medium whitespace-nowrap">
                    <span className="opacity-80">{item.text}</span>
                    {item.link && item.linkText && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:underline hover:text-primary/80 transition-colors cursor-pointer ml-1"
                        >
                            <span>{item.linkText}</span>
                            <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                    )}
                    <span className="ml-6 sm:ml-8 opacity-20">•</span>
                </div>
            ))}
        </motion.div>
    );
}
