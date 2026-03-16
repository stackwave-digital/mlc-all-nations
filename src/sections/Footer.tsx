import { Facebook, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  about: [
    { label: 'Visit MercyLife', href: '/visit-MercyLife' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Our Pastor', href: '/our-pastor' },
    { label: 'Our Leadership', href: '/our-leadership' },
    { label: 'Our Beliefs', href: '/our-beliefs' },
  ],
  resources: [
    { label: 'Give', href: '/give' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Store', href: 'https://shopus.cfan.org/' },
    { label: 'Watch Online', href: 'https://www.youtube.com/@MercyLifeChurchOrlando' },
  ],
  connect: [
    { label: 'Events', href: 'https://MercyLife-church.churchcenter.com/registrations' },
    { label: 'MercyLife Next Steps', href: 'https://onark.app/MercyLife-church/next-steps' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Small Groups', href: '/smallgroups' },
    { label: 'New to MercyLife?', href: '/welcome' },
  ],
  ministries: [
    { label: 'Kids', href: '/MercyLife-kids' },
    { label: 'Youth', href: '/MercyLife-youth' },
    { label: 'Young Adults', href: '/MercyLife-young-adults' },
    { label: 'Worship', href: '/worship' },
    { label: 'Outreach', href: '/outreach' },
    { label: "Women's Ministry", href: '/womens-ministry' },
    { label: 'Birthday Blessing', href: '/birthday-blessing' },
    { label: 'Prophetic Ministry', href: 'https://MercyLife-church.churchcenter.com/registrations/events/1554206' },
    { label: 'Seniors Ministry (55+)', href: 'https://MercyLife-church.churchcenter.com/calendar/event/127599430' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white font-bold text-2xl">N</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white text-sm hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white text-sm hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white text-sm hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">Ministries</h3>
            <ul className="space-y-2">
              {footerLinks.ministries.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white text-sm hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Ministries - Desktop Only */}
          <div className="hidden lg:block">
            <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4 opacity-0">Ministries</h3>
            <ul className="space-y-2">
              {footerLinks.ministries.slice(5).map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white text-sm hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Sunday Services */}
            <div>
              <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">Sunday Services</h3>
              <div className="space-y-2">
                <a href="#dominion-temple" className="block text-white text-sm hover:text-teal-light transition-colors">
                  Dominion Temple
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">Contact Info</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:mercylifechurch@yahoo.com" 
                  className="block text-white text-sm hover:text-teal-light transition-colors"
                >
                  mercylifechurch@yahoo.com
                </a>
                <p className="text-white text-sm">(214) 284-3423</p>
              </div>
            </div>

            {/* Mailing Address */}
            <div>
              <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">Mailing Address</h3>
              <p className="text-white text-sm">
                3100 Pleasant Valley Lane<br />
                Arlington TX, 76015
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a 
              href="https://www.facebook.com/weareMercyLifechurch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/weareMercyLifechurch/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UCuwZK0Fj3Tks6tXmniPGRmA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/40 text-sm">
              Copyright © {new Date().getFullYear()} MercyLife Church. All Rights Reserved.{" "}
              <a href="/privacy-policy" className="hover:text-white/60 transition-colors underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
