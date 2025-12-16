"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Contests", href: "/#contest-details" },
        { name: "Schedule", href: "/#schedule" },
        { name: "Support", href: "/#support" },
        { name: "About", href: "/about" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="w-full lg:max-w-[80vw] mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/images/stemxplore-logo.png" alt="STEMXplore 2026 Logo" width={100} height={100} className="h-12 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-2">
                        {pathname !== "/webinar-registration" && (
                            <Button asChild variant="outline" className="rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                                <Link href="/webinar-registration">Webinar Registration</Link>
                            </Button>
                        )}
                        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                            <a href="/#register">Contest Registration</a>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Button with Register Bubble */}
                <div className="md:hidden flex items-center gap-2 relative">
                    {/* Register Now Bubble - shows when not scrolled */}
                    <AnimatePresence>
                        {!isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-full mr-3 whitespace-nowrap"
                            >
                                <div className="relative">
                                    <a
                                        href="/#register"
                                        className="text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-2.5 py-1 rounded-md hover:bg-primary/10 transition-colors"
                                    >
                                        Register Now
                                    </a>
                                    {/* Subtle pointer */}
                                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-primary/30"></div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        className="text-foreground p-2 border border-border"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm font-mono text-foreground hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {pathname !== "/webinar-registration" && (
                                <Button asChild variant="outline" className="w-full rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Link href="/webinar-registration" onClick={() => setIsMobileMenuOpen(false)}>Webinar Registration</Link>
                                </Button>
                            )}
                            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all">
                                <a href="/#register" onClick={() => setIsMobileMenuOpen(false)}>Contest Registration</a>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
