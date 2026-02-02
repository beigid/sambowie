import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, PlayCircle, X } from 'lucide-react';
import { projectsData } from './helpers/projectsData';

const categories = ["All", "Residential", "Interior", "Consulting"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-20 px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16 text-center space-y-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="px-4 py-1.5 rounded-full border border-[#120d26]/10 bg-white text-[#120d26] text-xs font-bold tracking-widest uppercase shadow-sm">
            Our Portfolio
          </span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black text-[#120d26]">
          Selected <span className="text-[#e91e63]">Works</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border 
                ${activeCategory === cat
                ? 'bg-[#120d26] text-white border-[#120d26] shadow-lg'
                : 'bg-white text-gray-500 border-gray-200 hover:border-[#e91e63]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BENTO GRID */}
      <motion.div layout className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-200 shadow-md 
                ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${project.size === 'tall' ? 'md:row-span-2' : ''}
              `}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              {project.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/50">
                    <PlayCircle size={40} className="text-white" />
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#120d26]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#e91e63] font-bold text-sm uppercase mb-2">{project.category}</span>
                <div className="flex justify-between items-end">
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  <div className="bg-[#e91e63] p-2 rounded-full text-white"><ArrowUpRight size={20} /></div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#120d26]/95 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl relative"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 bg-black/10 p-2 rounded-full hover:bg-black/20 transition-colors">
                <X size={24} />
              </button>

              <div className="md:w-2/3 bg-black flex items-center justify-center">
                {selectedProject.type === 'video' ? (
                  <video src={selectedProject.videoSrc} controls autoPlay className="w-full h-full object-contain" />
                ) : (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                )}
              </div>

              <div className="md:w-1/3 p-8 flex flex-col bg-white">
                <span className="text-[#e91e63] font-bold uppercase text-sm mb-2">{selectedProject.category}</span>
                <h2 className="text-3xl font-black text-[#120d26] mb-4">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">{selectedProject.desc}</p>
                <div className="mt-auto border-t pt-6 flex gap-8">
                  <div><p className="text-xs text-gray-400 uppercase font-bold">Client</p><p className="font-semibold">{selectedProject.client}</p></div>
                  <div><p className="text-xs text-gray-400 uppercase font-bold">Year</p><p className="font-semibold">{selectedProject.year}</p></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;