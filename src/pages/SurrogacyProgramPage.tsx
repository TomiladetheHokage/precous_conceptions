import React from 'react';

const SurrogacyProgramPage = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Surrogacy Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our surrogacy program offers hope and support to families who need assistance 
            carrying their pregnancy. We guide you through every step of this beautiful journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Surrogacy</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Surrogacy is a family-building option where a woman (the surrogate) carries a pregnancy 
              for another person or couple (the intended parents). This option is often chosen by 
              individuals or couples who cannot carry a pregnancy themselves due to medical reasons, 
              same-sex couples, or those who have experienced recurrent pregnancy loss.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Types of Surrogacy</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer both traditional and gestational surrogacy options. In traditional surrogacy, 
              the surrogate's own eggs are used, while in gestational surrogacy, the surrogate carries 
              an embryo created from the intended parents' or donors' eggs and sperm. Most of our 
              programs use gestational surrogacy, which provides clearer legal and emotional boundaries.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Our Surrogacy Process</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our surrogacy program begins with a comprehensive consultation to understand your unique 
              situation and goals. We then help you find a suitable surrogate through our carefully 
              screened surrogate database. The process includes legal agreements, medical procedures, 
              and ongoing support throughout the pregnancy and birth.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Surrogate Screening</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              All our surrogates undergo extensive screening including medical evaluations, psychological 
              assessments, and background checks. We ensure that our surrogates are healthy, emotionally 
              stable, and fully committed to helping families achieve their dreams of parenthood.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Legal and Emotional Support</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Surrogacy involves complex legal and emotional considerations. Our team works with 
              experienced attorneys to ensure all legal agreements are properly drafted and executed. 
              We also provide ongoing counseling and support to help all parties navigate the emotional 
              aspects of the surrogacy journey.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Success Stories</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our surrogacy program has helped countless families bring their children into the world. 
              We take pride in the relationships we've helped build and the families we've helped create. 
              Each success story is a testament to the power of hope, determination, and the human spirit.
            </p>

            <div className="bg-emerald-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Surrogacy Journey</h3>
              <p className="text-gray-700 mb-6">
                If surrogacy might be the right path for your family, we're here to guide you through 
                every step. Contact us to learn more about our program and how we can help you achieve 
                your dreams of parenthood.
              </p>
              <a
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurrogacyProgramPage; 