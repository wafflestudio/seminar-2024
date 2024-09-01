import { CalendarIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import { ThemeToggle } from '@/components/ThemeToggle';
import { Separator } from '@/designsystem/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/designsystem/ui/tabs';
import { useToggleTheme } from '@/main';
import { pages } from '@/pages';
import { formatDate } from '@/utils/utils';

export const App = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <Sidebar />
      <Separator orientation="vertical" />
      <main className="flex-1 overflow-y-scroll p-4">
        <Routes>
          {Object.entries(pages).map(([key, { path, element }]) => (
            <Route key={key} path={path} element={element} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

const Sidebar = () => {
  const toggleTheme = useToggleTheme();
  const { tab, onChangeTab } = useTab();
  const currentPath = useLocation().pathname;

  return (
    <div className="flex w-52 flex-col py-4 bg-blend-darken">
      <Link to="/">
        <h1 className="text-center text-3xl font-bold">Lecture</h1>
      </Link>
      <Tabs
        className="mx-4 mt-8"
        value={tab}
        onValueChange={(e) => {
          onChangeTab(e as 'lecture' | 'assignment');
        }}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="lecture">강의</TabsTrigger>
          <TabsTrigger value="assignment">과제</TabsTrigger>
        </TabsList>
      </Tabs>
      <nav className="flex-1 overflow-y-scroll px-4 text-xl">
        <ul className="mt-4 flex flex-col gap-4">
          {pages.flatMap((page) =>
            tab === 'assignment' && page.type === 'assignment' ? (
              <li key={page.path}>
                <Link
                  to={page.path}
                  className={`flex flex-col gap-1 rounded-sm px-4 py-2 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 ${
                    currentPath === page.path
                      ? 'bg-blue-100 font-semibold dark:bg-blue-900'
                      : ''
                  }`}
                >
                  <h3 className="text-base">{page.title}</h3>
                  <p className="flex items-center gap-2 text-xs text-slate-500">
                    {page.schedule
                      .map((s) =>
                        formatDate(s, ({ MM, DD }) => `${MM}월 ${DD}일`),
                      )
                      .join(' ~ ')}
                  </p>
                </Link>
              </li>
            ) : tab === 'lecture' && page.type === 'lecture' ? (
              <li key={page.path}>
                <Link
                  to={page.path}
                  className={`flex flex-col gap-1 rounded-sm px-4 py-2 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 ${
                    currentPath === page.path
                      ? 'bg-blue-100 font-semibold dark:bg-blue-900'
                      : ''
                  }`}
                >
                  <h3>{page.title}</h3>
                  <p className="text-xs text-slate-400">{page.description}</p>
                  <p className="flex items-center gap-2 text-xs text-slate-500">
                    <CalendarIcon />{' '}
                    {formatDate(page.date, ({ MM, DD }) => `${MM}월 ${DD}일`)}
                  </p>
                </Link>
              </li>
            ) : (
              []
            ),
          )}
        </ul>
      </nav>
      <div className="px-4 pt-4">
        <ThemeToggle toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

const useTab = () => {
  const [tab, setTab] = useState<'lecture' | 'assignment'>(
    localStorage.getItem('tab') === 'assignment' ? 'assignment' : 'lecture',
  );

  const onChangeTab = (newTab: typeof tab) => {
    setTab(newTab);
    localStorage.setItem('tab', newTab);
  };

  return { tab, onChangeTab };
};
