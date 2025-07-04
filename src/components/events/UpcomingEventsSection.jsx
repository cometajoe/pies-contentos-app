import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const eventImages = [
  '/events/back_to_school_2025.jpeg', // Use the provided image for the first event
  null, // Placeholder for coming soon
  null, // Placeholder for coming soon
];

const UpcomingEventsSection = ({ title, upcomingEvents, impactLabel }) => (
  <section className="py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full flex flex-col`}>
              <div className={`relative h-64 w-full bg-white flex items-center justify-center`}>
                {eventImages[index] ? (
                  <img
                    src={eventImages[index]}
                    alt={event.title}
                    className="object-contain w-full h-full bg-white"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full bg-slate-100">
                    <span className="text-2xl font-bold text-slate-400 mb-2">Coming Soon</span>
                    <span className="inline-block bg-slate-300 text-slate-700 text-xs px-3 py-1 rounded-full">Próximamente</span>
                  </div>
                )}
              </div>
            </div>
            <div className={`mt-3 rounded-lg p-3 text-center w-full ${
              event.color.includes('emerald') ? 'bg-emerald-50' : 'bg-sky-50'
            }`}>
              <span className={`font-semibold ${
                event.color.includes('emerald') ? 'text-emerald-600' : 'text-sky-600'
              }`}>{impactLabel}: {event.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingEventsSection; 