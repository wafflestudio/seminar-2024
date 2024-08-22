import { Badge } from '@/designsystem/ui/badge';
import { Skeleton } from '@/designsystem/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/designsystem/ui/table';

export const GoodDeveloper = () => {
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

export const SeminarContent = () => {
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

export const SeminarGoal = () => {
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

export const SeminarDiff = () => {
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
