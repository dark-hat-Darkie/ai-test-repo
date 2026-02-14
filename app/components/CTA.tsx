export default function CTA() {
  return (
    <section className="py-20 bg-gradient-ai-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Development?
          </h2>
          <p className="text-xl text-ai-purple-100 mb-8 max-w-2xl mx-auto">
            Join developers who are already using X-Force to ship faster and focus on what matters most.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-ai-purple-700 rounded-lg font-semibold hover:bg-ai-cyan-50 transition-all duration-300 glow"
            >
              Get Started on GitHub
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
