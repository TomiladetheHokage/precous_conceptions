import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [activeTab, setActiveTab] = useState('contact');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const faqs = [
    {
      question: 'How long should we try before seeking fertility help?',
      answer: 'Generally, couples under 35 should try for 12 months, while those over 35 should seek help after 6 months. However, if you have known fertility issues or irregular cycles, it\'s best to consult earlier.'
    },
    {
      question: 'What should I expect during my first consultation?',
      answer: 'Your first consultation will include a comprehensive review of your medical history, lifestyle factors, and fertility goals. We\'ll discuss your journey so far and create a personalized plan for moving forward.'
    },
    {
      question: 'Do you work with people across Nigeria?',
      answer: 'Yes! While we\'re based in Lagos, we offer virtual consultations for clients across Nigeria. We also have partnerships with clinics in major cities for in-person services when needed.'
    },
    {
      question: 'What\'s the difference between fertility coaching and medical treatment?',
      answer: 'Fertility coaching focuses on education, emotional support, lifestyle optimization, and navigation of medical treatments. We work alongside your medical team to provide holistic support throughout your journey.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our services range from ₦25,000 for individual counseling sessions to ₦100,000+ for comprehensive IVF navigation packages. We offer payment plans and work with you to find affordable options.'
    },
    {
      question: 'Do you support single women and LGBTQ+ individuals?',
      answer: 'Absolutely. We provide inclusive, non-judgmental support for all individuals and families, regardless of relationship status, sexual orientation, or gender identity.'
    },
    {
      question: 'What if I live outside Nigeria?',
      answer: 'We work with Nigerian diaspora worldwide through virtual consultations. We can help you navigate fertility treatments in your current location while providing culturally-sensitive support.'
    },
    {
      question: 'How do I know if IVF is right for me?',
      answer: 'IVF may be recommended after trying other treatments, or as a first-line treatment for certain conditions. During consultation, we\'ll review your specific situation and help you understand all your options.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to support you every step of the way. Reach out with questions, 
            concerns, or to start your fertility journey with us.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-4 font-medium transition-colors duration-200 border-b-2 ${
                activeTab === 'contact'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`px-6 py-4 font-medium transition-colors duration-200 border-b-2 ${
                activeTab === 'faqs'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {activeTab === 'contact' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+234 800 000 0000</p>
                      <p className="text-sm text-gray-500">Available Mon-Fri, 9AM-6PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">hello@fertilityjourney.ng</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Lagos, Nigeria</p>
                      <p className="text-sm text-gray-500">Virtual consultations available nationwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-sm text-gray-500">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://wa.me/+2348000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors duration-200"
                    >
                      <MessageCircle className="h-6 w-6 text-white" />
                    </a>
                    <a
                      href="https://instagram.com/fertilityjourney"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-200"
                    >
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 800 000 0000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="consultation">Book Consultation</option>
                        <option value="services">Services Inquiry</option>
                        <option value="support">Emotional Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {activeTab === 'faqs' && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200"
              >
                Contact Us Directly
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Emergency Support */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Support?</h2>
          <p className="text-gray-600 mb-6">
            If you're experiencing a fertility-related emergency or emotional crisis, 
            please don't hesitate to reach out immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2348000000000"
              className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Emergency Hotline
            </a>
            <a
              href="https://wa.me/+2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;