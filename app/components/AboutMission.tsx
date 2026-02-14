export default function AboutMission() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-ai-purple-600/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-ai-cyan-600/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold text-ai-purple-400 tracking-widest uppercase mb-4">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Why We Built X-Force
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Empowering developers to ship faster with intelligent automation
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Story */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              From Idea to Reality
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                X-Force was born from a simple observation: developers spend too much time on repetitive tasks that could be automated. We saw teams struggling with long development cycles, manual testing, and tedious code reviews.
              </p>
              <p>
                Our team of engineers and AI researchers came together to create a tool that understands your codebase, interprets your requirements, and delivers production-ready code — all from a simple GitHub issue.
              </p>
              <p>
                Today, X-Force powers development workflows for teams of all sizes, helping them ship features faster while maintaining the highest quality standards.
              </p>
            </div>
          </div>

          {/* Right: Highlights card */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Lightning Fast Delivery</h4>
                  <p className="text-gray-400 text-sm">From issue to pull request in minutes, not days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Quality First</h4>
                  <p className="text-gray-400 text-sm">Every change includes tests and follows best practices.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Built for Teams</h4>
                  <p className="text-gray-400 text-sm">Scales seamlessly from solo developers to large teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
