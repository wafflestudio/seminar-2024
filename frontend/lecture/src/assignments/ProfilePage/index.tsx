import { getAssignmentItem } from '@/assignments';
import { InlineCode } from '@/components/InlineCode';

export const profilePageAssignment = getAssignmentItem({
  title: '프로필 페이지 제작',
  due: new Date('2021-09-11 23:59:59'),
  element: (
    <ol className="flex h-full list-decimal flex-col justify-center gap-4 pl-8">
      <li>
        프로젝트 이름을 정합니다. 뭐로 할지 잘 모르겠다면{' '}
        <InlineCode code="wafflestudio-seminar-2024-frontend-profile-page-assignment" />
        로 해 주세요
      </li>
      <li>
        <InlineCode code="yarn create vite" /> 로 리액트 프로젝트를 생성합니다.
        앞에서 정한 이름으로 생성해 주세요.
      </li>
      <li>GitHub 에 위 이름대로 repository를 생성합니다.</li>
      <li>그리고 해당 repository를 vercel로 배포합니다.</li>
      <li>
        배포된 사이트 링크와 GitHub repository 링크를 #frontend-잡담 채널에 올려
        주세요
      </li>
      <li>자유롭게 자신의 프로필 페이지를 제작하면서 계속 push해 주세요</li>
      <li>
        완료되면 <InlineCode code="5번 단계" />
        에서 만든 스레드 댓글로 세미나장을 멘션해서 완료했다고 알려주세요
      </li>
    </ol>
  ),
});
