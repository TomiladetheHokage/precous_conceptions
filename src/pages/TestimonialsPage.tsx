// import React from 'react';
import { Star, Heart, Quote } from 'lucide-react';
import Ayobami from '../assets/Ayobami-Adebo.png';
import Dr_shitu from '../assets/Dr.-Shittu.jpg';
import Esosa from '../assets/Esosa-Longe.jpg';
import Kemi from '../assets/Kemi-Shonubi.png';
import Olaedo from '../assets/Olaedo-Emelie.png';
import Omotola from '../assets/Omotola-Badamasi.png';
import Otuke from '../assets/Otuke.jpg';
import Rasheeda from '../assets/Rasheeda-Ninalowo.png';
import Rev from '../assets/Rev.-Mrs-Henry-Adelegan.png';
import Stephanie from '../assets/Stephanie-Obi.jpg';
import Uwanma from '../assets/Uwanma-Odefa.png';



const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Stephanie Obi',
      location: 'Lagos',
      story: 'Your story can impact the world but you have to package it into a product that can scale. ' +
          'Super proud of CLD Tribe member Toyin Lolu-Ogunmade who was medically certified not to be able to conceive. ' +
          'Today, she has twins. She has created an online course about her solution and also has written Mom At Last. ' +
          'I cant imagine the impact her products will have in the lives of other people.' +
          ' I just want to celebrate Toyin for allowing herself to be used by God. Congratulations Toyin. ' +
          'I pray that this book will reach the ends of the Earth and will impact the people that will need it.',
      service: 'Online course launch Strategist that helps women create and sell premium courses. She is also founder, TrainQuarters.',
      duration: '8 months',
      rating: 5,
      image: Stephanie
    },
    {
      name: 'Kemi  Shonubi',
      location: 'Abuja',
      story: 'Dearest Toyin, I promised that I will pen down my thoughts once ' +
          'I read the last page of your book *Mom at Last*....just closed the book. Where do I start from? Thank you for the gift of your story.' +
          ' Thank you for sharing your innermost feelings, experiences, pain & joy with the world. *Haaaaaaaaa*...... *hmmmm* ' +
          'I honestly am at a loss for words. You indeed are an awesome woman and I marvel at your strength & total trust in God who is the Author of life.' +
          ' Felt like I was actually in the story with you as each page was filled with detail & skilled narration. Thank you & God Bless.' +
          ' Everyone needs to grab a copy or more .It is a book for everyone: single, married, parents, yet to conceive, ' +
          '*EVERYONE* There are nuggets buried in each chapter that will definitely touch you. Well done to a wonderful sister',
      service: 'HR Expert and Story Teller',
      duration: '12 months',
      rating: 5,
      image: Kemi
    },
    {
      name: 'Esosa Longe',
      location: 'Port Harcourt',
      story: 'Over the years with my work with couples battling infertility, I have been in search of a complete story. ' +
          'A complete story here meaning an account of the entire journey through infertility to fertility properly documented. ' +
          'When I ordered the book \'MOM AT LAST\', I was eager to read Toyin\'s account. Her complete documentation of her journey exceeded my expectation. ' +
          'I have read success stories of other women as chapters in other books but I have never read a complete account jointly written by a couple. ' +
          'This entire journey through options that led Toyin and her husband to surrogacy in this book should be read by many. ' +
          'Toyin is real in this book and I know this is a liberation for many couples looking to options to begin or complete their families.' +
          ' I bought the book initially to read and give away but I soon realized after reading that it is a book to be kept, ' +
          'so I\'ll order another copy for a giveaway. Thank you Toyin for documenting and preserving your story.',
      service: 'Founder & Convener Fertility in Infertility',
      duration: '10 months',
      rating: 5,
      image: Esosa
    },
    {
      name: 'Fatima & Ahmed Hassan',
      location: 'Kano',
      story: 'It is a very emotional story, so explicitly written, the pictures come alive like a movie when reading the book. ' +
          'Toyin described her experience with so much detail, she didn\'t leave any gaps. After reading, ' +
          'I learnt a lot about some challenges people go through when trying for a baby, including new medical terminology. ' +
          'The best part of the book was the arrival of the twins.' +
          ' I felt so happy and excited that persistence and commitment from Toyin and Lolu paid off.',
      service: '',
      duration: '6 months',
      rating: 5,
      image: Otuke
    },
    {
      name: 'Rev. & Mrs Henry Adelegan\n',
      location: 'Lagos',
      story: 'Toyin is very courageous to have shared these deep personal details about a very private part of her life.' +
          ' I don\'t think I have such guts. She is very tenacious and focused in her drive to achieve the goal of being a mother. ' +
          'I think this travail took her walk with God to a height she would not have otherwise easily attained, and ' +
          'she would be a source of strength to all women who want to go through this route to being mothers.' +
          ' I think she could reach millions of women for Christ through this ordeal she went through, confirming God has always been ' +
          'faithful and true to His words to save, deliver and set free.',
      service: 'Natural Fertility Support',
      duration: '4 months',
      rating: 5,
      image: Rev
    },
    {
      name: 'Omotola Badamasi',
      location: 'Ibadan',
      story: 'Oh my God! I read MOM AT LAST over 10 times (TEN TIMES) and each time , it is like I am picking a new book to read. ' +
          'This book is so phenomenal. I was able to picture and feel what couples battling with conceptions issues are facing and ' +
          'that has thought me to be more compassionate towards them and to reach out to them to help them in any way I can. ' +
          'Toyin is an extremely strong woman, not giving up after several surgeries. That completely blew my mind. I must say,' +
          ' this book is a must read for every one',
      service: '',
      duration: '14 months',
      rating: 5,
      image: Omotola
    },
    {
      name: 'Dr. Shittu',
      location: 'Ibadan',
      story: '\n' +
          'Truly amazing book, provides an honest look and captures the emotional journey of infertility and ' +
          'IVF as well as Surrogacy from the perspective of someone who has actually gone through those emotions',
      service: 'Fertility Specialist, Bloom Fertility Clinic Nigeria',
      duration: '14 months',
      rating: 5,
      image: Dr_shitu
    },
    {
      name: 'Uwanma Odefa',
      location: 'Ibadan',
      story: 'My friend Toyin Lolu-Ogunmade wrote this book from the deepest recesses of her soul inspired by God and her journey to become a mother. ' +
          'I have read it and I can tell you for free it will shift your thinking. If you or anyone you know is trying to conceive, get this book!' +
          ' Delivery nationwide.',
      service: '(The Inspired) - Author, Creative Writer',
      duration: '14 months',
      rating: 5,
      image: Uwanma
    },
    {
      name: 'Rasheeda Ninalowo',
      location: 'Lagos, Nigeria',
      story: 'This was a very emotional book for me as I know the author personally. ' +
          'A must read for every woman as those who can have children without much help ' +
          'will remain ever grateful to God for their blessings while those who have challenges with child birth ' +
          'will never give up hope. God bless Toyin for having the courage to share her very deep and emotional ' +
          'story and God bless her beautiful twins!',
      service: '(The Inspired) - Author, Creative Writer',
      duration: '14 months',
      rating: 5,
      image: Rasheeda
    },
    {
      name: 'Ayobami Adebo',
      location: 'Lagos, Nigeria',
      story: 'If there is a 100 Star review, I will gladly give "MOM AT LAST" It is a must have for all GOING/TRYING TO CONCEIVE MUMS.' +
          ' This Book is an assurance that whatever you are going to, you are not alone in this journey and you will have your bundle of joy soonest',
      service: '',
      duration: '14 months',
      rating: 5,
      image: Ayobami
    },
    {
      name: 'Olaedo Emelie',
      location: 'Lagos, Nigeria',
      story: 'All I can say is thank you for pouring out your experience and knowledge without holding back a thing. ' +
          'I had to read more than once to digest all the information from it. This is a must read.',
      service: 'Founder, Tales of Trying to Conceive',
      duration: '14 months',
      rating: 5,
      image: Olaedo
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
                    className="rounded-lg shadow-lg w-80 h-96 object-cover mx-auto"
                  />
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                    
                    {/*<div className="flex items-center mb-4">*/}
                    {/*  {[...Array(testimonial.rating)].map((_, i) => (*/}
                    {/*    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />*/}
                    {/*  ))}*/}
                    {/*</div>*/}
                    
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