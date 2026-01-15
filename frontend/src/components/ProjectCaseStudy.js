import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Code, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const ProjectCaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = portfolioData.projects.find(p => p.id === parseInt(projectId));

  if (!project || !project.hasCaseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Case Study Not Found</h2>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-white hover:text-slate-300 mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <Calendar size={20} />
            <span className="text-slate-300">{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-slate-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-slate-800 text-white hover:bg-slate-700">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Challenge */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-slate-900" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">The Challenge</h2>
          </div>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Solution */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-slate-900" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">The Solution</h2>
          </div>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Results */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="text-slate-900" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Key Results</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.results.map((result, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-slate-700">{result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-slate-900" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Technology Stack</h2>
          </div>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <ul className="space-y-3">
                {caseStudy.techStack.map((tech, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-slate-900 font-bold mt-1">•</span>
                    <span className="text-lg text-slate-700">{tech}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Timeline</h2>
          <div className="space-y-4">
            {caseStudy.timeline.map((phase, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-slate-900">{phase.phase}</span>
                    <Badge variant="secondary" className="bg-slate-900 text-white">
                      {phase.duration}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{phase.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Lessons Learned</h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <ul className="space-y-3">
                {caseStudy.lessonsLearned.map((lesson, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-slate-900 font-bold text-xl mt-1">→</span>
                    <span className="text-lg text-slate-700">{lesson}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center pt-8">
          <Card className="border-none shadow-lg bg-slate-900 text-white">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
