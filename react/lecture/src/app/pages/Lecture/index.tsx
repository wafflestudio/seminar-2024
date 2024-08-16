import Markdown from 'react-markdown';

import { UsecaseContext } from '@/app/contexts/UsecaseContext';
import { PageComponent } from '@/app/page';
import { useGlobalContext } from '@/app/utils/useGlobalContext';
import { Page } from '@/entities/page';

export const Lecture: PageComponent<Page.LECTURE> = ({ params }) => {
  const { markdown } = useGlobalContext(
    UsecaseContext,
  ).lectureUsecase.showLecture(params.lectureIndex);

  return (
    <div>
      <h1>Lecture {params.lectureIndex}</h1>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};
