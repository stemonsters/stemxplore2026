"use client";

import { Timeline } from "@/components/ui/timeline";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const scheduleData = [
    {
        title: "Mar 8, 2026",
        events: [
            {
                time: "10:00 AM IST",
                title: "Welcome Address by Dr. Sonali Dasgupta",
                type: "Opening",
            },
            {
                time: "10:30 AM IST",
                title: "Junior Hackathon | Grades 3 - 5",
                description: "Scratch Based Coding Contest",
                type: "Contest",
            },
            {
                time: "11:45 AM IST",
                title: "Let's Talk STEM | Grades 7 - 12",
                description: "3 - Minute STEM Talks - Finale",
                type: "Contest",
            },
        ],
    },
    {
        title: "Mar 15, 2026",
        events: [
            {
                time: "10:30 AM IST",
                title: "Expert Panel Discussion",
                description: "Topic: The 2030 Horizon and Beyond",
                type: "Panel",
            },
            {
                time: "12:00 noon IST",
                title: "Story Behind My Tech | Grades 7 - 12",
                description: "\"Engineering Energy Efficient Communities\"",
                type: "Contest",
            },
        ],
    },
];

export default function Schedule() {
    const timelineData = scheduleData.map((day) => ({
        title: day.title,
        content: (
            <div className="space-y-6">
                {day.events.map((event, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 dark:border-accent/20 hover:border-primary/50 dark:hover:border-accent/50 transition-colors">
                        <CardContent className="p-5 flex flex-col gap-3">
                            <div className="flex items-center justify-between gap-3">
                                <span className="flex items-center text-sm text-muted-foreground font-mono">
                                    <Clock className="w-4 h-4 mr-2 text-primary" />
                                    {event.time}
                                </span>
                                <Badge variant="outline" className="shrink-0 px-3 py-1 text-xs md:text-sm font-medium border-primary/20 text-primary bg-primary/5 uppercase tracking-wider">
                                    {event.type}
                                </Badge>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-lg md:text-xl font-bold text-foreground leading-snug">{event.title}</h4>
                                {event.description && (
                                    <p className="text-sm md:text-base text-muted-foreground">{event.description}</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        ),
    }));

    return (
        <section id="schedule" className="bg-background relative overflow-hidden scroll-mt-16">
            <Timeline data={timelineData} />
        </section>
    );
}
