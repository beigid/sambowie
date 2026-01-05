import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const Success = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
    >
      <CheckCircle size={80} className="text-orange-500 mb-6" />
      <h1 className="text-4xl font-black text-gray-900 mb-4">Message Received!</h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Thanks for reaching out. Sam will review your project details and get back to you within 24 hours.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors"
      >
        <Home size={20} />
        Back to Home
      </Link>
    </motion.div>
  );
};

export default Success;