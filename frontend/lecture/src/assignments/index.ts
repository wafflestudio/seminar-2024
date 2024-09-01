import { ReactNode } from 'react';

export const getAssignmentItem = (item: {
  title: string;
  element: ReactNode;
  schedule: [Date, Date];
}) => ({ type: 'assignment' as const, ...item });
