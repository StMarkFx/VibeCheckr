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
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
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
          className="dark:invert"
        />
        <div className="text-center max-w-lg">
          <p className="mb-6 text-lg">
            Get started by exploring our features:
          </p>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Validate your ideas with AI-powered insights.</li>
            <li>Generate scalable MVP plans effortlessly.</li>
            <li>Export and manage your plans with ease.</li>
          </ul>
        </div>
        <div className="flex gap-6">
          <a
            href="/chat"
            className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
          >
            Start Chatting
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-gray-700 rounded-lg text-white font-semibold hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </main>
      <footer className="mt-12 text-sm text-gray-400">
        Built with ❤️ using Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}
