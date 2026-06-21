import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, GitBranch, Headphones } from "lucide-react";
import { itemVariants, containerVariants } from "../utils/animations.js";

const ServiceCard = ({ number, icon, title, description }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ x: 8 }}
    className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-700 border border-dark-100 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-600 transition-all group"
  >
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 text-white group-hover:scale-110 transition-transform">
        {icon}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
          {number}
        </span>
        <h3 className="text-xl font-bold text-dark-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-dark-600 dark:text-dark-300">{description}</p>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      number: "01",
      icon: <Code size={24} />,
      title: "Custom Development",
      description:
        "Tailored solutions built with cutting-edge technologies. From concept to production, we handle it all.",
    },
    {
      number: "02",
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with accessibility and usability at the core.",
    },
    {
      number: "03",
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description:
        "Lightning-fast load times and smooth interactions. We optimize every byte.",
    },
    {
      number: "04",
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description:
        "Work seamlessly with our team using modern development practices and tools.",
    },
    {
      number: "05",
      icon: <GitBranch size={24} />,
      title: "Continuous Deployment",
      description:
        "Automated deployments and updates. Ship code faster and more reliably.",
    },
    {
      number: "06",
      icon: <Headphones size={24} />,
      title: "24/7 Support",
      description:
        "Round-the-clock support from our expert team. We're always here to help.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900/50 dark:to-dark-900 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-dark-900 dark:from-primary-400 dark:to-white bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Comprehensive solutions to take your business to the next level with
            modern technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
