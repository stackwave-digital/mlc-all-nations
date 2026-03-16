import { ArrowRight, CheckCircle, BookOpen, HandHeart, Church } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'MercyLife 101',
    description: 'Learn about our mission, vision, and values.',
    action: 'Register',
  },
  {
    icon: HandHeart,
    title: 'Open House',
    description: 'Meet our pastors and tour our facilities.',
    action: 'Learn More',
  },
  {
    icon: Church,
    title: 'Get Involved',
    description: 'Discover serving opportunities and ministries.',
    action: 'Explore',
  },
];

export function NextStepsSection() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80" 
          alt="Worship Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            MercyLife NEXT STEPS
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Take the next step in your journey with us. We're here to help you grow and connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div 
              key={step.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all card-hover"
            >
              <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-teal-light" />
              </div>
              
              <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm mb-6">{step.description}</p>
              
              <a 
                href="/next-steps"
                className="inline-flex items-center text-teal-light text-sm font-medium hover:underline"
              >
                {step.action}
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-teal/20 to-teal-light/20 rounded-lg p-8 text-center border border-teal/30">
          <h3 className="text-white text-2xl font-bold mb-4">
            Ready to take your next step?
          </h3>
          <a 
            href="https://onark.app/MercyLife-church/next-steps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-teal text-white px-8 py-3 rounded-full font-bold hover:bg-teal-light transition-colors btn-hover"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
