import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TeamMemberCardMinimal } from './TeamMemberCard';
import {
  fadeInUpVariants,
  staggerContainer,
} from '../utils/animationVariants';

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="team"
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center justify-center mb-6">
          <motion.div
            className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-2xl shadow-xl mr-4"
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-bold font-gochi-hand bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-transparent">
            {t('aboutUsPage.team.title')}
          </h2>
        </div>
        <motion.p
          className="text-slate-600 text-lg xl:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {t('aboutUsPage.team.intro')}
        </motion.p>
      </div>

      {/* Organigram: Level 1 → Level 2 (member2, member3) → Level 3 */}
      <motion.div
        className="max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex flex-col items-center">
          {/* Level 1 — member1 (top) */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-sm sm:max-w-md">
              <TeamMemberCardMinimal
                member={t('aboutUsPage.team.member1', { returnObjects: true })}
                index={0}
              />
            </div>
          </div>

          {/* Connector 1: vertical + T to level 2 */}
          <svg className="w-12 sm:w-16 h-16 sm:h-20 text-sky-400/90 shrink-0" viewBox="0 0 64 80" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M32 0 v48 M16 48 h32 M16 48 v32 M48 48 v32" strokeLinecap="round" />
          </svg>

          {/* Level 2 — member2, member3 (misma altura con items-stretch + h-full) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-2xl sm:max-w-4xl px-2 sm:px-4 items-stretch">
            {['member2', 'member3'].map((key, index) => (
              <motion.div key={key} className="w-full max-w-sm mx-auto h-full min-h-0 flex" variants={fadeInUpVariants}>
                <TeamMemberCardMinimal
                  member={t(`aboutUsPage.team.${key}`, { returnObjects: true })}
                  index={index + 1}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Connector 2: vertical to level 3 */}
          <svg className="w-4 h-12 sm:h-14 text-sky-400/70 shrink-0" viewBox="0 0 16 56" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M8 0 v56" strokeLinecap="round" />
          </svg>

          {/* Level 3 — member4 (bottom) */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-sm sm:max-w-md">
              <TeamMemberCardMinimal
                member={t('aboutUsPage.team.member4', { returnObjects: true })}
                index={3}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TeamSection;
