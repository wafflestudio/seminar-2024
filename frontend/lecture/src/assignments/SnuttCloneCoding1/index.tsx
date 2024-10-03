import { getAssignmentItem } from '@/assignments';
import { ApiSpec } from '@/components/ApiSpec';
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
        <CardContent className="flex flex-col gap-8 text-xl leading-10">
          <div>
            SNUTT 모바일 앱을 웹뷰 앱 형태로 만들 거예요. 이번 과제 목표는
            로그인해서 내 닉네임만 볼 수 있으면 됩니다.
          </div>
          <div>
            로그인되지 않았을 경우 피그마의 로그인 화면과 완전히 똑같이 생긴
            로그인 화면이 보여야 합니다. 피그마 오른쪽에 보이는 시간표 뷰는 다음
            과제에 나갈 예정입니다.
          </div>
          <div>
            스타일은 개발자 도구에서 아무 핸드폰 세로화면으로 해놓고 점검할
            예정입니다. 웹개발 수준의 반응형은 고려하지 않으셔도 됩니다.
          </div>
          <div>
            로그인 화면에서 로그인 버튼을 누르면 아이디 비밀번호로 로그인할 수
            있는 뷰로 전환되어야 합니다. 회원가입 버튼이나 소셜 로그인 버튼은
            눌러도 아무 동작 안 하게 해 주세요
            <br />
            이때 <InlineCode code="POST /v1/auth/login_local" /> API를 쏜 다음,
            응답의 <InlineCode code="token" /> 필드를 상태에 저장해야 할 거예요
          </div>
          <div>
            아이디 비밀번호를 입력하는 뷰는 피그마에{' '}
            <InlineCode code="로그인 화면 참고용 스크린샷" /> 있으니 참고해
            주세요. 해당 화면은 똑같이 만들어주실 필요는 없고, 대충 아이디랑
            비밀번호를 입력할 수 있으면 됩니다.
          </div>
          <div>
            로그인되었을 경우 로그인 화면 대신 그냥 흰바탕에 화면 정중앙에
            로그인된 유저의 닉네임이 보이게 해 주세요 (예시:{' '}
            <InlineCode code="우현민#0000" />)
            <br />
            이때 <InlineCode code="GET /v1/users/me" /> API를 쏘고 응답의{' '}
            <InlineCode code="nickname" /> 필드를 보여줘야 할 거예요
          </div>
          <div className="text-xl text-red-500">
            이제 제가 만들어드린 <InlineCode code="reset.css" /> 파일을
            제외하면, Plain CSS 는 사용하지 말아주세요. Plain CSS 로 올려주시면
            특별한 이유가 없을 경우 딴걸로 바꿔달라고 요청드릴 예정
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
            API 스펙은 아래 섹션을 참고해 주세요. 처음이니 따로 정리해뒀습니다.
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
          <CardTitle>API 명세</CardTitle>
        </CardHeader>
        <CardContent>
          <ApiSpec
            method="POST"
            endpoint="https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/auth/login_local"
            description="아이디와 비밀번호로 로그인합니다. id는 아이디, password는 비밀번호입니다. 응답으로 인증 token을 내려줍니다."
            requestBody="{ id: string; password: string }"
            responseBody="{ user_id: string; token: string; message: string; }"
          />
          <ApiSpec
            method="GET"
            endpoint="https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/users/me"
            description="내 정보를 불러옵니다."
            header="x-access-token: 앞에서받은token"
            responseBody="{ id: string; isAdmin: boolean; regDate: string; notificationCheckedAt: string; email: string; localId: string; fbName: string; nickname: { nickname: string; tag: string } }"
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>환경설정</CardTitle>
          <CardDescription>지금 같이 세팅해둡시다</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8 leading-10">
          <div>
            일단 다들 snutt dev 회원가입을 해 주세요.
            <ExternalLink href="https://snutt-dev.wafflestudio.com" />
          </div>
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
      <Card>
        <CardHeader>
          <CardTitle>Tip</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 text-xl">
          <div>
            곧 시험기간&과제기간이실 것 같아서 과제 양이 적습니다. 할 줄 알면
            정말 1시간이면 다 해요
          </div>
          <div>
            하지만 협업이 처음이신 분들이 많고, 양이 적은 거지 난이도가 쉽지는
            않습니다. 심지어 프로젝트 초기이기에 폴더구조 등 논의할 부분이
            많습니다.
          </div>
          <div>
            대충 구현이 마무리되기 전까지는 업무 분배 없이 다같이 하시는 걸
            추천드립니다. (코모에서 하셔도 좋고, 코모에서 다 못 끝냈다면 줌 켜고
            하셔도 좋고)
          </div>
          <div>
            여러분 입장에서는 제가 백엔드 개발자고, 저랑 협업하시는 겁니다. API
            스펙이 이해가 안 되면 이것저것 혼자 시도해보는 것보다 그냥 백엔드
            개발자한테 바로 물어보는 게 베스트입니다. 뭔가 이상하다 싶으면
            물어봐주세요!
          </div>
        </CardContent>
      </Card>
    </div>
  ),
});
