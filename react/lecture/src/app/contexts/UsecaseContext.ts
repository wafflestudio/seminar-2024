import { createContext } from 'react';

import { SidebarUsecase } from '../../usecases/SidebarUsecase';

export type UsecaseContext = {
  sidebarUsecase: SidebarUsecase;
};

export const UsecaseContext = createContext<UsecaseContext | null>(null);
