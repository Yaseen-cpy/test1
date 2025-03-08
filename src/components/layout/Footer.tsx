
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-resonance-50 border-t border-resonance-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-resonance-700 font-display font-bold text-xl">Resonance Rehab</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Providing expert online therapy and counseling services for children and adults, 
              helping them overcome challenges and achieve their full potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-resonance-100 flex items-center justify-center text-resonance-700 hover:bg-resonance-200 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-resonance-100 flex items-center justify-center text-resonance-700 hover:bg-resonance-200 transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-resonance-100 flex items-center justify-center text-resonance-700 hover:bg-resonance-200 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-resonance-600 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-resonance-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-resonance-600 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-resonance-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#autism" className="text-gray-600 hover:text-resonance-600 transition-colors">Autism Therapy</a></li>
              <li><a href="#adhd" className="text-gray-600 hover:text-resonance-600 transition-colors">ADHD Management</a></li>
              <li><a href="#learning-disability" className="text-gray-600 hover:text-resonance-600 transition-colors">Learning Disability Support</a></li>
              <li><a href="#speech-delay" className="text-gray-600 hover:text-resonance-600 transition-colors">Speech Therapy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-resonance-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Resonance Rehab. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-resonance-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-resonance-600 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
