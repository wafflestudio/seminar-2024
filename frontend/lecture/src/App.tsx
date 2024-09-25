import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import {
  type PropsWithChildren,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import { ThemeToggle } from '@/components/ThemeToggle';
import { Separator } from '@/designsystem/ui/separator';
import { Skeleton } from '@/designsystem/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/designsystem/ui/tabs';
import { Toaster } from '@/designsystem/ui/toaster';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/designsystem/ui/tooltip';
import { useToggleTheme } from '@/main';
import { pages } from '@/pages';
import { cn } from '@/utils/designsystem';
import { formatDate } from '@/utils/formatDate';

export const App = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <Sidebar />
      <Separator orientation="vertical" />
      <main className="flex-1 overflow-y-scroll p-4">
        <Suspense fallback={<Skeleton className="h-full w-full" />}>
          <Routes>
            {Object.entries(pages).map(([key, { path, element }]) => (
              <Route key={key} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <Toaster />
    </div>
  );
};

const Sidebar = () => {
  const toggleTheme = useToggleTheme();
  const { tab, onChangeTab } = useTab();
  const { isOpen, toggleOpen } = useSidebarOpen();
  const currentPath = useLocation().pathname;

  return (
    <div className="relative flex">
      <div
        className={cn(
          'flex flex-col overflow-hidden py-8 bg-blend-darken',
          isOpen ? 'w-52' : 'w-0',
        )}
      >
        <Link to="/">
          <h1 className="text-center text-3xl font-bold">Frontend</h1>
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
                  <PageLink
                    path={page.path}
                    isExpired={Date.now() > page.due.getTime()}
                    currentPath={currentPath}
                  >
                    <h3 className="text-base">{page.title}</h3>
                    <p className="flex items-center gap-2 text-xs text-slate-500">
                      {formatDate(
                        page.due,
                        ({ MM, DD, HH, mm, ss }) =>
                          `${MM}월 ${DD}일 ${HH}:${mm}:${ss}까지`,
                      )}
                    </p>
                  </PageLink>
                </li>
              ) : tab === 'lecture' && page.type === 'lecture' ? (
                <li key={page.path}>
                  <PageLink
                    path={page.path}
                    isExpired={Date.now() > page.date.getTime()}
                    currentPath={currentPath}
                  >
                    <h3>{page.title}</h3>
                    <p className="text-xs text-slate-400">{page.description}</p>
                    <p className="flex items-center gap-2 text-xs text-slate-500">
                      <CalendarIcon />{' '}
                      {formatDate(page.date, ({ MM, DD }) => `${MM}월 ${DD}일`)}
                    </p>
                  </PageLink>
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
      <div className="absolute left-full top-1/2 h-10 -translate-y-1/2 rounded-r border-y border-r bg-card">
        <TooltipProvider>
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <button className="h-full w-full" onClick={toggleOpen}>
                {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </button>
            </TooltipTrigger>
            <TooltipContent className="flex items-center gap-4">
              <pre>⌘ + b</pre>
              <span>또는</span>
              <pre>ctrl + b</pre>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

const PageLink = ({
  children,
  path,
  isExpired,
  currentPath,
}: PropsWithChildren<{
  path: string;
  isExpired: boolean;
  currentPath: string;
}>) => {
  const isCurrent = currentPath === path;

  return (
    <Link
      to={path}
      ref={(e) => {
        if (isCurrent && e !== null) {
          e.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }}
      className={cn(
        `flex flex-col gap-1 rounded-sm px-4 py-2 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800`,
        isCurrent && 'bg-blue-100 font-semibold dark:bg-blue-900',
        isExpired && 'opacity-50',
      )}
    >
      {children}
    </Link>
  );
};

const useTab = () => {
  const TAB_KEY = 'tab';

  const [tab, setTab] = useState<'lecture' | 'assignment'>(
    localStorage.getItem(TAB_KEY) === 'assignment' ? 'assignment' : 'lecture',
  );

  const onChangeTab = (newTab: typeof tab) => {
    setTab(newTab);
    localStorage.setItem(TAB_KEY, newTab);
  };

  return { tab, onChangeTab };
};

const useSidebarOpen = () => {
  const key = 'sidebarOpen';
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem(key) === false.toString() ? false : true,
  );

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
    localStorage.setItem(key, (!isOpen).toString());
  }, [isOpen]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey && event.key === 'b') ||
        (event.metaKey && event.key === 'b')
      ) {
        event.preventDefault();
        toggleOpen();
      }
    };

    const event = 'keydown';

    window.addEventListener(event, handler);
    return () => {
      window.removeEventListener(event, handler);
    };
  }, [toggleOpen]);

  return { isOpen, toggleOpen };
};
