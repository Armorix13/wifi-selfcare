'use client';

import { motion } from 'framer-motion';
import { Users, Award, Globe, Clock, Target, Heart, Zap, Shield } from 'lucide-react';
import { TiltCard, FloatingIcon, InteractiveBlob } from '@/components/InteractiveElements';

export default function About() {
  const stats = [
    { number: '1500+', label: 'Happy Clients', icon: Users },
    { number: '100+', label: 'Engineers', icon: Award },
    { number: 'Pan India', label: 'Coverage', icon: Globe },
    { number: '24/7', label: 'Support', icon: Clock },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver accurate and reliable WiFi solutions tailored to your specific needs.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology and forward-thinking approaches drive our services.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority, with personalized support and care.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent, stable connections you can depend on, day and night.',
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
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-open-sans leading-relaxed">
              We are a leading WiFi solution provider, dedicated to transforming connectivity across India. 
              Our commitment to excellence drives us to deliver seamless internet experiences that empower 
              communities, businesses, and individuals to thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <TiltCard
                key={index}
                className="card-hover"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group h-full"
                >
                  <InteractiveBlob className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FloatingIcon delay={index * 0.1}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </FloatingIcon>
                  </InteractiveBlob>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-montserrat text-gradient-animate mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-poppins text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-poppins text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/80 font-open-sans leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 font-open-sans text-lg leading-relaxed">
                <p>
                  Founded with a vision to bridge the digital divide across India, WifiSelfCare began 
                  as a small team of passionate engineers who believed that reliable internet connectivity 
                  should be accessible to everyone.
                </p>
                <p>
                  Over the years, we've grown into a trusted partner for thousands of homes and businesses, 
                  consistently delivering innovative solutions that adapt to the evolving needs of our 
                  digital world.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing new technologies and expanding our 
                  reach to ensure that no corner of India remains disconnected from the opportunities 
                  that the internet provides.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">2020</div>
                    <div className="text-white/80">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-white/80">Cities Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-white/80">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">5★</div>
                    <div className="text-white/80">Rating</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}