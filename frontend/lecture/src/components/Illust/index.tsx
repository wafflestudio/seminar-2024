import { PropsWithChildren } from 'react';

export const Illust = ({ children }: PropsWithChildren) => {
  return (
    <article className="relative rounded-lg bg-slate-200 p-4 shadow-md dark:bg-slate-700">
      {children}
    </article>
  );
};
