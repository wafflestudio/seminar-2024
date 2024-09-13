import { ArrowRightIcon } from '@radix-ui/react-icons';

import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

import cssIsAwesome from './cssisawesome.gif';

export const stylingLecture = getLectureItem({
  title: '스타일링',
  description: 'inline style, css-in-js, css modules, atomic css',
  date: new Date('2024-10-02 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '스타일링',
          content: (
            <div>
              <div className="mb-4 text-2xl font-bold">
                프론트엔드 개발자의 역할:
              </div>
              <ul className="mb-6 ml-6 list-disc space-y-2">
                <li>디자인 시안대로 구현하기</li>
                <li>디자이너가 빼먹은거 알려주기 (반응형, 접근성 등)</li>
              </ul>
              <div className="mb-4 text-2xl font-bold">
                그래서 우리가 공부해야 하는 것:
              </div>
              <ul className="mb-6 ml-6 list-disc space-y-2">
                <li>디자인 시안을 보고 잘 구현하기</li>
                <li>반응형에 대한 이해</li>
                <li>접근성에 대한 이해</li>
              </ul>
              <div className="rounded-lg p-4 text-xl font-semibold">
                이번 세미나에서 다룰 것: 시안 보고 구현 잘 하는 법
              </div>
            </div>
          ),
        },
        {
          title: 'CSS',
          content: (
            <div>
              <div className="mb-4 text-2xl font-bold">
                CSS (Cascading Style Sheets)
              </div>
              <div>브라우저 DOM 요소들에 스타일을 먹이는 언어</div>
              <img src={cssIsAwesome} />
              <div>지금까지 과제 진행하시면서, css 할 만 하셨나요?</div>
            </div>
          ),
        },
        {
          title: 'CSS 덜 힘들게 하는 법',
          content: (
            <div>
              <div>좋은 속성들을 쓰기</div>
              <div>생산성 높이기</div>
            </div>
          ),
        },
        {
          title: 'CSS 속성 - flex',
          content: (
            <div>
              딴건 몰라도 flex는 진짜 중요합니다. 레이아웃 잡는 건 거의 flex로
              다 됩니다
              <br />
              <ExternalLink href="https://studiomeal.com/archives/197" />이
              블로그로 대체합니다
            </div>
          ),
        },
        {
          title: 'CSS 속성 - position',
          content: (
            <div>
              레이아웃상 있어야 할 위치를 무시하고 위치를 찍고 싶을 수 있습니다.
              이럴 때 position absolute 같은 걸 사용합니다.
              <br />
              하지만 남용하면 안 됩니다. 꼭 필요할 때만 사용
            </div>
          ),
        },
        {
          title: 'CSS 생산성',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>
                웹은 처음에 문서를 보는 도구로 만들어졌고, 그에 따라 css 등이
                발전했었다
              </p>
              <p>
                그러니까 CSS가 처음 만들어지고 설계될 당시에는
                <br />
                이렇게 프레임워크 기반으로 개발하고 컴포넌트 단위로 쪼개서
                개발하고 복잡한 디자인을 가진 걸 웹으로 만들지 몰랐다는 것
              </p>
            </div>
          ),
        },
        {
          title: 'CSS 생산성 - Plain CSS',
          content: (
            <div>
              <CodeSnippet
                code={[
                  `import './App.css'`,
                  `// ...`,
                  `<div className="logo">`,
                ]}
                language="jsx"
              />
              <CodeSnippet
                code={[`.logo {`, `  color: red;`, `  margin: 2px 4px;`, `}`]}
                language="css"
              />
              <p className="flex items-center gap-2">
                className 과 css 사이에 연결점이 없음 <ArrowRightIcon />{' '}
                유지보수가 어려움
              </p>
              <p className="flex items-center gap-2">
                className 이 전역적으로 적용됨 <ArrowRightIcon /> 충돌 가능성.
                다른 파일에서 동일한 className 을 사용해버리면?
              </p>
            </div>
          ),
        },
        {
          title: 'CSS 생산성 - Plain CSS + BEM (2010년)',
          content: (
            <div>
              <CodeSnippet
                code={[
                  `import './App.css'`,
                  `// ...`,
                  `<div className="header__logo">`,
                ]}
                language="jsx"
              />
              <CodeSnippet
                code={[
                  `.header__logo {`,
                  `  color: red;`,
                  `  margin: 2px 4px;`,
                  `}`,
                ]}
                language="css"
              />
              <p className="flex items-center gap-2">
                BEM 방식으로 className을 작성 <ArrowRightIcon /> 구조화된
                이름으로 겹치는 문제는 없어짐
              </p>
              <p className="flex items-center gap-2">
                하지만 여전히 연결점이 없으므로 유지보수가 어려움
              </p>
            </div>
          ),
        },
        {
          title: 'CSS 생산성 - CSS Modules (2015)',
          content: (
            <div>
              <CodeSnippet
                code={[
                  `import styles from './App.module.css'`,
                  `// ...`,
                  `<div className={styles.logo}>`,
                ]}
                language="jsx"
              />
              <CodeSnippet
                code={[`.logo {`, `  color: red;`, `  margin: 2px 4px;`, `}`]}
                language="css"
              />
              <p className="flex items-center gap-2">
                css 파일을 모듈화하여 사용 <ArrowRightIcon /> 연결점이 생김
              </p>
              <p className="flex items-center gap-2">
                className이 <InlineCode code="logo_x56a8x" /> 이런 식으로
                자동으로 해싱되어서 다른 파일과 겹칠 일이 없음
              </p>
            </div>
          ),
        },
        {
          title: 'CSS 생산성 - CSS in JS (2014~)',
          content: (
            <div>
              <div>styled-components, emotion 등 라이브러리를 사용</div>
              <CodeSnippet
                code={[
                  `import styled from 'styled-components'`,
                  `// ...`,
                  `const Logo = styled.div\``,
                  `  color: red;`,
                  `  margin: 2px 4px;`,
                  `\`;`,
                  `// ...`,
                  `return <Logo />`,
                ]}
                language="jsx"
              />
              <div>
                JavaScript 파일 안에 css 정보를 같이 두기 때문에, 연결점이
                있어서 유지보수가 쉬움
              </div>
              <div>클래스명도 자동으로 해싱됨</div>
            </div>
          ),
        },
        {
          title: 'CSS 생산성 - Tailwind (2017~)',
          content: (
            <div>
              <CodeSnippet
                code={[
                  `return <div className="text-red-500 my-0.5 mx-1">Logo</div>`,
                ]}
                language="jsx"
              />
              <div>아예 패러다임을 전환하여 utility-first 로 개발</div>
              <div>스타일 정보를 className에 모두 작성하는 방식</div>
            </div>
          ),
        },
        {
          title: 'CSS 생산성 - 그래서 어떡하라고?',
          content: (
            <div className="text-center">
              <div>
                요즘은 <InlineCode code="CSS Modules" />,{' '}
                <InlineCode code="CSS-in-JS" />, <InlineCode code="tailwind" />{' '}
                세 개가 가장 많이 사용되며, 어느 한 쪽이 최고라고 말할 수 없음
                <br />
                <b className="mt-2 text-base">
                  개발에서 도구는 종교와도 같은 것
                </b>
              </div>
              <div className="mt-5">취향에 맞는 걸 잘 찾아서 사용하자!</div>
              <div className="mt-5">
                저는 Tailwind 를 가장 선호합니다
                <br />
                <b className="mt-2 text-base">
                  왜 Tailwind 가 제일 괜찮은지 30분 정도 떠들 수 있긴 한데
                  아쉽지만 패스
                </b>
              </div>
            </div>
          ),
        },
        {
          title: '번외: CSS Framework',
          content: (
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-4">
                <img
                  src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                  alt="Bootstrap Logo"
                  className="mb-2 h-12"
                />
                <h3 className="mb-2 text-xl font-bold">Bootstrap</h3>
                <p className="mb-4">옛날에 짱많이쓰던거</p>
                <ExternalLink href="https://getbootstrap.com/" />
              </div>
              <div className="rounded-lg border p-4">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  alt="Ant Design Logo"
                  className="mb-2 h-12"
                />
                <h3 className="mb-2 text-xl font-bold">Ant Design</h3>
                <p className="mb-4">중국꺼</p>
                <ExternalLink href="https://ant.design/" />
              </div>
              <div className="rounded-lg border p-4">
                <img
                  src="https://mui.com/static/logo.png"
                  alt="Material-UI Logo"
                  className="mb-2 h-12"
                />
                <h3 className="mb-2 text-xl font-bold">Material-UI</h3>
                <p className="mb-4">구글꺼</p>
                <ExternalLink href="https://mui.com/" />
              </div>
              <div className="rounded-lg border p-4">
                <img
                  src="https://ui.shadcn.com/favicon.ico"
                  alt="shadcn/ui Logo"
                  className="mb-2 h-12"
                />
                <h3 className="mb-2 text-xl font-bold">shadcn/ui</h3>
                <p className="mb-4">이 강의자료는 shadcn을 썼습니다</p>
                <ExternalLink href="https://ui.shadcn.com/" />
              </div>
            </div>
          ),
        },
      ]}
    />
  ),
});
