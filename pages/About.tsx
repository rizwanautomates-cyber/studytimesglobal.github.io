import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-serif mb-4">About Us</h1>
          <p className="text-slate-300 max-w-2xl">
            We are dedicated to shaping the future of students by connecting them with the best global educational opportunities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold font-serif text-slate-900 mb-6">Our Story</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              StudyTimes Global Consultants was established with a singular mission: to make international education accessible and transparent for students in Pakistan. Located in the heart of Gujrat, we have grown to become a trusted name for students aspiring to study in Georgia, Finland, USA, and Sweden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our team consists of experienced education counselors who understand the complexities of visa processes and university admissions. We don't just process applications; we build careers.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/800/600?random=10" 
              alt="Office meeting" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Mission, Vision, Experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600">
              To empower students with correct information and guidance, ensuring they choose the right path for their academic and professional growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary-600">
            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 mb-6">
              <Eye size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600">
              To be the leading educational consultancy in Pakistan, recognized for integrity, success, and personalized student support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-600">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Experience</h3>
            <p className="text-slate-600">
              With years of dedicated service, we have successfully placed hundreds of students in top universities across Europe and North America.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
