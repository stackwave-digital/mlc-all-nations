import { AnnouncementBar } from './components/custom/AnnouncementBar';
import { Navbar } from './components/custom/Navbar';
import { Marquee } from './components/custom/Marquee';
import { HeroSection } from './sections/HeroSection';
import { MissionSection } from './sections/MissionSection';
import { ServiceTimesSection } from './sections/ServiceTimesSection';
import { ResourcesSection } from './sections/ResourcesSection';
import { NewToMercyLifeSection } from './sections/NewToMercyLifeSection';
import { SmallGroupsSection } from './sections/SmallGroupsSection';
import { YouthCampSection } from './sections/YouthCampSection';
import { NextStepsSection } from './sections/NextStepsSection';
import { KidsMinistrySection } from './sections/KidsMinistrySection';
import { Footer } from './sections/Footer';
import { LeadershipSection } from './sections/LeadershipSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Announcement Bar */}
      <AnnouncementBar />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section with Video */}
        <HeroSection />
        
        {/* Mission Statement */}
        <MissionSection />
        
        {/* Leadership Section */}
        <LeadershipSection />
        
        {/* Service Times */}
        <ServiceTimesSection />
        
        {/* Resources */}
        <ResourcesSection />
        
        {/* New to MercyLife */}
        <NewToMercyLifeSection />
        
        {/* Small Groups */}
        <SmallGroupsSection />
        
        {/* Youth Camp - Wild Ones */}
        <YouthCampSection />
        
        {/* MercyLife Next Steps */}
        <NextStepsSection />
        
        {/* Kids Ministry */}
        <KidsMinistrySection />
        
        {/* Scrolling Marquee */}
        <Marquee />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
