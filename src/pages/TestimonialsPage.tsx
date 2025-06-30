// import React from 'react';
import { Star, Heart, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Adunni & Tunde Okafor',
      location: 'Lagos',
      story: 'After 3 years of trying to conceive, we had almost given up hope. Dr. Adaora\'s holistic approach not only helped us understand our fertility better but also provided the emotional support we desperately needed. Today, we are proud parents of twins!',
      service: 'IVF Navigation & Support',
      duration: '8 months',
      rating: 5,
      image: 'https://images.pexels.com/photos/1648371/pexels-photo-1648371.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Blessing Adebayo',
      location: 'Abuja',
      story: 'As a single woman pursuing motherhood, I felt overwhelmed by the process. The team provided not just medical guidance but also helped me navigate the emotional and cultural challenges. My daughter is now 6 months old, and I couldn\'t be happier.',
      service: 'Fertility Assessment & IVF Support',
      duration: '12 months',
      rating: 5,
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Chioma & David Nwosu',
      location: 'Port Harcourt',
      story: 'After two miscarriages, we were scared to try again. The pregnancy support program gave us the confidence and knowledge we needed. Our rainbow baby arrived healthy and strong. We are forever grateful.',
      service: 'Pregnancy Support',
      duration: '10 months',
      rating: 5,
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Fatima & Ahmed Hassan',
      location: 'Kano',
      story: 'Finding culturally sensitive fertility support was challenging until we found FertilityJourney. They understood our cultural and religious needs while providing modern medical guidance. Our son is now 2 years old.',
      service: 'Fertility Optimization',
      duration: '6 months',
      rating: 5,
      image: 'https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Grace Ogbonna',
      location: 'Enugu',
      story: 'At 38, I thought time was running out. The personalized fertility plan helped optimize my health and timing. I conceived naturally within 4 months of starting the program. Sometimes miracles do happen!',
      service: 'Natural Fertility Support',
      duration: '4 months',
      rating: 5,
      image: 'https://images.pexels.com/photos/3992267/pexels-photo-3992267.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Kemi & Femi Johnson',
      location: 'Ibadan',
      story: 'After 5 failed IVF cycles elsewhere, we were emotionally and financially drained. The comprehensive support here helped us choose the right clinic and approach. Our miracle baby arrived on our 6th attempt.',
      service: 'IVF Navigation & Emotional Support',
      duration: '14 months',
      rating: 5,
      image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const stats = [
    { number: '200+', label: 'Success Stories' },
    { number: '500+', label: 'Families Supported' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '85%', label: 'Success Rate' }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real families, real journeys, real miracles. Read how we've helped 
            Nigerian families achieve their dreams of parenthood.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                    
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                      "{testimonial.story}"
                    </p>
                    
                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                        <Heart className="h-5 w-5 text-red-500" />
                      </div>
                      <p className="text-gray-600 mb-2">{testimonial.location}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500">
                        <span>Service: {testimonial.service}</span>
                        <span>Journey: {testimonial.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Success Story</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Your story could inspire and give hope to other families on their journey. 
            We'd love to celebrate your success with our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:stories@fertilityjourney.ng"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Share Your Story
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;