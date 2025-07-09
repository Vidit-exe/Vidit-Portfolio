
import React from 'react';
import { Code, Palette, Smartphone, Globe, Database, Zap, Workflow } from 'lucide-react';
import admin from '../admin-panel-project.png'
import carscout from '../car-scout-project.png'
import movieapp from '../movie-app-project.png'

export const Projects: React.FC = () => {
  const projects = [
    {
      icon: admin,
      title: "Admin Panel",
      description: "Custom web applications built with modern technologies and best practices.",
    },
    {
      icon: carscout,
      title: "Car Scout",
      description: "Emerging into the world of multitasking. Performing talents of server and clients.",
    },
    {
      icon: movieapp,
      title: "Movie App",
      description: "Cross-platform mobile applications that work seamlessly on all devices.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My Projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src={project.icon} alt="" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <button></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
