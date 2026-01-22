import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Atmosphere } from "../components-ui/atmosphere";
import { Navbar } from "../components-ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeatherCast - Your Local Weather Forecast",
  description: "Get accurate and up-to-date weather forecasts for your area with WeatherCast. Search by zip code to see current conditions and a 5-day forecast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0d0818] text-slate-50 antialiased selection:bg-purple-500/30 overflow-x-hidden">
        <Atmosphere />
        <Navbar />
        <main className="container mx-auto px-4 py-8 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
