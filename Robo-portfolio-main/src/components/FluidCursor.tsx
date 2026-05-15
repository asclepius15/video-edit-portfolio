import React, { useEffect, useRef } from 'react';

interface FluidCursorProps {
  SIM_RESOLUTION?: number;
  DYE_RESOLUTION?: number;
  DENSITY_DISSIPATION?: number;
  VELOCITY_DISSIPATION?: number;
  PRESSURE?: number;
  PRESSURE_ITERATIONS?: number;
  CURL?: number;
  SPLAT_RADIUS?: number;
  SPLAT_FORCE?: number;
  SHADING?: boolean;
  COLOR_UPDATE_SPEED?: number;
  BACK_COLOR?: { r: number; g: number; b: number };
  TRANSPARENT?: boolean;
}

const FluidCursor: React.FC<FluidCursorProps> = ({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1024,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0.5, g: 0, b: 0 },
  TRANSPARENT = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    hue: number;
    saturation: number;
    lightness: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Create fluid particles with more realistic physics
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        const hue = Math.random() * 60 + (BACK_COLOR.r * 360);
        
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: Math.cos(angle) * speed * (Math.random() - 0.5),
          vy: Math.sin(angle) * speed * (Math.random() - 0.5),
          life: 80,
          maxLife: 80,
          size: Math.random() * 12 + 6,
          hue: hue,
          saturation: 70 + Math.random() * 30,
          lightness: 50 + Math.random() * 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!TRANSPARENT) {
        ctx.fillStyle = `rgb(${BACK_COLOR.r * 255}, ${BACK_COLOR.g * 255}, ${BACK_COLOR.b * 255})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      // Update and draw particles with fluid-like behavior
      particles.current = particles.current.filter(particle => {
        // Apply fluid physics
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        // Velocity dissipation (fluid resistance)
        particle.vx *= (1 - VELOCITY_DISSIPATION / 100);
        particle.vy *= (1 - VELOCITY_DISSIPATION / 100);
        
        // Add curl effect (swirling motion)
        const curlForce = CURL / 100;
        const tempVx = particle.vx;
        particle.vx += particle.vy * curlForce;
        particle.vy -= tempVx * curlForce;

        const alpha = particle.life / particle.maxLife;
        const size = particle.size * alpha;

        // Create fluid-like gradient
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size
        );
        
        if (SHADING) {
          gradient.addColorStop(0, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness + 20}%, ${alpha * 0.9})`);
          gradient.addColorStop(0.3, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${alpha * 0.7})`);
          gradient.addColorStop(0.7, `hsla(${particle.hue + 30}, ${particle.saturation - 20}%, ${particle.lightness - 10}%, ${alpha * 0.4})`);
          gradient.addColorStop(1, `hsla(${particle.hue + 60}, ${particle.saturation - 40}%, ${particle.lightness - 20}%, 0)`);
        } else {
          gradient.addColorStop(0, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${alpha * 0.8})`);
          gradient.addColorStop(1, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, 0)`);
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();

        return particle.life > 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [SIM_RESOLUTION, DYE_RESOLUTION, DENSITY_DISSIPATION, VELOCITY_DISSIPATION, PRESSURE, PRESSURE_ITERATIONS, CURL, SPLAT_RADIUS, SPLAT_FORCE, SHADING, COLOR_UPDATE_SPEED, BACK_COLOR, TRANSPARENT]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: TRANSPARENT ? 'screen' : 'normal' }}
    />
  );
};

export default FluidCursor; 