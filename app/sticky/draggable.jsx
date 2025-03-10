import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

function Draggable({ containerRef }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const latestPos = useRef({ x: 0, y: 0 });

  const handleMouseUp = (event, info) => {
    // latestPos.current = { x: info.point.x, y: info.point.y };
    console.log(latestPos)
    setPosition(latestPos.current);
  };

  return (
    <motion.div
      drag
      onDragEnd={handleMouseUp}
      dragConstraints={containerRef}
      dragElastic={0.2}
      dragMomentum={false}
      whileDrag={{ scale: 1.05 }}
      className="w-52 h-64 bg-gray-300 rounded-xl"
    >
      x: {position.x}
      y: {position.y}
    </motion.div>
  );
}

export default Draggable;
