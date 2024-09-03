import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

import templateClonePng from './template-clone.png';
import templateCreatePng from './template-create.png';
import templateRepositoryPng from './template-repository.png';

export const initializeProjectLecture = getLectureItem({
  title: '프로젝트 생성하기',
  description: '프로젝트 생성 후 코드 둘러보기',
  date: new Date('2024-09-04'),
  element: (
    <Slides
      slides={[
        {
          title: '템플릿 repository',
          content: (
            <AssetDescriptionLayout
              description={[
                '보통은 create-vite 와 같은 CLI를 이용합니다',
                '세미나에서는 제가 만들어 둔 템플릿을 이용하겠습니다',
                <ExternalLink
                  key="link"
                  label="seminar-2024-frontend-template"
                  href="https://github.com/wafflestudio/seminar-2024-frontend-template"
                />,
              ]}
              asset={
                <div>
                  <img
                    src={templateRepositoryPng}
                    alt="github-template-repository"
                  />
                </div>
              }
            />
          ),
        },
        {
          title: '템플릿 repository',
          content: (
            <AssetDescriptionLayout
              description={['이름 넣고 create repository']}
              asset={
                <div>
                  <img
                    src={templateCreatePng}
                    alt="github-template-repository"
                  />
                </div>
              }
            />
          ),
        },
        {
          title: '템플릿 repository',
          content: (
            <AssetDescriptionLayout
              description={[
                '생성되면 git clone한 다음 vscode 등 IDE로 열면 됩니다',
              ]}
              asset={
                <div>
                  <img
                    src={templateClonePng}
                    alt="github-template-repository"
                  />
                </div>
              }
            />
          ),
        },
        {
          title: '템플릿 repository 이용 시 유의사항',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                <InlineCode code="main" />
                브랜치에 바로 푸시할 수 없고, 반드시 PR을 올리고 머지해야
                합니다.
              </div>
              <div>
                PR을 올리면 자동화 테스트가 돌아가며, ci가 통과해야 머지할 수
                있습니다.
              </div>
              <div>PR은 작게작게 (최대 300줄) 하시는 걸 추천드립니다.</div>
              <div>
                로컬에서 <InlineCode code="yarn check-all" /> 이 통과하는지
                확인하면 됩니다.
              </div>
              <div className="font-extrabold">
                이건 제가 설정해둔 거라 구글링해도 안 나올 가능성이 높습니다.
                CI가 터져서 막혔다면 그냥 저를 멘션해 주세요.
              </div>
            </div>
          ),
        },
        {
          title: '템플릿 repository 이용 시 유의사항',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                <InlineCode code="eslint.config.js" /> 파일과{' '}
                <InlineCode code=".github" /> 폴더는 수정하지 말아 주세요.
              </div>
              <div>
                이외에도 <InlineCode code="package.json" />을 건드려서 CI가
                통과하게 만드는 것도 물론 불가능합니다.
              </div>
              <div>뭐가 잘 안 되면 차라리 저를 불러 주세요!</div>
            </div>
          ),
        },
        {
          title: '코드 뜯어보기 (라이브코딩)',
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
