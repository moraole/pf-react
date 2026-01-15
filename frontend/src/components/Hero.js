import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Hero = () => {
  const { hero } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <p className="text-lg text-slate-600 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900">
              {hero.name}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-700 font-medium">
              {hero.title}
            </p>
          </div>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(hero.resumeLink, '_blank')}
              className="border-slate-900 text-slate-900 hover:bg-slate-50 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
