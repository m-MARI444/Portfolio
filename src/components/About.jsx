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
                        Specializing in <strong>Autonomous Systems</strong>, <strong>ROS2</strong>, and <strong>Computer Vision</strong>.
                        Currently working at <strong>GOAT Robotics</strong> on autonomous mobile robots and industrial field deployment, I bridge the gap between mechanical design and intelligent software.
                    </p>
                    <div className="education-card">
                        <span className="education-label">Education · 2022–2026</span>
                        <h4>B.E. (Honours) in Mechatronics Engineering</h4>
                        <p>Hindusthan College of Engineering and Technology</p>
                        <span className="education-grade">CGPA 8.94 / 10</span>
                    </div>
                    <div className="experience-list">
                        <div className="exp-item current-experience">
                            <span className="year">2026–Present</span>
                            <div className="company-wrapper">
                                <img src={goatLogo} alt="GOAT Robotics logo" className="company-logo goat-logo" loading="lazy" width="48" height="48" />
                                <span className="company">GOAT Robotics <span className="current-badge">Current</span></span>
                            </div>
                            <span className="detail">AMR engineering & field deployment · ROS2, Nav2, Linux</span>
                        </div>
                        <div className="exp-item">
                            <span className="year">Sep 2025–<br />Feb 2026</span>
                            <div className="company-wrapper">
                                <span className="company">DRDO (Defence Research)</span>
                                <img src={drdoLogo} alt="DRDO Logo" className="company-logo" />
                            </div>
                            <span className="detail">Computer Vision Intern</span>
                        </div>
                        <div className="exp-item">
                            <span className="year">Nov 2024–<br />Apr 2025</span>
                            <div className="company-wrapper">
                                <span className="company">Spotless AI Robotics</span>
                                <img src={spotlessLogo} alt="Spotless AI Logo" className="company-logo" />
                            </div>
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
                }
                .about-section .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                .image-wrapper {
                    width: 100%;
                    max-width: 400px;
                    height: 400px;
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
