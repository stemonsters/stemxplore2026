import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STEMXplore 2026 | National Science Day Symposium",
  description: "Join India's most exciting virtual STEM symposium. Participate in hackathons, panel discussions, and showcase your innovation.",
  alternates: {
    canonical: "/",
  },
};

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StudentContestsHighlight from "@/components/StudentContestsHighlight";
import EventBlocks from "@/components/EventBlocks";
import FeaturedEvent from "@/components/FeaturedEvent";

import StudentContestsDetailed from "@/components/StudentContestsDetailed";
import Schedule from "@/components/Schedule";
import About from "@/components/About";
import SchoolRegistration from "@/components/SchoolRegistration";
import StudentRegistration from "@/components/StudentRegistration";
import Support from "@/components/Support";
import PastEditions from "@/components/PastEditions";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StructuredData />
      <Header />
      <Hero />
      <StudentContestsHighlight />

      <FeaturedEvent />
      <StudentContestsDetailed />

      <Schedule />
      <About />
      <SchoolRegistration />
      <Support />
      <StudentRegistration />
      <div className="flex flex-col md:min-h-[calc(100vh-4rem)]">
        <PastEditions />
        <Footer />
      </div>
    </main>
  );
}
