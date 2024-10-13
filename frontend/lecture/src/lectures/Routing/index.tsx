import { CodeSnippet } from '@/components/CodeSnippet';
import { Slides } from '@/components/Slides';
import { StackBadge } from '@/components/StackBadge';
import { getLectureItem } from '@/lectures';

import spaMpa from './spa-mpa.jpg';
import url from './url.png';

export const routingLecture = getLectureItem({
  title: '라우팅',
  description: '라우팅 기본 개념과 React Router 사용법',
  date: new Date('2024-10-16 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '이번 챕터 목표',
          content: (
            <div className="flex flex-col gap-4 text-xl">
              <p>
                흐름이 좀 이상하지만 과제 진행을 위해 오늘은 라우팅을 배워야
                해서 끼워넣은 챕터
              </p>
            </div>
          ),
        },
        {
          title: 'url의 구조',
          content: (
            <div className="flex flex-col gap-4 text-xl">
              <p>그동안 웹을 사용하셨으니 다들 익숙하실:</p>
              <img src={url} alt="url의 구조" />
              <p>
                path 부분이 바뀌면 동일한 웹사이트 내에서 페이지가 전환되는 형태
              </p>
            </div>
          ),
        },
        {
          title: '사실, 원래의 웹은 항상 html이 내려오는 방식이었습니다',
          content: (
            <div className="flex flex-col gap-4 text-xl">
              <img src={spaMpa} alt="SPA와 MPA의 차이" />
              <p>
                그런 옛날부터 이어지던 방식을 MPA라고 부르고, 지금 우리가 만드는
                방식을 SPA라고 부릅니다.
              </p>
              <ul className="list-disc pl-12">
                <li>MPA: Multi Page Application</li>
                <li>SPA: Single Page Application</li>
              </ul>
            </div>
          ),
        },
        {
          title: 'MPA와 SPA 각각 라우팅의 원리',
          content: (
            <div className="flex flex-col gap-4 text-xl">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="mb-2 text-2xl font-bold">MPA</h2>
                  <p>
                    접속 시 서버가 url을 보고 필요한 html을 빌드해서 내려줍니다
                  </p>
                </div>
                <div>
                  <h2 className="mb-2 text-2xl font-bold">SPA</h2>
                  <p>접속 시 서버는 무조건 index.html을 내려줍니다.</p>
                  <p>index.html이 JavaScript를 불러옵니다.</p>
                  <p>
                    JavaScript가 현재 브라우저 url을 보고 필요한 페이지를
                    렌더해주는 식입니다.
                  </p>
                  <p className="mt-8 text-base opacity-80">
                    그렇기 때문에 서버가 url 관계없이 무조건 index.html을
                    내려주도록 추가 설정을 해 줘야 하는데
                    <br />
                    과제에서 진행하시게 될 거예요
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: 'SPA에서 라우팅 구현하기',
          content: (
            <div className="flex flex-col gap-4 text-xl">
              <p>
                앞에서 말씀드린 대로 JavaScript로 브라우저 url을 체크하고
                조작하는 식으로 구현하는 건 쉽지 않습니다
              </p>
              <p>따라서 특별한 이유가 없다면 라이브러리의 도움을 받습니다</p>
              <div>
                그 중 가장 널리 쓰이는 대표적인 라이브러리{' '}
                <StackBadge stack="React Router" />
              </div>
            </div>
          ),
        },
        {
          title: 'react router 사용법',
          content: (
            <div className="flex flex-col gap-4 text-xl">
              <p>
                <StackBadge stack="React Router" /> 가 제공하는 라우터는 세
                종류가 있는데, 우리는 가장 무난한 BrowserRouter를 씁니다
              </p>
              <CodeSnippet
                code={[
                  `import { BrowserRouter, Routes, Route } from 'react-router-dom';`,
                  ``,
                  `import { MainPage } from './pages/MainPage';`,
                  `import { MyPage } from './pages/MyPage';`,
                  ``,
                  `const App = () => {`,
                  `  return (`,
                  `    <BrowserRouter>`,
                  `      <Routes>`,
                  `        <Route element={<MainPage />} path="/" />`,
                  `        <Route element={<MyPage />} path="/mypage" />`,
                  `      </Routes>`,
                  `    </BrowserRouter>`,
                  `  );`,
                  `};`,
                ]}
                language="tsx"
              />
              <p>가장 기본적인 형태</p>
            </div>
          ),
        },
        {
          title: '이번 과제에서 진행할 부분 라이브코딩 살짝',
          content: (
            <div className="flex flex-col gap-4 text-xl">
              <p>
                바텀 네비바를 통해 시간표 페이지와 마이페이지를 왔다갔다 할 수
                있도록 구현
              </p>
            </div>
          ),
        },
      ]}
    />
  ),
});
