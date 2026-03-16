import { Clock } from 'lucide-react';
import { Reveal } from '../components/custom/Reveal';

const campuses = [
  {
    name: 'Dominion Temple',
    address: '3100 Pleasant Valley Lane, Arlington TX, 76015',
    services: [
      { day: 'Sunday', time: '10:00 AM' },
    ],
  },
];

export function ServiceTimesSection() {
  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden">
      <Reveal className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/30 mb-6">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider">
            Service Times
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {campuses.map((campus) => (
            <div 
              key={campus.name}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-white text-xl font-bold mb-2">{campus.name}</h3>
              <p className="text-white/60 text-sm mb-6">{campus.address}</p>
              
              <div className="space-y-3">
                {campus.services.map((service) => (
                  <div key={service.day} className="flex items-center justify-between">
                    <span className="text-white/80">{service.day}</span>
                    <span className="text-white font-medium">{service.time}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`/visit-MercyLife#${campus.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block mt-6 text-teal-light text-sm font-medium hover:underline"
              >
                Get Directions →
              </a>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
