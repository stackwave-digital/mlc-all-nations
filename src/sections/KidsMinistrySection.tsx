import { ArrowRight } from 'lucide-react';

export function KidsMinistrySection() {
  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden">
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="kids-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="white" />
            <path d="M5 5 L15 5 L15 15 L5 15 Z" stroke="white" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100" height="100" fill="url(#kids-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-200 to-transparent rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Do you have a heart to empower our children to be followers of Jesus and Kingdom Builders?
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join our MercyLife Kids team and make a difference in the lives of the next generation.
            </p>

            <a 
              href="https://MercyLife-church.churchcenter.com/people/forms/238497"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity btn-hover"
            >
              CLICK HERE TO JOIN TODAY!
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
