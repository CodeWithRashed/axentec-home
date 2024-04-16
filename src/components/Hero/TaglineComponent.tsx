"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const TaglineComponent = () => {
  let ref = useRef(null);
  let isInView = useInView(ref);
  let animationControls = useAnimation();

  const variant = {
    initial: {
      x: -550,
    },
    animate: {
      x: 0,
    },
  };

  useEffect(() => {
    if (isInView) {
      animationControls.start("animate");
    }
  }, [animationControls, isInView]);

  return (
    <div ref={ref}>
      <div className="container mx-auto py-10 group uppercase">
        <div className="flex text-[96px] font-bold text-white transition-transform duration-500 group-hover:translate-x-[60px]">
          <div className="overflow-hidden">
            <motion.h1
              variants={variant}
              initial="initial"
              animate={animationControls}
              transition={{ duration: 1.5 }}
            >
              Innovate,
            </motion.h1>{" "}
          </div>
          &nbsp;
          <div className="overflow-hidden">
            <motion.h1
              variants={variant}
              initial="initial"
              animate={animationControls}
              transition={{ duration: 1.5 }}
            >
              Integrate
            </motion.h1>
          </div>
        </div>

        <div className="flex justify-end text-[96px] font-bold text-white">
          <div className="overflow-hidden transition-transform duration-500 group-hover:translate-x-[-60px]">
            <motion.h1
              variants={variant}
              initial="initial"
              animate={animationControls}
              transition={{ duration: 1.5 }}
            >
              Inspire
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaglineComponent;