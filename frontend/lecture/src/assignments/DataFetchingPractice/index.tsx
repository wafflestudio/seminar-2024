import { getAssignmentItem } from '@/assignments';
import { InlineCode } from '@/components/InlineCode';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/designsystem/ui/card';

const Design = () => {
  return (
    <div className="flex items-stretch bg-card p-4">
      <div className="flex-1 p-4">
        <h2>포스트 목록</h2>
        <ul className="mt-4 flex flex-col gap-2">
          <li>
            <button className="flex w-full cursor-pointer gap-2 rounded p-2 text-left text-sm hover:opacity-50">
              <strong>1.</strong>
              <div>
                sunt aut facere repellat provident occaecati excepturi optio
                reprehenderit
              </div>
            </button>
          </li>
          <li>
            <button className="flex w-full cursor-pointer gap-2 rounded p-2 text-left text-sm hover:opacity-50">
              <strong>2.</strong>
              <div>qui est esse</div>
            </button>
          </li>
          <li>
            <button className="flex w-full cursor-pointer gap-2 rounded bg-accent p-2 text-left text-sm">
              <strong>3.</strong>
              <div>
                ea molestias quasi exercitationem repellat qui ipsa sit aut
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-0.5 bg-border" />
      <div className="flex flex-1 flex-col gap-8 p-4">
        <div>
          <h3>내용</h3>
          <div className="mt-4 text-sm">
            quia et suscipit suscipit recusandae consequuntur expedita et cum
            reprehenderit molestiae ut ut quas totam nostrum rerum est autem
            sunt rem eveniet architecto
          </div>
        </div>
        <div>
          <h3>댓글</h3>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex flex-col gap-2 rounded p-2 text-sm">
              <strong>작성자: Eliseo@gardner.biz</strong>
              <div>
                laudantium enim quasi est quidem magnam voluptate ipsam eos
                tempora quo necessitatibus dolor quam autem quasi reiciendis et
                nam sapiente accusantium
              </div>
            </li>
            <li className="flex flex-col gap-2 rounded p-2 text-sm">
              <strong>작성자: Jayne_Kuhic@sydney.com</strong>
              <div>
                est natus enim nihil est dolore omnis voluptatem numquam et
                omnis occaecati quod ullam at voluptatem error expedita pariatur
                nihil sint nostrum voluptatem reiciendis et
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const SmallCode = ({ code }: { code: string }) => (
  <b className="text-sm">
    <InlineCode code={code} />
  </b>
);

export const dataFetchingPracticeAssignment = getAssignmentItem({
  due: new Date('2024-10-02 23:59:59'),
  member: '개인',
  title: '데이터 페칭 연습',
  element: (
    <div className="flex flex-col gap-5 p-10">
      <Card>
        <CardHeader>
          <CardTitle>과제 개요</CardTitle>
        </CardHeader>
        <CardContent className="leading-10">
          JSON Placeholder가 제공하는 포스트들과 포스트들의 댓글 목록을 조회할
          수 있는 어플리케이션을 만들어주세요.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="leading-10">디자인 명세</CardTitle>
          <CardDescription>
            아래 빨간 박스랑 비슷하게 생기면 됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <article className="mt-2 border border-red-500">
            <Design />
          </article>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>기능 명세</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="mt-2 flex list-disc flex-col gap-2 pl-4 text-base">
            <li>화면은 좌우 두 개의 섹션이 있습니다.</li>
            <li>
              왼쪽 섹션에는 포스트 목록이 있습니다.{' '}
              <SmallCode code="GET https://jsonplaceholder.typicode.com/posts" />{' '}
              API를 통해 포스트 목록에 접근할 수 있습니다.
            </li>
            <li>
              포스트는 클릭해서 선택할 수 있습니다. 처음 접속해서 아직 클릭하지
              않았다면, 디폴트로 첫 번째 포스트가 선택되어 있으면 됩니다. 포스트
              목록을 받아왔는데 하나도 없는 케이스는 고려하지 않습니다.
            </li>
            <li>
              오른쪽 섹션에 선택된 포스트의 내용과 댓글 목록이 나타납니다.
              <br />
              포스트 내용은 목록 API에서 받은 걸 그대로 써도 되고,{' '}
              <SmallCode code="GET https://jsonplaceholder.typicode.com/posts/{postId}" />{' '}
              API를 통해 새로 받아와서 그려도 됩니다.
              <br />
              <SmallCode code="GET https://jsonplaceholder.typicode.com/posts/{postId}/comments" />{' '}
              API를 통해 댓글 목록을 가져올 수 있습니다.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>제출 방법 및 힌트</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 text-xl">
            <li>
              2048 제출했던 것처럼 프로젝트 초기화하고 구현하고 제출해 주세요.
            </li>
            <li>
              아마도 핵심 컴포넌트는 크게 <SmallCode code="App" />{' '}
              <SmallCode code="PostList" /> <SmallCode code="PostDetail" /> 이
              필요할 것 같고
            </li>
            <li>
              아마도 <SmallCode code="App" /> 에 <SmallCode code="posts" />{' '}
              상태와
              <SmallCode code="selectedPostID" /> 상태가,{' '}
              <SmallCode code="PostDetail" />에 <SmallCode code="comments" />{' '}
              상태가 필요할 것 같습니다. 다르게 할 수도 있구요
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  ),
});
