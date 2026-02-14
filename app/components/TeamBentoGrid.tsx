export default function TeamBentoGrid() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Google engineer with a passion for developer tools. Built X-Force to solve the automation gap in modern software teams.",
      initials: "AC",
      featured: true,
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "AI/ML researcher turned builder. Leads the development of X-Force's core AI engine and architecture.",
      initials: "SK",
      featured: true,
    },
    {
      name: "Marcus Rivera",
      role: "Head of Engineering",
      bio: "Full-stack veteran who ensures X-Force delivers production-ready code every time.",
      initials: "MR",
      featured: false,
    },
    {
      name: "Emily Zhang",
      role: "Lead AI Engineer",
      bio: "Specializes in code generation models and natural language understanding for developer workflows.",
      initials: "EZ",
      featured: false,
    },
    {
      name: "David Park",
      role: "Senior Engineer",
      bio: "GitHub integrations expert. Built the seamless issue-to-PR pipeline that powers X-Force.",
      initials: "DP",
      featured: false,
    },
    {
      name: "Lena Okafor",
      role: "Product Designer",
      bio: "Designs intuitive developer experiences that make complex AI workflows feel effortless.",
      initials: "LO",
      featured: false,
    },
    {
      name: "James Wu",
      role: "DevOps Lead",
      bio: "Keeps X-Force infrastructure running smoothly with 99.9% uptime across all services.",
      initials: "JW",
      featured: false,
    },
    {
      name: "Priya Sharma",
      role: "Community Lead",
      bio: "Connects X-Force with the developer community and drives our open-source initiatives.",
      initials: "PS",
      featured: false,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-ai-cyan-600/5 blur-[120px]" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-ai-purple-600/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold text-ai-cyan-400 tracking-widest uppercase mb-4">
            The Team
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Meet the People Behind X-Force
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A diverse team of engineers, researchers, and creators building the future of development
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 group ${
                member.featured
                  ? 'lg:col-span-2 lg:row-span-2'
                  : ''
              }`}
              data-testid="team-member-card"
            >
              <div className={`flex ${member.featured ? 'flex-col h-full' : 'flex-col'}`}>
                {/* Avatar */}
                <div className={`${
                  member.featured ? 'w-16 h-16 md:w-20 md:h-20 text-xl md:text-2xl' : 'w-12 h-12 md:w-14 md:h-14 text-base md:text-lg'
                } rounded-full btn-gradient flex items-center justify-center text-white font-bold mb-4 group-hover:glow-sm transition-shadow duration-300`}>
                  {member.initials}
                </div>

                {/* Info */}
                <div className={member.featured ? 'flex-1 flex flex-col' : ''}>
                  <h3 className={`${
                    member.featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                  } font-semibold text-white mb-1`}>
                    {member.name}
                  </h3>
                  <p className="text-ai-purple-400 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className={`text-gray-400 leading-relaxed ${
                    member.featured ? 'text-base' : 'text-sm'
                  }`}>
                    {member.bio}
                  </p>

                  {/* Social links placeholder */}
                  <div className={`flex gap-3 ${member.featured ? 'mt-auto pt-6' : 'mt-4'}`}>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors duration-300"
                      aria-label={`${member.name} GitHub`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
