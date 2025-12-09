"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Atom } from "lucide-react";
import { Heart } from "@nsmr/pixelart-react";

export default function Footer() {
    return (
        <footer className="bg-background pt-8 md:pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12 border-b border-border pb-8 md:pb-12">
                    {/* Brand & Contact */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center mb-4 md:mb-6">
                            <Image src="/images/stemonsters-logo.png" alt="STEMonsters Logo" width={200} height={60} className="h-12 md:h-16 w-auto" />
                        </Link>
                        <div className="space-y-3 md:space-y-4 text-muted-foreground font-mono text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <p>Akshaya Gardens, Bangalore 560068</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary shrink-0" />
                                <p>+91 97411 65171</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary shrink-0" />
                                <p>hello@stemonsters.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 md:mb-6 text-accent">Quick Links</h3>
                        <ul className="space-y-2 md:space-y-3 font-mono text-sm">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Support Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Webinar Registration</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 md:mb-6 text-accent">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 border border-border hover:border-primary hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 border border-border hover:border-primary hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 border border-border hover:border-primary hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-xs font-mono gap-4">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                        <p>© 2026 Stemonsters Education Pvt. Ltd.</p>
                        <p className="hidden md:block">|</p>
                        <p>All Rights Reserved</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Made with</span>
                        <Heart className="w-3 h-3 text-accent" />
                        <span>by</span>
                        <Link href="https://www.linkedin.com/in/tahcinsarwar/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-bold">
                            Tahcin
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
