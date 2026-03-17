import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnnouncementBar } from './components/custom/AnnouncementBar';
import { Navbar } from './components/custom/Navbar';
import { Footer } from './sections/Footer';
import { Home } from './pages/Home';
import { OurStory } from './pages/OurStory';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-black">
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
