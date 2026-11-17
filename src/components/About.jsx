import { motion as Motion } from 'framer-motion';
import profileImg from '../assets/PROFILE_pp.jpg';
import drdoLogo from '../assets/DRDO_logo.png';
import spotlessLogo from '../assets/Spotless_logo.png';
import goatLogo from '../assets/goat-robotics-logo-512.png';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <Motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="about-image"
                >
                    <div className="image-wrapper">
                        <img src={profileImg} alt="Marieswaran M" className="profile-img" loading="lazy" width="400" height="400" />
                    </div>
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="about-content"
                >
                    <h2 className="section-title">About Me</h2>
                    <h3 className="role">Robotics & Mechatronics Engineer</h3>
                    <p className="description">
                        Specializing in <strong>Physical AI</strong>, <strong>Autonomous Systems</strong>, <strong>ROS2</strong>, and <strong>Computer Vision</strong>.
                        Currently working at <a href="https://goat-robotics.com/" target="_blank" rel="noopener noreferrer" className="inline-company-link"><strong>GOAT Robotics</strong></a> on autonomous mobile robots and industrial field deployment, I bridge the gap between mechanical design and intelligent software.
                        My Physical AI work connects AI reasoning, visual perception, and real-world robot manipulation through hands-on pick-and-place experiments.
                    </p>
                    <div className="education-card">
                        <span className="education-label">Education · 2022–2026</span>
                        <h4>B.E. (Honours) in Mechatronics Engineering</h4>
                        <p>Hindusthan College of Engineering and Technology</p>
                        <span className="education-grade">CGPA 8.73 / 10</span>
                    </div>
                    <div className="experience-list">
                        <div className="exp-item current-experience">
                            <span className="year">2026–Present</span>
                            <a href="https://goat-robotics.com/" target="_blank" rel="noopener noreferrer" className="company-wrapper company-link" aria-label="Visit GOAT Robotics website (opens in a new tab)">
                                <img src={goatLogo} alt="GOAT Robotics logo" className="company-logo goat-logo" loading="lazy" width="48" height="48" />
                                <span className="company">GOAT Robotics <span className="current-badge">Current</span></span>
                                <span className="external-link-mark" aria-hidden="true">↗</span>
                            </a>
                            <span className="detail">Robotic Engineer</span>
                        </div>
                        <div className="exp-item">
                            <span className="year">Sep 2025–<br />Feb 2026</span>
                            <a href="https://www.drdo.gov.in/drdo/" target="_blank" rel="noopener noreferrer" className="company-wrapper company-link" aria-label="Visit DRDO website (opens in a new tab)">
                                <span className="company">DRDO (Defence Research)</span>
                                <img src={drdoLogo} alt="DRDO Logo" className="company-logo" />
                                <span className="external-link-mark" aria-hidden="true">↗</span>
                            </a>
                            <span className="detail">Computer Vision Intern</span>
                        </div>
                        <div className="exp-item">
                            <span className="year">Nov 2024–<br />Apr 2025</span>
                            <a href="https://www.spotless.ai/" target="_blank" rel="noopener noreferrer" className="company-wrapper company-link" aria-label="Visit Spotless AI Robotics website (opens in a new tab)">
                                <span className="company">Spotless AI Robotics</span>
                                <img src={spotlessLogo} alt="Spotless AI Logo" className="company-logo" />
                                <span className="external-link-mark" aria-hidden="true">↗</span>
                            </a>
                            <span className="detail">Robotics Intern (ROS2)</span>
                        </div>
                    </div>
                </Motion.div>
            </div>

            <style>{`
                .about-section {
                    padding: 8rem 10%;
                    background: var(--bg-surface);
                    color: var(--text-primary);
                    overflow: clip;
                }
                .about-section .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                .image-wrapper {
                    width: 100%;
                    max-width: 25rem;
                    height: 25rem;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid var(--glass-border);
                    position: relative;
                }
                .profile-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .about-section .section-title {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    color: var(--accent-tech);
                }
                .role {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    font-weight: 500;
                }
                .description {
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                    font-size: 1.1rem;
                    max-width: 500px;
                }
                .exp-item {
                    display: grid;
                    grid-template-columns: 110px minmax(0, 1fr);
                    gap: 1rem;
                    margin-bottom: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--glass-border);
                }
                .exp-item:last-child {
                    border-bottom: none;
                }
                .about-section .year {
                    color: var(--accent-tech);
                    font-weight: 600;
                    font-size: 0.85rem;
                }
                .company-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .company-link { width: fit-content; max-width: 100%; }
                .company-link .company, .inline-company-link {
                    transition: color 0.2s ease;
                }
                .company-link:hover .company, .company-link:focus-visible .company,
                .inline-company-link:hover, .inline-company-link:focus-visible {
                    color: var(--accent-tech);
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
                .external-link-mark { color: var(--text-secondary); font-size: 0.85rem; }
                .company-logo {
                    width: auto;
                    height: 28px;
                    object-fit: contain;
                    border-radius: 4px;
                }
                .company-logo.goat-logo {
                    width: 48px;
                    height: 48px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    background: white;
                }
                .education-card {
                    padding: 1.25rem 1.5rem;
                    margin-bottom: 2rem;
                    border: 1px solid var(--glass-border);
                    border-radius: 14px;
                    background: rgba(59, 130, 246, 0.04);
                }
                .education-label {
                    display: block;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    margin-bottom: 0.5rem;
                }
                .education-card h4 {
                    font-size: 1rem;
                    margin-bottom: 0.35rem;
                }
                .education-card p {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                }
                .education-grade {
                    color: var(--accent-tech);
                    font-size: 0.85rem;
                    font-weight: 600;
                }
                .current-badge {
                    display: inline-block;
                    color: #86efac;
                    background: rgba(74, 222, 128, 0.08);
                    border: 1px solid rgba(74, 222, 128, 0.18);
                    border-radius: 100px;
                    padding: 0.1rem 0.55rem;
                    margin-left: 0.4rem;
                    font-size: 0.7rem;
                    vertical-align: middle;
                }
                .company {
                    font-size: 1rem;
                    font-weight: 500;
                }
                .about-section .detail {
                    display: block;
                    grid-column: 2;
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }
                @media (max-width: 768px) {
                    .about-section .container {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                    .image-wrapper {
                        margin: 0 auto;
                        height: auto;
                        aspect-ratio: 1;
                    }
                    .exp-item {
                        grid-template-columns: 90px minmax(0, 1fr);
                        gap: 0.75rem;
                    }
                    .company-wrapper {
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
