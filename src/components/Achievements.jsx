import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, org, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="timeline-item"
    >
        <div className="timeline-dot"></div>
        <div className="timeline-content">
            <span className="year">{year}</span>
            <h3>{title}</h3>
            <p>{org}</p>
        </div>
    </motion.div>
);

const Achievements = () => {
    return (
        <section id="achievements" className="achievements-section">
            <h2 className="section-title">Achievements</h2>
            <div className="timeline">
                <TimelineItem
                    year="2026"
                    title="SAE E-BAJA National Level Event"
                    org="NATRAX Indoor, MP"
                    delay={0}
                />
                <TimelineItem
                    year="2025"
                    title="APF (AICTE Productization Fellowship) and Yukti-2025"
                    org="For innovative project"
                    delay={0.1}
                />
                <TimelineItem
                    year="2025"
                    title="IIC Regional Meet 2025"
                    org="Organized by MoE's Innovation Cell & AICTE at PSG College of Arts and Science, Coimbatore"
                    delay={0.2}
                />
                <TimelineItem
                    year="2024"
                    title="Value-Added Course in Industrial Automation"
                    org="Conducted by Prolific Pvt. Ltd."
                    delay={0.3}
                />
                <TimelineItem
                    year="2024"
                    title="Autonomous Solar Vehicle (MIT - Manipal)"
                    org="Designed a 3-wheeled solar vehicle (25km/hr, no external battery) with Level 2 Autonomous capabilities."
                    delay={0.4}
                />
                <TimelineItem
                    year="2023"
                    title="Overview of Space Science and Technology"
                    org="Online Training Programme (ISRO START) conducted by ISRO HQ, Bangalore."
                    delay={0.5}
                />
                <TimelineItem
                    year="2023"
                    title="National Solar Vehicle Championship"
                    org="VNIT - Nagpur (Aug - Oct 2023)"
                    delay={0.6}
                />
                <TimelineItem
                    year="2023"
                    title="Go-Kart Race Vehicle"
                    org="HICET - Coimbatore. Designed a lightweight, aerodynamic race vehicle with 3Kw PMSM motor (75km/hr)."
                    delay={0.7}
                />
                <TimelineItem
                    year="2023"
                    title="National Level Technical Hands-on Workshop on MATLAB"
                    org="Workshop Participant"
                    delay={0.8}
                />
            </div>

            <style>{`
                .achievements-section {
                    padding: 8rem 10%;
                }
                .timeline {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                    border-left: 2px solid var(--glass-border);
                    padding-left: 2rem;
                }
                .timeline-item {
                    margin-bottom: 3rem;
                    position: relative;
                }
                .timeline-dot {
                    position: absolute;
                    left: -2.6rem;
                    top: 0.5rem;
                    width: 1.2rem;
                    height: 1.2rem;
                    background: var(--bg-deep);
                    border: 2px solid var(--accent-tech);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--accent-tech);
                }
                .timeline-content .year {
                    color: var(--accent-tech);
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    display: block;
                }
                .timeline-content h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                .timeline-content p {
                    color: var(--text-secondary);
                }
            `}</style>
        </section>
    );
};

export default Achievements;
