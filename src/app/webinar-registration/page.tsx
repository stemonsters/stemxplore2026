import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Webinar Registration | STEMXplore 2026",
    description: "Register for the upcoming 'The 2030 Horizon and Beyond' webinar with industry experts.",
    alternates: {
        canonical: "/webinar-registration",
    },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebinarRegistrationForm from "@/components/WebinarRegistrationForm";

export default function WebinarRegistrationPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            <Header />
            <div className="flex-grow pt-16">
                <WebinarRegistrationForm />
            </div>
            <Footer />
        </main>
    );
}
