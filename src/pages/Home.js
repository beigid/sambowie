import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] relative overflow-hidden">

      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1fb4b4]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e91e63]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-[#1fb4b4]/10 rounded-full border border-[#1fb4b4]/20">
                <h2 className="text-[#1fb4b4] font-bold tracking-widest uppercase text-xs">
                  Construction Consulting
                </h2>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-[#120d26] leading-[1.1]">
                Building Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e91e63] via-[#ffa500] to-[#1fb4b4]">
                  Dream Space
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg border-l-4 border-[#ffa500] pl-6">
                Hello, my name is Sam. I combine bold vision with precise execution to build awesome stuff.
              </p>
            </div>

            {/* Services Box */}
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <ul className="space-y-4">
                {['Strategic Project Planning', 'Budget & Risk Management', 'Site Inspection & Quality Control'].map((item, index) => (
                  <li key={item} className="flex items-center gap-4 text-[#120d26]">
                    <div className={`p-2 rounded-lg ${index === 0 ? 'bg-orange-100 text-orange-600' : index === 1 ? 'bg-pink-100 text-pink-600' : 'bg-teal-100 text-teal-600'}`}>
                      <CheckCircle2 size={18} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 bg-[#120d26] text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-[#e91e63] hover:shadow-[0_10px_30px_rgba(233,30,99,0.3)] hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} />
            </Link>
          </div>

          {/* RIGHT SIDE - Logo Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Animated background rings */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0 opacity-20"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-4 border-[#1fb4b4] rounded-full"></div>
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute inset-0 opacity-20"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-4 border-[#e91e63] rounded-full"></div>
            </motion.div>

            {/* Floating gradient orbs */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-32 h-32 bg-[#ffa500] rounded-full mix-blend-multiply filter blur-xl opacity-70"
            ></motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#1fb4b4] rounded-full mix-blend-multiply filter blur-xl opacity-70"
            ></motion.div>

            {/* Sparkle elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-8 text-[#ffa500]"
            >
              <Sparkles size={32} fill="currentColor" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-20 -right-8 text-[#e91e63]"
            >
              <Sparkles size={24} fill="currentColor" />
            </motion.div>

            {/* Main Logo Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e91e63]/30 via-[#ffa500]/30 to-[#1fb4b4]/30 rounded-full blur-3xl animate-pulse"></div>

              {/* Logo with border */}
              <div className="relative bg-white p-4 rounded-full shadow-2xl border-8 border-white">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  src={logo}
                  alt="Sam Bowie Consulting Logo"
                  className="w-80 h-80 object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Stats Badge - Years Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.8, duration: 0.6, scale: { type: "spring", stiffness: 400, damping: 10 } }}
              className="absolute bottom-10 -left-6 bg-[#e91e63] p-8 rounded-tr-3xl rounded-bl-3xl shadow-lg text-white"
            >
              <p className="text-5xl font-black leading-none">10+</p>
              <p className="text-sm font-bold uppercase tracking-widest mt-1 opacity-90">Years Exp.</p>
            </motion.div>

            {/* Quality Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-10 -right-9 bg-white p-4 rounded-xl shadow-xl border-l-4 border-[#1fb4b4] hidden md:block"
            >
              <p className="text-[#120d26] font-bold">Premium Quality</p>
              <p className="text-xs text-gray-500">Guaranteed</p>
            </motion.div>

          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Home;