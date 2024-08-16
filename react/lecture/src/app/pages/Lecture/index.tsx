import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

import { UsecaseContext } from '@/app/contexts/UsecaseContext';
import { PageComponent } from '@/app/page';
import { useGlobalContext } from '@/app/utils/useGlobalContext';
import { Page } from '@/entities/page';
import { LectureUsecase } from '@/usecases/LectureUsecase';

export const Lecture: PageComponent<Page.LECTURE> = ({ params }) => {
  const [sections, setSections] =
    useState<Awaited<ReturnType<LectureUsecase['showLecture']>>['sections']>();

  const { lectureUsecase } = useGlobalContext(UsecaseContext);

  useEffect(() => {
    let ignore = false;

    lectureUsecase
      .showLecture(params.lectureIndex)
      .then((result) => {
        if (ignore) return;
        setSections(result.sections);
      })
      .catch(() => {
        console.error('Failed to load lecture');
      });

    return () => {
      ignore = true;
    };
  }, [lectureUsecase, params.lectureIndex]);

  return (
    <div>
      <h1>Lecture {params.lectureIndex}</h1>
      {sections?.map((section, index) => (
        <Markdown key={index}>{section.markdown}</Markdown>
      ))}
    </div>
  );
};
