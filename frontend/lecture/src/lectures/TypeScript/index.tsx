import { DoubleArrowRightIcon } from '@radix-ui/react-icons';

import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { Slides } from '@/components/Slides';
import { Separator } from '@/designsystem/ui/separator';
import { getLectureItem } from '@/lectures';

import advance from './advance.png';
import autocompleteTypescript from './autocomplete-typescript.png';
import hoverTypescript from './hover-typescript.png';

export const typescriptLecture = getLectureItem({
  title: 'TypeScript',
  description: '타입스크립트 기능들, 타입 시스템',
  date: new Date('2024-10-02 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '(복습) TypeScript란?',
          content: (
            <AssetDescriptionLayout
              description={[
                '정적 타입 검사를 위한 문법이 추가된 JavaScript의 Superset 언어',
                'Microsoft 에서 개발',
                '자동완성이나 생산성 측면에서 훨씬 나은 개발 경험 제공',
                <ExternalLink
                  href="https://github.com/microsoft/TypeScript"
                  label="github"
                  key="github"
                />,
                <ExternalLink
                  href="https://www.typescriptlang.org/"
                  label="docs"
                  key="docs"
                />,
              ]}
              asset={
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IokRbHERC58rG9mWtv6Jp4Q-d5-il4nnlQ&s" />
              }
            />
          ),
        },
        {
          title: '타입 세계 이해하기',
          content: (
            <div className="flex flex-col gap-4">
              <p>타입 세계는 JavaScript 세계와 격리되어 있다</p>
              <CodeSnippet
                code={[
                  `const add = (a: number, b: number) => a + b;`,
                  ``,
                  `console.log(add('우', '현민')) // 출력: '우현민'`,
                ]}
                language="typescript"
              />
              <p>위 코드는 타입 에러가 발생하지만, 실행은 잘 된다</p>
              <p>
                결국 실행되는 코드는 타입 정보를 다 벗겨낸 JavaScript 코드이기
                때문
              </p>
            </div>
          ),
        },
        {
          title: '타입스크립트 개발 환경',
          content: (
            <div className="flex flex-col gap-4">
              <p>마우스를 올리면 타입 정보가 보인다</p>
              <img src={hoverTypescript} />
              <Callout title="Tip">
                맥의 경우 <InlineCode code="cmd + k + i" />, 윈도우의 경우{' '}
                <InlineCode code="ctrl + k + i" /> 를 누르면 마우스를 올린 것과
                같은 효과가 나타납니다
              </Callout>
              <p>그리고 자동완성을 할 수 있다</p>
              <img src={autocompleteTypescript} />
              <Callout title="Tip">
                자동완성이 안 나타났다면, 맥의 경우{' '}
                <InlineCode code="cmd + i" />, 윈도우의 경우{' '}
                <InlineCode code="ctrl + i" /> 를 누르면 자동완성이 나타납니다
              </Callout>
            </div>
          ),
        },
        {
          title: '자동추론',
          content: (
            <div className="flex flex-col gap-4">
              <p>타입스크립트의 자동 추론은 생각보다 똑똑합니다</p>
              <CodeSnippet
                code={[
                  `// a 는 자동으로 10으로 추론됩니다`,
                  `const a = 10;`,
                  ``,
                  `// obj 는 자동으로 { a: number }로 추론됩니다`,
                  `const obj = { a: 10 };`,
                ]}
                language="typescript"
              />
              <CodeSnippet
                code={[
                  `// count 는 자동으로 number 로 추론됨`,
                  `// setCount 도 자동으로 number 에 대한 setState로 추론됨`,
                  `const [count, setCount] = useState(0);`,
                  ``,
                  `// 그러니까 이럴 필요가 없습니다`,
                  `const [count, setCount] = useState<number>(0);`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (1) 모든 타입은 집합이다',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>타입 시스템을 이해하는 첫걸음</p>
              <p>
                <InlineCode code="string" />은 모든 문자열의 집합
              </p>
              <p>
                <InlineCode code="boolean" />은 모든 불리언 값의 집합
              </p>
              <p>
                <InlineCode code="string | number" />은 문자열 집합과 숫자
                집합의 합집합
                <br />
                <InlineCode code="|" />는 합집합 기호
              </p>
              <p>
                <InlineCode code="string & number" />은 문자열 집합과 숫자
                집합의 교집합, 즉 공집합
                <br />
                <InlineCode code="&" />는 교집합 기호
              </p>

              <p>
                <InlineCode code="0" />은 숫자 0만 원소로 있는 집합
              </p>
              <p>
                <InlineCode code="0 | 1" />은 0과 1로 이루어진 집합
              </p>
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (2) 할당 가능하다는 것',
          content: (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                할당 가능하다 <DoubleArrowRightIcon /> 부분집합이다
              </div>
              <CodeSnippet
                code={[
                  `const plus1 = (num: number) => num + 1`,
                  ``,
                  `// ✅ 1이라는 집합은 number 라는 집합의 부분집합이므로 할당 가능`,
                  `const a = plus1(1);`,
                  ``,
                  `// ❌ true라는 집합은 number 라는 집합의 부분집합이 아니므로 할당 불가능`,
                  `const b = plus1(true);`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (3) 특수 타입들',
          content: (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-bold">never</h3>
                  <p>공집합</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-bold">unknown</h3>
                  <p>전체집합</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-bold">any</h3>
                  <p className="text-sm text-red-500">
                    모든 집합의 부분집합이면서 모든 집합을 부분집합으로 가지는
                    집합
                  </p>
                </div>
              </div>
              <p>any 는 타입 시스템을 망가뜨린다</p>
              <CodeSnippet
                language="typescript"
                code={[
                  `type A = number & unknown;             // number`,
                  `type B = never & number;               // never`,
                  `type C = (number | boolean) & unknown; // number | boolean`,
                ]}
              />
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (4) 객체 타입',
          content: (
            <div className="flex flex-col gap-4">
              <CodeSnippet
                code={[
                  `// grade 라는 key의 값 타입이 number 집합의 부분집합인 모든 객체의 집합`,
                  `type Student = {`,
                  `  grade: number;`,
                  `}`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (5) 퀴즈',
          content: (
            <div className="flex flex-col gap-4">
              <CodeSnippet
                code={[
                  `const getAge = (person: { age: number }) => person.age;`,
                  ``,
                  `const me = {`,
                  `  name: '우현민',`,
                  `  age: 26,`,
                  `};`,
                  ``,
                  `getAge(me); // ❓ 타입 에러가 날까요?`,
                ]}
                language="typescript"
              />
              <p>
                구조적 타이핑 또는 덕 타이핑이라고도 하는 개념인데, 집합으로
                이해하면 너무 당연합니다
              </p>
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (6) 예외',
          content: (
            <div className="leading-10">
              <InlineCode code="freshness" /> 등 예외는 있지만, 기본적으로
              타입은 집합이라는 것을 이해하면 타입 시스템에 대한 이해는 끝입니다
            </div>
          ),
        },
        {
          title: '제네릭',
          content: (
            <div className="leading-10">
              <p>타입 세계에서의 함수 같은 것</p>

              <CodeSnippet
                code={[
                  `type Nonnullable<T> = T extends null | undefined ? never : T;`,
                ]}
                language="typescript"
              />

              <CodeSnippet
                code={[
                  `const wrap = <T>(arg: T): { name: T } => { name: arg };`,
                  ``,
                  `const a = wrap(1);       // { name: number }`,
                  `const b = wrap('hello'); // { name: string }`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title: '타입 좁히기',
          content: (
            <div className="leading-10">
              <p>
                TypeScript는 충분히 똑똑해서, JavaScript 로직을 보고 타입을 좁혀
                준다
              </p>
              <CodeSnippet
                code={[
                  `const [todo, setTodo] = useState<Todo | null>(null);`,
                  ``,
                  `// 여기서 todo 변수의 타입은 Todo | null`,
                  ``,
                  `if (todo === null) return 'loading...';`,
                  ``,
                  `// 윗 줄에 의해서 todo 변수의 타입이 Todo 로 좁혀졌다`,
                  ``,
                  `return <div>{todo.title}</div>;`,
                ]}
                language="tsx"
              />
              <p>if문 말고 삼항연산자, switch문, typeof 연산자 등도 마찬가지</p>
              <Separator className="my-6" />
              <p>심지어 이런 것도 된다</p>
              <CodeSnippet
                code={[
                  `type Person = `,
                  `  | { type: 'student', name: string, grade: number }`,
                  `  | { type: 'teacher', name: string, age: number }`,
                  ``,
                  `const getDisplayName = (person: Person) => {`,
                  `  switch (person.type) {`,
                  `    case 'student':`,
                  `      return person.grade + '학년 ' + person.name;`,
                  `    case 'teacher':`,
                  `      return person.age + '세 ' + person.name + ' 선생님';`,
                  `  }`,
                  `};`,
                ]}
                language="tsx"
              />
            </div>
          ),
        },
        {
          title: '타입스크립트 잘 쓰기',
          content: (
            <div className="leading-10">
              <ol className="list-decimal">
                <li>
                  타입을 좁게 작성하기 (유효한 타입만 허용하기)
                  <CodeSnippet
                    code={[
                      `// ❌ 이렇게 쓰지 말고`,
                      `const onChangeTab = (newTab: string) => {};`,
                      ``,
                      `// ✅ 이렇게`,
                      `const onChangeTab = (newTab: '강의' | '과제') => {};`,
                    ]}
                    language="typescript"
                  />
                </li>
                <li>자동추론 활용하기</li>
                <li>자동완성 활용하기</li>
              </ol>
            </div>
          ),
        },
        {
          title: '의외로 타입스크립트가 할 수 있는 것들',
          content: (
            <div className="leading-10">
              <img src={advance} />
              <p>
                사실 타입스크립트는 스펙상 튜링 완전한 언어이기에, (이론상)
                만들고 싶은 타입을 모두 만들 수 있습니다
              </p>
              <p>생각보다 훨씬 강력한 도구입니다</p>
            </div>
          ),
        },
      ]}
    />
  ),
});
