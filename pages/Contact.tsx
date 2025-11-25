import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'Georgia',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', destination: 'Georgia', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-serif mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl">
            Get in touch with us today to start your application process. Visit our office in Gujrat or drop us a message.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg h-fit">
            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">Send us a Message</h2>
            {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Your message has been sent. We will contact you soon.</span>
                </div>
            ) : null}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
                    placeholder="0300-1234567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Interested Country</label>
                  <select 
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition bg-white"
                  >
                    <option value="Georgia">Georgia</option>
                    <option value="Finland">Finland</option>
                    <option value="USA">USA</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
                  placeholder="Tell us about your educational background and questions..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600"><MapPin /></div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg">Visit Us</h3>
                        <p className="text-slate-600">{COMPANY_ADDRESS}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600"><Phone /></div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg">Call Us</h3>
                        <p className="text-slate-600 text-lg">{COMPANY_PHONE}</p>
                        <p className="text-slate-400 text-sm">Mon-Sat 9am to 6pm</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600"><Mail /></div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
                        <p className="text-slate-600">{COMPANY_EMAIL}</p>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="bg-white p-2 rounded-xl shadow-lg h-80 w-full overflow-hidden">
                <iframe 
                    title="StudyTimes Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.477759600115!2d74.0682!3d32.5714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1b0000000001%3A0x123456789abcdef!2sShaheen%20Chowk%2C%20Gujrat!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                ></iframe>
                {/* Note: Coordinates for Gujrat Shaheen Chowk are approx. Just a placeholder embed link logic. */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
