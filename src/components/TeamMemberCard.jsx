import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cardVariants, floatingVariants } from '../utils/animationVariants';
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';




// Minimal version with subtle effects
const TeamMemberCardMinimal = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform-gpu"
      variants={cardVariants}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      <div className="relative p-8 text-center">
        <div className="relative mb-6">
          <motion.div
            className="w-32 h-32 xl:w-36 xl:h-36 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-white ring-offset-4 ring-offset-slate-50 group-hover:ring-slate-100 group-hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={member.imageUrl || `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80`}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            />
          </motion.div>
          
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-700 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            variants={floatingVariants}
            animate="animate"
          />
        </div>
        
        <motion.h3 
          className="text-xl xl:text-2xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {member.name}
        </motion.h3>
        
        <motion.p 
          className="text-slate-600 font-semibold mb-4 text-sm xl:text-base group-hover:text-slate-700 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {member.role}
        </motion.p>
        
        <motion.p 
          className="text-slate-500 text-sm xl:text-base leading-relaxed group-hover:text-slate-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {member.bio}
        </motion.p>
        
        {/* Subtle border highlight on hover */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-slate-200 transition-colors duration-300" />
        
        {/* Bottom accent line */}
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent transition-all duration-300"
          initial={{ width: 0 }}
          whileInView={{ width: isHovered ? '80%' : '0%' }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export { TeamMemberCardMinimal };