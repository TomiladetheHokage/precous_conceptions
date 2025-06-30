import React, { useState } from 'react';
import { Calendar, Clock, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react';

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    partnerName: '',
    message: '',
    preferredContact: 'phone'
  });

  const services = [
    { id: 'consultation', name: 'Free Initial Consultation (30 min)', price: 'Free' },
    { id: 'fertility-assessment', name: 'Comprehensive Fertility Assessment', price: '₦50,000' },
    { id: 'ivf-consultation', name: 'IVF Navigation Consultation', price: '₦75,000' },
    { id: 'emotional-support', name: 'Emotional Support Session', price: '₦25,000' },
    { id: 'pregnancy-support', name: 'Pregnancy Support Consultation', price: '₦40,000' },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, selectedService, selectedDate, selectedTime });
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step on your fertility journey. Schedule a personalized 
            consultation with our expert team.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Service</h3>
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors duration-200 ${
                        selectedService === service.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-300 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={selectedService === service.id}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                        />
                        <div className="ml-3">
                          <span className="font-medium text-gray-900">{service.name}</span>
                        </div>
                      </div>
                      <span className="font-semibold text-emerald-600">{service.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Preferred Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partner's Name (if applicable)</label>
                    <input
                      type="text"
                      name="partnerName"
                      value={formData.partnerName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                    />
                    <Phone className="ml-2 h-4 w-4 text-gray-500" />
                    <span className="ml-1 text-gray-700">Phone</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                    />
                    <Mail className="ml-2 h-4 w-4 text-gray-500" />
                    <span className="ml-1 text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                    />
                    <MessageCircle className="ml-2 h-4 w-4 text-gray-500" />
                    <span className="ml-1 text-gray-700">WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your fertility journey (optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Share any relevant information about your fertility journey, concerns, or questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center mx-auto"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Book Consultation
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll contact you within 24 hours to confirm your appointment.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Quick Contact */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Support?</h2>
          <p className="text-gray-600 mb-6">
            Chat with us directly on WhatsApp for quick questions or urgent concerns.
          </p>
          <a
            href="https://wa.me/+2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;