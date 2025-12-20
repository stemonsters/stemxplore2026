import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://stemxplore2026.stemonsters.com"),
  title: "STEMXplore 2026 | National Science Day Symposium",
  description: "A 2-day mega virtual event to celebrate science and hands-on learning!",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "STEMXplore 2026 | National Science Day Symposium",
    description: "A 2-day mega virtual event to celebrate science and hands-on learning!",
    url: "https://stemxplore2026.stemonsters.com",
    siteName: "STEMXplore",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "STEMXplore 2026",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STEMXplore 2026 | National Science Day Symposium",
    description: "A 2-day mega virtual event to celebrate science and hands-on learning!",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
