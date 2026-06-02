import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md. Rawha Siddiqi Riad | Portfolio",
  description: "Full Stack Developer & AI/ML Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          {/* Bottom Glass Blur */}
          <div className="pointer-events-none fixed bottom-0 left-0 z-20 h-20 w-full bg-background/50 backdrop-blur-xl [mask-image:linear-gradient(to_top,black_10%,transparent)]" />
        </ThemeProvider>
      </body>
    </html>
  );
}