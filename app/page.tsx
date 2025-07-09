'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Shield, Clock, Users, Star, Zap } from 'lucide-react';
import Link from 'next/link';
import { ParticleBackground } from '@/components/ParticleBackground';
import { MagneticButton, TiltCard, GlowingOrb, FloatingIcon, InteractiveBlob } from '@/components/InteractiveElements';

export default function Home() {
  const features = [
    {
      icon: Wifi,
      title: 'High-Speed Connectivity',
      description: 'Lightning-fast internet speeds for all your needs',
    },
    {
      icon: Shield,
      title: 'Secure Network',
      description: 'Advanced security protocols to protect your data',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '100+ certified engineers at your service',
    },
  ];

  const stats = [
    { number: '1500+', label: 'Happy Clients' },
    { number: '100+', label: 'Engineers' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
        <ParticleBackground />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <GlowingOrb size={150} color="blue" />
          <div className="absolute top-20 right-20">
            <GlowingOrb size={100} color="purple" />
          </div>
          <div className="absolute bottom-40 left-20">
            <GlowingOrb size={120} color="teal" />
          </div>
          
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-32 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <Wifi className="h-16 w-16 text-white" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat text-white mb-6 leading-tight"
          >
            Bringing Seamless WiFi to{' '}
            <span className="text-gradient-animate">
              Every Home
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-open-sans"
          >
            Connecting India with precision, innovation, and 24/7 support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/services">
              <MagneticButton
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-2xl transition-all duration-300 btn-glow"
              >
                <FloatingIcon>
                  <span>Explore Services</span>
                </FloatingIcon>
                <FloatingIcon delay={0.2}>
                  <ArrowRight className="h-5 w-5" />
                </FloatingIcon>
              </MagneticButton>
            </Link>
            <Link href="/contact">
              <MagneticButton
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 btn-glow"
              >
                <span>Contact Us</span>
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
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
              Why Choose WifiSelfCare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our cutting-edge technology and unmatched service quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <TiltCard
                key={index}
                className="card-hover"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-full"
                >
                  <InteractiveBlob className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Stats Section */}
      <section className="py-20 gradient-bg-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join our growing community of satisfied customers across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/80 font-poppins text-lg">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
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
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience lightning-fast internet with our premium WiFi solutions. Get started today!
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 btn-glow neon-glow"
              >
                <FloatingIcon>
                  <Zap className="h-5 w-5" />
                </FloatingIcon>
                <span>Get Started Now</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}