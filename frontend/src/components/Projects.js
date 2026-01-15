import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            A showcase of my work spanning full-stack development, machine learning, and database systems. Click on any project to explore the detailed case study.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-slate-900/90 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {project.hasCaseStudy && (
                    <Button
                      size="sm"
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="bg-white text-slate-900 hover:bg-slate-100"
                    >
                      <FileText size={16} className="mr-1" />
                      Case Study
                    </Button>
                  )}
                  {project.liveLink !== '#' && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(project.liveLink, '_blank')}
                      className="bg-white text-slate-900 hover:bg-slate-100"
                    >
                      <ExternalLink size={16} />
                    </Button>
                  )}
                  {project.githubLink !== '#' && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(project.githubLink, '_blank')}
                      className="bg-white text-slate-900 hover:bg-slate-100"
                    >
                      <Github size={16} />
                    </Button>
                  )}
                </div>
                {project.year && (
                  <div className="absolute top-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
