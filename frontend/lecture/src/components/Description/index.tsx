import { Fragment } from 'react';

export const Description = ({
  items,
}: {
  items: { key: string; value: string }[];
}) => {
  return (
    <dl className="grid w-fit grid-cols-[min-content_min-content]">
      {items.map(({ key, value }) => (
        <Fragment key={key}>
          <dt className="whitespace-nowrap p-2 text-2xl font-bold">{key}</dt>
          <dd className="whitespace-nowrap p-2 text-2xl">{value}</dd>
        </Fragment>
      ))}
    </dl>
  );
};
