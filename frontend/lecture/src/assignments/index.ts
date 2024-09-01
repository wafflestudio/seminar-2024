import { ReactNode } from 'react';

export const getAssignmentItem = (item: {
  title: string;
  element: ReactNode;
  due: Date;
}) => ({ type: 'assignment' as const, ...item });
