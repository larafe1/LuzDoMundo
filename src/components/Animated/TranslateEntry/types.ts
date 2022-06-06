import type { ReactNode } from 'react';

import type { HTMLMotionProps } from 'framer-motion';

type AxisAnimation = 'XAxis' | 'YAxis';

type TransitionType = 'spring' | 'timing' | 'tween';

type ComponentProps = {
  children: ReactNode;
};

export type TranslateEntryProps = {
  on: AxisAnimation;
  delay?: number;
  transitionType?: TransitionType;
  alignRow?: boolean;
} & ComponentProps &
  HTMLMotionProps<'div'>;
