'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

import Titlebar from './MainTitlebar';
import Sidebar from './MainSidebar';
import Explorer from './MainExplorer';
import Bottombar from './MainBottombar';
import Tabsbar from './MainTabsbar';
import Terminal from './MainTerminal';

import styles from '@/styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const toggleTerminal = useCallback(() => {
    setIsTerminalOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) {
      main.scrollTop = 0;
    }
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        toggleTerminal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTerminal]);

  return (
    <div className={styles.layout}>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar toggleTerminal={toggleTerminal} />
        <Explorer />
        <div className={styles.editorContainer}>
          <Tabsbar />
          <div className={styles.editorWithTerminal}>
            <main id="main-editor" className={styles.content}>
              {children}
            </main>
            {isTerminalOpen && <Terminal onToggle={toggleTerminal} />}
          </div>
        </div>
      </div>
      <Bottombar onTerminalToggle={toggleTerminal} isTerminalOpen={isTerminalOpen} />
    </div>
  );
};

export default Layout;
