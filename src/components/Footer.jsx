import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#features" },
      { label: "Enterprise", href: "#pricing" },
    ],
    Company: [
      { label: "About", href: "#services" },
      { label: "Blog", href: "#testimonials" },
      { label: "Careers", href: "#cta" },
      { label: "Press", href: "#cta" },
    ],
    Resources: [
      { label: "Documentation", href: "#faq" },
      { label: "API Docs", href: "#faq" },
      { label: "Community", href: "#testimonials" },
      { label: "Contact", href: "#cta" },
    ],
    Legal: [
      { label: "Privacy", href: "#faq" },
      { label: "Terms", href: "#faq" },
      { label: "Cookies", href: "#faq" },
      { label: "Compliance", href: "#features" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-dark-900 dark:bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 md:py-20 grid md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Nexus
              </h3>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              Building the future of web development with modern tools and
              technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700" />

        {/* Bottom Footer */}
        <div className="py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-sm">
            &copy; 2024 Nexus. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-primary-500/20 hover:bg-primary-500/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-primary-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
