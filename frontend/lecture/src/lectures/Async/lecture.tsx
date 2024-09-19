import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { Description } from '@/components/Description';
import { ExternalLink } from '@/components/ExternalLink';
import { Illust } from '@/components/Illust';
import { InlineCode } from '@/components/InlineCode';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { Slides } from '@/components/Slides';
import { Button } from '@/designsystem/ui/button';
import { getLectureItem } from '@/lectures';
import { cn } from '@/utils/designsystem';

import fetchPromise from './fetch-promise.png';

export const asyncLecture = getLectureItem({
  title: '비동기',
  description: 'callback, Promise, event loop',
  date: new Date('2024-09-25 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '오늘 목표',
          content: (
            <div>
              <ul className="flex list-disc flex-col gap-4">
                <li>비동기의 필요성을 이해한다</li>
                <li>
                  <InlineCode code="setTimeout" /> 등 비동기 API에 익숙해진다
                </li>
                <li>
                  <InlineCode code="Promise" /> 에 익숙해진다
                </li>
                <li>이벤트 루프를 이해한다</li>
              </ul>
              <CodeSnippet
                language="tsx"
                code={[
                  `type UserResponse = {`,
                  `  fullName: string;`,
                  `  email: string;`,
                  `};`,
                  ``,
                  `const fetchUser = async () => {`,
                  `  const response = await fetch('/api/users/me');`,
                  ``,
                  `  return response.json() as Promise<UserResponse>;`,
                  `};`,
                  ``,
                  `export const UserProfile = () => {`,
                  `  const [user, setUser] = useState<UserResponse>();`,
                  ``,
                  `  useEffect(() => {`,
                  `    let ignore = false;`,
                  ``,
                  `    fetchUser().then((user) => {`,
                  `      if (!ignore) setUser(user);`,
                  `    });`,
                  ``,
                  `    return () => { ignore = true; };`,
                  `  }, []);`,
                  ``,
                  `  if (user === undefined) return <div>Loading...</div>;`,
                  ``,
                  `  return <div>{user.name}</div>;`,
                  `};`,
                ]}
              />
            </div>
          ),
        },
        {
          title: '비동기?',
          content: (
            <div className="flex flex-col gap-8">
              <Description
                items={[
                  {
                    key: '동기',
                    value: '앞 일이 끝난 후에 다음 일을 시작한다',
                  },
                  {
                    key: '비동기',
                    value: '앞 일이 끝나는 것과 무관하게 다음 일을 시작한다',
                  },
                ]}
              />

              <p className="text-center">
                즉, 브라우저의 자바스크립트 엔진이
                <br />앞 일이 끝나는 것을 <strong>기다리지 않고</strong> 다음
                일을 하게 하는 것
              </p>

              <Illust>
                <div className="flex gap-8">
                  {['동기', '비동기'].map((label) => {
                    return (
                      <div key={label} className="flex-1">
                        <h2 className="text-center">{label}</h2>
                        <div className="mt-4 grid grid-cols-12">
                          <div
                            className={cn(
                              'col-span-3 row-start-1 h-4 bg-red-500',
                              label === '동기' ? 'col-start-1' : 'col-start-1',
                            )}
                          />
                          <div
                            className={cn(
                              'col-span-5 row-start-2 h-4 bg-blue-500',
                              label === '동기' ? 'col-start-4' : 'col-start-3',
                            )}
                          />
                          <div
                            className={cn(
                              'col-span-1 row-start-3 h-4 bg-green-500',
                              label === '동기' ? 'col-start-9' : 'col-start-2',
                            )}
                          />
                          <div
                            className={cn(
                              'col-span-3 row-start-4 h-4 bg-purple-500',
                              label === '동기' ? 'col-start-10' : 'col-start-2',
                            )}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Illust>
            </div>
          ),
        },
        {
          title: '왜 비동기로 동작해야 할까',
          content: (
            <div className="flex flex-col items-center gap-8">
              <ul className="list-disc">
                <li>API 요청</li>
                <li>File System I/O</li>
                <li>&quot;1초 대기&quot; 스펙</li>
              </ul>
              <p>
                브라우저가 API 응답을 기다리는 동안
                <br />
                스크롤도 안 되고 클릭도 안 되고 뭐 아무것도 안 된다면?
              </p>
              <p>브라우저가 항상 동기적으로만 동작한다면, 매우매우 불편할 것</p>
              <p>
                당연히 웹뿐 아니라 서버, 안드, iOS도 마찬가지로 비동기를
                공부합니다
              </p>
              <Button
                variant="destructive"
                onClick={() => {
                  let sum = 0;

                  for (let i = 0; i < 1000000000; i++) sum += Math.random();

                  alert(`랜덤 숫자 10억개의 합: ${sum}`);
                }}
              >
                동기적으로 숫자 10억개를 랜덤 생성해서 합을 구하는 버튼. 이걸
                클릭하면 사이트가 뻗습니다.
              </Button>
            </div>
          ),
        },
        {
          title: '보통 비동기를 어떻게 구현하냐',
          content: (
            <div className="flex flex-col items-center gap-4">
              <p>아래는 C언어 예시</p>
              <CodeSnippet
                language="c"
                code={[
                  `void* async_task(void* arg) {`,
                  `    sleep(2);  // 비동기 작업 시뮬레이션`,
                  `    printf("비동기 작업 완료!");`,
                  `    return NULL;`,
                  `}`,
                  ``,
                  `int main() {`,
                  `    pthread_t thread;`,
                  `    pthread_create(&thread, NULL, async_task, NULL);`,
                  `    printf("메인 스레드 계속 실행...");`,
                  `    pthread_join(thread, NULL);`,
                  `    return 0;`,
                  `}`,
                ]}
              />
              <p>하지만 Process나 Thread 는 어렵습니다.</p>
            </div>
          ),
        },
        {
          title:
            'JavaScript 는 비동기를 쉽게 처리할 수 있는 (쉽게 처리할 수밖에 없는) 언어',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                JavaScript 진짜 이상한 언어지만 비동기쪽은 정말 잘 만들어져
                있습니다
              </p>
              <p>
                개발자가 process 나 thread 를 신경쓰지 않고 비동기를 구현합니다
              </p>
              <CodeSnippet
                language="javascript"
                code={[
                  `// 콜백`,
                  `setTimeout(() => {`,
                  `  console.log("비동기 작업 완료!");`,
                  `}, 2000);  // 2초 후에 실행`,
                ]}
              />
              <CodeSnippet
                language="javascript"
                code={[
                  `// Promise.then chaining`,
                  `fetch('https://api.example.com')`,
                  `  .then(response => response.json())`,
                  `  .then(data => {`,
                  `    console.log('Data:', data);`,
                  `  })`,
                ]}
              />
              <CodeSnippet
                language="javascript"
                code={[
                  `// Promise async&await`,
                  `async function fetchData() {`,
                  `  const response = await fetch('https://api.example.com');`,
                  `  const data = await response.json();`,
                  `  console.log('Data:', data);`,
                  `}`,
                ]}
              />
            </div>
          ),
        },
        {
          title: '싱글 스레드',
          content: (
            <div className="flex flex-col items-center gap-4">
              <p>
                JavaScript 에는 스레드 개념이 없습니다 (프로세스는 당연히 더욱
                없습니다)
              </p>
              <p>
                JavaScript 의 비동기는 이벤트 루프를 기반으로, 브라우저가
                돌려줍니다
              </p>
              <p>코드를 먼저 보고, 그 다음에 원리를 이해해 보겠습니다</p>
            </div>
          ),
        },
        {
          title: '가장 간단한 예시: setTimeout',
          content: (
            <AssetDescriptionLayout
              asset={
                <CodeSnippet
                  language="javascript"
                  code={[
                    `console.log('1');`,
                    ``,
                    `const callback = () => console.log('2')`,
                    ``,
                    `setTimeout(callback, 1000);`,
                    ``,
                    `console.log('3');`,
                  ]}
                />
              }
              description={[
                '콜백 패턴을 사용하는 대표적인 비동기 코드',
                '1 -> 3 -> 2 순서로 출력된다',
                <>
                  <InlineCode code="setTimeout" /> 은 브라우저가 제공하는 함수
                </>,
                <>
                  <InlineCode code="setTimeout" /> 에 콜백을 넘기면, 브라우저가
                  delay 후에 해당 콜백을 수행해준다
                </>,
                <Callout title="Note" key="callout">
                  JavaScript가 싱글스레드인거지, 브라우저는 스레드 많습니다
                </Callout>,
              ]}
            />
          ),
        },
        {
          title: '콜백 패턴?',
          content: (
            <AssetDescriptionLayout
              asset={
                <div>
                  <CodeSnippet
                    language="javascript"
                    code={[
                      `setTimeout(() => {`,
                      `  console.log('비동기 작업 완료!');`,
                      `}, 2000);`,
                      ``,
                      `// 모양만 다르지 위의 코드랑 동일함`,
                      `const callback = () => console.log('비동기 작업 완료!');`,
                      `setTimeout(callback, 2000);`,
                    ]}
                  />
                  <CodeSnippet
                    language="jsx"
                    code={[
                      `// 비동기 수업에서 다루긴 애매하지만, 이것도 콜백이다`,
                      `return <button onClick={() => setCount(count + 1)} />;`,
                      ``,
                      `// 모양만 다르지 위의 코드랑 동일함`,
                      `const onClick = () => setCount(count + 1);`,
                      `return <button onClick={onClick} />;`,
                      ``,
                      `// 이것도 콜백`,
                      `document.addEventListener('keydown', (event) => {`,
                      `  console.log('키 눌림:', event.key);`,
                      `});`,
                    ]}
                  />
                </div>
              }
              description={[
                '함수의 인자로 함수를 넘겨서, "적절한 시점에 이거 호출해줘" 라고 요청하는 패턴',
                '넘기는 함수를 콜백이라고 부른다',
              ]}
            />
          ),
        },
        {
          title: '콜백 패턴의 단점 (1) 콜백 지옥',
          content: (
            <AssetDescriptionLayout
              asset={
                <CodeSnippet
                  language="javascript"
                  code={[
                    `setTimeout(() => {`,
                    `  foo();`,
                    `  setTimeout(() => {`,
                    `    boo();`,
                    `    setTimeout(() => {`,
                    `      bar();`,
                    `    }, 1000);`,
                    `  }, 1000);`,
                    `}, 1000);`,
                  ]}
                />
              }
              description={['호출이 깊어지면 깊어질수록 가독성이 망가짐']}
            />
          ),
        },
        {
          title: '콜백 패턴의 단점 (2) 에러 처리',
          content: (
            <AssetDescriptionLayout
              asset={
                <CodeSnippet
                  language="javascript"
                  code={[
                    `setTimeout(() => {`,
                    `  try {`,
                    `    foo()`,
                    `    setTimeout(() => {`,
                    `      try {`,
                    `        boo();`,
                    `        setTimeout(() => {`,
                    `          try {`,
                    `            bar();`,
                    `          } catch (error) {`,
                    `            console.error('Error in third setTimeout:', error);`,
                    `          }`,
                    `        }, 1000);`,
                    `      } catch (error) {`,
                    `        console.error('Error in second setTimeout:', error);`,
                    `      }`,
                    `    }, 1000);`,
                    `  } catch (error) {`,
                    `    console.error('Error in first setTimeout:', error);`,
                    `  }`,
                    `}, 1000);`,
                  ]}
                />
              }
              description={[
                '앞의 문제에 이어서, 여기에다가 에러 처리까지 해주려면 더 끔찍해진다',
              ]}
            />
          ),
        },
        {
          title: '콜백 패턴의 단점 (3) 신뢰의 문제',
          content: (
            <AssetDescriptionLayout
              asset={
                <CodeSnippet
                  language="javascript"
                  code={[
                    `import 카드모듈 from '카드번호입력라이브러리';`,
                    ``,
                    `카드모듈.입력받기({`,
                    `  on입력완료: (번호) => {`,
                    `    카드에서돈빼가기(번호);`,
                    `  },`,
                    `});`,
                  ]}
                />
              }
              description={[
                '콜백의 실행 권한은 개발자가 아닌 호출자에게 있다',
                '카드 번호 입력 라이브러리를 만든 사람이 버그를 만들었다면 어떻게 될까?',
                '유저는 결제를 한 번 했는데 돈이 5번 빠져나간다면?',
                '억지스럽다고 느껴질 수 있지만 충분히 가능한 시나리오',
              ]}
            />
          ),
        },
        {
          title: 'Promise',
          content: (
            <AssetDescriptionLayout
              asset={
                <CodeSnippet
                  language="javascript"
                  code={[
                    `import 카드모듈 from '카드번호입력라이브러리';`,
                    ``,
                    `카드모듈`,
                    `  .입력받기()`,
                    `  .then((번호) => {`,
                    `    카드에서돈빼가기();`,
                    `  });`,
                  ]}
                />
              }
              description={[
                'ES6 (2015년) 에 추가된 객체',
                '좀더 발전된 비동기 패턴. 대부분의 비동기 처리는 Promise 로 합니다',
                <>
                  <InlineCode code=".then()" />, <InlineCode code=".catch()" />,{' '}
                  <InlineCode code=".finally()" /> 를 사용해서 콜백 지옥을 해결
                </>,
                '콜백의 실행 권한이 개발자도 호출자도 아닌 브라우저에게 있으므로 신뢰할 수 있음',
                '',
                'Pending, Fulfilled, Rejected 세 가지 상태를 가지는 특수한 객체',
                '처음에는 Pending',
                'Fullfilled 상태가 되면 then() 으로 전달받은 콜백을 수행',
                'Rejected 상태가 되면 catch() 로 전달받은 콜백을 수행',
              ]}
            />
          ),
        },
        {
          title: 'Promise 예시 코드: API 호출',
          content: (
            <div>
              <CodeSnippet
                language="javascript"
                code={[
                  `fetch('https://jsonplaceholder.typicode.com/todos/1')`,
                  `  .then((response) => response.json())`,
                  `  .then((data) => window.alert(data.title))`,
                ]}
              />
              <Button
                onClick={() => {
                  fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then((response) => response.json())
                    .then((data: { title: string }) => {
                      window.alert(data.title);
                    })
                    .catch(() => {});
                }}
              >
                위 코드 실행해보기
              </Button>
              <div className="mt-4">
                <InlineCode code="fetch()" /> 는 http 요청을 한 다음 요청 결과를
                담<strong>을</strong>Promise 를 반환하는 함수
              </div>

              <p className="mt-4">
                이 점이 중요합니다. &quot;담은&quot; 아니고
                &quot;담을&quot;입니다.
              </p>

              <img src={fetchPromise} />
            </div>
          ),
        },
        {
          title: 'async 와 await',
          content: (
            <div className="flex flex-col gap-4">
              <div>
                그러면 <InlineCode code=".then()" /> 이 최선이냐?
              </div>
              <div>
                물론 좋지만, 조금 더 동기적인 코드처럼 보이는 문법이 있음
              </div>
              <CodeSnippet
                language="javascript"
                code={[
                  `const fetchAndAlert = () => {`,
                  `  fetch('https://jsonplaceholder.typicode.com/todos/1')`,
                  `    .then((response) => response.json())`,
                  `    .then((data) => window.alert(data.title))`,
                  `    .catch(() => console.error('에러 발생'));`,
                  `}`,
                ]}
              />
              <CodeSnippet
                language="javascript"
                code={[
                  `const fetchAndAlert = async () => {`,
                  `  try {`,
                  `    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');`,
                  `    const data = await response.json();`,
                  `    window.alert(data.title);`,
                  `  } catch (error) {`,
                  `    console.error('Error:', error);`,
                  `  }`,
                  `}`,
                ]}
              />
              <div>async function 에서는 await 이라는 문법을 쓸 수 있다</div>
              <div>
                이 경우 then 콜백의 파라미터로 넘어올 게 함수 반환값처럼
                내려오고
              </div>
              <div>catch 콜백의 파라미터로 넘어올 게 throw 된 에러</div>
              <div>
                좀더 동기적인 코드처럼 보이게 해 줘서 읽기 편하게 만드는
                syntatic sugar입니다
              </div>
            </div>
          ),
        },
        {
          title: '우리는',
          content: (
            <div className="flex flex-col gap-4">
              <p>콜백, Promise 둘다 알아야 하고 둘다 씁니다</p>
              <p>개발자가 둘 중 하나를 선택할 수 있는 건 아님</p>
              <p>
                대부분의 최신 비동기 코드는 Promise 로 써야 하도록 설계되어
                있습니다
              </p>
              <p>
                단, <InlineCode code="setTimeout" /> 같은 옛날 기술은 콜백
                패턴으로 써야 할 수도 있음
              </p>
              <p>
                Promise 쓸 땐 대부분의 경우 async/await 문법을 사용하게 됩니다
              </p>
              <CodeSnippet
                language="javascript"
                code={[
                  `// 아마도 제일 많이 보게 될 형태`,
                  `const fetchAndAlert = async () => {`,
                  `  try {`,
                  `    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');`,
                  `    const data = await response.json();`,
                  `    return data as { title: string };`,
                  `  } catch (error) {`,
                  `    console.error('Error:', error);`,
                  `  }`,
                  `}`,
                ]}
              />
            </div>
          ),
        },
        {
          title: '몇 가지 퀴즈와 예제들',
          content: (
            <div>
              <p>출력 결과를 예상해봅시다</p>
              <CodeSnippet
                code={[
                  `setTimeout(() => console.log(1), 0);`,
                  `console.log(2);`,
                  `setTimeout(() => console.log(3), 1000);`,
                  `console.log(4);`,
                  `setTimeout(() => console.log(5), 2000);`,
                  `console.log(6);`,
                  `setTimeout(() => console.log(7), 3000);`,
                ]}
                language="javascript"
              />
              <CodeSnippet
                code={[
                  `fetch('https://jsonplaceholder.typicode.com/todos/1')`,
                  `  .then(() => console.log(1));`,
                  ``,
                  `console.log(2);`,
                ]}
                language="javascript"
              />
              <CodeSnippet
                code={[
                  `fetch('https://jsonplaceholder.typicode.com/todos')`,
                  `  .then(() => console.log(1));`,
                  ``,
                  `fetch('https://jsonplaceholder.typicode.com/todos/1')`,
                  `  .then(() => console.log(2));`,
                ]}
                language="javascript"
              />
            </div>
          ),
        },
        {
          title: 'JavaScript는 어떻게 싱글 스레드로 비동기를 처리할까?',
          content: (
            <div className="flex flex-col gap-8">
              <p>
                JavaScript 는 기계어로 컴파일되는 게 아닌, 런타임이 실행해주는
                언어
              </p>
              <p>런타임이 이런 느낌으로 돌린다 (이벤트 루프)</p>
              <CodeSnippet
                code={[
                  `while (queue.waitForMessage()) {`,
                  `  queue.processNextMessage();`,
                  `}`,
                ]}
                language="javascript"
              />
              <p>
                자바스크립트 런타임이 계속 돌면서, 큐에 할 일이 있다면 실행한다
              </p>
              <div>
                <InlineCode code="Promise" />, <InlineCode code="setTimeout" />{' '}
                등은 큐에 할 일을 넣는다
              </div>
              <ExternalLink
                href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/#why-this-happens"
                label="지금까지 본 글 중에 제일 좋은 설명. 같이 조금만 읽어봅시다"
              />
            </div>
          ),
        },
      ]}
    />
  ),
});
