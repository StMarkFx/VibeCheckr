export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          About VibeCheckr
        </h1>
        <p className="text-lg mb-4">
          VibeCheckr is your go-to tool for validating ideas and planning MVPs
          effortlessly. Whether you're brainstorming or ready to build, we've
          got you covered with AI-powered insights and scalable plans.
        </p>
        <p className="text-lg">
          Our mission is to empower creators, entrepreneurs, and innovators to
          bring their ideas to life with confidence and clarity.
        </p>
      </div>
    </div>
  );
}
