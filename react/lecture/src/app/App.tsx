import './reset.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Page } from '../entities/page';
import { PageLayout } from './components/PageLayout';
import { PAGE_PATH } from './page';
import { Home } from './pages/Home';
import { Lecture } from './pages/Lecture';

export function App() {
  return <RouterProvider router={router} />;
}

const Element = ({ page }: { page: Page }) => {
  switch (page) {
    case Page.HOME:
      return <Home params={{}} />;
    case Page.LECTURE:
      return <Lecture params={{ lectureIndex: 0 }} />;
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
