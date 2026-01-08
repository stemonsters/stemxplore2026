import { Badge } from "@/components/ui/badge";
import { Atom, Brain, Rocket, Code, Microscope, Globe } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-background border-b border-border">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5 uppercase tracking-widest">
                    Our Mission
                </Badge>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                    Empowering the Next Generation <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        of Innovators.
                    </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                    Unlocking potential through STEM. We believe every student has the power to change the world: we just provide the launchpad.
                </p>
            </div>
        </section>
    );
}
