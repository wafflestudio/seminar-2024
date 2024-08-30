import { CalendarIcon } from '@radix-ui/react-icons';
import { ReactNode, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import { InlineCode } from '@/components/InlineCode';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Separator } from '@/designsystem/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/designsystem/ui/tabs';
import { useToggleTheme } from '@/main';
import { EnvironmentAssignment } from '@/pages/Environment/assignment';
import { Environment } from '@/pages/Environment/lecture';
import { Home } from '@/pages/home';
import { OTAssignment } from '@/pages/OT/assignment';
import { OT } from '@/pages/OT/lecture';
import { ReactBasicAssignment } from '@/pages/ReactBasic/assignment';
import { ReactBasic } from '@/pages/ReactBasic/lecture';
import { WebBasic } from '@/pages/WebBasic/lecture';
import { formatDate } from '@/utils/utils';

const pages: (
  | { type: 'index'; path: string; element: ReactNode }
  | {
      type: 'lecture';
      title: string;
      path: string;
      description: string;
      element: ReactNode;
      date: Date;
    }
  | {
      type: 'assignment';
      title: string;
      path: string;
      element: ReactNode;
      schedule: [Date, Date];
    }
)[] = [
  { type: 'index', path: '/', element: <Home /> },
  {
    type: 'lecture',
    title: 'OT',
    description: '세미나 목표, 방식, 과제, 평가',
    date: new Date('2024-09-04'),
    path: '/ot',
    element: <OT />,
  },
  {
    type: 'assignment',
    title: '세미나 0 코모',
    schedule: [new Date('2024-09-04'), new Date('2024-09-11')],
    path: '/como-0',
    element: (
      <h2 className="flex h-full flex-col items-center justify-center">
        <div>
          조별 DM방에서 날짜 잡고 코모 진행 후{' '}
          <InlineCode code="#frontend-잡담" /> 채널에 인증샷 업로드
        </div>
        <br />
        <b className="text-base text-slate-500">
          사진에 얼굴은 필수가 아니지만 노트북은 필수입니다
        </b>
      </h2>
    ),
  },
  {
    type: 'assignment',
    title: '리액트 튜토리얼',
    schedule: [new Date('2024-09-04'), new Date('2024-09-25')],
    path: '/vlpt-tutorial',
    element: <OTAssignment />,
  },
  {
    type: 'lecture',
    title: '개발환경 세팅',
    description: 'IDE, eslint, prettier, ci',
    date: new Date('2024-09-04'),
    path: '/environment',
    element: <Environment />,
  },
  {
    type: 'assignment',
    title: '개발 환경 설정',
    schedule: [new Date('2024-09-04'), new Date('2024-09-11')],
    path: '/setup-environment',
    element: <EnvironmentAssignment />,
  },
  {
    type: 'lecture',
    title: '웹과 언어',
    description: '웹의 역사, html, css, js의 역할과 동작, typescript의 필요성',
    date: new Date('2024-09-11'),
    path: '/web-html-css-js-ts',
    element: <WebBasic />,
  },
  {
    type: 'lecture',
    title: '리액트 맛보기',
    description: 'typescript 기초, React 의 JSX / state / props',
    date: new Date('2024-09-11'),
    path: '/react-basic',
    element: <ReactBasic />,
  },
  {
    type: 'assignment',
    title: '리액트 기초 과제',
    schedule: [new Date('2024-09-25'), new Date('2024-10-09')],
    path: '/react-basic-assignment',
    element: <ReactBasicAssignment />,
  },
  {
    type: 'lecture',
    title: '리액트',
    description: '리액트의 철학, 상태 설계, Context, Hook',
    date: new Date('2024-09-25'),
    path: '/react',
    element: <div>TBD</div>,
  },
  {
    type: 'lecture',
    title: '스타일링',
    description: 'inline style, css-in-js, css modules, atomic css',
    date: new Date('2024-10-02'),
    path: '/styling',
    element: <div>TBD</div>,
  },
  {
    type: 'lecture',
    title: '클린 코드와 아키텍처',
    description: 'DRY, SRP, DI',
    date: new Date('2024-10-02'),
    path: '/architecture',
    element: <div>TBD</div>,
  },
  {
    type: 'lecture',
    title: '비동기',
    description: 'callback, Promise, event loop',
    date: new Date('2024-10-16'),
    path: '/async',
    element: <div>TBD</div>,
  },
  {
    type: 'lecture',
    title: '성능과 SSR',
    description: 'Next.js',
    date: new Date('2024-11-06'),
    path: '/SSR',
    element: <div>TBD</div>,
  },
  {
    type: 'lecture',
    title: '메타 프레임워크',
    description: 'Next.js',
    date: new Date('2024-11-06'),
    path: '/meta-framework',
    element: <div>TBD</div>,
  },
  {
    type: 'lecture',
    title: '프론트엔드 인프라',
    description: '',
    date: new Date('2024-11-13'),
    path: '/infrastructure',
    element: <div>TBD</div>,
  },
  {
    type: 'lecture',
    title: '마무리',
    description: '',
    date: new Date('2024-11-13'),
    path: '/end',
    element: <div>TBD</div>,
  },
];

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
