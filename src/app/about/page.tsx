import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | STEMXplore 2026",
    description: "Learn about the mission, our story, and the passionate team behind STEMXplore 2026.",
    alternates: {
        canonical: "/about",
    },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import TeamGrid from "@/components/about/TeamGrid";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            <Header />
            <div className="flex-grow">
                <AboutHero />
                <OurStory />
                <TeamGrid />
            </div>
            <Footer />
        </main>
    );
}
