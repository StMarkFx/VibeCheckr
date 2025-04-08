import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-900 text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to VibeCheckr</h1>
        <p className="text-lg">
          Your AI-powered assistant for validating ideas and planning MVPs.
        </p>
      </header>
      <main className="flex flex-col items-center gap-6">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="dark:invert"
        />
        <div className="text-center">
          <p className="mb-4">
            Get started by exploring our features:
          </p>
          <ul className="list-disc list-inside text-left">
            <li>Validate your ideas with AI-powered insights.</li>
            <li>Generate scalable MVP plans effortlessly.</li>
            <li>Export and manage your plans with ease.</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <a
            href="/chat"
            className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
          >
            Start Chatting
          </a>
          <a
            href="/about"
            className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-800"
          >
            Learn More
          </a>
        </div>
      </main>
      <footer className="mt-8 text-sm text-gray-400">
        Built with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}
