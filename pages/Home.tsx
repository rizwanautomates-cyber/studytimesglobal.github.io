import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Award, Users } from 'lucide-react';
import { DESTINATIONS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Students studying" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
              Study Abroad with <span className="text-primary-400">Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Your future begins here. We are the trusted consultancy for seeking education in Georgia, Finland, USA, and Sweden. Let us guide your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-slate-900 text-white rounded-lg font-semibold flex items-center justify-center transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">Top Study Destinations</h2>
          <p className="text-slate-600">Explore opportunities in world-class universities across Europe and the USA.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group relative rounded-xl overflow-hidden shadow-lg h-80 hover:shadow-2xl transition duration-300">
              <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                <p className="text-slate-200 text-sm mb-4 line-clamp-2">{dest.shortDescription}</p>
                <Link to="/destinations" className="text-primary-300 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50"></div>
              <img 
                src="https://picsum.photos/600/600?random=5" 
                alt="Consultation" 
                className="rounded-2xl shadow-xl relative z-10 w-full"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900">Why Choose StudyTimes?</h2>
              <p className="text-slate-600 leading-relaxed">
                With years of experience and a high success rate, we ensure your transition to international education is smooth and hassle-free.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Expert Guidance', desc: 'Certified counselors with years of experience.', icon: Users },
                  { title: 'High Visa Success Rate', desc: 'Proven track record for USA & Europe visas.', icon: CheckCircle },
                  { title: 'Global Network', desc: 'Direct partnerships with universities worldwide.', icon: Globe },
                  { title: 'End-to-End Support', desc: 'From admission to post-arrival assistance.', icon: Award },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary-600">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-serif text-center text-slate-900 mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 italic mb-6">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-xs text-primary-600 font-semibold uppercase tracking-wider">Student in {t.destination}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Start Your Journey?</h2>
          <p className="text-primary-200 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our experts and take the first step towards your international education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary-900 px-8 py-3 rounded-lg font-bold hover:bg-primary-50 transition">
              Book Free Consultation
            </Link>
            <Link to="/destinations" className="bg-transparent border border-primary-400 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-800 transition">
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
