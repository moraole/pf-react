import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { portfolioData } from '../mock';
import { useAccessibility } from '../contexts/AccessibilityContext';

const MinimalistPortfolio = () => {
  const canvasRef = useRef(null);
  const { projects } = portfolioData;
  const { reducedMotion, theme } = useAccessibility();
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const isDayTime = theme === 'light';

  const nameLetters = [
    { letter: 'E', fullName: 'rick' },
    { letter: 'E', fullName: 'mmanuel' },
    { letter: 'M', fullName: 'ora' },
    { letter: 'O', fullName: 'lmedo' }
  ];

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.7 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!isDayTime) {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const initStars = () => {
      particles = [];
      const numberOfStars = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numberOfStars; i++) {
        particles.push(new Star());
      }
    };
    initStars();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion, isDayTime]);

  const handleProjectClick = (project) => {
    if (project.hasCaseStudy) {
      setIsClosing(false);
      setSelectedProject(project);
    }
  };

  const closeCaseStudy = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 400);
  };

  const textColor = isDayTime ? 'text-slate-900' : 'text-white';
  const textColorHover = isDayTime ? 'text-slate-700' : 'text-white/80';
  const textColorMuted = isDayTime ? 'text-slate-500' : 'text-white/50';
  const textColorSubtle = isDayTime ? 'text-slate-400' : 'text-white/40';

  return (
    <div 
      className={`relative min-h-screen overflow-hidden transition-colors duration-[2000ms] ${
        isDayTime 
          ? 'bg-gradient-to-br from-sky-300 via-blue-200 to-blue-300' 
          : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
      }`}
    >
      {/* Stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Clouds (day time only) */}
      {isDayTime && (
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
          <div className="cloud cloud4"></div>
          <div className="cloud cloud5"></div>
        </div>
      )}

      {/* Moon (night time) */}
      <div 
        className={`absolute top-20 right-32 w-48 h-48 rounded-full transition-all duration-[2000ms] ${
          isDayTime ? 'translate-x-[200%] opacity-0' : 'translate-x-0 opacity-100'
        }`}
        style={{ 
          zIndex: 3,
          boxShadow: '0 0 60px 30px rgba(255, 255, 255, 0.3), inset -10px -10px 30px rgba(0, 0, 0, 0.2)',
          background: 'radial-gradient(circle at 30% 30%, #f8f9fa 0%, #e9ecef 40%, #adb5bd 100%)'
        }}
      >
        {/* Moon craters */}
        <div className="absolute top-8 left-12 w-8 h-8 rounded-full bg-gray-400 opacity-30"></div>
        <div className="absolute top-16 left-20 w-6 h-6 rounded-full bg-gray-400 opacity-20"></div>
        <div className="absolute bottom-12 right-16 w-10 h-10 rounded-full bg-gray-400 opacity-25"></div>
      </div>

      {/* Sun (day time) */}
      <div 
        className={`absolute top-20 right-32 w-48 h-48 rounded-full transition-all duration-[2000ms] ${
          isDayTime ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[200%] opacity-0 scale-50'
        }`}
        style={{ 
          zIndex: 3,
          background: 'radial-gradient(circle at 40% 40%, #fff9e6 0%, #ffd54f 50%, #ffb300 100%)',
          boxShadow: '0 0 80px 40px rgba(255, 193, 7, 0.6), 0 0 120px 60px rgba(255, 235, 59, 0.4), inset -5px -5px 20px rgba(255, 152, 0, 0.3)'
        }}
      >
        {/* Sun rays */}
        <div className="absolute inset-0 animate-spin-slow">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-t from-transparent to-yellow-300 opacity-40"
              style={{
                transform: `rotate(${i * 30}deg) translateX(-50%)`,
                transformOrigin: '50% 0'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-16 py-12">
        {/* Left side - Name letters */}
        <div className="flex flex-col justify-center space-y-12">
          {nameLetters.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredLetter(index)}
              onMouseLeave={() => setHoveredLetter(null)}
              style={{ 
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s backwards`,
                fontFamily: "'Times New Roman', Times, serif"
              }}
            >
              <span className={`text-9xl font-normal ${textColor} tracking-wider cursor-default select-none transition-colors duration-[2000ms]`}>
                {item.letter}
                <span 
                  className="text-9xl transition-opacity duration-300"
                  style={{ 
                    opacity: hoveredLetter === index ? 1 : 0,
                    fontFamily: "'Times New Roman', Times, serif"
                  }}
                >
                  {item.fullName}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Right side - Projects */}
        <div className="flex flex-col justify-center max-w-2xl" style={{ animation: 'fadeIn 1s ease-out 0.6s backwards' }}>
          <h2 
            className={`text-2xl font-normal ${textColor} mb-8 transition-colors duration-[2000ms]`}
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Work:
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="flex items-start gap-6 cursor-pointer transition-all duration-300 hover:translate-x-3 group"
              >
                <span 
                  className={`${textColorMuted} font-normal text-lg min-w-[3rem] transition-colors duration-[2000ms]`}
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 
                    className={`${textColor} text-xl font-normal group-hover:${textColorHover} transition-colors duration-300`}
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    {project.title}
                  </h3>
                </div>
                <span 
                  className={`${textColorSubtle} font-normal text-lg transition-colors duration-[2000ms]`}
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {project.year}
                </span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className={`mt-12 pt-8 border-t transition-colors duration-[2000ms] ${isDayTime ? 'border-slate-300' : 'border-white/10'}`}>
            <p 
              className={`${textColorMuted} text-sm mb-2 transition-colors duration-[2000ms]`}
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Seattle, WA
            </p>
            <a 
              href="mailto:mora.o.erick@gmail.com" 
              className={`${textColor} hover:${textColorHover} transition-colors duration-300 text-base`}
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              mora.o.erick@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Case study slide-in panel with margins */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-end justify-center px-[7.5%]"
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeCaseStudy}
          ></div>
          <div 
            className={`relative w-full h-[90vh] bg-white rounded-t-3xl overflow-y-auto shadow-2xl ${
              isClosing ? 'animate-slideDown' : 'animate-slideUp'
            }`}
          >
            <button
              onClick={closeCaseStudy}
              className="sticky top-6 right-6 ml-auto mr-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200 z-10"
            >
              <X size={24} className="text-slate-900" />
            </button>

            <div className="px-12 py-8 max-w-5xl mx-auto">
              {/* Project header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-slate-500 font-mono text-sm">{selectedProject.year}</span>
                </div>
                <h1 
                  className="text-5xl font-normal text-slate-900 mb-6"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {selectedProject.title}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.caseStudy && (
                <>
                  {/* Challenge */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-4"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      The Challenge
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {selectedProject.caseStudy.challenge}
                    </p>
                  </section>

                  {/* Solution */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-4"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      The Solution
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </section>

                  {/* Results */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-6"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      Key Results
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                          <span className="text-green-600 mt-1">✓</span>
                          <p className="text-slate-700">{result}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tech Stack */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-6"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      Technology Stack
                    </h2>
                    <div className="space-y-3">
                      {selectedProject.caseStudy.techStack.map((tech, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-slate-400">•</span>
                          <p className="text-slate-700">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Timeline */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-6"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      Project Timeline
                    </h2>
                    <div className="space-y-6">
                      {selectedProject.caseStudy.timeline.map((phase, index) => (
                        <div key={index} className="border-l-4 border-slate-300 pl-6 py-2">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-slate-900">{phase.phase}</h3>
                            <span className="text-slate-500 text-sm">{phase.duration}</span>
                          </div>
                          <p className="text-slate-600">{phase.details}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Lessons Learned */}
                  <section>
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-6"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      Lessons Learned
                    </h2>
                    <div className="space-y-3">
                      {selectedProject.caseStudy.lessonsLearned.map((lesson, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                          <span className="text-blue-600 font-bold">→</span>
                          <p className="text-slate-700">{lesson}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
        
        /* Clouds */
        .cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 100px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 100px;
        }
        
        .cloud1 {
          width: 120px;
          height: 50px;
          top: 15%;
          left: 10%;
          animation: float 40s infinite linear;
        }
        .cloud1::before {
          width: 50px;
          height: 50px;
          top: -25px;
          left: 20px;
        }
        .cloud1::after {
          width: 60px;
          height: 40px;
          top: -15px;
          right: 20px;
        }
        
        .cloud2 {
          width: 150px;
          height: 60px;
          top: 25%;
          right: 15%;
          animation: float 50s infinite linear;
          animation-delay: -5s;
        }
        .cloud2::before {
          width: 60px;
          height: 60px;
          top: -30px;
          left: 30px;
        }
        .cloud2::after {
          width: 70px;
          height: 50px;
          top: -20px;
          right: 25px;
        }
        
        .cloud3 {
          width: 100px;
          height: 40px;
          top: 45%;
          left: 25%;
          animation: float 35s infinite linear;
          animation-delay: -10s;
        }
        .cloud3::before {
          width: 40px;
          height: 40px;
          top: -20px;
          left: 15px;
        }
        .cloud3::after {
          width: 50px;
          height: 35px;
          top: -12px;
          right: 15px;
        }
        
        .cloud4 {
          width: 130px;
          height: 55px;
          top: 60%;
          right: 30%;
          animation: float 45s infinite linear;
          animation-delay: -15s;
        }
        .cloud4::before {
          width: 55px;
          height: 55px;
          top: -27px;
          left: 25px;
        }
        .cloud4::after {
          width: 65px;
          height: 45px;
          top: -18px;
          right: 20px;
        }
        
        .cloud5 {
          width: 110px;
          height: 45px;
          top: 70%;
          left: 60%;
          animation: float 38s infinite linear;
          animation-delay: -20s;
        }
        .cloud5::before {
          width: 45px;
          height: 45px;
          top: -22px;
          left: 18px;
        }
        .cloud5::after {
          width: 55px;
          height: 38px;
          top: -14px;
          right: 18px;
        }
        
        @keyframes float {
          0% {
            transform: translateX(-100vw);
          }
          100% {
            transform: translateX(120vw);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MinimalistPortfolio;

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.7 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initStars = () => {
      particles = [];
      const numberOfStars = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numberOfStars; i++) {
        particles.push(new Star());
      }
    };
    initStars();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  const handleProjectClick = (project) => {
    if (project.hasCaseStudy) {
      setSelectedProject(project);
    }
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Moon */}
      <div 
        className="absolute top-20 right-32 w-48 h-48 rounded-full bg-gradient-radial from-gray-100 via-gray-200 to-gray-400"
        style={{ 
          zIndex: 2,
          boxShadow: '0 0 60px 30px rgba(255, 255, 255, 0.3), inset -10px -10px 30px rgba(0, 0, 0, 0.2)',
          background: 'radial-gradient(circle at 30% 30%, #f8f9fa 0%, #e9ecef 40%, #adb5bd 100%)'
        }}
      >
        {/* Moon craters */}
        <div className="absolute top-8 left-12 w-8 h-8 rounded-full bg-gray-400 opacity-30"></div>
        <div className="absolute top-16 left-20 w-6 h-6 rounded-full bg-gray-400 opacity-20"></div>
        <div className="absolute bottom-12 right-16 w-10 h-10 rounded-full bg-gray-400 opacity-25"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-16 py-12">
        {/* Left side - Name letters */}
        <div className="flex flex-col justify-center space-y-12">
          {nameLetters.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredLetter(index)}
              onMouseLeave={() => setHoveredLetter(null)}
              style={{ 
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s backwards`,
                fontFamily: "'Times New Roman', Times, serif"
              }}
            >
              <span className="text-9xl font-normal text-white tracking-wider cursor-default select-none">
                {item.letter}
                <span 
                  className="text-9xl transition-opacity duration-300"
                  style={{ 
                    opacity: hoveredLetter === index ? 1 : 0,
                    fontFamily: "'Times New Roman', Times, serif"
                  }}
                >
                  {item.fullName}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Right side - Projects */}
        <div className="flex flex-col justify-center max-w-2xl" style={{ animation: 'fadeIn 1s ease-out 0.6s backwards' }}>
          <h2 
            className="text-2xl font-normal text-white mb-8"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Work:
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="flex items-start gap-6 cursor-pointer transition-all duration-300 hover:translate-x-3 group"
              >
                <span 
                  className="text-white/50 font-normal text-lg min-w-[3rem]"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 
                    className="text-white text-xl font-normal group-hover:text-white/80 transition-colors duration-300"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    {project.title}
                  </h3>
                </div>
                <span 
                  className="text-white/40 font-normal text-lg"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {project.year}
                </span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p 
              className="text-white/50 text-sm mb-2"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Seattle, WA
            </p>
            <a 
              href="mailto:mora.o.erick@gmail.com" 
              className="text-white hover:text-white/70 transition-colors duration-300 text-base"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              mora.o.erick@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Case study slide-in panel */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-end"
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeCaseStudy}
          ></div>
          <div 
            className="relative w-full h-[90vh] bg-white rounded-t-3xl overflow-y-auto"
            style={{ animation: 'slideUp 0.4s ease-out' }}
          >
            <button
              onClick={closeCaseStudy}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200 z-10"
            >
              <X size={24} className="text-slate-900" />
            </button>

            <div className="px-12 py-16 max-w-5xl mx-auto">
              {/* Project header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-slate-500 font-mono text-sm">{selectedProject.year}</span>
                </div>
                <h1 
                  className="text-5xl font-normal text-slate-900 mb-6"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {selectedProject.title}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.caseStudy && (
                <>
                  {/* Challenge */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-4"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      The Challenge
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {selectedProject.caseStudy.challenge}
                    </p>
                  </section>

                  {/* Solution */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-4"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      The Solution
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </section>

                  {/* Results */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-6"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      Key Results
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                          <span className="text-green-600 mt-1">✓</span>
                          <p className="text-slate-700">{result}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tech Stack */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-6"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      Technology Stack
                    </h2>
                    <div className="space-y-3">
                      {selectedProject.caseStudy.techStack.map((tech, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-slate-400">•</span>
                          <p className="text-slate-700">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Timeline */}
                  <section className="mb-12">
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-6"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      Project Timeline
                    </h2>
                    <div className="space-y-6">
                      {selectedProject.caseStudy.timeline.map((phase, index) => (
                        <div key={index} className="border-l-4 border-slate-300 pl-6 py-2">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-slate-900">{phase.phase}</h3>
                            <span className="text-slate-500 text-sm">{phase.duration}</span>
                          </div>
                          <p className="text-slate-600">{phase.details}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Lessons Learned */}
                  <section>
                    <h2 
                      className="text-3xl font-normal text-slate-900 mb-6"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      Lessons Learned
                    </h2>
                    <div className="space-y-3">
                      {selectedProject.caseStudy.lessonsLearned.map((lesson, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                          <span className="text-blue-600 font-bold">→</span>
                          <p className="text-slate-700">{lesson}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MinimalistPortfolio;
