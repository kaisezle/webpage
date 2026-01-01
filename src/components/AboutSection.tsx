import { Target, Users, Globe, Award } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Committed to delivering excellence in every solution we create'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Your success is our priority, always putting clients first'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving diverse markets with localized expertise worldwide'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous standards ensuring premium results every time'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About KAISEZLE
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              KAISEZLE stands at the intersection of technology and lifestyle, delivering innovative software solutions alongside premium consumer goods. Founded on the principles of excellence and innovation, we've grown into a trusted partner for businesses and consumers worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our dual expertise allows us to understand both the digital transformation needs of enterprises and the evolving preferences of modern consumers, creating synergies that drive exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
