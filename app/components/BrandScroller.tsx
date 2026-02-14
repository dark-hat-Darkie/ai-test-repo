import Image from 'next/image';

const brands = [
  {
    name: 'TechCrunch',
    logoUrl: 'https://cdn.simpleicons.org/crunchbase/white',
  },
  {
    name: 'The Verge',
    logoUrl: 'https://cdn.simpleicons.org/theverge/white',
  },
  {
    name: 'Wired',
    logoUrl: 'https://cdn.simpleicons.org/wired/white',
  },
  {
    name: 'Bloomberg',
    logoUrl: 'https://cdn.simpleicons.org/bloomberg/white',
  },
  {
    name: 'Reuters',
    logoUrl: 'https://cdn.simpleicons.org/reuters/white',
  },
  {
    name: 'Forbes',
    logoUrl: 'https://cdn.simpleicons.org/forbes/white',
  },
  {
    name: 'Ars Technica',
    logoUrl: 'https://cdn.simpleicons.org/arstechnica/white',
  },
  {
    name: 'CNET',
    logoUrl: 'https://cdn.simpleicons.org/cnet/white',
  },
  {
    name: 'Mashable',
    logoUrl: 'https://cdn.simpleicons.org/mashable/white',
  },
  {
    name: 'Hacker News',
    logoUrl: 'https://cdn.simpleicons.org/ycombinator/white',
  },
  {
    name: 'Product Hunt',
    logoUrl: 'https://cdn.simpleicons.org/producthunt/white',
  },
  {
    name: 'GitHub',
    logoUrl: 'https://cdn.simpleicons.org/github/white',
  },
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
            Featured In
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Recognized and featured across top technology and news platforms
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
                    src={brand.logoUrl}
                    alt={brand.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    unoptimized
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
                    src={brand.logoUrl}
                    alt={brand.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    unoptimized
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
