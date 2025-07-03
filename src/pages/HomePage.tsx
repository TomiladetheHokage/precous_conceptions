// import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Calendar, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Import images
import momAtLast from '../assets/mom_at_last.png';
import bookClub from '../assets/bookClub.png';
import doctor from '../assets/doc.png';
import naturalBirth from '../assets/natural_birth.jpg';
import assistedConception from '../assets/assited_conceptions.jpg';
import videoThumb from '../assets/Toyin-Ogunmade.jpg';
import book from '../assets/book.png';

// VideoEmbedBBC component for click-to-play BBC video
const VideoEmbedBBC = () => {
  const thumbnail = videoThumb;
  return (
    <a
      href="https://www.bbc.co.uk/programmes/p08qz293/player"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-lg mt-12 group focus:outline-none"
      aria-label="Watch on BBC website"
    >
      <img
        src={thumbnail}
        alt="BBC Video Thumbnail"
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="bg-black/60 rounded-full p-6 group-hover:bg-emerald-600 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polygon points="9.5,7.5 16.5,12 9.5,16.5" fill="currentColor"/></svg>
        </span>
      </span>
    </a>
  );
};

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
      name: 'Stepahine Obi',
      location: 'Lagos',
      text: 'Your story can impact the world but you have to package it into a product that can scale. Super proud of CLD Tribe member Toyin Lolu-Ogunmade who was medically certified not to be able to conceive. Today, she has twins. She has created an online course about her solution and also has written Mom At Last. I cant imagine the impact her products will have in the lives of other people. I just want to celebrate Toyin for allowing herself to be used by God. Congratulations Toyin. I pray that this book will reach the ends of the Earth and will impact the people that will need it.',
      rating: 5,
    },
    {
      name: 'Kemi Shonubi',
      location: 'Abuja',
      text: 'Dearest Toyin, I promised that I will pen down my thoughts once I read the last page of your book *Mom at Last*....just closed the book. Where do I start from? Thank you for the gift of your story. Thank you for sharing your innermost feelings, experiences, pain & joy with the world. *Haaaaaaaaa*...... *hmmmm* I honestly am at a loss for words. You indeed are an awesome woman and I marvel at your strength & total trust in God who is the Author of life. Felt like I was actually in the story with you as each page was filled with detail & skilled narration. Thank you & God Bless. Everyone needs to grab a copy or more .It is a book for everyone: single, married, parents, yet to conceive, *EVERYONE* There are nuggets buried in each chapter that will definitely touch you. Well done to a wonderful sister',
      rating: 5,
    },
    {
      name: 'Esosa Longe',
      location: 'Abuja',
      text: 'Over the years with my work with couples battling infertility, I have been in search of a complete story. A complete story here meaning an account of the entire journey through infertility to fertility properly documented. When I ordered the book \'MOM AT LAST\', I was eager to read Toyin\'s account. Her complete documentation of her journey exceeded my expectation. I have read success stories of other women as chapters in other books but I have never read a complete account jointly written by a couple. This entire journey through options that led Toyin and her husband to surrogacy in this book should be read by many. Toyin is real in this book and I know this is a liberation for many couples looking to options to begin or complete their families. I bought the book initially to read and give away but I soon realized after reading that it is a book to be kept, so I\'ll order another copy for a giveaway. Thank you Toyin for documenting and preserving your story.',
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
      <section className="pt-10 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
      {/*<section className="py-20 bg-white">*/}
      {/*  <div className="max-w-7xl mx-auto px-4">*/}
      {/*    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">*/}
      {/*      /!* Book Image *!/*/}
      {/*      <div className="flex justify-center lg:justify-start">*/}
      {/*        <img*/}
      {/*          src={bookClub}*/}
      {/*          alt="Book Club"*/}
      {/*          className="max-w-sm w-full h-auto rounded-lg"*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*      /!* Content *!/*/}
      {/*      <div className="space-y-6">*/}
      {/*        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">*/}
      {/*          BOOK CLUB*/}
      {/*        </h2>*/}
      {/*        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">*/}
      {/*          <p>*/}
      {/*            People ask me what it was like going through infertility for 13 years. I have often shared some of my experiences in interviews and also in my Book <span className="font-semibold text-emerald-600">Mom At Last</span>.*/}
      {/*          </p>*/}
      {/*          <p>*/}
      {/*            In this podcast, Titi the Dynamite (Titilayo Oyinsan) read some portions of my book as I once again shared my experience with her book club.*/}
      {/*          </p>*/}
      {/*          <a */}
      {/*            href="https://open.spotify.com/episode/315LaLPAhPpFI0kYFZiVM2" */}
      {/*            className="text-emerald-600 font-medium transition-colors duration-200 hover:text-emerald-800 hover:underline" */}
      {/*            target="_blank" */}
      {/*            rel="noopener noreferrer"*/}
      {/*          >*/}
      {/*            Click here to Listen and be encouraged.*/}
      {/*          </a>*/}
      {/*          <p>*/}
      {/*            Then buy the book and gift it to someone facing fertility challenges.*/}
      {/*          </p>*/}
      {/*          <p className="text-lg font-semibold text-emerald-600">*/}
      {/*            Help someone become a #momatlast*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*        <div className="pt-4">*/}
      {/*          <Link*/}
      {/*            to="/store"*/}
      {/*            className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"*/}
      {/*          >*/}
      {/*            Get Mom At Last*/}
      {/*          </Link>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}


      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <VideoEmbedBBC />
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-700 mb-4">The World Health Organization reports that one in five couples in the world experience infertility issues</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                However, there have been advances in reproductive healthcare such as the in-vitro fertilisation. With IVF, couples may have hope in finally having a baby. The BBC's Charles Mgbolu reports from Nigeria on the acceptance of this procedure and the challenges that remain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real families, real journeys, real miracles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => {
              const excerpt = testimonial.text.length > 220 ? testimonial.text.slice(0, 220) + '...' : testimonial.text;
              return (
                <div key={index} className="bg-white p-4 rounded-2xl shadow flex flex-col h-full">
                  {/* Profile picture/avatar */}
                  <div className="flex items-center mb-3">
                    <img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(testimonial.name)}`}
                      alt={testimonial.name}
                      className="w-9 h-9 rounded-full border-2 border-emerald-200 mr-2"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  {/* Large quote icon */}
                  <div className="mb-2">
                    {/*<svg className="h-6 w-6 text-emerald-500 mb-1" fill="currentColor" viewBox="0 0 24 24">*/}
                    {/*  <path d="M7.17 6A5.001 5.001 0 0 0 2 11v1a5 5 0 0 0 5 5h.5a.5.5 0 0 0 .5-.5V16a.5.5 0 0 0-.5-.5H7a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h.17a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5z"/>*/}
                    {/*</svg>*/}
                    <p className="text-gray-700 italic text-base md:text-lg mb-2">"{excerpt}"</p>
                    {testimonial.text.length > 220 && (
                      <Link to="/testimonials" className="text-emerald-600 font-medium hover:underline text-sm">Read More</Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Read More Stories
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white border border-emerald-600 text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

      {/* Buy This Book Section */}
      <section className="pt-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src={book}
              alt="Mom At Last Book Cover"
              className="max-w-xs w-full h-auto rounded-lg mb-3"
            />
            <Link
              to="/store"
              className="inline-flex items-center bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold text-base hover:bg-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Buy This Book
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 mt-2">Mom At Last</h3>
            <p className="max-w-xl text-gray-700 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-emerald-700">About this book:</span> <br/>
              "Mom At Last" is a heartfelt journey through 13 years of infertility, hope, and triumph. Toyin Lolu Ogumade shares her personal story to inspire, encourage, and empower anyone facing fertility challenges. This book is a beacon of hope for families everywhere.
            </p>
          </div>
        </div>
      </section>

    {/*  /!* CTA Section *!/*/}
    {/*  <section className="py-20 bg-gray-900 text-white">*/}
    {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">*/}
    {/*      <h2 className="text-3xl md:text-4xl font-bold mb-4">*/}
    {/*        Ready to Start Your Journey?*/}
    {/*      </h2>*/}
    {/*      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">*/}
    {/*        Take the first step towards building your family. Book a free consultation */}
    {/*        and discover how we can support you on your path to parenthood.*/}
    {/*      </p>*/}
    {/*      <Link*/}
    {/*        to="/booking"*/}
    {/*        className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 inline-block"*/}
    {/*      >*/}
    {/*        Book Your Free Consultation*/}
    {/*      </Link>*/}
    {/*    </div>*/}
    {/*  </section>*/}
    </div>
  );
};

export default HomePage;