import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Answer } from '@/components/Answer';
import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { Description } from '@/components/Description';
import { ExternalLink } from '@/components/ExternalLink';
import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

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
          title: '(복습) 만드는 건 누구나 한다',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                특히 요즘은 AI가 굉장히 빠르게 발전하고 있어서, 만드는 건{' '}
                <strong>진짜</strong> 누구나 합니다
              </div>
              <div>Claude Sonnet, v0 등등</div>
              <div>
                (개인 생각) 점점 개발자의 역량은 <strong>잘 만드는 것</strong> +
                <strong>문제를 풀어내는 역량</strong>이 중요해질 것
              </div>
            </div>
          ),
        },
        {
          title: '여러 이름있는 원칙들이나 아키텍처들',
          content: (
            <div className="flex flex-col gap-6">
              <div>SRP, DRY, 헥사고날, 클린아키텍처, ...</div>
              <div>
                소프트웨어라는 학문에 존재하던 진리도 아니고, 누군가를 가르치기
                위해 존재하는 개념들이 아님
              </div>
              <div>
                <i>내가 이렇게 해보니까 좋더라</i> 에 많은 사람들이 공감하여
                원칙으로 굳어진 것들
              </div>
              <div>여러분도 개발하다 보면 느끼실 것들</div>
              <div>
                그래서 개념을 개념 자체로만 받아들이고 외우려 하면 개념들끼리
                서로 상충하기도 하고, 혼란스러울 수 있습니다
              </div>
              <div>또한 상황에 따라 개념의 중요도가 달라지기도 한다</div>
              <div>
                따라서 개념을 외우기보단 개념이 가지고 있는 배경과 철학을
                이해하고 공감하는 게 중요
              </div>
            </div>
          ),
        },
        {
          title: '네이밍',
          content: (
            <div>
              <p>이름 짓기</p>
              <CodeSnippet
                code={[
                  `// 이름을 이렇게 지으면, 몇 분 뒤에 기억할 수 있을까?`,
                  `const func = (a: number) => {`,
                  `  return a > 1;`,
                  `};`,
                  ``,
                  `// 정직한 이름이긴 한데 아무런 정보가 없다`,
                  `// 유틸함수를 의도했다면 이런 식도 괜찮긴 함`,
                  `const validateIsOver1 = (age: number) => {`,
                  `  return age > 1;`,
                  `};`,
                  ``,
                  `// 정보와 정책이 담겨있고 역할이 부여되는 이름`,
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
              <p>아래 코드에서 중복을 찾아봅시다</p>
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
              <p>
                이번엔 아래 ui를 그리기 위한 아래 코드에서 중복을 찾아봅시다
              </p>

              <div className="p-2 text-sm">
                <input
                  className="border border-black"
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
          title: `DRY: Don't Repeat Yourself (3)`,
          content: (
            <div>
              <p>아래 코드에서 중복을 찾아봅시다</p>
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
              <Answer answer="중복 없음" />
            </div>
          ),
        },
        {
          title: `DRY: Don't Repeat Yourself (4)`,
          content: (
            <div className="flex flex-col gap-4">
              <div>주석도 중복이다</div>
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
          title: `DRY: Don't Repeat Yourself (5)`,
          content: (
            <div className="flex flex-col gap-4">
              <Callout title="DRY의 정의">
                모든 지식은 시스템 내에서 단 한 번만, 애매하지 않고, 권위 있게
                표현되어야 한다.
              </Callout>
              <div>지식의 중복</div>
              <div>
                중복의 함정에 빠지지 않아야 한다. 똑같이 생겼다고 모두 중복은
                아님
              </div>
              <Callout title="중복의 정의">
                동일한 시점에 동일한 이유로 동일한 변경이 일어나는 것
              </Callout>
            </div>
          ),
        },
        {
          title: `관심사의 분리 (1) 왜?`,
          content: (
            <div className="flex flex-col gap-4">
              <div>당연한 이야기 1: 모듈이 커질수록 읽기 힘들다</div>
              <div>당연한 이야기 2: 기능이 많아지면 코드가 많아진다</div>
              <div className="flex items-center gap-4">
                <ArrowRightIcon />{' '}
                <div>
                  코드가 많아지면 기능을 <strong>잘</strong> 쪼개야 한다
                </div>
              </div>
            </div>
          ),
        },
        {
          title: `관심사의 분리 (2) 결합도, 응집도, 직교성, ...`,
          content: (
            <div className="flex flex-col gap-4">
              <h2 className="text-center">
                모듈을 어떻게 쪼개야 잘 쪼갠 걸까?
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
          title: '관심사의 분리 (3) 예를 들면?',
          content: (
            <div className="flex flex-col gap-4">
              <h2>
                관심사의 분리는 좀 큰 프로젝트에서 해야 체감되기 때문에
                세미나에서 다루기 아주 어렵다
              </h2>

              <div className="mt-6">
                대표적으로 API를 호출해서 데이터를 받아오고 가공하는 것 / 받아온
                데이터를 보여주는 것을 분리할 수 있다
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
                  `const fetchTodos = async () => {`,
                  `  const response = await fetch('https://json.typicode.com/todos');`,
                  `  const data = await response.json() as Promise<TodoResponse[]>;`,
                  `  return data;`,
                  `};`,
                  ``,
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
                  `const fetchTodos = async () => {`,
                  `  const response = await fetch('https://json.typicode.com/todos');`,
                  `  const data = await response.json() as Promise<TodoResponse[]>;`,
                  `  return data;`,
                  `};`,
                  ``,
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
                  `const TodoList = () => {`,
                  `  const [todos, setTodos] = useTodos();`,
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

              <div>아예 파일도 분리할 수 있다</div>
              <ExternalLink
                label="가령 제가 snutt 활동할 때 설계했던 방식"
                href="https://github.com/wafflestudio/snutt-frontend/blob/a9c547b6cae8599f1f9be20dd86400fb751c7c72/packages/snutt-api/src/apis/snutt-timetable/index.ts#L22"
              />
            </div>
          ),
        },
        {
          title: '관심사의 분리 (4) 그래서 어떻게?',
          content: (
            <div>
              <Callout title="은총알은 없다" />
              <div>지속적인 관심, 노력, 경험, 학습이 필요하다</div>
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
