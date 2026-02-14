export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-ai-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-ai-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-ai-blue-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-ai-purple-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-ai-cyan-400 animate-pulse" />
            <span className="text-sm text-gray-300">Our Story</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">About Us</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re building the future of software development — where AI handles the heavy lifting so developers can focus on what truly matters.
          </p>
        </div>
      </div>
    </section>
  );
}
