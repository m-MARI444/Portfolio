import { motion as Motion } from 'framer-motion';

const ProjectCard = ({ project, index, onOpen }) => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.16) }}
            className="project-card"
        >
            <div className="card-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" style={{ objectPosition: project.imagePosition }} />
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
                    {project.projectLink && (
                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn-text" aria-label={`${project.title} on LinkedIn`}>LinkedIn ↗</a>
                    )}
                </div>
            </div>

            <style>{`
                .project-card {
                    background: var(--bg-card);
                    border: 1px solid var(--glass-border);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: transform 0.3s ease, border-color 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                .project-card:hover {
                    border-color: var(--glass-highlight);
                }
                .card-image {
                    height: 200px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .project-card:hover .card-image img {
                    transform: scale(1.035);
                }
                .overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(5,5,5,0.8), transparent);
                }
                .card-content {
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }
                .project-card .tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }
                .project-card .tag {
                    font-size: 0.75rem;
                    padding: 0.25rem 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 100px;
                    color: var(--accent-tech);
                    border: 1px solid var(--glass-border);
                }
                .project-card h3 {
                    margin-bottom: 0.75rem;
                    font-size: 1.25rem;
                }
                .project-card p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.5;
                }
                .project-card .links {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                    margin-top: auto;
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
        </Motion.div>
    );
};

export default ProjectCard;
