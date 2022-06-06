import type { ReactNode } from 'react';

import type { HTMLMotionProps } from 'framer-motion';

type ComponentProps = {
  children: ReactNode;
};

export type FadeEntryProps = {
  delay?: number;
} & ComponentProps &
  HTMLMotionProps<'div'>;
