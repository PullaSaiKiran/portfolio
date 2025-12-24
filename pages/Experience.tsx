import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">Work Experience</h2>
        <p className="text-xl text-slate-400">Professional journey and internships.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {RESUME_DATA.experience.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="relative pl-8 pb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            {/* Timeline Line */}
            <div className="absolute left-[19px] top-8 bottom-0 w-0.5 bg-slate-800"></div>

            {/* Icon */}
            <div className="absolute left-0 top-0 bg-dark p-2.5 rounded-full border-2 border-emerald-500 z-10 shadow-lg shadow-emerald-500/20">
               <Briefcase className="w-5 h-5 text-emerald-400" />
            </div>

            <div className="ml-6 bg-card rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/30 transition-all shadow-xl group">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                  <p className="text-emerald-400 font-medium text-lg mt-1">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
                  <div className="flex items-center text-slate-400 bg-slate-800 px-3 py-1 rounded-full text-sm">
                    <Calendar className="w-3 h-3 mr-2" /> {exp.duration}
                  </div>
                  {exp.location && (
                    <div className="flex items-center text-slate-500 text-sm">
                      <MapPin className="w-3 h-3 mr-2" /> {exp.location}
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start text-slate-300 leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-3 mt-2 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;