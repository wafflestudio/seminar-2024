import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const testingLecture = getLectureItem({
  title: '테스팅',
  description: 'TDD, BDD, unit, e2e, frontend',
  date: new Date('2024-11-20 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '목표',
          content: (
            <div className="flex flex-col gap-4">
              <p>개발에서 테스팅이 가지는 의미에 대해 이야기한다</p>
              <p>프론트엔드에서 테스팅의 현주소를 이해한다</p>
            </div>
          ),
        },
      ]}
    />
  ),
});
