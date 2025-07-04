// src/pages/AboutUsPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  Quote
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32 relative">
        
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-sky-200/30 to-blue-200/30 rounded-full blur-3xl -z-10"
          style={{ y: y1 }}
        />
        <motion.div 
          className="absolute top-96 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10"
          style={{ y: y2 }}
        />

        {/* 1. Enhanced Historia Section */}
        <motion.section
          id="history"
          className="max-w-5xl mx-auto text-center relative"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Floating decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 text-sky-200"
            variants={floatingVariants}
            animate="animate"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          
          <div className="inline-flex items-center justify-center mb-8">
            <motion.div
              className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-2xl shadow-xl mr-4"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <BookOpen className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl sm:text-6xl font-bold font-gochi-hand bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-transparent">
              {t('aboutUsPage.history.title')}
            </h2>
          </div>
          
          <motion.div 
            className="prose prose-lg prose-slate max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t('aboutUsPage.history.content', { returnObjects: true }).map((paragraph, index) => (
              <motion.p 
                key={index}
                className="text-slate-600 text-lg xl:text-xl leading-relaxed mb-6 last:mb-0"
                variants={fadeInUpVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
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

        {/* 4. Enhanced Quote Section */}
        <motion.section
          id="quote"
          className="relative py-20 rounded-3xl overflow-hidden"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700">
<div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage:
      "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
  }}
/>          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
            <motion.div
              className="inline-block mb-8"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              <Quote className="w-16 h-16 text-sky-200" />
            </motion.div>
            
            <motion.blockquote 
              className="text-2xl sm:text-4xl xl:text-5xl italic text-white leading-relaxed font-medium mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              "{t('aboutUsPage.quote.text')}"
            </motion.blockquote>
            
            <motion.cite 
              className="block text-sky-200 text-lg xl:text-xl not-italic font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              – {t('aboutUsPage.quote.author')}
            </motion.cite>
          </div>
        </motion.section>

        {/* 5. Enhanced Transparency Section */}
        <motion.section
          id="transparency"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <motion.div
                className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-xl mr-4"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <BarChart2 className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl sm:text-6xl font-bold font-gochi-hand bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-transparent">
                {t('aboutUsPage.transparency.title')}
              </h2>
            </div>
            
            <motion.p 
              className="text-slate-600 text-lg xl:text-xl max-w-4xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t('aboutUsPage.transparency.intro')}
            </motion.p>
            
            <motion.a 
              href="#"
              className="group inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {t('aboutUsPage.transparency.reportLinkText')}
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
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
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
};

export default AboutUsPage;