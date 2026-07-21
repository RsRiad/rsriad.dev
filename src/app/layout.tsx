import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md. Rawha Siddiqi Riad | Portfolio",
  description: "Full Stack Developer, Software Engineer & AI/ML Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <TooltipProvider>
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </TooltipProvider>
          <ProgressiveBlur height="10%" position="bottom" />
        </ThemeProvider>
      </body>
    </html>
  );
}
