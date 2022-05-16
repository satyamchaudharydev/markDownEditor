import { React, useRef } from "react";
import { motion } from "framer-motion";
import { useEditor } from "../context/Editor";
function Splitter() {
  const { drag, setDrag } = useEditor();
  const widthRef = useRef(null);

  function onPan(event, info) {
    console.log(info.point.x);
    setDrag(`${info.point.x+300}px`);
  }
  return (
    <motion.div ref={widthRef} onPan={onPan} className="spliter"></motion.div>
  );
}

export default Splitter;
