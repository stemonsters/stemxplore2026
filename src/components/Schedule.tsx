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
                time: "10:00 AM - 10:15 AM IST",
                title: "Welcome Address",
                type: "Opening",
            },
            {
                time: "10:30 AM - 11:30 AM IST",
                title: "Junior Hackathon - Scratch Finals",
                type: "Competition",
            },
            {
                time: "11:45 AM - 12:30 PM IST",
                title: "Let's Talk STEM - Finals",
                type: "Competition",
            },
            {
                time: "07:00 PM - 08:00 PM IST",
                title: "Panel Discussion",
                type: "Panel",
            },
        ],
    },
    {
        title: "Mar 15, 2026",
        events: [
            {
                time: "11:00 AM IST",
                title: "Story Behind My Tech - Finals",
                type: "Competition",
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
                                <h4 className="text-xl font-bold text-foreground">{event.title}</h4>
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
