import { useState, useEffect } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { cn } from '@/lib/utils';
const conditions = [{
  id: 'autism',
  title: 'Autism',
  description: 'Autism, or Autism Spectrum Disorder (ASD), is a neurodevelopmental condition that affects social skills, repetitive behaviors, speech, and nonverbal communication.',
  causes: ['Genetic Factors', 'Environmental Causes', 'Neurodevelopmental Disorder', 'Pregnancy Complications', 'Family History', 'Maternal Health', 'Age of Parents'],
  symptoms: ['Delayed Speech And Language', 'Difficulty with Social Interaction', 'Repetitive Behaviors', 'Intense Focus on Specific Interests', 'Sensitivity to Sensory Stimuli', 'Challenges with Routine Changes', 'Limited or No Eye Contact'],
  therapies: ['Occupational Therapy', 'Speech Therapy', 'Behavioural Therapy', 'Applied Behavior Analysis (ABA)', 'Special Education']
}, {
  id: 'adhd',
  title: 'ADHD',
  description: 'ADHD, or Attention Deficit Hyperactivity Disorder, is a disorder in which people struggle to sit still, focus, and control their impulsive actions. It typically begins in childhood and can last until adulthood.',
  causes: ['Genetic Factors', 'Brain Structure', 'Chemical Imbalance', 'Prenatal Exposure', 'Childhood Trauma', 'Environmental Factors'],
  symptoms: ['Inattention', 'Hyperactivity', 'Impulsivity', 'Trouble Completing Tasks', 'Forgetfulness', 'Difficulty Listening'],
  therapies: ['Behavioural Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education', 'Applied Behavior Analysis']
}, {
  id: 'learning-disability',
  title: 'Learning Disability',
  description: 'Learning disabilities are a group of disorders that negatively affect a person\'s ability to read, write, or execute basic calculations in the face of normal intelligence and learning.',
  causes: ['Genetic Factors', 'Brain Development Issues', 'Prenatal Factors', 'Birth Complications', 'Environmental Factors', 'Trauma or Stress', 'Health and Nutritional Issues'],
  symptoms: ['Difficulty Reading', 'Challenges in Writing', 'Trouble with Math Skills', 'Delayed Language Skills', 'Poor Focus and Attention', 'Memory Problems', 'Social Challenges'],
  therapies: ['Behavioural Therapy', 'Special Education', 'Speech Therapy (if needed)', 'Occupational Therapy (if needed)']
}, {
  id: 'behavioral-issues',
  title: 'Behavioral Issues',
  description: 'Behavioural issues in children can include frequent tantrums, aggression, defiance, difficulty following rules, impulsivity, or struggles with social interactions.',
  causes: ['Genetic Influences', 'Environmental Factors', 'Trauma or Stress', 'Mental Health Conditions', 'Parenting Style or Family Dynamics', 'Peer Pressure or Social Challenges', 'Learning Disabilities'],
  symptoms: ['Aggression or Defiance', 'Social Withdrawal', 'Impulsivity', 'Difficulty Managing Emotions', 'Academic or Work Challenges', 'Disruptive Behavior', 'Low Self-Esteem'],
  therapies: ['Behavioural Therapy', 'Parent Education Program', 'Occupational Therapy (if there are any sensory issues)', 'Speech Therapy (if needed)']
}, {
  id: 'speech-delay',
  title: 'Speech Delay',
  description: 'Speech delay occurs when a kid struggles to develop speech and language abilities at the expected period. This can include difficulties formulating words, a limited vocabulary, or difficulty putting words together into sentences.',
  causes: ['Hearing Impairments', 'Oral-Motor Issues', 'Neurological Conditions', 'Cognitive Development Delays', 'Environmental Factors', 'Premature Birth', 'Bilingualism or Multilingualism'],
  symptoms: ['Limited Vocabulary', 'Difficulty Forming Sentences', 'Unclear Speech', 'Delayed Babbling or Talking', 'Trouble Following Instructions', 'Frustration During Communication', 'Lack of Gestures'],
  therapies: ['Speech Therapy', 'Other Therapies if Needed']
}, {
  id: 'stammering',
  title: 'Stammering',
  description: 'Stammering, also known as stuttering, is a speech disorder that disrupts the natural flow of speech, often leading to hesitation, repetition of sounds, or prolonged pauses.',
  causes: ['Genetic Factors', 'Delayed Speech Development', 'Neurological Factors', 'Stress or Anxiety', 'Trauma or Emotional Distress', 'Developmental Factors', 'Environmental Influences'],
  symptoms: ['Repetition of Sounds or Words', 'Prolongation of Sounds', 'Blocks in Speech', 'Facial Tension or Strain', 'Avoidance of Words or Sounds', 'Unusual Speech Rhythm', 'Frustration During Speech'],
  therapies: ['Speech Therapy', 'Special Education', 'Other Therapies if Needed']
}];
const Conditions = () => {
  const [activeTab, setActiveTab] = useState('autism');
  const [activeSection, setActiveSection] = useState('description');
  const activeCondition = conditions.find(condition => condition.id === activeTab);

  // Listen for custom event to activate specific condition tab
  useEffect(() => {
    const handleActivateCondition = (event: CustomEvent) => {
      const {
        conditionId
      } = event.detail;
      if (conditionId && conditions.some(condition => condition.id === conditionId)) {
        setActiveTab(conditionId);
        setActiveSection('description');
      }
    };

    // Add event listener
    document.addEventListener('activateCondition', handleActivateCondition as EventListener);

    // Check if there's a hash in the URL for direct condition access
    const hash = window.location.hash;
    if (hash) {
      const conditionId = hash.replace('#', '');
      if (conditions.some(condition => condition.id === conditionId)) {
        setActiveTab(conditionId);
        setActiveSection('description');
      }
    }

    // Clean up
    return () => {
      document.removeEventListener('activateCondition', handleActivateCondition as EventListener);
    };
  }, []);
  return <section id="conditions" className="bg-resonance-50 py-[41px]">
      <div className="section-container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-secondary mb-4">Conditions We Treat</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized Online Therapy for Various Conditions
          </h2>
          <p className="text-gray-600">
            We provide expert treatment for a range of developmental and psychological conditions, 
            helping individuals overcome challenges and achieve their full potential.
          </p>
        </AnimatedSection>

        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max px-0 mx-0 my-[4px]">
            {conditions.map(condition => <button key={condition.id} id={condition.id} className={cn("px-4 py-2 text-sm md:text-base rounded-full transition-all whitespace-nowrap", activeTab === condition.id ? "bg-resonance-600 text-white shadow-sm" : "bg-white text-gray-700 hover:bg-resonance-100")} onClick={() => setActiveTab(condition.id)}>
                {condition.title}
              </button>)}
          </div>
        </div>

        <AnimatedSection key={activeTab} className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-gray-100">
          <div className="mb-8" id={`condition-${activeTab}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{activeCondition?.title}</h3>
            <p className="text-gray-700">{activeCondition?.description}</p>
          </div>

          <div className="mb-6 border-b border-gray-200">
            <div className="flex space-x-4">
              {['description', 'causes', 'symptoms', 'therapies'].map(section => <button key={section} className={cn("px-4 py-2 border-b-2 text-sm font-medium transition-all", activeSection === section ? "border-resonance-600 text-resonance-700" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300")} onClick={() => setActiveSection(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>)}
            </div>
          </div>

          <div className="min-h-[300px]">
            {activeSection === 'description' && <div className="prose max-w-none">
                <p className="text-gray-700">{activeCondition?.description}</p>
                <p className="mt-4 text-gray-700">
                  At Resonance Rehab, we specialize in online therapy for {activeCondition?.title.toLowerCase()}, 
                  offering tailored support to help individuals thrive. Our expert therapists provide 
                  compassionate care that meets individual needs, whether they require help with 
                  communication, behavior, or social interactions.
                </p>
                <p className="mt-4 text-gray-700">
                  With Resonance Rehab, you have access to some of the best psychologists and therapists, 
                  all from the convenience of your home. Contact us today and take the first step 
                  toward a happier, healthier life.
                </p>
              </div>}

            {activeSection === 'causes' && <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Causes of {activeCondition?.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCondition?.causes.map((cause, index) => <div key={index} className="flex items-start">
                      <div className="mt-1 w-2 h-2 rounded-full bg-resonance-400 mr-2"></div>
                      <span className="text-gray-700">{cause}</span>
                    </div>)}
                </div>
              </div>}

            {activeSection === 'symptoms' && <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Signs and Symptoms</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCondition?.symptoms.map((symptom, index) => <div key={index} className="flex items-start">
                      <div className="mt-1 w-2 h-2 rounded-full bg-resonance-400 mr-2"></div>
                      <span className="text-gray-700">{symptom}</span>
                    </div>)}
                </div>
              </div>}

            {activeSection === 'therapies' && <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Effective Online Therapies for {activeCondition?.title}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeCondition?.therapies.map((therapy, index) => <div key={index} className="bg-resonance-50 p-4 rounded-lg border border-resonance-100">
                      <span className="text-gray-800 font-medium">{therapy}</span>
                    </div>)}
                </div>
                <div className="mt-8">
                  <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-resonance-600 text-white font-medium hover:bg-resonance-700 transition-all">
                    Get Therapy Now
                  </a>
                </div>
              </div>}
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default Conditions;