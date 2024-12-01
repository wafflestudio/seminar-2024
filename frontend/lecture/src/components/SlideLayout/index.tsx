import { type ReactNode } from 'react';

export const AssetDescriptionLayout = ({
  asset: asset,
  description,
}: {
  asset: ReactNode;
  description: ReactNode[];
}) => {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-[4fr_6fr]">
      <ul className="flex flex-col justify-center gap-6">
        {description.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      <div>{asset}</div>
    </div>
  );
};

export const DescriptionsLayout = ({
  descriptions,
}: {
  descriptions: ReactNode[];
}) => {
  return (
    <ul className="flex flex-col gap-6">
      {descriptions.map((d, i) => (
        <li key={i}>{d}</li>
      ))}
    </ul>
  );
};
