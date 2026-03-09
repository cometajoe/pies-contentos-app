import React from 'react';

const StatCard = ({ icon: Icon, number, text }) => {
  return (
    <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-slate-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full -translate-y-10 translate-x-10 opacity-60" />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl mb-4 shadow-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <div className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-2">
          {number}
        </div>

        <p className="text-slate-600 font-medium text-sm xl:text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default StatCard;
