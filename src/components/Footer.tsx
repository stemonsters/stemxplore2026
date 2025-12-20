"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Heart } from "@nsmr/pixelart-react";


export default function Footer() {
    return (
        <footer className="bg-background pt-8 md:pt-6 pb-8 md:pb-4">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-4 border-b border-border pb-8 md:pb-6">
                    {/* Brand & Contact */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="https://stemonsters.com" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4 md:mb-6">
                            <Image src="/images/stemonsters-logo.png" alt="STEMonsters Logo" width={200} height={60} className="h-12 md:h-16 w-auto" />
                        </Link>
                        <div className="space-y-3 md:space-y-4 text-muted-foreground font-mono text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <p>Akshaya Gardens, Bangalore 560068</p>
                            </div>
                            <Link href="https://wa.me/919741165171" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary shrink-0 fill-current"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                <p>+91 97411 65171</p>
                            </Link>
                            <Link href="mailto:hello@stemonsters.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <Mail className="w-4 h-4 text-primary shrink-0" />
                                <p>hello@stemonsters.com</p>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 md:mb-6 text-accent">Quick Links</h3>
                        <ul className="space-y-2 md:space-y-3 font-mono text-sm">
                            <li><Link href="#contest-details" className="text-muted-foreground hover:text-primary transition-colors">Contests</Link></li>
                            <li><Link href="#schedule" className="text-muted-foreground hover:text-primary transition-colors">Schedule</Link></li>
                            <li><Link href="#support" className="text-muted-foreground hover:text-primary transition-colors">Support</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="https://stemonsters.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">STEMonsters Education</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 md:mb-6 text-accent">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/STEMonstersClub" target="_blank" rel="noopener noreferrer" className="p-2 border border-border hover:border-primary hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/showcase/stemxplore/" target="_blank" rel="noopener noreferrer" className="p-2 border border-border hover:border-primary hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/STEMonstersClub/" target="_blank" rel="noopener noreferrer" className="p-2 border border-border hover:border-primary hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm font-mono gap-4 text-center md:text-left">
                    <div className="flex flex-col md:flex-row gap-2 items-center">
                        <p>© 2026 Stemonsters Education Pvt. Ltd.</p>
                        <p className="hidden md:block">|</p>
                        <p>All Rights Reserved</p>
                    </div>
                    <div className="flex items-center justify-center w-full md:w-auto gap-4">
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
            </div>
        </footer>
    );
}
