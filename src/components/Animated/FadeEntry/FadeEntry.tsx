import { motion } from 'framer-motion';

import type { FadeEntryProps } from './types';

export const FadeEntry = ({ delay, children }: FadeEntryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { type: 'tween', delay: delay }
      }}
    >
      {children}
    </motion.div>
  );
};
