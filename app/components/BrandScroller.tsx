import Image from 'next/image';

const brands = [
  { name: 'TechCrunch', logo: '/brands/techcrunch.svg' },
  { name: 'GitHub', logo: '/brands/github.svg' },
  { name: 'Vercel', logo: '/brands/vercel.svg' },
  { name: 'Docker', logo: '/brands/docker.svg' },
  { name: 'Stripe', logo: '/brands/stripe.svg' },
  { name: 'Shopify', logo: '/brands/shopify.svg' },
  { name: 'GitLab', logo: '/brands/gitlab.svg' },
  { name: 'Reddit', logo: '/brands/reddit.svg' },
  { name: 'Product Hunt', logo: '/brands/producthunt.svg' },
  { name: 'Stack Overflow', logo: '/brands/stackoverflow.svg' },
  { name: 'Ars Technica', logo: '/brands/arstechnica.svg' },
  { name: 'CNET', logo: '/brands/cnet.svg' },
];

export default function BrandScroller() {
  return (
    <section id="brands" className="relative py-16 md:py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-ai-purple-600/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-ai-purple-400 tracking-widest uppercase mb-4">
            Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Powering Modern Development
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Built for teams that rely on the best tools in the industry
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="scrolling-wrapper">
          <div className="flex animate-scroll w-max" aria-label="Brand logos carousel">
            {/* First set */}
            {brands.map((brand) => (
              <div
                key={`first-${brand.name}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center group"
              >
                <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-400 group-hover:text-white font-medium text-sm whitespace-nowrap transition-colors duration-300">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand) => (
              <div
                key={`second-${brand.name}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center group"
              >
                <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-400 group-hover:text-white font-medium text-sm whitespace-nowrap transition-colors duration-300">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
