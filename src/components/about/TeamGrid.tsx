import { User, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const teamMembers = [
    {
        name: "Dr. Sonali Dasgupta",
        image: "/images/Team/sonali-dasgupta.webp",
        bio: "Founder @ STEMonsters | Building a better future, one STEM at a time.",
        linkedin: "https://www.linkedin.com/in/sonalidasgupta/",
    },
    {
        name: "Sowjanya Madirazu",
        image: "/images/Team/sowjanya.jpg",
        bio: "Educator @ STEMonsters",
    },
    {
        name: "Tahcin Sarwar",
        image: "/images/Team/tahcin.png",
        bio: "Tech nerd doing a business major.",
        linkedin: "https://www.linkedin.com/in/tahcinsarwar/",
    },
    {
        name: "Akshaya Kadambi",
        image: "/images/Team/akshaya-kadambi.jpg",
        bio: "Intern | Creative by instinct, electrical engineer by choice.",
        linkedin: "https://www.linkedin.com/in/akshaya-kadambi-reachout/",
    }
];

export default function TeamGrid() {
    return (
        <section className="py-24 bg-background border-b border-border">
            <div className="container mx-auto px-4">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Team STEMXplore 2026</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The passionate people behind this edition of STEMXplore.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <ScrollReveal key={index} className="group relative bg-card h-full" delay={0.1 + index * 0.1}>
                            <div className="border border-border hover:border-primary/50 transition-colors p-6 rounded-xl flex flex-col items-center text-center h-full">

                                {/* Member Image / Avatar */}
                                <div className="w-32 h-32 mb-8 relative flex items-center justify-center border-4 border-primary rounded-full p-0.5">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-background relative">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className={`object-cover ${member.name === "Sowjanya Madirazu" ? "scale-[1.35] origin-center" : ""}`}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-muted/30">
                                                <User className="w-12 h-12 text-muted-foreground" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-4">{member.name}</h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    {member.bio}
                                </p>

                                {/* Socials */}
                                {member.linkedin && (
                                    <div className="flex gap-4 pt-4 border-t border-border w-full justify-center">
                                        <Link href={member.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

