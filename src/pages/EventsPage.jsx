import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import EventsHeroSection from '../components/events/EventsHeroSection';
import UpcomingEventsSection from '../components/events/UpcomingEventsSection';
import EventsGallerySection from '../components/events/EventsGallerySection';


const VIDEO_TESTIMONY_URL = "https://nyc.cloud.appwrite.io/v1/storage/buckets/6829349e001bbcc3ff52/files/6868473800373bb0633f/view?project=6829347e0004825b2c57&mode=admin";

const EventsPage = () => {
  const t = useTranslations();
  const [currentTestimony, setCurrentTestimony] = useState(0);


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
    { id: 1, alt: t('eventsPage.gallery.images.childrenReceiving'), bg: "from-sky-400 to-blue-500", src: "events/DSC_0824.JPG" },
    { id: 2, alt: t('eventsPage.gallery.images.volunteersHelping'), bg: "from-emerald-400 to-teal-500", src: "events/DSC_0825.JPG" },
    { id: 3, alt: t('eventsPage.gallery.images.communitySetup'), bg: "from-sky-400 to-indigo-500", src: "events/DSC_0826.JPG" },
    { id: 4, alt: t('eventsPage.gallery.images.happyChildren'), bg: "from-emerald-400 to-cyan-500", src: "events/DSC_0827.JPG" },
    { id: 5, alt: t('eventsPage.gallery.images.parentChild'), bg: "from-sky-400 to-blue-500", src: "events/DSC_0832.JPG" }
  ];
  const galleryImages2 = [
    { id: 1, alt: "2023 Event Photo 1", bg: "from-sky-400 to-blue-500", src: "events/2023/DSC_0013.JPG" },
    { id: 2, alt: "2023 Event Photo 2", bg: "from-emerald-400 to-teal-500", src: "events/2023/DSC_0038.JPG" },
    { id: 3, alt: "2023 Event Photo 3", bg: "from-sky-400 to-indigo-500", src: "events/2023/DSC_0053.JPG" },
    { id: 4, alt: "2023 Event Photo 4", bg: "from-emerald-400 to-cyan-500", src: "events/2023/DSC_0081.JPG" },
    { id: 5, alt: "2023 Event Photo 5", bg: "from-sky-400 to-blue-500", src: "events/2023/DSC_0091.JPG" },
    { id: 6, alt: "2023 Event Photo 6", bg: "from-emerald-400 to-teal-500", src: "events/2023/DSC_0093.JPG" },
    { id: 7, alt: "2023 Event Photo 7", bg: "from-sky-400 to-indigo-500", src: "events/2023/DSC_0099.JPG" },
    { id: 8, alt: "2023 Event Photo 8", bg: "from-emerald-400 to-cyan-500", src: "events/2023/DSC_0257.JPG" },
    { id: 9, alt: "2023 Event Photo 9", bg: "from-sky-400 to-blue-500", src: "events/2023/DSC_0277.JPG" }
  ];

  const galleryImages2024 = [
    { id: 1, alt: "2024 Event Photo 1", bg: "from-sky-400 to-blue-500", src: "events/2024/DSC_0034.JPG" },
    { id: 2, alt: "2024 Event Photo 2", bg: "from-emerald-400 to-teal-500", src: "events/2024/DSC_0049.JPG" },
    { id: 3, alt: "2024 Event Photo 3", bg: "from-sky-400 to-indigo-500", src: "events/2024/DSC_0061.JPG" },
    { id: 4, alt: "2024 Event Photo 4", bg: "from-emerald-400 to-cyan-500", src: "events/2024/DSC_0062.JPG" },
    { id: 5, alt: "2024 Event Photo 5", bg: "from-sky-400 to-blue-500", src: "events/2024/DSC_0944.JPG" },
    { id: 6, alt: "2024 Event Photo 6", bg: "from-emerald-400 to-teal-500", src: "events/2024/DSC_0982.JPG" }
  ];
  const nextTestimony = () => {
    setCurrentTestimony((prev) => (prev + 1) % testimonies.length);
  };

  const prevTestimony = () => {
    setCurrentTestimony((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section with Background Image */}
      <EventsHeroSection
        title={t('eventsPage.hero.title')}
        subtitle={t('eventsPage.hero.subtitle')}
        badge={t('eventsPage.hero.badge')}
        backgroundImage={'/events/DSC_0603.JPG'}
      />

      <UpcomingEventsSection
        title={t('eventsPage.upcomingEvents.title')}
        upcomingEvents={upcomingEvents}
        impactLabel={t('eventsPage.upcomingEvents.impact')}
      />
      <div className="flex md:flex-row gap-2 flex-col">
        <EventsGallerySection
          title={t('eventsPage.gallery.title')}
          galleryImages={galleryImages}
        />
       
        <EventsGallerySection
          title={t('eventsPage.gallery.title')}
          galleryImages={galleryImages2}
        />

<EventsGallerySection
          title={t('eventsPage.gallery.title')}
          galleryImages={galleryImages2024}

        />
      </div>
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
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonies[currentTestimony].type === 'volunteer'
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
      {/* Video Testimony Section */}
   
        {/* Video Testimony Section */}
        <section className="py-12 px-6 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-lg bg-black flex justify-center items-center p-2">
            <video
              src={VIDEO_TESTIMONY_URL}
              controls
              className="w-full aspect-[9/16] h-auto max-h-[70vh] bg-black rounded-xl mx-auto"
              // poster="/events/DSC_0824.JPG"
            >
              Sorry, your browser does not support embedded videos.
            </video>
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