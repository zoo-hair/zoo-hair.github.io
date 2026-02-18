import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  VscFiles,
  VscGithubAlt,
  VscCode,
  VscEdit,
  VscMail,
  VscAccount,
  VscSettings,
  VscTerminal,
} from 'react-icons/vsc';
import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/' },
  { Icon: VscGithubAlt, path: '/github' },
  { Icon: VscCode, path: '/projects' },
  { Icon: VscEdit, path: '/articles' },
  { Icon: VscMail, path: '/contact' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/about' },
  { Icon: VscSettings, path: '/settings' },
];

interface SidebarProps {
  toggleTerminal: () => void;
}

const Sidebar = ({ toggleTerminal }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar} suppressHydrationWarning>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                pathname === path && styles.active
              }`}
            >
              <Icon
                size={23}
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
        {/* Terminal Toggle Icon for Mobile/Alt UX */}
        <div className={styles.iconContainer} onClick={toggleTerminal}>
            <VscTerminal 
                size={23}
                fill='rgb(106, 115, 125)'
                className={styles.icon}
            />
        </div>
      </div>
      <div className={sidebarBottomItems.length > 0 ? styles.sidebarBottom : ''}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                size={23}
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
