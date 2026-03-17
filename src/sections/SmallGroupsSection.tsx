import { Users, MapPin, Calendar, ArrowRight } from 'lucide-react';

const groups = [
  {
    name: 'Young Adults',
    description: 'Connect with other young adults in their 20s and 30s.',
    meeting: 'Wednesdays at 7:00 PM',
    location: 'Various Locations',
  },
  {
    name: 'Marriage & Family',
    description: 'Grow together with other married couples.',
    meeting: 'Thursdays at 7:00 PM',
    location: 'Dominion Temple',
  },
  {
    name: 'Men\'s Group',
    description: 'Build brotherhood and grow in faith together.',
    meeting: 'Saturdays at 8:00 AM',
    location: 'Dominion Temple',
  },
];

export function SmallGroupsSection() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-teal/20 to-purple/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white/60 text-sm uppercase tracking-wider">Find Your Community</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-white/20 rounded-lg" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-teal/30 rounded-full" />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wider mb-6">
              Small Groups
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Life is better connected. Join a small group and experience authentic community 
              as you grow in your faith journey together.
            </p>

            <div className="space-y-4 mb-8">
              {groups.map((group) => (
                <div 
                  key={group.name}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-white font-bold mb-1">{group.name}</h3>
                  <p className="text-white/60 text-sm mb-2">{group.description}</p>
                  <div className="flex items-center text-white/40 text-xs space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {group.meeting}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {group.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="/smallgroups"
              className="inline-flex items-center text-teal-light font-medium hover:underline"
            >
              View All Small Groups
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
