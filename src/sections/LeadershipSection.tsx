import { User, Award, GraduationCap, Heart, Star } from 'lucide-react';
import { Reveal } from '../components/custom/Reveal';

export function LeadershipSection() {
  return (
    <section id="leadership" className="relative bg-black py-20 md:py-32 border-t border-white/10 overflow-hidden">
      <Reveal className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/30 mb-6 bg-black">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
            Our Pastor
          </h2>
          <p className="text-teal-light text-xl font-medium italic">
            "The Endtime Revivalist"
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Main Bio */}
          <div className="md:col-span-7 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Pastor Brian Amoateng</h3>
              <p className="text-white/60 text-lg mb-6">Founder and Senior Pastor, MercyLife Churches Worldwide</p>
              <div className="prose prose-invert border-l-2 border-teal-light pl-6">
                <p className="text-white/80 leading-relaxed text-lg font-light">
                  He is a strong and forthright preacher, a well-sought-after conference speaker, and the convener of iYES (International Youth Empowerment Summit).
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 text-teal-light mr-3" />
                <h4 className="text-xl font-semibold text-white">Family</h4>
              </div>
              <p className="text-white/80">Married to First Lady Abigail with three children.</p>
            </div>
          </div>

          {/* Credentials & Roles Sidebar */}
          <div className="md:col-span-5 space-y-8">
            {/* Education */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-teal-light mr-3" />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal-light mr-3 mt-1 font-bold">•</span>
                  <span className="text-white/80">Diploma in Theology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-light mr-3 mt-1 font-bold">•</span>
                  <span className="text-white/80">Bachelor's degree in Sociology (University of Ghana, Legon)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-light mr-3 mt-1 font-bold">•</span>
                  <span className="text-white/80">Master's degree in Human Resource Management and Employment Relations (Brunel University, UK)</span>
                </li>
              </ul>
            </div>

            {/* Roles & Honors */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-teal-light mr-3" />
                <h4 className="text-xl font-semibold text-white">Roles & Honors</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-teal-light mr-3"><Star className="w-4 h-4 fill-current" /></span>
                  <span className="text-white/80">President of Brian Jones Ministries</span>
                </li>
                <li className="flex items-center">
                  <span className="text-teal-light mr-3"><Star className="w-4 h-4 fill-current" /></span>
                  <span className="text-white/80">Chairman of Brian Jones Foundation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-teal-light mr-3"><Star className="w-4 h-4 fill-current" /></span>
                  <span className="text-white/80">Goodwill Ambassador to UNACWA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-light mr-3 mt-1"><Star className="w-4 h-4 fill-current" /></span>
                  <span className="text-white/80">Most influential youth leader in Ghana (4 consecutive times)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
