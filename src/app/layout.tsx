"use client";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  if (darkMode === null) {
    // Prevent rendering until hydration is complete
    return null;
  }

  return (
    <html lang="en" className={`${darkMode ? "dark" : ""}`}>
      <head>
        {/* Add any required meta tags or links here */}
      </head>
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        <header className="p-4 flex justify-between items-center bg-gray-800 text-white">
          <h1 className="text-xl font-bold">VibeCheckr</h1>
          <nav className="flex gap-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/chat" className="hover:underline">
              Chat
            </Link>
            <Link href="/history" className="hover:underline">
              History
            </Link>
            <Link href="/settings" className="hover:underline">
              Settings
            </Link>
            <Link href="/export" className="hover:underline">
              Export
            </Link>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        {children}
      </body>
    </html>
  );
}
