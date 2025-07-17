// import React from 'react';
import toyin from '../assets/About-Toyin.jpg';
import { Heart, Award, Users, BookOpen, Quote } from 'lucide-react';
import { useState } from 'react';

const AboutPage = () => {
  const achievements = [
    { icon: Users, number: '500+', label: 'Families Supported' },
    { icon: Heart, number: '200+', label: 'Success Stories' },
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: BookOpen, number: '50+', label: 'Educational Resources' },
  ];

  const values = [
    {
      title: 'Holistic Approach',
      description: 'We address not just the medical aspects, but emotional, spiritual, and cultural needs of each family.',
    },
    {
      title: 'Cultural Sensitivity',
      description: 'Understanding Nigerian family values and traditions while providing modern fertility solutions.',
    },
    {
      title: 'Personalized Care',
      description: 'Every journey is unique. We create customized plans that fit your specific needs and circumstances.',
    },
    {
      title: 'Emotional Support',
      description: 'Fertility journeys can be emotionally challenging. We provide compassionate support every step of the way.',
    },
  ];

  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [journeyExpanded, setJourneyExpanded] = useState(false);
  const aboutParagraphs = [
    "Precious Conceptions is Nigeria’s Foremost Holistic Family Building Consultancy for couples trying to conceive.",
    "Our desire is for every one we come in contact with to be blessed with at least one child. Therefore, our focus is to help you maximize your chances of conceiving naturally, or through assisted conception options. We provide information, education, advisory services and treatment options that work best for you. Planned parenting is one of the most demanding processes you will ever face. It is a huge financial, physical, mental, spiritual and emotional investment BUT we are here to make sure the process is worth every effort you make, as we walk with you to VICTORY.",
    "Our holistic approach to infertility management takes care of the overall well-being of our clients, providing them with the best of care and support as they manage emotions, relationships and their health, whilst trying to conceive. We want our intending parents to be healthy, happy and fulfilled whilst they eagerly work towards welcoming a new addition to their family.",
    "We prepare our clients for success by providing them with individual personal plans tailor-made just for them, depending on what lifestyle changes they need to make in order to achieve success.",
    "Intending parents are assessed for lifestyle, dietary, nutritional and emotional support and they start of by improving on these. The difference and impact on their treatment is always amazing!"
  ];

  const storyParagraphs = [
    "Hello, I am Toyin (Ty) and this is my story.",
    "When I got married in August 1999, I had no idea it would take us 13 years to become parents. Initially, I did not want to have children immediately after marriage so we planned to delay conception for 12 months. In 2000 August, we began to try for a baby.",
    "2 months down the line, I was diagnosed with fibroids and for 6 years, this was my nightmare. I was always in pain and during my periods, had very heavy bleeding episodes. They were 6 years of constant pain.",
    "On February 22, 2006 I went in for myomectomy to remove fibroids, 22 fibroid tumors were excised but I developed a post surgery complication which was not properly managed. We tried conceiving naturally but we failed each time.",
    "Then, in year 2009 we got devastating news. I had developed severe adhesions in my uterus as a result of the post surgery complication.",
    "After three back to back corrective surgeries between April 2009 & June 2010 it was medically and surgically concluded that I could only become a mother through gestational surrogacy.  I would never be able to carry a pregnancy, or give birth to a child. Diagnosis – severe Asherman’s Syndrome.",
    "We went through IVF Surrogacy in India and the first two fresh cycles failed. Then my wonderful doctor introduced me to a concept which became the turn-around point of my treatment.  I went through a personal Boot Camp. For several months, I went through rigorous adjustments and preparation for motherhood.",
    "At the third fresh cycle, our surrogate mother became pregnant and we welcomed our beautiful twins 8 months later. We call our daughter Priceless and our son Precious.",
    "At the height of the struggle in 2010, a vision was conceived in my heart and after the birth of our twins in 2012, I found a compelling need to share our story and experience with infertility so as to encourage and guide those who are still on the journey.",
    "From our private sitting room, I started a mini support group where I shared experiences with other couples, encouraging them to press on. Thereafter, I shared our story on television and live radio and Precious Conceptions was borne.",
    "From our humble beginning informally in 2010, right on the clinic bed, we have been able to help several families achieve their desires and our babies keep growing!",
    "My desire is that Precious Conceptions shall be to you, what was lacking for me – a bridge to make your journey faster and easier."
  ];

  const [offerExpanded, setOfferExpanded] = useState(false);
  const offerParagraphs = [
    "In Nigeria and indeed Africa, infertility and delayed conception are somewhat looked upon as a taboo and as such, if you are unable to have a child, particularly as a woman, there is a lot of shame, embarrassment, spirituality and stigma attached to it.",
    "As such, women are often pressured and blamed, and are not able to speak up and get the much desired help on time. Despite a lot of advancement in science and the Assisted Reproductive Technologies, the myths surrounding infertility are yet to be totally debunked.",
    "We also have a growing population of young women who choose to delay conception in order to advance in their education and careers whilst some have late marriages for so many reasons.",
    "If you have not been able to have a baby after a year of actively trying (for women are less than 35 years) or after six months (for women older than 35 years), we know that you will need information and guidance and help on how you can achieve your dreams and we are here to walk with you on this most significant journey you would most likely ever embark on.",
    "There is thus, a huge need for education, awareness, counseling and guide and we have stepped up to fill this vacuum.",
    "If you are in any of these situations, you are not alone and you need not be ashamed, confused or helpless.",
    "We can help!",
    "People spend years planning and working on careers, businesses, finances and investments; let us work with you in building or growing your family, your most valuable treasure!"
  ];

  return (
    <div className="py-16">
      {/* Hero Section - Modernized */}
      {/*<section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-24 flex flex-col items-center justify-center">*/}
      {/*  <div className="absolute inset-0 pointer-events-none">*/}
      {/*    /!* Decorative shape or gradient could go here for extra style *!/*/}
      {/*  </div>*/}
      {/*  <div className="relative z-10 flex flex-col items-center">*/}
      {/*    <img*/}
      {/*      src={toyin}*/}
      {/*      alt="Toyin Lolu-Ogunmade, Founder"*/}
      {/*      className="w-40 h-40 rounded-full shadow-lg object-cover border-4 border-white mb-6"*/}
      {/*    />*/}
      {/*    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">*/}
      {/*      Meet Precious Conceptions*/}
      {/*    </h1>*/}
      {/*    <p className="text-xl text-gray-700 max-w-2xl text-center mb-6">*/}
      {/*      Walking with you to victory—one family at a time. Founded by Toyin Lolu-Ogunmade, our mission is to make your path to parenthood warmer, easier, and filled with hope.*/}
      {/*    </p>*/}
      {/*    <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-5 py-2 shadow text-emerald-700 font-semibold text-base mb-2">*/}
      {/*      <Quote className="h-5 w-5 text-emerald-400" />*/}
      {/*      "You are not alone on this journey."*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Impact/Stats Section - moved up */}
      {/*<section className="py-12 bg-emerald-50">*/}
      {/*  <div className="max-w-5xl mx-auto px-4">*/}
      {/*    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">*/}
      {/*      {achievements.map((achievement, index) => (*/}
      {/*        <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow p-6">*/}
      {/*          <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-3">*/}
      {/*            <achievement.icon className="h-7 w-7 text-emerald-600" />*/}
      {/*          </div>*/}
      {/*          <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>*/}
      {/*          <div className="text-gray-600 text-sm text-center">{achievement.label}</div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Toyin's Journey Section - now above Who We Are and What We Can Offer */}
      <section className="py-20 bg-white flex justify-center items-center">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Text on the left, wider */}
            <div className="md:w-3/4 w-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Toyin's Journey</h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-6">
                {(journeyExpanded ? storyParagraphs : storyParagraphs.slice(0, 2)).map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 justify-start">
                {!journeyExpanded ? (
                  <button
                    className="px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-200"
                    onClick={() => setJourneyExpanded(true)}
                  >
                    Read More
                  </button>
                ) : (
                  <button
                    className="px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-200"
                    onClick={() => setJourneyExpanded(false)}
                  >
                    View Less
                  </button>
                )}
              </div>
              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-md mt-6 text-emerald-800 text-base flex items-start gap-2">
                <Quote className="h-6 w-6 flex-shrink-0 mt-1 text-emerald-400" />
                <span>"My desire is that Precious Conceptions shall be to you, what was lacking for me – a bridge to make your journey faster and easier."</span>
              </div>
            </div>
            {/* Image on the right */}
            <div className="md:w-1/2 w-full flex justify-center md:justify-end mb-8 md:mb-0">
              <img
                src={toyin}
                alt="Toyin Lolu-Ogunmade, Founder"
                className="w-96 h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">What We Can Offer</h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            {(offerExpanded ? offerParagraphs : offerParagraphs.slice(0, 2)).map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
            {!offerExpanded ? (
              <button
                className="mt-2 text-emerald-600 font-semibold hover:underline text-base focus:outline-none"
                onClick={() => setOfferExpanded(true)}
              >
                View More
              </button>
            ) : (
              <button
                className="mt-2 text-emerald-600 font-semibold hover:underline text-base focus:outline-none"
                onClick={() => setOfferExpanded(false)}
              >
                View Less
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Who We Are Section (aboutParagraphs) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">Who We Are</h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            {(aboutExpanded ? aboutParagraphs : aboutParagraphs.slice(0, 2)).map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
            {!aboutExpanded ? (
              <button
                className="mt-2 text-emerald-600 font-semibold hover:underline text-base focus:outline-none"
                onClick={() => setAboutExpanded(true)}
              >
                View More
              </button>
            ) : (
              <button
                className="mt-2 text-emerald-600 font-semibold hover:underline text-base focus:outline-none"
                onClick={() => setAboutExpanded(false)}
              >
                View Less
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Achievements */}
      {/* <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Making a difference in the Nigerian fertility landscape, one family at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <achievement.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To provide holistic, culturally-sensitive fertility support that empowers Nigerian 
            families with the knowledge, resources, and emotional strength they need to navigate 
            their journey to parenthood. We believe every family deserves expert guidance, 
            compassionate care, and unwavering hope on their path to building the family of their dreams.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;