import { type ReactNode } from 'react';

export const getLectureItem = (item: {
  title: string;
  description: string;
  element: ReactNode;
  date: Date;
}) => ({ type: 'lecture' as const, ...item });
