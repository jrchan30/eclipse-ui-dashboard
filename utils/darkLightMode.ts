export enum Theme {
  dark = 'dark',
  light = 'light',
}

export const getCurrentTheme = () => {
  if (
    localStorage.theme === Theme.dark ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return Theme.dark;
  }
  return Theme.light;
};

export const initializeTheme = () => {
  const theme = getCurrentTheme();
  if (theme) {
    setThemeLocalStorageAndDocument(theme);
  }
};

export const setThemeLocalStorageAndDocument = (theme: Theme) => {
  localStorage.theme = theme;
  if (theme === Theme.dark) {
    document.documentElement.classList.add(Theme.dark);
  } else {
    document.documentElement.classList.remove(Theme.dark);
  }
};

export default {
  getCurrentTheme,
  initializeTheme,
};
