"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Users, Lightbulb, MessageSquare, BookOpen, Trophy, Code, Cpu } from "lucide-react";

export default function EventBlocks() {
    const leftColumnEvents = [
        {
            title: "Expert Panel Discussion",
            icon: <Users className="w-5 h-5" />,
            description: "Topic: The 2030 Horizon and Beyond",
        },
        {
            title: "Keynote Speech",
            icon: <Lightbulb className="w-5 h-5" />,
            description: "Inspiring talk on the future of STEM.",
        },
    ];

    const rightColumnEvents = [
        {
            title: "Let's Talk STEM",
            icon: <MessageSquare className="w-5 h-5" />,
            description: "3 - Minute STEM Talks - Finale",
        },
        {
            title: "Story Behind My Tech",
            icon: <BookOpen className="w-5 h-5" />,
            description: "Engineering Energy Efficient Communities",
        },
        {
            title: "Junior Hackathon",
            icon: <Code className="w-5 h-5" />,
            description: "Scratch Based Coding Contest",
        },
    ];

    const EventList = ({ events, title }: { events: any[], title: string }) => (
        <div className="h-full border border-border bg-background">
            <div className="p-4 border-b border-border bg-muted/30">
                <h3 className="font-bold text-lg tracking-tight uppercase">{title}</h3>
            </div>
            <div className="divide-y divide-border">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="group hover:bg-primary/5 transition-colors cursor-pointer p-4 flex items-start gap-4"
                    >
                        <div className="mt-1 text-muted-foreground group-hover:text-primary transition-colors">
                            {event.icon}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{event.title}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-1">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-20 container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <EventList events={leftColumnEvents} title="For Parents & Educators" />
                <EventList events={rightColumnEvents} title="Student Contests" />
            </div>
        </section>
    );
}
