import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import styles from '@/styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'home.tsx',
    path: '/',
    icon: 'react_icon.svg',
  },
  {
    name: 'about.html',
    path: '/about',
    icon: 'html_icon.svg',
  },
  {
    name: 'contact.css',
    path: '/contact',
    icon: 'css_icon.svg',
  },
  {
    name: 'projects.js',
    path: '/projects',
    icon: 'js_icon.svg',
  },
  {
    name: 'github.md',
    path: '/github',
    icon: 'markdown_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <h3 className={styles.title}>Explorer</h3>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          {portfolioOpen ? (
            <VscChevronDown className={styles.chevron} />
          ) : (
            <VscChevronRight className={styles.chevron} />
          )}
          Portfolio
        </label>
        {portfolioOpen && (
          <div className={styles.files}>
            {explorerItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <div className={styles.file}>
                  <Image
                    src={`/logos/${item.icon}`}
                    alt={item.name}
                    height={18}
                    width={18}
                  />{' '}
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explorer;
