export default function CTA() {
  return (
    <section id="get-started" className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-cta animate-gradient-shift" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-ai-purple-600/20 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-ai-cyan-500/15 blur-[80px] animate-float-delayed" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-ai-purple-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">Ready to ship faster?</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready to Automate Your
          <br />
          <span className="text-gradient-vivid">Development?</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join developers who are already using X-Force to ship faster and focus on what matters most.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient px-8 py-4 rounded-xl font-semibold text-white text-lg glow inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Get Started on GitHub
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-xl font-semibold text-white text-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Social proof */}
        <p className="text-sm text-gray-500">
          Join <span className="text-ai-purple-400 font-semibold">1,000+</span> developers automating their workflow
        </p>
      </div>
    </section>
  );
}
