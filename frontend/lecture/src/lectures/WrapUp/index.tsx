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
        { title: '세미나는 끝입니다!', content: <div>TBD</div> },
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
                그리고 언제나 중요한 기초: 가령 JavaScript 의 실행 컨텍스트나
                렉시컬스코핑 같은 개념들도 세미나에서 다루기엔 너무 재미없어서
                건너뛰었을 뿐 실제로는 개발자에게는 매우 중요한 지식이라는 점
              </p>
            </div>
          ),
        },
        {
          title: '그리고 항상 기억해야 할 것',
          content: (
            <div className="flex flex-col gap-4">
              <p>개발은 학문이 아니라 실무이고, 라이선스가 없는 영역</p>
              <p>배우고, 실력이 생기고, 그걸로 실무를 뛰는 게 아닙니다</p>
              <p>
                항상 모르는 영역에 도전하면서 만들어내는 거고, 실무를 뛰면서
                계속 성장하고 배워야 합니다
              </p>
              <p>
                성장할 수 있는 기초 경험과 몇 가지 기본 원칙을 가지고 계속
                성장하기
              </p>
            </div>
          ),
        },
      ]}
    />
  ),
});
