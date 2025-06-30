// import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Calendar, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Import images
import momAtLast from '../assets/mom_at_last.png';
import doctor from '../assets/doc.png';
import naturalBirth from '../assets/natural_birth.jpg';
import assistedConception from '../assets/assited_conceptions.jpg';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Mom at last?",
      subtitle: "My 13 year journey with Toyin Lolu Ogumade",
      description: "Discover hope and guidance on your fertility journey with personalized support and expert care.",
      image: momAtLast,
      ctaText: "Start Your Journey",
      ctaLink: "/booking"
    },
    {
      title: "Need a specialist?",
      subtitle: "We have world class specialist referrals and partnership centers",
      description: "Learn the best way to get pregnant with the help of a specialist. Natural conception guidance tailored to your needs.",
      image: doctor,
      ctaText: "Find Your Specialist",
      ctaLink: "/services"
    },
    {
      title: "Assisted conception",
      subtitle: "Get help with assisted conception and treatment options",
      description: "Comprehensive support for IVF, IUI, and other assisted reproductive technologies with expert guidance.",
      image: assistedConception,
      ctaText: "Explore Options",
      ctaLink: "/services"
    },
    {
      title: "Natural Conception",
      subtitle: "Learn the best way to get pregnant naturally with the help of an expert",
      description: "Start your parenthood journey with gentle, natural guidance—designed to support your body's rhythms and foster a healthy conception environment.",
      image: naturalBirth,
      ctaText: "Explore Options",
      ctaLink: "/services"
    }
  ];

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const services = [
    {
      icon: Heart,
      title: 'Fertility Support',
      description: 'Personalized guidance for natural conception and fertility optimization',
    },
    {
      icon: Users,
      title: 'IVF Navigation',
      description: 'Expert support through assisted reproductive technology journeys',
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Access to comprehensive fertility education and latest research',
    },
    {
      icon: Calendar,
      title: 'Pregnancy Support',
      description: 'Continued care and guidance throughout your pregnancy journey',
    },
  ];

  const testimonials = [
    {
      name: 'Adunni & Tunde',
      location: 'Lagos',
      text: 'After 3 years of trying, we found hope again. The personalized support and guidance helped us welcome our miracle baby.',
      rating: 5,
    },
    {
      name: 'Blessing',
      location: 'Abuja',
      text: 'The emotional support was just as important as the medical guidance. I felt truly understood and cared for.',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Full-Width Background Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="transition-all duration-1000 ease-in-out">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl font-medium mb-6 text-emerald-300 leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={heroSlides[currentSlide].ctaLink}
                    className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {heroSlides[currentSlide].ctaText}
                  </Link>
                  <Link
                    to="/about"
                    className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 text-center"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to Parenthood
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Precious Conceptions is Nigeria's Foremost Holistic Family Building Consultancy for couples trying to conceive.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our desire is for every one we come in contact with to be blessed with at least one child. Therefore, our focus is to help you maximize your chances of conceiving naturally, or through assisted conception options.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide information, education, advisory services and treatment options that work best for you.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mb-6">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Book Club Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-80 bg-emerald-600 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="text-2xl font-bold mb-2">Mom At Last</h3>
                      <p className="text-emerald-100">by Toyin Lolu Ogumade</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-yellow-800 font-bold text-sm">BEST</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                BOOK CLUB
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  People ask me what it was like going through infertility for 13 years. I have often shared some of my experiences in interviews and also in my Book <span className="font-semibold text-emerald-600">Mom At Last</span>.
                </p>
                
                <p>
                  In this podcast, Titi the Dynamite (Titilayo Oyinsan) read some portions of my book as I once again shared my experience with her book club.
                </p>
                
                <p className="text-emerald-600 font-medium">
                  Click here to Listen and be encouraged.
                </p>
                
                <p>
                  Then buy the book and gift it to someone facing fertility challenges.
                </p>
                
                <p className="text-lg font-semibold text-emerald-600">
                  Help someone become a #momatlast
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/store"
                  className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Mom At Last
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real families, real journeys, real miracles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200"
            >
              Read More Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards building your family. Book a free consultation 
            and discover how we can support you on your path to parenthood.
          </p>
          <Link
            to="/booking"
            className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 inline-block"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;