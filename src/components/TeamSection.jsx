import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import  {TeamMemberCardMinimal} from './TeamMemberCard'; // Adjusted path
import { 
    fadeInUpVariants, 
    staggerContainer,
} from '../utils/animationVariants';

const teamMembersData = [
  { id: 'member1', translationKey: 'aboutUsPage.team.member1' },
  { id: 'member2', translationKey: 'aboutUsPage.team.member2' },
  { id: 'member3', translationKey: 'aboutUsPage.team.member3' },
  { id: 'member4', translationKey: 'aboutUsPage.team.member4' },

 
];


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
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamMembersData.map((memberData, index) => {
              const member = t(memberData.translationKey, { returnObjects: true });
              return (
                <TeamMemberCardMinimal 
                  key={memberData.id} 
                  member={member} 
                  index={index}
                />
              );
            })}
          </motion.div>
        </motion.section>
  );
}
export default TeamSection;