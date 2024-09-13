import { BoxIcon, LaptopIcon, TableIcon } from '@radix-ui/react-icons';

import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

import jsonPlaceholderExample from './jsonplaceholder-example.png';
import snuttExample from './snutt-example.png';

export const dataFetchingLecture = getLectureItem({
  title: 'API 통신하기',
  description: 'API, HTTP',
  date: new Date('2024-09-25 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '(OT 복습) 프론트엔드 - 백엔드 구조',
          content: (
            <div className="flex gap-8">
              {[
                { Icon: LaptopIcon, label: '브라우저' },
                { Icon: BoxIcon, label: '서버' },
                { Icon: TableIcon, label: 'DB' },
              ].map(({ Icon, label }, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Icon className="h-20 w-20" />
                  <div>{label}</div>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: '(OT 복습) API란?',
          content: (
            <div className="flex flex-col gap-8">
              <p>API (Application Programming Interface)</p>
              <p>프로그램 간 약속</p>
              <p>브라우저 API, OS API, ...</p>
              <p>비슷하게, 프론트엔드도 백엔드가 제공하는 API를 이용한다</p>
              <div className="rounded-md bg-accent p-6">
                <h3 className="text-sm">예시</h3>
                <div className="mt-6 leading-10">
                  <InlineCode code="https://jsonplaceholder.typicode.com/todos" />
                  로 <InlineCode code="HTTP GET" /> 요청을 보내면 userId, id,
                  title, completed 키가 있는 JSON 배열 형태의 응답을 내려줄게
                </div>
              </div>
            </div>
          ),
        },
        {
          title: '(OT 복습) HTTP',
          content: (
            <div>
              <p>HyperText Transfer Protocol</p>
              <p>데이터를 주고받기 위한 통신 규약</p>
              <p>크게 method, path, header, body로 구성</p>
              <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
                <li>method: 요청의 종류 (GET, POST, PUT, DELETE 등)</li>
                <li>path: 요청 대상 리소스의 위치 (url)</li>
                <li>
                  header: 요청에 대한 부가적인 정보 (인증 토큰, 컨텐츠 타입 등)
                </li>
                <li>
                  body: 요청에 포함되는 데이터 (주로 POST, PUT, PATCH 요청에서
                  사용)
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: '(OT 복습) JSON',
          content: (
            <div className="flex flex-col gap-6">
              <p>JavaScript Object Notation</p>
              <p>데이터를 표현하는 문자열</p>
              <InlineCode code={`"{ "name": "우현민", "age": 23 }"`} />
              <p>JavaScript의 객체와 거의 동일한 형태. 복받은거예요</p>
              <p>API 응답/요청 내용의 대부분은 JSON 형태로 내려온다</p>
            </div>
          ),
        },
        {
          title: 'fetch() API',
          content: (
            <div>
              <ExternalLink
                href="https://developer.mozilla.org/ko/docs/Web/API/Fetch_API"
                label="MDN Docs"
              />

              <CodeSnippet
                code={[
                  `fetch('https://jsonplaceholder.typicode.com, {`,
                  `  method: 'GET'`,
                  `  headers: {`,
                  `    'Content-Type': 'application/json'`,
                  `  }`,
                  `})`,
                ]}
                language="javascript"
              />
            </div>
          ),
        },
        {
          title: 'API 요청/응답 스펙 예시 (1) JSON Placeholder',
          content: (
            <div>
              <ExternalLink href="https://jsonplaceholder.typicode.com/guide/" />
              <img src={jsonPlaceholderExample} />
            </div>
          ),
        },
        {
          title: 'API 요청/응답 스펙 예시 (2) SNUTT',
          content: (
            <div>
              <ExternalLink href="https://snu4t-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/" />
              <img src={snuttExample} />
            </div>
          ),
        },
        {
          title: '직접 API 요청 해 보기',
          content: (
            <div>
              <p>
                브라우저 개발자 도구 열고, JSON Placeholder 에 GET 요청을
                보내보세요
              </p>
              <br />
              <p>
                제한시간 2분, 2분 후에 랜덤으로 한 분 잘 하셨는지 체크하러
                가겠습니다
              </p>
            </div>
          ),
        },
        {
          title: 'React 에서 API 통신하기: 가장 기본적인 형태',
          content: (
            <div>
              <p className="mb-8">
                <InlineCode code="useEffect" />
                에서 호출하고 상태에 저장한다
              </p>
              <ExternalLink href="https://ko.react.dev/reference/react/useEffect#fetching-data-with-effects" />
              <CodeSnippet
                code={[
                  `type TodoResponse = { userId: number; id: number; title: string; completed: boolean }`,
                  ``,
                  `const fetchTodo = async (id: number) => {`,
                  `  const response = await fetch(\`https://jsonplaceholder.typicode.com/todos/$\{id}\`);`,
                  `  const data = await response.json() as TodoResponse;`,
                  `  return data;`,
                  `}`,
                  ``,
                  `export const TodoItem = ({ id }: { id: number }) => {`,
                  `  const [todo, setTodo] = useState<TodoResponse>();`,
                  ``,
                  `  useEffect(() => {`,
                  `    let ignore = false;`,
                  `    fetchTodo(id).then((data) => {`,
                  `      if (!ignore) setTodos(data));`,
                  `    });`,
                  `    return () => { ignore = true; };`,
                  `  }, [id]);`,
                  ``,
                  `  return (`,
                  `    <div>`,
                  `      {todo ? todo.title : 'Loading...'}`,
                  `    </div>`,
                  `  );`,
                  `}`,
                ]}
                language="tsx"
              />
            </div>
          ),
        },
        {
          title: 'API 통신 시 주의할 점',
          content: (
            <div>
              <ul className="flex list-disc flex-col gap-6">
                <li>비동기니까, 당연히 처음에는 상태가 비어있습니다.</li>
                <li>
                  버그를 방지하기 위해 useEffect cleanup (ignore 처리)는
                  필수입니다.
                </li>
                <li>
                  비동기는 동기 프로그래밍보다 어렵습니다. 익숙하지 않다면 async
                  await 을 이리저리 붙였다 뗐다 하면서 문법을 가지고 삽질하시게
                  될 가능성이 높은데, 무슨 코드를 짜고 있는 건지 고민하고
                  이해하면 훨씬 시간을 절약할 수 있습니다. 워낙 어려운 부분이니
                  (늘 그랬지만) 질문도 편하게 하셔도 됩니다.
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: '잠시 성능에 대한 이야기',
          content: (
            <div>
              <p>
                이 방법이 CSR 형태의 리액트 SPA 어플리케이션에서 데이터 페칭
                정석이긴 합니다만, 성능적으로 하자가 있습니다. 너무 늦게
                호출해요
              </p>
              <p>
                이에 대한 이야기는 &quot;성능과 SSR&quot; 섹션에서 다시
                다루겠습니다
              </p>
            </div>
          ),
        },
        {
          title: 'todo list 만들어보기 라이브코딩',
          content: (
            <div>
              https://jsonplaceholder.typicode.com 의 todo 목록을 버튼 클릭으로
              왔다갔다 할 수 있는 코드
            </div>
          ),
        },
      ]}
    />
  ),
});
