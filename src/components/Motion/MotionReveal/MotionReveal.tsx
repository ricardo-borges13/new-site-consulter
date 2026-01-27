import { motion } from 'framer-motion';

type MotionRevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export const MotionReveal = ({ children, delay = 0 }: MotionRevealProps) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
