import React from 'react';
import { GraduationCap, FileCheck, Globe, Users, BookOpen, ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';

const icons: Record<string, React.ElementType> = {
  GraduationCap,
  FileCheck,
  Globe,
  Users,
  BookOpen
};

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-serif mb-4">Our Services</h1>
          <p className="text-slate-300 max-w-2xl">
            Comprehensive support for your study abroad journey, from counseling to landing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = icons[service.iconName] || Globe;
            return (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                    <Icon size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-500"/> Professional Support</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-500"/> Timely Updates</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Info Box */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 text-center">
            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-4">Interview Preparation</h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-8">
                One of our key strengths is preparing students for embassy interviews, especially for the USA and Finland. We conduct mock interviews to boost your confidence and ensure you are ready for any question.
            </p>
             <a href="/#/contact" className="text-primary-600 font-bold hover:underline">Book a Mock Interview &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
