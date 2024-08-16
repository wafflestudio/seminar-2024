import { createContext } from 'react';

import { LectureUsecase } from '@/usecases/LectureUsecase';
import { SidebarUsecase } from '@/usecases/SidebarUsecase';

export type UsecaseContext = {
  sidebarUsecase: SidebarUsecase;
  lectureUsecase: LectureUsecase;
};

export const UsecaseContext = createContext<UsecaseContext | null>(null);
