"use client";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";

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
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", (!prev).toString());
      return !prev;
    });
  };

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">VibeCheckr</h1>
          <button
            onClick={toggleDarkMode}
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
