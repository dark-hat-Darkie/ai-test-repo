export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to AI Test Repo
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Next.js app with TypeScript and Tailwind CSS
        </p>
        <div className="flex gap-4 justify-center">
          <a
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the docs
          </a>
          <a
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
