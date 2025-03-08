
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Conditions from '@/components/home/Conditions';
import Contact from '@/components/home/Contact';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href') || '';
      
      // Only process anchor links
      if (!href.startsWith('#')) return;
      
      const targetId = href.replace('#', '');
      
      // Handle scrolling to sections with specific condition IDs
      const target = document.getElementById(targetId);
      
      if (target) {
        // Set a small delay for condition tabs to ensure the section is properly rendered
        setTimeout(() => {
          const navbarHeight = 80; // Approximate navbar height
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // If the target is a condition, activate its tab
          if (targetId && ['autism', 'adhd', 'learning-disability', 'behavioral-issues', 'speech-delay', 'stammering'].includes(targetId)) {
            const conditionEvent = new CustomEvent('activateCondition', { detail: { conditionId: targetId } });
            document.dispatchEvent(conditionEvent);
          }
        }, 100);
      }
    };
    
    // Add event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    // Initial page load animation
    document.body.classList.add('animate-fade-in');
    
    // Cleanup event listeners
    return () => {
      document.body.classList.remove('animate-fade-in');
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  // Check for hash in URL on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      const target = document.getElementById(targetId);
      
      if (target) {
        setTimeout(() => {
          const navbarHeight = 80;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // If the target is a condition, activate its tab
          if (targetId && ['autism', 'adhd', 'learning-disability', 'behavioral-issues', 'speech-delay', 'stammering'].includes(targetId)) {
            const conditionEvent = new CustomEvent('activateCondition', { detail: { conditionId: targetId } });
            document.dispatchEvent(conditionEvent);
          }
        }, 300); // Longer delay for initial load
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Conditions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
