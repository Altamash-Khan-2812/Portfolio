const fadeIn = (direction = "up", delay = 0, distance = 40) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 2,
        delay,
        ease: "easeOut",
      },
    },
  };
};

export const fadeWithNoSize = (delay = 0) => {
  return {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay, ease: "easeOut" },
    },
  };
};

export default fadeIn;
