import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../mock';
import { useAccessibility } from '../contexts/AccessibilityContext';

const MinimalistPortfolio = () => {
  const canvasRef = useRef(null);
  const { projects } = portfolioData;
  const { reducedMotion } = useAccessibility();

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

    // Star particles
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.3;
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

    // Initialize stars
    const initStars = () => {
      particles = [];
      const numberOfStars = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < numberOfStars; i++) {
        particles.push(new Star());
      }
    };
    initStars();

    // Animation loop
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      {/* Canvas for stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Glowing orb */}
      <div 
        className="absolute top-20 right-32 w-64 h-64 rounded-full bg-white opacity-80 blur-3xl"
        style={{ zIndex: 2 }}
      ></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-12 py-12">
        {/* Left side - Animated name */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          <div className="text-9xl font-bold text-white tracking-wider animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            E
          </div>
          <div className="text-9xl font-bold text-white tracking-wider animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            R
          </div>
          <div className="text-9xl font-bold text-white tracking-wider animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            I
          </div>
          <div className="text-9xl font-bold text-white tracking-wider animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            C
          </div>
          <div className="text-9xl font-bold text-white tracking-wider animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            K
          </div>
        </div>

        {/* Center spacer */}
        <div className="flex-1"></div>

        {/* Right side - Projects list */}
        <div className="flex-1 flex flex-col justify-center space-y-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Work:</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-start gap-6">
                  <span className="text-white/60 font-mono text-lg min-w-[3rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-medium group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.hasCaseStudy && (
                      <a
                        href={`/project/${project.id}`}
                        className="text-white/60 text-sm hover:text-white/80 transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `/project/${project.id}`;
                        }}
                      >
                        View case study →
                      </a>
                    )}
                  </div>
                  <span className="text-white/40 font-mono text-lg">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-2">Seattle, WA</p>
            <a 
              href="mailto:mora.o.erick@gmail.com" 
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              mora.o.erick@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalistPortfolio;
