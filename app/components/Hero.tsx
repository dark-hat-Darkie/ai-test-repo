export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-ai-hero">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/6 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-ai-purple-600/20 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/6 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-ai-cyan-500/15 blur-[100px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-ai-blue-500/10 blur-[140px] animate-float-slow" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-ai-purple-500/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-ai-cyan-400 animate-pulse" />
            <span className="text-xs md:text-sm text-gray-300">AI-Powered Development Automation</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up leading-tight tracking-tight">
            Automate Your Entire
            <br />
            <span className="text-gradient-vivid">Software Development</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto animate-slide-up-delayed leading-relaxed">
            X-Force is an AI-powered CLI tool that handles the full software development lifecycle.
            Just create GitHub issues, and let X-Force do the rest automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 animate-slide-up-delayed-2">
            <a
              href="#get-started"
              className="btn-gradient px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-white text-base md:text-lg glow"
            >
              Get Started
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-white text-base md:text-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Terminal mockup */}
          <div className="max-w-2xl mx-auto animate-slide-up-delayed-2">
            <div className="glass rounded-xl overflow-hidden border border-white/10">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-gray-500 font-mono">terminal</span>
              </div>
              {/* Terminal body */}
              <div className="p-4 md:p-6 font-mono text-xs md:text-sm text-left overflow-x-auto">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-ai-cyan-400">$</span>
                  <span className="text-gray-200">npx xforce init</span>
                </div>
                <div className="mt-3 text-gray-500">
                  <span className="text-ai-purple-400">&#10003;</span> Connected to GitHub repository
                </div>
                <div className="mt-1 text-gray-500">
                  <span className="text-ai-purple-400">&#10003;</span> AI agent initialized
                </div>
                <div className="mt-1 text-gray-500">
                  <span className="text-ai-purple-400">&#10003;</span> Watching for new issues...
                </div>
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span className="text-ai-cyan-400">$</span>
                  <span className="text-gray-200">Issue #42 detected</span>
                  <span className="text-ai-cyan-400">&#8594;</span>
                  <span className="text-green-400">PR #43 created</span>
                  <span className="animate-pulse text-ai-purple-400">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
