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
      value: about.yearsExperience,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      label: 'Projects Completed',
      value: about.projectsCompleted,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      label: 'Technologies Used',
      value: about.technologiesUsed,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {about.heading}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-slate-600 leading-relaxed">
              {about.description}
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-1 h-16 bg-gradient-to-b from-slate-900 to-slate-500 rounded-full"></div>
              <p className="text-slate-700 italic">
                "Passionate about creating impactful solutions through clean code and innovative thinking."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardContent className="p-6 flex items-center gap-4 relative">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900 group-hover:scale-105 transition-transform duration-300">{stat.value}</p>
                    <p className="text-slate-600 font-medium">{stat.label}</p>
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
