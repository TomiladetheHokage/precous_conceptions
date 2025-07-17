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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Our Surrogacy Program</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A surrogate mother is simply a helper. She is a young lady age 21-40 years who voluntarily agrees to host/carry a pregnancy on behalf of another couple with the purpose of helping them have a baby. At Precious Conceptions, all our surrogate mothers are gestational hosts, meaning they do not have any genetic connection with the baby they are carrying.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Intending parents who are able to produce their own embryos but are unable to carry a pregnancy to term often turn to gestational surrogacy to achieve their dreams. However, there is also opportunity for intending mothers who are unable to use their own eggs to achieve the family of their dreams through our donor-surrogate program.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Who needs a surrogate mother?</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 leading-relaxed">
              <li>An intending mother who has underdeveloped uterus, or does not have one.</li>
              <li>An intending mother who has suffered uterine damage due to scarring/adhesions/Asherman's syndrome, endometrosis</li>
              <li>An intending mother who has been advised not to carry a pregnancy</li>
              <li>An intending mother with a serious health condition e.g. high blood pressure, renal failure / transplantation, auto immune diseases</li>
              <li>An intending mother undergoing medical treatment that endanger her genetic make-up e.g cancer treatment</li>
              <li>An intending mother who has had repeated, un resolved miscarriages</li>
              <li>An intending mother whose uterus has failed to respond to several hormonal stimulations</li>
              <li>A mature single intending father</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Benefits of having a surrogate mother</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Although you would not be physically pregnant with your child, surrogacy helps you have your own biological child if you are using your own gametes. Other benefits include the ability to deliberately choose your surrogate mother to the best of your ability. You have a say in the choice of surrogate mother under the comfort of total and complete confidentiality.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You shall be able to select your surrogate mother based on ethnicity, social, educational, family and vocational backgrounds as well as review their fertility and previous surrogacy records.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you are on the donor – surrogate program, you have the joy of participating in your baby’s moments, from conception to delivery and the joy of holding your child in your arms for the first time wipes off the years of trying.
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