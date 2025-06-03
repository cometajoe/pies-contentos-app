import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cardVariants, floatingVariants } from '../utils/animationVariants';
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const TeamMemberCard = ({ member, index }) => {
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
      {/* Subtle gradient overlay on card hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      <div className="relative p-8 text-center">
        {/* Profile image with enhanced styling */}
        <div className="relative mb-6">
          <motion.div
            className="w-32 h-32 xl:w-36 xl:h-36 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-white ring-offset-4 ring-offset-slate-50 group-hover:ring-emerald-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={member.imageUrl || `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80`}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Image overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          
          {/* Enhanced floating decorative element */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-700 rounded-full shadow-lg group-hover:from-amber-400 group-hover:to-orange-500 transition-colors duration-300"
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
          className="text-emerald-600 font-semibold mb-4 text-sm xl:text-base group-hover:text-emerald-700 transition-colors duration-300"
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
        
        {/* Enhanced hover overlay with better contrast and animation */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/40 to-transparent flex flex-col items-center justify-end p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Contact buttons */}
              <motion.div 
                className="flex space-x-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <motion.button
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
                <motion.button
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-4 h-4" />
                </motion.button>
                <motion.button
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-4 h-4" />
                </motion.button>
              </motion.div>
              
              {/* View profile button */}
              <motion.button
                className="group/btn bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Profile</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};


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
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
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

export default TeamMemberCard;
export { TeamMemberCardMinimal };