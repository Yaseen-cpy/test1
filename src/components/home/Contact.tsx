import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Show success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };
  return <section id="contact" className="py-[38px]">
      <div className="section-container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with Our Therapy Experts
          </h2>
          <p className="text-gray-600">
            Have questions or ready to start your therapy journey? Our team is here to help. 
            Reach out today to schedule a consultation or learn more about our services.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedSection className="lg:col-span-2 bg-white rounded-2xl shadow-soft border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-resonance-300 focus:border-resonance-300 transition-colors" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-resonance-300 focus:border-resonance-300 transition-colors" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-resonance-300 focus:border-resonance-300 transition-colors" required />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-resonance-300 focus:border-resonance-300 transition-colors" required>
                    <option value="">Select a service</option>
                    <option value="autism">Autism Therapy</option>
                    <option value="adhd">ADHD Management</option>
                    <option value="learning">Learning Disability Support</option>
                    <option value="behavior">Behavioral Therapy</option>
                    <option value="speech">Speech Therapy</option>
                    <option value="stammer">Stammering Treatment</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-resonance-300 focus:border-resonance-300 transition-colors" required></textarea>
              </div>
              <div>
                <button type="submit" className="px-6 py-3 bg-resonance-600 text-white font-medium rounded-lg hover:bg-resonance-700 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-resonance-100 flex items-center justify-center text-resonance-600 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <p className="text-gray-800">+91 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-resonance-100 flex items-center justify-center text-resonance-600 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p className="text-gray-800">info@resonancerehab.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-resonance-100 flex items-center justify-center text-resonance-600 flex-shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Online Support</h4>
                    <p className="text-gray-800">24/7 Online Chat Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-resonance-100 to-resonance-50 rounded-2xl p-6 border border-resonance-200 shadow-soft">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book a Free Consultation</h3>
              <p className="text-gray-700 mb-6">
                Not sure which therapy is right for you or your child? Book a free 15-minute consultation with our experts.
              </p>
              <a href="#" className="inline-block w-full px-6 py-3 bg-resonance-600 text-white font-medium rounded-lg text-center hover:bg-resonance-700 transition-colors">
                Schedule Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default Contact;