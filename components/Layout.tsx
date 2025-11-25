import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, GraduationCap, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_ADDRESS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {COMPANY_PHONE}</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Gujrat, Pakistan</span>
          </div>
          <div className="flex space-x-4">
             {/* Social placeholders */}
             <a href="#" className="hover:text-primary-300"><Facebook size={14}/></a>
             <a href="#" className="hover:text-primary-300"><Instagram size={14}/></a>
             <a href="#" className="hover:text-primary-300"><Linkedin size={14}/></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-primary-800 hover:opacity-90 transition">
              <div className="bg-primary-100 p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary-700" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-serif leading-none">StudyTimes</h1>
                <p className="text-xs text-slate-500 font-medium tracking-wide">Global Consultants</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary-700 border-b-2 border-primary-700'
                      : 'text-slate-600 hover:text-primary-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-primary-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium ${
                    isActive(link.path) ? 'text-primary-700' : 'text-slate-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-primary-600 text-white text-center py-2 rounded-md font-semibold hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <GraduationCap className="w-6 h-6" />
              <span className="text-xl font-bold font-serif">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Trusted consultancy for Georgia, Finland, USA & Sweden. 
              Helping students achieve their global education dreams since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-primary-400">Destinations</Link></li>
              <li><Link to="/services" className="hover:text-primary-400">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Study In</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations" className="hover:text-primary-400">USA</Link></li>
              <li><Link to="/destinations" className="hover:text-primary-400">Finland</Link></li>
              <li><Link to="/destinations" className="hover:text-primary-400">Georgia</Link></li>
              <li><Link to="/destinations" className="hover:text-primary-400">Sweden</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 shrink-0 mt-0.5" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400 shrink-0" />
                <span>{COMPANY_PHONE}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
