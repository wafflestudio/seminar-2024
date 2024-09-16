import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const wrapupLecture = getLectureItem({
  title: '마무리',
  description: '',
  date: new Date('2024-11-20 20:30:00'),
  element: <Slides slides={[]} />,
});
