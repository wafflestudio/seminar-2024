import { implThemeUsecase } from './../usecases/ThemeUsecase/index';

export const implBrowserThemeController = (): Parameters<
  typeof implThemeUsecase
>[0]['themeController'] => {
  return {
    loadSavedTheme: () => {
      const theme = localStorage.getItem('theme');
      if (theme === 'light' || theme === 'dark') return theme;
      return null;
    },
    saveTheme: (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    },
  };
};
