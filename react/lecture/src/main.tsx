import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { implBrowserThemeController } from '@/infrastructures/implBrowserThemeController';
import { implLectureUsecase } from '@/usecases/LectureUsecase';
import { implThemeUsecase } from '@/usecases/ThemeUsecase';

import { App } from './app/App';
import { UsecaseContext } from './app/contexts/UsecaseContext';
import { implSidebarUsecase } from './usecases/SidebarUsecase';

const root = document.getElementById('root');

if (root === null) throw new Error('Root element not found');

const sidebarUsecase = implSidebarUsecase();
const lectureUsecase = implLectureUsecase();
const themeUsecase = implThemeUsecase({
  themeController: implBrowserThemeController(),
});

themeUsecase.setInitialTheme();

createRoot(root).render(
  <StrictMode>
    <UsecaseContext.Provider
      value={{ sidebarUsecase, lectureUsecase, themeUsecase }}
    >
      <App />
    </UsecaseContext.Provider>
  </StrictMode>,
);
