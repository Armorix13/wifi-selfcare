'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using WifiSelfCare services, you accept and agree to be bound by these Terms and Conditions',
        'If you do not agree to these terms, please do not use our services',
        'These terms apply to all users, including customers, visitors, and others who access our services',
        'We reserve the right to modify these terms at any time with appropriate notice'
      ]
    },
    {
      icon: Info,
      title: 'Service Description',
      content: [
        'WifiSelfCare provides WiFi connectivity solutions and related technical support services',
        'We partner with various internet service providers including BSNL, Airtel, Jio, and My Internet',
        'Service availability and quality may vary based on location and infrastructure',
        'We strive to provide reliable service but cannot guarantee uninterrupted connectivity'
      ]
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: [
        'Users must provide accurate and complete information when requesting services',
        'You are responsible for maintaining the security of your network credentials',
        'Illegal activities, network abuse, or violation of acceptable use policies are prohibited',
        'Users must comply with all applicable local, state, and federal laws'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Service Limitations',
      content: [
        'Service may be temporarily unavailable due to maintenance, upgrades, or technical issues',
        'We are not liable for service interruptions caused by third-party providers or external factors',
        'Speed and performance may vary based on network conditions and usage patterns',
        'Some services may not be available in all geographic locations'
      ]
    },
    {
      icon: XCircle,
      title: 'Prohibited Uses',
      content: [
        'Using our services for any unlawful or prohibited activities',
        'Attempting to gain unauthorized access to our systems or other users\' accounts',
        'Distributing malware, viruses, or other harmful software through our network',
        'Engaging in activities that could damage, disable, or impair our services'
      ]
    }
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
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Scale className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-open-sans leading-relaxed">
              Please read these terms carefully before using our services. They govern your use of WifiSelfCare services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 font-open-sans">
              <strong>Last Updated:</strong> January 1, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-gray-700 font-open-sans leading-relaxed mb-8">
              Welcome to WifiSelfCare. These Terms and Conditions ("Terms") govern your use of our website, 
              services, and any related applications or platforms provided by WifiSelfCare ("we," "us," or "our"). 
              These Terms constitute a legally binding agreement between you and WifiSelfCare.
            </p>
            <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
              If you do not agree with any part of these Terms, you must not use our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl flex-shrink-0">
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-6">
                      {section.title}
                    </h2>
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 font-open-sans leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-8 text-center">
              Additional Terms
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  Payment and Billing
                </h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  Payment terms are determined by the specific internet service provider you choose. We act as an 
                  intermediary and are not directly responsible for billing disputes. All payment-related issues 
                  should be directed to the respective service provider.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  Intellectual Property
                </h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  All content, trademarks, and intellectual property on our website and services are owned by 
                  WifiSelfCare or our licensors. You may not use, reproduce, or distribute our content without 
                  explicit written permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  Limitation of Liability
                </h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  WifiSelfCare shall not be liable for any indirect, incidental, special, or consequential damages 
                  arising from your use of our services. Our total liability shall not exceed the amount paid for 
                  our services in the preceding 12 months.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  Termination
                </h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  We reserve the right to terminate or suspend your access to our services at any time, with or 
                  without cause, and with or without notice. Upon termination, your right to use our services 
                  will cease immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  Governing Law
                </h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes 
                  arising under these Terms shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gradient-bg-services">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <FileText className="h-12 w-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-poppins text-white mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-white/80 font-open-sans mb-6 leading-relaxed">
                If you have any questions about these Terms and Conditions or need clarification 
                on any aspect of our services, please contact us.
              </p>
              <div className="space-y-2 text-white/90">
                <p>Email: legal@wifiselfcare.com</p>
                <p>Phone: +91 123 456 7890</p>
                <p>Address: Brampton, ON</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}