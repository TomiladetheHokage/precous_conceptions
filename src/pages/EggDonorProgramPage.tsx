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
              Our egg donor program is designed to help families who are struggling with infertility 
              due to poor egg quality, advanced maternal age, or genetic concerns. We work with 
              carefully screened, healthy donors who are committed to helping others build their families.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">How It Works</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The egg donation process involves several steps, beginning with a thorough screening 
              of potential donors. Our donors undergo comprehensive medical, genetic, and psychological 
              evaluations to ensure they meet our high standards. Once matched, the donor undergoes 
              ovarian stimulation and egg retrieval, while the intended parents prepare for embryo 
              transfer through in vitro fertilization (IVF).
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Donor Screening Process</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              All our donors are carefully screened through a rigorous process that includes medical 
              history review, genetic testing, infectious disease screening, and psychological evaluation. 
              We ensure that all donors are healthy, between the ages of 21-32, and have no significant 
              medical or genetic conditions that could affect the health of future children.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Support Throughout the Journey</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We understand that the egg donation process can be emotionally complex for all parties involved. 
              Our team provides comprehensive support and counseling throughout the entire process, ensuring 
              that both donors and intended parents feel informed, supported, and comfortable with their decisions.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Success Rates</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our egg donation program has helped hundreds of families achieve successful pregnancies. 
              With our carefully screened donors and advanced medical protocols, we maintain high success 
              rates that give families the best possible chance of building their family through egg donation.
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
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EggDonorProgramPage; 