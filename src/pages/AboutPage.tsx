// import React from 'react';
import { Heart, Award, Users, BookOpen } from 'lucide-react';

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

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About FertilityJourney
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from personal experience, driven by compassion, dedicated to helping 
              Nigerian families achieve their dreams of parenthood.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Founder portrait"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Personal Journey</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  My name is Dr. Adaora Nnamdi, and like many of the families I support today, 
                  my journey to parenthood was not straightforward. After struggling with infertility 
                  for over four years, I experienced firsthand the emotional rollercoaster, the medical 
                  complexities, and the cultural pressures that come with fertility challenges in Nigeria.
                </p>
                <p>
                  During my own journey, I realized there was a gap in holistic, culturally-sensitive 
                  fertility support in our country. While medical interventions were available, the 
                  emotional, spiritual, and educational support systems were lacking. This realization 
                  became the seed for FertilityJourney.
                </p>
                <p>
                  Today, as a mother of two beautiful children conceived through IVF, I combine my 
                  medical background with my personal experience to provide the kind of comprehensive 
                  support I wished I had during my own journey. Every family deserves hope, 
                  understanding, and expert guidance on their path to parenthood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-emerald-50">
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
      </section>

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