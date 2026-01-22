import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">MARIESWARAN M</div>
      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="socials">
        <a href="https://github.com/m-MARI444" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/marieswaran-m-b49678316" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          transition: var(--transition-smooth);
        }
        
        .navbar.scrolled {
          padding: 1rem 3rem;
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
        }

        .logo {
          font-weight: 700;
          letter-spacing: 0.1em;
          font-size: 1.2rem;
          text-transform: uppercase;
        }

        .links {
          display: flex;
          gap: 2rem;
        }

        .links a {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .links a:hover {
          color: var(--text-primary);
        }

        .socials {
          display: flex;
          gap: 1.5rem;
          font-size: 1.2rem;
        }
        
        .socials a:hover {
          color: var(--accent-tech);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
