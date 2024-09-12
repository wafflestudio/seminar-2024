import { CodeSnippet } from '@/components/CodeSnippet';
import { Description } from '@/components/Description';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

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
                <li>
                  React 어플리케이션에서 서버로 API 콜을 하고 응답을 받아
                  유저에게 보여주는 패턴을 이해한다
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
                  { key: '동기', value: '앞 일이 끝나고 다음 일을 시작한다' },
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
            </div>
          ),
        },
        {
          title: '왜 비동기로 동작해야 할까',
          content: (
            <div>
              <p>느리니까</p>
              <ul className="mt-8 list-disc">
                <li>API 요청</li>
                <li>File System I/O</li>
                <li>&quot;1초 대기&quot; 스펙</li>
              </ul>
            </div>
          ),
        },
      ]}
    />
  ),
});
