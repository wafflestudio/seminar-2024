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

export const snuttCloneCoding1Assignment = getAssignmentItem({
  title: 'SNUTT 클론코딩 (1)',
  due: new Date('2024-10-16 23:59:59'),
  element: (
    <div className="flex flex-col gap-12">
      <Card>
        <CardHeader>
          <CardTitle>SNUTT 클론코딩 (1)</CardTitle>
          <CardDescription>snutt 로그인 구현</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8">
          <div>
            SNUTT 모바일 앱을 웹뷰 앱 형태로 만들 거예요. 이번 과제 목표는
            로그인 & 내 닉네임 조회하기 입니다.
          </div>
          <div>
            로그인되지 않았을 경우 피그마랑 완전히 똑같이 생긴 로그인 화면이
            보여야 합니다.
          </div>
          <div>
            로그인 화면에서 아이디 비밀번호로 로그인할 수 있어야 합니다.
            회원가입 버튼이나 소셜 로그인 버튼은 눌러도 아무 동작 안 하게 해
            주세요
            <br />
            이때 <InlineCode code="POST /v1/auth/login_local" /> API를 쏴야 할
            거예요
          </div>
          <div>
            로그인되었을 경우 로그인 화면 대신 그냥 흰바탕에 화면 정중앙에
            로그인된 유저의 닉네임이 보이게 해 주세요 (예시:{' '}
            <InlineCode code="우현민#0000" />)
            <br />
            이때 <InlineCode code="GET /v1/users/me" /> API를 쏴야 할 거예요
          </div>
          <div>
            디자인은
            <ExternalLink
              href="https://www.figma.com/design/7hZ00moj1GUEqcZAcQBdJp/Frontend-Seminar-Clone"
              label="figma"
            />{' '}
            를 참고해 주세요.
          </div>
          <div>
            API 스펙은{' '}
            <ExternalLink
              href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/"
              label="swagger"
            />{' '}
            를 참고해 주세요.
          </div>
          <div>
            dev 로그인을 위한 계정 생성은
            <ExternalLink
              href="https://snutt-dev.wafflestudio.com/"
              label="snutt 웹사이트 dev환경"
            />{' '}
            에서 하실 수 있습니다.
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>환경설정</CardTitle>
          <CardDescription>지금 같이 세팅해둡시다</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <div>
            각 조별 조장이 아래 내용을 지금 진행해 주세요.
            <ul className="mt-4 list-disc pl-8 text-xl">
              <li>템플릿에서 repository 생성</li>
              <li>팀원들을 outside collaborator 로 초대</li>
              <li>본인 vercel 계정으로 배포</li>
            </ul>
          </div>
          <div>
            각 조별 조장이 방금 생성한 repository 설정을 조정해 주세요.
            <ul className="mt-4 list-disc pl-8 text-xl">
              <li>
                General - Pull Requests 에서,{' '}
                <InlineCode code="Allow squash merging" /> 만 켜고 나머지는 꺼
                주세요. Default commit message 는{' '}
                <InlineCode code="Pull request title and description" /> 으로
                설정해 주세요.
              </li>{' '}
              <li>
                General - Pull Requests 에서,{' '}
                <InlineCode code="Always suggest updating pull request branches" />
                를 켜 주세요
              </li>
              <li>
                General - Pull Requests 에서,{' '}
                <InlineCode code="Automatically delete head branches" />를 켜
                주세요
              </li>
              <li>
                Rules - Rulesets 에서{' '}
                <InlineCode code="New ruleset - Import a ruleset" /> 하고{' '}
                <ExternalLink
                  href="https://wafflestudio2-dqe6104.slack.com/files/U07J16P8P5L/F07P1ALAZD0/main.json"
                  label="이 파일"
                />
                을 등록해주세요
              </li>
            </ul>
          </div>
          <div>
            PR 올리고 코드리뷰 하는 과정을 연습해 봅시다.
            <ul className="mt-4 list-disc pl-8 text-xl">
              <li>
                가나다순 마지막 사람이 README.md 에 조원들 이름을 등록해서 PR
                올리기
              </li>
              <li>조원들이 approve</li>
              <li>PR merge 하기</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
});
