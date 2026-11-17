import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`} aria-label="Main navigation">
      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>MARIESWARAN M</a>
      <button
        id="menu-toggle"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="navigation-links"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div id="navigation-links" className="links" onClick={() => setMenuOpen(false)}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="socials">
        <a href="https://github.com/m-MARI444" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/marieswaran-m-b49678316" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a>
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

        .navbar .logo {
          font-weight: 700;
          letter-spacing: 0.1em;
          font-size: 1.2rem;
          text-transform: uppercase;
        }

        .navbar .links {
          display: flex;
          gap: 2rem;
        }

        .navbar .links a {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .navbar .links a:hover {
          color: var(--text-primary);
        }

        .navbar .socials {
          display: flex;
          gap: 1.5rem;
          font-size: 1.2rem;
        }
        
        .navbar .socials a:hover {
          color: var(--accent-tech);
        }
        .menu-toggle {
          display: none;
          color: var(--text-primary);
          font-size: 1.2rem;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .navbar, .navbar.scrolled {
            padding: 0.75rem 5%;
            gap: 0.75rem;
            background: rgba(5, 5, 5, 0.92);
            backdrop-filter: blur(12px);
          }
          .navbar .logo {
            font-size: 0.85rem;
            margin-right: auto;
            letter-spacing: 0.05em;
          }
          .menu-toggle {
            display: flex;
            order: 3;
          }
          .navbar .socials {
            gap: 1rem;
          }
          .navbar .links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            padding: 1rem 5% 1.5rem;
            background: #0a0a0a;
            border-bottom: 1px solid var(--glass-border);
          }
          .navbar.menu-open .links {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
          .navbar .links a {
            padding: 0.75rem 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
