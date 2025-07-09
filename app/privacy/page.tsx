'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information such as name, email address, and phone number when you contact us or request services',
        'Technical information about your internet usage and network performance for service optimization',
        'Device information and IP addresses for network security and troubleshooting purposes',
        'Communication records when you interact with our customer support team'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain our WiFi services and technical support',
        'To communicate with you about service updates, maintenance, and new offerings',
        'To improve our services and develop new features based on usage patterns',
        'To ensure network security and prevent unauthorized access or misuse'
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection',
      content: [
        'We implement industry-standard encryption and security measures to protect your data',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates to maintain the highest protection standards',
        'Secure data transmission protocols for all communications and transactions'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Right to access and review the personal information we have about you',
        'Right to request correction or deletion of your personal data',
        'Right to opt-out of marketing communications at any time',
        'Right to data portability and to receive your data in a structured format'
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
              <Shield className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-open-sans leading-relaxed">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
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
              At WifiSelfCare, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, 
              visit our website, or interact with us in any way.
            </p>
            <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              We encourage you to read this policy carefully and contact us if you have any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
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

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-8 text-center">
              Additional Information
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  Third-Party Services
                </h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  We may use third-party service providers to help us operate our business and provide services to you. 
                  These providers are bound by confidentiality agreements and are prohibited from using your personal 
                  information for any purpose other than providing services to us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  Data Retention
                </h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  We retain your personal information only for as long as necessary to provide our services and fulfill 
                  the purposes outlined in this privacy policy. When information is no longer needed, we securely delete 
                  or anonymize it in accordance with our data retention policies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  Changes to This Policy
                </h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                  new policy on our website and updating the "Last Updated" date.
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
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-white/80 font-open-sans mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, 
                please don't hesitate to contact us.
              </p>
              <div className="space-y-2 text-white/90">
                <p>Email: privacy@wifiselfcare.com</p>
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