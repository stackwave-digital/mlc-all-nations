import { X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-teal text-white py-2.5 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <a 
          href="https://nations-church.churchcenter.com/registrations" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-semibold tracking-wider uppercase hover:underline transition-all"
        >
          See Weekly Announcements Here
        </a>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
