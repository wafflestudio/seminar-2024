import { type ReactNode } from 'react';

export const getAssignmentItem = (item: {
  title: string;
  element: ReactNode;
  due: Date;
  member: '개인' | '조별';
}) => ({ type: 'assignment' as const, ...item });
