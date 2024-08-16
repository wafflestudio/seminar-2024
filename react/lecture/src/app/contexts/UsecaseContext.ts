import { createContext } from 'react';

import { LectureUsecase } from '@/usecases/LectureUsecase';
import { SidebarUsecase } from '@/usecases/SidebarUsecase';
import { ThemeUsecase } from '@/usecases/ThemeUsecase';

export type UsecaseContext = {
  sidebarUsecase: SidebarUsecase;
  lectureUsecase: LectureUsecase;
  themeUsecase: ThemeUsecase;
};

export const UsecaseContext = createContext<UsecaseContext | null>(null);
