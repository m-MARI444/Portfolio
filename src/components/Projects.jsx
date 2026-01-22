import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import zunoImg from '../assets/zuno.png';
import explodedImg from '../assets/b9ebb3c8-3181-4bd6-81fb-b93bdfac5105.jpg';
import cobotImg from '../assets/co-bot.png';
import borewellImg from '../assets/borewell.jpg';
import isaacSimImg from '../assets/issac_sim.png';
import solarVehicleImg from '../assets/autonomouse_vehicle.jpg';

const projectsData = [
    {
        title: "Autonomous Sanitization Robot - ZUNO",
        description: "Autonomous indoor sanitization robot for hospitals. Implemented SLAM navigation, LiDAR integration, and collision avoidance.",
        tags: ["ROS2", "SLAM", "LiDAR", "Path Planning"],
        image: zunoImg,
        longDescription: `
            <p>ZUNO is a multi-functional autonomous healthcare companion robot designed to streamline hospital operations through intelligent automation. Built as an all-in-one platform, ZUNO operates in multiple modes—including autonomous delivery, patient registration, sanitization, and energy-efficient facility management—allowing hospitals to replace multiple single-purpose systems with one integrated solution. The robot is powered by a ROS2-based architecture and uses LiDAR, IMU, wheel encoders, and sensor fusion to perform real-time SLAM, localization, and safe autonomous navigation in dynamic hospital environments.</p>
            
            <p>In Delivery Mode, ZUNO autonomously transports medicines, lab reports, and medical equipment with secure access control and centralized monitoring through an admin dashboard. Registration Mode enables patients to self-register using a dual-screen interface, supporting Aadhaar-based identity verification, smart symptom analysis, basic health vitals measurement, and automated token generation. In Sanitization Mode, ZUNO performs autonomous room and zone disinfection with safety checks based on room occupancy, battery level, and sanitizer availability, focusing on high-touch areas using a perimeter-oriented cleaning strategy. The Energy Efficient Mode extends automation beyond robotics by intelligently managing hospital electrical appliances based on real-time room usage data, reducing power consumption and operational costs.</p>

            <p>Designed with modular hardware, scalable software, and cloud-connected interfaces, ZUNO integrates hospital web systems, robot UI, and mobile applications into a unified ecosystem. The project was developed as a real-world deployable system and recognized as a Smart India Hackathon 2025 Finalist, highlighting its technical depth, system-level integration, and strong impact on healthcare efficiency, safety, and patient experience.</p>
        `,
        videoLink: "https://www.youtube.com/embed/vSEdk0AXWFI"
    },
    {
        title: "6-DOF Robotic Arm Manipulator",
        description: "Implemented Inverse Kinematics (IK) and real-time servoing. Path planning with MoveIt2 and OMPL.",
        tags: ["ROS2", "MoveIt2", "Gazebo", "Kinematics"],
        image: explodedImg,
        videoLink: "https://www.youtube.com/embed/NgiJvbuCaKQ"
    },
    {
        title: "Logistic Cobot System",
        description: "Dual-robot warehouse automation with a sorting RoboArm and mobile RoverBot using coordinated workflows.",
        tags: ["Multi-Robot", "AMCL", "Automation", "Python"],
        image: cobotImg,
        longDescription: `
            <p><strong>Project Highlight: Autonomous E-Bot & UR5 Manipulator for e-Yantra 2025 🤖📦</strong></p>
            <p>I’m excited to share a key project my team and I developed for the e-Yantra Robotics Competition! Our goal was to integrate an autonomous mobile robot (E-Bot) with a UR5 robotic manipulator to complete a collaborative pick-and-place task.</p>
            
            <p><strong>🎯 Project Workflow:</strong></p>
            <ul>
                <li>A depth camera detects Aruco markers on one of three boxes.</li>
                <li>The UR5 manipulator identifies the correct box using Aruco detection and places it onto the E-Bot.</li>
                <li>The E-Bot, which starts from a docking station, navigates to the manipulator zone.</li>
                <li>After loading the box, it autonomously docks again to collect and transport the box to a conveyor system for delivery.</li>
            </ul>

            <p>Although we couldn't implement the final hardware integration due to some critical challenges, this journey was incredibly enriching.</p>

            <p><strong>💡 As the team leader, I gained deep technical insights into:</strong></p>
            <ul>
                <li>Vision-based detection</li>
                <li>Robotic arm control</li>
                <li>Autonomous navigation</li>
                <li>System integration</li>
            </ul>

            <p>More importantly, I grew significantly in leadership and team management. I'm proud to share that we progressed to Stage 2 of the competition in our very first attempt! This is just the beginning. We’re motivated to come back stronger and take our ideas to full-scale implementation next time.</p>
        `,
        videoLink: "https://www.youtube.com/embed/N6D5yN0zWlk"
    },
    {
        title: "Robotic Borewell Rescue Kit",
        description: "Award-winning robotic rescue solution. Designed electronics architecture and motor control units.",
        tags: ["Embedded", "Electronics", "Control", "SIH Winner"],
        image: borewellImg
    },
    {
        title: "Isaac Sim & Lab Simulation",
        description: "Developing autonomous robots in Isaac Sim using NVIDIA Omniverse and GPU-accelerated workflows. Integrated with ROS2 for realistic sensor simulation and reinforcement learning environments.",
        tags: ["NVIDIA Omniverse", "ROS2", "Isaac Lab", "Python"],
        image: isaacSimImg,
        videoLink: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7324846733878820865"
    },
    {
        title: "Autonomous Solar Vehicle",
        description: "Designed and fabricated a 3-wheeled solar vehicle achieving 25km/hr without external batteries. Competed in National Solar Vehicle Championship & MIT Manipal, featuring Level 2 autonomous navigation capabilities.",
        tags: ["Solar Power", "Autonomous Navigation", "Fabrication", "L2 Autonomy"],
        image: solarVehicleImg
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="projects-section">
            <div className="header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>
                <div className="categories">
                    <span className="active">All</span>
                    <span>Autonomous</span>
                    <span>Manipulators</span>
                    <span>Simulations</span>
                </div>
            </div>

            <div className="project-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        onOpen={setSelectedProject}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="modal-content"
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setSelectedProject(null)}>
                                <FaTimes />
                            </button>

                            <h2>{selectedProject.title}</h2>

                            {selectedProject.videoLink && (
                                <div className="video-container">
                                    <iframe
                                        src={selectedProject.videoLink}
                                        title="Project Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}

                            <div
                                className="project-description"
                                dangerouslySetInnerHTML={{ __html: selectedProject.longDescription || `<p>${selectedProject.description}</p>` }}
                            />

                            <div className="modal-tags">
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .projects-section {
                    padding: 8rem 10%;
                }
                .header {
                    margin-bottom: 4rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    flex-wrap: wrap;
                    gap: 2rem;
                }
                .header h2 {
                    font-size: 3rem;
                    margin: 0;
                }
                .categories {
                    display: flex;
                    gap: 1.5rem;
                }
                .categories span {
                    cursor: pointer;
                    color: var(--text-secondary);
                    transition: 0.3s;
                }
                .categories span.active, .categories span:hover {
                    color: var(--text-primary);
                }
                .project-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2.5rem;
                }

                .modal-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2000;
                    padding: 2rem;
                    backdrop-filter: blur(5px);
                }

                .modal-content {
                    background: var(--bg-card);
                    padding: 2.5rem;
                    border-radius: 20px;
                    border: 1px solid var(--glass-border);
                    max-width: 800px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                }

                .close-btn {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .close-btn:hover {
                    color: var(--text-primary);
                }

                .modal-content h2 {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    color: var(--text-primary);
                }

                .video-container {
                    position: relative;
                    padding-bottom: 56.25%; /* 16:9 */
                    height: 0;
                    margin-bottom: 2rem;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid var(--glass-border);
                }

                .video-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                }

                .project-description {
                    color: var(--text-secondary);
                    line-height: 1.8;
                    font-size: 1.05rem;
                    margin-bottom: 2rem;
                }
                
                .project-description p {
                    margin-bottom: 1.5rem;
                }

                .modal-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .modal-tags .tag {
                    font-size: 0.85rem;
                    padding: 0.4rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 100px;
                    color: var(--accent-tech);
                    border: 1px solid var(--glass-border);
                }

                @media (max-width: 768px) {
                    .header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
