import React from 'react';
import { RESUME_DATA } from '../constants';
import { Folder, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">University Projects</h2>
        <p className="text-xl text-slate-400">Innovations and technical implementations during my academic tenure.</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {RESUME_DATA.projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group bg-card rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={project.image || `https://picsum.photos/seed/${idx + 50}/800/400`} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                  <Folder size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Project</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {project.description.map((desc, dIdx) => (
                  <li key={dIdx} className="text-sm text-slate-400 flex items-start leading-relaxed">
                     <span className="mr-3 text-emerald-500 mt-1.5">•</span> <span>{desc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
                <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white flex items-center transition-colors">
                  <Github className="w-4 h-4 mr-2" /> GitHub Repo
                </a>
                <button className="text-sm text-slate-400 hover:text-emerald-400 flex items-center transition-colors">
                  Details <ExternalLink className="w-3 h-3 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;