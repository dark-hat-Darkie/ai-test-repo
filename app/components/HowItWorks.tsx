export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create GitHub Issue",
      description:
        "Describe your feature, bug fix, or task in a GitHub issue. Be as detailed or high-level as you want.",
    },
    {
      number: "02",
      title: "AI Analyzes",
      description:
        "Our AI agent analyzes your requirements, explores your codebase, and plans the optimal implementation strategy.",
    },
    {
      number: "03",
      title: "Automated Development",
      description:
        "X-Force writes code, creates tests, runs validations, and submits a pull request — all automatically.",
    },
    {
      number: "04",
      title: "Review & Merge",
      description:
        "Review the PR, provide feedback if needed, and merge. X-Force handles revisions based on your comments.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-ai-cyan-600/5 blur-[120px]" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-ai-purple-600/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold text-ai-cyan-400 tracking-widest uppercase mb-4">
            Workflow
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Four simple steps to automated software development
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-ai-purple-500/30 via-ai-cyan-500/30 to-ai-purple-500/30" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step number circle */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full btn-gradient flex items-center justify-center glow-sm group-hover:glow transition-shadow duration-500">
                    <span className="text-lg md:text-xl font-bold text-white">{step.number}</span>
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full btn-gradient opacity-0 group-hover:opacity-30 animate-ping" style={{ animationDuration: '2s' }} />
                </div>
              </div>

              {/* Card */}
              <div className="glass-card rounded-2xl p-5 md:p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (between cards on mobile/tablet) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4 lg:hidden">
                  <svg className="w-6 h-6 text-ai-purple-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
