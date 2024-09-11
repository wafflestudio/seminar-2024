import { CodeSnippet } from '@/components/CodeSnippet';
import { Description } from '@/components/Description';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { Separator } from '@/designsystem/ui/separator';
import { getLectureItem } from '@/lectures';

import hooksDepsErrorPng from './hooks-deps-error.png';

export const reactApisLecture = getLectureItem({
  title: '리액트 기능들',
  description:
    'Context API, useState, useEffect, useMemo, memo, useCallback, Custom Hooks',
  date: new Date('2024-09-11'),
  element: (
    <Slides
      slides={[
        {
          title: '목표',
          content: (
            <div className="text-center leading-10">
              리액트가 제공하는 더 많은 기능들 알아보기
              <br />
              알고 쓰기
              <br />
              사실, 제대로 공부하고 싶다면 공식문서를 읽는 게 가장 좋습니다
            </div>
          ),
        },
        {
          title: 'hooks: useState',
          content: (
            <div className="flex flex-col items-center gap-6">
              <ExternalLink
                href="https://ko.react.dev/reference/react/useState"
                label="공식문서"
              />
              <div>컴포넌트의 상태를 정의하는 훅</div>
              <Description
                items={[
                  { key: '파라미터', value: '초기값' },
                  { key: '반환한 배열 첫 번째 원소', value: '상태 값' },
                  {
                    key: '반환한 배열 두 번째 원소',
                    value: '상태를 변경하는 함수',
                  },
                ]}
              />
              <CodeSnippet
                code={[`const [state, setState] = useState(0);`]}
                language="tsx"
              />
              <Separator />
              <div>초기값을 넣는 두가지 방법</div>
              <CodeSnippet
                code={[`setCount(0);`, `setCount(() => 0);`]}
                language="tsx"
              />
              <Separator />
              <div>상태를 변경하는 두 가지 방법</div>
              <CodeSnippet
                code={[`setCount(count + 1);`, `setCount((c) => c + 1);`]}
                language="tsx"
              />
            </div>
          ),
        },
        {
          title: 'hooks: useState - 퀴즈',
          content: (
            <div className="flex flex-col items-center gap-6">
              <div>버튼을 클릭하면 상태가 얼마가 될까요?</div>
              <div className="flex gap-4">
                <CodeSnippet
                  code={[
                    `const [state, setState] = useState(0);`,
                    ``,
                    `const handleClick = () => {`,
                    `  setState(state + 1);`,
                    `  setState(state + 1);`,
                    `  setState(state + 1);`,
                    `};`,
                    ``,
                    `return <button onClick={handleClick}>클릭</button>;`,
                  ]}
                  language="tsx"
                />
                <CodeSnippet
                  code={[
                    `const [state, setState] = useState(0);`,
                    ``,
                    `const handleClick = () => {`,
                    `  setState(s => s + 1);`,
                    `  setState(s => s + 1);`,
                    `  setState(s => s + 1);`,
                    `};`,
                    ``,
                    `return <button onClick={handleClick}>클릭</button>;`,
                  ]}
                  language="tsx"
                />
              </div>
            </div>
          ),
        },
        {
          title: 'hooks: useState - 주의사항',
          content: (
            <div className="flex flex-col items-center gap-6">
              <div>모든 상태는 쓸모가 있어야 한다</div>
              <div className="flex gap-4">
                <div>
                  <CodeSnippet
                    code={[
                      `const [firstName, setFirstName] = useState('');`,
                      `const [lastName, setLastName] = useState('');`,
                      `const [fullName, setFullName] = useState('');`,
                      ``,
                      `const handleFirstNameChange = (e) => {`,
                      `  setFirstName(e.target.value);`,
                      `  setFullName(firstName + ' ' + lastName);`,
                      `};`,
                      ``,
                      `const handleLastNameChange = (e) => {`,
                      `  setLastName('Doe');`,
                      `  setFullName(firstName + ' ' + lastName);`,
                      `};`,
                    ]}
                    language="tsx"
                  />
                  <div>
                    🙅 불가능할 상태에 도달할 여지를 남기게 되고,
                    <br />
                    버그가 발생할 가능성이 높아진다
                  </div>
                </div>
                <Separator orientation="vertical" />
                <div>
                  <CodeSnippet
                    code={[
                      `const [firstName, setFirstName] = useState('');`,
                      `const [lastName, setLastName] = useState('');`,
                      `const fullName = firstName + ' ' + lastName;`,
                      ``,
                      `const handleFirstNameChange = (e) => {`,
                      `  setFirstName(e.target.value);`,
                      `};`,
                      ``,
                      `const handleLastNameChange = (e) => {`,
                      `  setLastName('Doe');`,
                      `};`,
                    ]}
                    language="tsx"
                  />
                  <div>🙆 애초에 불가능한 상태가 생길 수 없음</div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: 'hooks: useEffect',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                렌더로 인해 리액트 내부와 리액트 외부 사이를 동기화해야 할 때
                사용하는 훅
              </div>
              <div>
                렌더 후에 실행되며, 의존성 배열이 변하지 않았다면 실행을 스킵
              </div>
              <div className="text-base">
                아마도 전 세계에서 가장 잘못 사용되고 있는 훅
              </div>
              <ExternalLink
                href="https://overreacted.io/a-complete-guide-to-useeffect/"
                label="useEffect를 가장 잘 설명하는 글"
              />
              <Separator />
              <ul className="list-disc pl-6">
                <li>브라우저에 이벤트 리스너를 설정할 때</li>
                <li>외부 API와 통신할 때</li>
                <li>DOM을 직접 조작해야 할 때</li>
              </ul>
              <Separator />
              <CodeSnippet
                code={[
                  `// 실제로 이 강의자료에 있는 코드`,
                  `useEffect(() => {`,
                  `  if (slideTitle === undefined) return;`,
                  ``,
                  `  const originalTitle = document.title;`,
                  `  document.title = \`$\{slideTitle} ($\{page})\`;`,
                  ``,
                  `  return () => {`,
                  `    document.title = originalTitle;`,
                  `  };`,
                  `}, [slideTitle, page]);`,
                ]}
                language="tsx"
              />
              <div>
                <InlineCode code="slideTitle" /> 은 리액트 내부,{' '}
                <InlineCode code="document.title" /> 은 리액트 외부
              </div>
              <div>
                나중에 비동기 할 때 정말정말 많이 보게 될 예정입니다 (상태는
                리액트 내부, 백엔드는 리액트 외부)
              </div>
            </div>
          ),
        },
        {
          title: '의존성 배열',
          content: (
            <div className="flex flex-col gap-6">
              <ExternalLink
                href="https://react.dev/learn/removing-effect-dependencies"
                label="공식문서"
              />
              <CodeSnippet
                code={[`useEffect(콜백, 의존성 배열);`]}
                language="tsx"
              />
              <div>
                콜백에서 사용하는 모든 reactive value 가 들어 있어야 한다
              </div>
              <div>
                우리는 ESLint 설정을 해 뒀으므로, 잘못 썼다면 린터가 알려줍니다
              </div>
              <img src={hooksDepsErrorPng} />
            </div>
          ),
        },
        {
          title: 'hooks: useEffect - 너무나도 흔한 오해',
          content: (
            <div className="flex flex-col gap-4">
              <div>정말 많은 블로그들에서 잘못 설명하고 있을 거예요</div>
              <div>
                &quot;의존성 배열의 값이 바뀔 때 실행할 로직을
                넣어둔다&quot;라는 흔한 오해
              </div>
              <Separator />
              <div>그래서 이런 식으로 잘못된 코드나</div>
              <CodeSnippet
                code={[
                  `useEffect(() => {`,
                  `  // 콜백과 count 는 아무 관련이 없는데 count 를 의존성 배열에 넣는다`,
                  `  document.title = '안녕';`,
                  `}, [count]);`,
                ]}
                language="tsx"
              />
              <div>
                이런 <strong>더</strong> 잘못된 코드가 매우 많습니다
              </div>
              <CodeSnippet
                code={[
                  `useEffect(() => {`,
                  `  // 콜백에서 count를 쓰는데도 count 를 의존성 배열에 안 넣는다`,
                  `  document.title = '안녕 ' + count;`,
                  `}, []);`,
                ]}
                language="tsx"
              />
              <div>
                사실 지금은 <InlineCode code="useEffect" />를 쓸 일이 그리 많진
                않아서, 나중에 비동기 할 때 한 번 더 봅시다
              </div>
            </div>
          ),
        },
        {
          title: 'hooks: useCallback',
          content: (
            <div className="flex flex-col gap-4">
              <ExternalLink
                href="https://ko.react.dev/reference/react/useCallback"
                label="공식문서"
              />
              <div>함수의 주소값을 유지할 때 사용하는 훅</div>
              <div>
                의존성 배열이 변하지 않았다면 메모이제이션한 함수를 반환
              </div>
              <div className="text-base">
                useEffect만큼은 아니어도, 많이 오해하는 훅
              </div>
            </div>
          ),
        },
        {
          title: 'hooks: useCallback - 왜 쓸까?',
          content: (
            <div className="flex flex-col gap-4">
              <div>이 이펙트는 매 렌더마다 실행됩니다</div>
              <CodeSnippet
                code={[
                  `const [count, setCount] = useState(0);`,
                  ``,
                  `const incrementCount = () => setCount((c) => c + 1);`,
                  ``,
                  `useEffect(() => {`,
                  `  const handleKeyPress = (event) => {`,
                  `    if (event.key === '+') incrementCount();`,
                  `  };`,
                  ``,
                  `  window.addEventListener('keydown', handleKeyPress);`,
                  ``,
                  `  return () => {`,
                  `    window.removeEventListener('keydown', handleKeyPress);`,
                  `  };`,
                  `}, [incrementCount]);`,
                ]}
                language="tsx"
              />
              <div>
                <b>함수</b>라는 객체는 매 렌더마다 다시 생성되기 때문
              </div>
              <Separator />
              <div>
                더 극단적인 코드에서는 무한 렌더가 발생하기도 하며,
                <br />
                세미나때마다 무한렌더 때문에 겨우 서른 명 쓰는 서버에 서버비가
                2만원씩 나가고 그랬습니다
              </div>
            </div>
          ),
        },
        {
          title: 'hooks: useCallback - 왜 쓸까?',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                함수를 의존성 배열에 넣을 거라면,{' '}
                <InlineCode code="useCallback" />
                으로 감싸야 합니다
              </div>
              <CodeSnippet
                code={[
                  `const [count, setCount] = useState(0);`,
                  ``,
                  `const incrementCount = useCallback(() => setCount((c) => c + 1), []);`,
                  ``,
                  `useEffect(() => {`,
                  `  const handleKeyPress = (event) => {`,
                  `    if (event.key === '+') incrementCount();`,
                  `  };`,
                  ``,
                  `  window.addEventListener('keydown', handleKeyPress);`,
                  ``,
                  `  return () => {`,
                  `    window.removeEventListener('keydown', handleKeyPress);`,
                  `  };`,
                  `}, [incrementCount]);`,
                ]}
                language="tsx"
              />
              <div>
                그래야 주소값이 유지되어 이펙트가 다시 수행되지 않습니다
              </div>
              <Separator />
              <div>
                이것도 종종{' '}
                <i>함수를 메모이제이션하여 함수 생성 비용을 아낀다</i>라고
                설명하는 글들 있는데, <strong>전혀 아닙니다</strong>
                <br />
                <br />
                <div>
                  함수 생성은 비싸지 않을 뿐더러,{' '}
                  <InlineCode code="useCallback" />
                  으로 감싸도 렌더마다 새로 생성합니다 쓰지 않을 뿐
                </div>
              </div>
            </div>
          ),
        },
        {
          title: '',
          content: (
            <div>
              여기까지는 없으면 개발 못하는 훅들
              <br />
              다음 슬라이드부터는 있으면 좀더 잘할 수 있는 기능들
            </div>
          ),
        },
        {
          title: 'Custom Hooks',
          content: (
            <div>
              <div>
                훅을 쓰다 보면 리액트 로직을 마크업에서 분리하고 싶다는 욕심이
                생긴다
              </div>
              <CodeSnippet
                code={[
                  `const [nicknames, setNicknames] = useState<string[]>([]);`,
                  ``,
                  `const addNickname = (nickname: string) => {`,
                  `  setNicknames((n) => [...n, nickname]);`,
                  `};`,
                  ``,
                  `const removeNickname = (nickname: string) => {`,
                  `  setNicknames((n) => n.filter((nn) => nn !== nickname));`,
                  `};`,
                  ``,
                  `return <button onClick={() => addNickname('hello')}>Add</button>;`,
                ]}
                language="tsx"
              />
              <div>
                이렇게 <InlineCode code="use" />로 시작하는 함수 (훅) 를
                만들어서 분리
              </div>
              <CodeSnippet
                code={[
                  `const useNicknames = () => {`,
                  `  const [nicknames, setNicknames] = useState<string[]>([]);`,
                  ``,
                  `  const addNickname = (nickname: string) => {`,
                  `    setNicknames((n) => [...n, nickname]);`,
                  `  };`,
                  ``,
                  `  const removeNickname = (nickname: string) => {`,
                  `    setNicknames((n) => n.filter((nn) => nn !== nickname));`,
                  `  };`,
                  ``,
                  `  return { nicknames, addNickname, removeNickname };`,
                  `};`,
                ]}
                language="tsx"
              />
              <div>그리고 이렇게 사용</div>
              <CodeSnippet
                code={[
                  `const { addNickname } = useNicknames();`,
                  ``,
                  `return <button onClick={() => addNickname('hello')}>Add</button>;`,
                ]}
                language="tsx"
              />
              <Separator className="my-20" />
              <div>
                대표적인 예시: <InlineCode code="useOutsideClick" />
              </div>
              <CodeSnippet
                code={[
                  `const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {`,
                  `  useEffect(() => {`,
                  `    const handleClick = (event: MouseEvent) => {`,
                  `      if (ref.current && !ref.current.contains(event.target as Node)) {`,
                  `        callback();`,
                  `      }`,
                  `    };`,
                  ``,
                  `    document.addEventListener('mousedown', handleClick);`,
                  ``,
                  `    return () => {`,
                  `      document.removeEventListener('mousedown', handleClick);`,
                  `    };`,
                  `  }, [ref, callback]);`,
                  `};`,
                ]}
                language="tsx"
              />
            </div>
          ),
        },
        {
          title: 'Context API',
          content: (
            <div className="flex flex-col items-center justify-center gap-4">
              <div>리액트의 컴포넌트 트리</div>
              <div className="flex">
                <img src="https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.dark.png&w=640&q=75" />
                <img src="https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_context_far.dark.png&w=640&q=75" />
              </div>
              <CodeSnippet
                code={[
                  `import { createContext } from 'react';`,
                  ``,
                  `const ThemeContext = createContext('light');`,
                  ``,
                  `const App = () => {`,
                  `  return (`,
                  `    <ThemeContext.Provider value="dark">`,
                  `      <Header />`,
                  `    </ThemeContext.Provider>`,
                  `  );`,
                  `};`,
                  ``,
                  `const Header = () => {`,
                  `  const theme = useContext(ThemeContext);`,
                  `  return <header style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>Header</header>;`,
                  `};`,
                ]}
                language="tsx"
              />
            </div>
          ),
        },
      ]}
    />
  ),
});
