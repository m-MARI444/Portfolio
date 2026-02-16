import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import resumePdf from '../assets/Marieswaran M - Resume.pdf';

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);

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
    const loadImages = async () => {
      const loadedImages = [];
      const promises = [];
      for (let i = 0; i < frameCount; i++) {
        const frameNum = String(startFrame + i).padStart(3, '0');
        const img = new Image();
        img.src = new URL(`../assets/motion/ezgif-frame-${frameNum}.jpg`, import.meta.url).href;
        promises.push(new Promise((resolve) => {
          img.onload = () => resolve(img);
        }));
        loadedImages.push(img);
      }
      await Promise.all(promises);
      setImages(loadedImages);
    };
    loadImages();
  }, []);

  useEffect(() => {
    let requestRef;
    let lastTime = performance.now();
    let currentVal = frameIndex.get();

    const render = (time) => {
      const targetVal = frameIndex.get();
      const dt = Math.min(time - lastTime, 100);
      lastTime = time;

      // Calculate velocity for adaptive blending
      const velocity = Math.abs(targetVal - currentVal);

      // Sub-pixel LERP for infinite FPS feel
      currentVal += (targetVal - currentVal) * 0.2;

      const idx1 = Math.floor(currentVal);
      const idx2 = Math.min(idx1 + 1, frameCount - 1);
      const fraction = currentVal - idx1;

      if (images[idx1] && canvasRef.current) {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d', { alpha: false });
        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
          canvas.width = width * dpr;
          canvas.height = height * dpr;
          context.scale(dpr, dpr);
        }

        const img1 = images[idx1];
        const img2 = images[idx2];
        const canvasAspect = width / height;
        const imgAspect = img1.width / img1.height;

        let drawWidth, drawHeight, offsetX, offsetY;
        if (canvasAspect > imgAspect) {
          drawWidth = width;
          drawHeight = width / imgAspect;
          offsetX = 0;
          offsetY = (height - drawHeight) / 2;
        } else {
          drawWidth = height * imgAspect;
          drawHeight = height;
          offsetX = (width - drawWidth) / 2;
          offsetY = 0;
        }

        // 1. Draw solid primary frame
        context.globalAlpha = 1;
        context.drawImage(img1, offsetX, offsetY, drawWidth, drawHeight);

        // 2. Adaptive Blending:
        // Use velocity to decide if we should blend. 
        // If moving slowly, keep it sharp. If moving fast, blend more for fluidity.
        const blendThreshold = 0.05; // Tight window for slow scrolls
        if (idx1 !== idx2 && fraction > blendThreshold) {
          // Dynamic alpha based on velocity and distance
          // As velocity increases, we allow a wider blending window
          const adaptiveWeight = Math.min(1, velocity * 10);
          const easedFraction = fraction * fraction * (3 - 2 * fraction);

          context.globalAlpha = easedFraction * adaptiveWeight;
          context.drawImage(img2, offsetX, offsetY, drawWidth, drawHeight);
        }
      }

      requestRef = requestAnimationFrame(render);
    };

    requestRef = requestAnimationFrame(render);
    return () => cancelAnimationFrame(requestRef);
  }, [images, frameIndex]);

  return (
    <section ref={containerRef} className="hero-container">
      <div className="hero-sticky">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subtitle"
          >
            Robotics & Mechatronics Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Autonomy in <br /> <span className="highlight">Motion</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="cta-group"
          >
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={resumePdf} download="Marieswaran_M_Resume.pdf" className="btn-secondary">Download Resume</a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-container {
          position: relative;
          height: 250vh; /* Optimal balance of scroll depth and speed */
          background: #050505;
        }

        .hero-sticky {
          position: sticky;
          top: 0;
          left: 0;
          height: 100vh;
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
      `}</style>
    </section>
  );
};

export default Hero;
