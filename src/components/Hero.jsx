import { useRef, useState, useEffect } from 'react';
import { motion as Motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import resumePdf from '../assets/Marieswaran_M_Resume.pdf';

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const reducedMotion = useReducedMotion();

  // Frame settings: 006 to 024
  const frameCount = 19;
  const startFrame = 6;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Ultra-refined smoothing: High-frequency spring for "Magnetic" responsiveness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 65,
    restDelta: 0.0001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    let active = true;
    const loadImages = async () => {
      const promises = [];
      for (let i = 0; i < (reducedMotion ? 1 : frameCount); i++) {
        const frameNum = String(startFrame + i).padStart(3, '0');
        promises.push(new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = new URL(`../assets/motion/ezgif-frame-${frameNum}.jpg`, import.meta.url).href;
        }));
      }
      const loadedImages = await Promise.all(promises);
      if (active) setImages(loadedImages);
    };
    loadImages();
    return () => { active = false; };
  }, [reducedMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const fallback = images.find(Boolean);
    if (!canvas || !fallback) return;
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) return;
    let animationFrame;
    let visible = true;

    const draw = () => {
      if (!visible) return;
      const progress = reducedMotion ? 0 : Math.max(0, Math.min(frameCount - 1, frameIndex.get()));
      const index = Math.floor(progress);
      const first = images[index] || fallback;
      const second = images[Math.min(index + 1, frameCount - 1)] || first;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pixelWidth = Math.round(width * dpr);
      const pixelHeight = Math.round(height * dpr);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Keep the bottom branding strip outside the displayed background.
      const sourceHeight = Math.floor(first.height * 0.925);
      const scale = Math.max(width / first.width, height / sourceHeight);
      const drawWidth = first.width * scale;
      const drawHeight = sourceHeight * scale;
      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;
      context.globalAlpha = 1;
      context.drawImage(first, 0, 0, first.width, sourceHeight, x, y, drawWidth, drawHeight);
      if (first !== second) {
        const fraction = progress - index;
        context.globalAlpha = fraction * fraction * (3 - 2 * fraction);
        context.drawImage(second, 0, 0, second.width, Math.floor(second.height * 0.925), x, y, drawWidth, drawHeight);
        context.globalAlpha = 1;
      }
    };
    const scheduleDraw = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(draw);
    };

    const unsubscribe = reducedMotion ? () => {} : frameIndex.on('change', scheduleDraw);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) scheduleDraw();
    });
    observer.observe(canvas);
    window.addEventListener('resize', scheduleDraw, { passive: true });
    scheduleDraw();
    return () => {
      cancelAnimationFrame(animationFrame);
      unsubscribe();
      observer.disconnect();
      window.removeEventListener('resize', scheduleDraw);
    };
  }, [images, frameIndex, reducedMotion]);

  return (
    <section id="home" ref={containerRef} className="hero-container">
      <div className="hero-sticky">
        <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subtitle"
          >
            Robotics & Mechatronics Engineer
          </Motion.p>

          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Autonomy in <br /> <span className="highlight">Motion</span>
          </Motion.h1>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-status"
          >
            <a href="#about" className="current-work"><span aria-hidden="true" />Currently at GOAT Robotics</a>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="cta-group"
          >
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={resumePdf} download="Marieswaran_M_Resume.pdf" className="btn-secondary">Download Resume</a>
          </Motion.div>
        </div>
      </div>

      <style>{`
        .hero-container {
          position: relative;
          height: 220vh;
          background: #050505;
        }

        .hero-sticky {
          position: sticky;
          top: 0;
          left: 0;
          height: 100vh;
          height: 100svh;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0 10%;
          overflow: hidden;
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(5, 5, 5, 0.9) 0%,
            rgba(5, 5, 5, 0.6) 40%,
            rgba(5, 5, 5, 0.1) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        h1 {
          font-size: clamp(3rem, 8vw, 5.5rem);
          line-height: 1.1;
          margin: 1rem 0 2.5rem;
          letter-spacing: -0.02em;
          font-weight: 800;
        }

        .highlight {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
        }

        .subtitle {
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent-tech);
          font-weight: 600;
        }

        .cta-group {
          display: flex;
          gap: 1.5rem;
        }
        .current-work {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          color: #cbd5e1;
          font-size: 0.85rem;
          padding: 0.55rem 0.9rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          margin-bottom: 1.75rem;
        }
        .current-work span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #86efac;
          box-shadow: 0 0 10px rgba(134, 239, 172, 0.35);
        }

        .btn-primary {
          padding: 1.2rem 2.5rem;
          background: var(--text-primary);
          color: var(--bg-deep);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%);
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
        }

        .btn-secondary {
          padding: 1.2rem 2.5rem;
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(255, 255, 255, 0.05);
          clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%);
          transition: 0.3s;
          text-decoration: none;
          display: inline-block;
          font-weight: 600;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .hero-sticky {
            padding: 0 5%;
          }
          .cta-group {
            flex-direction: column;
            gap: 1rem;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-container { height: 100svh; }
          .hero-sticky { position: relative; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
