import { motion } from 'framer-motion';
import profileImg from '../assets/PROFILE_pp.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="about-image"
                >
                    <div className="image-wrapper">
                        <img src={profileImg} alt="Profile" className="profile-img" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="about-content"
                >
                    <h2 className="section-title">About Me</h2>
                    <h3 className="role">Robotics & Mechatronics Engineer</h3>
                    <p className="description">
                        Specializing in <strong>Autonomous Systems</strong>, <strong>ROS2</strong>, and <strong>Computer Vision</strong>.
                        With a strong foundation in Mechatronics (CGPA 8.94), I bridge the gap between mechanical design and intelligent software.
                    </p>
                    <div className="experience-list">
                        <div className="exp-item">
                            <span className="year">2025 - Present</span>
                            <span className="company">DRDO (Defence Research)</span>
                            <span className="detail">Computer Vision Intern</span>
                        </div>
                        <div className="exp-item">
                            <span className="year">2024 - 2025</span>
                            <span className="company">Spotless AI Robotics</span>
                            <span className="detail">Robotics Intern (ROS2)</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .about-section {
                    padding: 8rem 10%;
                    background: var(--bg-surface);
                    color: var(--text-primary);
                }
                .container {
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
                .section-title {
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
                    grid-template-columns: 100px 1fr;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--glass-border);
                }
                .exp-item:last-child {
                    border-bottom: none;
                }
                .year {
                    color: var(--accent-tech);
                    font-weight: 600;
                }
                .detail {
                    display: block;
                    grid-column: 2;
                    font-size: 0.9rem;
                    color: var(--text-muted);
                }
                @media (max-width: 768px) {
                    .container {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
