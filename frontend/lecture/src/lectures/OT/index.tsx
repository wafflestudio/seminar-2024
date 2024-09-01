import { Description } from '@/components/Description';
import { ExampleIframe } from '@/components/ExampleIframe';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { Slides } from '@/components/Slides';
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
import { getLectureItem } from '@/lectures';

export const otLecture = getLectureItem({
  title: 'OT',
  description: '세미나 목표, 방식, 과제, 평가',
  date: new Date('2024-09-04'),
  element: (
    <Slides
      slides={[
        {
          title: '자기소개',
          content: (
            <AssetDescriptionLayout
              asset={
                <div className="flex h-full items-center">
                  <img
                    className="w-72 rounded-full"
                    src="https://avatars.githubusercontent.com/u/39977696?v=4"
                  />
                </div>
              }
              description={[
                '우현민 (컴퓨터공학부 19)',
                '프론트엔드 개발 4년차 (2021.03.29 ~ )',
                '학부 3학년 1학기 복학생',
                '와플스튜디오 18.5기 루키',
                '2021~2022 동아리장',
                '2021년 리액트 세미나장',
                '2022년 리액트 세미나 관여',
                '2023년 리액트 세미나 조교',
                '2024년 리액트 세미나장',
                '2022.09 ~ 2024.05 SNUTT 팀원',
              ]}
            />
          ),
        },
        {
          title: '프론트엔드란?',
          content: (
            <Description
              items={[
                { key: '넓은 의미', value: '사용자와 상호작용하는 부분' },
                { key: '좁은 의미', value: '웹 어플리케이션 개발' },
              ]}
            />
          ),
        },
        {
          title: '프론트엔드란?',
          content: (
            <div>
              <h3 className="text-center text-2xl">우리가 쓰는 웹사이트들</h3>
              <div className="mt-6 grid grid-cols-2 gap-20">
                <ExampleIframe title="무신사" src={'https://musinsa.com'} />
                <ExampleIframe
                  title="와플스튜디오"
                  src={'https://wafflestudio.com'}
                />
                <ExampleIframe
                  title="카카오맵"
                  src={'https://map.kakao.com'}
                  className="col-span-2"
                />
              </div>
            </div>
          ),
        },
        {
          title: '프론트엔드란?',
          content: (
            <AssetDescriptionLayout
              description={[
                '웹뿐만 아니라 앱에도: 토스에 있는 대부분의 화면은 웹으로 되어 있다',
              ]}
              asset={
                <img
                  src="https://pbs.twimg.com/media/FNxV63yUYAAs1MQ?format=jpg&name=medium"
                  className="w-full"
                />
              }
            />
          ),
        },
        {
          title: '프론트엔드란?',
          content: (
            <div className="flex flex-col gap-20">
              <ExampleIframe
                title="three.js"
                className="w-[600px]"
                src="https://threejs.org/examples/#webgl_animation_keyframes"
              />
              <ExampleIframe
                title="css animations"
                className="w-[600px]"
                src="https://animate.style/"
              />
            </div>
          ),
        },
        {
          title: '세미나 목표',
          content: (
            <div className="flex flex-col items-center gap-16">
              <h2 className="text-3xl">만들어내는 건 누구나 할 수 있다</h2>
              <h2 className="text-3xl">
                좋은 개발자는 <strong>&quot;잘&quot;</strong> 만들어야 한다
              </h2>
              <p>
                ..., 재사용성, 결합도, 기술부채, 테스트, 기술동향, 패러다임, ...
              </p>
              <h2 className="text-3xl">
                하지만 두 달 세미나는 &quot;만들어내는 거&quot;를 학습하기에도
                부족한 시간
              </h2>
            </div>
          ),
        },
        {
          title: '세미나 목표',
          content: (
            <div className="flex flex-col items-center">
              <h3 className="text-3xl">
                세미나장의 고민: 세미나에서 뭘 다뤄야 할까?
              </h3>
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
                  '에디터에 유창해지기',
                  'Redux 등 client-side 상태관리 툴',
                  'react-query 등 server-side 상태관리 툴',
                  'React Context',
                  '의존성 주입',
                  '컴포넌트 합성',
                  '라우팅',
                  '브라우저 히스토리와 캐시',
                  'Service Worker',
                  'HTTP',
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
                    variant={
                      (['secondary', 'default', 'outline'] as const)[index % 3]
                    }
                    className="text-xl"
                  >
                    {item}
                  </Badge>
                ))}
                <Skeleton className="h-8 w-full" />
              </div>
            </div>
          ),
        },
        {
          title: '세미나 목표',
          content: (
            <div>
              <p>
                어차피 다 다루지 못한다면, 앞으로 계속 함께 성장할 수 있도록
              </p>
              <ul className="mt-20 flex list-disc flex-col gap-8 pl-10">
                <li>
                  와플스튜디오에서 활동할 수 있는 최소 수준의 프론트엔드 실력
                </li>
                <li>와플스튜디오에서 계속 성장할 수 있는 마인드셋</li>
                <li>친목</li>
                <li className="font-bold">재미 & 성취감</li>
              </ul>
            </div>
          ),
        },
        {
          title: '세미나 목표',
          content: (
            <div className="flex flex-col items-center gap-12">
              <p>그래서 좀 많이 바꿨습니다</p>
              <Table className="text-2xl">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">~작년</TableHead>
                    <TableHead className="text-center">올해</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      prev: (
                        <>
                          바닐라 <pre className="inline">html/css/js</pre>부터
                          시작
                        </>
                      ),
                      curr: (
                        <>
                          <pre className="inline">React + TypeScript</pre> 로
                          시작
                        </>
                      ),
                    },
                    {
                      prev: '라이브러리 사용 제한',
                      curr: '라이브러리 제한 없음',
                    },
                    {
                      prev: 'private 레포에서 개인과제',
                      curr: 'public 레포에서 조별과제',
                    },
                    {
                      prev: '질문을 정리해서 올려야 함',
                      curr: '모르겠을 때 더 편하게 질문',
                    },
                    {
                      prev: 'ppt / markdown 형태의 강의자료',
                      curr: 'React + TypeScript로 작성된 강의자료',
                    },
                    {
                      prev: '코드 리뷰 형태의 과제 채점',
                      curr: '(아직 고민중..)',
                    },
                  ].map((diff, index) => (
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
          ),
        },
        {
          title: '과제',
          content: (
            <div className="flex gap-4 text-3xl">
              세미나에서 하나도 안 알려줘놓고
              <i>할수있죠? 화이팅!</i>
              하는 과제
            </div>
          ),
        },
        {
          title: '질문',
          content: (
            <div className="flex flex-col items-center gap-8">
              <p>따라서 질문을 잘 하는 게 매우 중요합니다</p>
              <Description
                items={[
                  {
                    key: '누구한테?',
                    value: '조원, 세미나장, LLM (ChatGPT, Claude)',
                  },
                  {
                    key: '무엇을?',
                    value: (
                      <>
                        <p>
                          과제 진행 중 겪은 이해가 안 되는 동작이나,
                          <br />
                          어떻게 해결해야 할지 모르겠는 것,
                          <br />
                          또는 더 잘 하려면 어떻게 해야 하지? 같은 것
                        </p>
                      </>
                    ),
                  },
                  { key: '어떻게?', value: '조원 / 세미나장 -> Slack 으로' },
                  { key: '언제?', value: '언제든 (새벽도 괜찮습니다)' },
                ]}
              />
            </div>
          ),
        },
        {
          title: '조별과제',
          content: (
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl">목표</h2>
              <div className="flex gap-2">
                {['친목', '질문'].map((text) => (
                  <Badge key={text} className="text-xl">
                    {text}
                  </Badge>
                ))}
              </div>

              <h2 className="mt-16 text-3xl">왜?</h2>
              <ul className="flex list-disc flex-col gap-2">
                <li>세미나 두 달 동안 혼자여서 외로웠다는 예전 피드백</li>
                <li>서로 질문하고 토론하면서 더 많이 성장할 수 있지 않을까?</li>
                <li>
                  세미나 목표 중 하나인 <strong>친목</strong>에 큰 도움이 될 것
                  같다
                </li>
              </ul>

              <h2 className="mt-16 text-3xl">형태</h2>
              <ul className="flex list-disc flex-col gap-2">
                <li>서로 도움을 주고받는다</li>
                <li>상대가 혹시나 트롤이어도 발목잡히지는 않는 구조</li>
                <li>
                  조마다 세미나장 포함한 DM방을 생성해 드립니다
                  <p className="text-base text-slate-500">
                    각자 얼마나 기여하시는지 봐야 하고, 질문을 받아 드려야 해서
                    저는 항상 채팅방에 포함되어야 합니다
                  </p>
                </li>
                <li>
                  친목이나 과제 삽질 측면에서, 가능하면 비슷한 사람들끼리 배정
                  <p className="text-base text-slate-500">
                    학번이 비슷한 사람끼리, 같은 OS를 쓰는 사람끼리, 학교에서
                    거리 비슷한 사람끼리 등
                  </p>
                </li>
                <li>
                  코모 (모각코) 매 세미나마다 최소 1시간 최소 1번씩, 인증샷 필수
                  <br />
                  <b className="text-base font-medium text-slate-500">
                    설입이면 세상과 연애하기, 할리스, 커피어반, 커피빈, 관정
                    스터디룸, 토즈모임센터 등을 추천합니다
                  </b>
                </li>
                <li>상호 채점과 코드리뷰</li>
              </ul>
            </div>
          ),
        },
        {
          title: '평가',
          content: (
            <div className="flex flex-col gap-24">
              <section>
                <div className="flex items-center justify-between">
                  <h2 className="font-extrabold">세미나 통과 기준</h2>
                  <div className="mt-4 flex items-center justify-center gap-8 text-base">
                    참고) 이전 세미나 합격률
                    <dl className="grid w-fit grid-cols-2 gap-x-4 gap-y-2 border-2 p-2">
                      <dt>2021년</dt>
                      <dd>19 / 33</dd>
                      <dt>2022년</dt>
                      <dd>24 / 37</dd>
                      <dt>2023년</dt>
                      <dd>8 / 18</dd>
                    </dl>
                  </div>
                </div>
                <ul className="flex list-disc flex-col gap-4">
                  <li>모든 과제 통과</li>
                  <li>
                    출석 100%{' '}
                    <b className="text-base text-slate-500">
                      (합당한 이유가 있다면 비대면 참여 또는 결석 후 영상시청
                      가능)
                    </b>
                  </li>
                  <li>
                    세미나장, 운영팀, 조원이 종합적으로 판단했을 때 프리라이더로
                    보이지 않는 사람
                  </li>
                  <li>
                    본인 판단 하에{' '}
                    <strong>개발이 재미있고 계속 하고 싶은 사람</strong>
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="mb-4 font-extrabold">
                  평가 / 부정행위 / 공정성 관련 이것저것
                </h2>
                <ul className="flex list-disc flex-col gap-4">
                  <li>
                    와플스튜디오 {'=>'} 공부가 좀더 효율적일 수 있겠지만, 아무튼
                    한 만큼 배워가는 곳
                  </li>
                  <li>
                    <b>합격</b> 자체만으로는 좋은 거 하나도 없고, 공부 안 하고
                    통과하면 나만 더 힘들어지는 구조
                  </li>
                  <li>
                    개발 {'=>'} 커밋 기록 다 남고 슬랙 기록 다 세미나장이 볼 수
                    있고, 코드도 모두 오픈된 동네
                  </li>
                  <li>
                    구글링, GPT, Copilot, 세미나장/조원에게 질문, 조원 코드 복붙
                    모두 가능
                  </li>
                  <li>
                    <strong className="text-amber-500">
                      지속가능하지 않은 방식은 허용되지 않습니다.
                    </strong>
                    <b className="ml-4 text-base">
                      (ex: 잘하는 친구한테 대신 해달라고 부탁)
                    </b>
                  </li>
                </ul>
              </section>
            </div>
          ),
        },
      ]}
    />
  ),
});
