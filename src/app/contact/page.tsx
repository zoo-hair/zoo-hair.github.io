import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';

export const metadata = {
  title: 'Contact',
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reach Out Via Socials</h1>
      <p className={styles.subtitle}>
        I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the platforms listed below!
      </p>
      <div className={styles.flex}>
        <ContactCode />
      </div>
    </div>
  );
};

export default ContactPage;
