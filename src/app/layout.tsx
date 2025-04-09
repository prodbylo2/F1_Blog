import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";

// Load Roboto font
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "G-FORCE | Formula 1 Blog",
  description: "Your ultimate destination for Formula 1 news, analytics, and discussions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${roboto.variable} font-roboto antialiased bg-white text-blue-900 dark:bg-slate-800 dark:text-slate-100`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-screen transition-colors duration-300">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
