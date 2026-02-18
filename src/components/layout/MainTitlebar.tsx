import Image from 'next/image';
import styles from '@/styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar} suppressHydrationWarning>
      <div className={styles.items}>
        <Image
          src="/logos/vscode_icon.svg"
          alt="VSCode Icon"
          height={15}
          width={15}
          className={styles.icon}
          unoptimized
        />
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Juhair Islam Sami - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
