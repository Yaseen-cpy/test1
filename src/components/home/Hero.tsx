
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const Hero = () => {
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate the distance from the center
      const moveX = (clientX - centerX) / 25;
      const moveY = (clientY - centerY) / 25;
      
      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          const factor = (index + 1) * 0.2;
          circle.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => circleRefs.current[0] = el}
          className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-soft-blue opacity-20 mix-blend-multiply"
        />
        <div 
          ref={el => circleRefs.current[1] = el}
          className="absolute top-[5%] right-[10%] w-[250px] h-[250px] rounded-full bg-soft-purple opacity-20 mix-blend-multiply"
        />
        <div 
          ref={el => circleRefs.current[2] = el}
          className="absolute bottom-[10%] right-[15%] w-[200px] h-[200px] rounded-full bg-soft-green opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),rgba(255,255,255,0.4))]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="inline-flex animate-fade-in">
                <span className="badge badge-primary animate-pulse-soft">
                  Expert Online Therapy in India
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
                Healing Hands for <span className="text-resonance-600">Little Minds</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-md animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Online counselling and therapy for child developmental delay and adults. 
                At Resonance Rehab, we believe every child deserves the best possible start in life.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-full bg-resonance-600 text-white font-medium hover:bg-resonance-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    Book a Session <ArrowRight size={16} className="ml-2" />
                  </span>
                </a>
                <a 
                  href="#services" 
                  className="px-6 py-3 rounded-full bg-white text-resonance-700 font-medium border border-resonance-200 hover:border-resonance-300 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left" className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-resonance-200/30 to-resonance-300/30 blur-xl opacity-70 animate-pulse-soft"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-resonance-400 to-resonance-600"></div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80" 
                  alt="Therapist with child" 
                  className="w-full h-auto object-cover rounded-b-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 rounded-lg bg-white/90 backdrop-blur shadow-soft border border-resonance-100 animate-float">
                <div className="flex flex-col items-center text-center">
                  <div className="text-resonance-700 font-bold">5000+</div>
                  <div className="text-sm text-gray-600">Sessions Completed</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
