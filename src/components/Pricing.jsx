import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { itemVariants, containerVariants } from "../utils/animations.js";

const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted,
  cta,
  href,
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8 }}
    className={`relative rounded-2xl p-8 transition-all ${
      highlighted
        ? "bg-gradient-to-br from-primary-500 to-primary-700 text-white border border-primary-600 shadow-2xl lg:scale-105"
        : "bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700"
    }`}
  >
    {highlighted && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-yellow-400 text-dark-900 px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      </div>
    )}

    <div className="mb-6">
      <h3
        className={`text-2xl font-bold mb-2 ${!highlighted && "text-dark-900 dark:text-white"}`}
      >
        {name}
      </h3>
      <p
        className={
          highlighted ? "text-white/80" : "text-dark-600 dark:text-dark-300"
        }
      >
        {description}
      </p>
    </div>

    <div className="mb-6">
      <div className="flex items-baseline">
        <span className="text-5xl font-bold">{price}</span>
        <span
          className={`ml-2 ${highlighted ? "text-white/80" : "text-dark-600 dark:text-dark-400"}`}
        >
          /month
        </span>
      </div>
      <p
        className={`text-sm mt-2 ${highlighted ? "text-white/70" : "text-dark-500 dark:text-dark-400"}`}
      >
        Billed annually, cancel anytime
      </p>
    </div>

    <motion.a
      href={href}
      className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all ${
        highlighted
          ? "bg-white text-primary-600 hover:bg-white/90"
          : "bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:shadow-lg"
      } block text-center`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {cta}
    </motion.a>

    <div className="space-y-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Check
            size={20}
            className={`flex-shrink-0 mt-0.5 ${
              highlighted
                ? "text-white"
                : "text-primary-600 dark:text-primary-400"
            }`}
          />
          <span
            className={
              highlighted ? "text-white/90" : "text-dark-600 dark:text-dark-300"
            }
          >
            {feature}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for getting started",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "Community support",
        "1 GB storage",
      ],
      cta: "Start Free",
      href: "#cta",
    },
    {
      name: "Professional",
      price: "$79",
      description: "For growing teams",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "100 GB storage",
        "Team collaboration",
      ],
      highlighted: true,
      cta: "Start Free Trial",
      href: "#cta",
    },
    {
      name: "Enterprise",
      price: "$299",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "24/7 phone support",
        "Unlimited storage",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      href: "#cta",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900/50 dark:to-dark-900 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible to scale.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
