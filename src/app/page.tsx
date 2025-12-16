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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
      <PastEditions />
      <Footer />
    </main>
  );
}
