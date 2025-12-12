import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StudentContestsHighlight from "@/components/StudentContestsHighlight";
import EventBlocks from "@/components/EventBlocks";
import FeaturedEvent from "@/components/FeaturedEvent";

import StudentContestsDetailed from "@/components/StudentContestsDetailed";
import JudgesMentors from "@/components/JudgesMentors";
import Schedule from "@/components/Schedule";
import About from "@/components/About";
import SchoolRegistration from "@/components/SchoolRegistration";
import StudentRegistration from "@/components/StudentRegistration";
import EventPartners from "@/components/EventPartners";
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
      <JudgesMentors />
      <Schedule />
      <About />
      <EventPartners />
      <SchoolRegistration />
      <Support />
      <StudentRegistration />
      <PastEditions />
      <Footer />
    </main>
  );
}
