import { motion } from "framer-motion";
import React from "react";

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(15, 23, 42, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(15, 23, 42, 1)",
  },
};

export default function Logo() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-24 sm:w-28 md:w-36"
        zoomAndPan="magnify"
        viewBox="0 0 375 112.499997"
        height={45}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <g />
          <clipPath id="2ab8b5b94d">
            <path
              d="M 304 11 L 374.167969 11 L 374.167969 89 L 304 89 Z M 304 11 "
              clipRule="nonzero"
            />
          </clipPath>
        </defs>
        <g fill="#1e293b" fillOpacity={1}>
          <g transform="translate(0.277879, 88.800592)">
            <g>
              <motion.path
                d="M 8.90625 -77.84375 C 14.300781 -78.539062 19.832031 -78.890625 25.5 -78.890625 C 36.0625 -78.890625 44.085938 -76.414062 49.578125 -71.46875 C 55.066406 -66.519531 57.8125 -59.117188 57.8125 -49.265625 C 57.8125 -40.453125 54.804688 -33.484375 48.796875 -28.359375 C 43.171875 -23.546875 35.929688 -21.140625 27.078125 -21.140625 C 26.066406 -21.140625 24.957031 -21.195312 23.75 -21.3125 L 23.75 0 L 8.90625 0 Z M 27.25 -64.859375 C 26.082031 -64.859375 24.914062 -64.820312 23.75 -64.75 L 23.75 -34.125 C 25 -33.96875 26.515625 -33.890625 28.296875 -33.890625 C 30.085938 -33.890625 31.953125 -34.265625 33.890625 -35.015625 C 35.828125 -35.773438 37.457031 -36.835938 38.78125 -38.203125 C 41.53125 -41.035156 42.90625 -44.757812 42.90625 -49.375 C 42.90625 -59.695312 37.6875 -64.859375 27.25 -64.859375 Z M 27.25 -64.859375 "
                variants={svgIconVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  default: {
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                  fill: {
                    duration: 2,
                    ease: "easeIn",
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                }}
                stroke="#000"
                strokeWidth="2"
              />
            </g>
          </g>
        </g>
        <g fill="#1e293b" fillOpacity={1}>
          <g transform="translate(76.710955, 88.800592)">
            <g>
              <motion.path
                d="M 11.8125 -77.671875 C 15.695312 -77.515625 18.046875 -77.4375 18.859375 -77.4375 L 23.0625 -77.4375 C 25.113281 -77.4375 26.757812 -77.59375 28 -77.90625 L 27.953125 0 L 11.8125 0 Z M 11.8125 -77.671875 "
                variants={svgIconVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  default: {
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                  fill: {
                    duration: 2,
                    ease: "easeIn",
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                }}
                stroke="#000"
                strokeWidth="2"
              />
            </g>
          </g>
        </g>
        <g fill="#1e293b" fillOpacity={1}>
          <g transform="translate(133.231115, 88.800592)">
            <g>
              <motion.path
                d="M 44.71875 -78.890625 C 51.976562 -78.890625 58.171875 -77.628906 63.296875 -75.109375 L 63.296875 -57.296875 L 63.171875 -57.171875 C 61.003906 -60.515625 56.425781 -62.726562 49.4375 -63.8125 C 47.375 -64.164062 44.769531 -64.34375 41.625 -64.34375 C 38.488281 -64.34375 35.40625 -63.75 32.375 -62.5625 C 29.34375 -61.382812 26.859375 -59.707031 24.921875 -57.53125 C 21.148438 -53.300781 19.265625 -47.265625 19.265625 -39.421875 C 19.265625 -30.296875 21.65625 -23.503906 26.4375 -19.046875 C 30.394531 -15.316406 35.632812 -13.453125 42.15625 -13.453125 C 49.53125 -13.453125 55.507812 -15.023438 60.09375 -18.171875 C 61.757812 -19.296875 63.175781 -20.691406 64.34375 -22.359375 L 64.515625 -22.25 L 64.515625 -5.9375 C 58.578125 -1.007812 50.582031 1.453125 40.53125 1.453125 C 28.6875 1.453125 19.40625 -2.3125 12.6875 -9.84375 C 6.25 -17.019531 3.03125 -26.53125 3.03125 -38.375 C 3.03125 -50.90625 6.5625 -60.785156 13.625 -68.015625 C 20.769531 -75.265625 31.132812 -78.890625 44.71875 -78.890625 Z M 44.71875 -78.890625 "
                variants={svgIconVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  default: {
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                  fill: {
                    duration: 2,
                    ease: "easeIn",
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                }}
                stroke="#000"
                strokeWidth="2"
              />
            </g>
          </g>
        </g>
        <g fill="#1e293b" fillOpacity={1}>
          <g transform="translate(219.096627, 88.800592)">
            <g>
              <motion.path
                d="M 24.859375 0.34375 C 22.179688 0.113281 18.765625 0 14.609375 0 L 10.015625 0 L 10.015625 -77.671875 L 12.34375 -77.5625 C 13.976562 -77.476562 15.203125 -77.4375 16.015625 -77.4375 L 17.703125 -77.4375 C 21.117188 -77.4375 23.503906 -77.59375 24.859375 -77.90625 L 24.859375 -45.015625 L 48.453125 -77.671875 C 50.929688 -77.515625 53.023438 -77.4375 54.734375 -77.4375 L 57.9375 -77.4375 C 61.9375 -77.4375 64.789062 -77.59375 66.5 -77.90625 L 44.015625 -48.5625 L 66.140625 -4.65625 C 67.078125 -2.519531 67.953125 -0.96875 68.765625 0 L 65.21875 0 C 57.019531 0 51.914062 0.15625 49.90625 0.46875 C 49.476562 -2.132812 48.894531 -4.40625 48.15625 -6.34375 L 33.3125 -34.640625 L 24.859375 -23.578125 Z M 24.859375 0.34375 "
                variants={svgIconVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  default: {
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                  fill: {
                    duration: 2,
                    ease: "easeIn",
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                }}
                stroke="#000"
                strokeWidth="2"
              />
            </g>
          </g>
        </g>
        <g clipPath="url(#2ab8b5b94d)">
          <g fill="#1e293b" fillOpacity={1}>
            <g transform="translate(305.253261, 88.800592)">
              <g>
                <motion.path
                  d="M 26.265625 0 C 26.765625 -1.507812 27.015625 -5.039062 27.015625 -10.59375 L 27.015625 -26.78125 C 20.296875 -41.570312 16.003906 -50.800781 14.140625 -54.46875 C 12.285156 -58.132812 10.71875 -61.035156 9.4375 -63.171875 C 5.394531 -70.003906 2.957031 -73.925781 2.125 -74.9375 C 1.289062 -75.945312 0.445312 -76.78125 -0.40625 -77.4375 L 19.6875 -77.4375 C 20.113281 -76.664062 20.691406 -75.519531 21.421875 -74 L 35.515625 -44.25 C 36.179688 -45.882812 36.957031 -47.707031 37.84375 -49.71875 C 46.3125 -67.925781 50.601562 -77.164062 50.71875 -77.4375 L 69.9375 -77.4375 C 67.957031 -75.851562 65.53125 -72.515625 62.65625 -67.421875 C 61.757812 -65.910156 60.863281 -64.1875 59.96875 -62.25 L 46.8125 -34.8125 C 45.34375 -31.519531 44.082031 -28.550781 43.03125 -25.90625 L 43.03125 -9.203125 C 43.03125 -5.316406 43.265625 -2.25 43.734375 0 Z M 26.265625 0 "
                  variants={svgIconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: {
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    },
                    fill: {
                      duration: 2,
                      ease: "easeIn",
                      delay: 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    },
                  }}
                  stroke="#000"
                  strokeWidth="2"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
