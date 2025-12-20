export default function StructuredData() {
    const eventSchema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "STEMXplore 2026 National Science Day Symposium",
        "startDate": "2026-03-08T10:00:00+05:30",
        "endDate": "2026-03-15T18:00:00+05:30",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
            "@type": "VirtualLocation",
            "url": "https://stemxplore2026.stemonsters.com"
        },
        "image": [
            "https://stemxplore2026.stemonsters.com/og-image.png"
        ],
        "description": "A 2-day mega virtual event to celebrate science and hands-on learning with hackathons, panel discussions, and stem talks.",
        "organizer": {
            "@type": "Organization",
            "name": "STEMonsters",
            "url": "https://stemonsters.com"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://stemxplore2026.stemonsters.com/#register",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2025-12-01"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
    );
}
