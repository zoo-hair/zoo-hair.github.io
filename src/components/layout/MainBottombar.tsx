import Link from 'next/link';
import { VscSourceControl, VscError, VscWarning, VscCheck, VscFeedback } from 'react-icons/vsc';
import styles from '@/styles/Bottombar.module.css';

const Bottombar = ({ onTerminalToggle, isTerminalOpen }: { onTerminalToggle: () => void; isTerminalOpen: boolean }) => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <Link
          href="https://github.com/zoo-hair/zoo-hair.github.io"
          target="_blank"
          rel="noreferrer"
          className={styles.section}
        >
          <VscSourceControl className={styles.icon} />
          <p>main*</p>
        </Link>
        <div className={styles.section}>
          <VscError className={styles.icon} />
          <p>0</p>
          <VscWarning className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <div 
          className={`${styles.section} ${isTerminalOpen ? styles.active : ''}`}
          onClick={onTerminalToggle}
        >
          <VscFeedback className={styles.icon} />
          <p>Terminal</p>
        </div>
        <div className={styles.section}>
          <VscCheck className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <p>Powered by Next.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
