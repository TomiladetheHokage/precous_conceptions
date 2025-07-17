// import React from 'react';
import { Heart, Users, Baby, BookOpen, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ServicesPage = () => {
  const [showAll, setShowAll] = useState(false);
  const services = [
    {
      icon: Users,
      title: 'Counselling Services',
      description: 'Not sure what to do, which treatment plan you should choose or where to start from? Book a session with us for advise, guide and clarity.',
      features: [
        'Fertility Advisory',
        'Family Planning',
        'Fertility preservation',
        'Legal Advisory',
        'Surrogacy Advisory',
        'Implications & Trauma Counselling',
        'Managing Emotions',
        'Financial Planning'
      ],
      duration: '6-12 months',
      price: 'From ₦100,000'
    },
    {
      icon: Baby,
      title: 'Assisted Conceptions',
      description: 'Our assisted conception options include: ',
      features: [
        'IUI - Intra Uterine Insemination / Artificial Insemination',
        'IVF - In Vitro Fertilization',
        'IVF variants(ICSI, IMSI, TESA)',
        'Egg/Ovum Donor Program',
        'Surrogacy Program',
        'Sperm Donation Program'
      ],
      duration: '12-18 months',
      price: 'Custom pricing'
    },
    {
      icon: BookOpen,
      title: 'Specialist Referrals',
      description: 'Do you require help locally in finding the right specialist care or for a second opinion? Look no further! Our network includes world class.',
      features: [
        'IVF Partner Centres',
        'Gynecologists & Obstetricians',
        'Laboratory Services Providers',
        'Urologists (Male Infertility Management)',
        'Fibroids Management',
        'Genetic/ Gender Selection Testing'
      ],
      duration: '1-2 months',
      price: 'From ₦30,000'
    },
    {
      icon: Heart,
      title: 'Natural Conception',
      description: 'We are aware IVF is not for everyone and not everyone will need IVF. With timely intervention, result-oriented care and attention, some couples go on to conceive naturally.\n' +
          '\n' +
          'Our natural fertility and conception program embraces the use of Creighton methods for ovulation charting and monitoring as well as NaproTechnology for advanced treatments and corrective surgeries, augmented with holistic wellness plans.\n' +
          '\n' +
          'We help you understand the fertility language your body speaks, and prepare a personalized plan for you, so you can conceive naturally.\n' +
          '\n' +
          'You will be required to go through our Camp Napro program where necessary',
      features: [
        // 'Fertility health assessment',
        // 'Lifestyle optimization guidance',
        // 'Nutritional counseling',
        // 'Supplement recommendations',
        // 'Cycle tracking support'
      ],
      duration: '2-3 months',
      price: 'From ₦50,000'
    }
    // {
    //   icon: MessageCircle,
    //   title: 'Emotional Support & Counseling',
    //   description: 'Individual and couples therapy focused on the emotional aspects of fertility challenges.',
    //   features: [
    //     'Individual counseling sessions',
    //     'Couples therapy',
    //     'Support group facilitation',
    //     'Stress management techniques',
    //     'Coping strategy development'
    //   ],
    //   duration: 'Ongoing',
    //   price: 'From ₦25,000/session'
    // },
    // {
    //   icon: Calendar,
    //   title: 'Pregnancy Support',
    //   description: 'Continued care and guidance throughout your pregnancy journey after conception.',
    //   features: [
    //     'Early pregnancy support',
    //     'Prenatal counseling',
    //     'Birth preparation',
    //     'Postpartum planning',
    //     'Breastfeeding support'
    //   ],
    //   duration: '9 months',
    //   price: 'From ₦75,000'
    // }
  ];

  return (
    <div className="py-16">
      {/* Hero Section - Modernized */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-24 flex flex-col items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          {/* Decorative shape or gradient could go here for extra style */}
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
            Your Fertility Journey, Supported Every Step
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl text-center mb-6">
            Compassionate, expert care for every path to parenthood. Explore our holistic services designed to meet you where you are—and help you move forward with hope.
          </p>
        </div>
      </section>

      {/* Services Grid - Modernized */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAll ? services : services.slice(0, 3)).map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-emerald-50">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-base">{service.description}</p>
                {service.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                          <span className="inline-block w-4 h-4 mr-2 bg-emerald-100 rounded-full flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-auto pt-2">
                  <Link
                    to="/booking"
                    className="w-full bg-emerald-600 text-white py-2 rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200 text-center block text-base shadow"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {!showAll && services.length > 3 && (
              <button
                className="px-6 py-2 bg-emerald-600 text-white rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200"
                onClick={() => setShowAll(true)}
              >
                View More
              </button>
            )}
            {showAll && services.length > 3 && (
              <button
                className="px-6 py-2 bg-emerald-600 text-white rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200"
                onClick={() => setShowAll(false)}
              >
                View Less
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A structured approach to support you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">Comprehensive assessment of your situation and goals</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Personalized Plan</h3>
              <p className="text-gray-600">Custom treatment plan tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Regular check-ins and guidance throughout your journey</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Success & Beyond</h3>
              <p className="text-gray-600">Celebrating your success and continued support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how we can support 
            you on your path to parenthood.
          </p>
          <Link
            to="/booking"
            className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 inline-block"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;