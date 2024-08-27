import './global.css';

import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/App';

const root = document.getElementById('root');

if (root === null) throw new Error('Root element not found');

type Theme = 'light' | 'dark';
const themeKey = 'theme';

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === 'dark') return 'dark';
  if (savedTheme === 'light') return 'light';

  if (window.matchMedia('(prefere-color-scheme: dark)').matches) return 'dark';

  return 'light';
};

export const useToggleTheme = () => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    window.document.documentElement.classList.remove('light', 'dark');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.document.documentElement.classList.add(newTheme);
    localStorage.setItem(themeKey, newTheme);
  };

  return toggleTheme;
};

const initialTheme = getInitialTheme();
window.document.documentElement.classList.add(initialTheme);

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
