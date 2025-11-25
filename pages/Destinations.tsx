import React, { useState } from 'react';
import { Check, FileText } from 'lucide-react';
import { DESTINATIONS } from '../constants';
import { Destination } from '../types';

const Destinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(DESTINATIONS[0].id);

  const activeDestination = DESTINATIONS.find(d => d.id === activeTab) as Destination;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-serif mb-4">Study Destinations</h1>
          <p className="text-slate-300 max-w-2xl">
            Discover the best countries for your higher education. We specialize in Georgia, Finland, USA, and Sweden.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {DESTINATIONS.map((dest) => (
            <button
              key={dest.id}
              onClick={() => setActiveTab(dest.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all shadow-sm ${
                activeTab === dest.id
                  ? 'bg-primary-600 text-white shadow-primary-200'
                  : 'bg-white text-slate-600 hover:bg-primary-50'
              }`}
            >
              Study in {dest.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
          {/* Banner Image */}
          <div className="h-64 md:h-80 w-full relative">
            <img 
              src={activeDestination.imageUrl} 
              alt={activeDestination.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-wide">
                {activeDestination.name}
              </h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-8 border-l-4 border-primary-500 pl-6 italic">
              {activeDestination.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</span>
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {activeDestination.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                      <Check size={18} className="text-green-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                   <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm">?</span>
                  Eligibility
                </h3>
                <ul className="space-y-4">
                  {activeDestination.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm">!</span>
                  Required Documents
                </h3>
                <ul className="space-y-4">
                  {activeDestination.documents.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                      <FileText size={18} className="text-orange-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Interested in {activeDestination.name}?</h4>
                <p className="text-slate-500">Get a free assessment of your profile today.</p>
              </div>
              <a 
                href="/#/contact" 
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-md whitespace-nowrap"
              >
                Apply for {activeDestination.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
