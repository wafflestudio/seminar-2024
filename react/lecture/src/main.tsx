import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App';
import { UsecaseContext } from './app/contexts/UsecaseContext';
import { implSidebarUsecase } from './usecases/SidebarUsecase';

const root = document.getElementById('root');

if (root === null) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <UsecaseContext.Provider value={{ sidebarUsecase: implSidebarUsecase() }}>
      <App />
    </UsecaseContext.Provider>
  </StrictMode>,
);
