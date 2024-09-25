import { ArrowRightIcon } from '@radix-ui/react-icons';

import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { StackBadge } from '@/components/StackBadge';
import { getLectureItem } from '@/lectures';

import cssIsAwesomeGif from './cssisawesome.gif';
import cssIsAwesomeWebp from './cssisawesome.webp';

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
              <div className="mb-4 text-2xl font-bold">
                다행히 우리가 공부하지 않아도 되는 것:
              </div>
              <ul className="mb-6 ml-6 list-disc space-y-2">
                <li>예쁘게 디자인하기</li>
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
                <StackBadge stack="CSS" /> (Cascading Style Sheets)
              </div>
              <div>브라우저 DOM 요소들에 스타일을 먹이는 언어</div>
              <div>
                &apos;프론트 한 번 해볼까?&apos; 하는 많은 백엔드 개발자들을
                좌절시키는 언어
              </div>
              <div className="my-6 flex flex-wrap gap-4">
                <img src={cssIsAwesomeGif} className="object-contain" />
                <img
                  src={cssIsAwesomeWebp}
                  width={500}
                  className="object-contain"
                />
              </div>
              <div>지금까지 과제 진행하시면서, css 할 만 하셨나요?</div>
            </div>
          ),
        },
        {
          title: 'CSS는 왜 힘들고 어려울까?',
          content: (
            <div className="flex flex-col gap-8">
              <div>
                세미나 1에서 말씀드렸듯, css가 탄생할 당시 웹은 문서를 보는
                도구였습니다
              </div>
              <div>
                문서를 보는 도구에 적합한 속성들이나 선택자 설계를
                어플리케이션에 적용하려니 어려울 수밖에
              </div>
              <div>
                그래서 css를 쉽게 하기 위한 많은 도구들이 있는데, 그래서 더
                어렵습니다. 뭘 써야 돼?
              </div>
              <div>+) 사파리 같은 트롤 브라우저</div>
            </div>
          ),
        },
        {
          title: 'CSS 덜 힘들게 하는 법 두 가지',
          content: (
            <div className="flex flex-col gap-8 text-4xl">
              <div>속성들 잘 알고 쓰기</div>
              <div>생산성 높이기</div>
            </div>
          ),
        },
        {
          title: '특히 정말 중요한 속성: flex',
          content: (
            <div>
              세미나에서 설명하기는 시간 아깝기도 하고 진짜 좋은 블로그가 있어서
              <ExternalLink href="https://studiomeal.com/archives/197" /> 이걸로
              대체합니다. 각자 공부해주세요!
            </div>
          ),
        },
        {
          title: 'CSS 생산성',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              속성을 모두 다 빠삭하게 아는 사람이어도, css는 근본적으로 어렵고
              더럽다
            </div>
          ),
        },
        {
          title: 'Plain CSS',
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
              <p className="my-6 text-center">가장 기본적인 형태</p>
              <p className="flex items-center gap-2">
                🤔 className 과 css 사이에 연결점이 없음 <ArrowRightIcon />{' '}
                유지보수가 어려움 (안 쓰는 css 찾기 등)
              </p>
              <p className="flex items-center gap-2">
                🤔 className 이 전역적으로 적용됨 <ArrowRightIcon /> 충돌
                가능성. 다른 파일에서 동일한 className 을 사용해버리면?
              </p>
              <p className="flex items-center gap-2">
                🤔 파일 두 개를 개발해야 됨. 귀찮음
              </p>
              <p className="flex items-center gap-2">
                🤔 파일 두 개를 개발해야 됨. 귀찮음
              </p>
            </div>
          ),
        },
        {
          title: 'BEM (2010년)',
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
                BEM 방식으로 className을 작성 <ArrowRightIcon /> (아마도) 이름이
                안 겹치지 않을까?
              </p>
              <p className="flex items-center gap-2">
                하지만 BEM을 싫어하는 사람들도 있고, 별로 많은 문제를 해결해주지
                않았다
              </p>
            </div>
          ),
        },
        {
          title: 'CSS Modules (2015)',
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
                css 파일을 모듈화하여 사용 <ArrowRightIcon /> 연결점이 생김.
                자동완성 등
              </p>
              <p className="flex items-center gap-2">
                className이 <InlineCode code="logo_x56a8x" /> 이런 식으로
                자동으로 해싱되어서 다른 파일과 겹칠 일이 없음
              </p>
            </div>
          ),
        },
        {
          title: 'CSS Modules 라이브코딩',
          content: <div>어떻게 들어가는지 한 번 봅시다</div>,
        },
        {
          title: 'CSS 생산성 - CSS in JS (2014~)',
          content: (
            <div className="flex flex-col gap-8">
              <div>
                <StackBadge stack="styled-components" />,{' '}
                <StackBadge stack="emotion" /> 등 라이브러리의 도움을 받아야
                한다
              </div>
              <CodeSnippet
                code={[
                  `import styled from 'styled-components'`,
                  `// ...`,
                  `const Wrapper = styled.div\``,
                  `  color: red;`,
                  `  margin: 2px 4px;`,
                  `\`;`,
                  `// ...`,
                  `return (`,
                  `  <Wrapper>`,
                  `    Hello World!`,
                  `  </Wrapper>`,
                  `)`,
                ]}
                language="tsx"
              />
              <div>
                JavaScript 파일 안에 css 정보를 같이 두기 때문에, 연결점이
                있어서 유지보수가 쉬움
              </div>
              <div>클래스명도 자동으로 해싱됨</div>
              <div>다만 성능 문제가 조금..</div>
            </div>
          ),
        },
        {
          title: 'CSS in JS 라이브코딩',
          content: <div>어떻게 돌아가는지 한 번 봅시다</div>,
        },
        {
          title: 'CSS 생산성 - Atomic CSS (대표주자 Tailwind: 2017~)',
          content: (
            <div className="flex flex-col gap-8">
              <CodeSnippet
                code={[
                  `return <div className="text-red-500 my-0.5 mx-1">Logo</div>`,
                ]}
                language="jsx"
              />
              <div>아예 패러다임을 전환</div>
              <div>선택자를 생략</div>
              <div>
                자주 사용하는 스타일들에 해당하는 유틸성 className을 미리
                만들어두고, className을 조립해서 사용
              </div>
            </div>
          ),
        },
        {
          title: 'TailwindCSS 라이브코딩',
          content: <div>어떻게 돌아가는지 한 번 봅시다</div>,
        },
        {
          title: 'CSS 생산성 - 그래서 어떡하라고?',
          content: (
            <div className="flex flex-col gap-6 text-center">
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
                저는 <StackBadge stack="Tailwind CSS" /> 를 가장 선호합니다
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
            <div className="flex flex-col gap-4">
              <div>미리 만들어져있는 이쁜 시스템들이 있습니다</div>
              <div>
                디자이너가 디자인해주는 상황이면 필요없지만, 어드민을 구축하거나
                직접 디자인을 해야 할 경우 아주 편하게 사용 가능합니다
              </div>
              <div>하나씩 문서 들어가서 볼까요?</div>
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
                  <p className="mb-4">TMI) 이 강의자료는 shadcn을 썼습니다</p>
                  <ExternalLink href="https://ui.shadcn.com/" />
                </div>
              </div>
            </div>
          ),
        },
        {
          title: '시안 보고 구현하는 법',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                디자이너분들은 보통 <StackBadge stack="Figma" />나{' '}
                <StackBadge stack="Zeplin" /> 등을 이용해서 디자인하고 시안을
                주십니다
              </div>
              <div>
                요즘은 <StackBadge stack="Figma" />가 대세
              </div>
              <div>
                위에서 언급한 기술들 중 Plain CSS는 거르고, 제일 근본있다고 할
                수 있는 <StackBadge stack="CSS Modules" /> 를 이용해서 SNUTT
                모바일 로그인화면 라이브코딩 하겠습니다
              </div>
              <ExternalLink
                label="SNUTT 모바일 피그마"
                href="https://www.figma.com/design/7hZ00moj1GUEqcZAcQBdJp/Frontend-Seminar-Clone?m=dev"
              />
            </div>
          ),
        },
      ]}
    />
  ),
});
