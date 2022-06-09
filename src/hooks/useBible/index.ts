import { useContext } from 'react';

import { BibleContext } from '@/providers';

export const useBible = () => {
  const ctx = useContext(BibleContext);
  return ctx;
};
