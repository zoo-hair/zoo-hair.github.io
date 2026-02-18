import Image from 'next/image';
import styles from '@/styles/ProjectCard.module.css';
import { Project } from '@/data/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, 200px"
        />
      </div>
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.actions} style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
          <a
            href={project.source_code}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}
          >
            Source Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
