import React from 'react';

const EggDonorProgramPage = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Egg Donor Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Helping families achieve their dreams through our comprehensive egg donation program. 
            We connect generous donors with families in need, creating miracles together.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Our Egg Donor Program</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              An ovum donor or simply an egg donor, is a young lady age 21-30 years who voluntarily agrees to donate her eggs to another couple with the purpose of helping them achieve pregnancy. Because egg donors are usually younger than the intending mother, chances of conception are higher and achieving a pregnancy is higher.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Who needs an egg donor?</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 leading-relaxed">
              <li>An Intending mother who is advanced in age and no longer ovulating (preferably less than age 55)</li>
              <li>An intending mother who has suffered an ovarian damage or premature ovarian failure</li>
              <li>An intending mother with a serious health condition that could be genetically transferred to her child e.g. sickle cell disease, genetic disorders, mental disorders, etc</li>
              <li>An intending mother undergoing medical treatment that endanger her genetic make-up e.g cancer treatment</li>
              <li>An intending mother who has had repeated failure at assisted conception</li>
              <li>A mature single intending father</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Benefits of having an egg donor</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Despite the fact that the baby from this program would not be genetically linked to you, you would have the joy of experiencing a pregnancy, carrying the pregnancy to term, enjoying the beautiful moments and giving birth to your baby.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Other benefits include the ability to deliberately choose your baby’s genetical source to the best of your ability. You have a say in the choice of donor used under the comfort of total and complete anonymity.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You shall be matched with your donor based on your blood group, genotype, physical similarities, social, educational, family and vocational backgrounds as well as review their fertility and previous donation records where they are repeat donors with our organization.
            </p>
            <div className="bg-emerald-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Learn More?</h3>
              <p className="text-gray-700 mb-6">
                If you're considering egg donation as a path to parenthood, we're here to help. 
                Contact us to schedule a consultation and learn more about how our program can help 
                you achieve your family-building goals.
              </p>
              <a
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EggDonorProgramPage; 