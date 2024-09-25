import { Link } from 'react-router-dom';

import { pages } from '@/pages';

const getDayTime = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate.getTime();
};

export const Home = () => {
  const today = getDayTime(new Date());
  const lectures = pages.filter((page) => page.type === 'lecture');
  const nextLecture = lectures
    .filter((page) => getDayTime(page.date) > today)
    .toSorted((p1, p2) => p1.date.getTime() - p2.date.getTime())
    .at(0);
  const todayLecture = lectures.find((page) => getDayTime(page.date) === today);
  const prevLecture = lectures
    .filter((page) => getDayTime(page.date) < today)
    .toSorted((p1, p2) => p2.date.getTime() - p1.date.getTime())
    .at(0);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="grid w-full max-w-screen-md grid-cols-1 gap-8 p-6">
        {prevLecture !== undefined && (
          <Link
            to={prevLecture.path}
            className="block rounded-lg bg-white p-4 shadow-md transition duration-300 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
              이전 세미나
            </h2>

            <p className="text-blue-600 dark:text-blue-400">
              {prevLecture.title}
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {prevLecture.date.toLocaleDateString()}
            </p>
          </Link>
        )}

        {todayLecture !== undefined && (
          <Link
            to={todayLecture.path}
            className="block rounded-lg border-4 border-blue-500 bg-white p-8 shadow-md transition duration-300 hover:bg-gray-100 dark:border-blue-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">
              오늘의 세미나
            </h2>
            <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {todayLecture.title}
            </p>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              {todayLecture.date.toLocaleDateString()}
            </p>
          </Link>
        )}

        {nextLecture !== undefined && (
          <Link
            to={nextLecture.path}
            className="block rounded-lg bg-white p-4 shadow-md transition duration-300 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
              다음 세미나
            </h2>
            <p className="text-blue-600 dark:text-blue-400">
              {nextLecture.title}
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {nextLecture.date.toLocaleDateString()}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};
