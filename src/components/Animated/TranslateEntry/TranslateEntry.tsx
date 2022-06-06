import { motion } from 'framer-motion';

import type { TranslateEntryProps } from './types';

export const TranslateEntry = ({
  on,
  delay,
  children,
  ...props
}: TranslateEntryProps) => {
  switch (on) {
    case 'XAxis':
      return (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { type: 'tween', delay: delay }
          }}
          {...props}
        >
          {children}
        </motion.div>
      );

    case 'YAxis':
      return (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: 'tween', delay: delay }
          }}
          {...props}
        >
          {children}
        </motion.div>
      );

    default:
      return <>{children}</>;
  }
};
