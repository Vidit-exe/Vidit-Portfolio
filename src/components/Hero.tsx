
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile image placeholder */}
          {/* <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-fade-in">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-600 dark:text-gray-300">YN</span>
            </div>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vidit Joshi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
            Aspiring Software Engineer
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
            I create digital experiences that are beautiful, functional, and user-friendly. 
            Passionate about turning ideas into reality through code and design.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a
              href="https://github.com/Vidit-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/vidit-j-344064244/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:joshividit11@gmail.com"
              className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get to Know Me
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
            >
              Let's Work Together
            </button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
