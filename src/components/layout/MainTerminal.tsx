import styles from '@/styles/Terminal.module.css';

const Terminal = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <div className={styles.terminal}>
      <header className={styles.header}>
        <div className={styles.headerTabs}>
          <div className={`${styles.headerTab} ${styles.activeTab}`}>Terminal</div>
          <div className={styles.headerTab}>Output</div>
          <div className={styles.headerTab}>Debug Console</div>
          <div className={styles.headerTab}>Problems</div>
        </div>
      </header>
      <div className={styles.terminalContent}>
        <p className={styles.line}>
          <span className={styles.prompt}>juhair@portfolio:~$</span>
          <span>whoami</span>
        </p>
        <p>Juhair Islam Sami - Full Stack Developer</p>
        <p className={styles.line}>
          <span className={styles.prompt}>juhair@portfolio:~$</span>
          <span>ls skills/</span>
        </p>
        <p>frontend backend tools</p>
        <p className={styles.line}>
          <span className={styles.prompt}>juhair@portfolio:~$</span>
          <span className={styles.cursor}></span>
        </p>
      </div>
    </div>
  );
};

export default Terminal;
