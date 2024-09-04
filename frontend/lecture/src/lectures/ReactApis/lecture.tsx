import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const reactApisLecture = getLectureItem({
  title: '리액트 기능들',
  description:
    'Context API, useState, useEffect, useMemo, memo, useCallback, Custom Hooks',
  date: new Date('2024-09-11'),
  element: (
    <Slides
      slides={[
        { title: 'Context API', content: <div></div> },
        { title: 'hooks: useState', content: <div></div> },
        { title: 'hooks: useEffect', content: <div></div> },
        { title: 'hooks: useMemo', content: <div></div> },
        { title: 'memo', content: <div></div> },
        { title: 'hooks: useCallback', content: <div></div> },
        { title: 'Custom Hooks', content: <div></div> },
      ]}
    />
  ),
});
