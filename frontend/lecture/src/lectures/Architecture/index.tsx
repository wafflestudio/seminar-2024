import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Answer } from '@/components/Answer';
import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { Description } from '@/components/Description';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { StackBadge } from '@/components/StackBadge';
import { Separator } from '@/designsystem/ui/separator';
import { getLectureItem } from '@/lectures';

import naming from './naming.jpg';
import productivity from './productivity.png';

export const architectureLecture = getLectureItem({
  title: '클린 코드와 아키텍처',
  description: 'DRY, SRP, DI',
  date: new Date('2024-10-16 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '왜 잘 만들어야 할까?',
          content: (
            <div>
              <h2 className="text-center text-3xl">다시 봐야 하는 코드니까</h2>
              <ul className="my-4 flex list-disc flex-col gap-2 pl-6">
                <li>가독성</li>
                <li>코드 컨벤션과 일관성</li>
                <li>DRY, SOLID 등 여러 있어보이는 규칙</li>
                <li>자동화 테스트</li>
                <li>결합도와 응집도</li>
              </ul>
              <h2>
                모두 유지보수에 들어가는 비용을 절약하기 위해 존재하는 개념들
              </h2>

              <h2 className="mt-4">
                오늘 여러 개념들이 등장할 텐데, 모두 유지보수를 잘 하기 위한
                목적입니다
              </h2>
            </div>
          ),
        },
        {
          title: '왜 잘 만들어야 할까?',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                하나의 프로젝트를 구현할 때, 보통 코드가 커질수록 개발 생산성이
                낮아지곤 합니다
              </div>
              <div className="mx-auto my-10 flex w-[600px] flex-col">
                <img src={productivity} alt="개발 생산성" />
                <span className="block text-center text-base">
                  개발 생산성이 나빠지는 예시
                </span>
              </div>
              <div>
                이 경우 개발자는 더 많은 시간과 노력을 기존 코드를 이해하는 데에
                소모해야 하며, 회사는 제품을 출시하는 데에 더 오랜 시간과 많은
                돈을 들여야 합니다.
              </div>
              <div>뭐 하나 건드리면 터지고, 버그생기고, 야근하고, ...</div>

              <Separator />

              <div>
                하지만 코드를 잘 짰다면 코드가 커져도 개발 생산성이 대충
                유지됩니다
              </div>
              <div>
                그래서 우리는 코드가 커져도 개발 생산성과 안정성이 유지되도록,{' '}
                <strong>잘 짜야</strong> 합니다.
              </div>
            </div>
          ),
        },
        {
          title: '왜 잘 만들어야 할까?',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                특히 요즘은 AI가 굉장히 빠르게 발전하고 있어서, 만드는 건{' '}
                <strong>진짜</strong> 누구나 합니다
              </div>
              <div>
                <StackBadge stack="Claude Sonnet" />, <StackBadge stack="v0" />{' '}
                등등
              </div>
              <div>
                (개인 생각) 점점 개발자의 역량은 <strong>잘 만드는 것</strong> +
                <strong>문제를 풀어내는 역량</strong>이 중요해질 것
              </div>
            </div>
          ),
        },
        {
          title: '왜 잘 만들어야 할까?',
          content: (
            <div className="flex flex-col gap-4">
              <div>어떻게 보면 개발 공부의 본질이라고도 생각합니다</div>
              <br />
              <div>
                만들어내는 역량은 누구나 조금만 하면 배우지만, 잘 만드는 건 끝이
                없으며 많은 노력과 정성이 필요
              </div>
              <br />
              <div>학문으로서 소프트웨어는 매우 느리게 발전하는 분야</div>
            </div>
          ),
        },
        {
          title: '기본 mindset',
          content: (
            <div className="flex flex-col gap-4 text-3xl">
              <div>잘 만드는 법</div>
              <ol className="my-8 flex flex-col gap-4">
                <li>1. 잘못 만들어서 고통받는다</li>
                <li className="font-extrabold">2. 고민하고 개선한다</li>
                <li>3. 책 등을 통해서 한번씩 인사이트와 지식을 얻어간다</li>
              </ol>

              <div className="text-xl">
                사실 그래서, 이 챕터는 계속 개발을 하다 보면 자연스럽게 성장할
                수 있는 영역
              </div>

              <Callout title="포기하거나 건성으로 치우지 말고, 잘못되어가는 신호에 집중해야 한다" />
            </div>
          ),
        },
        {
          title: '여기까지가 이번 챕터에서 하고 싶은 이야기 전부입니다',
          content: (
            <div className="flex flex-col gap-6">
              <Callout title="다시 강조: 잘못되어가는 신호에 집중해야 한다" />
              <div>하지만 이러고 끝나면 너무 추상적이고 찝찝하니</div>
              <div>
                앞의 3번에서 얘기한 &quot;인사이트와 지식&quot;을 몇 개만
                살펴봅시다
              </div>
              <ol>
                <li>네이밍</li>
                <li>DRY 원칙</li>
                <li>함수형 프로그래밍</li>
                <li>관심사의 분리</li>
                <li>폴더 구조</li>
                <li>리팩토링</li>
              </ol>
              <div className="text-xl opacity-60">
                하지만 이런 원칙들은 모두 누군가가 &quot;내가 이렇게 하니까
                좋더라&quot;라고 말하고 많은 사람들이 공감한 이야기일 뿐, 진리는
                아닙니다
              </div>
            </div>
          ),
        },
        {
          title: '네이밍',
          content: (
            <div>
              <p>가장 기본적이면서도 어려운 것</p>
              <img width={500} src={naming} alt="네이밍" />
              <CodeSnippet
                code={[
                  `// 이름을 이렇게 지으면, 몇 분 뒤에 기억할 수 있을까?`,
                  `const func = (a: number) => {`,
                  `  return a > 1;`,
                  `};`,
                  ``,
                  `// 정직한 이름이긴 한데 아무런 정보가 없다`,
                  `// 굳이 함수로 뺄 필요가 있을까?`,
                  `const validateIsOver1 = (age: number) => {`,
                  `  return age > 1;`,
                  `};`,
                  ``,
                  `// 함수에 명확한 역할을 부여해주는 좋은 이름`,
                  `const validateAge = (age: number) => {`,
                  `  return age > 1;`,
                  `};`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title: `DRY: Don't Repeat Yourself (1)`,
          content: (
            <div>
              <p>아래 코드에서 반복을 찾아봅시다</p>
              <CodeSnippet
                code={[
                  `const fetchTodos = async () => {`,
                  `  const response = await fetch(\`https://jsonplaceholder.typicode.com/todos\`);`,
                  `  const data = await response.json() as TodoResponse[];`,
                  `  return data;`,
                  `};`,
                  ``,
                  `const fetchTodo = async (id: number) => {`,
                  `  const response = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);`,
                  `  const data = await response.json() as TodoResponse;`,
                  `  return data;`,
                  `};`,
                ]}
                language="typescript"
              />
              <Answer answer="https://jsonplaceholder.typicode.com" />
            </div>
          ),
        },
        {
          title: `DRY: Don't Repeat Yourself (2)`,
          content: (
            <div>
              <p>아래 코드에서 반복을 찾아봅시다</p>
              <CodeSnippet
                code={[
                  `const load = () => {`,
                  `  try {`,
                  `    return JSON.parse(localStorage.getItem('2048Data') as BoardData);`,
                  `  } catch (e) {`,
                  `    return null;`,
                  `  }`,
                  `};`,
                  ``,
                  `const save = (data: BoardData) => {`,
                  `  localStorage.setItem('2048Data', JSON.stringify(data));`,
                  `};`,
                ]}
                language="typescript"
              />
              <Answer answer="'2048Data'" />
            </div>
          ),
        },
        {
          title: `DRY: Don't Repeat Yourself (3)`,
          content: (
            <div>
              <p>
                이번엔 아래 ui를 그리기 위한 아래 코드에서 반복을 찾아봅시다
              </p>

              <div className="p-2 text-sm">
                <input
                  className="border bg-transparent"
                  defaultValue="woohm402"
                />
                <span>@gmail.com</span>
              </div>

              <CodeSnippet
                code={[
                  `const [gmailValue, setGmailValue] = useState('');`,
                  ``,
                  `const onSubmit = () => {`,
                  `  registerEmail(gmailValue + '@gmail.com');`,
                  `};`,
                  ``,
                  `return (`,
                  `  <div>`,
                  `    <input`,
                  `      type="text"`,
                  `      value={gmailValue}`,
                  `      onChange={(e) => setGmailValue(e.target.value)}`,
                  `    />`,
                  `    <span>@gmail.com</span>`,
                  `  </div>`,
                  `);`,
                ]}
                language="tsx"
              />
              <Answer answer="@gmail.com" />
            </div>
          ),
        },
        {
          title: `DRY: Don't Repeat Yourself (4)`,
          content: (
            <div>
              <p>아래 코드에서 반복을 찾아봅시다</p>
              <CodeSnippet
                code={[
                  `const validateAge = (age: number) => {`,
                  `  if (age < 1) return false;`,
                  `  return true;`,
                  `};`,
                  ``,
                  `const validateGrade = (grade: number) => {`,
                  `  if (grade < 1) return false;`,
                  `  return true;`,
                  `};`,
                ]}
                language="typescript"
              />
              <Answer answer="없음" />
            </div>
          ),
        },
        {
          title: `DRY: Don't Repeat Yourself (5)`,
          content: (
            <div className="flex flex-col gap-4">
              <div>주석도 반복이다</div>
              <CodeSnippet
                code={[
                  `const validateAge = (age: number) => {`,
                  `  // 이 함수는 a가 1보다 작으면 false를 반환한다`,
                  `  if (age < 1) return false;`,
                  `};`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title: `DRY: Don't Repeat Yourself (6)`,
          content: (
            <div className="flex flex-col gap-4">
              <Callout title="DRY의 정의">
                모든 지식은 시스템 내에서 단 한 번만, 애매하지 않고, 권위 있게
                표현되어야 한다.
              </Callout>
              <div>지식의 반복</div>
              <div>
                중복의 함정에 빠지지 않아야 한다. 똑같이 생겼다고 모두 반복은
                아님
              </div>
              <Callout title="제거해야 하는 반복">
                동일한 시점에 동일한 이유로 동일한 변경이 일어나는 것
              </Callout>
            </div>
          ),
        },
        {
          title: '함수형 프로그래밍 패러다임 (1) 개요',
          content: (
            <div className="flex flex-col gap-4">
              <div>가변성을 최대한 줄이는 패러다임</div>
              <div>
                우리한테 좀더 와닿는 설명: <InlineCode code="let" />,{' '}
                <InlineCode code=".push()" />, <InlineCode code=".splice()" />{' '}
                등을 최대한 쓰지 않는다
              </div>

              <CodeSnippet
                code={[
                  `let sum = 0`,
                  `for (let i = 0; i < array.length; i++) {`,
                  `  sum += array[i];`,
                  `}`,
                ]}
                language="javascript"
              />

              <CodeSnippet
                code={[`const sum = array.reduce((acc, cur) => acc + cur, 0);`]}
                language="javascript"
              />
            </div>
          ),
        },
        {
          title: '함수형 프로그래밍 패러다임 (2) 왜?',
          content: (
            <div className="flex flex-col gap-4">
              <div>가변성만 없으면 동시성 문제는 일어나지 않는다</div>
              <div>변수가 변하지 않는다면 읽어야 할 코드의 양이 줄어든다</div>

              <div className="border p-4">
                <div>가변성이 있는 예시</div>
                <CodeSnippet
                  code={[
                    `const users = [];`,
                    `let totalAge = 0;`,
                    ``,
                    `for (let i = 0; i < rawData.length; i++) {`,
                    `  const user = { ...rawData[i] };`,
                    `  if (user.age >= 18) {`,
                    `    user.isAdult = true;`,
                    `    users.push(user);`,
                    `    totalAge += user.age;`,
                    `  }`,
                    `}`,
                    ``,
                    `const averageAge = totalAge / users.length;`,
                  ]}
                  language="javascript"
                />
              </div>

              <div className="border p-4">
                <div>함수형 프로그래밍으로 해결한 예시</div>
                <CodeSnippet
                  code={[
                    `const users = rawData`,
                    `  .filter(user => user.age >= 18)`,
                    `  .map(user => ({ ...user, isAdult: true }));`,
                    ``,
                    `const totalAge = users.reduce((sum, user) => sum + user.age, 0);`,
                    `const averageAge = totalAge / users.length;`,
                  ]}
                  language="javascript"
                />
              </div>

              <div>가변성을 제거하여 코드의 흐름을 더 쉽게 파악할 수 있다</div>
              <div>지난 시간에 언급했던 타입추론의 이점도 있음</div>
            </div>
          ),
        },
        {
          title: `관심사의 분리 (1) 왜?`,
          content: (
            <div className="flex flex-col gap-4">
              <div>당연한 이야기 1: 모듈이 커질수록 읽기 힘들다</div>
              <div>당연한 이야기 2: 기능이 많아지면 코드가 많아진다</div>
              <div>당연한 이야기 3: 유지보수하려면 기존 코드를 읽어야 한다</div>
              <div className="flex items-center gap-4">
                <ArrowRightIcon />{' '}
                <div>
                  유지보수를 쉽게 하려면, 기능을 추가/수정할 때 읽어야 하는
                  코드의 양이 너무 많지 않아야 한다
                </div>
              </div>
              <div className="mt-10 text-center">
                다시 말해 코드를 잘 쪼개야 한다!
              </div>
            </div>
          ),
        },
        {
          title: `관심사의 분리 (2) 결합도, 응집도, 직교성, ...`,
          content: (
            <div className="flex flex-col gap-4">
              <h2 className="text-center">
                어려운 질문: 모듈을 어떻게 쪼개야 잘 쪼갠 걸까?
              </h2>
              <Description
                items={[
                  { key: '결합도', value: '모듈 간의 의존도' },
                  {
                    key: '응집도',
                    value:
                      '모듈 내부의 기능들이 얼마나 밀접하게 관련되어 있는가',
                  },
                  {
                    key: '직교성',
                    value: '모듈 간의 관계가 얼마나 독립적인가',
                  },
                  {
                    key: '단일 책임 원칙',
                    value: '모든 모듈은 하나의 액터에 대해서만 책임져야 한다',
                  },
                  { key: '...', value: '여러 있어보이는 단어들' },
                ]}
              />
            </div>
          ),
        },
        {
          title: '관심사의 분리 (3) 언제 체감할 수 있을까?',
          content: (
            <div className="flex flex-col gap-4">
              <h2>
                관심사의 분리는 좀 큰 프로젝트에서 해야 체감되기 때문에 이
                쪼끄만한 슬라이드에서 다루기 아주 어렵다
              </h2>

              <div>몇 가지 추상적인 예시를 들어볼게요</div>
              <ul className="flex list-disc flex-col gap-4 py-6 pl-6">
                <li>
                  <StackBadge stack="Axios" /> 를 사용하고 있어서 100개 이상의
                  컴포넌트에 아래 코드처럼 데이터 페칭 로직이 들어가 있는데,
                  Axios에 자체 버그가 발견돼서 fetch 로 변경해야 한다면?
                </li>
                <li>
                  백엔드 Api 엔드포인트가{' '}
                  <InlineCode code="https://snutt-api-dev.wafflestudio.com" />{' '}
                  에서{' '}
                  <InlineCode code="https://snutt-dev.wafflestudio.com/api" />{' '}
                  로 바뀐다면?
                </li>
                <li>
                  <StackBadge stack="React" /> 를 사용하고 있었는데,{' '}
                  <StackBadge stack="Svelte" /> 로 변경해야 한다면?
                </li>
              </ul>
              <CodeSnippet
                code={[
                  `const TodoList = () => {`,
                  `  const [todos, setTodos] = useState<TodoResponse[]>();`,
                  ``,
                  `  useEffect(() => {`,
                  `    let ignore = false;`,
                  ``,
                  `    axios.get<TodoResponse[]>('https://json.typicode.com/todos')`,
                  `      .then(data => !ignore && setTodos(data);`,
                  ``,
                  `    return () => { ignore = true; };`,
                  `  }, []);`,
                  ``,
                  `  return (`,
                  `    <ul>`,
                  `      {todos?.map((todo) => (`,
                  `        <li key={todo.id}>{todo.title}</li>`,
                  `      ))}`,
                  `    </ul>`,
                  `  );`,
                  `};`,
                ]}
                language="tsx"
              />
              <div>
                위같이 생긴 컴포넌트를 일일이 찾아다니면서 axios 를 fetch 로
                바꿔야 한다고 생각해봅니다
              </div>
              <div>
                우리는 <i>바꿔야 하는 것만 바꾸면</i> 되길 바랍니다
              </div>

              <div>
                우리는 <i>코드를 조금만 읽고 조금만 수정하</i>길 바랍니다
              </div>
            </div>
          ),
        },
        {
          title: '관심사의 분리 (4) 예를 들면?',
          content: (
            <div className="flex flex-col gap-4">
              <div className="mt-6">
                대표적으로 API를 호출해서 데이터를 받아오고 가공하는 것 / 받아온
                데이터를 보여주는 것을 분리하는 건 좋은 아이디어일 수 있다
              </div>

              <div>이 코드는</div>
              <CodeSnippet
                code={[
                  `const TodoList = () => {`,
                  `  const [todos, setTodos] = useState<TodoResponse[]>();`,
                  ``,
                  `  useEffect(() => {`,
                  `    let ignore = false;`,
                  ``,
                  `    fetch('https://json.typicode.com/todos')`,
                  `      .then(res => res.json() as Promise<TodoResponse[]>)`,
                  `      .then(data => !ignore && setTodos(data);`,
                  ``,
                  `    return () => { ignore = true; };`,
                  `  }, []);`,
                  ``,
                  `  return (`,
                  `    <ul>`,
                  `      {todos?.map((todo) => (`,
                  `        <li key={todo.id}>{todo.title}</li>`,
                  `      ))}`,
                  `    </ul>`,
                  `  );`,
                  `};`,
                ]}
                language="tsx"
              />

              <div>이렇게 분리할 수 있고</div>
              <CodeSnippet
                code={[
                  `// 이제 프레임워크가 Svelte 로 바뀌어도 이 로직은 살릴 수 있다`,
                  `const fetchTodos = async () => {`,
                  `  const response = await fetch('https://json.typicode.com/todos');`,
                  `  const data = await response.json() as Promise<TodoResponse[]>;`,
                  `  return data;`,
                  `};`,
                  ``,
                  `// 이제 데이터를 불러오는 함수가 바뀌어도 이 컴포넌트는 살릴 수 있다`,
                  `const TodoList = () => {`,
                  `  const [todos, setTodos] = useState<TodoResponse[]>();`,
                  ``,
                  `  useEffect(() => {`,
                  `    let ignore = false;`,
                  ``,
                  `    fetchTodos().then(res => !ignore && setTodos(res));`,
                  ``,
                  `    return () => { ignore = true; };`,
                  `  }, []);`,
                  ``,
                  `  return (`,
                  `    <ul>`,
                  `      {todos?.map((todo) => (`,
                  `        <li key={todo.id}>{todo.title}</li>`,
                  `      ))}`,
                  `    </ul>`,
                  `  );`,
                  `};`,
                ]}
                language="tsx"
              />

              <div>한 술 더 떠서 이렇게도 분리할 수 있으며</div>
              <CodeSnippet
                code={[
                  `// 이제 프레임워크가 Svelte 로 바뀌어도 이 로직은 살릴 수 있다`,
                  `const fetchTodos = async () => {`,
                  `  const response = await fetch('https://json.typicode.com/todos');`,
                  `  const data = await response.json() as Promise<TodoResponse[]>;`,
                  `  return data;`,
                  `};`,
                  ``,
                  `// 이제 데이터를 불러오는 함수가 바뀌어도 이 컴포넌트는 살릴 수 있다`,
                  `const useTodos = () => {`,
                  `  const [todos, setTodos] = useState<TodoResponse[]>();`,
                  ``,
                  `  useEffect(() => {`,
                  `    let ignore = false;`,
                  ``,
                  `    fetchTodos().then(res => !ignore && setTodos(res));`,
                  ``,
                  `    return () => { ignore = true; };`,
                  `  }, []);`,
                  ``,
                  `  return todos;`,
                  `};`,
                  ``,
                  `// 이제 데이터를 불러오는 방식이 바뀌어도 이 뷰는 살릴 수 있다`,
                  `const TodoList = () => {`,
                  `  const todos = useTodos();`,
                  ``,
                  `  return (`,
                  `    <ul>`,
                  `      {todos?.map((todo) => (`,
                  `        <li key={todo.id}>{todo.title}</li>`,
                  `      ))}`,
                  `    </ul>`,
                  `  );`,
                  `};`,
                ]}
                language="tsx"
              />

              <div>아예 패키지로 분리할 수도 있다</div>
              <ExternalLink
                label="가령 제가 snutt 활동할 때 설계했던 방식"
                href="https://github.com/wafflestudio/snutt-frontend/blob/a9c547b6cae8599f1f9be20dd86400fb751c7c72/packages/snutt-api/src/apis/snutt-timetable/index.ts#L22"
              />

              <div className="mt-8">
                하지만 분리를 하면 할수록, 하나 수정할 때 많은 파일을 건드려야
                하게 될 수도 있음
              </div>
            </div>
          ),
        },
        {
          title: '관심사의 분리 (5) 그래서 어떻게?',
          content: (
            <div>
              <Callout title="은총알은 없다" />
              <div>
                너무 분리하면 흐름을 파악하기 어렵고, 너무 합치면 변경에
                유연하게 대응하기 어려움
              </div>
            </div>
          ),
        },
        {
          title: '폴더 구조',
          content: (
            <div>
              <div>
                팀 프로젝트를 시작하면서 아마 가장 어려우셨을 것들 중 하나
              </div>
              <div className="mt-4">
                <div>폴더 구조의 몇 가지 특징</div>
                <ul className="mt-6 list-disc pl-6">
                  <li>
                    관련이 있을수록 가까이 두면 좋고, 관련이 없을수록 멀리 두면
                    좋다
                  </li>
                  <li>
                    해당 생태계에서 일반적으로 채택하는 구조랑 가까우면 처음 볼
                    때 익숙해서 좋을 수 있다
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                가령 리액트 생태계에서 제일 보편적이라고 보이는 구조는
              </div>
              <div className="mt-4 text-sm">
                <InlineCode code="sr/c" />
                <div className="mt-2 flex flex-col items-start gap-2 pl-4">
                  <InlineCode code="api/" />
                  <InlineCode code="components/" />
                  <InlineCode code="hooks/" />
                  <InlineCode code="pages/" />
                  <InlineCode code="utils/" />
                </div>
              </div>
            </div>
          ),
        },
        {
          title: '리팩토링 (1) 리팩토링이란?',
          content: (
            <div>
              <div>기존 코드의 동작 방식을 변경하지 않으면서 코드의 구조를</div>
              <div>재조정하여 코드를 이해하기 쉽고 수정하기 쉽게 만드는 것</div>
            </div>
          ),
        },
        {
          title: '리팩토링 (2) 언제 해야 할까?',
          content: (
            <div className="flex flex-col items-center gap-4">
              <strong>언제든, 리팩토링이 필요하다고 느껴질 때</strong>
              <Callout title="리팩터링이 필요한 코드를 일종의 '종양'이라고 생각하자.">
                종양을 제거하려면 수술이 필요하다. 지금 바로 수술해서 아직
                종양이 작을 때 제거할 수도 있다. 아니면 종양이 자라고 다른
                곳으로 전이할 때까지 놓아둘 수도 있다.
              </Callout>
            </div>
          ),
        },
        {
          title: '시간이 부족해서 리팩토링을 못한다?',
          content: (
            <div>
              <div>
                개발하다 보면 종종 <i>시간이 없어서 대충 짰다</i> 라거나{' '}
                <i>시간이 없어서 리팩은 못했다</i> 와 같은 이야기를 듣게 되는데
              </div>
              <div>현실은, 한번에 잘 짜는 게 훨씬 빠릅니다</div>
            </div>
          ),
        },
        {
          title: '그 밖에도 하고 싶은 말이 너무 많지만..',
          content: (
            <div className="flex flex-col gap-6">
              <h2>특히 의존성 주입, 추상화의 벽, OCP 같은 이야기들</h2>
              <div>
                세미나 레벨에서는 오히려 혼란만 가중할 수 있을 것 같아
                패스하겠습니다
              </div>
              <div>
                중요한 개념이라는 것만 인지하고, 나중에 때가 되면 공부하고
                이해해 주세요
              </div>
            </div>
          ),
        },
      ]}
    />
  ),
});
