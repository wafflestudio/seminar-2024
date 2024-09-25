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
          title: '목표',
          content: (
            <div className="flex flex-col items-center gap-8">
              <div className="text-4xl">타입스크립트 마스터하기</div>
              <div>
                <InlineCode code="&" />, <InlineCode code="|" /> 등 애매하게
                알고 있던 거 다 해결하기!
              </div>
              <div>
                오늘 세미나 외에 더 공부하고 싶으시다면{' '}
                <ExternalLink
                  href="https://www.typescriptlang.org/"
                  label="공식문서"
                />
                나
                <ExternalLink
                  href="https://product.kyobobook.co.kr/detail/S000001033114"
                  label="이펙티브 타입스크립트"
                />{' '}
                라는 책을 추천합니다
              </div>
            </div>
          ),
        },
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
                  label="GitHub (오픈소스입니다)"
                  key="github"
                />,
              ]}
              asset={
                <img
                  width="500"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                />
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
                  `console.log(add(1, '현민'));`,
                ]}
                language="typescript"
              />
              <p>위 코드는 타입 에러가 발생하지만, 실행은 잘 된다</p>
              <Separator className="my-8" />
              <p>TypeScript를 실행하면, JavaScript로 변환한 다음 실행됩니다</p>
              <CodeSnippet
                code={[
                  `const add = (a, b) => a + b;`,
                  ``,
                  `console.log(add(1, '현민'));`,
                ]}
                language="javascript"
              />
              <p>즉 결국 실행되는 코드는 이거. 안 될 이유가 없다</p>
              <p>
                그러니까 타입이란 건 어떻게 보면 좀더 발전된 형태의 주석이라고
                볼 수도 있음
              </p>
              <Separator className="my-8" />
              <p>
                그리고 다시 말해, 타입에 무슨 짓을 해도 로직이 깨질 일은 없다는
                것
              </p>
              <CodeSnippet
                code={[
                  `const add = (a: { myName: never, a: () => void }, b: number) => a + b;`,
                  ``,
                  `console.log(add(1, '현민' as null));`,
                ]}
                language="typescript"
              />
              <p>위 코드는 타입이 택도 없지만, 실행은 잘 된다</p>
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
          title: '자동추론 (1) 생각보다 똑똑하다',
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
              <CodeSnippet
                code={[
                  `const fetchTodo: (): Promise<TodoResponse> => {...};`,
                  ``,
                  `// response 는 자동으로 TodoResponse 타입으로 추론됩니다`,
                  `fetchTodo.then((response) => {`,
                ]}
                language="typescript"
              />
              <p>
                따라서 꽤 많은 경우에 그냥 자동추론된 타입을 그대로 쓰는 게
                좋습니다
              </p>
            </div>
          ),
        },
        {
          title: '자동추론 (2) 함수형으로 짜자: 배열',
          content: (
            <div className="flex flex-col items-center gap-4">
              <div>프론트는 특성상 배열 다룰 일이 매우 많은데,</div>
              <p>for문 대신 array 함수들을 사용합시다</p>
              <div className="flex items-center gap-4">
                <CodeSnippet
                  code={[
                    `const foo = (row: number[]) => {`,
                    `  const doubled = [];`,
                    `  for (let i = 0; i < row.length; i++) {`,
                    `    // row[i]는 number | undefined 로 추론된다`,
                    `    doubled.push(row[i] * 2);`,
                    `  }`,
                    `};`,
                  ]}
                  language="typescript"
                />
                대신
                <CodeSnippet
                  code={[
                    `const foo = (row: number[]) => {`,
                    `  // num 은 number 로 추론된다`,
                    `  const doubled = row.map((num) => num * 2);`,
                    `};`,
                  ]}
                  language="typescript"
                />
              </div>
              <div>
                <InlineCode code="map" />, <InlineCode code="forEach" />,{' '}
                <InlineCode code="filter" />, <InlineCode code="reduce" /> 이거
                네 개는 반드시 숙지합시다
              </div>
              <div>
                <InlineCode code="push" />, <InlineCode code="splice" />,{' '}
                <InlineCode code="pop" /> 같은 이상한 거 쓰지 맙시다
              </div>
              <div>
                함수형 패러다임 자체는 타입 추론 말고도 많은 장점이 있습니다.
                다음 시간에 더 자세히 다룰 예정
              </div>
            </div>
          ),
        },
        {
          title: '자동추론 (3) 함수형으로 짜자: 객체',
          content: (
            <div className="flex flex-col items-center gap-4">
              <div>프론트는 특성상 객체 다룰 일도 매우 많은데,</div>
              <p>객체도 함수형으로 짜면 자동추론이 더 잘 됩니다</p>
              <div className="flex items-center gap-4">
                <CodeSnippet
                  code={[
                    `const user = { name: '우현민' };`,
                    ``,
                    `user.age = 23; // 오류 발생`,
                  ]}
                  language="typescript"
                />
                대신
                <CodeSnippet
                  code={[
                    `const user = { name: '우현민' };`,
                    ``,
                    `const newUser = { age: 23, ...user };`,
                  ]}
                  language="typescript"
                />
              </div>
              <div>
                항상 객체를 직접 수정하지 말고, 수정된 객체를 새로 만듭시다
              </div>
              <div>
                함수형 패러다임 자체는 타입 추론 말고도 많은 장점이 있습니다.
                다음 시간에 더 자세히 다룰 예정
              </div>
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (1) 모든 타입은 집합이다',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p className="text-center font-bold">
                타입 시스템을 이해하는 첫걸음!
              </p>
              <p>
                <InlineCode code="string" />은 모든 문자열의 집합
              </p>
              <p>
                <InlineCode code="boolean" />은 모든 불리언 값의 집합
              </p>
              <p>
                <InlineCode code="string | number" />은 문자열 집합과 숫자
                집합의 합집합
              </p>
              <p className="-mt-3 text-right text-xl">
                <InlineCode code="|" />는 합집합 기호
              </p>
              <p>
                <InlineCode code="string & number" />은 문자열 집합과 숫자
                집합의 교집합, 즉 공집합
              </p>
              <p className="-mt-3 text-right text-xl">
                <InlineCode code="|" />는 교집합 기호
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
                할당 가능하다 == 부분집합이다
              </div>
              <CodeSnippet
                code={[
                  `// ❌ '1'이라는 값에서 추론된 '1'이라는 집합은 number 라는 집합의 부분집합이 아니므로 할당 불가능`,
                  `const a: number = '1';`,
                ]}
                language="typescript"
              />{' '}
              <CodeSnippet
                code={[
                  `const plus1 = (num: number) => num + 1`,
                  ``,
                  `const value = 1; // 타입은 1 로 추론된다`,
                  `// ✅ 1이라는 집합은 number 라는 집합의 부분집합이므로 할당 가능`,
                  `const a = plus1(value);`,
                  ``,
                  `// ❌ true 라는 값에서 추론된 true라는 집합은 number 라는 집합의 부분집합이 아니므로 할당 불가능`,
                  `const b = plus1(true);`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (3) 객체 타입',
          content: (
            <div className="flex flex-col gap-4">
              <CodeSnippet
                code={[
                  `// grade 라는 key의 값 타입이 number인 모든 객체의 집합`,
                  `type Student = {`,
                  `  grade: number;`,
                  `}`,
                  ``,
                  `// ✅ { grade: number } 타입은 { grade: number } 타입의 부분집합이므로 할당 가능`,
                  `const student: Student = { grade: 1 };`,
                  ``,
                  `// ❌ { age: number } 타입은 { grade: number } 타입의 부분집합이 아미므로 할당 불가능`,
                  `const student: Student = { age: 1 };`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (4) 함수 타입',
          content: (
            <div className="flex flex-col gap-4">
              <CodeSnippet
                code={[
                  `// 첫 번째 파라미터는 { grade: number } 타입이고 두 번째 파라미터는 string 타입을 받아서 string을 반환할 수 있는 모든 함수의 집합`,
                  `type Callback = (student: { grade: number }, name: string) => string;`,
                  ``,
                  `// ✅ 되겠죠?`,
                  `const cb: Callback = (student: { grade: number }, name: string) => name + student.grade;`,
                  ``,
                  `// ❌ 리턴값 타입이 안 맞음`,
                  `const cb: Callback = (student: { grade: number }, name: string) => student.grade;`,
                  ``,
                  `// ✅ 이 함수는 Callback 이라는 타입(집합) 의 부분집합이 맞습니다. 왜일까요?`,
                  `const cb: Callback = (student: { grade: number }) => 'hello';`,
                  ``,
                  `// ❌ 첫 번째 파라미터 잘 받았는데, 두 번째로 요구하는 파라미터의 타입이 안 맞아서 불가능`,
                  `const cb: Callback = (student: { grade: number }, name: number) => 'hello';`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title: '타입 시스템 이해하기 (5) 특수 타입들',
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
                  `type D = any | boolean;                // any`,
                  `type E = any & boolean;                // any`,
                ]}
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
          title:
            '타입 시스템 이해하기 (6) 이러면 타입 시스템은 다 이해한 거예요',
          content: (
            <div className="flex flex-col gap-6 leading-10">
              <div>타입 시스템에 대한 이해는 끝입니다</div>
              <div>
                물론 실제로 개발하다 보면 TypeScript 자체 버그도 있고,
                <br />
                freshness 같은 편의기능 때문에 띠용? 할 때도 있긴 한데, 아무튼
                기본 이해는 이게 다예요
              </div>
            </div>
          ),
        },
        {
          title: '제네릭',
          content: (
            <div className="leading-10">
              <p>다른 언어들에서의 제네릭이랑 다르지 않습니다</p>

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
          title: 'infer',
          content: (
            <div className="leading-10">
              <p>
                이거까지 알면 진짜 타입스크립트 문법은 다 뗐다 라고 할 수 있는
                멋지고 어려운 기능
              </p>
              <div>예시 코드만 하나 보여드리고 넘어갈게요</div>
              <CodeSnippet
                code={[`type Awaited<T> = T extends Promise<infer U> ? U : T;`]}
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
                  `if (todo === null) return 'loading...';`,
                  ``,
                  `// 윗 줄에 의해서 todo 변수의 타입이 Todo 로 좁혀졌다`,
                  `return <div>{todo.title}</div>;`,
                ]}
                language="tsx"
              />
              <p>if문 말고 삼항연산자, switch문, typeof 연산자 등도 마찬가지</p>
              <Separator className="my-6" />
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
        {
          title: '타입 시스템이 흥미로우시다면',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                나 이제 타입스크립트 잘 하는 것 같아! 라는 생각이 드신다면{' '}
                <ExternalLink
                  href="https://github.com/type-challenges/type-challenges"
                  label="type challenges"
                />
                를 해보시는 걸 추천드립니다
              </div>
              <p>설명은 생략하겠습니다</p>
              <CodeSnippet
                code={[
                  `type Iterator<n, iterator extends any[] = []> = `,
                  `  iterator['length'] extends n `,
                  `    ? iterator`,
                  `    : Iterator<n, [any, ...iterator]>`,
                  ``,
                  `type Drop1<xs extends any[]> =`,
                  `  xs extends [any, ...infer tail] ? tail : []`,
                  ``,
                  `type LessThanOrEqual<a extends any[], b extends any[]> = `,
                  `  [a, b] extends [[], [any, ...any]] `,
                  `    ? true`,
                  `    : [a, b] extends [[any,...any], []] `,
                  `    ? false`,
                  `    : [a, b] extends [[], []] `,
                  `    ? true`,
                  `    : LessThanOrEqual<Drop1<a>, Drop1<b>>`,
                  ``,
                  `type GreaterThan<a extends any[], b extends any[]> = `,
                  `  [a, b] extends [[], [any, ...any]] `,
                  `    ? false`,
                  `    : [a, b] extends [[any,...any], []] `,
                  `    ? true`,
                  `    : [a, b] extends [[], []] `,
                  `    ? false`,
                  `    : GreaterThan<Drop1<a>, Drop1<b>>`,
                  ``,
                  ``,
                  `type FilterLessThanOrEqual<value, xs extends any[], output extends any[] = []> = `,
                  `  xs extends [infer head, ...infer tail]`,
                  `    ? LessThanOrEqual<Iterator<value>, Iterator<head>> extends true`,
                  `      ? [...output, head, ...FilterLessThanOrEqual<value, tail, output>]`,
                  `      : [...output, ...FilterLessThanOrEqual<value, tail, output>]`,
                  `    : []`,
                  ``,
                  `type FilterGreaterThan<value, xs extends any[], output extends any[] = []> = `,
                  `  xs extends [infer head, ...infer tail]`,
                  `    ? GreaterThan<Iterator<value>, Iterator<head>> extends true`,
                  `      ? [...output, head, ...FilterGreaterThan<value, tail, output>]`,
                  `      : [...output, ...FilterGreaterThan<value, tail, output>]`,
                  `    : []`,
                  ``,
                  `type Sort<xs extends any[], reversed extends boolean = false> = `,
                  `    xs extends [infer head, ...infer tail]`,
                  `      ? reversed extends true`,
                  `        ? [...Sort<FilterLessThanOrEqual<head, tail>, reversed>, head, ...Sort<FilterGreaterThan<head, tail>, reversed>]`,
                  `        : [...Sort<FilterGreaterThan<head, tail>, reversed>, head, ...Sort<FilterLessThanOrEqual<head, tail>, reversed>]`,
                  `      : []`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
      ]}
    />
  ),
});
