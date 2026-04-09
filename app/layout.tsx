import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Segun Showunmi Portfolio",
  description: "Explore the digital portfolio of Segun Showunmi, a Product Designer and Developer dedicated to crafting high-performance websites and seamless user experiences.",
  openGraph: {
    title: "Segun Showunmi Portfolio",
    description: "Explore the digital portfolio of Segun Showunmi, a Product Designer and Developer dedicated to crafting high-performance websites and seamless user experiences.",
    url: "https://madebyace.vercel.app", // Placeholder or from context if available
    siteName: "Segun Showunmi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Segun Showunmi Portfolio",
    description: "Explore the digital portfolio of Segun Showunmi, a Product Designer and Developer dedicated to crafting high-performance websites and seamless user experiences.",
    creator: "@madebyacee",
  },
  icons: {
    icon: "/img/my-avi-2.png",
    apple: "/img/my-avi-2.png",
  },
};

import LoadingScreen from "@/components/LoadingScreen";
import { LoadingProvider } from "@/context/LoadingContext";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingProvider>
            <LoadingScreen />
            {children}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
