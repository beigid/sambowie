import React from 'react';
import { Link } from 'react-router-dom';
import samPhoto from '../assets/images/sam-main.png';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-orange-600 font-bold tracking-wider uppercase text-sm">
              Construction Consulting
            </h2>
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Building Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">Vision</span> with Precision.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
             Hello My name is Sam, and I build awesome stuff
            </p>
          </div>

          <ul className="space-y-3">
            {['Strategic Project Planning', 'Budget & Risk Management', 'Site Inspection & Quality Control'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-orange-500" size={20} />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200"
            >
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10"></div>

          <div className="rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:rotate-1">
            <img
              src={samPhoto}
              alt="Construction Site"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
            <p className="text-3xl font-black text-orange-600">10+</p>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Years Experience</p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Home;