export default function AboutStats() {
  const stats = [
    {
      number: "1,000+",
      label: "Developers",
      description: "Trust X-Force for their workflows",
    },
    {
      number: "50K+",
      label: "PRs Created",
      description: "Automated pull requests delivered",
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable infrastructure you can count on",
    },
    {
      number: "10x",
      label: "Faster",
      description: "Average development speed improvement",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-section overflow-hidden">
      {/* Background orb */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-ai-cyan-600/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold text-ai-cyan-400 tracking-widest uppercase mb-4">
            By The Numbers
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Impact
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The numbers speak for themselves
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" data-testid="stats-section">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-gradient-vivid">{stat.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
