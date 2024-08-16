import './reset.css';

import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from 'react-router-dom';

import { PageLayout } from '@/app/components/PageLayout';
import { PAGE_PATH } from '@/app/page';
import { Home } from '@/app/pages/Home';
import { Lecture } from '@/app/pages/Lecture';
import { LECTURE_INDEXES } from '@/entities/lecture';
import { Page } from '@/entities/page';

export function App() {
  return <RouterProvider router={router} />;
}

const Element = ({ page }: { page: Page }) => {
  const params = useParams();

  switch (page) {
    case Page.HOME:
      return <Home params={{}} />;
    case Page.LECTURE: {
      const lectureIndex = LECTURE_INDEXES.find(
        (index) => index.toString() === params.lectureIndex,
      );
      if (lectureIndex === undefined) throw new Error();
      return <Lecture params={{ lectureIndex }} />;
    }
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: Object.values(Page).map((page) => {
      return {
        path: PAGE_PATH[page],
        element: <Element page={page} />,
      };
    }),
  },
]);
