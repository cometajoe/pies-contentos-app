// src/pages/AboutUsPage.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import { cardVariants, floatingVariants,fadeInUpVariants,staggerContainer  } from '../utils/animationVariants'; // Adjusted path
import { 
  BookOpen, 
  Users, 
  Eye, 
  Target, 
  BarChart2, 
  ExternalLink, 
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  Calendar,
  MapPin,
  Quote,
  Compass,
  UserCheck,
  CheckCircle2,
  User
} from 'lucide-react';
import TeamSection from '../components/TeamSection';
import StatCard from '../components/StatCard'; // Adjusted path


// Enhanced image with better quality and composition
const pageHeaderImage = 'team/about_us.png';






const AboutUsPage = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <PageHeader
        title={t('aboutUsPage.pageTitle')}
        subtitle={t('aboutUsPage.pageSubtitle')}
        backgroundImage={pageHeaderImage}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-14 sm:space-y-16 lg:space-y-12 relative">
        
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-sky-200/30 to-blue-200/30 rounded-full blur-3xl -z-10"
          style={{ y: y1 }}
        />
        <motion.div 
          className="absolute top-96 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10"
          style={{ y: y2 }}
        />

        {/* 1. Nuestro Inicio — readable layout, balanced spacing, punchline callout */}
        <motion.section
          id="history"
          className="max-w-4xl mx-auto relative"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="absolute -top-10 -left-10 text-sky-200 pointer-events-none"
            variants={floatingVariants}
            animate="animate"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <motion.div
                className="bg-gradient-to-r from-sky-500 to-blue-600 p-3 sm:p-4 rounded-2xl shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl sm:text-5xl font-bold font-gochi-hand bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-transparent">
                {t('aboutUsPage.history.title')}
              </h2>
            </div>
            <motion.p
              className="text-sky-600 text-base sm:text-xl font-medium"
              variants={fadeInUpVariants}
            >
              {t('aboutUsPage.history.subtitle')}
            </motion.p>
          </div>

          <motion.div
            className="rounded-2xl bg-white/90 border border-slate-100 shadow-sm overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col md:flex-row min-h-0">
              <div className="w-full md:w-2/5 shrink-0">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] md:min-h-[280px] relative overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                  <img
                    src="/team/team1.jpeg"
                    alt="Pies Contentos — nuestros inicios"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-1 px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
                <div className="max-w-3xl mx-auto text-left space-y-5">
              {t('aboutUsPage.history.content', { returnObjects: true }).map((paragraph, index) => {
                const isPunchline = index === 3;
                if (isPunchline) {
                  return (
                    <motion.div
                      key={index}
                      className="my-8 py-6 px-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50/80 border border-sky-100"
                      variants={fadeInUpVariants}
                    >
                      <p className="text-center text-sky-800 text-lg sm:text-xl font-medium italic leading-relaxed">
                        {paragraph}
                      </p>
                    </motion.div>
                  );
                }
                return (
                  <motion.p
                    key={index}
                    className="text-slate-700 text-base sm:text-lg leading-[1.7]"
                    variants={fadeInUpVariants}
                  >
                    {paragraph}
                  </motion.p>
                );
              })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* De Visión a Realidad */}
        <motion.section
          id="de-vision"
          className="max-w-4xl mx-auto"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="rounded-2xl bg-white/90 border border-slate-100 shadow-sm px-6 py-8 sm:px-10 sm:py-10 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="bg-gradient-to-r from-sky-500 to-blue-600 p-3 rounded-xl shadow-lg shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <Compass className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-2xl sm:text-4xl font-bold font-gochi-hand bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-transparent">
                {t('aboutUsPage.deVision.title')}
              </h2>
            </div>
            <div className="max-w-3xl space-y-4">
              {t('aboutUsPage.deVision.content', { returnObjects: true }).map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-slate-700 text-base sm:text-lg leading-[1.7]"
                  variants={fadeInUpVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Líderes */}
        <motion.section
          id="lideres"
          className="max-w-4xl mx-auto"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="rounded-2xl bg-white/90 border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 pt-8 sm:px-10 sm:pt-10 pb-4">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <UserCheck className="w-6 h-6 text-white" />
                </motion.div>
                <h2 className="text-2xl sm:text-4xl font-bold font-gochi-hand bg-gradient-to-r from-purple-700 to-pink-800 bg-clip-text text-transparent">
                  {t('aboutUsPage.lideres.title')}
                </h2>
              </div>
              <div className="max-w-3xl space-y-4 mb-6">
                {t('aboutUsPage.lideres.content', { returnObjects: true }).map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-slate-700 text-base sm:text-lg leading-[1.7]"
                    variants={fadeInUpVariants}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 sm:gap-2 px-2 pb-2 sm:px-4 sm:pb-4">
              {['/team/team2.jpeg', '/team/team3.jpeg', '/team/team4.jpeg'].map((src) => (
                <motion.div
                  key={src}
                  className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100"
                  variants={fadeInUpVariants}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Una Década de Impacto */}
        <motion.section
          id="una-decada"
          className="max-w-4xl mx-auto"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="rounded-2xl bg-white/90 border border-slate-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-0">
              <div className="lg:col-span-3 p-6 sm:p-8 lg:py-10 lg:pl-10 order-1 lg:order-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl shadow-lg shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-4xl font-bold font-gochi-hand bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-transparent">
                    {t('aboutUsPage.unaDecada.title')}
                  </h2>
                </div>
                <ul className="max-w-3xl space-y-3">
                  {t('aboutUsPage.unaDecada.items', { returnObjects: true }).map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex gap-3 text-slate-700 text-base sm:text-lg leading-[1.6]"
                      variants={fadeInUpVariants}
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              {/* Fotos: mobile = abajo de la card, sin espacio entre filas; desktop = 2 filas iguales al lado del texto */}
              <div className="lg:col-span-2 order-2 lg:order-2 lg:h-full lg:min-h-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 lg:grid-rows-2 gap-2 p-4 sm:p-6 lg:p-6 lg:pr-8 lg:h-full lg:min-h-0">
                  <motion.div className="aspect-[4/3] lg:aspect-auto lg:min-h-0 rounded-xl overflow-hidden bg-slate-100" variants={fadeInUpVariants}>
                    <img src="/team/team5.jpeg" alt="" className="w-full h-full object-cover object-center" loading="lazy" />
                  </motion.div>
                  <motion.div className="aspect-[4/3] lg:aspect-auto lg:min-h-0 rounded-xl overflow-hidden bg-slate-100" variants={fadeInUpVariants}>
                    <img src="/team/team6.jpeg" alt="" className="w-full h-full object-cover object-center" loading="lazy" />
                  </motion.div>
                  <motion.div className="aspect-[4/3] col-span-2 sm:col-span-3 lg:col-span-2 lg:aspect-auto lg:min-h-0 rounded-xl overflow-hidden bg-slate-100" variants={fadeInUpVariants}>
                    <img src="/team/team7.jpeg" alt="" className="w-full h-full object-cover object-center" loading="lazy" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Ruben — card with photo, after Una Década */}
        <motion.section
          id="about-ruben"
          className="max-w-4xl mx-auto px-1"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-xl overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex flex-col md:flex-row min-h-0">
              {/* Photo — compact on mobile so content is visible */}
              <div className="w-full h-48 sm:h-56 md:w-80 md:h-auto md:min-h-[300px] lg:w-96 lg:min-h-[320px] shrink-0 relative overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                <img
                  src={t('aboutUsPage.aboutRuben.imageUrl')}
                  alt={t('aboutUsPage.aboutRuben.imageAlt')}
                  className="w-full h-full object-cover object-top md:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Content — full width on mobile, no clipping */}
              <div className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-2 sm:p-2.5 rounded-lg sm:rounded-xl shadow-lg shrink-0">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-gochi-hand bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-transparent leading-tight">
                    {t('aboutUsPage.aboutRuben.title')}
                  </h2>
                </div>
                <div className="space-y-3 sm:space-y-4 text-slate-700 text-sm sm:text-base md:text-lg leading-[1.65]">
                  {t('aboutUsPage.aboutRuben.content', { returnObjects: true }).map((paragraph, index) => (
                    <motion.p key={index} variants={fadeInUpVariants} className="min-h-0">
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Ruben's Books — mobile-first */}
        <motion.section
          id="rubens-books"
          className="max-w-4xl mx-auto px-1"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          
          
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {(t('aboutUsPage.rubensBooks.books', { returnObjects: true }) || []).map((book, index) => (
              <motion.a
                key={index}
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-[2/3] w-full min-h-0 relative overflow-hidden bg-slate-100">
                  <img
                    src={book.imageUrl}
                    alt={book.imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col flex-1 min-h-0 p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 line-clamp-2 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
                    {book.subtitle}
                  </p>
                  <span className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-3 rounded-xl bg-amber-500 text-white font-semibold text-sm sm:text-base shadow-sm group-hover:bg-amber-600 transition-colors">
                    {t('aboutUsPage.rubensBooks.viewOnAmazon')}
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* 2. Enhanced Team Section */}
       
        <TeamSection />
        {/* 3. Enhanced Vision & Mission Section */}
        <motion.section
          id="vision-mission"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vision Card */}
          <motion.div 
            className="group relative bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl border border-sky-100 overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.div
                  className="bg-gradient-to-r from-sky-500 to-blue-600 p-3 rounded-xl shadow-lg mr-4"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-3xl xl:text-4xl font-bold font-gochi-hand bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-transparent">
                  {t('aboutUsPage.visionMission.visionTitle')}
                </h3>
              </div>
              <p className="text-slate-600 text-lg xl:text-xl leading-relaxed">
                {t('aboutUsPage.visionMission.visionContent')}
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            className="group relative bg-gradient-to-br from-white to-purple-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl border border-purple-100 overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg mr-4"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-3xl xl:text-4xl font-bold font-gochi-hand bg-gradient-to-r from-purple-700 to-pink-800 bg-clip-text text-transparent">
                  {t('aboutUsPage.visionMission.missionTitle')}
                </h3>
              </div>
              <p className="text-slate-600 text-lg xl:text-xl leading-relaxed">
                {t('mission.statement')}
              </p>
            </div>
          </motion.div>
        </motion.section>

     

        {/* 5. Transparency / Stats Section — no animation */}
        <section id="transparency">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10">
            <StatCard 
              icon={Award}
              number={t('hero.stat1Number')}
              text={t('hero.stat1Text')}
            />
            <StatCard 
              icon={Users}
              number={t('aboutUsPage.transparency.statVolunteersNumber')}
              text={t('aboutUsPage.transparency.stats.volunteers')}
            />
            <StatCard 
              icon={MapPin}
              number={t('hero.stat2Number')}
              text={t('hero.stat2Text')}
            />
            <StatCard 
              icon={Calendar}
              number={t('hero.stat3Number')}
              text={t('hero.stat3Text')}
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUsPage;
