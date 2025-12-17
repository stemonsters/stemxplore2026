
import { User, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const teamMembers = [
    {
        name: "Dr. Sonali Dasgupta",
        role: "Founder & Director",
        bio: "Ph.D. in Physics with 15+ years of experience in STEM education and curriculum design.",
        tags: ["Visionary", "Educator"]
    },
    {
        name: "Tahcin Sarwar",
        role: "Head of Technology",
        bio: "Tech enthusiast ensuring seamless digital experiences for our virtual platforms.",
        tags: ["Tech Lead", "Innovator"]
    },
    {
        name: "Akshaya",
        role: "Community Manager",
        bio: "Building bridges between schools, parents, and mentors to foster a supportive community.",
        tags: ["Community", "Outreach"]
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <ScrollReveal key={index} className="group relative bg-card h-full" delay={0.1 + index * 0.1}>
                            <div className="border border-border hover:border-primary/50 transition-colors p-6 rounded-xl flex flex-col items-center text-center h-full">

                                {/* Avatar Placeholder */}
                                <div className="w-24 h-24 mb-6 relative">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors" />
                                    <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center border border-border">
                                        <User className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    {member.bio}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 justify-center mb-6">
                                    {member.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 bg-accent/5 text-accent text-[10px] uppercase tracking-wider font-medium rounded-full border border-accent/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Socials */}
                                <div className="flex gap-4 pt-4 border-t border-border w-full justify-center">
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </Link>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Twitter className="w-4 h-4" />
                                    </Link>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
