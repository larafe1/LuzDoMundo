import type { ReactNode } from 'react';

import type { HTMLMotionProps } from 'framer-motion';

type TransitionType = 'spring' | 'timing' | 'tween';

type ComponentProps = {
  children: ReactNode;
};

export type FadeEntryProps = {
  delay?: number;
  transitionType?: TransitionType;
  alignRow?: boolean;
} & ComponentProps &
  HTMLMotionProps<'div'>;
