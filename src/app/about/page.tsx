import styles from '@/styles/AboutPage.module.css';

export const metadata = {
  title: 'About',
};

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <p>
        I'm a passionate full stack developer with a focus on building high-quality, scalable web applications. I love working with modern technologies and solving complex problems.
      </p>
      
      <h2>Experience</h2>
      <p>
        I've worked on various projects ranging from simple landing pages to complex enterprise applications. My focus is always on delivering the best user experience and performance.
      </p>

      <h2>Skills</h2>
      <ul>
        <li><strong>Languages:</strong> JavaScript, TypeScript, Python, HTML, CSS, Java, C, C++</li>
        <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, Redux</li>
        <li><strong>Backend:</strong> Node.js, PostgreSQL, Spring Boot</li>
        <li><strong>Tools:</strong> Git, Docker, VS Code, Linux, Antigravity</li>
      </ul>

      <h2>Interests</h2>
      <p>
        When I'm not coding, I enjoy learning about new technologies, contributing to open source, and exploring the latest trends in web development, AI, machine learning, and Cybersecurity.
      </p>
    </div>
  );
};

export default AboutPage;
