import customTheme1 from '@header/theme/custom-theme1.json';
import customTheme2 from '@header/theme/custom-theme2.json';

export const useDefineTheme = (val: number) => {
  const root = document.documentElement;
  const customTheme = val === 1 ? customTheme1 : customTheme2;
  for (const key in customTheme) {
    root.style.setProperty(key, customTheme[key as keyof typeof customTheme]);
  }
};
