import { ThemeProvider } from 'styled-components';

import { theme } from '@/styles';

import type { AppProviderProps } from './types';

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
