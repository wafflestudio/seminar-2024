import { Link } from 'react-router-dom';

import { getAssignmentItem } from '@/assignments';
import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';

export const profilePageAssignment = getAssignmentItem({
  title: '프로필 페이지 제작',
  due: new Date('2021-09-11 23:59:59'),
  element: (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <ol className="flex list-decimal flex-col justify-center gap-4 pl-8">
        <li>
          프로젝트 이름을 정합니다. 뭐로 할지 잘 모르겠다면{' '}
          <InlineCode code="wafflestudio-seminar-2024-frontend-profile-page-assignment" />
          로 해 주세요
        </li>
        <li>GitHub 에 위 이름대로 repository를 생성합니다.</li>
        <li>
          <InlineCode code="yarn create vite" /> 로 리액트 프로젝트를
          생성합니다. 앞에서 정한 이름으로 생성해 주세요.
        </li>
        <li>
          해당 프로젝트에서 아래와 같이 git remote 를 연결하고 push합니다.
          <CodeSnippet
            code={[
              'git init',
              'git remote add origin https://github.com/(내 유저네임)/(프로젝트 이름)',
              'git push origin main',
            ]}
            language="shell"
          />
        </li>
        <li>그리고 해당 repository를 vercel로 배포합니다.</li>
        <li>
          배포된 사이트 링크와 GitHub repository 링크를 #frontend-잡담 채널에
          올려 주세요. 내용이나 스타일은{' '}
          <Link to="/OT" className="underline">
            OT에 있는 제 소개 슬라이드
          </Link>{' '}
          정도면 됩니다.
        </li>
        <li>자유롭게 자신의 프로필 페이지를 제작하면서 계속 push해 주세요</li>
        <li>
          완료되면 <InlineCode code="6번 단계" />
          에서 만든 스레드 댓글로 세미나장을 멘션해서 완료했다고 알려주세요
        </li>
      </ol>
      <ExternalLink
        href="https://wafflestudio2-dqe6104.slack.com/archives/C07J7K23QUB/p1725179752382779"
        label="예시 보기"
      />
    </div>
  ),
});
