import { Play, Users, BookOpen, ExternalLink } from 'lucide-react';

const resourceLinks = [
  {
    icon: Play,
    label: 'Watch Online',
    description: 'Join us live or watch past services',
    href: 'https://www.youtube.com/@MercyLifeChurchOrlando',
    external: true,
  },
  {
    icon: Users,
    label: 'Business Directory',
    description: 'Support our church community',
    href: 'https://MercyLife-church.churchcenter.com/pages/business-directory',
    external: true,
  },
  {
    icon: BookOpen,
    label: 'Resources',
    description: 'Study materials and guides',
    href: '/resources',
    external: false,
  },
];

export function ResourcesSection() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider">
            Resources
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Explore our collection of resources designed to help you grow in your faith and connect with our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resourceLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-white/20 transition-all card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                {link.external && (
                  <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                )}
              </div>
              
              <h3 className="text-white text-lg font-bold mb-2 group-hover:text-teal-light transition-colors">
                {link.label}
              </h3>
              <p className="text-white/60 text-sm">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
