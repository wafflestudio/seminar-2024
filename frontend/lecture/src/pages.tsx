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
import { snuttCloneCoding3Assignment } from './assignments/SnuttCloneCoding3';

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
      member: '개인' | '조별';
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
    member: '개인',
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
  { path: '/project-3', ...snuttCloneCoding3Assignment },
  {
    path: '/aws-deploy',
    member: '개인',
    type: 'assignment',
    due: new Date('2024-11-20 23:59:59'),
    element: (
      <ul className="flex min-h-dvh flex-col justify-center gap-6">
        <li>
          예전에 만들었던 프로필 페이지를 AWS S3 + CloudFront로 배포하고 수업때
          진행했던 대로 배포 자동화 구축 (dev는 머지할 때마다 자동으로 배포되고
          수동으로도 배포 가능, prod는 수동으로만 가능)
        </li>
        <li>dev, prod 환경을 모두 구성해야 한다</li>
        <li>최소 1번은 GitHub Action 을 통해 배포되었어야 한다</li>
        <li>
          아래 url들을 잡담방에 제출
          <ul className="list-disc pl-12">
            <li>dev 환경 cloudfront 배포 url</li>
            <li>prod 환경 cloudfront 배포 url</li>
            <li>
              deploy-dev.yml 트리거된 GitHub Action Workflow Run 들 중 하나
            </li>
            <li>
              deploy-prod.yml 트리거된 GitHub Action Workflow Run 들 중 하나
            </li>
          </ul>
        </li>
        <li>
          AWS 계정 생성 시 키 유출 등으로 인해 과금되는 것 주의. IAM은 항상 최소
          권한으로 설정
        </li>
      </ul>
    ),
    title: 'vercel 대신 AWS에 배포',
  },
  {
    path: '/refactoring-2048',
    member: '개인',
    type: 'assignment',
    due: new Date('2024-11-30 23:59:59'),
    element: (
      <div className="flex flex-col justify-center gap-6">
        <div>
          두 달 동안 많이 성장했을 테니, 두 달 전에 짰던 2048 코드를 다시 봅시다
        </div>
        <div>
          성장을 했다면 분명히 문제점이나 개선점이 보일 거예요 (TypeScript
          사용법, CSS, 성능 등. 문제점이 안 보이면 어떡하지..)
        </div>
        <div>
          리팩토링 PR을 1개 이상 올린 다음, 각자 머지하고, 머지한 PR의 링크를
          올려주세요
        </div>
        <div>
          무슨 문제점을 발견하여 어떻게 해결했는지 PR Description에 작성되어
          있어야 합니다
        </div>
      </div>
    ),
    title: '리팩토링',
  },
  {
    path: '/blog-2',
    member: '개인',
    type: 'assignment',
    due: new Date('2024-11-30 23:59:59'),
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
