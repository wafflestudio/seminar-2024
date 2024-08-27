import { useReducer } from 'react';

import { Description } from '@/components/Description';
import { Slides } from '@/components/Slides';
import { Badge } from '@/designsystem/ui/badge';
import { Button } from '@/designsystem/ui/button';
import { Skeleton } from '@/designsystem/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/designsystem/ui/table';
import { cn } from '@/utils/designsystem';

export const OT = () => {
  return (
    <Slides
      slides={[
        { title: '오늘 목표: OT & 수업 조금', content: <Lecture0Goal /> },
        { title: '자기소개', content: <AboutMe /> },
        { title: '프론트엔드란?', content: <WhatIsFrontend /> },
        { title: '프론트엔드란?', content: <Websites /> },
        { title: '프론트엔드란?', content: <Webviews /> },
        { title: '세미나 목표', content: <GoodDeveloper /> },
        { title: '세미나 목표', content: <SeminarContent /> },
        { title: '세미나 목표', content: <SeminarGoal /> },
        { title: '세미나 목표', content: <SeminarDiff /> },
        { title: '조별과제', content: <Team /> },
      ]}
    />
  );
};

const Lecture0Goal = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-4">
      <li>프론트엔드 세미나에서 뭘 배울지 이해한다</li>
      <li>세미나 진행 방식을 이해한다</li>
    </ul>
  );
};

const AboutMe = () => {
  return (
    <div className="flex items-center gap-16">
      <img
        className="w-72 rounded-full"
        src="https://avatars.githubusercontent.com/u/39977696?v=4"
      />
      <div className="flex flex-1 flex-col gap-8">
        <div className="mb-8 text-4xl">우현민 (컴퓨터공학부 19)</div>
        <div>프론트엔드 개발 4년차 (2021.03.29 ~ )</div>

        <div>학부 3학년 1학기 복학생</div>

        <ul className="flex flex-col gap-4 pl-4 text-xl">
          <li>와플스튜디오 18.5기 루키</li>
          <li>2021~2022 동아리장</li>
          <li>2021년 리액트 세미나장</li>
          <li>2022년 리액트 세미나 조교</li>
          <li>2023년 리액트 세미나 조교</li>
          <li>2024년 리액트 세미나장</li>
          <li>2022.09 ~ 2024.05 SNUTT 팀원</li>
        </ul>
      </div>
    </div>
  );
};

const WhatIsFrontend = () => {
  return (
    <div className="flex justify-center">
      <Description
        items={[
          { key: '넓은 의미', value: '사용자와 상호작용하는 부분' },
          { key: '좁은 의미', value: '웹 어플리케이션 개발' },
        ]}
      />
    </div>
  );
};

const Websites = () => (
  <div>
    <h3 className="text-center text-2xl">우리가 쓰는 웹사이트들</h3>
    <div className="mt-6 grid grid-cols-2 gap-20">
      <ExampleIframe title="무신사" src={'https://musinsa.com'} />
      <ExampleIframe title="와플스튜디오" src={'https://wafflestudio.com'} />
      <ExampleIframe
        title="카카오맵"
        src={'https://map.kakao.com'}
        className="col-span-2"
      />
    </div>
  </div>
);

const Webviews = () => (
  <div>
    <p className="text-center text-2xl">
      웹뿐만 아니라 앱에도: 토스에 있는 대부분의 화면은 웹으로 되어 있다
    </p>
    <img src="https://pbs.twimg.com/media/FNxV63yUYAAs1MQ?format=jpg&name=medium" />
  </div>
);

const ExampleIframe = ({
  title,
  src,
  className,
}: {
  title: string;
  src: string;
  className?: string;
}) => {
  const [isShow, toggleShow] = useReducer((s: boolean) => !s, false);
  return (
    <div className={cn('flex w-full flex-col gap-4', className)}>
      <Button className="w-full" variant="secondary" onClick={toggleShow}>
        {title}
      </Button>
      {isShow && <iframe className="h-[600px]" src={src} />}
    </div>
  );
};

const GoodDeveloper = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <h2 className="text-3xl">만들어내는 건 누구나 할 수 있다</h2>
      <h2 className="text-3xl">
        좋은 개발자는 <strong>&quot;잘&quot;</strong> 만들어야 한다
      </h2>
      <p>..., 재사용성, 결합도, 기술부채, 테스트, 기술동향, 패러다임, ...</p>
      <h2 className="text-3xl">
        하지만 4~5회 세미나는 &quot;만들어내는 거&quot;를 학습하기에도 부족한
        시간
      </h2>
    </div>
  );
};

const SeminarContent = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl">세미나에서 뭘 다뤄야 할까?</h3>
      <div className="mt-20 flex flex-wrap gap-4">
        {[
          '"만들어내기" 무한 수련',
          '개발 마인드셋',
          '아키텍처',
          '테스팅 - TDD, BDD, E2E',
          '기술 흐름',
          'JavaScript 기초',
          'JavaScript 심화',
          'npm 패키지 만들기',
          '클론코딩',
          'CSS 기초',
          'CSS 트렌드: SCSS, CSS-in-JS, TailwindCSS',
          'NextJS',
          'CSR, SSR, SSG',
          'React Server Component',
          'React Compiler',
          '배포',
          '프론트엔드 인프라 구축',
          '브라우저의 동작 원리',
          'React 기초',
          'React 심화',
          '프론트엔드의 역사',
          '번들러: Webpack vs Rollup',
          'TypeScript의 타입 시스템',
          '웹뷰 개발 팁과 주의사항',
          'React Native',
          'ESLint, Prettier, Knip 등 개발도구',
          '런타임: NodeJS, Deno, Bun',
          'Promise와 비동기처리',
          '브라우저 전쟁',
          '웹 표준',
          '웹 접근성',
          '웹 보안',
          '웹 성능 개선과 측정',
          'PWA',
          '웹 애니메이션',
          '웹 어셈블리',
          'vscode 단축키',
          'Redux',
          'react-query',
          'React Context',
          '의존성 주입',
          '컴포넌트 합성',
          '라우팅',
          '브라우저 히스토리와 캐시',
          'Service Worker',
          '웹소켓',
          'useEffect의 올바른 사용법',
          '모듈 시스템: ESM과 CJS',
          'npm, yarn, pnpm',
          '모노레포',
          '마이크로 프론트엔드',
          'ECMAScript 버전별 변화',
          '프론트엔드 도커라이징',
          '웹 컴포넌트',
          '쿠키와 스토리지',
          'git',
        ].map((item, index) => (
          <Badge
            key={item}
            variant={(['secondary', 'default', 'outline'] as const)[index % 3]}
            className="text-xl"
          >
            {item}
          </Badge>
        ))}
        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
};

const SeminarGoal = () => {
  return (
    <div>
      <p>어차피 다 다루지 못한다면, 앞으로 계속 성장할 수 있도록</p>
      <ul className="mt-20 flex list-disc flex-col gap-8 pl-10">
        <li>와플스튜디오에서 활동할 수 있는 최소 수준의 프론트엔드 실력</li>
        <li>와플스튜디오에서 계속 성장할 수 있는 마인드셋</li>
        <li>친목</li>
        <li className="font-bold">재미 & 성취감</li>
      </ul>
    </div>
  );
};

const SeminarDiff = () => {
  const diffs = [
    {
      prev: (
        <>
          바닐라 <pre className="inline">html/css/js</pre>부터 시작
        </>
      ),
      curr: (
        <>
          <pre className="inline">React + TypeScript</pre> 로 시작
        </>
      ),
    },
    { prev: '라이브러리 사용 제한', curr: '라이브러리 제한 없음' },
    { prev: 'private 레포에서 개인과제', curr: 'public 레포에서 조별과제' },
    { prev: '질문을 정리해서 올려야 함', curr: '모르겠을 때 더 편하게 질문' },
    {
      prev: 'ppt / markdown 형태의 강의자료',
      curr: 'React + TypeScript로 작성된 강의자료',
    },
  ];
  return (
    <div className="flex flex-col items-center gap-12">
      <p>그래서 좀 많이 바꿨습니다</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-xl">~작년</TableHead>
            <TableHead className="text-center text-xl">올해</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {diffs.map((diff, index) => (
            <TableRow key={index}>
              <TableCell className="px-6 text-center text-xl">
                {diff.prev}
              </TableCell>
              <TableCell className="px-6 text-center text-xl">
                {diff.curr}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const Team = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl">목표</h2>
      <div className="flex gap-2">
        {['친목', '질문'].map((text) => (
          <Badge key={text} className="text-xl">
            {text}
          </Badge>
        ))}
      </div>

      <h2 className="mt-16 text-3xl">형태</h2>
      <ul className="flex list-disc flex-col gap-2">
        <li>서로 도움을 주고받는다</li>
        <li>상대가 혹시나 트롤이어도 발목잡히지는 않는 구조</li>
        <li>
          조마다 채널 생성
          <p className="text-base text-slate-500">
            원한다면 개인 DM방도 가능, 단 세미나장 포함 필수
          </p>
        </li>
        <li>
          가능하면 친목이 가능한 형태로 배정
          <p className="text-base text-slate-500">
            학번이 비슷한 사람끼리, 같은 학과 사람끼리 등<br />
            같이 팀을 하고 싶은/싫은 사람이 있다면 미리 DM으로 알려주세요
          </p>
        </li>
      </ul>

      <h2 className="mt-16 text-3xl">과제</h2>
      <ul className="flex list-disc flex-col gap-2">
        <li>코모 (모각코) 세미나마다 최소 1번</li>
        <li>상호 채점과 코드리뷰</li>
      </ul>
    </div>
  );
};
