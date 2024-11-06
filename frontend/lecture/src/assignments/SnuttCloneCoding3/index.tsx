import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { getAssignmentItem } from '@/assignments';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { StackBadge } from '@/components/StackBadge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/designsystem/ui/card';

export const snuttCloneCoding3Assignment = getAssignmentItem({
  due: new Date('2024-11-20 23:59:59'),
  member: '조별',
  element: (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>주제</CardTitle>
          <CardDescription>SNUTT 클론코딩 (3)</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-20">
          <section>
            <h2>1. 강의 상세 화면</h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                <InlineCode code="/timetables/:id/lectures/:id" />
              </li>
              <li>
                강의계획서, 강의평 버튼, 지도, 빈자리알림, 관심강좌, 편집 제외
              </li>
              <li>정보 보이고, 삭제 가능하면 됩니다.</li>
              <li>
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/deleteTimetableLecture"
                  label="강의 삭제 API"
                />
              </li>
            </ul>
          </section>
          <section>
            <h2>2. 강의 목록 화면</h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                <div className="flex items-center gap-2">
                  시간표화면 오른쪽 위 <HamburgerMenuIcon /> 을 통해 진입
                </div>
              </li>
              <li>지도정보는 비워주세요</li>
              <li>아이템을 클릭하면 1번에서 만든 강의 상세 화면으로 이동</li>
              <li>
                <InlineCode code="/timetables/:id/lectures" />
              </li>
              <li>
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/getTimetable"
                  label="전에 썼던 Get Timetable API 그대로"
                />
              </li>
            </ul>
          </section>
          <section>
            <h2>3. (조원이 3명 이상일 경우) 강의 직접 생성</h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                바텀시트로 뜰 필요는 없고 새 페이지로. 색상이나 시간은 구현하지
                않으셔도 됩니다 (시간은 수요일 19:00-20:30 으로 고정)
              </li>
              <li>폼처리가 꽤 번거로울 만 합니다</li>
              <li>
                1번에서 만든 강의 상세 화면과 똑같이 생긴 ui가 많은데, 얼마나
                공통화할지도 고민할만한 포인트
              </li>
              <li>
                <InlineCode code="/timetables/:id/new" />
              </li>
              <li>
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/addCustomLecture"
                  label="POST /timetables/:id/lecture"
                />
              </li>
            </ul>
          </section>
          <section>
            <h2>(선택) 도전과제 1: 다크모드</h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>한 페이지라도 다크모드 구현 및 적용</li>
              <li>
                마이페이지 - 색상 모드 로 화면모드 페이지에 진입해서 토글할 수
                있어야 함
              </li>
              <li>
                화면모드 페이지: <InlineCode code="/mypage/color-scheme" />
              </li>
              <li>피그마는 없지만, 스누티티 모바일 참고해서 대충 비슷하게..</li>
              <li>
                Tip) css에 무슨 스택을 쓰냐에 따라 best practice가 다릅니다
              </li>
              <li>
                <ExternalLink
                  href="https://velog.io/@velopert/velog-dark-mode"
                  label="읽어볼 만 한 글"
                />
              </li>
            </ul>
          </section>
          <section>
            <h2>(선택) 도전과제 2: Next.js</h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                <StackBadge stack="Next.js" /> 로 마이그레이션 후 최소 1개 API를
                서버사이드에서 호출
              </li>
              <li>
                이 경우 로그인 페이지는 <InlineCode code="/login" /> 으로 두고,
                로그인되지 않았을 시 서버사이드에서 리다이렉트하는 식으로 해
                주세요.
              </li>
              <li>
                그리고 자동로그인도 로컬스토리지 대신 쿠키를 사용해야 할 거예요
              </li>
              <li>
                <ExternalLink
                  href="https://nextjs.org/docs/app/building-your-application/upgrading/from-create-react-app"
                  label="마이그레이션 가이드 공식문서"
                />
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  ),
  title: 'SNUTT 클론코딩 (3)',
});
