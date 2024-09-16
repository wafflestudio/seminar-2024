import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const stateManagementLecture = getLectureItem({
  title: '상태 관리',
  description: '전역 상태 관리, Redux, React Query',
  date: new Date('2024-10-16 20:30:00'),
  element: <Slides slides={[]} />,
});
