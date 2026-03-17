import { HeroSection } from '../sections/HeroSection';
import { MissionSection } from '../sections/MissionSection';
import { ServiceTimesSection } from '../sections/ServiceTimesSection';
import { ResourcesSection } from '../sections/ResourcesSection';
import { NewToMercyLifeSection } from '../sections/NewToMercyLifeSection';
import { SmallGroupsSection } from '../sections/SmallGroupsSection';
import { YouthCampSection } from '../sections/YouthCampSection';
import { NextStepsSection } from '../sections/NextStepsSection';
import { KidsMinistrySection } from '../sections/KidsMinistrySection';
import { Marquee } from '../components/custom/Marquee';

export function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <ServiceTimesSection />
      <ResourcesSection />
      <NewToMercyLifeSection />
      <SmallGroupsSection />
      <YouthCampSection />
      <NextStepsSection />
      <KidsMinistrySection />
      <Marquee />
    </main>
  );
}
