import { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import zunoImg from '../assets/zuno.png';
import explodedImg from '../assets/b9ebb3c8-3181-4bd6-81fb-b93bdfac5105.jpg';
import cobotImg from '../assets/co-bot.png';
import borewellImg from '../assets/borewell.jpg';
import isaacSimImg from '../assets/issac_sim.png';
import solarVehicleImg from '../assets/autonomouse_vehicle.jpg';
import vlmImg from '../assets/VLM.png';
import ipgImg from '../assets/ATV_dynamic.png';
import bajaImg from '../assets/BAJA_2026.jpg';
import butlerBotImg from '../assets/image.png';
import aiArmImg from '../assets/AI_arm.jpeg';

const projectsData = [
    {
        title: "Physical AI: Autonomous Pick-and-Place",
        category: "Manipulators",
        description: "An autonomous SO-ARM101 pick-and-place experiment connecting AI reasoning, camera observations, joint control, and grasp feedback on a real robot arm.",
        tags: ["Physical AI", "SO-ARM101", "Computer Vision", "Robot Learning"],
        image: aiArmImg,
        imagePosition: "center 80%",
        longDescription: `
            <p>Exploring Physical AI through an autonomous pick-and-place setup with the SO-ARM101 robot arm. A Canon 200D side camera and a wrist camera provide complementary views of the workspace.</p>
            <p>The experiment connects AI reasoning with camera observations, joint control, grasping, and feedback. The robot completed a pickup task without training a task-specific model.</p>
            <p>Next steps focus on faster execution, more reliable grasps, and adapting when objects move.</p>
        `,
        projectLink: "https://lnkd.in/p/ghHiMqzE",
        projectLinkLabel: "View on LinkedIn"
    },
    {
        title: "Autonomous Butler Robot (Behavior Tree)",
        category: "Autonomous",
        description: "Designed a custom Behavior Tree (BT) architecture in ROS2 Nav2 to handle 7 real-world operational cases in an autonomous service robot.",
        tags: ["ROS2 Nav2", "Behavior Tree", "Robotics", "Autonomous"],
        image: butlerBotImg,
        longDescription: `
            <p>I’m excited to share my recent robotics project: <strong>Butler Bot</strong>, where I designed a custom Behavior Tree (BT) architecture in ROS2 Nav2 to handle 7 real-world operational cases in an autonomous service robot.</p>
            
            <p><strong>Core BT Architecture Features:</strong></p>
            <ul>
                <li><strong>ReactiveFallback</strong> → High-priority monitoring (Cancel / Emergency)</li>
                <li><strong>Sequence Nodes</strong> → Ordered task execution (GoToKitchen → Deliver → Return)</li>
                <li><strong>Fallback Nodes</strong> → Recovery logic</li>
                <li><strong>Loop Constructs</strong> → Multi-table delivery</li>
                <li><strong>Condition Nodes</strong> → Order validation & confirmation checks</li>
            </ul>
        `,
        githubLink: "https://lnkd.in/gvqzCmwr",
        videoLink: "https://www.youtube.com/embed/5fbNLdbBIRM?si=LVelttTWBSmEheD1"
    },
    {
        title: "Autonomous Sanitization Robot - ZUNO",
        category: "Autonomous",
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
        category: "Manipulators",
        description: "Implemented Inverse Kinematics (IK) and real-time servoing. Path planning with MoveIt2 and OMPL.",
        tags: ["ROS2", "MoveIt2", "Gazebo", "Kinematics"],
        image: explodedImg,
        videoLink: "https://www.youtube.com/embed/NgiJvbuCaKQ"
    },
    {
        title: "Logistic Cobot System",
        category: "Manipulators",
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
        category: "Manipulators",
        description: "Award-winning robotic rescue solution. Designed electronics architecture and motor control units.",
        tags: ["Embedded", "Electronics", "Control", "SIH Winner"],
        image: borewellImg,
        videoLink: "https://www.youtube.com/embed/1lIXpteoRPM"
    },
    {
        title: "Isaac Sim & Lab Simulation",
        category: "Simulations",
        description: "Developing autonomous robots in Isaac Sim using NVIDIA Omniverse and GPU-accelerated workflows. Integrated with ROS2 for realistic sensor simulation and reinforcement learning environments.",
        tags: ["NVIDIA Omniverse", "ROS2", "Isaac Lab", "Python"],
        image: isaacSimImg,
        videoLink: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7324846733878820865"
    },
    {
        title: "Autonomous Solar Vehicle",
        category: "Autonomous",
        description: "Designed and fabricated a 3-wheeled solar vehicle achieving 25km/hr without external batteries. Competed in National Solar Vehicle Championship & MIT Manipal, featuring Level 2 autonomous navigation capabilities.",
        tags: ["Solar Power", "Autonomous Navigation", "Fabrication", "L2 Autonomy"],
        image: solarVehicleImg
    },
    {
        title: "Semantic Event Detection via CLIP-Motion Fusion",
        category: "Autonomous",
        description: "A real-time, zero-shot video event detection system using OpenAI's CLIP and quantized PyTorch for detecting 'Person Walking', 'Vehicle Stopping', and 'Crowded Scene'.",
        tags: ["VLM", "OpenAI CLIP", "PyTorch", "OpenCV", "Zero-Shot"],
        image: vlmImg,
        longDescription: `
            <p>This project implements a robust pipeline for detecting semantic events in video streams by combining CLIP's semantic understanding with temporal motion heuristics. It distinguishes between static objects and active events without the need for traditional retraining.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li><strong>Zero-Shot Detection:</strong> Leverages CLIP's prompt ensembling to detect events in diverse environments.</li>
                <li><strong>Relative Margin Decision:</strong> Replaces brittle thresholds with scientific ranking for stable detections.</li>
                <li><strong>Optimized Performance:</strong> Dynamic Quantization (INT8) reduces model size by 2.5x and boosts inference speed.</li>
            </ul>
        `,
        githubLink: "https://github.com/m-MARI444/VLM-Zero-Shot-Semantic-Event-Detection-via-CLIP-Motion-Fusion"
    },
    {
        title: "IPG Vehicle Dynamics & Autonomous System",
        category: "Simulations",
        description: "Advanced vehicle dynamics simulation and autonomous system development using IPG CarMaker and MATLAB/Simulink.",
        tags: ["IPG CarMaker", "MATLAB", "Simulink", "Vehicle Dynamics", "Autonomous"],
        image: ipgImg,
        longDescription: `
            <p><strong>Vehicle Dynamic Testing:</strong> Implemented comprehensive vehicle parameterization in IPG CarMaker, including full kinematic modeling, subsystem parameterization (mass, inertia), and suspension geometry optimization.</p>
            <p><strong>Autonomous System Integration:</strong> Developed an autonomous navigation and control system within the IPG environment using MATLAB/Simulink. The project focused on closed-loop control, sensor fusion, and path-following algorithms for high-fidelity vehicle simulations.</p>
            
            <p><strong>Demonstrations:</strong></p>
            <div class="video-grid">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/lUC1V9oIhGY" title="Dynamic Test" allowfullscreen></iframe>
                </div>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/cfZs11iY25M" title="Autonomous System" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        title: "ATV Electric Vehicle (SAE E-BAJA)",
        category: "Autonomous",
        description: "High-performance electric off-road vehicle designed for the SAE E-BAJA competition.",
        tags: ["E-Vehicle", "PMSM", "Lithium-ion", "SAE BAJA", "Power Electronics"],
        image: bajaImg,
        longDescription: `
            <p>Designed and developed a robust electric All-Terrain Vehicle (ATV) for national-level engineering competitions. The project focused on high-efficiency powertrain design and reliable energy storage systems.</p>
            <p><strong>Technical Specifications:</strong></p>
            <ul>
                <li><strong>Powertrain:</strong> 3000W Permanent Magnet Synchronous Motor (PMSM) for high torque and efficiency.</li>
                <li><strong>Energy Storage:</strong> 120Ah-48V Lithium-ion battery pack with advanced BMS integration.</li>
                <li><strong>Performance:</strong> Optimized for off-road durability, acceleration, and endurance in rugged terrain.</li>
            </ul>
        `,
        videoLink: "https://www.youtube.com/embed/4UiKbOexBy0"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const closeButtonRef = useRef(null);
    const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    useEffect(() => {
        if (!selectedProject) return;
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setSelectedProject(null);
            if (event.key !== 'Tab') return;
            const dialog = closeButtonRef.current?.closest('[role="dialog"]');
            const focusable = dialog?.querySelectorAll('a[href], button, iframe, [tabindex="0"]');
            if (!focusable?.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
            previousFocus?.focus({ preventScroll: true });
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="projects-section">
            <div className="header">
                <Motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </Motion.h2>
                <div className="categories" role="group" aria-label="Filter projects">
                    {['All', 'Autonomous', 'Manipulators', 'Simulations'].map(category => (
                        <button
                            key={category}
                            className={activeCategory === category ? 'active' : ''}
                            aria-pressed={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                        >{category}</button>
                    ))}
                </div>
            </div>

            <div className="project-grid">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        index={index}
                        onOpen={setSelectedProject}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        data-lenis-prevent
                        onClick={() => setSelectedProject(null)}
                    >
                        <Motion.div
                            initial={{ scale: 0.96, opacity: 0, y: 16 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            className="modal-content"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="project-dialog-title"
                            onClick={e => e.stopPropagation()}
                        >
                            <button ref={closeButtonRef} className="close-btn" aria-label="Close project details" onClick={() => setSelectedProject(null)}>
                                <FaTimes />
                            </button>

                            <h2 id="project-dialog-title">{selectedProject.title}</h2>

                            {!selectedProject.videoLink && (
                                <img className="project-preview" src={selectedProject.image} alt={selectedProject.title} />
                            )}

                            {selectedProject.videoLink && selectedProject.videoLink.includes('embed') ? (
                                <div className="video-container">
                                    <iframe
                                        src={selectedProject.videoLink}
                                        title="Project Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : null}

                            <div
                                className="project-description"
                                dangerouslySetInnerHTML={{ __html: selectedProject.longDescription || `<p>${selectedProject.description}</p>` }}
                            />

                            <div className="modal-footer">
                                <div className="modal-tags">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                {selectedProject.githubLink && (
                                    <a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-btn"
                                    >
                                        View on GitHub
                                    </a>
                                )}
                                {selectedProject.projectLink && (
                                    <a href={selectedProject.projectLink} target="_blank" rel="noopener noreferrer" className="github-btn">
                                        {selectedProject.projectLinkLabel} ↗
                                    </a>
                                )}
                            </div>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .modal-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 2rem;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                }
                .github-btn {
                    padding: 0.8rem 1.5rem;
                    background: var(--text-primary);
                    color: var(--bg-deep);
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    transition: 0.3s;
                }
                .github-btn:hover {
                    opacity: 0.9;
                    transform: translateY(-2px);
                }
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
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }
                .categories button {
                    cursor: pointer;
                    color: var(--text-secondary);
                    transition: 0.3s;
                    font-size: 0.85rem;
                    padding: 0.55rem 0.85rem;
                    border: 1px solid transparent;
                    border-radius: 100px;
                }
                .categories button.active, .categories button:hover {
                    color: var(--text-primary);
                    border-color: var(--glass-border);
                    background: rgba(255, 255, 255, 0.05);
                }
                .project-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
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
                    overscroll-behavior: contain;
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
                    width: 44px;
                    height: 44px;
                    display: grid;
                    place-items: center;
                }

                .close-btn:hover {
                    color: var(--text-primary);
                    padding-right: 2rem;
                }
                .project-preview {
                    display: block;
                    width: 100%;
                    max-height: 360px;
                    object-fit: contain;
                    background: var(--bg-deep);
                    border-radius: 12px;
                    margin-bottom: 1.5rem;
                }

                .modal-content h2 {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    color: var(--text-primary);
                }

                .video-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .video-container {
                    position: relative;
                    padding-bottom: 56.25%; /* 16:9 */
                    height: 0;
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
                .project-description ul { padding-left: 1.25rem; }
                .project-description li { margin-bottom: 0.5rem; }
                .project-description, .video-container { margin-bottom: 1.5rem; }

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
                    .header h2 { font-size: 2.25rem; }
                    .modal-backdrop { padding: 1rem; }
                    .modal-content { padding: 1.5rem; max-height: 85svh; }
                    .modal-content h2 { font-size: 1.5rem; }
                    .close-btn { top: 0.75rem; right: 0.75rem; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
