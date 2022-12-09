import React, { useState } from "react";
import { motion } from "framer-motion";
import bacteria from "../../Images/bacteria.svg";
import "./background.css";

const svgVariants = {};

function Background(props) {
  const [posX, setPosX] = useState(450);

  const handleMovement = () => {
    for (var i = 100; i < 500; ++i) {
      setPosX(i);
    }
  };

  return (
    <div className="bacteria">
      <motion.img
        initial={{
          x: 450,
          y: 0,
        }}
        src={bacteria}
        animate={{
          x: posX,
          y: 0,
        }}
        transition={{
          ease: "linear",
          // duration: 1,
          // repeat: Infinity,
        }}
        onAnimationComplete={() => {
          setPosX(posX + 3);
        }}
      />
    </div>
  );
}

export default Background;