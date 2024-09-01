import { ReactNode } from 'react';

import { como0904Assignment } from '@/assignments/Como0904';
import { environmentSetupAssignment } from '@/assignments/EnvironmentSetup';
import { makeGame1Assignment } from '@/assignments/MakeGame1/assignment';
import { reactTutorialAssignment } from '@/assignments/ReactTutorial';
import { environmentLecture } from '@/lectures/Environment';
import { otLecture } from '@/lectures/OT';
import { reactBasicLecture } from '@/lectures/ReactBasic/lecture';
import { webBasicLecture } from '@/lectures/WebBasic/lecture';
import { Environment } from '@/pages/Environment/lecture';
import { Home } from '@/pages/home';
import { ReactBasicAssignment } from '@/pages/ReactBasic/assignment';
import { ReactBasic } from '@/pages/ReactBasic/lecture';
import { WebBasic } from '@/pages/WebBasic/lecture';

export const pages: (
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
  { path: '/', type: 'index', element: <Home /> },
  { path: '/ot', ...otLecture },
  { path: '/environment', ...environmentLecture },
  { path: '/como-0904', ...como0904Assignment },
  { path: '/react-tutorial', ...reactTutorialAssignment },
  { path: '/environment-setup', ...environmentSetupAssignment },
  { path: '/web-html-css-js-ts', ...webBasicLecture },
  { path: '/react-basic', ...reactBasicLecture },
  { path: '/make-game-1', ...makeGame1Assignment },
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
