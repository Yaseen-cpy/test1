import AnimatedSection from '../ui/AnimatedSection';
import { Check } from 'lucide-react';
const About = () => {
  const features = ["Certified professionals with specialized training", "Personalized care that adapts to your child's needs", "Convenient online sessions accessible anywhere", "Evidence-based therapeutic approaches", "Ongoing support for families and caregivers"];
  return <section id="about" className="bg-resonance-50 py-[25px]">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-resonance-100/70 to-resonance-200/70 rounded-xl blur-xl opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="Therapy session" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-soft p-4 border border-resonance-100">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-resonance-100 border-2 border-white flex items-center justify-center text-resonance-600 font-bold">
                        T
                      </div>)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Certified Therapists</p>
                    <p className="text-xs text-gray-500">Ready to help you</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="order-1 md:order-2">
            <div className="space-y-6">
              <span className="badge badge-secondary">
                Welcome To Resonance Rehab
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Best Online Counselling & Therapy Sessions in India
              </h2>
              
              <p className="text-gray-700">
                At Resonance Rehab, we believe every child deserves the best possible start in life. From early 
                childhood development to the teenage years and beyond, we're here to provide ongoing, 
                personalized care that grows with your child.
              </p>
              
              <p className="text-gray-700">
                Our friendly team of licensed therapists is just a click away, offering the convenience of 
                online sessions tailored to your child's unique needs. Feel free to connect with top 
                therapists, counselors, psychologists, and mental health experts in India.
              </p>
              
              <div className="pt-2">
                <ul className="space-y-3">
                  {features.map((feature, index) => <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-resonance-100 flex items-center justify-center mt-1">
                        <Check size={12} className="text-resonance-700" />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>)}
                </ul>
              </div>
              
              <div className="pt-4">
                <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-resonance-600 text-white font-medium hover:bg-resonance-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  Talk to Our Therapist
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default About;