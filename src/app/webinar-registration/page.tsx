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
