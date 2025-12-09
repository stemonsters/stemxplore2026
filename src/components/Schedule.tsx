"use client";

import { Timeline } from "@/components/ui/timeline";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const scheduleData = [
    {
        day: "Day 1",
        date: "Feb 27, 2026",
        events: [
            {
                time: "05:00 PM - 07:00 PM",
                title: "Pre-Event Webinar",
                description: "Introduction to the themes, rules, and Q&A session for participants.",
                type: "Webinar",
            },
        ],
    },
    {
        day: "Day 2",
        date: "Feb 28, 2026",
        events: [
            {
                time: "09:00 AM - 12:00 PM",
                title: "Innovation Challenge: Final Round",
                description: "Final project sprint and submission.",
                type: "Competition",
            },
            {
                time: "01:00 PM - 03:00 PM",
                title: "Project Expo",
                description: "Showcase of student projects and models.",
                type: "Exhibition",
            },
            {
                time: "04:00 PM - 06:00 PM",
                title: "Valedictory Function",
                description: "Prize distribution and closing remarks.",
                type: "General",
            },
        ],
    },
];

export default function Schedule() {
    const timelineData = scheduleData.map((day) => ({
        title: day.day,
        content: (
            <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-sm">
                        {day.date}
                    </Badge>
                </div>
                {day.events.map((event, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 dark:border-accent/20 hover:border-primary/50 dark:hover:border-accent/50 transition-colors">
                        <CardContent className="p-5 space-y-3">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4 mr-2 text-primary" />
                                    {event.time}
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                    {event.type}
                                </Badge>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-foreground">{event.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {event.description}
                                </p>
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
