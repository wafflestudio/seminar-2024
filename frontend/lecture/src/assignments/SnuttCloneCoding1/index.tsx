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
    <Card>
      <CardHeader>
        <CardTitle>SNUTT 클론코딩 (1)</CardTitle>
        <CardDescription>snutt 로그인 구현</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <div>
          조별로{' '}
          <ExternalLink
            href="https://github.com/orgs/wafflestudio22-5"
            label="wafflestudio22-5 org"
          />{' '}
          에 repository 를 만들고 초대해 드렸습니다. 직접 생성하시는 대신 이걸
          써 주세요
        </div>
        <div>
          SNUTT 모바일 앱을 웹뷰 앱 형태로 만들 거예요. 이번 과제 목표는 로그인
          & 내 닉네임 조회하기 입니다.
        </div>
        <div>
          로그인되지 않았을 경우 피그마랑 완전히 똑같이 생긴 로그인 화면이
          보여야 합니다.
        </div>
        <div>
          로그인 화면에서 아이디 비밀번호로 로그인할 수 있어야 합니다. 회원가입
          버튼이나 소셜 로그인 버튼은 눌러도 아무 동작 안 하게 해 주세요
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
  ),
});
