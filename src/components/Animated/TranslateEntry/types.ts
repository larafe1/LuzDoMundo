import type { ReactNode } from 'react';

import type { HTMLMotionProps } from 'framer-motion';

type AxisAnimation = 'XAxis' | 'YAxis';

type ComponentProps = {
  children: ReactNode;
};

export type TranslateEntryProps = {
  on: AxisAnimation;
  delay?: number;
} & ComponentProps &
  HTMLMotionProps<'div'>;
