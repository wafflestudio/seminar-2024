import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const initializeProjectLecture = getLectureItem({
  title: '프로젝트 생성하기',
  description: '프로젝트 생성 후 코드 둘러보기',
  date: new Date('2024-09-04'),
  element: (
    <Slides
      slides={[
        {
          title: 'create-vite',
          content: (
            <AssetDescriptionLayout
              description={[
                'vite로 세팅된 리액트 SPA 어플리케이션을 생성',
                <>
                  <InlineCode code="yarn" /> 이{' '}
                  <InlineCode code="create-vite" /> CLI를 이용해서
                  보일러플레이트 작성
                </>,
              ]}
              asset={
                <div>
                  <ExternalLink href="https://ko.vitejs.dev/guide/#scaffolding-your-first-vite-project" />
                  <CodeSnippet code={['yarn create vite']} language="shell" />
                  <div>
                    <InlineCode code="React" /> 선택
                  </div>
                  <div className="mt-4">
                    <InlineCode code="TypeScript + SWC" /> 선택
                  </div>
                </div>
              }
            />
          ),
        },
        {
          title: '코드 뜯어보기',
          content: (
            <AssetDescriptionLayout
              description={[
                '간단한 counter 예제',
                '라이브 코딩으로 확인해봅시다',
                '1. HTML 구조 파악하기',
                '2. a의 href 와 target 속성',
                '3. img 의 src 와 alt 속성',
                '4. button 의 onClick 속성',
                '5. className 이 CSS에서 어떻게 적용되는지',
                '6. CSS 가지고 놀아보기',
                '7. react 의 useState 간단하게만 살펴보기',
              ]}
              asset={
                <div>
                  <CodeSnippet
                    code={[
                      "import { useState } from 'react'",
                      "import reactLogo from './assets/react.svg'",
                      "import viteLogo from '/vite.svg'",
                      "import './App.css'",
                      '',
                      'function App() {',
                      '  const [count, setCount] = useState(0)',
                      '',
                      '  return (',
                      '    <>',
                      '      <div>',
                      '        <a href="https://vitejs.dev" target="_blank">',
                      '          <img src={viteLogo} className="logo" alt="Vite logo" />',
                      '        </a>',
                      '        <a href="https://react.dev" target="_blank">',
                      '          <img src={reactLogo} className="logo react" alt="React logo" />',
                      '        </a>',
                      '      </div>',
                      '      <h1>Vite + React</h1>',
                      '      <div className="card">',
                      '        <button onClick={() => setCount((count) => count + 1)}>',
                      '          count is {count}',
                      '        </button>',
                      '        <p>',
                      '          Edit <code>src/App.tsx</code> and save to test HMR',
                      '        </p>',
                      '      </div>',
                      '      <p className="read-the-docs">',
                      '        Click on the Vite and React logos to learn more',
                      '      </p>',
                      '    </>',
                      '  )',
                      '}',
                      '',
                      'export default App',
                    ]}
                    language="tsx"
                  />
                </div>
              }
            />
          ),
        },
        {
          title: 'vercel로 배포하기',
          content: (
            <div>
              <div>여기는 100% 라이브코딩으로 보여드립니다</div>
              <div>
                세미나 녹화 영상이 제공될 예정이니, 과제 진행 시 참고해 주세요!
              </div>
            </div>
          ),
        },
      ]}
    />
  ),
});
