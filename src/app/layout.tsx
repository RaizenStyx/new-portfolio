import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL =  "https://calexreed.dev";

export const viewport: Viewport = {
  themeColor: "#000000", 
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  
  title: {
    default: "Connor Reed | Full-Stack Engineer & Game Developer",
    template: "%s | Connor Reed",
  },
  description:
    "Portfolio of Connor Reed. Specializing in high-performance Shopify Liquid development, scalable Next.js 16 applications, and Unreal Engine 5 game mechanics.",
  
  keywords: [
    "Connor Reed",
    "Full-Stack Developer",
    "Shopify Developer",
    "Liquid Theme Development",
    "Next.js 16",
    "React",
    "Unreal Engine 5",
    "Game Development",
    "C++",
    "TypeScript",
    "Tailwind CSS",
    "Web Application Architecture",
  ],
  
  authors: [{ name: "Connor Reed", url: BASE_URL }],
  creator: "Connor Reed",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Connor Reed | Full-Stack Engineer & Game Developer",
    description: "Building digital worlds and scalable apps. Expert in Shopify ecosystems and Unreal Engine.",
    siteName: "Connor Reed Portfolio",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Connor Reed - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Connor Reed | Full-Stack Engineer & Game Developer",
    description: "Building digital worlds and scalable apps. Expert in Shopify ecosystems and Unreal Engine.",
    images: ["/images/me.png"], 
    creator: "@RaizenStyx",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", 
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}