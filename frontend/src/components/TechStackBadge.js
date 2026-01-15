import React from 'react';
import { Code2 } from 'lucide-react';

const TechStackBadge = () => {
  const technologies = [
    'React', 'FastAPI', 'MongoDB', 'TensorFlow', 'PostgreSQL',
    'Node.js', 'Python', 'JavaScript', 'Tailwind CSS'
  ];

  return (
    <div className="fixed top-20 left-6 z-30 hidden lg:block">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 shadow-xl max-w-[180px]">
        <div className="flex items-center gap-2 mb-2">
          <Code2 size={16} className="text-white" />
          <p className="text-xs font-semibold text-white">Built With</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-0.5 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-200 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackBadge;
