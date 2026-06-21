import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { itemVariants, containerVariants } from "../utils/animations.js";

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating,
  avatar,
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -4 }}
    className="rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 p-8 hover:border-primary-300 dark:hover:border-primary-700 transition-all"
  >
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-dark-700 dark:text-dark-200 mb-6 leading-relaxed text-lg">
      "{content}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-4">
      <div
        aria-hidden="true"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex-shrink-0 flex items-center justify-center text-white font-bold"
      >
        {avatar}
      </div>
      <div>
        <h4 className="font-bold text-dark-900 dark:text-white">{name}</h4>
        <p className="text-sm text-dark-600 dark:text-dark-400">
          {role} at {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Anderson",
      role: "CEO",
      company: "Tech Innovators",
      content:
        "This platform transformed how we build and deploy applications. The performance improvements alone saved us thousands per month.",
      rating: 5,
      avatar: "SA",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      company: "Digital Solutions",
      content:
        "The component library and documentation are exceptional. Reduced development time by 40% on our last project.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      company: "Growth Systems",
      content:
        "Working with their team was a pleasure. Support is responsive, and the product just works. Highly recommended.",
      rating: 5,
      avatar: "ER",
    },
    {
      name: "David Wilson",
      role: "CTO",
      company: "Enterprise Corp",
      content:
        "Enterprise-grade reliability with startup-level agility. This is exactly what our organization needed.",
      rating: 5,
      avatar: "DW",
    },
    {
      name: "Jessica Lee",
      role: "Founder",
      company: "StartUp Labs",
      content:
        "Affordable, powerful, and easy to use. Perfect for bootstrapped startups. Got us to product-market fit faster.",
      rating: 5,
      avatar: "JL",
    },
    {
      name: "James Murphy",
      role: "VP Engineering",
      company: "Scale Inc",
      content:
        "The scalability is incredible. Handled our 10x traffic spike without any issues. Worth every penny.",
      rating: 5,
      avatar: "JM",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-900 -z-10" />

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
            <span className="bg-gradient-to-r from-primary-600 to-dark-900 dark:from-primary-400 dark:to-white bg-clip-text text-transparent">
              Loved by Hundreds of Users
            </span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            See what our customers have to say about their experience with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
