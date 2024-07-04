import { useState, useEffect } from 'react';
import ThemeContext from '@hooks/useTheme';
import { colors } from './constants';
import { Theme } from '@hooks/types';
import { ThemeProviderProps } from './types';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const [themeColor, setThemeColor] = useState<Theme>(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setThemeColor(getRandomColor());
    }, 240000);

    return () => clearInterval(interval);
  }, []);

  return <ThemeContext.Provider value={themeColor}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
