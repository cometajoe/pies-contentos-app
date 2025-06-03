
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useCounter from '../hooks/useCounter'; // Adjusted path
import { statVariants  } from '../utils/animationVariants'; // Adjusted path


const StatCard = ({ icon: Icon, number, text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const formattedNumber = number.includes('+') ? number.replace(/\D/g, '') : number;
  const animatedNumber = useCounter(isVisible ? formattedNumber : 0, 10);
  
  return (
    <motion.div 
      className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 overflow-hidden"
      variants={statVariants}
      whileHover="hover"
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full -translate-y-10 translate-x-10 opacity-60 group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl mb-4 shadow-lg"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div 
          className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-2"
          key={animatedNumber}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {number.includes('+') ? `${animatedNumber}+` : animatedNumber}
        </motion.div>
        
        <p className="text-slate-600 font-medium text-sm xl:text-base leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
