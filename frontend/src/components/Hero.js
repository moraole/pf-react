import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../mock';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const { hero, social } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <p className="text-lg text-slate-200 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              {hero.name}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-100 font-medium">
              {hero.title}
            </p>
          </div>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 font-semibold shadow-xl"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(hero.resumeLink, '_blank')}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8">
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
