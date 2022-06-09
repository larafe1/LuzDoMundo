import { ThemeProvider } from 'styled-components';

import { BibleProvider } from '@/providers';
import { theme } from '@/styles';

import type { AppProviderProps } from './types';

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <BibleProvider>{children}</BibleProvider>
    </ThemeProvider>
  );
};
