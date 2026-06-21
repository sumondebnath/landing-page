import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations.js";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-dark-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 -z-10" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                🚀 Now Live - Premium SaaS Template
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-dark-900 via-primary-600 to-dark-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent">
              Build Your Next
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
              Incredible Product
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Create stunning, high-performance web applications with React, Vite,
            and Tailwind CSS. Beautiful design meets powerful technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#pricing"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#services"
              className="px-8 py-4 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-900 dark:text-white font-semibold flex items-center justify-center gap-2 hover:bg-dark-200 dark:hover:bg-dark-700 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} />
              Watch Demo
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "10K+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.number}
                </div>
                <div className="text-sm text-dark-600 dark:text-dark-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
