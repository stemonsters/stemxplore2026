"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import NotificationMarquee from "./NotificationMarquee";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showNavLogo, setShowNavLogo] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showMarquee, setShowMarquee] = useState(true);
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const lastScrollY = useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const diff = latest - lastScrollY.current;
        const isScrollingDown = diff > 0;
        const isScrollingUp = diff < 0;

        if (latest < 10) {
            // Always show at top
            setShowMarquee(true);
            setIsScrolled(false);
            setShowNavLogo(false);
        } else {
            setIsScrolled(true);
            setShowNavLogo(latest > 200);

            if (isScrollingDown && latest > 50) {
                setShowMarquee(false);
            } else if (isScrollingUp) {
                setShowMarquee(true);
            }
        }
        lastScrollY.current = latest;
    });

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
            <AnimatePresence>
                {showMarquee && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <NotificationMarquee />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full lg:max-w-[80vw] mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo - always visible on other pages, reveals on scroll on homepage */}
                <Link href="/" className={`flex items-center transition-all duration-300 ${(pathname !== "/" || showNavLogo) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <Image src="/images/stemxplore-logo.png" alt="STEMXplore 2026 Logo" width={100} height={100} className="h-12 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-mono text-muted-foreground hover:text-primary transition-colors tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* ... rest of nav ... */}
                    <div className="flex items-center gap-2">
                        {pathname !== "/webinar-registration" && (
                            <Button asChild variant="outline" className="rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                                <Link href="/webinar-registration">Webinar Registration</Link>
                            </Button>
                        )}
                        <Button asChild className="bg-muted text-muted-foreground rounded-none border-2 border-border cursor-default pointer-events-none opacity-70">
                            <span>Registration Closed</span>
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
                                    <Link
                                        href="/#register"
                                        className="text-xs font-medium text-muted-foreground border border-border bg-muted/50 px-2.5 py-1 rounded-md"
                                    >
                                        Registration Closed
                                    </Link>
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
                                    className="text-base font-mono text-foreground hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {pathname !== "/webinar-registration" && (
                                <Button asChild variant="outline" className="w-full rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Link href="/webinar-registration" onClick={() => setIsMobileMenuOpen(false)}>Webinar Registration</Link>
                                </Button>
                            )}
                            <Button asChild className="w-full bg-muted text-muted-foreground rounded-none border-2 border-border cursor-default pointer-events-none opacity-70">
                                <span>Registration Closed</span>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
