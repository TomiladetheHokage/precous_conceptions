import React from 'react';

const BecomeDonorSurrogatePage = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Become a Donor or Surrogate
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make a difference in someone's life by helping them build their family. 
            Your generosity can create miracles and bring joy to families in need.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How You Can Help</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              By becoming an egg donor or surrogate, you have the opportunity to help families 
              who are struggling with infertility. Your selfless act can change lives and create 
              families that might not otherwise exist. We provide comprehensive support and 
              compensation for your time and commitment.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Egg Donation</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As an egg donor, you can help families who are unable to conceive due to poor egg 
              quality, advanced maternal age, or genetic concerns. The egg donation process involves 
              ovarian stimulation and egg retrieval, typically completed in one menstrual cycle. 
              Our donors receive comprehensive medical care and generous compensation for their time.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Surrogacy</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a surrogate, you can help families who are unable to carry a pregnancy themselves. 
              Surrogates carry a pregnancy for intended parents, providing the incredible gift of 
              helping to bring a child into the world. This journey typically takes 12-18 months 
              and includes comprehensive medical care and generous compensation.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Requirements</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our donors and surrogates must meet specific criteria to ensure the health and safety 
              of all parties involved. Requirements include age restrictions, health screenings, 
              psychological evaluations, and lifestyle factors. We provide detailed information 
              about all requirements during the application process.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">The Application Process</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The application process begins with an initial consultation to discuss your interest 
              and answer any questions you may have. This is followed by comprehensive screening 
              including medical evaluations, genetic testing, and psychological assessments. 
              Throughout the process, our team provides guidance and support.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Support and Compensation</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe that donors and surrogates should be well-compensated for their time, 
              effort, and commitment. Our compensation packages are competitive and include 
              medical expenses, travel costs, and additional support services. We also provide 
              ongoing emotional support and counseling throughout the process.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Making a Difference</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              By becoming a donor or surrogate, you're not just helping one family - you're 
              creating a legacy of hope and possibility. Your generosity can inspire others 
              and contribute to a community of support for families struggling with infertility.
            </p>

            <div className="bg-emerald-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Make a Difference?</h3>
              <p className="text-gray-700 mb-6">
                If you're interested in becoming an egg donor or surrogate, we'd love to hear from you. 
                Contact us to learn more about the process and how you can help families achieve 
                their dreams of parenthood.
              </p>
              <a
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeDonorSurrogatePage; 