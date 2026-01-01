import { Code, Cloud, ShoppingBag, Zap, Database, Smartphone } from 'lucide-react';

export function SoftwareSection() {
  const solutions = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to match your unique business requirements and scale with your growth'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Robust cloud-based systems ensuring reliability, scalability, and seamless integration across platforms'
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Solutions',
      description: 'Complete online retail platforms with inventory management, payment processing, and customer engagement tools'
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Intelligent automation platforms that streamline workflows and boost productivity by up to 300%'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Advanced analytics and AI-powered insights transforming raw data into actionable business intelligence'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Cross-platform mobile applications delivering exceptional user experiences on any device'
    }
  ];

  return (
    <section id="software" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Software Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with innovative technology that drives digital transformation and sustainable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
