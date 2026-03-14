/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#e0f7ff] flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/30 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full z-10"
      >
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <span className="text-[28.5px] font-bold tracking-[0.2em] text-brand-start uppercase">
            Developer Malcolm
          </span>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 mb-12 rounded-2xl bg-gradient-to-br from-brand-start to-brand-end shadow-lg shadow-sky-200"
        >
          <Code2 className="w-10 h-10 text-white" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1a202c] mb-4 leading-[1.1]">
          Software{' '}
          <span className="bg-gradient-to-r from-brand-start to-brand-end bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting high-performance digital experiences with precision and creativity. Ready to transform your ideas into reality.
        </p>

        {/* Form */}
        <div className="max-w-lg mx-auto w-full">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-2 rounded-3xl shadow-xl shadow-sky-100 flex flex-col sm:flex-row gap-2 items-stretch"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-2xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-start/20 transition-all text-lg"
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-gradient-to-r from-brand-start to-brand-end text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 active:scale-95 transition-all shadow-md shadow-sky-200 text-lg whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitted ? 'Sent!' : 'Bring Projects'}
            </button>
          </form>
          
          {/* Footer Text */}
          <p className="mt-6 text-slate-400 text-sm font-medium">
            Let's build something amazing together.
          </p>
        </div>
      </motion.div>
    </div>
  );
}


