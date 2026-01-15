import React from 'react';
import { portfolioData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';

const Skills = () => {
  const { skills } = portfolioData;
  
  // Group skills by category
  const categories = [...new Set(skills.map(skill => skill.category))];
  const groupedSkills = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));

  return (
    <section id="skills" className="py-24 px-6 bg-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="space-y-12">
          {groupedSkills.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{group.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-lg font-semibold text-slate-900">
                          {skill.name}
                        </h4>
                        <span className="text-sm font-bold text-slate-900">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
