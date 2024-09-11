import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useReducer } from 'react';

import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { Slides } from '@/components/Slides';
import { Button } from '@/designsystem/ui/button';
import { Separator } from '@/designsystem/ui/separator';
import { getLectureItem } from '@/lectures';

const IncrementButton = () => {
  const [count, increment] = useReducer((c: number) => c + 1, 0);

  return (
    <Button onClick={increment} variant="default">
      {count}
    </Button>
  );
};

export const reactBasicLecture = getLectureItem({
  title: '리액트 기본',
  description: 'JSX, state, props, hooks, Virtual DOM',
  date: new Date('2024-09-11'),
  element: (
    <Slides
      slides={[
        {
          title: '왜 리액트가 필요할까?',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                브라우저는 이미 <InlineCode code="getElementById" /> 나{' '}
                <InlineCode code="appendChild" /> 같은 DOM API를 제공
              </p>
              <Callout title="Point">
                이 점을 이해하는 게 매우 중요합니다. 리액트 역시 이{' '}
                <InlineCode code="getElementById" /> 같은 걸 이쁘게 잘 감싸둔
                코드 쪼가리일 뿐입니다.
                <br />
                단지 리액트가 강제하는 패러다임과 제공하는 유틸성 코드
                쪼가리들을 활용해서 더 편하게 개발할 수 있을 뿐입니다.
              </Callout>
              <p>
                그런데, 얘들만으로 웹 어플리케이션을 만들기에는 무리가 있습니다.
              </p>
              <p>EX) 투두 리스트</p>
              <CodeSnippet
                language="javascript"
                code={[
                  `const addTodoButton = document.getElementById('add-todo');`,
                  `const todoInput = document.getElementById('todo-input');`,
                  `const todoList = document.getElementById('todo-list');`,
                  ``,
                  `addTodoButton.addEventListener('click', () => {`,
                  `  const newTodo = document.createElement('li');`,
                  `  newTodo.textContent = todoInput.value;`,
                  `  `,
                  `  const deleteButton = document.createElement('button');`,
                  `  deleteButton.textContent = 'Delete';`,
                  `  deleteButton.addEventListener('click', () => {`,
                  `    todoList.removeChild(newTodo);`,
                  `  });`,
                  `  `,
                  `  newTodo.appendChild(deleteButton);`,
                  `  todoList.appendChild(newTodo);`,
                  `  todoInput.value = '';`,
                  `});`,
                ]}
              />
              <p>
                상태가 복잡해지면 복잡해질수록 이런 코드는 유지보수하기 어렵다
              </p>
            </div>
          ),
        },
        {
          title: 'jQuery도 마찬가지',
          content: (
            <div className="flex flex-col gap-4">
              <p>2006년에 등장한 jQuery를 사용하면 조금 더 간단해진다:</p>
              <CodeSnippet
                language="javascript"
                code={[
                  `$('#add-todo').on('click', () => {`,
                  `  const todoText = $('#todo-input').val();`,
                  `  const $newTodo = $('<li>').text(todoText);`,
                  `  const $deleteButton = $('<button>').text('Delete');`,
                  `  `,
                  `  $deleteButton.on('click', () => {`,
                  `    $newTodo.remove();`,
                  `  });`,
                  `  `,
                  `  $newTodo.append($deleteButton);`,
                  `  $('#todo-list').append($newTodo);`,
                  `  $('#todo-input').val('');`,
                  `});`,
                ]}
              />
              <p>하지만 근본적인 문제는 해결되지 않음</p>
              <ul className="list-disc pl-6">
                <li>상태 관리가 복잡해질수록 코드도 복잡해짐</li>
                <li>컴포넌트 기반의 재사용 가능한 UI를 만들기 어려움</li>
              </ul>
            </div>
          ),
        },
        {
          title: '프론트엔드 프레임워크의 등장',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                복잡한 웹 애플리케이션 개발의 필요성이 증가하면서 프론트엔드가
                분야로서 분리되고 다양한 프레임워크가 등장
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4">
                  <img
                    src="https://angular.io/assets/images/logos/angular/angular.svg"
                    alt="Angular"
                    className="mr-2 h-12 w-12"
                  />
                  <span className="text-lg font-semibold">Angular</span>
                </div>
                <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4">
                  <img
                    src="https://vuejs.org/images/logo.png"
                    alt="Vue"
                    className="mr-2 h-12 w-12"
                  />
                  <span className="text-lg font-semibold">Vue</span>
                </div>
                <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4">
                  <img
                    src="https://reactjs.org/logo-og.png"
                    alt="React"
                    className="mr-2 h-12"
                  />
                  <span className="text-lg font-semibold">React</span>
                </div>
                <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4">
                  <img
                    src="https://svelte.dev/svelte-logo.svg"
                    alt="Svelte"
                    className="mr-2 h-12 w-12"
                  />
                  <span className="text-lg font-semibold">Svelte</span>
                </div>
              </div>
              <p>
                이들 모두 컴포넌트 기반의 선언적인 방식으로 UI를 구성할 수 있게
                해줌
              </p>
              <p>그 중에서도 리액트가 압도적으로 인기가 많다</p>
            </div>
          ),
        },
        {
          title: 'React를 씁시다',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                최근 트렌디한 프론트엔드 개발을 하는 곳이라면 대부분 React
                기반의 프레임워크를 사용합니다
              </p>
              <div className="flex gap-4">
                <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4">
                  <img
                    src="https://nextjs.org/static/favicon/safari-pinned-tab.svg"
                    alt="Next.js"
                    className="mr-2 h-12 w-12"
                  />
                  <span className="text-lg font-semibold">Next.js</span>
                </div>
                <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4">
                  <img
                    src="https://remix.run/favicon-192.png"
                    alt="Remix"
                    className="mr-2 h-12 w-12"
                  />
                  <span className="text-lg font-semibold">Remix</span>
                </div>
                <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4">
                  <img
                    src="https://vitejs.dev/logo.svg"
                    alt="Vite"
                    className="mr-2 h-12 w-12"
                  />
                  <span className="text-lg font-semibold">
                    Vite (우리 세미나에서 쓰는 거!)
                  </span>
                </div>
              </div>
              <p className="mt-20 leading-10">
                하지만 리액트도 하나의 트렌드일 뿐, 언제든 저물 수 있다
                <br />
                언제나 프론트엔드의 근본은 HTML, CSS, JavaScript
                <br />
                세미나 이름을 React <ArrowRightIcon className="inline" />{' '}
                Frontend 로 변경한 것도 이 이유
              </p>
            </div>
          ),
        },
        {
          title: 'React란?',
          content: (
            <AssetDescriptionLayout
              description={[
                '상태를 기반으로 컴포넌트가 어떻게 렌더되어야 하는지 선언',
                '액션 시 상태가 어떻게 업데이트되어야 하는지 선언',
                '상태가 변경될 경우 변경된 상태 아래를 모두 "다시 그린다"',
              ]}
              asset={
                <CodeSnippet
                  language="tsx"
                  code={[
                    `const [count, setCount] = useState(0);`,
                    ``,
                    `return (`,
                    `  <div>`,
                    `    <button onClick={() => setCount(count + 1)}>Increase</button>`,
                    `    <div>{count}</div>`,
                    `  </div>`,
                    `);`,
                  ]}
                />
              }
            />
          ),
        },
        {
          title: '컴포넌트',
          content: (
            <div className="flex flex-col gap-4">
              <p>리액트의 기본 구성 요소</p>
              <p>독립적이고 재사용 가능한 UI 조각</p>
              <p>
                리액트 말고 다른 프레임워크들도, 대부분 컴포넌트 기반으로
                개발됩니다
              </p>
              <CodeSnippet
                language="tsx"
                code={[
                  `const IncrementButton = () => {`,
                  `  const [count, increment] = useReducer((c: number) => c + 1, 0);`,
                  ``,
                  `  return <Button onClick={increment}>{count}</Button>;`,
                  `};`,
                ]}
              />
              <div className="flex gap-4">
                <IncrementButton />
                <IncrementButton />
                <IncrementButton />
              </div>
              <Separator />
              <img
                src="https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_dom_tree.dark.png&w=1080&q=75"
                alt="React Component Tree"
                className="mx-auto mt-4 w-full max-w-2xl"
              />
            </div>
          ),
        },
        {
          title: 'state',
          content: (
            <AssetDescriptionLayout
              description={[
                '리액트의 핵심 중의 핵심인 개념',
                '대표적으로 useState를 통해 정의할 수 있다',
                '변경 가능하며, 변경 시 컴포넌트가 다시 렌더링됨',
                <>
                  변경하려면 반드시 <InlineCode code="setState" />를 통해야 한다
                </>,
              ]}
              asset={
                <div className="flex flex-col gap-4">
                  <CodeSnippet
                    language="tsx"
                    code={[
                      `// ✅`,
                      `const Counter = () => {`,
                      `  const [count, setCount] = useState(0);`,
                      `  return (`,
                      `    <div>`,
                      `      <p>You clicked {count} times</p>`,
                      `      <button onClick={() => setCount(count + 1)}>`,
                      `        Click me`,
                      `      </button>`,
                      `    </div>`,
                      `  );`,
                      `};`,
                    ]}
                  />
                  <CodeSnippet
                    language="tsx"
                    code={[
                      `// ❌`,
                      `// 설명 편의를 위한 코드이고 애초에 JavaScript 에서 불가능하긴 한데,`,
                      `// 아무튼 이런 식으로 접근하면 안 된다`,
                      `const Counter = () => {`,
                      `  const [count, setCount] = useState(0);`,
                      `  return (`,
                      `    <div>`,
                      `      <p>You clicked {count} times</p>`,
                      `      <button onClick={() => { count = count + 1; }}>`,
                      `        Click me`,
                      `      </button>`,
                      `    </div>`,
                      `  );`,
                      `};`,
                    ]}
                  />
                </div>
              }
            />
          ),
        },
        {
          title: '상태에 대한 오해와 상태를 설계하는 법',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                상태 === 값을 저장하는 곳이라고 생각하기 쉬운데, 잘 짜려면 -
                React 의 상태는 고민이 많이 필요한 개념입니다
              </p>
              <p>
                리액트 개발 경험을 기반으로, 정말 이 컴포넌트의{' '}
                <strong>상태</strong>가 무엇이어야 할지 진지하게 고민해야 합니다
              </p>
              <p>
                그러면 자연스럽게 컴포넌트는 버그가 없어지고 재사용하기
                좋아집니다
              </p>
              <ExternalLink
                href="https://velog.io/@woohm402/design-react-component-state"
                label="제 블로그에 관련 괜찮은 글이 있습니다"
              />
              <p>다음 챕터에서 좀더 자세히</p>
            </div>
          ),
        },
        {
          title: 'JSX',
          content: (
            <div className="flex flex-col gap-4">
              <p>리액트 코드를 보면 이렇게 HTML같이 생긴 코드가 있음</p>
              <CodeSnippet
                language="tsx"
                code={[
                  `return <div className="App" style={{ color: 'blue' }}>Hello, world!</div>;`,
                ]}
              />
              <p>실제 HTML이었다면 이것과 비슷한 코드</p>
              <CodeSnippet
                language="tsx"
                code={[
                  `<div class="App" style="color: blue;">Hello, world!</div>;`,
                ]}
              />
              <Separator />
              <div>
                하지만 묘하게 다른데, 가령
                <ul className="flex list-disc flex-col gap-4 pl-6">
                  <li>
                    <InlineCode code="class" /> 대신{' '}
                    <InlineCode code="className" /> 사용
                  </li>
                  <li>
                    <InlineCode code="for" /> 대신 <InlineCode code="htmlFor" />{' '}
                    사용
                  </li>
                  <li>
                    <InlineCode code="style" />에 객체를 넣음
                  </li>
                  <li>
                    규칙이 좀더 strict하다 (<InlineCode code="<br>" /> 이런 거
                    불가능)
                  </li>
                </ul>
              </div>
              <Separator />
              <p>위 코드는 빌드 시 아래와 같이 변환됩니다:</p>
              <CodeSnippet
                language="javascript"
                code={[
                  `return React.createElement(`,
                  `  'div',`,
                  `  { className: 'App', style: { color: 'blue' } },`,
                  `  'Hello, world!'`,
                  `);`,
                ]}
              />
              <Separator />
              <p>JSX는 HTML과 비슷한 개발 경험을 주기 위해 고안된 문법</p>
              <p>따라서 그냥 JavaScript 값일 뿐</p>
              <p>
                즉 아래와 같이 변수에 할당할 수 있고, 함수에 인자로 넘길 수
                있고, 반환값으로 사용할 수 있음
              </p>
              <CodeSnippet
                language="tsx"
                code={[
                  `const element = <h1>Hello</h1>;`,
                  `return <div>{element}</div>;`,
                ]}
              />
              {'{ }'}는 JSX에서 JavaScript 표현식을 사용할 때 사용
            </div>
          ),
        },
        {
          title: 'props',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법. 마치
                html에 속성 주듯이
              </p>
              <CodeSnippet
                language="tsx"
                code={[
                  `const Welcome = (props: { name: string }) => {`,
                  `  return <h1>Hello, {props.name}</h1>;`,
                  `};`,
                  ``,
                  `const App = () => {`,
                  `  const [name, setName] = useState('Sara');`,
                  `  return <Welcome name={name} />;`,
                  `};`,
                ]}
              />
              <p>수정을 위해서는 onChange 콜백을 넘긴다</p>
              <CodeSnippet
                language="tsx"
                code={[
                  `const Welcome = ({ name, onChange }: { name: string; onChange: (newName: string) => void }) => {`,
                  `  return (`,
                  `    <div>`,
                  `      <h1>Hello, {name}</h1>`,
                  `      <input`,
                  `        type="text"`,
                  `        value={name}`,
                  `        onChange={(e) => onChange(e.target.value)}`,
                  `      />`,
                  `    </div>`,
                  `  );`,
                  `};`,
                  ``,
                  `const App = () => {`,
                  `  const [name, setName] = useState('Sara');`,
                  `  return <Welcome name={name} onChange={setName} />;`,
                  `};`,
                ]}
              />
            </div>
          ),
        },
        {
          title: 'render',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                좁은 의미에서, 컴포넌트라는 함수가 실행되어 JSX를 반환하는 것
              </p>
              <CodeSnippet
                language="tsx"
                code={[
                  `const Welcome = (props: { name: string }) => {`,
                  `  const greeting = "Hello";`,
                  `  const currentTime = new Date().toLocaleTimeString();`,
                  `  const randomNumber = Math.floor(Math.random() * 100);`,
                  `  console.log("Rendering Welcome component");`,
                  `  return (`,
                  `    <div>`,
                  `      <h1>{greeting}, {props.name}</h1>`,
                  `      <p>Current time: {currentTime}</p>`,
                  `      <p>Random number: {randomNumber}</p>`,
                  `    </div>`,
                  `  );`,
                  `};`,
                ]}
              />
              <Separator />
              <p>리렌더링이 발생하는 경우:</p>
              <ul className="list-disc pl-6">
                <li>상태(state)가 변경될 때</li>
                <li>부모 컴포넌트가 리렌더링될 때</li>
                <li>context로 구독한 값이 변경될 때</li>
              </ul>
              <Separator />
              <div className="mb-4 border-l-4 border-yellow-500 bg-yellow-100 p-4 text-base text-yellow-700">
                <p className="font-bold">주의:</p>
                <p>브라우저의 render 와는 다름</p>
              </div>
              <Separator />
              <p>렌더의 너무 당연한 특징</p>
              <ul className="list-disc pl-6">
                <li>렌더되는 동안 값이 고정된다</li>
              </ul>
            </div>
          ),
        },
        {
          title: 'render는 잘 이해하고 넘어가야 합니다',
          content: (
            <div className="flex flex-col gap-4">
              <p>예제 1</p>

              <CodeSnippet
                language="tsx"
                code={[
                  `// 퀴즈: 리렌더가 세 번 되었다면,`,
                  `// { name: '우현민' } 이라는 코드로 정의된 객체는 몇 번 생성되었을까?`,
                  ``,
                  `const Welcome = () => {`,
                  `  const [count, setCount] = useState(0);`,
                  ``,
                  `  const me = { name: '우현민' };`,
                  ``,
                  `  return (`,
                  `    <div onClick={() => setCount(count + 1)}>`,
                  `      <h1>{count} {me.name}</h1>`,
                  `    </div>`,
                  `  );`,
                  `};`,
                ]}
              />

              <p>예제 2</p>
              <CodeSnippet
                language="tsx"
                code={[
                  `const Welcome = () => {`,
                  `  const [count, setCount] = useState(0);`,
                  ``,
                  `  const handleClick = () => {`,
                  `    setCount(count + 1);`,
                  `    console.log(count); // 뭐가 출력될까?`,
                  `  };`,
                  ``,
                  `  return (`,
                  `    <div onClick={handleClick}>`,
                  `      <h1>{count}</h1>`,
                  `    </div>`,
                  `  );`,
                  `};`,
                ]}
              />

              <p>예제 3</p>
              <CodeSnippet
                language="tsx"
                code={[
                  `const Welcome = () => {`,
                  `  const [state, setState] = useState({ count: 0 });`,
                  ``,
                  `  const handleClick = () => {`,
                  `    setState({ count: count + 1 });`,
                  `    console.log(state); // 뭐가 출력될까?`,
                  `  };`,
                  ``,
                  `  return (`,
                  `    <div onClick={handleClick}>`,
                  `      <h1>{count}</h1>`,
                  `    </div>`,
                  `  );`,
                  `};`,
                ]}
              />
            </div>
          ),
        },
        {
          title: 'render 확인해보기',
          content: '라이브 코딩 w/ 리액트 개발자도구',
        },
        {
          title: 'hooks',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                함수 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는
                기능
              </p>
              <p>
                리액트가 제공하는 대표적인 훅: <InlineCode code="useState" />
              </p>
              <p>
                Custom Hook도 만들 수 있다. 이 경우 상태 업데이트 로직을
                재사용할 수 있음
              </p>
              <CodeSnippet
                language="typescript"
                code={[
                  `const useOnOutsideClick = (callback: () => void) => {`,
                  `  const ref = useRef<HTMLDivElement>(null);`,
                  ``,
                  `  useEffect(() => {`,
                  `    const handleClickOutside = (event: MouseEvent) => {`,
                  `      if (ref.current && !ref.current.contains(event.target as Node)) {`,
                  `        callback();`,
                  `      }`,
                  `    };`,
                  ``,
                  `    document.addEventListener('mousedown', handleClickOutside);`,
                  `    return () => {`,
                  `      document.removeEventListener('mousedown', handleClickOutside);`,
                  `    };`,
                  `  }, [callback]);`,
                  ``,
                  `  return ref;`,
                  `};`,
                ]}
              />
              <p>Rules of Hooks</p>
              <ExternalLink href="https://react.dev/reference/rules/rules-of-hooks" />
              <ul className="list-disc pl-6">
                <li>최상위에서만 호출</li>
                <li>함수 컴포넌트 내에서만 호출</li>
                <li>조건문, 반복문, 중첩 함수 내에서 호출하지 않음</li>
                <li>
                  이름이 <InlineCode code="use" /> 로 시작
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: '오랜만에 이론적인 이야기: Virtual DOM',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                앞서, 리액트는{' '}
                <strong>상태가 변경되면 모두 날리고 다시 그린다</strong>고 했음
              </p>
              <p>
                그러면 내가 리액트를 만들었다고 생각했을 때, 최상단 컴포넌트의
                상태가 바뀌면 모든 element 를 날리고 다시 만들어야 하나?
              </p>
              <CodeSnippet
                language="javascript"
                code={[
                  `while (document.body.firstChild) {`,
                  `  document.body.removeChild(document.body.firstChild);`,
                  `}`,
                ]}
              />
              <p>이런 식으로 하면 성능이 매우매우 나쁠 것이다</p>
              <Callout title="참고">
                <p>
                  DOM API는 실제 브라우저의 렌더링 엔진과 직접 상호작용하기
                  때문에 상대적으로 느린 작업
                </p>
                <p>따라서 DOM API를 너무 자주 많이 호출하면 매우 느리다</p>
              </Callout>
              <Separator />
              <p>그래서 리액트는 Virtual DOM이라는 개념을 도입</p>
              <ul className="list-disc pl-6">
                <li>실제 DOM의 가벼운 복사본</li>
                <li>메모리에만 존재하므로 실제 DOM보다 빠르게 조작 가능</li>
                <li>변경사항을 일괄 처리하여 실제 DOM에 한 번에 적용</li>
              </ul>
              <img src="https://media.licdn.com/dms/image/D5612AQHrTcE_Vu_qjQ/article-cover_image-shrink_600_2000/0/1694674429966?e=2147483647&v=beta&t=veXPTTqusbyai02Fix6ZscKdywGztVxSlShgv9Uab1U" />
              <Separator />
              <p>흔한 오해: Virtual DOM을 이용하면 성능이 높다</p>
              <p>
                React 가 워낙 무식하게 다 부수려고 하니 Virtual DOM을 통해 겨우
                최적화해 둔 것이지,
                <br />
                Virtual DOM을 쓰면 성능이 높아진다는 것이 아님
              </p>
              <p>
                당연히 Virtual DOM은 JavaScript를 한 번 더 거치는 것이기 때문에,
                더 느리면 느렸지 더 빠를 수가 없다
              </p>
              <Separator />
              <ExternalLink
                href="https://velog.io/@woohm402/virtual-dom-and-react"
                label="이것도 제 블로그에 좋은 글이 있습니다"
              />
            </div>
          ),
        },
      ]}
    />
  ),
});
