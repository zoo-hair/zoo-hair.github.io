'use client';

import { useEffect, useState } from 'react';
import {
  VscGithubInverted,
  VscSymbolClass,
  VscSymbolInterface,
  VscSymbolVariable,
  VscSymbolField,
  VscSymbolNamespace,
} from 'react-icons/vsc';
import styles from '@/styles/SettingsPage.module.css';

const themes = [
  {
    id: 'github-dark',
    name: 'GitHub Dark',
    Icon: VscGithubInverted,
    className: styles.githubPreview,
    dataTheme: '', // Default root
  },
  {
    id: 'dracula',
    name: 'Dracula',
    Icon: VscSymbolClass,
    className: styles.draculaPreview,
    dataTheme: 'dracula',
  },
  {
    id: 'ayu-dark',
    name: 'Ayu Dark',
    Icon: VscSymbolInterface,
    className: styles.ayuDarkPreview,
    dataTheme: 'ayu-dark',
  },
  {
    id: 'ayu-mirage',
    name: 'Ayu Mirage',
    Icon: VscSymbolVariable,
    className: styles.ayuMiragePreview,
    dataTheme: 'ayu-mirage',
  },
  {
    id: 'nord',
    name: 'Nord',
    Icon: VscSymbolField,
    className: styles.nordPreview,
    dataTheme: 'nord',
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    Icon: VscSymbolNamespace,
    className: styles.nightOwlPreview,
    dataTheme: 'night-owl',
  },
];

const SettingsPage = () => {
  const [currentTheme, setCurrentTheme] = useState('');

  useEffect(() => {
    const theme = localStorage.getItem('theme') || '';
    setCurrentTheme(theme);
  }, []);

  const setTheme = (theme: string) => {
    if (theme === '') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
    setCurrentTheme(theme);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Manage Themes</h2>
      <div className={styles.themeGrid}>
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`${styles.themeCard} ${
              currentTheme === theme.dataTheme ? styles.activeCard : ''
            }`}
            onClick={() => setTheme(theme.dataTheme)}
          >
            <div className={`${styles.themePreview} ${theme.className}`}>
              <div className={styles.previewTop}></div>
              <div className={styles.previewBody}>
                <div className={styles.previewSidebar}></div>
                <div className={styles.previewContent}>
                  <theme.Icon className={styles.previewIcon} />
                </div>
              </div>
            </div>
            <span className={styles.themeName}>{theme.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
