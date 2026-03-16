import { ArrowRight, Heart, Users, Calendar } from 'lucide-react';

const steps = [
  {
    icon: Heart,
    title: 'Experience Worship',
    description: 'Join us for a Sunday service and experience the presence of God.',
  },
  {
    icon: Users,
    title: 'Connect with Others',
    description: 'Meet people and build relationships in our welcoming community.',
  },
  {
    icon: Calendar,
    title: 'Take Your Next Step',
    description: 'Discover how you can grow and get involved at MercyLife Church.',
  },
];

export function NewToMercyLifeSection() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-white/5 to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wider mb-6">
              New to MercyLife?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We're so glad you're here! Whether you're new to church or just new to MercyLife, 
              we want you to feel at home. Here's what you can expect when you visit.
            </p>
            
            <a 
              href="/welcome"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-colors btn-hover"
            >
              Plan Your Visit
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Right Content - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="flex items-start space-x-4 bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-teal-light" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-teal-light text-sm font-bold mr-2">0{index + 1}</span>
                    <h3 className="text-white text-lg font-bold">{step.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
