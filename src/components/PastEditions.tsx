"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { X, Youtube, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PastEditions() {
    const [selectedEdition, setSelectedEdition] = useState<string | null>(null);
    const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', url: string, title: string } | null>(null);

    useEffect(() => {
        if (selectedEdition || selectedMedia) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedEdition, selectedMedia]);

    const contests = [
        "Panel Discussion",
        "Story Behind My Tech",
        "STEM Lab Challenge",
        "Lets Talk STEM"
    ];

    const galleryData: Record<string, { type: 'image' | 'video', url: string, title: string }[]> = {
        "Panel Discussion": [
            { type: 'video', url: 'https://www.youtube.com/embed/Orn7C5OxG4s?si=r-hSJkRUL9P8QKyO', title: 'STEMXplore 2024' },
            { type: 'image', url: '/images/past-editions/webinar-2025.jpg', title: 'STEMXplore 2025' },
            { type: 'image', url: '/images/past-editions/webinar-2022.jpg', title: 'STEMXplore 2022' },
            { type: 'image', url: '/images/past-editions/expert-panel-2025.jpg', title: 'STEMXplore 2025' },
        ],
        "Story Behind My Tech": [
            { type: 'video', url: 'https://www.youtube.com/embed/4PTz8L9y-GA', title: 'STEMXplore 2025' },
            { type: 'video', url: 'https://www.youtube.com/embed/hD_jAvR8-Po', title: 'STEMXplore 2025' },
            { type: 'video', url: 'https://www.youtube.com/embed/QxQ3_jX6br8', title: 'STEMXplore 2025' },
            { type: 'image', url: '/images/past-editions/arduino-lock-2025.png', title: 'STEMXplore 2025' },
        ],
        "STEM Lab Challenge": [
            { type: 'image', url: '/images/past-editions/stem-lab-1.jpg', title: 'STEMXplore 2025' },
            { type: 'image', url: '/images/past-editions/stem-lab-2.png', title: 'STEMXplore 2024' },
            { type: 'image', url: '/images/past-editions/stem-lab-3.jpg', title: 'STEMXplore 2025' },
        ],
        "Lets Talk STEM": [
            { type: 'video', url: 'https://www.youtube.com/embed/d7r2g0KmOd0?si=h_MizcHtJtt9JCLx', title: 'STEMXplore 2025' },
            { type: 'video', url: 'https://www.youtube.com/embed/lSWXMEKrEA8?si=i1o7i3HNhb2eU-ob', title: 'STEMXplore 2025' },
            { type: 'video', url: 'https://www.youtube.com/embed/r3wBRqiuM7E?si=wQXwPjB9bJ8vndos', title: 'STEMXplore 2025' },
            { type: 'video', url: 'https://www.youtube.com/embed/CcCp0czBXI8?si=pww2PtV5ZHQdN3EM', title: 'STEMXplore 2024' },
            { type: 'video', url: 'https://www.youtube.com/embed/ceWT3Cfrasw?si=OmqqSdsXsenb2g5e', title: 'STEMXplore 2024' },
            { type: 'video', url: 'https://www.youtube.com/embed/Itffk-s5fgI?si=PJSbsM_jEZxCmaoD', title: 'STEMXplore 2024' },
        ]
    };

    return (
        <section id="past-editions" className="py-12 md:py-16 bg-muted/50 border-t border-b border-border relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-none bg-primary/10 text-xs font-semibold text-primary uppercase tracking-[0.2em] border border-primary/20">
                            Archives
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Past Editions</h2>
                    </div>
                    <p className="text-muted-foreground max-w-xs md:text-right text-base md:text-lg">
                        Explore the legacy of innovation and learning from our previous events.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {contests.map((contest, index) => (
                        <ScrollReveal key={contest} delay={index * 0.1}>
                            <div
                                onClick={() => setSelectedEdition(contest)}
                                className="group relative aspect-square md:aspect-[4/3] flex items-center justify-center cursor-pointer overflow-hidden border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary active:scale-[0.98] shadow-sm hover:shadow-xl hover:shadow-primary/5"
                            >
                                {/* Content */}
                                <div className="p-4 md:p-8 text-center transition-all duration-500 group-hover:scale-105 sm:group-hover:translate-y-0">
                                    <h3 className="text-base md:text-2xl font-bold tracking-tight mb-1 md:mb-2 group-hover:text-primary transition-colors leading-tight">
                                        {contest}
                                    </h3>
                                    <div className="h-px w-8 md:w-12 bg-primary/20 mx-auto mt-2 md:mt-4 group-hover:w-16 md:group-hover:w-24 group-hover:bg-primary transition-all duration-500" />

                                    {/* Mobile-only interactive hint */}
                                    <div className="md:hidden mt-3 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-primary flex items-center justify-center gap-1 opacity-100 bg-primary/5 py-1.5 px-2 border border-primary/10">
                                        <span>View Gallery</span>
                                    </div>
                                </div>

                                {/* Hover Overlay - Desktop only */}
                                <div className="hidden md:flex absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0 items-center justify-center z-20">
                                    <div className="flex flex-col items-center gap-4">
                                        <span className="text-primary-foreground font-bold tracking-[0.2em] uppercase text-sm border-2 border-primary-foreground/30 px-8 py-3 bg-primary-foreground/5 backdrop-blur-sm">
                                            View Gallery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedEdition && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                            onClick={() => setSelectedEdition(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-5xl h-auto max-h-[90vh] bg-card border border-border shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col will-change-transform"
                        >
                            {/* Modal Header */}
                            <div className="p-4 md:p-6 border-b border-border flex justify-between items-center bg-muted/50">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">{selectedEdition}</h3>
                                    <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em] mt-1 ml-0.5 opacity-70">Archive</p>
                                </div>
                                <button
                                    onClick={() => setSelectedEdition(null)}
                                    className="p-2 hover:bg-primary/10 rounded-full transition-colors group"
                                    aria-label="Close Gallery"
                                >
                                    <X className="w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors" />
                                </button>
                            </div>

                            {/* Modal Content - Gallery Grid */}
                            <div className="flex-1 overflow-y-auto p-4 md:p-10 custom-scrollbar overscroll-contain">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                                    {galleryData[selectedEdition]?.map((item, i) => (
                                        <GalleryItem
                                            key={i}
                                            item={item}
                                            onMediaClick={(media) => setSelectedMedia(media)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Full View Lightbox */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-12"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <button
                            onClick={() => setSelectedMedia(null)}
                            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-colors z-[210] bg-white/10 rounded-full backdrop-blur-md"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedMedia.type === 'image' ? (
                                <img
                                    src={selectedMedia.url}
                                    alt={selectedMedia.title}
                                    className="max-w-full max-h-full object-contain shadow-2xl"
                                />
                            ) : (
                                <div className="w-full max-w-5xl aspect-video bg-black shadow-2xl overflow-hidden rounded-lg">
                                    <iframe
                                        src={`${selectedMedia.url}${selectedMedia.url.includes('?') ? '&' : '?'}autoplay=1&modestbranding=1&rel=0`}
                                        className="w-full h-full border-0"
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                        title={selectedMedia.title}
                                    />
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// Sub-component to prevent lag and handle media preview
function GalleryItem({ item, onMediaClick }: {
    item: { type: 'image' | 'video', url: string, title: string },
    onMediaClick: (item: { type: 'image' | 'video', url: string, title: string }) => void
}) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const getYouTubeId = (url: string) => {
        const regExp = /^.*(embed\/|v\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    if (!isLoaded) {
        return <div className="bg-muted aspect-video border border-border animate-pulse" />;
    }

    const videoId = item.type === 'video' ? getYouTubeId(item.url) : null;
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

    return (
        <div
            onClick={() => onMediaClick(item)}
            className="group relative bg-muted aspect-video overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-sm cursor-pointer"
        >
            {item.type === 'video' ? (
                <div className="w-full h-full relative">
                    {thumbnailUrl ? (
                        <img
                            src={thumbnailUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full bg-black/20 flex items-center justify-center">
                            <Youtube className="w-12 h-12 text-primary" />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Youtube className="w-16 h-16 text-white/90 transition-all duration-300" />
                    </div>
                </div>
            ) : (
                <div className="w-full h-full relative">
                    <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none" />
                </div>
            )}

            {/* Item Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-[10px] md:text-xs font-semibold tracking-wide">{item.title}</p>
            </div>
        </div>
    );
}

