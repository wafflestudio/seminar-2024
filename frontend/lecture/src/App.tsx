import { Link, Route, Routes } from 'react-router-dom';

import { Separator } from '@/designsystem/ui/separator';
import { Home } from '@/pages/home';
import { Lecture0 } from '@/pages/lecture0';

const pages = {
  home: { title: '', path: '/', element: <Home /> },
  lecture0: { title: 'Lecture 0', path: '/lecture0', element: <Lecture0 /> },
};

export const App = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <Sidebar />
      <Separator orientation="vertical" />
      <main className="flex-1 overflow-y-scroll p-4">
        <Routes>
          {Object.entries(pages).map(([key, { path, element }]) => (
            <Route key={key} path={path} element={element} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-52 px-4 py-4 bg-blend-darken">
      <Link to="/">
        <h1 className="text-3xl font-bold">Lecture</h1>
      </Link>
      <nav className="mt-4 text-xl">
        <ul className="flex flex-col gap-2">
          {Object.entries(pages).map(([key, { title, path }]) => (
            <li key={key}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
