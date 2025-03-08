import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Brain, Search, MessageCircle, Book, Users, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
const Services = () => {
  const services = [{
    id: 'counseling',
    title: 'Online Counselling',
    icon: MessageCircle,
    description: 'Personalized online counseling sessions for children and adults dealing with various mental health challenges.',
    benefits: ['Convenient access from home', 'Flexible scheduling', 'Personalized approach']
  }, {
    id: 'assessment',
    title: 'Professional Assessment',
    icon: Search,
    description: 'Comprehensive evaluations to identify developmental delays, learning disabilities, and behavioral issues.',
    benefits: ['Accurate diagnosis', 'Detailed reports', 'Clear action plans']
  }, {
    id: 'therapy',
    title: 'Specialized Therapy',
    icon: Brain,
    description: 'Evidence-based therapeutic interventions for autism, ADHD, speech delays, and other developmental conditions.',
    benefits: ['Structured sessions', 'Progress tracking', 'Skill development']
  }, {
    id: 'family',
    title: 'Family Support',
    icon: Users,
    description: "Guidance and resources for families to better understand and support their loved ones' therapeutic journey.",
    benefits: ['Parental coaching', 'Home strategies', 'Emotional support']
  }, {
    id: 'education',
    title: 'Educational Support',
    icon: Book,
    description: 'Specialized assistance for academic challenges associated with learning disabilities and developmental issues.',
    benefits: ['Learning adaptations', 'Homework strategies', 'School coordination']
  }, {
    id: 'training',
    title: 'Skill Development',
    icon: GraduationCap,
    description: 'Programs focused on building essential life skills, social abilities, and communication techniques.',
    benefits: ['Social skill training', 'Independence building', 'Communication enhancement']
  }];
  const [activeService, setActiveService] = useState(services[0].id);
  return <section id="services" className="py-[42px]">
      <div className="section-container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Online Therapy Services
          </h2>
          <p className="text-gray-600">
            We offer a range of specialized online therapy services designed to support children 
            and adults with various developmental and psychological needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
          // Create separate element to handle click event
          return <AnimatedSection key={service.id} delay={index * 100} className={cn("rounded-xl p-6 border transition-all duration-300 cursor-pointer hover:shadow-md", activeService === service.id ? "border-resonance-300 bg-resonance-50/50 shadow-sm" : "border-gray-200 bg-white hover:border-resonance-200")}>
                <div className="flex items-start" onClick={() => setActiveService(service.id)}>
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0", activeService === service.id ? "bg-resonance-100 text-resonance-600" : "bg-gray-100 text-gray-600")}>
                    <service.icon size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </AnimatedSection>;
        })}
        </div>

        <AnimatedSection>
          <div className="bg-gradient-to-br from-resonance-50 to-white rounded-2xl p-8 border border-resonance-100 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {services.find(s => s.id === activeService)?.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {services.find(s => s.id === activeService)?.description}
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Benefits</h4>
                  <ul className="space-y-2">
                    {services.find(s => s.id === activeService)?.benefits.map((benefit, index) => <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-resonance-400 mr-2"></span>
                        {benefit}
                      </li>)}
                  </ul>
                </div>
                <div className="mt-8">
                  <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-resonance-600 text-white font-medium hover:bg-resonance-700 transition-all">
                    Book a Session
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-resonance-100/30 to-resonance-200/30 rounded-xl blur-xl opacity-70"></div>
                <div className="relative overflow-hidden rounded-xl bg-white p-1 border border-resonance-100">
                  <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80" alt="Therapy session" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default Services;