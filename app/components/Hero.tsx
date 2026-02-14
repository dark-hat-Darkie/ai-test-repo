export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-ai-hero">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Automate Your Entire
            <br />
            <span className="text-ai-cyan-300">Software Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-ai-purple-100 mb-8 max-w-3xl mx-auto animate-slide-up">
            X-Force is an AI-powered CLI tool that handles the full software development lifecycle.
            Just create GitHub issues, and let X-Force do the rest automatically.
          </p>
          <div className="flex gap-4 justify-center animate-slide-up">
            <a
              href="#features"
              className="px-8 py-4 bg-white text-ai-purple-700 rounded-lg font-semibold hover:bg-ai-cyan-50 transition-all duration-300 glow"
            >
              Get Started
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
