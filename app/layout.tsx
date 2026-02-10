import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { GradientBlobs } from "@/components/GradientBlobs";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ABHIPRAAY - Advanced Ultrasound & Genetic Care | Mumbai",
  description: "Premium diagnostic care with advanced ultrasound-guided interventions and genetic screening. Expert radiology team in Andheri East, Mumbai.",
  keywords: [
    'ultrasound clinic Mumbai',
    'genetic screening',
    'pregnancy scans',
    'interventional radiology',
    'diagnostic imaging',
    'Andheri East',
    'ABHIPRAAY',
  ],
  authors: [{ name: 'ABHIPRAAY Medical Centre' }],
  openGraph: {
    title: 'ABHIPRAAY - Advanced Ultrasound & Genetic Care',
    description: 'Premium diagnostic care with advanced ultrasound-guided interventions',
    type: 'website',
    locale: 'en_IN',
    siteName: 'ABHIPRAAY',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased bg-white text-neutral-900 relative">
        <GradientBlobs />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
