import { useState, useEffect } from 'react';
import { 
  Phone, Clock, MapPin, Star, ChevronDown, ChevronUp, 
  Menu, X, Calendar, Shield, Award, Heart, Users, 
  Smile, CheckCircle, ArrowRight, Mail, ChevronRight
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Star, value: '2,500+', label: '5-Star Reviews' },
    { icon: Award, value: '200+', label: 'Years Combined Experience' },
    { icon: Clock, value: '95+', label: 'Years of Serving NYC' },
    { icon: Smile, value: '25,000+', label: 'Smiles Transformed' },
  ];

  const services = [
    { title: 'General Dentistry', desc: 'Comprehensive exams, cleanings, fillings, and preventive care to maintain your oral health.', icon: Shield },
    { title: 'Cosmetic Dentistry', desc: 'Transform your smile with veneers, whitening, bonding, and complete smile makeovers.', icon: Sparkles },
    { title: 'Dental Implants', desc: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth.', icon: Heart },
    { title: 'Orthodontics', desc: 'Straighten your teeth with Invisalign, traditional braces, and other alignment solutions.', icon: Smile },
    { title: 'Emergency Dental', desc: 'Same-day emergency care for severe pain, broken teeth, and urgent dental needs.', icon: Shield },
    { title: 'Pediatric Dentistry', desc: 'Gentle, friendly dental care designed specifically for children and teenagers.', icon: Users },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'Absolutely incredible experience! The staff made me feel so comfortable from the moment I walked in. Dr. Chen is truly the best dentist I\'ve ever had. Highly recommend!', rating: 5, source: 'Google' },
    { name: 'Michael R.', text: 'I had a dental emergency and they fit me in the same day. The team was professional, caring, and resolved my issue quickly. Best dental office in NYC!', rating: 5, source: 'Google' },
    { name: 'Jennifer L.', text: 'I was terrified of dentists until I came here. They completely changed my perspective. Gentle, thorough, and always explain everything clearly. Five stars!', rating: 5, source: 'Google' },
    { name: 'David K.', text: 'The cosmetic work they did on my smile is absolutely life-changing. I can\'t stop smiling now. The entire team is world-class. Thank you, Bright Smile Dental!', rating: 5, source: 'Google' },
    { name: 'Emily W.', text: 'Best dental experience in Manhattan! Open 7 days a week, amazing staff, and state-of-the-art equipment. They truly care about their patients.', rating: 5, source: 'Google' },
  ];

  const faqs = [
    { question: 'How Often Should I Visit the Dentist?', answer: 'The American Dental Association recommends visiting your dentist twice a year for routine cleanings and exams. However, if you have gum disease, diabetes, or a history of cavities, your dentist may recommend more frequent visits — sometimes every three months. Regular checkups help catch problems early and keep your smile healthy long-term.' },
    { question: 'What Should I Expect at My First Visit?', answer: 'Your first visit includes a comprehensive exam, full-mouth X-rays, and a professional cleaning. We\'ll review your medical and dental history, discuss any concerns, and create a personalized treatment plan if needed. This appointment typically takes 60–90 minutes. Please arrive 15 minutes early to complete intake forms.' },
    { question: 'Do You Offer Emergency Dental Care?', answer: 'Yes! We keep time available for urgent cases like severe pain, broken teeth, and infections. Call us immediately if you have a dental emergency — we\'ll fit you in the same day whenever possible. Common emergencies include knocked-out teeth, severe infections, broken restorations, and uncontrolled bleeding.' },
    { question: 'What About Cost and Insurance?', answer: 'We accept most major dental insurance plans including Delta Dental, MetLife, Cigna, Aetna, and Guardian. Our team will verify your coverage and explain your out-of-pocket costs before treatment begins. For uninsured patients, we offer competitive cash pricing and flexible payment plans through CareCredit.' },
    { question: 'What Cosmetic Treatments Do You Offer?', answer: 'We offer professional teeth whitening, porcelain veneers, composite bonding, dental crowns, and complete smile makeovers. During a cosmetic consultation, we\'ll assess your goals and recommend the best options for your needs and budget. Many treatments can be completed in just one or two visits.' },
    { question: 'What If I Have Dental Anxiety?', answer: 'Dental anxiety is very common, and we\'re experienced in working with nervous patients. We offer sedation options including nitrous oxide and oral sedation, clear communication during procedures, and a calm, supportive environment. Tell us about your fears — we\'ll work at your pace and ensure your comfort.' },
  ];

  const partners = ['Invisalign', 'Straumann', 'Philips Zoom', '3M', 'Dentsply Sirona', 'Henry Schein'];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (212) 555-0187
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Open 7 Days a Week: 8AM - 8PM
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              315 East 62nd Street, New York, NY
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-300 transition">Book Online</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-300 transition">Patient Portal</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9 8 10.5C9 12 9 13 9 14C9 15 8.5 16.5 8 17.5C7.5 18.5 7 20 8 21C9 22 10 22 11 22H13C14 22 15 22 16 21C17 20 16.5 18.5 16 17.5C15.5 16.5 15 15 15 14C15 13 15 12 16 10.5C17 9 17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2Z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">Bright Smile</h1>
                <p className="text-xs text-blue-600 font-semibold tracking-wider">DENTAL NYC</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">About Us</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 font-medium transition">Our Team</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition">Reviews</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:2125550187" className="flex items-center gap-2 text-blue-700 font-semibold">
                <Phone className="w-5 h-5" />
                (212) 555-0187
              </a>
              <a href="#book" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5">
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl">
            <div className="px-4 py-4 space-y-2">
              <a href="#home" className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="#team" className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Our Team</a>
              <a href="#testimonials" className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#faq" className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <div className="pt-4 border-t">
                <a href="tel:2125550187" className="flex items-center gap-2 py-2 px-4 text-blue-700 font-semibold">
                  <Phone className="w-5 h-5" /> (212) 555-0187
                </a>
                <a href="#book" className="block mt-2 bg-blue-600 text-white text-center py-3 px-6 rounded-full font-semibold">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3881468/pexels-photo-3881468.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Modern dental office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>Rated #1 Dental Practice in Manhattan</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Best Smile
              <br />
              <span className="text-cyan-300">Starts Here</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Experience world-class dental care in the heart of Manhattan. Our team of expert dentists 
              combines cutting-edge technology with compassionate care to give you the smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-1">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <a href="tel:2125550187" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5" />
                (212) 555-0187
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white text-sm font-bold">S</div>
                <div className="w-10 h-10 rounded-full bg-cyan-400 border-2 border-white flex items-center justify-center text-white text-sm font-bold">J</div>
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-sm font-bold">M</div>
                <div className="w-10 h-10 rounded-full bg-cyan-500 border-2 border-white flex items-center justify-center text-white text-sm font-bold">A</div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm">2,500+ Happy Patients on Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <stat.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our Dental Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From routine cleanings to complete smile makeovers, we provide comprehensive dental care 
              all under one roof with state-of-the-art technology.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <a href="#book" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                What Sets Bright Smile Dental Apart?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                In a city as big as NYC, dentists are everywhere. But finding a practice that truly cares 
                about your comfort, health, and smile can be challenging. Here's why thousands of patients 
                trust us with their dental care.
              </p>
              <ul className="space-y-4">
                {[
                  'Painless dental care with advanced sedation options',
                  'Experienced dental professionals with 200+ combined years',
                  'Flexible payment options & most insurance accepted',
                  'Beautiful, natural-looking smile design',
                  'One place for all your dental needs',
                  'Convenient scheduling — open 7 days a week',
                  'Prime Manhattan location near Central Park',
                  'State-of-the-art dental equipment & technology',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3881181/pexels-photo-3881181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Best NYC dentist treating a patient" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">95+</div>
                <div className="text-blue-100">Years Serving NYC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Dental care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for the Smile You've Always Wanted?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a routine cleaning or a complete smile transformation, our team is here to help. 
            Book your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-xl">
              <Calendar className="w-5 h-5" />
              Book Online
            </a>
            <a href="tel:2125550187" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              <Phone className="w-5 h-5" />
              Call: (212) 555-0187
            </a>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Experts</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Meet Our NYC Dentists</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our team of highly skilled dentists and specialists bring decades of combined experience 
              and a passion for creating beautiful, healthy smiles.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Sarah Chen', role: 'General & Cosmetic Dentistry', exp: '18 years experience', initials: 'SC', color: 'from-blue-500 to-cyan-400' },
              { name: 'Dr. James Park', role: 'Periodontics & Implants', exp: '22 years experience', initials: 'JP', color: 'from-cyan-500 to-blue-400' },
              { name: 'Dr. Maria Santos', role: 'Orthodontics & Invisalign', exp: '15 years experience', initials: 'MS', color: 'from-blue-600 to-indigo-400' },
              { name: 'Dr. David Kim', role: 'Endodontics & Oral Surgery', exp: '20 years experience', initials: 'DK', color: 'from-indigo-500 to-blue-400' },
            ].map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 bg-gradient-to-br flex items-center justify-center" style={{background: `linear-gradient(135deg, ${index === 0 ? '#3b82f6, #22d3ee' : index === 1 ? '#06b6d4, #3b82f6' : index === 2 ? '#2563eb, #818cf8' : '#6366f1, #3b82f6'})`}}>
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{doctor.initials}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mt-1">{doctor.role}</p>
                  <p className="text-gray-500 text-sm mt-2">{doctor.exp}</p>
                  <a href="#book" className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:gap-3 transition-all">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">What Our Patients Are Saying</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              With over 2,500 five-star reviews, we're proud to be one of the most trusted dental 
              practices in New York City.
            </p>
          </div>
          
          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-6 right-8 text-blue-200">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonials[currentTestimonial].name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentTestimonial].source}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-4">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">Our Trusted Partners & Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="text-xl sm:text-2xl font-bold tracking-wide">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Care Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/5355920/pexels-photo-5355920.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Modern dental office" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Dental Care</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Comprehensive Care at Bright Smile Dental
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our NYC dentists and staff understand the challenges that patients face. From routine 
                checkups to complex restorative procedures, we provide personalized care that puts 
                your comfort first.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our patients have stayed with us for decades. They travel from all over the U.S. and 
                beyond to experience the Bright Smile difference. Whether you have dental insurance or 
                not, take advantage of our free consultation!
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Latest Technology', 'Gentle Care', 'Flexible Hours', 'Most Insurance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#book" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all hover:shadow-lg">
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-4">
              Got questions? We've got answers. Here are the most common questions we receive from our patients.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section id="book" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Book Your Appointment Today</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Ready to experience the best dental care in NYC? Schedule your appointment now and take 
            the first step toward a healthier, more beautiful smile.
          </p>
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
              <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
            </div>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition mb-4 text-gray-500">
              <option value="">Select Service</option>
              <option>General Dentistry</option>
              <option>Cosmetic Dentistry</option>
              <option>Dental Implants</option>
              <option>Orthodontics / Invisalign</option>
              <option>Teeth Whitening</option>
              <option>Emergency Dental Care</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Additional Notes (Optional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition mb-6 resize-none" />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Request Appointment
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Or call us directly at <a href="tel:2125550187" className="text-blue-600 font-semibold">(212) 555-0187</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Our Location</h3>
              <p className="text-gray-600 text-sm">315 East 62nd Street<br />Suite 200<br />New York, NY 10065</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:2125550187" className="hover:text-blue-600 transition">(212) 555-0187</a>
              </p>
              <p className="text-gray-500 text-xs mt-1">Emergency line available 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600 text-sm">Monday - Friday: 8AM - 8PM<br />Saturday - Sunday: 9AM - 5PM</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:info@brightsmile.com" className="hover:text-blue-600 transition">info@brightsmile.com</a>
              </p>
              <p className="text-gray-500 text-xs mt-1">We respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9 8 10.5C9 12 9 13 9 14C9 15 8.5 16.5 8 17.5C7.5 18.5 7 20 8 21C9 22 10 22 11 22H13C14 22 15 22 16 21C17 20 16.5 18.5 16 17.5C15.5 16.5 15 15 15 14C15 13 15 12 16 10.5C17 9 17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Bright Smile</h3>
                  <p className="text-blue-400 text-xs font-semibold">DENTAL NYC</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Providing exceptional dental care to New York City since 1930. Your smile is our passion.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Services', 'Our Team', 'Testimonials', 'FAQ', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition text-sm flex items-center gap-2">
                      <ChevronRight className="w-3 h-3" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4">Our Services</h4>
              <ul className="space-y-2">
                {['General Dentistry', 'Cosmetic Dentistry', 'Dental Implants', 'Invisalign', 'Teeth Whitening', 'Root Canal', 'Emergency Care'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-white transition text-sm flex items-center gap-2">
                      <ChevronRight className="w-3 h-3" /> {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Insurance */}
            <div>
              <h4 className="text-white font-bold mb-4">Insurance We Accept</h4>
              <ul className="space-y-2">
                {['Delta Dental', 'MetLife', 'Cigna', 'Aetna', 'Guardian', 'United Healthcare', 'Blue Cross Blue Shield'].map((ins) => (
                  <li key={ins} className="text-gray-400 text-sm flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" /> {ins}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs mt-4">And many more. Contact us to verify your coverage.</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Bright Smile Dental NYC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top & Floating Call Button */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="tel:2125550187" className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110">
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}

// Helper component for Sparkles icon since it's not in lucide
function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

export default App;