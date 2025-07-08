
import React from 'react';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimization"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that work seamlessly on all devices.",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Deployment"]
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end web solutions from frontend to backend and database design.",
      features: ["API Development", "Database Design", "Cloud Deployment", "Security"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side applications with scalable architecture and APIs.",
      features: ["Node.js", "Python", "RESTful APIs", "Database Management"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your applications for speed, efficiency, and better user experience.",
      features: ["Code Optimization", "SEO", "Load Time Improvement", "Caching Strategies"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              What I can help you with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
