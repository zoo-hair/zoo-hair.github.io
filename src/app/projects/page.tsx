import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import styles from '@/styles/ProjectsPage.module.css';

export const metadata = {
  title: 'Projects',
};

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stuff I've Built</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
