import { LeadershipSection } from '../sections/LeadershipSection';
import { Reveal } from '../components/custom/Reveal';
import { BookOpen, ShieldCheck } from 'lucide-react';

export function OurStory() {
  return (
    <main className="pt-32 pb-20">
      {/* Our Story Header / Section */}
      <section id="story" className="max-w-6xl mx-auto px-4 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-black/10 mb-6 bg-white shadow-sm">
              <BookOpen className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-black">
              Our Story
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              A Place Of Hope where nations gather to experience the love of Christ.
              Founded by Pastor Brian Amoateng, MercyLife Church has grown to become a global movement 
              empowering individuals and communities.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Our Beliefs Section */}
      <section id="our-beliefs" className="max-w-6xl mx-auto px-4 py-20 border-t border-black/10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-black/10 mb-6 bg-white shadow-sm">
              <ShieldCheck className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-black">
              Our Beliefs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-white/80 backdrop-blur p-8 rounded-lg shadow-sm border border-black/5">
                <h3 className="text-2xl font-bold mb-4 text-black uppercase">The Bible</h3>
                <p className="text-gray-700">We believe the entire Bible is the inspired Word of God and that men were moved by the Spirit of God to write the very words of Scripture.</p>
              </div>
              <div className="bg-white/80 backdrop-blur p-8 rounded-lg shadow-sm border border-black/5">
                <h3 className="text-2xl font-bold mb-4 text-black uppercase">God The Father</h3>
                <p className="text-gray-700">We believe in one God who exists in three distinct persons: Father, Son, and Holy Spirit.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Embedded Leadership Section */}
      <LeadershipSection />

    </main>
  );
}
