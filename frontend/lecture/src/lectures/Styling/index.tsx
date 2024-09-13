import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

import cssIsAwesome from './cssisawesome.gif';

export const stylingLecture = getLectureItem({
  title: '스타일링',
  description: 'inline style, css-in-js, css modules, atomic css',
  date: new Date('2024-10-02 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '스타일링',
          content: (
            <div>
              <div className="mb-4 text-2xl font-bold">
                프론트엔드 개발자의 역할:
              </div>
              <ul className="mb-6 ml-6 list-disc space-y-2">
                <li>디자인 시안대로 구현하기</li>
                <li>디자이너가 빼먹은거 알려주기 (반응형, 접근성 등)</li>
              </ul>
              <div className="mb-4 text-2xl font-bold">
                그래서 우리가 공부해야 하는 것:
              </div>
              <ul className="mb-6 ml-6 list-disc space-y-2">
                <li>디자인 시안을 보고 잘 구현하기</li>
                <li>반응형에 대한 이해</li>
                <li>접근성에 대한 이해</li>
              </ul>
              <div className="rounded-lg p-4 text-xl font-semibold">
                이번 세미나에서 다룰 것: 시안 보고 구현 잘 하는 법
              </div>
            </div>
          ),
        },
        {
          title: 'CSS',
          content: (
            <div>
              <div className="mb-4 text-2xl font-bold">
                CSS (Cascading Style Sheets)
              </div>
              <div>브라우저 DOM 요소들에 스타일을 먹이는 언어</div>
              <img src={cssIsAwesome} />
              <div>지금까지 과제 진행하시면서, css 할 만 하셨나요?</div>
            </div>
          ),
        },
        {
          title: 'CSS 덜 힘들게 하는 법',
          content: (
            <div>
              <div>좋은 속성들을 쓰기</div>
              <div>생산성 높이기</div>
            </div>
          ),
        },
        {
          title: 'CSS 속성들 (0) 개요',
          content: <div>다 알려드릴 순 없고, 몇 가지 중요한 속성들만</div>,
        },
      ]}
    />
  ),
});
