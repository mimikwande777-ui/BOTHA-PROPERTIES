'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Wifi, 
  Car, 
  Sofa, 
  Zap, 
  ShieldCheck, 
  Phone, 
  User, 
  Home, 
  CheckCircle2, 
  XCircle,
  Clock,
  Key,
  Info,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

const apartments = [
  {
    id: 1,
    title: '2 Bedroom Flat',
    rent: 'R10,000',
    deposit: 'R5,000',
    features: ['Spacious open-plan lounge & dining', 'Neat, functional kitchen', '1 secure parking bay'],
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: '1 Bedroom Flat',
    rent: 'R7,500',
    deposit: 'R3,500',
    features: ['Open-plan lounge & dining area', 'Neat, functional kitchen', '1 secure parking bay'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Bachelor Flat',
    rent: 'R5,000',
    deposit: 'R2,500',
    features: ['Cozy living space', 'Neat, functional kitchen', '1 secure parking bay'],
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Room in a Flat',
    rent: 'R3,000',
    deposit: 'R1,800',
    features: ['Shared living areas', 'Access to kitchen', 'Comfortable setup'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
  },
];

const faqs = [
  {
    question: "What are the standard lease terms?",
    answer: "We offer standard 12-month lease agreements. All units are available immediately for the next month."
  },
  {
    question: "How does the tenant screening process work?",
    answer: "We conduct a thorough screening process for all prospective tenants. This includes credit checks, employment verification, affordability assessments, and previous rental references."
  },
  {
    question: "What are the move-in requirements?",
    answer: "To move in, you are required to pay the first month's rent upfront, along with the specified security deposit for your unit type, and a standard key deposit."
  },
  {
    question: "Are pets allowed in the apartments?",
    answer: "Unfortunately, to maintain a comfortable environment for all residents, our apartments are strictly not pet-friendly."
  },
  {
    question: "Is electricity included in the rent?",
    answer: "Most of our flats are equipped with prepaid electricity meters for easy budgeting. Water and other utilities may have separate arrangements depending on the specific unit."
  }
];

const amenities = [
  { icon: <Wifi className="w-6 h-6" />, text: 'Free WiFi' },
  { icon: <Sofa className="w-6 h-6" />, text: 'Furnished & Unfurnished Options' },
  { icon: <Car className="w-6 h-6" />, text: '1 Secure Open Parking Bay' },
  { icon: <Zap className="w-6 h-6" />, text: 'Prepaid Electricity (some flats)' },
  { icon: <Home className="w-6 h-6" />, text: 'Neat, Functional Kitchens' },
];

export default function ApartmentListing() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* Header Navigation */}
      <nav className="h-20 px-6 md:px-12 flex items-center justify-between bg-white border-b border-slate-100 shrink-0 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">B</div>
          <span className="text-xl font-black tracking-tight text-slate-800 uppercase hidden sm:block">Botha Properties</span>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <a href="tel:0672673073" className="px-5 py-2 md:px-6 md:py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-all shadow-lg shadow-orange-200 flex items-center gap-2">
            <Phone className="w-4 h-4" /> <span className="hidden sm:inline">067 267 3073</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full py-20 lg:py-32 flex items-center justify-center bg-indigo-50 border-b border-indigo-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="Modern Apartment Interior"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" /> Port Elizabeth
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-slate-900 mb-6 tracking-tight">
            Convenient <span className="text-indigo-600">&</span> Comfortable
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            Perfectly located close to shops, schools, and Terminals. Choose from our selection of neat 2-bedroom, 1-bedroom, and bachelor apartments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#apartments" className="px-8 py-3.5 bg-white text-slate-900 rounded-xl font-bold hover:border-indigo-500 border border-slate-200 transition-all shadow-xl shadow-indigo-100/50">
              View Apartments
            </a>
            <a href="#contact" className="px-8 py-3.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Book a Viewing
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Amenities Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our properties are equipped with the amenities necessary for easy, everyday living in a great location.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {amenities.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-[24px] shadow-xl shadow-indigo-100/30 border-2 border-slate-50 hover:border-indigo-500 transition-all group">
                <div className="w-14 h-14 flex items-center justify-center bg-teal-50 text-teal-600 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm text-slate-800">{item.text}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Available Apartments */}
        <section id="apartments" className="mb-24 scroll-mt-24">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Available Units</h2>
              <p className="text-slate-600">Available immediately for next month.</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-200">
              <Clock className="w-4 h-4" /> Move-in Ready
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {apartments.map((apt) => {
              // Dynamic colors based on ID for the vibrant look
              const colors = [
                { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Spacious' },
                { bg: 'bg-teal-100', text: 'text-teal-700', label: 'Functional' },
                { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Efficient' },
                { bg: 'bg-indigo-100', text: 'text-indigo-700', label: 'Budget' },
              ];
              const theme = colors[(apt.id - 1) % colors.length];

              return (
                <div key={apt.id} className="bg-white rounded-[40px] overflow-hidden shadow-xl shadow-indigo-100/40 border-2 border-slate-100 hover:border-indigo-500 transition-all flex flex-col sm:flex-row group">
                  <div className="sm:w-2/5 relative h-48 sm:h-auto bg-slate-100 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-100 group-hover:border-indigo-500 transition-colors">
                    <Image 
                      src={apt.image}
                      alt={apt.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className={`px-3 py-1 ${theme.bg} ${theme.text} text-[10px] font-black uppercase rounded-full`}>{theme.label}</span>
                        <span className="text-2xl font-black text-indigo-600">{apt.rent}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{apt.title}</h3>
                    </div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {apt.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                          <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                            <span className="text-teal-600 text-xs font-bold">✓</span>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center text-sm font-bold border-t border-slate-100 pt-6">
                      <span className="text-slate-400">Deposit: {apt.deposit}</span>
                      <a href={`#contact`} className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1">
                        Inquire Now <span className="text-xl leading-none">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-24">
          <div className="bg-indigo-900 rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-800">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8 tracking-tight">Important Details</h2>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                      <span className="text-rose-400 font-bold">×</span>
                    </div>
                    <span className="text-indigo-100 font-medium text-lg">Unfortunately, not pet friendly.</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center shrink-0">
                      <Key className="w-5 h-5 text-indigo-300" />
                    </div>
                    <span className="text-indigo-100 font-medium text-lg">Key deposit is applicable.</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-teal-300" />
                    </div>
                    <span className="text-indigo-100 font-medium text-lg">Tenant screening will be conducted.</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-orange-300" />
                    </div>
                    <span className="text-indigo-100 font-medium text-lg">Ideal for easy, everyday living in a great location!</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl shadow-indigo-900/50">
                <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-6">Contact Management</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest mb-1">Property Managers</p>
                      <p className="text-xl font-black">Brian & Candice Botha</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-indigo-200" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest mb-1">Direct Line</p>
                      <a href="tel:0672673073" className="text-xl font-black hover:text-orange-400 transition-colors">067 267 3073</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-slate-600 font-medium">
                Find answers to common questions about leasing, move-in procedures, and building policies.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-indigo-200 transition-colors shadow-sm">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === index ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Booking Form */}
        <section id="contact" className="max-w-3xl mx-auto scroll-mt-24">
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-indigo-100/50 border-2 border-indigo-50">
            <div className="text-center mb-10">
              <p className="text-xs text-indigo-500 font-bold uppercase tracking-widest mb-3">Direct Booking Request</p>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Arrange a Viewing</h2>
              <p className="text-slate-600 font-medium">
                Interested in one of our units? Fill out the form below or call us directly to schedule a viewing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                  <input required type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                  <input required type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                  <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="082 123 4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-xs font-bold text-slate-500 uppercase tracking-wider">I am interested in:</label>
                <select id="interest" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all">
                  <option value="">Select a unit type...</option>
                  <option value="2bed">2 Bedroom Flat</option>
                  <option value="1bed">1 Bedroom Flat</option>
                  <option value="bachelor">Bachelor Flat</option>
                  <option value="room">Room in a Flat</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Additional Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400" placeholder="Is there anything specific you would like to know?"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all focus:ring-4 focus:ring-indigo-600/20 disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 mt-4"
              >
                {formState === 'idle' && 'Request Booking'}
                {formState === 'submitting' && (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                )}
              </button>
              
              <p className="text-center text-xs font-medium text-slate-400 flex items-center justify-center gap-1 mt-6">
                <Info className="w-4 h-4" /> Tenant screening & key deposit applicable.
              </p>
            </form>
          </div>
        </section>

      </main>

      <footer className="bg-slate-50 text-slate-500 py-12 border-t border-slate-200 text-center flex flex-col items-center">
        <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">B</div>
        <p className="font-bold text-slate-800 uppercase tracking-widest text-sm mb-2">Botha Properties</p>
        <p className="text-sm font-medium">© {new Date().getFullYear()} Port Elizabeth Apartments. All rights reserved.</p>
      </footer>
    </div>
  );
}
