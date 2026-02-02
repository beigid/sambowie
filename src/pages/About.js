import React from 'react';
import { motion } from 'framer-motion';
import samPhoto1 from '../assets/images/sam-working-1.jpeg';
import samPhoto2 from '../assets/images/sam-working-2.jpeg';
import samPhoto3 from '../assets/images/sam-working-3.jpeg';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">

      {/* Hero Section with Photo */}
      <div className="relative overflow-hidden bg-[#120d26] text-white">
        {/* Background gradient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1fb4b4]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e91e63]/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-[#1fb4b4]/20 rounded-full border border-[#1fb4b4]/30">
                <span className="text-[#1fb4b4] font-bold tracking-widest uppercase text-xs">
                  About Sam Bowie
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Building Dreams,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e91e63] via-[#ffa500] to-[#1fb4b4]">
                  One Project at a Time
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#ffa500] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#1fb4b4] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
                <img
                  src={samPhoto1}
                  alt="Sam Bowie at work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d26]/60 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#e91e63] p-6 rounded-2xl shadow-xl text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-90">Certified</p>
                <p className="text-2xl font-black">Professional</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#120d26]">
              My <span className="text-[#e91e63]">Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#e91e63] via-[#ffa500] to-[#1fb4b4] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>

              <p className="text-gray-600 leading-relaxed">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional Photos Section - WHITE BACKGROUND FULL WIDTH */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#120d26]">
                At <span className="text-[#ffa500]">Work</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Photo 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-xl h-80 group cursor-pointer"
              >
                <img
                  src={samPhoto1}
                  alt="Sam working"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d26]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">On Site</p>
                    <p className="text-gray-300 text-sm">Project Management</p>
                  </div>
                </div>
              </motion.div>

              {/* Photo 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-xl h-80 group cursor-pointer"
              >
                <img
                  src={samPhoto2}
                  alt="Sam consulting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rotate-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d26]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">Consulting</p>
                    <p className="text-gray-300 text-sm">Client Meetings</p>
                  </div>
                </div>
              </motion.div>

              {/* Photo 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-xl h-80 group cursor-pointer"
              >
                <img
                  src={samPhoto3}
                  alt="Sam inspecting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d26]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">Inspection</p>
                    <p className="text-gray-300 text-sm">Quality Control</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;