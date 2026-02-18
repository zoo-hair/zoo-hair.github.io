import { VscStarFull, VscRepoForked, VscEye, VscGithubInverted } from 'react-icons/vsc';
import styles from '@/styles/RepoCard.module.css';

interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  html_url: string;
}

const RepoCard = ({ repo }: { repo: Repo }) => {
  return (
    <div className={styles.card}>
      <div>
        <h4>{repo.name}</h4>
        <p>{repo.description || 'No description provided.'}</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <VscStarFull /> {repo.stargazers_count}
        </div>
        <div className={styles.stat}>
          <VscRepoForked /> {repo.forks_count}
        </div>
        <div className={styles.stat}>
          <VscEye /> {repo.watchers_count}
        </div>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.stat}>
          <VscGithubInverted />
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
