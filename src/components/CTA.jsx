import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations.js";

const CTA = () => {
  return (
    <section id="cta" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 -z-10" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <Zap size={16} className="text-white" />
              <span className="text-sm font-medium text-white">Ready to get started?</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Transform Your Ideas Into Reality
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of developers and teams building amazing products. Get started free
            today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#pricing"
              className="px-8 py-4 rounded-lg bg-white text-primary-600 font-semibold flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#faq"
              className="px-8 py-4 rounded-lg bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
