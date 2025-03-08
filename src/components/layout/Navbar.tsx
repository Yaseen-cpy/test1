
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Autism',
    path: '#autism'
  }, {
    name: 'ADHD',
    path: '#adhd'
  }, {
    name: 'Learning Disability',
    path: '#learning-disability'
  }, {
    name: 'Behavioral Issues',
    path: '#behavioral-issues'
  }, {
    name: 'Speech Delay',
    path: '#speech-delay'
  }, {
    name: 'Stammering',
    path: '#stammering'
  }];

  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4', {
    'bg-white/90 backdrop-blur-md shadow-sm': scrolled,
    'bg-transparent': !scrolled
  })}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-resonance-700 font-display font-bold text-xl md:text-2xl">
              Resonance Rehab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map(link => <a key={link.name} href={link.path} className="text-sm font-medium text-gray-700 hover:text-resonance-600 transition-colors">
                {link.name}
              </a>)}
            <a href="#contact" className="px-4 py-2 rounded-full bg-resonance-600 text-white hover:bg-resonance-700 transition-colors text-sm font-medium">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center text-gray-700" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={cn('md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20', {
        'translate-x-0': isOpen,
        'translate-x-full': !isOpen
      })}>
          {/* Close button in the top-right corner */}
          <button 
            className="absolute top-6 right-6 p-2 text-gray-700 hover:text-resonance-600"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
          
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 rounded-none my-0 bg-gray-50">
            {navLinks.map(link => <a key={link.name} href={link.path} onClick={closeMenu} className="text-base font-medium text-gray-700 hover:text-resonance-600 transition-colors py-2 border-b border-black-700">
                {link.name}
              </a>)}
            <a href="#contact" className="mt-4 inline-flex justify-center px-4 py-2 rounded-full bg-resonance-600 text-white hover:bg-resonance-700 transition-colors text-sm font-medium" onClick={closeMenu}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>;
};

export default Navbar;
