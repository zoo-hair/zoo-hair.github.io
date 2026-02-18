import Image from 'next/image';
import RepoCard from '@/components/RepoCard';
import styles from '@/styles/GithubPage.module.css';

export const metadata = {
  title: 'GitHub',
};

async function getGithubUser() {
  const res = await fetch('https://api.github.com/users/zoo-hair', {
    next: { revalidate: 3600 },
  });
  return res.json();
}

async function getGithubRepos() {
  const res = await fetch('https://api.github.com/users/zoo-hair/repos?per_page=100', {
    next: { revalidate: 3600 },
  });
  return res.json();
}

const GithubPage = async () => {
  const user = await getGithubUser();
  const repos = await getGithubRepos();

  // Filter for some interesting repos or just take the top ones
  const pinnedRepos = repos
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src={user.avatar_url}
          alt={user.login}
          width={100}
          height={100}
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
      <h3 style={{ marginBottom: '1.5rem' }}>Popular Repositories</h3>
      <div className={styles.repos}>
        {pinnedRepos.map((repo: any) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default GithubPage;
