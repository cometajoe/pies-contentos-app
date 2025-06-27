import React, { useState } from 'react';
import { Heart, Calendar, MapPin, Users, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const EventsPage = () => {
  const  t  = useTranslations();
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const [currentGallery, setCurrentGallery] = useState(0);

  const upcomingEvents = [
    {
      title: t('eventsPage.events.backToSchool.title'),
      date: t('eventsPage.events.backToSchool.date'),
      location: t('eventsPage.events.backToSchool.location'),
      description: t('eventsPage.events.backToSchool.description'),
      impact: t('eventsPage.events.backToSchool.impact'),
      color: "from-sky-400 to-blue-400"
    },
    {
      title: t('eventsPage.events.winterWarmth.title'),
      date: t('eventsPage.events.winterWarmth.date'),
      location: t('eventsPage.events.winterWarmth.location'),
      description: t('eventsPage.events.winterWarmth.description'),
      impact: t('eventsPage.events.winterWarmth.impact'),
      color: "from-emerald-400 to-teal-400"
    },
    {
      title: t('eventsPage.events.springFestival.title'),
      date: t('eventsPage.events.springFestival.date'),
      location: t('eventsPage.events.springFestival.location'),
      description: t('eventsPage.events.springFestival.description'),
      impact: t('eventsPage.events.springFestival.impact'),
      color: "from-sky-400 to-blue-400"
    }
  ];

  const testimonies = [
    {
      text: t('eventsPage.testimonials.testimonies.volunteer1.text'),
      author: t('eventsPage.testimonials.testimonies.volunteer1.author'),
      role: t('eventsPage.testimonials.testimonies.volunteer1.role'),
      type: "volunteer"
    },
    {
      text: t('eventsPage.testimonials.testimonies.parent1.text'),
      author: t('eventsPage.testimonials.testimonies.parent1.author'),
      role: t('eventsPage.testimonials.testimonies.parent1.role'),
      type: "parent"
    },
    {
      text: t('eventsPage.testimonials.testimonies.volunteer2.text'),
      author: t('eventsPage.testimonials.testimonies.volunteer2.author'),
      role: t('eventsPage.testimonials.testimonies.volunteer2.role'),
      type: "volunteer"
    }
  ];


  //get images from the events folder images are JPG

  const galleryImages = [
    { id: 1, alt: t('eventsPage.gallery.images.childrenReceiving'), bg: "from-sky-400 to-blue-500", src: "/events/DSC_0824.jpg" },
    { id: 2, alt: t('eventsPage.gallery.images.volunteersHelping'), bg: "from-emerald-400 to-teal-500", src: "/events/DSC_0825.jpg" },
    { id: 3, alt: t('eventsPage.gallery.images.communitySetup'), bg: "from-sky-400 to-indigo-500", src: "/events/DSC_0826.jpg" },
    { id: 4, alt: t('eventsPage.gallery.images.happyChildren'), bg: "from-emerald-400 to-cyan-500", src: "/events/DSC_0827.jpg" },
    { id: 5, alt: t('eventsPage.gallery.images.parentChild'), bg: "from-sky-400 to-blue-500", src: "/events/DSC_0832.jpg" }
  ];

  const nextTestimony = () => {
    setCurrentTestimony((prev) => (prev + 1) % testimonies.length);
  };

  const prevTestimony = () => {
    setCurrentTestimony((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  };

  const nextGallery = () => {
    setCurrentGallery((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGallery = () => {
    setCurrentGallery((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-pulse">
              <Heart className="w-5 h-5" />
              <span className="font-medium">{t('eventsPage.hero.badge')}</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              {t('eventsPage.hero.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('eventsPage.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {t('eventsPage.upcomingEvents.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`h-3 bg-gradient-to-r ${event.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">{event.description}</p>
                  <div className={`rounded-lg p-3 ${
                    event.color.includes('emerald') ? 'bg-emerald-50' : 'bg-sky-50'
                  }`}>
                    <span className={`font-semibold ${
                      event.color.includes('emerald') ? 'text-emerald-600' : 'text-sky-600'
                    }`}>{t('eventsPage.upcomingEvents.impact')}: {event.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Gallery */}
      <section className="py-16 px-6 bg-gradient-to-br from-emerald-50/30 to-sky-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {t('eventsPage.gallery.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto rounded-full"></div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                {/* <img src='events/DSC_0824.jpg' alt={galleryImages[currentGallery].alt}  className="w-full h-full object-cover"  /> */}
                {/* <img
              src="volunteer/volunteer2.webp" // Placeholder más vertical
              alt={t('getInvolved.volunteer.title')}
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[500px] md:max-h-[600px]"
            /> */}
              <div className={`w-full h-full bg-gradient-to-br ${galleryImages[currentGallery].bg} flex items-center justify-center`}>
                <div className="text-white text-center">
                  <Heart className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                  <p className="text-lg font-medium">{galleryImages[currentGallery].alt}</p>
                </div>
              </div>
            </div>
            <button
              onClick={prevGallery}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextGallery}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGallery(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentGallery 
                      ? (index % 2 === 0 ? 'bg-sky-500 scale-125' : 'bg-emerald-500 scale-125')
                      : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {t('eventsPage.testimonials.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8">
            <Quote className="w-8 h-8 text-sky-400 mb-4" />
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              "{testimonies[currentTestimony].text}"
            </p>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                testimonies[currentTestimony].type === 'volunteer' 
                  ? 'from-sky-400 to-blue-500' 
                  : 'from-emerald-400 to-teal-500'
              } flex items-center justify-center`}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">{testimonies[currentTestimony].author}</p>
                <p className="text-slate-600">{testimonies[currentTestimony].role}</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimony}
                className="bg-sky-100 hover:bg-sky-200 rounded-full p-2 transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-sky-600" />
              </button>
              <button
                onClick={nextTestimony}
                className="bg-emerald-100 hover:bg-emerald-200 rounded-full p-2 transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5 text-emerald-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Year Highlights */}
      {/* <section className="py-16 px-6 bg-gradient-to-r from-sky-500 via-blue-600 to-emerald-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t('eventsPage.yearHighlights.title')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {yearHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                    <Icon className={`w-8 h-8 mx-auto mb-4 group-hover:animate-bounce ${highlight.color}`} />
                    <div className="text-3xl font-bold text-white mb-2">{highlight.number}</div>
                    <div className="text-white/90">{highlight.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-white to-emerald-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            {t('eventsPage.cta.title')}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {t('eventsPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* //change these buttons to link to the get-involved page */}
            <a href="/get-involved" className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              {t('eventsPage.cta.volunteerButton')}
            </a>
            <a href="/donate" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              {t('eventsPage.cta.donateButton')}
            </a>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;