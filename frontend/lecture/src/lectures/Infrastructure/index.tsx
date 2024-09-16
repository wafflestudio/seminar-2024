import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const infrastructureLecture = getLectureItem({
  title: '프론트엔드 인프라',
  description: 'AWS, S3, Cloudfront',
  date: new Date('2024-11-06 20:30:00'),
  element: <Slides slides={[]} />,
});
