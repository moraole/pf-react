import React from 'react';
import { Award, Layers, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../mock';

const About = () => {
  const { about } = portfolioData;

  const stats = [
    {
      icon: <Code className="w-8 h-8" />,
      label: 'Years Experience',
      value: about.yearsExperience
    },
    {
      icon: <Award className="w-8 h-8" />,
      label: 'Projects Completed',
      value: about.projectsCompleted
    },
    {
      icon: <Layers className="w-8 h-8" />,
      label: 'Technologies Used',
      value: about.technologiesUsed
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {about.heading}
          </h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              {about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="text-slate-900">{stat.icon}</div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-slate-600">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
