import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import { cardVariants, floatingVariants, fadeInUpVariants, staggerContainer } from '../utils/animationVariants';
import { 
  Footprints, 
  Laptop, 
  GraduationCap,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// Project images
const projectImages = {
  shoes: 'ourwork/happy_feet.webp',
  remoteSchool: 'ourwork/remote_shool.webp',
  scholarship: 'ourwork/scolarship.webp'
};

const pageHeaderImage = 'ourwork/ourwork_header.webp';

const OurWorkPage = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  // Removed: const [activeProject, setActiveProject] = useState(0);

  const projectsFromT = t('ourWorkPage.projectsData', { returnObjects: true }) || [];
  
  const projectDetails = projectsFromT.map(proj => {
    let icon;
    let image;
    switch (proj.id) {
      case 'pies-contentos':
        icon = Footprints;
        image = projectImages.shoes;
        break;
      case 'remote-school':
        icon = Laptop;
        image = projectImages.remoteSchool;
        break;
      case 'scholarships':
        icon = GraduationCap;
        image = projectImages.scholarship;
        break;
      default:
        icon = Heart;
        image = '';
    }
    return { ...proj, icon, image };
  });

  const colorSchemes = {
    emerald: {
      gradient: 'from-emerald-500 to-teal-600',
      bg: 'from-white to-emerald-50',
      border: 'border-emerald-200',
      text: 'from-emerald-700 to-teal-800',
      accent: 'text-emerald-600',
      button: 'from-emerald-600 to-teal-600'
    },
    sky: {
      gradient: 'from-sky-500 to-blue-600',
      bg: 'from-white to-sky-50',
      border: 'border-sky-200',
      text: 'from-sky-700 to-blue-800',
      accent: 'text-sky-600',
      button: 'from-sky-600 to-blue-600'
    },
    purple: {
      gradient: 'from-purple-500 to-pink-600',
      bg: 'from-white to-purple-50',
      border: 'border-purple-200',
      text: 'from-purple-700 to-pink-800',
      accent: 'text-purple-600',
      button: 'from-purple-600 to-pink-600'
    }
  };

   const projectDisplayData = projectDetails.map((proj) => {
    let colorKey = 'emerald'; // default
    if (proj.id === 'remote-school') colorKey = 'sky';
    else if (proj.id === 'scholarships') colorKey = 'purple';
    return { ...proj, colorScheme: colorSchemes[colorKey] };
  });

  // Removed: handleNextProject, handlePrevProject
  // Removed: currentProjectData (will use 'project' from map)

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <PageHeader
        title={t('ourWorkPage.pageTitle')}
        subtitle={t('ourWorkPage.pageSubtitle')}
        backgroundImage={pageHeaderImage}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32 relative">
        
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-sky-200/30 to-blue-200/30 rounded-full blur-3xl -z-10"
          style={{ y: y1 }}
        />
        <motion.div 
          className="absolute top-96 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10"
          style={{ y: y2 }}
        />

        <motion.section
          className="max-w-5xl mx-auto text-center relative"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="absolute -top-10 -left-10 text-sky-200"
            variants={floatingVariants}
            animate="animate"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          
          <div className="inline-flex items-center justify-center mb-8 flex-col md:flex-row gap-3 ">
            <motion.div
              className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-2xl shadow-xl mr-4"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl sm:text-6xl font-bold font-gochi-hand bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-transparent">
              {t('ourWorkPage.mainSectionTitle')}
            </h2>
          </div>
          
          <motion.p 
            className="text-slate-600 text-lg xl:text-xl leading-relaxed max-w-4xl mx-auto"
            variants={fadeInUpVariants} // This variant is fine for a single paragraph
          >
            {t('ourWorkPage.mainSectionIntro')}
          </motion.p>
        </motion.section>

        {/* Display all projects sequentially */}
        {projectDisplayData.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.section
              key={project.id}
              className="relative p-2 md:p-6 rounded-3xl shadow-xl bg-gradient-to-br" // Added base styling for each project section container
              style={{ '--tw-gradient-from': project.colorScheme.bg.split(' ')[0], '--tw-gradient-to': project.colorScheme.bg.split(' ')[1] }} // Dynamic gradient for bg
              variants={fadeInUpVariants} // Animate each project section as it comes into view
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} // Adjust amount as needed
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-2 md:p-6 rounded-2xl`}> {/* Inner container with border */}
                
                <motion.div 
                  className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                  variants={cardVariants} // cardVariants for 3D tilt effect on hover
                  // No need for initial/whileInView here if parent section handles it
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.colorScheme.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                   
                  </div>
                </motion.div>

                <motion.div 
                  className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  variants={staggerContainer} // Stagger children within this content block
                  // Parent's whileInView will trigger this if initial/animate are set, or it can have its own
                  initial="hidden" // Added initial and animate for content staggering
                  animate="visible" // when parent is visible
                >
                  <motion.div variants={fadeInUpVariants}>
                    <div className="flex items-center mb-4">
                      <motion.div
                        className={`hidden md:block bg-gradient-to-r ${project.colorScheme.gradient} p-3 rounded-xl shadow-lg mr-4`}
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <project.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className={`text-3xl xl:text-4xl font-bold font-gochi-hand bg-gradient-to-r ${project.colorScheme.text} bg-clip-text text-transparent`}>
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>

                  <motion.p 
                    className="text-slate-600 text-lg leading-relaxed"
                    variants={fadeInUpVariants}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4" // Adjusted for better spacing
                    variants={fadeInUpVariants}
                  >
                    {project.impact && Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-slate-100 rounded-lg">
                        <div className={`text-xl sm:text-2xl font-bold ${project.colorScheme.accent}`}>
                          {value}
                        </div>
                        <div className="text-xs text-slate-500 capitalize">
                          {t(`ourWorkPage.impact.${key.toLowerCase()}`, key)}
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeInUpVariants}>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">
                      {project.id === 'scholarships' ? t('ourWorkPage.scholarshipSupportTitle') : t('ourWorkPage.workModelTitle')}
                    </h4>
                    <ul className="space-y-3">
                      {(project.scholarshipSupport || project.workModel || []).map((item, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }} // Keep individual item animation simple
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }} // Stagger within the list
                        >
                          <CheckCircle className={`w-5 h-5 ${project.colorScheme.accent} mt-0.5 flex-shrink-0`} />
                          <span className="text-slate-600">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                 
                </motion.div>
              </div>
            </motion.section>
          );
        })}
        
        {/* Removed Project Navigation Buttons and Dots */}

        <motion.section
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 sm:p-16 text-white relative overflow-hidden"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
            }}
          />
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold font-gochi-hand mb-4">
              {t('ourWorkPage.overallImpact.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('ourWorkPage.overallImpact.subtitle')}
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer} // stagger for the stat items
            initial="hidden"
            whileInView="visible" // Animate when this container is in view
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="text-center" variants={fadeInUpVariants}>
              <div className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-2">{t('hero.stat1Number')}</div>
              <div className="text-slate-300">{t('ourWorkPage.overallImpact.directBeneficiaries')}</div>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUpVariants}>
              <div className="text-4xl sm:text-5xl font-bold text-sky-400 mb-2">{t('hero.stat2Number')}</div>
              <div className="text-slate-300">{t('hero.communitiesServed')}</div>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUpVariants}>
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">{t('hero.stat3Number')}</div>
              <div className="text-slate-300">{t('hero.yearsOfWork')}</div>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUpVariants}>
              <div className="text-4xl sm:text-5xl font-bold text-pink-400 mb-2">$200K+</div>
              <div className="text-slate-300">{t('ourWorkPage.overallImpact.socialInvestment')}</div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="text-center max-w-4xl mx-auto"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold font-gochi-hand text-slate-800 mb-6">
            {t('ourWorkPage.finalCta.title')}
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {t('ourWorkPage.finalCta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => window.location.href = '/get-involved#sponsor'} // Updated link
              className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('ourWorkPage.finalCta.donateButton')}
            </motion.button>
            
            <motion.button
              onClick={() => window.location.href = '/get-involved#volunteer'}
              className="bg-white text-slate-800 border-2 border-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('ourWorkPage.finalCta.volunteerButton')}
            </motion.button>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default OurWorkPage;