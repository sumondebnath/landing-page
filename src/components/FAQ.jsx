import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { itemVariants, containerVariants } from "../utils/animations.js";

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = `faq-answer-${index}`;

  return (
    <motion.div
      variants={itemVariants}
      className="rounded-xl border border-dark-100 dark:border-dark-700 overflow-hidden hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-dark-50 dark:bg-dark-800 hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
        whileHover={{ paddingLeft: 24 }}
      >
        <span className="font-semibold text-dark-900 dark:text-white">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} className="text-primary-600 dark:text-primary-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              id={answerId}
              className="px-6 py-4 text-dark-600 dark:text-dark-300 border-t border-dark-100 dark:border-dark-700"
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple! Sign up for an account, choose a plan that fits your needs, and you'll have instant access to all features. Our onboarding guide will walk you through the setup process step by step.",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we'll adjust your billing accordingly.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for all new users with full access to all features. No credit card required to get started.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for larger enterprises.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with GDPR, CCPA, and other international standards.",
    },
    {
      question: "Do you offer API access?",
      answer:
        "Yes! All our plans include API access. We provide comprehensive API documentation and SDKs for popular programming languages.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for all plans and priority phone support for Professional and Enterprise plans. Our support team is available 24/7 for Enterprise customers.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export all your data at any time in various formats (JSON, CSV, etc.). We believe your data is yours and should be portable.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-dark-900 dark:via-dark-900 dark:to-dark-900 -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            Find answers to common questions about our service.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
