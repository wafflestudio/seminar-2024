export type Theme = 'dark' | 'light';

export type ThemeUsecase = {
  setInitialTheme: () => void;
  toggleTheme: () => void;
};

export const implThemeUsecase = ({
  themeController,
}: {
  themeController: {
    loadSavedTheme: () => 'light' | 'dark' | null;
    saveTheme: (theme: 'light' | 'dark') => void;
  };
}): ThemeUsecase => {
  return {
    setInitialTheme: () => {
      const theme = themeController.loadSavedTheme() ?? 'light';
      themeController.saveTheme(theme);
    },
    toggleTheme: () => {
      const theme = themeController.loadSavedTheme() ?? 'light';
      const newTheme = theme === 'light' ? 'dark' : 'light';
      themeController.saveTheme(newTheme);
    },
  };
};
