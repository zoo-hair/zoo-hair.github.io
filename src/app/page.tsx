import Link from 'next/link';
import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <p className={styles.greeting}>Hello, I'm</p>
            <h1 className={styles.name}>Juhair Islam Sami</h1>
            <h2 className={styles.role}>Full Stack Developer | AI Enthusiast | Student</h2>
          </div>
          <p className={styles.description}>
            I craft clean, performant web applications with modern technologies. Specialized in Spring Boot, React, Node.js, and building products that users love.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              View Projects
            </Link>
            <Link href="/contact" className={styles.secondaryAction}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
