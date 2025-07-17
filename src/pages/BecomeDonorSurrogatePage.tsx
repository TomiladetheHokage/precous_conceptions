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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">So you want to be a Surrogate Mother/Egg Donor/Sperm Donor?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Wow, what an amazing person you are – one of a kind, generous person whose desire is to help another family become parents.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Either you are signing up to be a Surrogate Mother or a Donor, you will find this experience challenging, demanding, yet rewarding and fulfilling. Our promise to you is to make this worth your while every step of the way.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We walk with you from the very first moments you get in touch with us, all the way!
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We give you all the education, counseling, and support to make your journey beautiful.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our screening process is vigorous, intense and engaging. We want to make sure you are matched with the most suitable family so that all parties are fulfilled.  It is not just about the compensation you will receive in appreciation of your valued time and contribution, it is about giving a lifetime gift to someone who needs it.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Steps to becoming a Surrogate / donor</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Step 1 - Enrollment, Assessment & Selection</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 leading-relaxed">
              <li>You apply online first, and we screen your application. You will have access to educational materials that will explain the process to you so you know what you are signing up for.</li>
              <li>We shortlist and invite you for a face to face interview</li>
              <li>Once you are successful at the interview, you will be wait- listed.</li>
              <li>You shall advance to our medical and psychological screening stage once we get a request from a likely match. Medical screening shall include screening for infectious and sexually transmitted diseases, fertility profile and other compatibility markers.</li>
              <li>If you are matched with a family, you shall be contacted and advanced to stage 2</li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed font-semibold">Note: only 20% of our candidates make it to this point.</p>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Step 2 - Documentation & Training</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 leading-relaxed">
              <li>Once you have been successfully matched with a commissioning couple, you will have to go through the Legal paper work and sign all appropriate contracts.</li>
              <li>You will also be taken through the process and procedure required of your specific program.</li>
              <li>Our program coordinator shall ensure you understand the process and what is required by all parties and where possible, shall accompany you to your initial appointments at the Fertility Clinic so you are familiar with the process.</li>
              <li>Your cycle shall take place usually within 2 months of matching</li>
            </ul>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Step 3 - Your Treatment</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 leading-relaxed">
              <li>If you are an ovum donor your treatment shall, most likely, last for a month. <a href="#" className="text-emerald-600 underline">Click here for more details</a></li>
              <li>If you are a surrogate mother candidate, please <a href="#" className="text-emerald-600 underline">click here for more details</a>.</li>
            </ul>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Step 4 - Your Compensation</h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Although the gift of a baby is priceless, the compensation you receive at Precious Conceptions is one of the best in the country! This is because we value your time, effort, commitment and contribution towards bringing hope to another family.
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