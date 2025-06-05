import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Footprints, Award, ArrowRight, Sparkles } from 'lucide-react';
import ReadMoreButton from '../components/ReadMoreButton';

const OurWork = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.25, 0.25, 0.75]
      } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.25, 0.25, 0.75]
      } 
    },
  };

  const workAreas = [
    {
      icon: BookOpen,
      titleKey: 'ourWork.education.title',
      descriptionKey: 'ourWork.education.description',
      color: 'text-sky-600',
      bgColor: 'bg-gradient-to-br from-sky-50 to-sky-100',
      hoverBg: 'group-hover:from-sky-100 group-hover:to-sky-200',
      iconBg: 'bg-sky-500',
      shadowColor: 'shadow-sky-200/50',
    },
    {
      icon: Footprints,
      titleKey: 'ourWork.shoes.title',
      descriptionKey: 'ourWork.shoes.description',
      color: 'text-emerald-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      hoverBg: 'group-hover:from-emerald-100 group-hover:to-emerald-200',
      iconBg: 'bg-emerald-500',
      shadowColor: 'shadow-emerald-200/50',
    },
    {
      icon: Award,
      titleKey: 'ourWork.scholarships.title',
      descriptionKey: 'ourWork.scholarships.description',
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      hoverBg: 'group-hover:from-purple-100 group-hover:to-purple-200',
      iconBg: 'bg-purple-500',
      shadowColor: 'shadow-purple-200/50',
    },
  ];

  return (
    <section id="our-work" ref={ref} className="relative bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-400 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
        
          
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-gochi-hand text-slate-800 mb-4 sm:mb-6 leading-tight"
            variants={itemVariants}
          >
              {t('ourWork.title')}
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {t('ourWork.subtitle')}
          </motion.p>
        </div>

        {/* Work Areas Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {workAreas.map((area, index) => (
            <motion.div
              key={index}
              className={`
                group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl 
                shadow-lg hover:shadow-2xl ${area.shadowColor}
                transition-all duration-500 ease-out
                transform hover:-translate-y-2 hover:scale-[1.02]
                border border-slate-100 hover:border-slate-200
                backdrop-blur-sm
              `}
              variants={cardVariants}
            >
              {/* Gradient overlay on hover */}
              <div className={`
                absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 ${area.bgColor} ${area.hoverBg}
              `}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`
                    relative p-4 sm:p-5 rounded-2xl ${area.iconBg} 
                    transition-all duration-500 
                    group-hover:scale-110 group-hover:rotate-3
                    shadow-xl group-hover:shadow-2xl
                  `}>
                    <area.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                    
                    {/* Icon glow effect */}
                    <div className={`
                      absolute inset-0 rounded-2xl ${area.iconBg} 
                      opacity-0 group-hover:opacity-30 blur-xl
                      transition-opacity duration-500
                    `}></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 text-center mb-3 sm:mb-4 group-hover:text-slate-900 transition-colors duration-300">
                  {t(area.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-center leading-relaxed text-sm sm:text-base group-hover:text-slate-700 transition-colors duration-300">
                  {t(area.descriptionKey)}
                </p>
              </div>

              {/* Hover effects */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Learn More Button */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
                 <ReadMoreButton href={"/our-work"} variants={itemVariants} title="ourWork.readMore" />

        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurWork;