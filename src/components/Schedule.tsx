"use client";

import { Timeline } from "@/components/ui/timeline";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const scheduleData = [
    {
        day: "Day 1",
        date: "Mar 8, 2026",
        events: [
            {
                time: "07:00 PM - 08:00 PM",
                title: "Panel Discussion",
                description: "Can AI improve cognitive skills without emotional skills? Join 3 expert panelists for this thought-provoking discussion.",
                type: "Panel",
            },
        ],
    },
    {
        day: "Day 2",
        date: "Mar 15, 2026",
        events: [
            {
                time: "10:00 AM - 10:15 AM IST",
                title: "Welcome Address",
                description: "Welcome address by Dr. Sonali Dasgupta, setting the stage for an inspiring day of innovation.",
                type: "Keynote",
            },
            {
                time: "10:30 AM - 11:30 AM IST",
                title: "Junior Hackathon - Scratch Finals",
                description: "Young coders present their Scratch projects with video explanations of their code.",
                type: "Competition",
            },
            {
                time: "11:45 AM - 12:30 PM IST",
                title: "Let's Talk STEM - Finals",
                description: "7 finalists present on the topic 'Science is not necessary when we have AI'. Judged live on stage.",
                type: "Competition",
            },
            {
                time: "12:45 PM - 01:30 PM IST",
                title: "Story Behind My Tech - Finals",
                description: "Finalists showcase their diverse tech solutions including scientific models, Arduino projects, and apps.",
                type: "Competition",
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
