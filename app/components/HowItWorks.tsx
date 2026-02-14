export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create GitHub Issue",
      description: "Describe your feature, bug fix, or task in a GitHub issue. Be as detailed or high-level as you want."
    },
    {
      number: "02",
      title: "X-Force Analyzes",
      description: "Our AI agent analyzes your requirements, explores your codebase, and plans the optimal implementation strategy."
    },
    {
      number: "03",
      title: "Automated Development",
      description: "X-Force writes code, creates tests, runs validations, and submits a pull request - all automatically."
    },
    {
      number: "04",
      title: "Review & Merge",
      description: "Review the PR, provide feedback if needed, and merge. X-Force handles revisions based on your comments."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Four simple steps to automated software development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-ai-purple-500 to-ai-cyan-500 p-1 rounded-xl">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl h-full">
                  <div className="text-6xl font-bold text-gradient mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-ai-purple-400 text-4xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
