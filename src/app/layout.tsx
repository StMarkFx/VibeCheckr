'use client';
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VibeCheckr",
  description: "Validate ideas and plan MVPs effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">VibeCheckr</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        {children}
      </body>
    </html>
  );
}
