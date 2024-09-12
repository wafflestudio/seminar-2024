import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const apiCallLecture = getLectureItem({
  title: 'API 통신하기',
  description: 'API, HTTP',
  date: new Date('2024-09-25 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '(OT 복습) 프론트엔드 - 백엔드 구조',
          content: <div>TBD</div>,
        },
        { title: '(OT 복습) API 통신이란?', content: <div>TBD</div> },
        { title: '(OT 복습) HTTP', content: <div>TBD</div> },
        { title: '(OT 복습) JSON', content: <div>TBD</div> },
        {
          title: 'json placeholder',
          content: (
            <div>아쉽게도 우리는 백엔드가 아직 없으니 목서버를 사용합니다</div>
          ),
        },
        { title: 'React 에서 API 통신하기', content: <div>TBD</div> },
        {
          title: 'API 통신 시 주의할 점 (1) 처음에는 undefined 이다',
          content: <div>TBD</div>,
        },
        {
          title: 'API 통신 시 주의할 점 (2) useEffect cleanup',
          content: <div>TBD</div>,
        },
        {
          title: 'API 통신 시 주의할 점 (3) 내가 뭘 하려는 건지 잘 생각해보자',
          content: (
            <div>
              <div>
                Promise 를 벗기려고 무작정 await 을 때려도 해결되는 건 없다
              </div>
            </div>
          ),
        },
        {
          title: 'todo list 만들어보기 라이브코딩',
          content: (
            <div>
              https://jsonplaceholder.typicode.com 의 todo 목록을 버튼 클릭으로
              왔다갔다 할 수 있는 코드
            </div>
          ),
        },
      ]}
    />
  ),
});
