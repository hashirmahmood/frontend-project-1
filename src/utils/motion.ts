export const parentVar = {
  hidden: {},
  show: {
    transition: {},
  },
};
export const fadeIn = (
  amount: number,
  direction: string,
  type: string,
  duration: number,
  delay: number
) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? amount : direction === "down" ? -amount : 0,
    x: direction === "left" ? amount : direction === "right" ? -amount : 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      duration: duration,
      delay: delay,
      ease: "easeOut",
    },
  },
});
export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.7,
    },
  },
};
export const coverVariants = {
  hidden: {
    width: 0,
  },
  show: {
    width: "100vw",
    transition: {
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      when: "afterChildren",
    },
  },
};
export const navChildVar = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
export const section7Cover = {
  hidden: {
    height: 0,
  },
  show: {
    height: "100%",
    transition: {
      when: "beforeChildren",
    },
  },
  exit: {
    height: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
