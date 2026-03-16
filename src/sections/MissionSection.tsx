import { Target, Eye, Sparkles } from 'lucide-react';
import { Reveal } from '../components/custom/Reveal';

const visionPoints = [
  "To raise leaders for global impact.",
  "To enrich people to become influencers in their families, workplaces, and the world.",
  "To restore and release the potential in people by connecting them to God.",
  "To impact our communities by helping and providing support for the needy.",
  "To build mega churches for God and the MercyLife."
];

const coreValues = [
  "Integrity", "Excellence", "Empowerment", "Commitment", "Hard-work", "Discipline", "Discipleship", "Loyalty", "Honor"
];

export function MissionSection() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      {/* Decorative hands illustration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg 
          viewBox="0 0 200 200" 
          className="w-96 h-96 text-white"
          fill="currentColor"
        >
          <path d="M100 20 C 120 40, 140 60, 140 100 C 140 140, 120 160, 100 180 C 80 160, 60 140, 60 100 C 60 60, 80 40, 100 20 Z" />
        </svg>
      </div>

      <Reveal className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/30 mb-6 bg-black">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-medium mb-8">
            Our Mission Statement
          </h2>
          
          <blockquote className="relative">
            <span className="absolute -top-8 left-0 text-6xl text-white/20 font-serif">"</span>
            <p className="text-white text-xl md:text-2xl lg:text-3xl font-light leading-relaxed italic relative z-10">
              To develop fully functioning followers of Christ and release them into their prophetic destinies, transforming communities and individuals.
            </p>
            <span className="absolute -bottom-12 right-0 text-6xl text-white/20 font-serif z-0">"</span>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Vision */}
          <div>
            <div className="flex items-center mb-8">
              <Eye className="w-6 h-6 text-teal-light mr-3" />
              <h3 className="text-white text-2xl font-medium">Our Vision</h3>
            </div>
            <ul className="space-y-4">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-light mr-3 mt-1 font-bold">•</span>
                  <span className="text-white/80 leading-relaxed text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Values */}
          <div>
            <div className="flex items-center mb-8">
              <Sparkles className="w-6 h-6 text-teal-light mr-3" />
              <h3 className="text-white text-2xl font-medium">Core Values</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {coreValues.map((value, index) => (
                <span 
                  key={index}
                  className="px-5 py-2.5 rounded-full border border-white/20 text-white/90 font-medium hover:bg-white/10 hover:border-white/40 transition-all cursor-default"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
