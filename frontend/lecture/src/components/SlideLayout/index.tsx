import { ReactNode } from 'react';

export const AssetDescriptionLayout = ({
  asset: asset,
  description,
}: {
  asset: ReactNode;
  description: string[];
}) => {
  return (
    <div className="grid grid-cols-[4fr_6fr] gap-8">
      <div>
        <ul className="flex flex-col gap-6">
          {description.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      <div>{asset}</div>
    </div>
  );
};
