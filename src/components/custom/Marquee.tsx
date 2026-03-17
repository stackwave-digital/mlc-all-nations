import { Globe } from 'lucide-react';

export function Marquee() {
  const text = 'MERCYLIFE CHURCH || A PLACE OF HOPE ||';
  const repeatCount = 12;

  return (
    <section className="relative bg-black py-8 overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center bg-black border-2 border-white/30 rounded-full px-6 py-3 overflow-hidden">
          {/* Globe Icon - Left */}
          <div className="flex-shrink-0 mr-4">
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              <Globe className="w-5 h-5 text-white globe-rotate" />
            </div>
          </div>

          {/* Scrolling Text */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {[...Array(repeatCount)].map((_, i) => (
                <span
                  key={i}
                  className="text-white text-sm md:text-base font-bold tracking-wider mx-2"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Atom/Network Icon - Right */}
          <div className="flex-shrink-0 ml-4">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="3" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
