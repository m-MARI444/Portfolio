import { motion } from 'framer-motion';
import heroBg from '../assets/hero.png';

import resumePdf from '../assets/Marieswaran M - Resume.pdf';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="subtitle"
        >
          Robotics & Mechatronics Engineer (HONS.)
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

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0 10%;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
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
          max-width: 600px;
        }

        h1 {
          font-size: 5rem;
          line-height: 1.1;
          margin: 1rem 0 2.5rem;
          letter-spacing: -0.02em;
        }

        .highlight {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
          /* Or use a gradient text effect */
        }

        .subtitle {
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-tech);
        }

        .cta-group {
          display: flex;
          gap: 1.5rem;
        }

        .btn-primary {
          padding: 1rem 2rem;
          background: var(--text-primary);
          color: var(--bg-deep);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%);
          transition: transform 0.2s;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        .btn-secondary {
          padding: 1rem 2rem;
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(255, 255, 255, 0.05);
           clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%);
           transition: background 0.2s;
           text-decoration: none;
           display: inline-block;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Hero;
