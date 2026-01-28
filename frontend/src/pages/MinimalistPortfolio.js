import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { portfolioData } from '../mock';
import { useAccessibility } from '../contexts/AccessibilityContext';

const MinimalistPortfolio = () => {
  const canvasRef = useRef(null);
  const { projects } = portfolioData;
  const { reducedMotion, theme, fontSize, dyslexiaFont, enhancedFocus } = useAccessibility();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const isDayTime = theme === 'light';

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
      initParticles();
    };

    // Draw a 4-pointed star shape for night mode
    const drawNightStar = (x, y, size, opacity) => {
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      
      const outerRadius = size;
      const innerRadius = size * 0.4;
      const spikes = 4;
      
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes - Math.PI / 2;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      
      ctx.closePath();
      ctx.fill();
      
      // Add a subtle glow for larger stars
      if (size > 2) {
        ctx.shadowBlur = size * 2;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    // Draw a circle for light mode
    const drawDayCircle = (x, y, size, opacity) => {
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Different size distributions for day/night
        if (isDayTime) {
          // Light mode: black circles with varying sizes (1-4px)
          this.size = Math.random() * 3 + 1;
          this.opacity = Math.random() * 0.15 + 0.05; // Very subtle
        } else {
          // Dark mode: realistic night sky with varied star sizes
          // Most stars small, few large (realistic distribution)
          const rand = Math.random();
          if (rand < 0.7) {
            this.size = Math.random() * 1.5 + 0.8; // Small stars (majority)
          } else if (rand < 0.9) {
            this.size = Math.random() * 2 + 2; // Medium stars
          } else {
            this.size = Math.random() * 2.5 + 3; // Bright stars (few)
          }
          this.opacity = Math.random() * 0.5 + 0.4;
        }
        
        // Very slow drift
        this.speedX = (Math.random() - 0.5) * 0.03;
        this.speedY = (Math.random() - 0.5) * 0.03;
        this.twinkleOffset = Math.random() * Math.PI * 2;
        this.twinkleSpeed = Math.random() * 0.002 + 0.001;
      }

      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
        
        // Twinkle effect (stronger for night mode)
        if (!isDayTime) {
          this.currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(time * this.twinkleSpeed + this.twinkleOffset));
        } else {
          this.currentOpacity = this.opacity;
        }
      }

      draw() {
        if (isDayTime) {
          drawDayCircle(this.x, this.y, this.size, this.currentOpacity || this.opacity);
        } else {
          drawNightStar(this.x, this.y, this.size, this.currentOpacity || this.opacity);
        }
      }
    }

    const initParticles = () => {
      particles = [];
      // More spread out - realistic night sky density
      const density = isDayTime ? 25000 : 15000;
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / density);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };
    
    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
    
    window.addEventListener('resize', resizeCanvas);

    let startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(elapsed);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate(performance.now());

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

  const fontFamily = dyslexiaFont ? "'OpenDyslexic', 'Times New Roman', Times, serif" : "'Times New Roman', Times, serif";

  return (
    <div 
      className={`relative min-h-screen overflow-hidden ${isDayTime ? 'bg-white' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'}`}
      style={{ transition: reducedMotion ? 'none' : 'background 2s ease' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center lg:justify-between px-6 sm:px-10 lg:px-16 py-8 lg:py-12">
        {/* Name Section */}
        <div className="flex flex-col justify-center space-y-2 sm:space-y-4 mb-10 lg:mb-0 pt-8 lg:pt-0">
          <div
            style={{ 
              animation: reducedMotion ? 'none' : 'fadeInUp 0.8s ease-out backwards',
              fontFamily: fontFamily
            }}
          >
            <h1 className={`text-5xl sm:text-7xl lg:text-9xl font-normal ${textColor} tracking-wider cursor-default select-none`} style={{ transition: reducedMotion ? 'none' : 'color 2s ease' }}>
              ERICK
            </h1>
          </div>
          <div
            className="ml-8 sm:ml-16 lg:ml-32"
            style={{ 
              animation: reducedMotion ? 'none' : 'fadeInUp 0.8s ease-out 0.15s backwards',
              fontFamily: fontFamily
            }}
          >
            <h1 className={`text-5xl sm:text-7xl lg:text-9xl font-normal ${textColor} tracking-wider cursor-default select-none`} style={{ transition: reducedMotion ? 'none' : 'color 2s ease' }}>
              MORA
            </h1>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col justify-center w-full lg:max-w-2xl" style={{ animation: reducedMotion ? 'none' : 'fadeIn 1s ease-out 0.6s backwards' }}>
          <h2 className={`text-xl sm:text-2xl font-normal ${textColor} mb-6 sm:mb-8`} style={{ transition: reducedMotion ? 'none' : 'color 2s ease', fontFamily: fontFamily }}>Work:</h2>
          <div className="space-y-4 sm:space-y-6">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                onClick={() => handleProjectClick(project)} 
                className={`flex items-start gap-3 sm:gap-6 cursor-pointer group ${reducedMotion ? '' : 'transition-all duration-300 hover:translate-x-3'}`}
                tabIndex={0}
                role="button"
                onKeyPress={(e) => { if (e.key === 'Enter') handleProjectClick(project); }}
              >
                <span className={`${textColorMuted} font-normal text-sm sm:text-lg min-w-[2rem] sm:min-w-[3rem]`} style={{ transition: reducedMotion ? 'none' : 'color 2s ease', fontFamily: fontFamily }}>{String(index + 1).padStart(2, '0')}</span>
                <div className="flex-1 min-w-0">
                  <h3 className={`${textColor} text-base sm:text-xl font-normal group-hover:${textColorHover} ${reducedMotion ? '' : 'transition-colors duration-300'} truncate sm:whitespace-normal`} style={{ fontFamily: fontFamily }}>{project.title}</h3>
                </div>
                <span className={`${textColorSubtle} font-normal text-sm sm:text-lg flex-shrink-0`} style={{ transition: reducedMotion ? 'none' : 'color 2s ease', fontFamily: fontFamily }}>{project.year}</span>
              </div>
            ))}
          </div>

          <div className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t ${isDayTime ? 'border-slate-300' : 'border-white/10'}`} style={{ transition: reducedMotion ? 'none' : 'border-color 2s ease' }}>
            <p className={`${textColorMuted} text-xs sm:text-sm mb-2`} style={{ transition: reducedMotion ? 'none' : 'color 2s ease', fontFamily: fontFamily }}>Seattle, WA</p>
            <a 
              href="mailto:mora.o.erick@gmail.com" 
              className={`${textColor} hover:${textColorHover} ${reducedMotion ? '' : 'transition-colors duration-300'} text-sm sm:text-base`} 
              style={{ fontFamily: fontFamily }}
            >
              mora.o.erick@gmail.com
            </a>
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-end justify-center px-0 sm:px-[5%] lg:px-[7.5%]" style={{ animation: reducedMotion ? 'none' : 'fadeIn 0.3s ease-out' }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeCaseStudy}></div>
          <div className={`relative w-full h-[95vh] sm:h-[90vh] ${isDayTime ? 'bg-white text-slate-900' : 'bg-slate-800 text-white'} rounded-t-2xl sm:rounded-t-3xl overflow-y-auto shadow-2xl ${reducedMotion ? '' : (isClosing ? 'animate-slideDown' : 'animate-slideUp')}`} style={{ transition: reducedMotion ? 'none' : 'background-color 2s ease, color 2s ease' }}>
            <button 
              onClick={closeCaseStudy} 
              className={`sticky top-4 sm:top-6 right-4 sm:right-6 ml-auto mr-4 sm:mr-6 w-10 h-10 rounded-full ${isDayTime ? 'bg-slate-100 hover:bg-slate-200' : 'bg-slate-700 hover:bg-slate-600'} flex items-center justify-center ${reducedMotion ? '' : 'transition-colors duration-200'} z-10`}
              aria-label="Close case study"
            >
              <X size={24} className={isDayTime ? 'text-slate-900' : 'text-white'} />
            </button>
            <div className="px-5 sm:px-8 lg:px-12 py-6 sm:py-8 max-w-5xl mx-auto">
              <div className="mb-8 sm:mb-12">
                <div className="flex items-center gap-4 mb-3 sm:mb-4">
                  <span className={`${isDayTime ? 'text-slate-500' : 'text-slate-400'} font-mono text-xs sm:text-sm`}>{selectedProject.year}</span>
                </div>
                <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-normal ${isDayTime ? 'text-slate-900' : 'text-white'} mb-4 sm:mb-6`} style={{ fontFamily: fontFamily }}>{selectedProject.title}</h1>
                <p className={`text-base sm:text-lg lg:text-xl ${isDayTime ? 'text-slate-600' : 'text-slate-300'} leading-relaxed mb-6 sm:mb-8`} style={{ fontFamily: fontFamily }}>{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className={`px-3 py-1.5 sm:px-4 sm:py-2 ${isDayTime ? 'bg-slate-100 text-slate-800' : 'bg-slate-700 text-white'} rounded-full text-xs sm:text-sm font-medium`} style={{ fontFamily: fontFamily }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {selectedProject.caseStudy && (
                <>
                  <section className="mb-8 sm:mb-12">
                    <h2 className={`text-xl sm:text-2xl lg:text-3xl font-normal ${isDayTime ? 'text-slate-900' : 'text-white'} mb-3 sm:mb-4`} style={{ fontFamily: fontFamily }}>The Challenge</h2>
                    <p className={`text-sm sm:text-base lg:text-lg ${isDayTime ? 'text-slate-700' : 'text-slate-300'} leading-relaxed`} style={{ fontFamily: fontFamily }}>{selectedProject.caseStudy.challenge}</p>
                  </section>
                  <section className="mb-8 sm:mb-12">
                    <h2 className={`text-xl sm:text-2xl lg:text-3xl font-normal ${isDayTime ? 'text-slate-900' : 'text-white'} mb-3 sm:mb-4`} style={{ fontFamily: fontFamily }}>The Solution</h2>
                    <p className={`text-sm sm:text-base lg:text-lg ${isDayTime ? 'text-slate-700' : 'text-slate-300'} leading-relaxed`} style={{ fontFamily: fontFamily }}>{selectedProject.caseStudy.solution}</p>
                  </section>
                  <section className="mb-8 sm:mb-12">
                    <h2 className={`text-xl sm:text-2xl lg:text-3xl font-normal ${isDayTime ? 'text-slate-900' : 'text-white'} mb-4 sm:mb-6`} style={{ fontFamily: fontFamily }}>Key Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {selectedProject.caseStudy.results.map((result, index) => (
                        <div key={index} className={`flex items-start gap-3 p-3 sm:p-4 ${isDayTime ? 'bg-slate-50' : 'bg-slate-700'} rounded-lg`}>
                          <span className="text-green-500 mt-0.5 sm:mt-1 text-sm sm:text-base">✓</span>
                          <p className={`text-sm sm:text-base ${isDayTime ? 'text-slate-700' : 'text-slate-200'}`} style={{ fontFamily: fontFamily }}>{result}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="mb-8 sm:mb-12">
                    <h2 className={`text-xl sm:text-2xl lg:text-3xl font-normal ${isDayTime ? 'text-slate-900' : 'text-white'} mb-4 sm:mb-6`} style={{ fontFamily: fontFamily }}>Technology Stack</h2>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProject.caseStudy.techStack.map((tech, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className={isDayTime ? 'text-slate-400' : 'text-slate-500'}>•</span>
                          <p className={`text-sm sm:text-base ${isDayTime ? 'text-slate-700' : 'text-slate-300'}`} style={{ fontFamily: fontFamily }}>{tech}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="mb-8 sm:mb-12">
                    <h2 className={`text-xl sm:text-2xl lg:text-3xl font-normal ${isDayTime ? 'text-slate-900' : 'text-white'} mb-4 sm:mb-6`} style={{ fontFamily: fontFamily }}>Project Timeline</h2>
                    <div className="space-y-4 sm:space-y-6">
                      {selectedProject.caseStudy.timeline.map((phase, index) => (
                        <div key={index} className={`border-l-4 ${isDayTime ? 'border-slate-300' : 'border-slate-600'} pl-4 sm:pl-6 py-2`}>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                            <h3 className={`text-base sm:text-lg lg:text-xl font-semibold ${isDayTime ? 'text-slate-900' : 'text-white'}`} style={{ fontFamily: fontFamily }}>{phase.phase}</h3>
                            <span className={`${isDayTime ? 'text-slate-500' : 'text-slate-400'} text-xs sm:text-sm`} style={{ fontFamily: fontFamily }}>{phase.duration}</span>
                          </div>
                          <p className={`text-sm sm:text-base ${isDayTime ? 'text-slate-600' : 'text-slate-300'}`} style={{ fontFamily: fontFamily }}>{phase.details}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="pb-8">
                    <h2 className={`text-xl sm:text-2xl lg:text-3xl font-normal ${isDayTime ? 'text-slate-900' : 'text-white'} mb-4 sm:mb-6`} style={{ fontFamily: fontFamily }}>Lessons Learned</h2>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProject.caseStudy.lessonsLearned.map((lesson, index) => (
                        <div key={index} className={`flex items-start gap-3 p-3 sm:p-4 ${isDayTime ? 'bg-blue-50' : 'bg-slate-700'} rounded-lg`}>
                          <span className={`font-bold text-sm sm:text-base ${isDayTime ? 'text-blue-600' : 'text-blue-400'}`}>→</span>
                          <p className={`text-sm sm:text-base ${isDayTime ? 'text-slate-700' : 'text-slate-200'}`} style={{ fontFamily: fontFamily }}>{lesson}</p>
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
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes slideDown { from { transform: translateY(0); } to { transform: translateY(100%); } }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        .animate-slideDown { animation: slideDown 0.4s ease-out; }
        .cloud { position: absolute; background: rgba(255, 255, 255, 0.8); border-radius: 100px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); }
        .cloud::before, .cloud::after { content: ''; position: absolute; background: rgba(255, 255, 255, 0.8); border-radius: 100px; }
        .cloud1 { width: 120px; height: 50px; top: 15%; left: 10%; animation: float 40s infinite linear; }
        .cloud1::before { width: 50px; height: 50px; top: -25px; left: 20px; }
        .cloud1::after { width: 60px; height: 40px; top: -15px; right: 20px; }
        .cloud2 { width: 150px; height: 60px; top: 25%; right: 15%; animation: float 50s infinite linear; animation-delay: -5s; }
        .cloud2::before { width: 60px; height: 60px; top: -30px; left: 30px; }
        .cloud2::after { width: 70px; height: 50px; top: -20px; right: 25px; }
        .cloud3 { width: 100px; height: 40px; top: 45%; left: 25%; animation: float 35s infinite linear; animation-delay: -10s; }
        .cloud3::before { width: 40px; height: 40px; top: -20px; left: 15px; }
        .cloud3::after { width: 50px; height: 35px; top: -12px; right: 15px; }
        .cloud4 { width: 130px; height: 55px; top: 60%; right: 30%; animation: float 45s infinite linear; animation-delay: -15s; }
        .cloud4::before { width: 55px; height: 55px; top: -27px; left: 25px; }
        .cloud4::after { width: 65px; height: 45px; top: -18px; right: 20px; }
        .cloud5 { width: 110px; height: 45px; top: 70%; left: 60%; animation: float 38s infinite linear; animation-delay: -20s; }
        .cloud5::before { width: 45px; height: 45px; top: -22px; left: 18px; }
        .cloud5::after { width: 55px; height: 38px; top: -14px; right: 18px; }
        @keyframes float { 0% { transform: translateX(-100vw); } 100% { transform: translateX(120vw); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </div>
  );
};

export default MinimalistPortfolio;
