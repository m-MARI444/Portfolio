import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, onOpen }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card"
        >
            <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="overlay"></div>
            </div>
            <div className="card-content">
                <div className="tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="links">
                    <button className="btn-text" onClick={() => onOpen(project)}>View Details →</button>
                </div>
            </div>

            <style>{`
                .project-card {
                    background: var(--bg-card);
                    border: 1px solid var(--glass-border);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: transform 0.3s ease, border-color 0.3s ease;
                }
                .project-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--glass-highlight);
                }
                .card-image {
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }
                .overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(5,5,5,0.8), transparent);
                }
                .card-content {
                    padding: 1.5rem;
                }
                .tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }
                .tag {
                    font-size: 0.75rem;
                    padding: 0.25rem 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 100px;
                    color: var(--accent-tech);
                    border: 1px solid var(--glass-border);
                }
                h3 {
                    margin-bottom: 0.75rem;
                    font-size: 1.25rem;
                }
                p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.5;
                }
                .btn-text {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                }
                .btn-text:hover {
                    color: var(--accent-tech);
                }
            `}</style>
        </motion.div>
    );
};

export default ProjectCard;
