import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

import lighthouse from './lighthouse.png';

export const performanceLecture = getLectureItem({
  title: '성능과 SSR',
  description: 'Next.js',
  date: new Date('2024-11-06 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '이번 챕터 목표',
          content: (
            <div>
              <ul className="flex list-disc flex-col gap-4 pl-8">
                <li>프론트엔드에서 무슨 성능을 개선해야 하는지 이해한다</li>
                <li>lighthouse 사용법을 익힌다</li>
                <li>우리가 쓰는 CSR 방식이 왜 로딩 성능이 나쁜지 이해한다</li>
                <li>SSR이란 게 있더라~ 정도를 인지한다</li>
                <li>Next.js 라는 메타프레임워크의 존재를 인지한다</li>
              </ul>
            </div>
          ),
        },
        {
          title: '성능?',
          content: (
            <div>
              <p>보통 성능이라고 하면 떠올리는 것들</p>
              <ul className="mt-6 list-disc pl-8">
                <li>시간</li>
                <li>공간 (메모리)</li>
                <li>로딩 속도</li>
              </ul>
            </div>
          ),
        },
        {
          title: '시간 복잡도와 렌더링 최적화 (1)',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>시간 복잡도를 줄여서 연산 시간을 줄이자!</p>
              <p>하지만 웹은 대부분의 경우 n이 커봐야 1000입니다</p>
              <img src="https://www.azquotes.com/picture-quotes/quote-fancy-algorithms-are-slow-when-n-is-small-and-n-is-usually-small-rob-pike-76-51-33.jpg" />
              <div>
                <InlineCode code="useMemo" />, <InlineCode code="memo" /> 등
                메모이제이션 기법도 있고 합성을 활용한 렌더링 최적화 기법도
                있는데, 솔직히 4년동안 웹 하면서 최적화가 필요했던 적 딱 한 번
                밖에 없었습니다.
              </div>
              <div>
                리액트는 대부분의 경우 충분한 성능이 나오게 설계되었기에,
                평범하게 짜면 충분히 빠릅니다.
              </div>
              <div>
                어차피 브라우저가 60fps라서 엄청 빨라봤자 유저는 모릅니다.
              </div>
            </div>
          ),
        },
        {
          title: '시간 복잡도와 렌더링 최적화 (2)',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>
                관련해서 &quot;불필요한 리렌더를 줄여야 한다&quot; 와 같은
                주장도 있는데, 딱히 공감하진 않습니다
              </p>
              <p>
                평범하게 정상적으로 짜면 적당한 리렌더가 발생하고 유저는
                불편함을 느끼지 못합니다.
              </p>
              <p>
                불필요한 리렌더를 막으려다 필요한 리렌더를 못하거나, 코드
                유지보수가 어려워지면 그게 진짜 문제입니다
              </p>
              <Callout title="결론">웬만하면 이거 신경쓸 필요 없다!</Callout>
            </div>
          ),
        },
        {
          title: '메모리',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>자바스크립트는 GC가 동작하는 언어</p>
              <p>웹에서 다루는 메모리가 그리 크지 않음</p>
              <p>따라서 메모리 누수가 일어나지 않는 한 별 문제 없음</p>
              <Callout title="메모리 누수란?">
                더 이상 필요하지 않은 메모리를 해제하지 않아서 메모리 사용량이
                계속 증가하는 현상
              </Callout>
              <CodeSnippet
                language="typescript"
                code={[`const object = URL.createObjectURL(...)`]}
              />
              <p>
                가아아아아끔 이런 코드를 짜야 할 때가 있는데, 얘만 free 잘 해
                주면 됩니다
              </p>
              <Callout title="결론">웬만하면 이거도 신경쓸 필요 없다!</Callout>
            </div>
          ),
        },
        {
          title: '로딩 속도',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>그런데 로딩 속도는 문제가 됩니다</p>
              <p>
                따라서 웹 개발자들은 성능을 개선할 때 로딩 속도를 최적화하는
                데에 많은 노력을 쏟아야 합니다
              </p>
            </div>
          ),
        },
        { title: '왜 로딩 속도는 문제가 될까?', content: <div>TBD</div> },
        {
          title: '로딩 속도 - lighthouse 점수',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>
                로딩 속도뿐 아니라 웹 페이지의 품질을 통합적으로 체크해볼 수
                있는 지표
              </p>
              <img src={lighthouse} />
              <p>라이브로 한번 봅시다</p>
            </div>
          ),
        },
        {
          title: '로딩 속도 - lighthouse 실습',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>
                각 조별로, 만들었던 프로젝트의 lighthouse 점수를 확인하고
                캡쳐해서 조별 채널에 올려주세요 (제한시간 2분)
              </p>
            </div>
          ),
        },
        { title: '로딩 속도 개선: 용량 줄이기', content: <div>TBD</div> },
        { title: '로딩 속도 개선: 스켈레톤 ui', content: <div>TBD</div> },
        { title: '로딩 속도 개선: 이미지 최적화', content: <div>TBD</div> },
      ]}
    />
  ),
});
