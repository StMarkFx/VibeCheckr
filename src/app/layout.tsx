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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}
      >
        <div className={`${inter.variable} ${robotoMono.variable}`}>
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
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
