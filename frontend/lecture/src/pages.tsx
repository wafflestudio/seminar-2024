import { type ReactNode } from 'react';

import { getComoAssignment } from '@/assignments/Como';
import { dataFetchingPracticeAssignment } from '@/assignments/DataFetchingPractice';
import { environmentSetupAssignment } from '@/assignments/EnvironmentSetup';
import { makeGameAssignment } from '@/assignments/MakeGame/assignment';
import { profilePageAssignment } from '@/assignments/ProfilePage';
import { snuttCloneCoding1Assignment } from '@/assignments/SnuttCloneCoding1';
import { tutorialAssignment } from '@/assignments/Tutorial';
import { architectureLecture } from '@/lectures/Architecture';
import { asyncLecture } from '@/lectures/Async/lecture';
import { dataFetchingLecture } from '@/lectures/DataFetching/lecture';
import { ecosystemLecture } from '@/lectures/Ecosystem';
import { environmentLecture } from '@/lectures/Environment';
import { infrastructureLecture } from '@/lectures/Infrastructure';
import { initializeProjectLecture } from '@/lectures/InitializeProject';
import { otLecture } from '@/lectures/OT';
import { performanceLecture } from '@/lectures/Performance';
import { reactApisLecture } from '@/lectures/ReactApis/lecture';
import { reactBasicLecture } from '@/lectures/ReactBasic/lecture';
import { routingLecture } from '@/lectures/Routing';
import { stateManagementLecture } from '@/lectures/StateManagement';
import { stylingLecture } from '@/lectures/Styling';
import { testingLecture } from '@/lectures/Testing';
import { typescriptLecture } from '@/lectures/TypeScript';
import { webBasicLecture } from '@/lectures/WebBasic/lecture';
import { wrapupLecture } from '@/lectures/WrapUp';
import { Home } from '@/pages/home';

import { snuttCloneCoding2Assignment } from './assignments/SnuttCloneCoding2';

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
      due: Date;
    }
)[] = [
  { path: '/', type: 'index', element: <Home /> },
  { path: '/ot', ...otLecture },
  { path: '/environment', ...environmentLecture },
  { path: '/initialize-project', ...initializeProjectLecture },
  { path: '/web-html-css-js-ts', ...webBasicLecture },
  { path: '/react-basic', ...reactBasicLecture },
  { path: '/react-apis', ...reactApisLecture },
  { path: '/async', ...asyncLecture },
  { path: '/api-call', ...dataFetchingLecture },
  { path: '/typescript', ...typescriptLecture },
  { path: '/styling', ...stylingLecture },
  { path: '/architecture', ...architectureLecture },
  { path: '/state-management', ...stateManagementLecture },
  { path: '/routing', ...routingLecture },
  { path: '/performance', ...performanceLecture },
  { path: '/infrastructure', ...infrastructureLecture },
  { path: '/testing', ...testingLecture },
  { path: '/ecosystem', ...ecosystemLecture },
  { path: '/wrapup', ...wrapupLecture },
  {
    path: '/como-0',
    ...getComoAssignment({ seminar: 0, due: new Date('2024-09-10 23:59:59') }),
  },
  { path: '/environment-setup', ...environmentSetupAssignment },
  { path: '/tutorial', ...tutorialAssignment },
  { path: '/profile', ...profilePageAssignment },
  {
    path: '/como-1',
    ...getComoAssignment({ seminar: 1, due: new Date('2024-09-24 23:59:59') }),
  },
  { path: '/make-game', ...makeGameAssignment },
  {
    path: '/como-2',
    ...getComoAssignment({ seminar: 2, due: new Date('2024-10-01 23:59:59') }),
  },
  { path: '/data-fetching-practice', ...dataFetchingPracticeAssignment },
  {
    path: '/como-3',
    ...getComoAssignment({ seminar: 3, due: new Date('2024-10-15 23:59:59') }),
  },
  {
    path: '/blog-1',
    type: 'assignment',
    due: new Date('2024-10-16 23:59:59'),
    element: (
      <div className="flex h-full flex-col items-center justify-center gap-8 p-8">
        <span>
          velog, medium, tistory 등 자신이 선호하는 플랫폼 하나 골라서, 지금까지
          배운 내용들 바탕으로 블로그 한 편 작성
        </span>
        <span>TIL / 배운 내용 정리 / 와플 루키 후기 등등</span>
      </div>
    ),
    title: '개발 블로그 작성 (1)',
  },
  { path: '/project-1', ...snuttCloneCoding1Assignment },
  {
    path: '/como-4',
    ...getComoAssignment({ seminar: 4, due: new Date('2024-11-05 23:59:59') }),
  },
  { path: '/project-2', ...snuttCloneCoding2Assignment },
  {
    path: '/como-5',
    ...getComoAssignment({ seminar: 5, due: new Date('2024-11-19 23:59:59') }),
  },
  {
    path: '/project-3',
    type: 'assignment',
    due: new Date('2024-11-20 23:59:59'),
    element: (
      <div>
        시간표 목록, 시간표 추가/제거, 학기 토글, 관심강좌 구현
        <br />
        vercel 대신 S3 + Cloudfront 에 배포, 태그 푸시 기반 CD 구축 (dev/prod
        모두)
      </div>
    ),
    title: 'SNUTT 클론코딩 (3)',
  },
  {
    path: '/blog-2',
    type: 'assignment',
    due: new Date('2024-11-24 23:59:59'),
    element: (
      <div>
        저번이랑 비슷하게 블로그 한 편 더 작성
        <br />
        TIL / 배운 내용 정리 / 와플 루키 후기 등등
      </div>
    ),
    title: '개발 블로그 작성 (2)',
  },
];
