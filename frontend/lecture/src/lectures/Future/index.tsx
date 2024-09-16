import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const futureLecture = getLectureItem({
  title: '프론트엔드의 현재와 미래',
  description: '기술 동향 파악하기, 생태계에 참여하기',
  date: new Date('2024-11-20 20:30:00'),
  element: <Slides slides={[]} />,
});
