import React from 'react';
import { Heart } from 'lucide-react';

const EventsHeroSection = ({ title, subtitle, badge, backgroundImage }) => (
  <div className="relative overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      aria-hidden="true"
    />
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/80 to-blue-600/80" aria-hidden="true"></div>
    {/* Additional overlay for better contrast */}
    <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
    <div className="relative max-w-6xl mx-auto px-6 py-20">
      <div className="text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-pulse">
          <Heart className="w-5 h-5" />
          <span className="font-medium">{badge}</span>
        </div>
        <h1 className="text-5xl font-bold mb-6 animate-fade-in drop-shadow-lg">{title}</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default EventsHeroSection; 