import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, MapPin, Users, ArrowRight, Star } from 'lucide-react';

const UpcomingEvent = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const eventData = {
    title: t('upcomingEvent.title') || 'Back to School Drive',
    date: t('upcomingEvent.date') || 'August 15, 2025',
    location: t('upcomingEvent.location') || 'Community Center',
    description: t('upcomingEvent.description') || 'Providing shoes and school supplies for 200+ children',
    impact: t('upcomingEvent.impact') || '200 children',
    image: 'events/back_to_school_2025.jpeg'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-sky-700 bg-sky-100 rounded-full">
            <Star className="w-4 h-4 mr-2" />
            {t('eventsPage.upcomingEvents.title') || 'Upcoming Event'}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 font-gochi-hand text-sky-700 mb-4">
            {t('eventsPage.hero.title') || 'Every Step Matters'}
          </h2>
          <p className="text-lg text-slate-600">
            {t('eventsPage.hero.subtitle') || 'Join us in providing shoes, socks, and seasonal items to children in vulnerable situations'}
          </p>
        </motion.div>

        {/* Event Card */}
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img
                  src={eventData.image}
                  alt={eventData.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center text-slate-700">
                    <Calendar className="w-4 h-4 mr-2 text-sky-600" />
                    <span className="text-sm font-semibold">{eventData.date}</span>
                  </div>
                </div>

                {/* Impact badge */}
                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {/* <span className="text-sm font-semibold">{eventData.impact}</span> */}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    {eventData.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {eventData.description}
                  </p>
                  
                  {/* Event details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-slate-700">
                      <Calendar className="w-5 h-5 mr-3 text-sky-600" />
                      <span className="font-medium">{eventData.date}</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <MapPin className="w-5 h-5 mr-3 text-sky-600" />
                      <span className="font-medium">{eventData.location}</span>
                    </div>
                    {/* <div className="flex items-center text-slate-700">
                      <Users className="w-5 h-5 mr-3 text-sky-600" />
                      <span className="font-medium">{eventData.impact} </span>
                    </div> */}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/events" 
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-sky-500/50 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
                  >
                    {t('eventsPage.upcomingEvents.learnMoreButton') || 'Learn More'}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                
                </div>

                {/* Impact statement */}
                <div className="mt-8 p-4 bg-sky-50 rounded-xl border border-sky-100">
                  <p className="text-sm text-sky-700 font-medium">
                  {t('upcomingEvent.impactStatement')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UpcomingEvent; 