import { motion } from 'framer-motion';

import type { FadeEntryProps } from './types';

export const FadeEntry = ({
  delay,
  transitionType,
  alignRow,
  children,
  ...props
}: FadeEntryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { type: transitionType || 'spring', delay: delay }
      }}
      style={alignRow ? { display: 'flex', alignItems: 'center' } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};
