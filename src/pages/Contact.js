import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone} from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-black text-gray-900">Let's Talk Shop.</h1>
            <p className="mt-4 text-gray-600 text-lg">
              Have a project in mind? Reach out for a consultation or a quote.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold">Call Us</p>
                <p className="text-gray-900 font-medium">(555) 000-0000</p>
              </div>
            </div>
            {/* Repeat for Email/Address */}
          </div>
        </div>

        {/* Right Side: The Netlify Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-4"
          >
            {/* HIDDEN INPUT: Required for Netlify + React */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
              <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="John Doe" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
              <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;