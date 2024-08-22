import { Context, useContext } from 'react';

export const useGlobalContext = <T>(context: Context<T | null>): T => {
  const value = useContext(context);

  if (value === null) throw new Error();

  return value;
};
