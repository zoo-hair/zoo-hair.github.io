import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'zoo-hair.github.io',
    href: 'https://zoo-hair.github.io/',
  },
  {
    social: 'email',
    link: 'geraltofmalitola@gmail.com',
    href: 'mailto:geraltofmalitola@gmail.com',
  },
  {
    social: 'github',
    link: 'zoo-hair',
    href: 'https://github.com/zoo-hair',
  },
  {
    social: 'linkedin',
    link: 'juhair-islam-sami',
    href: 'https://www.linkedin.com/in/juhair-islam-sami/',
  },
  {
    social: 'twitter',
    link: 'juhair_sami',
    href: 'https://twitter.com/juhair_sami',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> {'{'}
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>{'}'}</p>
    </div>
  );
};

export default ContactCode;
