import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const ecosystemLecture = getLectureItem({
  title: '프론트엔드 생태계',
  description: '기술 동향 파악하기, 생태계에 참여하기',
  date: new Date('2024-11-20 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '목표',
          content: (
            <div className="flex flex-col gap-4">
              <p>코드에서 한발짝 벗어난 이야기들</p>
              <p>프론트엔드 생태계에 대해 이해한다</p>
              <p>생태계가 나아가는 방향을 파악할 수 있다</p>
            </div>
          ),
        },
      ]}
    />
  ),
});
