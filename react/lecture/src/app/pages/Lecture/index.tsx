import { Page } from '../../../entities/page';
import { PageComponent } from '../../page';

export const Lecture: PageComponent<Page.LECTURE> = ({ params }) => {
  return (
    <div>
      <h1>Lecture {params.lectureIndex}</h1>
    </div>
  );
};
