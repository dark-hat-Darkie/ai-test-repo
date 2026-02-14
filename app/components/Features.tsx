export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Automation",
      description: "Advanced AI analyzes your GitHub issues and automatically implements solutions with precision and intelligence."
    },
    {
      icon: "🔄",
      title: "Full SDLC Coverage",
      description: "From code generation to testing, deployment, and monitoring - X-Force handles every step of the development lifecycle."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "What takes hours manually, X-Force completes in minutes. Accelerate your development velocity exponentially."
    },
    {
      icon: "🔗",
      title: "GitHub Integration",
      description: "Seamlessly integrates with your existing GitHub workflow. No complex setup, just create issues and watch the magic happen."
    },
    {
      icon: "✅",
      title: "Quality Assured",
      description: "Every change includes comprehensive tests, follows best practices, and maintains code quality standards."
    },
    {
      icon: "🎯",
      title: "Precise Implementation",
      description: "Implements exactly what you specify in your issues. No unwanted features, no scope creep, just what you asked for."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-ai-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to automate your software development workflow
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-ai-purple-100 dark:border-ai-purple-900"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
