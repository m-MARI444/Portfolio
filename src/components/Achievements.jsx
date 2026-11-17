import { motion as Motion } from 'framer-motion';
import aicteLogo from '../assets/achievements/aicte.jpg';
import micLogo from '../assets/achievements/mic.png';
import saeLogo from '../assets/achievements/saeindia.png';
import prolificLogo from '../assets/achievements/prolific.png';
import rsiLogo from '../assets/achievements/rsi.png';
import mitLogo from '../assets/achievements/mit-manipal.jpg';
import isroLogo from '../assets/achievements/isro.webp';
import vnitLogo from '../assets/achievements/vnit.jpg';
import hicetLogo from '../assets/achievements/hicet.png';
import matlabLogo from '../assets/achievements/matlab.svg';

const TimelineItem = ({ year, title, org, logo, logoAlt, logoStyle = 'full', delay }) => (
    <Motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay }}
        className="timeline-item"
    >
        <div className="timeline-dot"></div>
        <div className={`achievement-logo logo-${logoStyle} has-logo`}>
            <span><img src={logo} alt={logoAlt} loading="lazy" decoding="async" /></span>
        </div>
        <div className="timeline-content">
            <span className="year">{year}</span>
            <h3>{title}</h3>
            <p>{org}</p>
        </div>
    </Motion.div>
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
                    logo={saeLogo}
                    logoAlt="SAEINDIA logo"
                    delay={0}
                />
                <TimelineItem
                    year="2025"
                    title="Smart India Hackathon 2025 · Finalist"
                    org="AICTE · Autonomous Sanitization Robot – ZUNO"
                    logo={aicteLogo}
                    logoAlt="AICTE logo"
                    logoStyle="square"
                    delay={0.05}
                />
                <TimelineItem
                    year="2025"
                    title="SAE E-BAJA 2025"
                    org="SAEINDIA · National-level electric ATV competition"
                    logo={saeLogo}
                    logoAlt="SAEINDIA logo"
                    delay={0.1}
                />
                <TimelineItem
                    year="2025"
                    title="APF (AICTE Productization Fellowship) and Yukti-2025"
                    org="For innovative project"
                    logo={aicteLogo}
                    logoAlt="AICTE logo"
                    logoStyle="square"
                    delay={0.1}
                />
                <TimelineItem
                    year="2025"
                    title="IIC Regional Meet 2025"
                    org="Organized by MoE's Innovation Cell & AICTE at PSG College of Arts and Science, Coimbatore"
                    logo={micLogo}
                    logoAlt="Ministry of Education Innovation Cell logo"
                    logoStyle="symbol"
                    delay={0.2}
                />
                <TimelineItem
                    year="2024"
                    title="Smart India Hackathon 2024 · Winner"
                    org="MoE's Innovation Cell · Robotic Borewell Rescue Kit"
                    logo={micLogo}
                    logoAlt="Ministry of Education Innovation Cell logo"
                    logoStyle="symbol"
                    delay={0.1}
                />
                <TimelineItem
                    year="2024"
                    title="National-Level Workshop on ROS & SLAM Map Building"
                    org="The Robotics Society ASIET · July 2024"
                    logo={rsiLogo}
                    logoAlt="Robotics Society of India (RSI) logo"
                    delay={0.1}
                />
                <TimelineItem
                    year="2024"
                    title="Value-Added Course in Industrial Automation"
                    org="Conducted by Prolific Pvt. Ltd."
                    logo={prolificLogo}
                    logoAlt="Prolific logo"
                    delay={0.3}
                />
                <TimelineItem
                    year="2024"
                    title="Autonomous Solar Vehicle (MIT - Manipal)"
                    org="Designed a 3-wheeled solar vehicle (25km/hr, no external battery) with Level 2 Autonomous capabilities."
                    logo={mitLogo}
                    logoAlt="Manipal Institute of Technology (MIT Manipal) logo"
                    delay={0.4}
                />
                <TimelineItem
                    year="2023"
                    title="Overview of Space Science and Technology"
                    org="Online Training Programme (ISRO START) conducted by ISRO HQ, Bangalore."
                    logo={isroLogo}
                    logoAlt="Indian Space Research Organisation (ISRO) logo"
                    delay={0.5}
                />
                <TimelineItem
                    year="2023"
                    title="National Solar Vehicle Championship"
                    org="VNIT - Nagpur (Aug - Oct 2023)"
                    logo={vnitLogo}
                    logoAlt="Visvesvaraya National Institute of Technology (VNIT Nagpur) logo"
                    delay={0.6}
                />
                <TimelineItem
                    year="2023"
                    title="Go-Kart Race Vehicle"
                    org="HICET - Coimbatore. Designed a lightweight, aerodynamic race vehicle with 3Kw PMSM motor (75km/hr)."
                    logo={hicetLogo}
                    logoAlt="Hindusthan College of Engineering and Technology (HICET) logo"
                    delay={0.7}
                />
                <TimelineItem
                    year="2023"
                    title="National Level Technical Hands-on Workshop on MATLAB"
                    org="Workshop Participant"
                    logo={matlabLogo}
                    logoAlt="MATLAB logo"
                    delay={0.8}
                />
            </div>

            <style>{`
                .achievements-section {
                    padding: 8rem 10%;
                }
                .achievements-section .section-title {
                    font-size: 2.5rem;
                    margin-bottom: 4rem;
                }
                .timeline {
                    position: relative;
                    max-width: 960px;
                    margin: 0 auto;
                    border-left: 2px solid var(--glass-border);
                    padding-left: 2rem;
                }
                .timeline-item {
                    margin-bottom: 3rem;
                    position: relative;
                    display: grid;
                    grid-template-columns: 80px minmax(0, 1fr);
                    gap: 1.25rem;
                    align-items: start;
                    padding-bottom: 2rem;
                    border-bottom: 1px solid var(--glass-border);
                }
                .timeline-item:last-child { border-bottom: none; margin-bottom: 0; }
                .achievement-logo {
                    width: 80px;
                    height: 64px;
                    display: grid;
                    place-items: center;
                    border-radius: 10px;
                    border: 1px solid var(--glass-border);
                    color: var(--accent-tech);
                    background: rgba(59, 130, 246, 0.05);
                    font-size: 1.5rem;
                    overflow: hidden;
                }
                .achievement-logo.has-logo { background: white; padding: 5px; }
                .achievement-logo > span { display: block; width: 100%; height: 100%; overflow: hidden; }
                .achievement-logo img { width: 100%; height: 100%; object-fit: contain; }
                .achievement-logo.logo-symbol > span, .achievement-logo.logo-square > span {
                    width: auto;
                    max-width: none;
                    aspect-ratio: 1;
                }
                .achievement-logo.logo-symbol img { display: block; width: auto; max-width: none; }
                .achievement-logo.logo-square img { object-fit: cover; }
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
                @media (max-width: 768px) {
                    .timeline { padding-left: 1.5rem; }
                    .timeline-item { grid-template-columns: 56px minmax(0, 1fr); gap: 0.85rem; margin-bottom: 2rem; }
                    .achievement-logo { width: 56px; height: 56px; }
                    .timeline-dot { left: -2.1rem; }
                    .timeline-content h3 { font-size: 1.1rem; line-height: 1.45; }
                    .timeline-content p { font-size: 0.9rem; }
                }
            `}</style>
        </section>
    );
};

export default Achievements;
