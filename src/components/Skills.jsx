import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaLayerGroup, FaDesktop, FaCarBattery } from 'react-icons/fa';

const SkillCategory = ({ title, icon, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="skill-card"
    >
        <div className="icon-box">{icon}</div>
        <h3>{title}</h3>
        <ul className="skill-list">
            {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Technical Arsenal</h2>
            <div className="skills-grid">
                <SkillCategory
                    title="Robotics"
                    icon={<FaRobot />}
                    skills={["ROS1 / ROS2", "MoveIt2", "Nav2", "Kinematics", "SLAM", "AMRs"]}
                    delay={0}
                />
                <SkillCategory
                    title="Simulation"
                    icon={<FaDesktop />}
                    skills={["Gazebo", "RViz", "NVIDIA Isaac Sim", "IPG CarMaker", "MATLAB / Simulink"]}
                    delay={0.1}
                />
                <SkillCategory
                    title="Automotive & EV"
                    icon={<FaCarBattery />}
                    skills={["EV Powertrain", "BMS", "PMSM Motors", "Lithium-ion Tech"]}
                    delay={0.2}
                />
                <SkillCategory
                    title="Languages & Vision"
                    icon={<FaCode />}
                    skills={["Python", "C++", "VLM / CLIP", "OpenCV", "TensorRT"]}
                    delay={0.3}
                />
            </div>

            <style>{`
                .skills-section {
                    padding: 8rem 10%;
                    background: var(--bg-surface);
                    text-align: center;
                }
                .section-title {
                    font-size: 2.5rem;
                    margin-bottom: 4rem;
                }
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                .skill-card {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid var(--glass-border);
                    padding: 2rem;
                    border-radius: 16px;
                    text-align: left;
                    transition: 0.3s;
                }
                .skill-card:hover {
                    background: rgba(255,255,255,0.05);
                    transform: translateY(-5px);
                }
                .icon-box {
                    font-size: 2rem;
                    color: var(--accent-tech);
                    margin-bottom: 1.5rem;
                }
                .skill-card h3 {
                    margin-bottom: 1rem;
                    font-size: 1.2rem;
                }
                .skill-list {
                    list-style: none;
                    padding: 0;
                }
                .skill-list li {
                    color: var(--text-secondary);
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                }
            `}</style>
        </section>
    );
};

export default Skills;
