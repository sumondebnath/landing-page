import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Cpu, BarChart3, Smartphone, Lock } from "lucide-react";
import { containerVariants, itemVariants } from "../utils/animations.js";

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all"
  >
    <motion.div
      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay: index * 0.1 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white">
      {title}
    </h3>
    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description:
        "Built with Vite for instant HMR and blazing-fast build times. Optimized for production performance.",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security practices with regular updates and best-in-class error handling.",
    },
    {
      icon: <Cpu size={24} />,
      title: "Highly Scalable",
      description:
        "Designed to grow with your needs. Handle millions of requests without breaking a sweat.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Advanced Analytics",
      description:
        "Real-time insights and comprehensive dashboards to track all your important metrics.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Fully Responsive",
      description:
        "Mobile-first design that works perfectly on all devices and screen sizes.",
    },
    {
      icon: <Lock size={24} />,
      title: "Privacy First",
      description:
        "Your data is yours. We implement the highest standards of data protection and privacy.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-dark-900 dark:via-dark-900 dark:to-dark-900 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-dark-900 to-primary-600 dark:from-white dark:to-primary-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your application
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
