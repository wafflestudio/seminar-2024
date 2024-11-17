import { ExternalLink } from '@/components/ExternalLink';
import { Slides } from '@/components/Slides';
import { StackBadge } from '@/components/StackBadge';
import { getLectureItem } from '@/lectures';

export const wrapupLecture = getLectureItem({
  title: '마무리',
  description: '',
  date: new Date('2024-11-20 20:30:00'),
  element: (
    <Slides
      slides={[
        { title: '세미나는 끝입니다!', content: <div>🎉</div> },
        {
          title: '돌아보기',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                지금까지 진행한 세미나 중 횟수도 가장 많았고 내용도 가장 많이
                다뤘습니다
              </p>
              <p>
                개발환경, 웹, 리액트, 비동기, TypeScript, CSS, 클린코드,
                아키텍처, 상태관리, 라우팅, 성능, 인프라, 테스트
              </p>
            </div>
          ),
        },
        {
          title: '그럼 세미나 이후 Next Step 으로 뭘 공부하면 좋을까요?',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                개인의 목표에 따라 다르겠지만, 여기까지 세미나&과제 진행하셨고
                이후 토이 프로젝트 진행하신다면 <i>개발을 경험해 봤다</i> 정도는
                충분히 달성하셨습니다
              </p>
              <p>
                이 이후로는 프로젝트 진행하시면서 <StackBadge stack="Next.js" />
                도 도입해 보시고, <StackBadge stack="Tanstack Query" /> 도 써
                보시고, ... 이렇게 하나하나씩 쌓아나가시는 걸 추천드립니다
              </p>
              <p>
                그리고 언제나 중요한 기초: 가령 JavaScript 의 실행 컨텍스트 같은
                개념들도 세미나에서 다루기엔 너무 재미없어서 건너뛰었을 뿐
                실제로는 개발자에게는 매우 중요한 지식이라는 점
              </p>
            </div>
          ),
        },
        {
          title: 'AI (1) copilot',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                <StackBadge stack="GitHub Copilot" /> 은 코딩을 도와주는
                자동완성 도구
              </p>
              <p>재작년쯤부터는 거의 무조건 써야 하는 필수 도구 수준</p>
              <p>코파일럿이 얼마나 잘해주는지 같이 봅시다</p>
            </div>
          ),
        },
        {
          title: 'AI (2) cursor 등 AI 통합 IDE',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                AI 통합 IDE로, IDE에게{' '}
                <i>기존 코드 이거 이거 참고해서 이렇게 해줘</i> 라고 하면 다 해
                준다
              </p>
              <p>얘도 같이 봅시다</p>
            </div>
          ),
        },
        {
          title: 'AI (3) v0',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                <StackBadge stack="v0" /> 는 ui를 만들어주는 AI
              </p>
              <p>얘도 지금 같이 써볼까요?</p>
              <ExternalLink href="https://v0.dev/chat" />
            </div>
          ),
        },
        {
          title: '마지막 과제 grace day 관련',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                마지막 과제 기한이 11월 30일까지인데, 남은 grace day 상황을 보니
                몇 분 예외를 제외하고는 grace day가 전체적으로 그렇게 많으시진
                않아서 (저한테 여유가 좀 있어서), 원하시는 만큼 쓰셔도 됩니다.
              </p>
            </div>
          ),
        },
        {
          title: '세미나 합불 관련',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                OT때 공지드렸던 대로, 본인이 개발을 재밌어하고, 프리라이더라고
                보이지 않으면 통과입니다.
              </p>
              <p>
                이번에 어떤 프로그램이 진행될지는 모르겠지만 항상 토이프로젝트는
                많이 빡셌습니다. (세미나보다 더 빡셀 수도)
              </p>
              <p>
                개발이 취향에 잘 맞지는 않는 것 같아서 딱 세미나까지만 하고 와플
                활동은 그만 하고 싶으시다면, DM 주시면 처리해드리겠습니다.
              </p>
              <p>
                제가 지금까지 세미나 채널이나 커밋 로그를 봤을 때 프리라이더로
                보였던 분들께는 따로 (본인 및 조원분들 모두) DM 드리겠습니다.
                같이 이야기 나눠 보아요
              </p>
              <p>
                해당사항 하나도 없으시다면, 마지막 과제 제출해주실 때 통과 DM
                드리겠습니다
              </p>
            </div>
          ),
        },
      ]}
    />
  ),
});
