import { Outlet } from 'react-router-dom';

import { Link } from '@/app/components/Link';
import { UsecaseContext } from '@/app/contexts/UsecaseContext';
import { useGlobalContext } from '@/app/utils/useGlobalContext';

import styles from './index.module.css';

export const PageLayout = () => {
  const { sidebarUsecase } = useGlobalContext(UsecaseContext);

  const { homeLink, links } = sidebarUsecase.showSidebar();

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Link page={homeLink}>
          <h1>Seminar</h1>
        </Link>

        <nav className={styles.links}>
          <ol className={styles.links}>
            {links.map((page) => (
              <li key={page.title + page.link.page} className={styles.linkItem}>
                <Link page={page.link}>{page.title}</Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
