import { getAssignmentItem } from '@/assignments';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';

export const profilePageAssignment = getAssignmentItem({
  title: '프로필 페이지 제작',
  due: new Date('2021-09-11 23:59:59'),
  element: (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <ol className="flex list-decimal flex-col justify-center gap-4 pl-8 leading-10">
        <li>
          프로젝트 이름을 정합니다.
          <InlineCode code="wafflestudio-seminar-2024-frontend-profile-page-assignment" />
          로 하셔도 되고 <InlineCode code="profile-page" />로 하셔도 됩니다
        </li>
        <li>Template Repository에서 위 이름대로 생성하고 클론합니다.</li>
        <li>그리고 해당 repository를 vercel로 배포합니다.</li>
        <li>
          배포된 사이트 링크와 GitHub repository 링크를 #frontend-잡담 채널에
          올려 주세요. 내용이나 스타일은 아래에 있는 예시 정도면 됩니다.
        </li>
        <li>
          자유롭게 자신의 프로필 페이지를 제작하면서, 계속 (브랜치 파고
          머지하고) 를 반복해 주세요. 브랜치 이름 규칙은 없습니다.
        </li>
        <li>
          완료되면 <InlineCode code="6번 단계" />
          에서 만든 스레드 댓글로 세미나장을 멘션해서 완료했다고 알려주세요
        </li>
      </ol>
      <ExternalLink
        href="https://wafflestudio2-dqe6104.slack.com/archives/C07J7K23QUB/p1725179752382779"
        label="제출 예시 보기"
      />
    </div>
  ),
});
