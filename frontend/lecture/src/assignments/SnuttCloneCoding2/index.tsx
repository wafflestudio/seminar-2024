import { DotsVerticalIcon, PlusIcon } from '@radix-ui/react-icons';

import { getAssignmentItem } from '@/assignments';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { StackBadge } from '@/components/StackBadge';
import { Button } from '@/designsystem/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/designsystem/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/designsystem/ui/dialog';

export const snuttCloneCoding2Assignment = getAssignmentItem({
  due: new Date('2024-11-10 23:59:59'),
  title: 'SNUTT 클론코딩 (2)',
  member: '조별',
  element: (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader>
          <CardTitle>주제</CardTitle>
          <CardDescription>
            저번 과제에 이어서 스누티티 기능 더 만들기
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>스펙</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-16 text-xl">
          <section>
            <h2>
              1. 로그인 후 화면에 지금 닉네임만 떠 있을 텐데, 시간표 화면에
              보이는 대로 동일하게 구현해 주세요.
            </h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                피그마 오른쪽에 있는 시간표 사진 (스누티티 모바일 어플리케이션과
                동일합니다) 대로 디자인해 주세요. 이 때, 각 강의 아이템의 색깔은
                API 스펙이 좀 복잡해서 구현 패스하겠습니다. 까만색 배경에 흰색
                텍스트로만 구현해주세요.
              </li>
              <li>
                시간표 데이터를 불러올 땐{' '}
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/getMostRecentlyUpdatedTimetables"
                  label="GET /v1/tables/recent"
                />{' '}
                API를 사용하시면 됩니다.
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>설명</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>응답 설명</DialogTitle>
                    <DialogDescription>
                      lecture_list 필드가 시간표의 강의 목록입니다. 각 강의의
                      class_time_json 필드에 각 강의의 강의시간 목록이 들어
                      있고, 구버전 앱 대응 때문에 시간을 나타내는 필드가 좀
                      많은데 여러분은 startMinute, endMinute만 사용하시면
                      됩니다.
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                시간표 영역의 시간 표시 부분은 오전 9시부터 오후 10시까지로
                고정해 주세요.
              </li>
              <li>
                시간표 영역과 바텀 네비바의 마이페이지 버튼 빼고는 모두 저번과
                마찬가지로 <i>클릭해도 아무 동작도 하지 않는 상태</i>로 잡아
                주세요.
              </li>
            </ul>
          </section>
          <section>
            <h2>
              2. 로그인 시, 경로에 따라 아래 페이지들이 보이게 구현해 주세요.
            </h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                <InlineCode code="/" />: 시간표 페이지
              </li>
              <li>
                <InlineCode code="/mypage" />: 마이페이지
              </li>
              <li>
                바텀 네비바에서 제일 오른쪽에 있는 버튼을 클릭하면 마이페이지로
                이동해야 합니다. (즉, url도 변경되고 화면도 변경되어야 함)
              </li>
              <li>
                오늘 배운 <StackBadge stack="React Router" /> 라이브러리를
                사용하시면 됩니다.{' '}
                <InlineCode code="yarn add react-router-dom" /> 로 설치할 수
                있습니다.
              </li>
            </ul>
          </section>
          <section>
            <h2>3. 마이페이지를 구현해 주세요.</h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                SNUTT 앱의 마이페이지 기능을 따라 구현하고 싶지만, 스펙이 너무
                커지므로
              </li>
              <li>
                먼저 저번 과제에서 했던 것처럼 닉네임을 띄워 주세요. 그 때 썼던
                거랑 동일한 API를 사용하시면 됩니다.
              </li>
              <li>
                그리고 로그아웃 버튼을 만들어 주세요. 로그아웃 버튼을 누르면
                로그인 화면으로 이동해야 합니다. 로그아웃 시 API 호출은 별도로
                필요하지 않습니다.
              </li>
              <li>
                디자인은 실제 snutt 앱을 참고해서 대강 비슷하게 만들어 주세요.
              </li>
            </ul>
          </section>
          <section>
            <h2>4. 자동 로그인을 구현해 주세요.</h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>로그인하고 새로고침해도 로그인 상태가 유지되어야 합니다.</li>
              <li>
                당연히 로그아웃하고 새로고침하면 로그아웃 상태가 유지되어야
                합니다.
              </li>
              <li>
                localStorage에 토큰 저장해두고 불러오는 식으로 구현하시면
                됩니다. (2048 때 해 보셨죠?)
              </li>
              <li>
                참고로 일반적으로 자동로그인을 이렇게 구현하는 게 그리 좋은
                방식은 아닙니다만,
              </li>
              <li>
                SNUTT라는 프로젝트 특성상 그리 나쁘지도 않은 방식이며 실제로도
                이렇게 되어 있습니다.
              </li>
            </ul>
          </section>
          <section>
            <h2>5. 새로고침 시 오류페이지 안 나게 하기</h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                아마 <InlineCode code="/mypage" /> 경로에서 새로고침을 하면 오류
                화면이 뜰 거예요
              </li>
              <li>오류 화면 말고 mypage 가 정상적으로 잘 뜨게 해 주세요</li>
              <li>
                Hint: <InlineCode code="vercel.json" />을 설정해주면 됩니다
              </li>
            </ul>
          </section>
          <section>
            <h2>
              6. (조에 3명 이상일 경우) 마이페이지 - 내 계정 - 닉네임 변경
              기능을 구현해 주세요.
            </h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                디자인은 실제 snutt 앱을 참고해서 대강 비슷하게 만들어 주세요.
                아래 스펙 잘 충족하고, 기능 잘 동작하면 됩니다.
              </li>
              <li>
                내 계정 페이지는 <InlineCode code="/mypage/account" /> 경로로
              </li>
              <li>
                닉네임 변경 페이지는{' '}
                <InlineCode code="/mypage/account/change-nickname" /> 경로로
              </li>
              <li>
                닉네임 변경 API는{' '}
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/patchUserInfo"
                  label="PATCH /v1/users/me"
                />{' '}
                사용하시면 됩니다.
              </li>
              <li>
                닉네임 변경이 완료되면 내 계정 페이지로 이동해야 하며, 이동 시
                변경된 닉네임이 내 계정 페이지에 반영되어 있어야 합니다.
              </li>
              <li>
                SNUTT 앱이 그렇듯, 상단 바에 뒤로가기 버튼이 있어야 하며
                뒤로가기 시 이전 페이지로 이동할 수 있어야 합니다.
              </li>
            </ul>
          </section>
          <section>
            <h2>
              7. (도전과제 - Optional) 시간표 목록 drawer 구현하기 (항목당 조원
              모두에게 grace day 1일씩 추가 부여)
              <br />
              <i className="text-base font-normal opacity-80">
                과제 사이즈가 얼마나 큰 건지 감이 안 잡혀서, 기간에 비해 너무
                쉽나? 싶어서 일단 추가해뒀습니다. 학기가 좀 널널하거나 개발을 더
                많이 해 보고 싶으시다면 도전해 보세요!
              </i>
            </h2>
            <ul className="mt-4 flex list-disc flex-col gap-4 pl-6">
              <li>
                7-1. 시간표 화면 왼쪽 drawer를 구현해 주세요. 진입점 클릭 시
                drawer가 열리고, drawer 에서 내 시간표 목록이 학기로 그룹화되어
                보여야 합니다. 이 경우{' '}
                <InlineCode code="GET /v1/tables/recent" /> 대신{' '}
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/getBrief"
                  label="GET /v1/tables"
                />{' '}
                와{' '}
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/getTimetable"
                  label="GET /v1/tables/{timetableId}"
                />{' '}
                API를 사용하면 됩니다. 시간표를 클릭하여 선택할 수 있으며,
                시간표를 선택하면 화면에 선택한 시간표가 보여야 합니다. 초기
                진입 시 디폴트로 선택된 시간표는{' '}
                <InlineCode code="GET /v1/tables" /> API를 통해 가져온 시간표 중
                첫 번째 아이템이면 됩니다.
              </li>
              <li>
                7-2. 시간표 추가 기능을 구현해 주세요. drawer의 상단에 보면{' '}
                <PlusIcon className="inline" /> 버튼이 있어서, 클릭하면 시간표
                이름과 학기를 선택할 수 있는 바텀시트가 올라옵니다. 학기 선택
                ui는 적당히 <InlineCode code="<select>" /> 컴포넌트 같은 걸로 해
                주세요. 시간표 생성 API는{' '}
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/addTimetable"
                  label="POST /v1/tables"
                />{' '}
                이고, 가능한 학기 목록을 불러오는 API는{' '}
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/getAllCoursebooks"
                  label="GET /v1/course_books"
                />{' '}
                입니다.
              </li>
              <li>
                7-3. drawer의 각 시간표 오른쪽에 있는{' '}
                <DotsVerticalIcon className="inline" /> 를 구현해 주세요. 클릭
                시 바텀시트가 올라와야 하며, 바텀시트에는 현재 스누티티 앱의
                기능 중 이름 변경과 시간표 삭제 버튼만 있으면 됩니다. 그리고
                해당 두 기능을 구현해 주세요. 이름 변경 누르면 바텀시트 올라와서
                이름 변경할 수 있으면 되고 (
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/modifyTimetable"
                  label="PUT /v1/tables/{timetableId}"
                />
                ), 삭제 누르면 컨펌한 다음 삭제되면 됩니다. (
                <ExternalLink
                  href="https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/deleteTimetable"
                  label="DELETE /v1/tables/{timetableId}"
                />
                ) 변경사항은 화면에 자동으로 반영되어야 합니다.
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>기타</CardTitle>
        </CardHeader>
        <CardContent className="text-xl">
          <ul className="flex list-disc flex-col gap-4 pl-8">
            <li>
              Branch Protection Rule 에서{' '}
              <InlineCode code="Required number of approvals before merging" />
              은 이제 0으로 하셔도 됩니다
            </li>
            <li>
              이번 세미나부터는 실제 SNUTT swagger 를 문서로 사용합니다만, base
              url은 저번 과제와 마찬가지로{' '}
              <InlineCode code="https://wafflestudio-seminar-2024-snutt-redirect.vercel.app" />{' '}
              입니다
            </li>
            <li>
              이번 과제는 기간도 길고 양도 저번보다 많습니다 (세 배 정도?).
              코모를 빨리 잡으신 다음 <StackBadge stack="React Router" /> 초기
              세팅이랑 바텀 네비바 구현을 다같이 빨리 먼저 해치우시고, 나머지는
              업무 분배를 미리미리 해서 진행하시는 걸 추천드립니다.
            </li>
            <li>
              중간고사 기간을 고려해서 조금 더 넉넉하게 11월 10일까지로
              잡았지만, 늘 그랬듯 11월 6일 세미나에서도 이 과제에 이어지는
              과제가 나갑니다. 6일 전에 끝내두시면 더 좋을 수 있습니다.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  ),
});
