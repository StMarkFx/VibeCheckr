import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="relative p-8 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
        <div className="absolute inset-0 bg-gray-900 rounded-lg p-6">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
              Welcome to VibeCheckr
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your AI-powered assistant for validating ideas and planning MVPs with
              ease and style.
            </p>
          </header>
          <main className="flex flex-col items-center gap-8">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
              className="dark:invert hover:scale-110 transition-transform duration-300"
            />
            <div className="text-center max-w-lg">
              <p className="mb-6 text-lg">
                Get started by exploring our features:
              </p>
              <ul className="list-disc list-inside text-left space-y-2">
                <li className="hover:text-blue-400 transition-colors duration-300">
                  Validate your ideas with AI-powered insights.
                </li>
                <li className="hover:text-blue-400 transition-colors duration-300">
                  Generate scalable MVP plans effortlessly.
                </li>
                <li className="hover:text-blue-400 transition-colors duration-300">
                  Export and manage your plans with ease.
                </li>
              </ul>
            </div>
            <div className="flex gap-6">
              <a
                href="/chat"
                className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Start Chatting
              </a>
              <a
                href="/about"
                className="px-6 py-3 bg-gray-700 rounded-lg text-white font-semibold hover:bg-gray-800 transition-transform transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </main>
          <footer className="mt-12 text-sm text-gray-400">
            Built with ❤️ using Next.js and Tailwind CSS.
          </footer>
        </div>
      </div>
    </div>
  );
}
