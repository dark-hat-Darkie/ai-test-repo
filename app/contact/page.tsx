import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';

export const metadata: Metadata = {
  title: 'Contact Us | X-Force',
  description: 'Get in touch with the X-Force team. We would love to hear from you.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main>
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-section" />
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-ai-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-ai-cyan-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">Contact Us</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Have a question or want to work together? Drop us a message and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Contact Form */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </div>

              {/* Right: Google Map */}
              <div>
                <ContactMap />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
