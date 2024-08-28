import { CodeSnippet } from '@/components/CodeSnippet';
import { InlineCode } from '@/components/InlineCode';
import { SlideContent } from '@/components/SlideContent';
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

export const WebBasic = () => {
  return (
    <Slides
      slides={[
        {
          title: '역사',
          content: (
            <div className="flex gap-16">
              <div>
                <h2 className="mb-16 text-center">웹의 역사</h2>
                <SlideContent
                  title="1969: 인터넷의 탄생"
                  content="미국 vs 소련 냉전의 영향으로 정보를 더 빠르게 주고받기 위해 인터넷 발달"
                />
                <SlideContent
                  title="1990: 웹의 시작"
                  content="팀 버너스리가 WWW를 개발하며 첫 웹 브라우저가 출시"
                />
                <SlideContent
                  title="1995: 닷컴 붐과 버블"
                  content="인터넷 기업의 급성장, e-commerce 시작"
                />
                <SlideContent
                  title="2000: 웹 2.0 시대"
                  content="소셜 미디어 등장, 사용자 생성 콘텐츠 증가"
                />
                <SlideContent
                  title="2010: 모바일 웹 시대"
                  content="스마트폰 보급 확대, 반응형 웹 디자인 중요성 증가"
                />
                <SlideContent
                  title="2020: 또 다른 변화?"
                  content="AI, 블록체인 등등"
                />
              </div>
              <div>
                <h2 className="mb-16 text-center">HTML, CSS, JS의 역사</h2>
                <SlideContent
                  title="1989: HTML 탄생"
                  content="팀 버너스리가 HTML을 개발하여 웹 문서 구조화"
                />
                <SlideContent
                  title="1994: CSS 등장"
                  content="하킴 와이 브라우저가 CSS를 제안, 웹 디자인 혁신"
                />
                <SlideContent
                  title="1995-1999: JavaScript 개발"
                  content="넷스케이프에서 JavaScript 개발, 동적 웹 페이지 가능"
                />
                <SlideContent
                  title="2000-2010: 웹 표준화"
                  content="W3C 주도로 HTML, CSS, JS 표준화 진행"
                />
                <SlideContent
                  title="2010-현재: 모던 웹 기술"
                  content="HTML5, CSS3, ES6+ 등 새로운 웹 기술 등장 및 발전"
                />
              </div>
            </div>
          ),
        },
        {
          title: '역사에서 알 수 있는 포인트들',
          content: (
            <ul className="flex flex-col gap-12">
              <li>웹은 처음에 문서를 보는 도구로 만들어졌다</li>
              <li>표준 없이 꽤 오랜 기간을 지나왔다</li>
              <li>계속해서 새로운 기술이 등장하고 발전하고 있다</li>
            </ul>
          ),
        },
        {
          title: '역사를 보면 이해가 되는 웹의 특징',
          content: (
            <div className="flex flex-col items-center gap-12">
              <ul className="flex flex-col gap-12">
                <li>자바스크립트의 이해할 수 없는 동작들 (baNaNa)</li>
                <li>
                  CSS의 <InlineCode code="float" />, HTML의{' '}
                  <InlineCode code="align" />, JS의 <InlineCode code="var" /> 등
                  <i className="font-semibold">이건 왜 있지?</i> 라는 생각이
                  드는 여러 구시대의 기능들
                </li>
                <li>
                  기업도 기술도 뭔가 하나가 중심이 잡혀 있지 않은, 모든 구성원이
                  참여하고 경쟁하고 발전시키는 생태계 <br />
                  <b className="text-base text-slate-500">
                    React, Svelte, Next.js, Remix, Web Component, WASM, ...
                  </b>
                </li>
              </ul>
              <h2>덕지덕지</h2>
            </div>
          ),
        },
        {
          title: '매우매우 간단히 설명하는 브라우저의 동작',
          content: (
            <div className="flex flex-col gap-16">
              <ol className="flex list-decimal flex-col gap-4">
                <li>사용자가 주소창에 URL을 입력한다</li>
                <li>서버에서 HTML을 받아온다</li>
                <li>
                  받아온 HTML을 파싱하면서 렌더링한다
                  <br />
                  <b className="text-base">
                    이 과정에서, 필요한 CSS, JS, image 등이 있다면 로드하고
                    수행한다
                  </b>
                </li>
              </ol>
              <h2>개발자 도구로 직접 확인해보기</h2>
            </div>
          ),
        },
        {
          title: 'HTML이란?',
          content: (
            <div className="flex flex-col gap-16">
              <h2>Hyper Text Markup Language</h2>
              <div className="flex gap-8">
                <ul className="flex flex-col gap-6">
                  <li>웹 문서의 구조를 정의하는 언어</li>
                  <li>태그를 사용하여 문서의 구조를 정의</li>
                  <li>태그는 속성을 가질 수 있음</li>
                </ul>
                <CodeSnippet
                  code={[
                    '<!DOCTYPE html>',
                    '<html lang="en">',
                    '  <head>',
                    '    <meta charset="UTF-8">',
                    '    <title>Document</title>',
                    '  </head>',
                    '  <body>',
                    '    <h1>Hello, World!</h1>',
                    '  </body>',
                    '</html>',
                  ]}
                  language="html"
                />
              </div>
            </div>
          ),
        },
        {
          title: 'HTML 태그들',
          content: (
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h2>약 130여 개의 태그가 존재한다</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>태그</TableHead>
                      <TableHead>의미</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>h1, h2, h3, h4, h5, h6</TableCell>
                      <TableCell>
                        제목을 나타내는 태그, 숫자가 커질수록 중요도가 낮아짐
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>p</TableCell>
                      <TableCell>문단을 나타내는 태그</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>span</TableCell>
                      <TableCell>인라인 요소를 그룹화하는 태그</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>div</TableCell>
                      <TableCell>블록 레벨 요소를 그룹화하는 태그</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>input</TableCell>
                      <TableCell>사용자 입력을 받는 태그</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>script</TableCell>
                      <TableCell>JavaScript 코드를 포함하는 태그</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>head</TableCell>
                      <TableCell>문서의 메타데이터를 포함하는 태그</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>body</TableCell>
                      <TableCell>문서의 본문 내용을 포함하는 태그</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>...</TableCell>
                      <TableCell>...</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div>
                <h2>
                  하지만, 이전보다 웹 시멘틱의 중요도가 많이 낮아지고 있음
                </h2>
                <p className="mt-8 text-xl leading-10">
                  section, article, header, footer 등은 모두{' '}
                  <InlineCode code="div" />로 퉁쳐지고 있고,
                  <br />
                  <InlineCode code="table" /> 같은 특수 태그조차도 div 로
                  대체되고
                  <br />
                  <InlineCode code="datalist" /> 같은 태그는 사용되지도 않는
                  추세
                </p>
                <p className="mt-8 text-xl leading-10">
                  따라서 지금은 head / body / script / meta 등을 제외하면
                  <br /> 자주 쓰는 태그는 사실상 <InlineCode code="div" />,{' '}
                  <InlineCode code="input" />, <InlineCode code="a" />,{' '}
                  <InlineCode code="img" />, <InlineCode code="button" /> 정도
                </p>
                <p className="mt-8 text-xl leading-10">
                  따라서 여러분은 이 태그들을 모두 공부할 필요는 없지만,{' '}
                  <strong>왜 공부할 필요가 없는지</strong> 반드시 이해해야
                  합니다
                </p>
              </div>
            </div>
          ),
        },
        {
          title: 'CSS란?',
          content: (
            <div className="flex flex-col gap-16">
              <h2>Cascading Style Sheets</h2>
              <div className="flex gap-8">
                <ul className="flex flex-col gap-6">
                  <li>웹 문서의 스타일을 정의하는 언어</li>
                  <li>선택자와 속성을 통해 문서의 구조를 정의</li>
                </ul>
                <CodeSnippet
                  code={[
                    '.title {',
                    '  color: red;',
                    '  font-size: 24px;',
                    '}',
                    '',
                    '.title > button:not(:disabled):hover {',
                    '  color: blue;',
                    '  cursor: not-allowed;',
                    '}',
                  ]}
                  language="css"
                />
              </div>
            </div>
          ),
        },
        {
          title: 'CSS 속성들',
          content: (
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h2>얘도 매우 많다</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'background-color',
                    'color',
                    'flex',
                    'grid',
                    'transform',
                    'transition',
                    'animation',
                    'box-shadow',
                    'border-radius',
                    'font-size',
                    'font-weight',
                    'font-family',
                    'text-align',
                    'text-decoration',
                    'line-height',
                    'letter-spacing',
                    'margin',
                    'padding',
                    'width',
                    'height',
                    'position',
                    'display',
                    'z-index',
                    'overflow',
                    'opacity',
                    'cursor',
                    'visibility',
                    'border',
                    'outline',
                    'box-sizing',
                    'text-transform',
                    'white-space',
                    'word-wrap',
                    'word-break',
                    'vertical-align',
                    'list-style',
                    'float',
                    'clear',
                    'content',
                    'filter',
                    'backdrop-filter',
                    'clip-path',
                    'mask',
                    'pointer-events',
                    'user-select',
                    'resize',
                    'scroll-behavior',
                    'object-fit',
                    'object-position',
                    'perspective',
                    'backface-visibility',
                    'will-change',
                    'columns',
                    'column-gap',
                    'row-gap',
                    'gap',
                    'place-items',
                    'place-content',
                    'align-items',
                    'justify-content',
                  ].map((d) => (
                    <Badge key={d}>{d}</Badge>
                  ))}
                  <Badge className="p-0">
                    <Skeleton className="h-full w-20" />
                    ...(훨씬 많음)
                  </Badge>
                </div>
              </div>
              <div>
                <h2>레거시가 많기도 하고, 쓰는 거만 쓰는 느낌</h2>
                <p className="mt-8 text-xl leading-10">
                  CSS는 html과는 다른 이유로, 각 속성이 모두 다르긴 한데 그냥
                  몰라도 되는 느낌이 강하다
                  <br />
                  <i>쓰던 걸로도 충분히 편한데 왜 옛날 것도 달달 외워야 해?</i>
                </p>
                <p className="mt-8 text-xl leading-10">
                  색상 관련: <InlineCode code="color" />{' '}
                  <InlineCode code="background" />
                  <br />
                  레이아웃 관련: <InlineCode code="flex" />{' '}
                  <InlineCode code="grid" />
                  <br />
                  크기 관련:
                  <InlineCode code="width" /> <InlineCode code="height" />
                  <br />
                  여백 관련:
                  <InlineCode code="margin" /> <InlineCode code="padding" />
                  <br />
                  텍스트 관련:
                  <InlineCode code="font-size" />{' '}
                  <InlineCode code="font-weight" />{' '}
                  <InlineCode code="text-align" />{' '}
                  <InlineCode code="line-height" />
                  <br />
                  기타:
                  <InlineCode code="position" /> <InlineCode code="display" />{' '}
                  등
                </p>
                <p className="mt-8 text-xl leading-10">
                  CSS 는 &quot;이 정도 알면 됐다&quot; 입니다
                </p>
              </div>
            </div>
          ),
        },
        {
          title: 'JavaScript란?',
          content: (
            <div className="flex flex-col gap-16">
              <h2>JavaScript (이름 잘못 지음)</h2>
              <div className="grid grid-cols-2 gap-8">
                <ul className="flex flex-col gap-6">
                  <li>웹 문서의 동적인 기능을 담당하는 언어</li>
                  <li>이벤트 처리, DOM 조작, 비동기 처리 등</li>
                  <li>2010년대 들어서는 백엔드 등 다양한 분야에서도 사용</li>
                </ul>
                <CodeSnippet
                  code={[
                    'document.querySelector(".title").addEventListener("click", () => {',
                    '  alert("Hello, world!");',
                    '});',
                  ]}
                  language="javascript"
                />
              </div>
            </div>
          ),
        },
        {
          title: 'JavaScript 기초',
          content: (
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center gap-8 leading-10">
                <p>
                  우리는 TypeScript로 시작할 거고, 그것도 React 에서 자주 쓰는
                  TypeScript 문법에 익숙해져야 하는 것이기에 JavaScript를 너무
                  깊게 보진 않겠습니다
                </p>
                <p>
                  이미 JavaScript 를 할 줄 아시는 분들을 위해 조금 스포하자면,
                  <br />
                  <InlineCode code="for문" />
                  이나 <InlineCode code="let" />, <InlineCode code="function" />
                  , <InlineCode code="this" /> 등 은 거의/아예 사용하지 않습니다
                </p>
                <p>
                  물론 JavaScript를 잘 하는 것은 프론트엔드 개발자에게 너무나도
                  중요하고 기본적인 소양입니다. 세미나 시간이 너무 짧아서
                  이번에만 포기했을 뿐
                </p>
              </div>

              <CodeSnippet
                code={[
                  '// 변수 선언',
                  'const a = 1;',
                  '',
                  '// 함수 선언',
                  'const add = (a, b) => a + b;',
                  '',
                  '// 객체 선언',
                  'const obj = {',
                  '  name: "John",',
                  '  age: 20,',
                  '};',
                  '',
                  '// 배열 선언',
                  'const arr = [1, 2, 3];',
                  '',
                  '// 조건문',
                  'if (a === 1) {',
                  '  console.log("a is 1");',
                  '}',
                ]}
                language="javascript"
              />
            </div>
          ),
        },
        {
          title: 'TypeScript란?',
          content: (
            <AssetDescriptionLayout
              description={[
                'JavaScript 에 정적 타입 검사 기능을 더한 Superset 언어',
                '컴파일(트랜스파일) 시 JavaScript로 변환됨',
                'JavaScript vs TypeScript 에서 이제는 TypeScript가 압승',
                '오히려 처음 배우는 입장에서도, 뭘 할 수 있고 하면 안 되는지 더 빨리 알 수 있는 TypeScript가 더 유리',
              ]}
              asset={
                <CodeSnippet
                  language="typescript"
                  code={[
                    `const x = 1;`,
                    `const add = (a: number, b: number) => a + b;`,
                  ]}
                />
              }
            />
          ),
        },
        {
          title: 'TypeScript와 JavaScript의 차이',
          content: (
            <AssetDescriptionLayout
              description={['정적 타입 검사를 수행해 준다!']}
              asset={
                <>
                  <CodeSnippet
                    language="javascript"
                    code={[
                      `// JavaScript`,
                      `const getName = (person) => person.name;`,
                      `getName({ nmae: 'Hyunmin' }); // undefined`,
                    ]}
                  />
                  <CodeSnippet
                    language="typescript"
                    code={[
                      `// TypeScript`,
                      `const getName = (person: { name: string }) => person.name;`,
                      `getName({ nmae: 'Hyunmin' }); // Type Error`,
                    ]}
                  />
                </>
              }
            />
          ),
        },
      ]}
    />
  );
};
