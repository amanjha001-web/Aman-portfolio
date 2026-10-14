export const revealVariants = {
  hidden: {
    opacity: 0,
    transform: "translateY(28px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
  },
};

export const revealTransition = {
  duration: 700,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
};

export const staggerDelay = (index, interval = 100) =>
  Math.max(0, index) * interval;
