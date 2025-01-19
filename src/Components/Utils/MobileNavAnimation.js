export const navMobile = {
  hidden: {
    x: "-100%",
    transition: {
      staggerChildren: 0.5,
      type: "tween",
      duration: 1.5,
    },
  },
  enter: {
    x: 0,
    transition: {
      staggerChildren: 0.5,
      type: "tween",
      duration: 1.5,
    },
  },
  exit: {
    x: "-100%",
    transition: {
      staggerChildren: 0.5,
      type: "tween",
      duration: 1.5,
    },
  },
};

export const navCatList = {
  hidden: {
    y: 0,
    height: "100vh",
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
  enter: {
    y: "-100vh",
    height: 0,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
  exit: {
    y: 0,
    height: "100vh",
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

export const navCategory = {
  hidden: {
    y: "100%",
    height: "100vh",

    transition: {
      duration: 1.5,
    },
  },
  enter: {
    y: 0,
    // height: "100vh",
    backgroundColor: "red",
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    x: "100%",
    height: 0,
    transition: {
      duration: 1.5,
    },
  },
};
