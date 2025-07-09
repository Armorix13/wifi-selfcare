'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { TiltCard, FloatingIcon, MagneticButton } from '@/components/InteractiveElements';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@wifiselfcare.com',
      href: 'mailto:contact@wifiselfcare.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 123 456 7890',
      href: 'tel:+911234567890',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Brampton, ON',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'from-pink-500 to-purple-600' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'from-blue-500 to-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'from-blue-400 to-blue-600' },
    { icon: MessageCircle, href: '#', label: 'TikTok', color: 'from-gray-800 to-gray-900' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-open-sans leading-relaxed">
              Ready to transform your connectivity experience? We're here to help you find the perfect 
              WiFi solution for your home or business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-8">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 font-open-sans mb-8 leading-relaxed">
                Have questions about our services? Need technical support? Our team is ready to assist you 
                with all your WiFi connectivity needs.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <TiltCard
                    key={index}
                    className="card-hover"
                  >
                    <motion.a
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300 group block"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <FloatingIcon delay={index * 0.1}>
                          <info.icon className="h-6 w-6 text-white" />
                        </FloatingIcon>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold font-poppins text-gray-900">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 font-open-sans">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  </TiltCard>
                ))}
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <MagneticButton
                      key={index}
                      as="a"
                      href={social.href}
                      aria-label={social.label}
                      className={`p-4 bg-gradient-to-r ${social.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow`}
                    >
                      <FloatingIcon delay={index * 0.1}>
                        <social.icon className="h-6 w-6 text-white" />
                      </FloatingIcon>
                    </MagneticButton>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg card-hover"
            >
              <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-open-sans"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-open-sans"
                    placeholder="Enter your email address"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-open-sans resize-none"
                    placeholder="Tell us about your WiFi needs..."
                  />
                </motion.div>

                <MagneticButton
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 btn-glow neon-glow"
                >
                  <FloatingIcon>
                    <Send className="h-5 w-5" />
                  </FloatingIcon>
                  <span>Send Message</span>
                </MagneticButton>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
              Our Coverage Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide WiFi solutions across India, with special focus on urban and rural connectivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 text-center shadow-lg"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
              Pan India Coverage
            </h3>
            <p className="text-gray-600 font-open-sans max-w-2xl mx-auto">
              From metropolitan cities to rural villages, we're committed to bringing reliable 
              internet connectivity to every corner of India.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}