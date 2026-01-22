import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2>Let's Build the Future</h2>
                <p>Open for collaborations and opportunities in Robotics & Autonomous Systems.</p>

                <div className="contact-links">
                    <a href="mailto:m.marieswarandass@gmail.com" className="contact-card">
                        <FaEnvelope className="icon" />
                        <span>m.marieswarandass@gmail.com</span>
                    </a>
                    <a href="tel:+916374128028" className="contact-card">
                        <FaPhone className="icon" />
                        <span>+91 63741 28028</span>
                    </a>
                    <a href="https://github.com/m-MARI444" target="_blank" className="contact-card">
                        <FaGithub className="icon" />
                        <span>github.com/m-MARI444</span>
                    </a>
                    <a href="https://www.linkedin.com/in/marieswaran-m-b49678316" target="_blank" className="contact-card">
                        <FaLinkedin className="icon" />
                        <span>linkedin.com/in/marieswaran-m</span>
                    </a>
                </div>

                <div className="footer">
                    <p>&copy; 2026 Marieswaran M. All rights reserved.</p>
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding: 8rem 10% 2rem;
                    background: linear-gradient(to top, #000, var(--bg-surface));
                    text-align: center;
                }
                .contact-container h2 {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
                .contact-container p {
                    color: var(--text-secondary);
                    margin-bottom: 4rem;
                    font-size: 1.2rem;
                }
                .contact-links {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    flex-wrap: wrap;
                    margin-bottom: 6rem;
                }
                .contact-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.5rem 2rem;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    transition: 0.3s;
                }
                .contact-card:hover {
                    background: rgba(255,255,255,0.08);
                    transform: translateY(-5px);
                    color: var(--accent-tech);
                }
                .contact-card .icon {
                    font-size: 1.5rem;
                }
                .footer {
                    border-top: 1px solid var(--glass-border);
                    padding-top: 2rem;
                    color: var(--text-muted);
                    font-size: 0.9rem;
                }
            `}</style>
        </section>
    );
};

export default Contact;
