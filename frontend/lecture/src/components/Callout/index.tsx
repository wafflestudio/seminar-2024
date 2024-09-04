import { PropsWithChildren } from 'react';

export const Callout = (props: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="mb-4 border-l-4 border-blue-500 bg-blue-100 p-4 text-base text-blue-700">
      <p className="font-bold">{props.title}</p>
      {props.children}
    </div>
  );
};
