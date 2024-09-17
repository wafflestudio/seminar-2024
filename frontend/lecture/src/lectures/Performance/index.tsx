import { lazy } from 'react';

import { getLectureItem } from '@/lectures';

const PerformanceSlides = lazy(() =>
  import('@/lectures/Performance/slides').then((r) => ({
    default: r.PerformanceSlides,
  })),
);

export const performanceLecture = getLectureItem({
  title: '성능과 SSR',
  description: 'Next.js',
  date: new Date('2024-11-06 20:30:00'),
  element: <PerformanceSlides />,
});
