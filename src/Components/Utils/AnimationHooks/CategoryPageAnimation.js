export const filterVariants = {
  hidden: {
    width: 0,
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.3,
      spring: 0.3,
    },
  },
  visible: {
    width: "100%",
    display: "block",
    opacity: 1,
    transition: {
      duration: 0.3,
      spring: 0.3,
    },
  },
  exit: {
    width: 0,
  },
};

export const productVariants = {
  hidden: {
    width: "100%",
  },
  visible: {
    width: 0,
  },
  exit: {
    width: "100%",
  },
};

export const animation = (variants) => {
  return {
    initial: "hidden",
    animate: open === true ? "visible" : "hidden",
    exit: "exit",
    variants,
  };
};
