import { getAssignmentItem } from '@/assignments';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/designsystem/ui/card';

export const environmentSetupAssignment = getAssignmentItem({
  title: '개발 환경 설정',
  due: new Date('2024-09-10 23:59:59'),
  member: '개인',
  element: (
    <div className="flex h-full flex-col justify-center gap-4">
      <Card>
        <CardHeader className="mb-4 text-center">
          <CardTitle>과제</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="itemc flex list-disc flex-col gap-4 pl-10">
            <li>
              개발 환경 셋업 완료 후 아래 가이드에 따라
              <a
                className="mx-2 underline"
                target="_blank"
                href="https://wafflestudio2-dqe6104.slack.com/archives/C07J7K23QUB"
                rel="noreferrer"
              >
                #frontend-잡담
              </a>
              채널에 로컬 화면 녹화해서 업로드
              <ExternalLink
                className="ml-4"
                href="https://wafflestudio2-dqe6104.slack.com/archives/C07J7K23QUB/p1724839060380939"
                label="제출 예시 보기"
              />
            </li>
            <li>잘 안 되는 건 채널이나 조원 통해서 질문</li>
            <li>조원이 잘 해결 못하고 있다면 적극적으로 도와주기</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="flex flex-col items-center gap-10 text-base">
        <CardHeader className="text-center">
          <CardTitle>가이드</CardTitle>
          <CardDescription>
            아래 순서대로 수행해 주세요. 더 잘 할 수 있다면 더 잘 하셔도 됩니다.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ol className="flex list-decimal flex-col gap-4 pl-10">
            <li>
              터미널에서 <InlineCode code="git -v" />
            </li>
            <li>
              터미널에서 <InlineCode code="nvm -v" />
            </li>
            <li>
              <InlineCode code="(seminar-2024)/frontend/lecture" /> 경로에서{' '}
              <InlineCode code="yarn install" />
            </li>
            <li>
              동일 경로에서 <InlineCode code="code ." /> 해서 VSCode 열기
            </li>
            <li>
              <InlineCode code="src/designsystem/ui/separator.tsx" /> 파일
              찾아서 열고
            </li>
            <li>첫 번째 줄이랑 두 번째 줄 순서 변경</li>
            <li>빨간 줄 잘 뜨는 거 확인</li>
            <li>
              <InlineCode code="(ctrl or cmd) + shift + p" /> 하고{' '}
              <InlineCode code="save without formatting" /> 찾아서 엔터
            </li>
            <li>
              vscode 터미널에서 <InlineCode code="yarn lint" /> 해서 린트 터지는
              거 확인
            </li>
            <li>
              다시 에디터에서 <InlineCode code="(ctrl or cmd) + s" /> 로
              저장해서 문제가 자동으로 고쳐지는 거 확인
            </li>
            <li>
              vscode 터미널에서 <InlineCode code="yarn dev" /> 로 개발 서버 실행
            </li>
            <li>
              크롬에서 <InlineCode code="http://localhost:3025" /> 접속하고
              개발자 도구 연 다음 이 과제 페이지까지 진입
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  ),
});
