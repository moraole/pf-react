import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { social } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: social.github, label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: social.linkedin, label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: social.twitter, label: 'Twitter' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div
            className="text-2xl font-bold cursor-pointer hover:text-slate-300 transition-colors duration-200"
            onClick={scrollToTop}
          >
            Portfolio
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>© {currentYear} All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
