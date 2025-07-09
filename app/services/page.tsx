'use client';

import { motion } from 'framer-motion';
import { Wifi, Zap, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import { TiltCard, FloatingIcon, InteractiveBlob, MagneticButton } from '@/components/InteractiveElements';

export default function Services() {
  const providers = [
    {
      name: 'BSNL',
      description: 'Reliable government-backed internet services with extensive coverage across India.',
      features: ['Pan India Coverage', 'Government Backed', 'Affordable Plans', 'Rural Connectivity'],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      name: 'My Internet',
      description: 'Premium high-speed internet solutions for modern homes and businesses.',
      features: ['High-Speed Fiber', 'Premium Support', 'Business Solutions', 'Custom Plans'],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      name: 'Airtel',
      description: 'Leading telecom provider offering cutting-edge internet technology.',
      features: ['5G Ready', 'Fastest Speeds', 'Wide Coverage', 'Digital Services'],
      color: 'from-red-500 to-red-700',
      bgColor: 'from-red-50 to-red-100',
    },
    {
      name: 'Jio',
      description: 'Revolutionary digital services with affordable high-speed internet.',
      features: ['Digital India', 'Affordable Rates', 'Bundled Services', 'Innovation Focus'],
      color: 'from-indigo-500 to-indigo-700',
      bgColor: 'from-indigo-50 to-indigo-100',
    },
  ];

  const serviceFeatures = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Lightning-fast connections up to 1Gbps for seamless browsing and streaming.',
    },
    {
      icon: Shield,
      title: 'Secure Networks',
      description: 'Advanced security protocols to protect your data and privacy online.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance from our expert team.',
    },
    {
      icon: Zap,
      title: 'Quick Installation',
      description: 'Fast and professional installation within 24-48 hours.',
    },
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-open-sans leading-relaxed">
              Choose from our comprehensive range of WiFi solutions, partnering with India's 
              leading internet service providers to bring you the best connectivity options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive WiFi solutions designed to meet all your connectivity needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <TiltCard
                key={index}
                className="card-hover"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group text-center h-full"
                >
                  <InteractiveBlob className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FloatingIcon delay={index * 0.1}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </FloatingIcon>
                  </InteractiveBlob>
                  <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    {feature.description}
                  </p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Service Providers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with India's leading internet service providers to offer you the best connectivity options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {providers.map((provider, index) => (
              <TiltCard
                key={index}
                className="card-hover"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${provider.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-full`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold font-montserrat text-gradient-animate mb-2">
                        {provider.name}
                      </h3>
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FloatingIcon key={i} delay={i * 0.1}>
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          </FloatingIcon>
                        ))}
                      </div>
                    </div>
                    <InteractiveBlob className={`bg-gradient-to-r ${provider.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <FloatingIcon>
                        <Wifi className="h-8 w-8 text-white" />
                      </FloatingIcon>
                    </InteractiveBlob>
                  </div>

                  <p className="text-gray-700 font-open-sans mb-6 leading-relaxed">
                    {provider.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {provider.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${provider.color} rounded-full bounce-slow`}></div>
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <MagneticButton
                    className={`w-full bg-gradient-to-r ${provider.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 btn-glow`}
                  >
                    <span>Learn More</span>
                    <FloatingIcon>
                      <ArrowRight className="h-5 w-5" />
                    </FloatingIcon>
                  </MagneticButton>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
              Ready to Get Connected?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Contact us today to find the perfect internet solution for your needs. Our experts are ready to help!
            </p>
            <MagneticButton
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 btn-glow neon-glow"
            >
              <span>Contact Us Now</span>
              <FloatingIcon>
                <ArrowRight className="h-5 w-5" />
              </FloatingIcon>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}