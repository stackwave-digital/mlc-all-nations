import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const primaryLinks = [
  { label: 'DOMINION TEMPLE', href: '#dominion-temple' },
  { label: 'EVENTS', href: '#' },
  { label: 'WATCH ONLINE', href: '#' },
  { label: 'NEW TO MERCYLIFE?', href: '/welcome' },
  { label: 'SMALL GROUPS', href: '/smallgroups' },
  { label: 'GIVE', href: '/give' },
];

const ministryLinks = [
  { label: 'KIDS', href: '/nations-kids' },
  { label: 'YOUTH', href: '/nations-youth' },
  { label: 'YOUNG ADULTS', href: '/nations-young-adults' },
  { label: 'SENIORS MINISTRY (55+)', href: '#' },
  { label: 'WORSHIP', href: '/worship' },
  { label: 'OUTREACH', href: '/outreach' },
  { label: 'CONTACT', href: '/contact' },
];

const aboutLinks = [
  { label: 'OUR STORY', href: '/our-story' },
  { label: 'OUR PASTOR', href: '#leadership' },
  { label: 'OUR LEADERSHIP', href: '#leadership' },
  { label: 'OUR BELIEFS', href: '/our-beliefs' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-black/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        style={{ top: isScrolled || isMobileMenuOpen ? 0 : '40px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center z-[60]">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mr-3 hover:scale-105 transition-transform">
                  <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-white font-extrabold text-sm tracking-[0.2em]">MERCYLIFE</span>
                  <span className="text-white/80 text-xs tracking-[0.2em]">CHURCH</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation - Hidden when menu is open */}
            <div className={`hidden lg:flex items-center space-x-8 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <a href="#dominion-temple" className="text-white text-xs font-bold tracking-[0.15em] uppercase hover:text-white/70 transition-colors link-underline">Dominion Temple</a>
              <a href="#leadership" className="text-white text-xs font-bold tracking-[0.15em] uppercase hover:text-white/70 transition-colors link-underline">Our Leadership</a>
              <a href="/welcome" className="text-white text-xs font-bold tracking-[0.15em] uppercase hover:text-white/70 transition-colors link-underline">New to MercyLife</a>
              <a href="/give" className="text-white text-xs font-bold tracking-[0.15em] uppercase hover:text-white/70 transition-colors link-underline">Give</a>
              <a href="/resources" className="text-white text-xs font-bold tracking-[0.15em] uppercase hover:text-white/70 transition-colors link-underline">Resources</a>
            </div>

            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center space-x-2 bg-white text-black px-4 py-2 hover:bg-white/90 transition-all z-[60] group border border-transparent hover:border-white"
            >
              <span className="text-sm font-bold tracking-[0.15em] uppercase pt-0.5">Menu</span>
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 ml-1 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-4 h-4 ml-1" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Faint Center Circle / Map design */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" className="w-[800px] h-[800px]">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            <path d="M2 12h20" />
          </svg>
        </div>

        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16 md:mt-0">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Column 1: Primary Links */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              {primaryLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight uppercase hover:text-teal-light transition-colors group"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms',
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <span className="bg-clip-text group-hover:bg-gradient-to-r hover:text-transparent from-white to-teal-light">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Column 2: Ministries Links */}
            <div className="lg:col-span-3 flex flex-col space-y-4 lg:mt-8">
              {ministryLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center text-white/90 text-xl font-bold tracking-[0.1em] uppercase hover:text-teal-light transition-colors"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${200 + i * 50}ms` : '0ms',
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <span className="text-teal-light mr-4 text-sm">•</span>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 3: About Links */}
            <div className="lg:col-span-3 flex flex-col space-y-4 lg:mt-8">
              {aboutLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center text-white/90 text-xl font-bold tracking-[0.1em] uppercase hover:text-teal-light transition-colors"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${350 + i * 50}ms` : '0ms',
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <span className="text-teal-light mr-4 text-sm">•</span>
                  {link.label}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
