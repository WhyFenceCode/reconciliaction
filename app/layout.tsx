import type { Metadata } from "next";
import {Baloo_Bhai_2} from 'next/font/google';
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"

const font = Baloo_Bhai_2({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: "Churchill ReconciliAction",
  description: "A Contemperery Indigenous Studies Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
