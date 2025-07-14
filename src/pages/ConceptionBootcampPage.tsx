import React from 'react';

const ConceptionBootcampPage = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conception Bootcamp
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our comprehensive bootcamp designed to optimize your fertility and increase 
            your chances of conception through education, support, and proven strategies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Transform Your Fertility Journey</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our Conception Bootcamp is a comprehensive program designed to empower couples 
              with the knowledge, tools, and support they need to optimize their fertility 
              and increase their chances of successful conception. Whether you're just starting 
              your journey or have been trying for some time, our bootcamp provides evidence-based 
              strategies and personalized guidance.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">What You'll Learn</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our bootcamp covers essential topics including fertility awareness, optimal timing, 
              nutrition and lifestyle factors, stress management, and medical interventions. 
              You'll learn from fertility experts, nutritionists, and mental health professionals 
              who understand the unique challenges of the fertility journey.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Program Structure</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The bootcamp runs for 12 weeks and includes weekly group sessions, individual 
              consultations, educational materials, and ongoing support. Each week focuses on 
              different aspects of fertility optimization, building a comprehensive foundation 
              for your conception journey.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Expert Guidance</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team of fertility specialists, nutritionists, and mental health professionals 
              work together to provide you with the most current and effective strategies for 
              fertility optimization. You'll have access to experts who understand the science 
              behind conception and can provide personalized recommendations.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Community Support</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              One of the most valuable aspects of our bootcamp is the community of support you'll 
              find. Connect with other couples on similar journeys, share experiences, and build 
              lasting friendships. The emotional support and understanding from others who truly 
              understand your situation can be incredibly powerful.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Success Stories</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Many of our bootcamp participants have gone on to achieve successful pregnancies 
              and build their families. The knowledge, support, and strategies they gained through 
              the program have made a significant difference in their fertility journeys. 
              We're proud to be part of their success stories.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Investment in Your Future</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Conception Bootcamp is an investment in your fertility and your family's future. 
              The knowledge and strategies you'll learn can benefit you throughout your entire 
              fertility journey, whether you conceive naturally or need medical assistance.
            </p>

            <div className="bg-emerald-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Next Bootcamp</h3>
              <p className="text-gray-700 mb-6">
                Ready to take control of your fertility journey? Join our next Conception Bootcamp 
                and give yourself the best possible chance of achieving your dreams of parenthood. 
                Contact us to learn more about upcoming sessions and enrollment.
              </p>
              <a
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptionBootcampPage; 